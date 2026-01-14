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
        GAME_DATA: 'railway_game_data'
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
        totalXp: 0,
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
        return this.load(this.KEYS.USER_DATA, { ...this.defaultUserData });
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
        
        // 최근 1000개만 유지
        if (log.length > 1000) {
            log.splice(0, log.length - 1000);
        }
        
        this.save(this.KEYS.STUDY_LOG, log);
        return log;
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
        data.totalXp += amount;
        
        // 레벨업 체크
        const xpForNextLevel = this.getXPForLevel(data.level + 1);
        while (data.xp >= xpForNextLevel) {
            data.xp -= xpForNextLevel;
            data.level++;
        }
        
        this.saveGameData(data);
        return data;
    },

    getXPForLevel(level) {
        return Math.floor(100 * Math.pow(1.5, level - 1));
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
    },

    // ==========================================
    // Table API 연동 (서버 저장)
    // ==========================================

    async syncToServer() {
        try {
            const data = this.exportData();
            const response = await fetch('tables/user_progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: this.getUserId(),
                    data: JSON.stringify(data),
                    updated_at: new Date().toISOString()
                })
            });
            return response.ok;
        } catch (e) {
            console.error('Sync to server failed:', e);
            return false;
        }
    },

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

console.log('Storage module loaded');
