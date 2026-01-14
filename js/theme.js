/**
 * 테마 관리 모듈
 * Focus Mode / Game Mode 전환
 */

const Theme = {
    current: 'focus',
    previousLevel: 1,

    init() {
        const settings = Storage.getSettings();
        this.current = settings.mode || 'focus';
        this.previousLevel = Storage.getGameData().level;
        this.apply(this.current);
        this.setupModeButtons();
    },

    apply(mode) {
        this.current = mode;
        const focusLink = document.getElementById('theme-focus');
        const gameLink = document.getElementById('theme-game');
        const body = document.body;
        const xpBar = document.getElementById('xp-bar-container');
        const gameStats = document.getElementById('game-stats');
        const resultRewards = document.getElementById('result-rewards');

        if (mode === 'focus') {
            // Focus Mode 적용
            focusLink.disabled = false;
            gameLink.disabled = true;
            body.classList.add('focus-mode');
            body.classList.remove('game-mode');
            
            // 배경색 초기화
            document.documentElement.style.backgroundColor = '';
            document.body.style.backgroundColor = '';
            
            // 게임 요소 숨기기
            if (xpBar) xpBar.classList.add('hidden');
            if (gameStats) gameStats.classList.add('hidden');
            if (resultRewards) resultRewards.classList.add('hidden');
        } else {
            // Game Mode 적용
            focusLink.disabled = true;
            gameLink.disabled = false;
            body.classList.remove('focus-mode');
            body.classList.add('game-mode');
            
            // 강제로 배경색 설정 (시스템 테마 무시)
            document.documentElement.style.backgroundColor = '#0A0F1C';
            document.body.style.backgroundColor = '#0A0F1C';
            
            // 게임 요소 표시
            if (xpBar) xpBar.classList.remove('hidden');
            if (gameStats) gameStats.classList.remove('hidden');
            if (resultRewards) resultRewards.classList.remove('hidden');

            // 게임 데이터 표시 업데이트
            this.updateGameDisplay();
        }

        // 설정 저장
        Storage.updateSetting('mode', mode);

        // 모드 선택 버튼 업데이트
        this.updateModeButtons();
    },

    toggle() {
        const newMode = this.current === 'focus' ? 'game' : 'focus';
        this.apply(newMode);
    },

    setupModeButtons() {
        const focusBtn = document.getElementById('mode-focus');
        const gameBtn = document.getElementById('mode-game');

        if (focusBtn) {
            focusBtn.addEventListener('click', () => {
                this.apply('focus');
                showToast('Focus Mode 활성화', 'success');
            });
        }

        if (gameBtn) {
            gameBtn.addEventListener('click', () => {
                this.apply('game');
                showToast('Game Mode 활성화', 'success');
            });
        }

        this.updateModeButtons();
    },

    updateModeButtons() {
        const focusBtn = document.getElementById('mode-focus');
        const gameBtn = document.getElementById('mode-game');

        if (focusBtn && gameBtn) {
            if (this.current === 'focus') {
                focusBtn.classList.add('selected');
                gameBtn.classList.remove('selected');
            } else {
                focusBtn.classList.remove('selected');
                gameBtn.classList.add('selected');
            }
        }
    },

    updateGameDisplay() {
        if (this.current !== 'game') return;

        const gameData = Storage.getGameData();
        
        // 레벨업 체크 및 축하 효과
        if (gameData.level > this.previousLevel) {
            this.showLevelUpEffect(gameData.level);
            this.previousLevel = gameData.level;
        }
        
        // XP 바 업데이트
        const levelBadge = document.getElementById('level-badge');
        const xpBarFill = document.getElementById('xp-bar-fill');
        const xpText = document.getElementById('xp-text');

        if (levelBadge) {
            levelBadge.textContent = `Lv.${gameData.level}`;
        }

        if (xpBarFill && xpText) {
            const xpForNext = Storage.getXPForLevel(gameData.level + 1);
            const percentage = (gameData.xp / xpForNext) * 100;
            xpBarFill.style.width = `${percentage}%`;
            xpText.textContent = `${gameData.xp} / ${xpForNext} XP`;
        }

        // 대시보드 게임 통계
        const gameLevel = document.getElementById('game-level');
        const gameTotalXp = document.getElementById('game-total-xp');
        const gameMaxCombo = document.getElementById('game-max-combo');
        const gameBadges = document.getElementById('game-badges');

        if (gameLevel) gameLevel.textContent = `Level ${gameData.level}`;
        if (gameTotalXp) gameTotalXp.textContent = gameData.totalXp.toLocaleString();
        if (gameMaxCombo) gameMaxCombo.textContent = gameData.maxCombo;
        if (gameBadges) gameBadges.textContent = gameData.unlockedBadges.length;
    },

    isGameMode() {
        return this.current === 'game';
    },

    // 레벨업 축하 효과
    showLevelUpEffect(newLevel) {
        // 레벨업 팝업 생성
        const popup = document.createElement('div');
        popup.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none';
        popup.innerHTML = `
            <div class="level-up-popup text-center p-8 rounded-2xl">
                <div class="text-6xl mb-4">🎉</div>
                <div class="text-3xl font-bold mb-2">LEVEL UP!</div>
                <div class="text-2xl">Level ${newLevel} 달성!</div>
                <div class="text-lg opacity-80 mt-2">축하합니다! 🎊</div>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // 애니메이션
        const popupElement = popup.querySelector('.level-up-popup');
        popupElement.style.animation = 'levelUpPop 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        // 파티클 효과
        this.createLevelUpParticles();
        
        // 3초 후 제거
        setTimeout(() => {
            popup.remove();
        }, 3000);
    },

    // 레벨업 파티클 효과
    createLevelUpParticles() {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'level-particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.innerHTML = '⭐';
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 3000);
        }
    },

    isFocusMode() {
        return this.current === 'focus';
    }
};

console.log('Theme module loaded');
