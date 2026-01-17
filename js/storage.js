/**
 * 데이터 저장 및 관리 모듈
 * LocalStorage + Table API 연동
 */

const Storage = {
    // LocalStorage 키
    KEYS: {
        USER_DATA: 'railway_user_data',
        SETTINGS: 'railway_settings',
        WRONG_ANSWERS: 'railway_wrong_answers',
        STUDY_LOG: 'railway_study_log',
        GAME_DATA: 'railway_game_data',
        CHAPTER_PROGRESS: 'railway_chapter_progress',
        QUIZ_SESSIONS: 'railway_quiz_sessions',
        LAST_SESSION: 'railway_last_session'
    },

    // 기본 사용자 데이터
    defaultUserData: {
        totalSolved: 0,
        totalCorrect: 0,
        currentStreak: 0,
        bestStreak: 0,
        studyDays: [],
        subjectStats: {
            law: { solved: 0, correct: 0 },
            urban: { solved: 0, correct: 0 },
            emu: { solved: 0, correct: 0 },
            theory: { solved: 0, correct: 0 },
            emergency: { solved: 0, correct: 0 }
        },
        lastStudyDate: null,
        createdAt: new Date().toISOString()
    },

    // 기본 설정
    defaultSettings: {
        mode: 'focus', // 'focus' or 'game'
        questionCount: 10,
        questionOrder: 'random', // 'random', 'sequential', 'wrong-first'
        instantFeedback: true,
        soundEnabled: true
    },

    // 기본 게임 데이터
    defaultGameData: {
        level: 1,
        xp: 0,
        totalXP: 0,
        maxCombo: 0,
        badges: [],
        unlockedBadges: []
    },

    // ==========================================
    // LocalStorage 기본 함수
    // ==========================================
    
    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Storage save error:', e);
            return false;
        }
    },

    load(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error('Storage load error:', e);
            return defaultValue;
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage remove error:', e);
            return false;
        }
    },

    // ==========================================
    // 사용자 데이터 관리
    // ==========================================

    getUserData() {
        const data = this.load(this.KEYS.USER_DATA, { ...this.defaultUserData });
        
        // 기존 한글 subject 키를 영문으로 마이그레이션
        if (data.subjectStats) {
            const migrations = {
                '운전이론': 'theory',
                '전기동차 구조 및 기능': 'emu',
                'railway_related_law': 'law',
                'emergency_ch1': 'emergency',
                'emergency_ch2': 'emergency',
                'emergency_ch3': 'emergency'
            };
            
            let needsSave = false;
            for (const [oldKey, newKey] of Object.entries(migrations)) {
                if (data.subjectStats[oldKey]) {
                    // 기존 데이터를 새 키로 합산
                    if (!data.subjectStats[newKey]) {
                        data.subjectStats[newKey] = { solved: 0, correct: 0 };
                    }
                    data.subjectStats[newKey].solved += data.subjectStats[oldKey].solved || 0;
                    data.subjectStats[newKey].correct += data.subjectStats[oldKey].correct || 0;
                    delete data.subjectStats[oldKey];
                    needsSave = true;
                }
            }
            
            // 기본 키 확보
            const defaultKeys = ['law', 'urban', 'emu', 'theory', 'emergency'];
            for (const key of defaultKeys) {
                if (!data.subjectStats[key]) {
                    data.subjectStats[key] = { solved: 0, correct: 0 };
                    needsSave = true;
                }
            }
            
            if (needsSave) {
                this.saveUserData(data);
            }
        }
        
        return data;
    },

    saveUserData(data) {
        return this.save(this.KEYS.USER_DATA, data);
    },

    updateUserStats(isCorrect, subjectId) {
        const data = this.getUserData();
        const today = new Date().toISOString().split('T')[0];

        // 전체 통계 업데이트
        data.totalSolved++;
        if (isCorrect) {
            data.totalCorrect++;
            data.currentStreak++;
            data.bestStreak = Math.max(data.bestStreak, data.currentStreak);
        } else {
            data.currentStreak = 0;
        }

        // 과목별 통계 업데이트
        if (data.subjectStats[subjectId]) {
            data.subjectStats[subjectId].solved++;
            if (isCorrect) {
                data.subjectStats[subjectId].correct++;
            }
        }

        // 학습 일수 업데이트
        if (!data.studyDays.includes(today)) {
            data.studyDays.push(today);
        }
        data.lastStudyDate = today;

        this.saveUserData(data);
        return data;
    },

    getTodayStats() {
        const data = this.getUserData();
        const log = this.getStudyLog();
        const today = new Date().toISOString().split('T')[0];
        
        const todayLog = log.filter(item => item.date === today);
        const solved = todayLog.length;
        const correct = todayLog.filter(item => item.isCorrect).length;
        
        return {
            solved,
            correct,
            accuracy: solved > 0 ? Math.round((correct / solved) * 100) : 0,
            streak: data.currentStreak
        };
    },

    // ==========================================
    // 설정 관리
    // ==========================================

    getSettings() {
        return this.load(this.KEYS.SETTINGS, { ...this.defaultSettings });
    },

    saveSettings(settings) {
        return this.save(this.KEYS.SETTINGS, settings);
    },

    updateSetting(key, value) {
        const settings = this.getSettings();
        settings[key] = value;
        return this.saveSettings(settings);
    },

    // ==========================================
    // 오답 노트 관리
    // ==========================================

    getWrongAnswers() {
        return this.load(this.KEYS.WRONG_ANSWERS, []);
    },

    addWrongAnswer(questionId, userAnswer) {
        const wrongAnswers = this.getWrongAnswers();
        const existing = wrongAnswers.find(w => w.questionId === questionId);
        
        if (existing) {
            existing.count++;
            existing.lastWrong = new Date().toISOString();
            existing.userAnswer = userAnswer;
        } else {
            wrongAnswers.push({
                questionId,
                userAnswer,
                count: 1,
                firstWrong: new Date().toISOString(),
                lastWrong: new Date().toISOString(),
                mastered: false
            });
        }
        
        this.save(this.KEYS.WRONG_ANSWERS, wrongAnswers);
        return wrongAnswers;
    },

    markAsMastered(questionId) {
        const wrongAnswers = this.getWrongAnswers();
        const item = wrongAnswers.find(w => w.questionId === questionId);
        if (item) {
            item.mastered = true;
            item.masteredAt = new Date().toISOString();
        }
        this.save(this.KEYS.WRONG_ANSWERS, wrongAnswers);
    },

    removeWrongAnswer(questionId) {
        let wrongAnswers = this.getWrongAnswers();
        wrongAnswers = wrongAnswers.filter(w => w.questionId !== questionId);
        this.save(this.KEYS.WRONG_ANSWERS, wrongAnswers);
    },

    clearWrongAnswers() {
        this.save(this.KEYS.WRONG_ANSWERS, []);
    },

    getWrongQuestions() {
        const wrongAnswers = this.getWrongAnswers();
        return wrongAnswers
            .filter(w => !w.mastered)
            .map(w => {
                const question = getQuestionById(w.questionId);
                return question ? { ...question, wrongData: w } : null;
            })
            .filter(q => q !== null);
    },

    // ==========================================
    // 학습 로그 관리
    // ==========================================

    getStudyLog() {
        return this.load(this.KEYS.STUDY_LOG, []);
    },

    addStudyLog(questionId, isCorrect, subjectId, timeSpent = 0) {
        const log = this.getStudyLog();
        log.push({
            questionId,
            isCorrect,
            subjectId,
            timeSpent,
            date: new Date().toISOString().split('T')[0],
            timestamp: new Date().toISOString()
        });
        
        // 30일 이내 데이터만 유지 + 최대 1000개 제한
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const cutoffDate = thirtyDaysAgo.toISOString().split('T')[0];
        
        // 30일 이내 데이터만 필터링
        const filteredLog = log.filter(item => item.date >= cutoffDate);
        
        // 그래도 1000개 초과하면 최신 1000개만
        const finalLog = filteredLog.length > 1000 
            ? filteredLog.slice(-1000) 
            : filteredLog;
        
        this.save(this.KEYS.STUDY_LOG, finalLog);
        return finalLog;
    },

    getWeeklyStats() {
        const log = this.getStudyLog();
        const today = new Date();
        const weekAgo = new Date(today);
        weekAgo.setDate(weekAgo.getDate() - 6);
        
        const weekStats = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(weekAgo);
            date.setDate(date.getDate() + i);
            const dateStr = date.toISOString().split('T')[0];
            
            const dayLog = log.filter(item => item.date === dateStr);
            weekStats.push({
                date: dateStr,
                dayName: ['일', '월', '화', '수', '목', '금', '토'][date.getDay()],
                solved: dayLog.length,
                correct: dayLog.filter(item => item.isCorrect).length
            });
        }
        
        return weekStats;
    },

    // ==========================================
    // 게임 데이터 관리
    // ==========================================

    getGameData() {
        return this.load(this.KEYS.GAME_DATA, { ...this.defaultGameData });
    },

    saveGameData(data) {
        return this.save(this.KEYS.GAME_DATA, data);
    },

    addXP(amount) {
        const data = this.getGameData();
        data.xp += amount;
        data.totalXP += amount;
        
        // 레벨업 체크 (루프 내에서 xpForNextLevel 재계산)
        let xpForNextLevel = this.getXPForLevel(data.level + 1);
        while (data.xp >= xpForNextLevel) {
            data.xp -= xpForNextLevel;
            data.level++;
            xpForNextLevel = this.getXPForLevel(data.level + 1); // 다음 레벨 XP 재계산
        }
        
        this.saveGameData(data);
        return data;
    },

    getXPForLevel(level) {
        // 레벨 1-100까지 지원, 단계별 난이도 조정
        if (level <= 10) {
            // 초반: 빠른 성장 (동기부여)
            return Math.floor(50 * Math.pow(1.3, level - 1));
        } else if (level <= 30) {
            // 초중반: 중간 속도
            return Math.floor(200 * Math.pow(1.25, level - 10));
        } else if (level <= 60) {
            // 중반: 안정적 성장
            return Math.floor(800 * Math.pow(1.2, level - 30));
        } else if (level <= 85) {
            // 후반: 느린 성장
            return Math.floor(3000 * Math.pow(1.15, level - 60));
        } else {
            // 최후반: 매우 느린 성장 (Lv 86-100)
            return Math.floor(10000 * Math.pow(1.1, level - 85));
        }
    },

    // 레벨에 따른 등급 계산 (5레벨 단위)
    getLevelTier(level) {
        // 1~4: 신입
        if (level <= 4) return { tier: 'rookie', name: '신입', icon: '🌱', color: '#86EFAC' };
        // 5~9: 견습생
        if (level <= 9) return { tier: 'trainee', name: '견습생', icon: '📗', color: '#10B981' };
        // 10~14: 수습 기관사
        if (level <= 14) return { tier: 'apprentice', name: '수습 기관사', icon: '🔧', color: '#34D399' };
        // 15~19: 초급 기관사
        if (level <= 19) return { tier: 'junior', name: '초급 기관사', icon: '⚙️', color: '#3B82F6' };
        // 20~24: 중급 기관사
        if (level <= 24) return { tier: 'intermediate', name: '중급 기관사', icon: '🚃', color: '#60A5FA' };
        // 25~29: 상급 기관사
        if (level <= 29) return { tier: 'senior', name: '상급 기관사', icon: '🚋', color: '#818CF8' };
        // 30~34: 고급 기관사
        if (level <= 34) return { tier: 'advanced', name: '고급 기관사', icon: '🚆', color: '#8B5CF6' };
        // 35~39: 숙련 기관사
        if (level <= 39) return { tier: 'skilled', name: '숙련 기관사', icon: '🚄', color: '#A78BFA' };
        // 40~44: 베테랑 기관사
        if (level <= 44) return { tier: 'veteran', name: '베테랑 기관사', icon: '🚅', color: '#F59E0B' };
        // 45~49: 전문 기관사
        if (level <= 49) return { tier: 'expert', name: '전문 기관사', icon: '⭐', color: '#FBBF24' };
        // 50~54: 시니어 기관사
        if (level <= 54) return { tier: 'seniorpro', name: '시니어 기관사', icon: '🌟', color: '#F97316' };
        // 55~59: 엘리트 기관사
        if (level <= 59) return { tier: 'elite', name: '엘리트 기관사', icon: '💫', color: '#EF4444' };
        // 60~64: 마스터 기관사
        if (level <= 64) return { tier: 'master', name: '마스터 기관사', icon: '🏅', color: '#DC2626' };
        // 65~69: 그랜드마스터 기관사
        if (level <= 69) return { tier: 'grandmaster', name: '그랜드마스터 기관사', icon: '🎖️', color: '#EC4899' };
        // 70~74: 챔피언 기관사
        if (level <= 74) return { tier: 'champion', name: '챔피언 기관사', icon: '🏆', color: '#DB2777' };
        // 75~79: 영웅이 된 기관사
        if (level <= 79) return { tier: 'hero', name: '영웅이 된 기관사', icon: '🦸', color: '#BE185D' };
        // 80~84: 전설로 남은 기관사
        if (level <= 84) return { tier: 'legendary', name: '전설로 남은 기관사', icon: '🌠', color: '#9333EA' };
        // 85~89: 신화 속의 기관사
        if (level <= 89) return { tier: 'mythic', name: '신화 속의 기관사', icon: '🔱', color: '#7C3AED' };
        // 90~94: 초월한 기관사
        if (level <= 94) return { tier: 'transcendent', name: '초월한 기관사', icon: '✨', color: '#6D28D9' };
        // 95~99: 불멸의 기관사
        if (level <= 99) return { tier: 'immortal', name: '불멸의 기관사', icon: '🔥', color: '#5B21B6' };
        // 100: 모든 기관사의 신
        return { tier: 'god', name: '모든 기관사의 신', icon: '💎', color: '#A855F7' };
    },

    updateMaxCombo(combo) {
        const data = this.getGameData();
        if (combo > data.maxCombo) {
            data.maxCombo = combo;
            this.saveGameData(data);
        }
        return data;
    },

    unlockBadge(badgeId) {
        const data = this.getGameData();
        if (!data.unlockedBadges.includes(badgeId)) {
            data.unlockedBadges.push(badgeId);
            this.saveGameData(data);
            return true;
        }
        return false;
    },

    // ==========================================
    // 데이터 내보내기/초기화
    // ==========================================

    exportData() {
        return {
            userData: this.getUserData(),
            settings: this.getSettings(),
            wrongAnswers: this.getWrongAnswers(),
            studyLog: this.getStudyLog(),
            gameData: this.getGameData(),
            exportedAt: new Date().toISOString()
        };
    },

    resetAllData() {
        this.save(this.KEYS.USER_DATA, { ...this.defaultUserData });
        this.save(this.KEYS.SETTINGS, { ...this.defaultSettings });
        this.save(this.KEYS.WRONG_ANSWERS, []);
        this.save(this.KEYS.STUDY_LOG, []);
        this.save(this.KEYS.GAME_DATA, { ...this.defaultGameData });
        this.save(this.KEYS.CHAPTER_PROGRESS, {});
        this.save(this.KEYS.QUIZ_SESSIONS, {});
        this.remove(this.KEYS.LAST_SESSION);
    },

    // ==========================================
    // 단원별 진행상태 관리
    // ==========================================

    // 전체 단원 진행상태 가져오기
    getAllChapterProgress() {
        return this.load(this.KEYS.CHAPTER_PROGRESS, {});
    },

    // 특정 과목의 단원 진행상태 가져오기
    getChapterProgress(subjectId) {
        const all = this.getAllChapterProgress();
        return all[subjectId] || {};
    },

    // 단원 진행상태 저장
    saveChapterProgress(subjectId, chapterNum, currentIndex, totalQuestions) {
        const all = this.getAllChapterProgress();
        
        if (!all[subjectId]) {
            all[subjectId] = {};
        }
        
        all[subjectId][chapterNum] = {
            current: currentIndex,
            total: totalQuestions,
            lastUpdated: new Date().toISOString()
        };
        
        this.save(this.KEYS.CHAPTER_PROGRESS, all);
        return all[subjectId][chapterNum];
    },

    // 단원 완료 처리
    completeChapter(subjectId, chapterNum, totalQuestions) {
        return this.saveChapterProgress(subjectId, chapterNum, totalQuestions, totalQuestions);
    },

    // 단원 진행상태 초기화
    resetChapterProgress(subjectId, chapterNum) {
        const all = this.getAllChapterProgress();
        
        if (all[subjectId] && all[subjectId][chapterNum]) {
            delete all[subjectId][chapterNum];
            this.save(this.KEYS.CHAPTER_PROGRESS, all);
        }
        
        // 해당 세션도 삭제
        this.deleteQuizSession(`${subjectId}_${chapterNum}`);
    },

    // 과목 전체 진행상태 초기화
    resetSubjectProgress(subjectId) {
        const all = this.getAllChapterProgress();
        
        if (all[subjectId]) {
            delete all[subjectId];
            this.save(this.KEYS.CHAPTER_PROGRESS, all);
        }
        
        // 해당 과목의 모든 세션 삭제
        const sessions = this.getAllQuizSessions();
        Object.keys(sessions).forEach(key => {
            if (key.startsWith(subjectId + '_') || key === subjectId) {
                delete sessions[key];
            }
        });
        this.save(this.KEYS.QUIZ_SESSIONS, sessions);
    },

    // 과목별 진행 상태 요약 (카드/모달용)
    getSubjectProgressSummary(subjectId) {
        const progress = this.getChapterProgress(subjectId);
        const sessions = this.getAllQuizSessions();
        
        let totalCompleted = 0;
        let totalChapters = 0;
        let hasAnyProgress = false;
        
        // 해당 과목의 챕터 수 계산 (App.getSubjectChapters 대신 직접 계산)
        const subjectQuestions = typeof getQuestionsBySubject !== 'undefined' ? getQuestionsBySubject(subjectId) : [];
        const chapterSet = new Set();
        subjectQuestions.forEach(q => {
            if (q.chapter) chapterSet.add(q.chapter);
        });
        totalChapters = Math.max(chapterSet.size, Object.keys(progress).length);
        
        // 완료된 챕터 수 계산
        Object.keys(progress).forEach(chapterNum => {
            const chapterData = progress[chapterNum];
            if (chapterData.current > 0) hasAnyProgress = true;
            if (chapterData.current >= chapterData.total && chapterData.total > 0) {
                totalCompleted++;
            }
        });
        
        // 세션에서도 확인
        Object.keys(sessions).forEach(key => {
            if (key.startsWith(subjectId + '_')) {
                const session = sessions[key];
                if (session.answeredCount > 0) hasAnyProgress = true;
            }
        });
        
        return {
            hasProgress: hasAnyProgress,
            completedChapters: totalCompleted,
            totalChapters: totalChapters,
            isAllCompleted: totalChapters > 0 && totalCompleted >= totalChapters
        };
    },

    // ==========================================
    // 퀴즈 세션 관리
    // ==========================================

    // 모든 세션 가져오기
    getAllQuizSessions() {
        return this.load(this.KEYS.QUIZ_SESSIONS, {});
    },

    // 특정 세션 가져오기
    getQuizSession(sessionKey) {
        const sessions = this.getAllQuizSessions();
        return sessions[sessionKey] || null;
    },

    // 세션 저장
    saveQuizSession(sessionKey, sessionData) {
        const sessions = this.getAllQuizSessions();
        sessions[sessionKey] = {
            ...sessionData,
            updatedAt: Date.now()
        };
        this.save(this.KEYS.QUIZ_SESSIONS, sessions);
        
        // 마지막 세션으로 기록
        this.save(this.KEYS.LAST_SESSION, sessionKey);
        
        return sessions[sessionKey];
    },

    // 세션 삭제
    deleteQuizSession(sessionKey) {
        const sessions = this.getAllQuizSessions();
        if (sessions[sessionKey]) {
            delete sessions[sessionKey];
            this.save(this.KEYS.QUIZ_SESSIONS, sessions);
        }
        
        // 마지막 세션이었다면 다른 세션으로 교체
        const lastSession = this.load(this.KEYS.LAST_SESSION, null);
        if (lastSession === sessionKey) {
            const remainingKeys = Object.keys(sessions);
            if (remainingKeys.length > 0) {
                // 가장 최근 세션으로 변경
                const mostRecent = remainingKeys.reduce((a, b) => 
                    (sessions[a].updatedAt > sessions[b].updatedAt) ? a : b
                );
                this.save(this.KEYS.LAST_SESSION, mostRecent);
            } else {
                this.remove(this.KEYS.LAST_SESSION);
            }
        }
    },

    // 마지막 세션 가져오기
    getLastSession() {
        const lastKey = this.load(this.KEYS.LAST_SESSION, null);
        if (!lastKey) return null;
        
        const session = this.getQuizSession(lastKey);
        if (!session) return null;
        
        return {
            key: lastKey,
            ...session
        };
    },

    // 세션 키 생성
    createSessionKey(type, subjectId = null, chapterNum = null) {
        if (type === 'chapter' && subjectId && chapterNum) {
            return `${subjectId}_${chapterNum}`;
        } else if (type === 'subject' && subjectId) {
            return subjectId;
        } else if (type === 'random') {
            return 'random';
        } else if (type === 'wrong') {
            return 'wrong';
        }
        return 'unknown';
    },

    // 진행 중인 세션 목록 (이어서 풀기용)
    getActiveSessions() {
        const sessions = this.getAllQuizSessions();
        return Object.entries(sessions)
            .filter(([key, data]) => data.currentIndex < data.totalQuestions)
            .map(([key, data]) => ({ key, ...data }))
            .sort((a, b) => b.updatedAt - a.updatedAt);
    },

    // ==========================================
    // 사용자 ID (향후 서버 연동용)
    // ==========================================

    getUserId() {
        let userId = localStorage.getItem('railway_user_id');
        if (!userId) {
            userId = 'user_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('railway_user_id', userId);
        }
        return userId;
    }
};

// 초기화 시 기본 데이터 설정
(function initStorage() {
    if (!localStorage.getItem(Storage.KEYS.USER_DATA)) {
        Storage.saveUserData(Storage.defaultUserData);
    }
    if (!localStorage.getItem(Storage.KEYS.SETTINGS)) {
        Storage.saveSettings(Storage.defaultSettings);
    }
    if (!localStorage.getItem(Storage.KEYS.GAME_DATA)) {
        Storage.saveGameData(Storage.defaultGameData);
    }
})();
