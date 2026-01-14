/**
 * 게이미피케이션 모듈
 * XP, 레벨, 배지, 콤보 시스템
 */

const Gamification = {
    currentCombo: 0,
    sessionXP: 0,

    // 배지 정의
    BADGES: [
        { id: 'first_quiz', name: '첫 발걸음', icon: '👣', description: '첫 번째 퀴즈 완료', condition: (data) => data.totalSolved >= 1 },
        { id: 'ten_correct', name: '열정의 시작', icon: '🔥', description: '10문제 정답', condition: (data) => data.totalCorrect >= 10 },
        { id: 'fifty_correct', name: '지식 탐험가', icon: '🧭', description: '50문제 정답', condition: (data) => data.totalCorrect >= 50 },
        { id: 'hundred_correct', name: '학습 마스터', icon: '🎓', description: '100문제 정답', condition: (data) => data.totalCorrect >= 100 },
        { id: 'combo_5', name: '연속 킬러', icon: '⚡', description: '5연속 정답', condition: (data) => data.bestStreak >= 5 },
        { id: 'combo_10', name: '콤보 마스터', icon: '💥', description: '10연속 정답', condition: (data) => data.bestStreak >= 10 },
        { id: 'combo_20', name: '무적 기관사', icon: '🚀', description: '20연속 정답', condition: (data) => data.bestStreak >= 20 },
        { id: 'law_master', name: '법규 전문가', icon: '⚖️', description: '법규 과목 50문제 정답', condition: (data) => data.subjectStats.law.correct >= 50 },
        { id: 'emu_master', name: '전동차 전문가', icon: '🚃', description: '전기동차 과목 50문제 정답', condition: (data) => data.subjectStats.emu.correct >= 50 },
        { id: 'theory_master', name: '이론 전문가', icon: '📐', description: '운전이론 과목 50문제 정답', condition: (data) => data.subjectStats.theory.correct >= 50 },
        { id: 'urban_master', name: '도시철도 전문가', icon: '🚇', description: '도시철도 과목 50문제 정답', condition: (data) => data.subjectStats.urban.correct >= 50 },
        { id: 'week_warrior', name: '일주일 전사', icon: '📅', description: '7일 연속 학습', condition: (data) => Gamification.checkConsecutiveDays(data.studyDays, 7) },
        { id: 'accuracy_90', name: '정밀 사수', icon: '🎯', description: '정답률 90% 이상 (최소 50문제)', condition: (data) => data.totalSolved >= 50 && (data.totalCorrect / data.totalSolved) >= 0.9 },
        { id: 'level_5', name: '루키 졸업', icon: '🌟', description: '레벨 5 달성', condition: () => Storage.getGameData().level >= 5 },
        { id: 'level_10', name: '중급 기관사', icon: '⭐', description: '레벨 10 달성', condition: () => Storage.getGameData().level >= 10 },
        { id: 'level_20', name: '고급 기관사', icon: '🏆', description: '레벨 20 달성', condition: () => Storage.getGameData().level >= 20 }
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
                    if (badge.condition(userData)) {
                        if (Storage.unlockBadge(badge.id)) {
                            newBadges.push(badge);
                        }
                    }
                } catch (e) {
                    console.error('Badge check error:', badge.id, e);
                }
            }
        }

        // 새 뱃지 획득 알림
        for (const badge of newBadges) {
            this.showBadgeUnlock(badge);
        }

        return newBadges;
    },

    // 배지 획듍 알림
    showBadgeUnlock(badge) {
        if (!Theme.isGameMode()) {
            showToast(`🎖️ 새 배지 획듍: ${badge.name}`, 'success');
            return;
        }

        // 게임 모드에서는 화려한 팝업 표시
        const popup = document.createElement('div');
        popup.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none';
        popup.innerHTML = `
            <div class="badge-unlock-popup text-center p-6 rounded-2xl">
                <div class="text-4xl mb-3">${badge.icon}</div>
                <div class="text-2xl font-bold mb-2">새 배지 획듍!</div>
                <div class="text-xl mb-1">${badge.name}</div>
                <div class="text-sm opacity-80">${badge.description}</div>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // 애니메이션
        const popupElement = popup.querySelector('.badge-unlock-popup');
        popupElement.style.animation = 'badgeUnlock 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        // 2.5초 후 제거
        setTimeout(() => {
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

    // 배지 그리드 렌더링
    renderBadgeGrid() {
        const container = document.getElementById('badge-grid');
        if (!container) return;

        const gameData = Storage.getGameData();
        container.innerHTML = '';

        for (const badge of this.BADGES) {
            const isUnlocked = gameData.unlockedBadges.includes(badge.id);
            const badgeEl = document.createElement('div');
            badgeEl.className = `badge-item ${isUnlocked ? '' : 'locked'} cursor-pointer`;
            badgeEl.innerHTML = badge.icon;
            badgeEl.title = isUnlocked 
                ? `${badge.name}: ${badge.description}` 
                : `???: ${badge.description}`;
            
            // 클릭 이벤트 추가
            if (isUnlocked) {
                badgeEl.onclick = () => this.showBadgeDetail(badge);
            }
            
            container.appendChild(badgeEl);
        }
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
