/**
 * 게이미피케이션 모듈
 * XP, 레벨, 배지, 콤보 시스템
 */

const Gamification = {
    currentCombo: 0,
    sessionXP: 0,

    // 배지 정의 (50개 이상)
    BADGES: [
        // ===== 진행도 배지 =====
        { id: 'first_step', name: '첫 걸음', icon: '👣', description: '첫 번째 문제 풀이', condition: (data) => data.totalSolved >= 1, tier: 'bronze' },
        { id: 'beginner', name: '초보 학습자', icon: '📚', description: '10문제 풀이', condition: (data) => data.totalSolved >= 10, tier: 'bronze' },
        { id: 'enthusiast', name: '열정적인 학습자', icon: '🔥', description: '50문제 풀이', condition: (data) => data.totalSolved >= 50, tier: 'silver' },
        { id: 'hundred_club', name: '백 문제 정복', icon: '💯', description: '100문제 풀이', condition: (data) => data.totalSolved >= 100, tier: 'silver' },
        { id: 'tri_centurion', name: '삼백 문제 마스터', icon: '🎊', description: '300문제 풀이', condition: (data) => data.totalSolved >= 300, tier: 'gold' },
        { id: 'penta_centurion', name: '오백 문제 챔피언', icon: '🏆', description: '500문제 풀이', condition: (data) => data.totalSolved >= 500, tier: 'gold' },
        { id: 'millennium', name: '천 문제 전설', icon: '⭐', description: '1000문제 풀이', condition: (data) => data.totalSolved >= 1000, tier: 'platinum' },
        { id: 'bi_millennium', name: '이천 문제 신화', icon: '🌟', description: '2000문제 풀이', condition: (data) => data.totalSolved >= 2000, tier: 'diamond' },
        
        // ===== 정답 배지 =====
        { id: 'ten_correct', name: '첫 번째 성공', icon: '✅', description: '10문제 정답', condition: (data) => data.totalCorrect >= 10, tier: 'bronze' },
        { id: 'fifty_correct', name: '지식 탐험가', icon: '🗺️', description: '50문제 정답', condition: (data) => data.totalCorrect >= 50, tier: 'silver' },
        { id: 'hundred_correct', name: '학습 마스터', icon: '🎓', description: '100문제 정답', condition: (data) => data.totalCorrect >= 100, tier: 'silver' },
        { id: 'tri_hundred_correct', name: '삼백 정답 달성', icon: '🏅', description: '300문제 정답', condition: (data) => data.totalCorrect >= 300, tier: 'gold' },
        { id: 'penta_hundred_correct', name: '오백 정답 달성', icon: '👑', description: '500문제 정답', condition: (data) => data.totalCorrect >= 500, tier: 'gold' },
        { id: 'thousand_correct', name: '천문제 정복자', icon: '💎', description: '1000문제 정답', condition: (data) => data.totalCorrect >= 1000, tier: 'platinum' },
        
        // ===== 연속 정답 배지 =====
        { id: 'combo_3', name: '연속 시작', icon: '🔗', description: '3연속 정답', condition: (data) => data.bestStreak >= 3, tier: 'bronze' },
        { id: 'combo_5', name: '연속 킬러', icon: '⚡', description: '5연속 정답', condition: (data) => data.bestStreak >= 5, tier: 'bronze' },
        { id: 'combo_10', name: '콤보 마스터', icon: '💥', description: '10연속 정답', condition: (data) => data.bestStreak >= 10, tier: 'silver' },
        { id: 'combo_15', name: '완벽한 집중', icon: '🎯', description: '15연속 정답', condition: (data) => data.bestStreak >= 15, tier: 'silver' },
        { id: 'combo_20', name: '무적 기관사', icon: '🚀', description: '20연속 정답', condition: (data) => data.bestStreak >= 20, tier: 'gold' },
        { id: 'combo_30', name: '완벽한 흐름', icon: '🌊', description: '30연속 정답', condition: (data) => data.bestStreak >= 30, tier: 'gold' },
        { id: 'combo_50', name: '초월자', icon: '✨', description: '50연속 정답', condition: (data) => data.bestStreak >= 50, tier: 'platinum' },
        { id: 'combo_100', name: '신의 경지', icon: '🎆', description: '100연속 정답', condition: (data) => data.bestStreak >= 100, tier: 'diamond' },
        
        // ===== 과목별 배지 - 철도관련법 =====
        { id: 'law_novice', name: '법규 입문자', icon: '📝', description: '법규 20문제 정답', condition: (data) => data.subjectStats.law?.correct >= 20, tier: 'bronze' },
        { id: 'law_adept', name: '법규 숙련자', icon: '📜', description: '법규 50문제 정답', condition: (data) => data.subjectStats.law?.correct >= 50, tier: 'silver' },
        { id: 'law_master', name: '법규 전문가', icon: '📋', description: '법규 100문제 정답', condition: (data) => data.subjectStats.law?.correct >= 100, tier: 'gold' },
        { id: 'law_grandmaster', name: '법규 그랜드 마스터', icon: '⚖️', description: '법규 200문제 정답', condition: (data) => data.subjectStats.law?.correct >= 200, tier: 'platinum' },
        
        // ===== 과목별 배지 - 도시철도시스템 =====
        { id: 'urban_novice', name: '도시철도 입문자', icon: '🚇', description: '도시철도 20문제 정답', condition: (data) => data.subjectStats.urban?.correct >= 20, tier: 'bronze' },
        { id: 'urban_adept', name: '도시철도 숙련자', icon: '🚊', description: '도시철도 50문제 정답', condition: (data) => data.subjectStats.urban?.correct >= 50, tier: 'silver' },
        { id: 'urban_master', name: '도시철도 전문가', icon: '🚆', description: '도시철도 100문제 정답', condition: (data) => data.subjectStats.urban?.correct >= 100, tier: 'gold' },
        { id: 'urban_grandmaster', name: '도시철도 그랜드 마스터', icon: '🚄', description: '도시철도 200문제 정답', condition: (data) => data.subjectStats.urban?.correct >= 200, tier: 'platinum' },
        
        // ===== 과목별 배지 - 전기동차 =====
        { id: 'emu_novice', name: '전동차 입문자', icon: '🚃', description: '전기동차 20문제 정답', condition: (data) => data.subjectStats.emu?.correct >= 20, tier: 'bronze' },
        { id: 'emu_adept', name: '전동차 숙련자', icon: '🔌', description: '전기동차 50문제 정답', condition: (data) => data.subjectStats.emu?.correct >= 50, tier: 'silver' },
        { id: 'emu_master', name: '전동차 전문가', icon: '🚋', description: '전기동차 100문제 정답', condition: (data) => data.subjectStats.emu?.correct >= 100, tier: 'gold' },
        { id: 'emu_grandmaster', name: '전동차 그랜드 마스터', icon: '🔋', description: '전기동차 200문제 정답', condition: (data) => data.subjectStats.emu?.correct >= 200, tier: 'platinum' },
        
        // ===== 과목별 배지 - 운전이론 =====
        { id: 'theory_novice', name: '이론 입문자', icon: '📐', description: '운전이론 20문제 정답', condition: (data) => data.subjectStats.theory?.correct >= 20, tier: 'bronze' },
        { id: 'theory_adept', name: '이론 숙련자', icon: '📏', description: '운전이론 50문제 정답', condition: (data) => data.subjectStats.theory?.correct >= 50, tier: 'silver' },
        { id: 'theory_master', name: '이론 전문가', icon: '📊', description: '운전이론 100문제 정답', condition: (data) => data.subjectStats.theory?.correct >= 100, tier: 'gold' },
        { id: 'theory_grandmaster', name: '이론 그랜드 마스터', icon: '📈', description: '운전이론 200문제 정답', condition: (data) => data.subjectStats.theory?.correct >= 200, tier: 'platinum' },
        
        // ===== 과목별 배지 - 비상시 조치 =====
        { id: 'emergency_novice', name: '비상조치 입문자', icon: '🚨', description: '비상시조치 20문제 정답', condition: (data) => data.subjectStats.emergency?.correct >= 20, tier: 'bronze' },
        { id: 'emergency_adept', name: '비상조치 숙련자', icon: '🆘', description: '비상시조치 50문제 정답', condition: (data) => data.subjectStats.emergency?.correct >= 50, tier: 'silver' },
        { id: 'emergency_master', name: '비상조치 전문가', icon: '🚑', description: '비상시조치 100문제 정답', condition: (data) => data.subjectStats.emergency?.correct >= 100, tier: 'gold' },
        
        // ===== 정확도 배지 =====
        { id: 'accuracy_80', name: '정확한 학습', icon: '✔️', description: '정답률 80% 이상 (50문제 이상)', condition: (data) => data.totalSolved >= 50 && (data.totalCorrect / data.totalSolved) >= 0.8, tier: 'bronze' },
        { id: 'accuracy_90', name: '정밀 사수', icon: '🏹', description: '정답률 90% 이상 (100문제 이상)', condition: (data) => data.totalSolved >= 100 && (data.totalCorrect / data.totalSolved) >= 0.9, tier: 'silver' },
        { id: 'accuracy_95', name: '명사수', icon: '🥇', description: '정답률 95% 이상 (200문제 이상)', condition: (data) => data.totalSolved >= 200 && (data.totalCorrect / data.totalSolved) >= 0.95, tier: 'gold' },
        { id: 'accuracy_98', name: '완벽주의자', icon: '🥈', description: '정답률 98% 이상 (500문제 이상)', condition: (data) => data.totalSolved >= 500 && (data.totalCorrect / data.totalSolved) >= 0.98, tier: 'platinum' },
        { id: 'perfect_10', name: '백발백중', icon: '💯', description: '10문제 연속 100% 정답', condition: (data) => data.bestStreak >= 10, tier: 'gold' },
        
        // ===== 레벨 배지 ===== (gameData를 위에서 전달받음)
        { id: 'level_5', name: '루키 졸업', icon: '🌱', description: '레벨 5 달성', condition: (data, gameData) => gameData?.level >= 5, tier: 'bronze' },
        { id: 'level_10', name: '초급 기관사', icon: '🔧', description: '레벨 10 달성', condition: (data, gameData) => gameData?.level >= 10, tier: 'bronze' },
        { id: 'level_20', name: '중급 기관사', icon: '⚙️', description: '레벨 20 달성', condition: (data, gameData) => gameData?.level >= 20, tier: 'silver' },
        { id: 'level_35', name: '상급 기관사', icon: '🚆', description: '레벨 35 달성', condition: (data, gameData) => gameData?.level >= 35, tier: 'silver' },
        { id: 'level_50', name: '전문 기관사', icon: '🚄', description: '레벨 50 달성', condition: (data, gameData) => gameData?.level >= 50, tier: 'gold' },
        { id: 'level_70', name: '마스터 기관사', icon: '🎖️', description: '레벨 70 달성', condition: (data, gameData) => gameData?.level >= 70, tier: 'gold' },
        { id: 'level_85', name: '그랜드 마스터', icon: '🏅', description: '레벨 85 달성', condition: (data, gameData) => gameData?.level >= 85, tier: 'platinum' },
        { id: 'level_100', name: '레전드 기관사', icon: '🌠', description: '레벨 100 달성', condition: (data, gameData) => gameData?.level >= 100, tier: 'diamond' },
        
        // ===== 학습 지속성 배지 =====
        { id: 'day_3', name: '3일 챌린저', icon: '📅', description: '3일 연속 학습', condition: (data) => Gamification.checkConsecutiveDays(data.studyDays, 3), tier: 'bronze' },
        { id: 'week_warrior', name: '일주일 전사', icon: '🗓️', description: '7일 연속 학습', condition: (data) => Gamification.checkConsecutiveDays(data.studyDays, 7), tier: 'silver' },
        { id: 'fortnight_champion', name: '2주 챔피언', icon: '📆', description: '14일 연속 학습', condition: (data) => Gamification.checkConsecutiveDays(data.studyDays, 14), tier: 'gold' },
        { id: 'month_marathoner', name: '한 달 마라토너', icon: '🏃', description: '30일 연속 학습', condition: (data) => Gamification.checkConsecutiveDays(data.studyDays, 30), tier: 'platinum' },
        
        // ===== 특별 배지 =====
        { id: 'all_subjects', name: '철도 박사', icon: '🎓', description: '모든 과목 마스터 달성',
          condition: (data) => Object.values(data.subjectStats).every(s => s?.correct >= 100), tier: 'diamond' },
        { id: 'wrong_conqueror', name: '오답 정복자', icon: '🗡️', description: '오답 100개 복습 완료', 
          condition: () => Storage.getWrongAnswers().length >= 100, tier: 'gold' },
        { id: 'speed_learner', name: '빠른 학습자', icon: '⚡', description: '1시간에 50문제 풀기',
          condition: () => false, tier: 'gold' }, // TODO: 세션 기록 추가 필요
    ],

    // XP 보상 계산
    calculateXP(isCorrect, combo = 0) {
        if (!isCorrect) return 0;

        let baseXP = 10;
        
        // 콤보 보너스
        if (combo >= 10) {
            baseXP += 15;
        } else if (combo >= 5) {
            baseXP += 10;
        } else if (combo >= 3) {
            baseXP += 5;
        }

        return baseXP;
    },

    // 정답 처리
    handleCorrectAnswer() {
        if (!Theme.isGameMode()) return { xp: 0, combo: 0 };

        this.currentCombo++;
        const xp = this.calculateXP(true, this.currentCombo);
        this.sessionXP += xp;
        
        // XP 추가 및 레벨업 체크
        const gameData = Storage.addXP(xp);
        Storage.updateMaxCombo(this.currentCombo);

        // 콤보 사운드 (콤보 수에 따라 음계 상승)
        if (this.currentCombo >= 3) {
            Sound.combo(this.currentCombo);
        }

        // UI 업데이트
        Theme.updateGameDisplay();

        // 보너스 팝업 표시
        this.showBonusPopup(xp, this.currentCombo);

        // 배지 체크
        this.checkBadges();

        return { xp, combo: this.currentCombo, level: gameData.level };
    },

    // 오답 처리
    handleWrongAnswer() {
        this.currentCombo = 0;
        return { xp: 0, combo: 0 };
    },

    // 세션 초기화
    resetSession() {
        this.currentCombo = 0;
        this.sessionXP = 0;
    },

    // 보너스 팝업 표시
    showBonusPopup(xp, combo) {
        if (!Theme.isGameMode()) return;

        const popup = document.getElementById('game-bonus');
        const bonusXP = document.getElementById('bonus-xp');
        const comboText = document.getElementById('combo-text');

        if (!popup || !bonusXP || !comboText) return;

        bonusXP.textContent = xp;
        
        // 콤보 텍스트 설정
        if (combo >= 10) {
            comboText.textContent = `🔥 ${combo}연속 정답! MEGA COMBO!`;
            comboText.className = 'text-lg combo-5';
        } else if (combo >= 5) {
            comboText.textContent = `⚡ ${combo}연속 정답! SUPER!`;
            comboText.className = 'text-lg combo-3';
        } else if (combo >= 3) {
            comboText.textContent = `💪 ${combo}연속 정답!`;
            comboText.className = 'text-lg combo-2';
        } else {
            comboText.textContent = '정답!';
            comboText.className = 'text-lg';
        }

        // 팝업 표시
        popup.classList.remove('hidden');
        popup.querySelector('.bonus-popup').style.animation = 'none';
        popup.querySelector('.bonus-popup').offsetHeight; // Reflow
        popup.querySelector('.bonus-popup').style.animation = 'bonusPop 0.5s ease-out';

        // 파티클 효과
        if (combo >= 5) {
            this.createParticles();
        }

        // 자동 숨김
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 1500);
    },

    // 파티클 효과 생성
    createParticles() {
        let container = document.getElementById('particles-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'particles-container';
            document.body.appendChild(container);
        }

        const emojis = ['⭐', '✨', '🎉', '🎊', '💫', '🌟'];
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = '40vh';
            particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
            particle.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
            container.appendChild(particle);

            setTimeout(() => particle.remove(), 1000);
        }
    },

    // 배지 체크
    checkBadges() {
        const userData = Storage.getUserData();
        const gameData = Storage.getGameData();
        const newBadges = [];

        for (const badge of this.BADGES) {
            if (!gameData.unlockedBadges.includes(badge.id)) {
                try {
                    // gameData도 함께 전달 (레벨 배지용)
                    if (badge.condition(userData, gameData)) {
                        if (Storage.unlockBadge(badge.id)) {
                            newBadges.push(badge);
                        }
                    }
                } catch (e) {
                    console.error('Badge check error:', badge.id, e);
                }
            }
        }

        // 새 뱃지 획득 알림 (시간차를 두고 순차 표시)
        newBadges.forEach((badge, index) => {
            setTimeout(() => {
                this.showBadgeUnlock(badge);
            }, index * 800 + 1200); // 정답 확인 후 1.2초 후부터, 각 배지마다 0.8초 간격
        });

        return newBadges;
    },

    // 연속 학습일 체크 헬퍼
    checkConsecutiveDays(studyDays, targetDays) {
        if (!studyDays || studyDays.length < targetDays) return false;
        
        const sortedDays = studyDays.map(d => new Date(d)).sort((a, b) => b - a);
        let consecutiveCount = 1;
        
        for (let i = 0; i < sortedDays.length - 1; i++) {
            const dayDiff = Math.floor((sortedDays[i] - sortedDays[i + 1]) / (1000 * 60 * 60 * 24));
            if (dayDiff === 1) {
                consecutiveCount++;
                if (consecutiveCount >= targetDays) return true;
            } else if (dayDiff > 1) {
                consecutiveCount = 1;
            }
        }
        
        return consecutiveCount >= targetDays;
    },

    // 배지 획득 알림
    showBadgeUnlock(badge) {
        if (!Theme.isGameMode()) {
            showToast(`🎖️ 새 배지 획득: ${badge.name}`, 'success');
            return;
        }

        // 티어별 사운드 재생
        Sound.badge(badge.tier);

        // 티어 색상 가져오기
        const tierColors = {
            bronze: '#CD7F32',
            silver: '#C0C0C0',
            gold: '#FFD700',
            platinum: '#E5E4E2',
            diamond: '#B9F2FF'
        };
        const tierColor = tierColors[badge.tier] || '#FFD700';

        // 게임 모드에서는 화려한 팝업 표시 (상단에 배치하여 해설과 겹치지 않도록)
        const popup = document.createElement('div');
        popup.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 z-50';
        popup.style.cursor = 'pointer';
        popup.innerHTML = `
            <div class="badge-unlock-popup text-center p-6 rounded-2xl" style="border: 2px solid ${tierColor}; box-shadow: 0 0 30px ${tierColor}40; background: rgba(10, 15, 28, 0.98); backdrop-filter: blur(12px);">
                <div class="text-4xl mb-3">${badge.icon}</div>
                <div class="text-2xl font-bold mb-2" style="color: ${tierColor};">새 배지 획득!</div>
                <div class="text-xl mb-1">${badge.name}</div>
                <div class="text-sm opacity-80">${badge.description}</div>
                <div class="text-xs mt-2 opacity-60" style="color: ${tierColor};">${badge.tier.toUpperCase()}</div>
                <div class="text-xs mt-3 opacity-50">탭하여 닫기</div>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // 터치/클릭으로 즉시 닫기
        const closePopup = () => {
            popup.style.opacity = '0';
            popup.style.transform = 'translate(-50%, -20px)';
            popup.style.transition = 'all 0.3s ease';
            setTimeout(() => popup.remove(), 300);
        };
        popup.addEventListener('click', closePopup);
        popup.addEventListener('touchend', (e) => {
            e.preventDefault();
            closePopup();
        });
        
        // 애니메이션
        const popupElement = popup.querySelector('.badge-unlock-popup');
        popupElement.style.animation = 'badgeUnlock 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        // 2.5초 후 자동 제거
        const autoCloseTimeout = setTimeout(() => {
            popup.remove();
        }, 2500);
    },

    // 연속 일수 체크
    checkConsecutiveDays(studyDays, required) {
        if (studyDays.length < required) return false;

        const sortedDays = [...studyDays].sort().reverse();
        let consecutive = 1;

        for (let i = 0; i < sortedDays.length - 1 && consecutive < required; i++) {
            const current = new Date(sortedDays[i]);
            const prev = new Date(sortedDays[i + 1]);
            const diffDays = Math.floor((current - prev) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                consecutive++;
            } else {
                break;
            }
        }

        return consecutive >= required;
    },

    // 배지 그리드 렌더링 (티어별 정렬)
    renderBadgeGrid() {
        const container = document.getElementById('badge-grid');
        if (!container) {
            console.warn('badge-grid container not found');
            return;
        }

        const gameData = Storage.getGameData();
        const tierOrder = ['diamond', 'platinum', 'gold', 'silver', 'bronze'];
        const tierNames = {
            diamond: '💎 다이아몬드',
            platinum: '⭐ 플래티넘',
            gold: '🏆 골드',
            silver: '🥈 실버',
            bronze: '🥉 브론즈'
        };

        let html = '';

        // 티어별로 그룹화
        const badgesByTier = {};
        for (const badge of this.BADGES) {
            if (!badgesByTier[badge.tier]) {
                badgesByTier[badge.tier] = [];
            }
            badgesByTier[badge.tier].push(badge);
        }

        // 티어별 표시
        for (const tier of tierOrder) {
            if (!badgesByTier[tier]) continue;
            
            const badges = badgesByTier[tier];
            const unlockedCount = badges.filter(b => gameData.unlockedBadges.includes(b.id)).length;

            // 티어 헤더
            html += `
                <div class="col-span-full mt-4 mb-2">
                    <div class="text-sm font-semibold opacity-70">
                        ${tierNames[tier]} (${unlockedCount}/${badges.length})
                    </div>
                </div>
            `;

            // 배지 표시
            for (const badge of badges) {
                const isUnlocked = gameData.unlockedBadges.includes(badge.id);
                const title = isUnlocked 
                    ? `${badge.name}: ${badge.description}` 
                    : `???: ${badge.description}`;
                
                html += `
                    <div class="badge-item ${isUnlocked ? '' : 'locked'} cursor-pointer tier-${tier}" 
                         title="${title}" 
                         ${isUnlocked ? `onclick="Gamification.showBadgeDetail(${JSON.stringify(badge).replace(/"/g, '&quot;')})"` : ''}>
                        <div class="text-3xl">${badge.icon}</div>
                    </div>
                `;
            }
        }

        // 통계 표시
        const totalUnlocked = gameData.unlockedBadges.length;
        const totalBadges = this.BADGES.length;
        html += `
            <div class="col-span-full mt-6 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg">
                <div class="text-center">
                    <div class="text-2xl font-bold mb-1">${totalUnlocked} / ${totalBadges}</div>
                    <div class="text-sm opacity-70">배지 수집 진행도</div>
                    <div class="mt-2">
                        <div class="w-full bg-gray-700 rounded-full h-2">
                            <div class="bg-gradient-to-r from-yellow-400 to-amber-500 h-2 rounded-full" 
                                 style="width: ${(totalUnlocked / totalBadges * 100).toFixed(1)}%"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
    },

    // 배지 상세 팝업 표시
    showBadgeDetail(badge) {
        const modal = document.getElementById('badge-detail-modal');
        const icon = document.getElementById('badge-detail-icon');
        const name = document.getElementById('badge-detail-name');
        const description = document.getElementById('badge-detail-description');

        if (modal && icon && name && description) {
            icon.textContent = badge.icon;
            name.textContent = badge.name;
            description.textContent = badge.description;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    },

    // 세션 결과 XP 계산
    getSessionResults() {
        return {
            totalXP: this.sessionXP,
            combo: this.currentCombo,
            level: Storage.getGameData().level
        };
    },

    // 결과 화면 보상 표시
    showResultRewards(correct, total) {
        if (!Theme.isGameMode()) return;

        const rewardsEl = document.getElementById('result-rewards');
        const earnedXP = document.getElementById('earned-xp');
        const earnedBadge = document.getElementById('earned-badge');

        if (rewardsEl) {
            rewardsEl.classList.remove('hidden');
        }

        if (earnedXP) {
            earnedXP.textContent = `+${this.sessionXP}`;
        }

        // 뱃지 획득 여부
        const newBadges = this.checkBadges();
        if (earnedBadge && newBadges.length > 0) {
            earnedBadge.classList.remove('hidden');
        }
    }
};

console.log('Gamification module loaded');
