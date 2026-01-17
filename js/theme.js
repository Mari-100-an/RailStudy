/**
 * 테마 관리 모듈
 * Game Mode 전용 (Focus Mode 제거됨)
 */

const Theme = {
    current: 'game',
    previousLevel: 1,

    init() {
        // 항상 게임 모드 사용
        this.current = 'game';
        this.previousLevel = Storage.getGameData().level;
        this.apply();
    },

    apply() {
        const body = document.body;
        const xpBar = document.getElementById('new-xp-bar');
        const gameStats = document.getElementById('game-stats');
        const resultRewards = document.getElementById('result-rewards');

        // Game Mode 강제 적용
        body.classList.add('game-mode');
        body.classList.remove('focus-mode');
        
        // 강제로 배경색 설정 (시스템 테마 무시)
        document.documentElement.style.backgroundColor = '#0A0F1C';
        document.body.style.backgroundColor = '#0A0F1C';
        
        // 게임 요소 표시
        if (xpBar) xpBar.classList.remove('hidden');
        if (gameStats) gameStats.classList.remove('hidden');
        if (resultRewards) resultRewards.classList.remove('hidden');

        // 게임 데이터 표시 업데이트
        this.updateGameDisplay();
    },

    updateGameDisplay() {
        const gameData = Storage.getGameData();
        
        // 레벨업 체크 및 축하 효과
        if (gameData.level > this.previousLevel) {
            this.showLevelUpEffect(gameData.level);
            this.previousLevel = gameData.level;
        }
        
        // 티어 정보 가져오기
        const tierInfo = Storage.getLevelTier(gameData.level);
        
        // XP 바 업데이트
        const levelBadge = document.getElementById('new-level-badge');
        const levelTierIcon = document.getElementById('new-level-icon');
        const xpBarFill = document.getElementById('new-xp-fill');
        const xpText = document.getElementById('new-xp-text');

        if (levelBadge) {
            levelBadge.innerHTML = `<span id="new-level-icon">${tierInfo.icon}</span> Lv.${gameData.level}`;
            levelBadge.style.background = `linear-gradient(135deg, ${tierInfo.color} 0%, #7C3AED 100%)`;
            levelBadge.style.boxShadow = `0 0 15px ${tierInfo.color}80`;
        }

        if (xpBarFill && xpText) {
            const xpForNext = Storage.getXPForLevel(gameData.level + 1);
            const percentage = (gameData.xp / xpForNext) * 100;
            xpBarFill.style.width = `${percentage}%`;
            xpText.textContent = `${gameData.xp} / ${xpForNext}`;
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

    // 레벨업 축하 효과
    showLevelUpEffect(newLevel) {
        // 티어 정보 가져오기
        const tierInfo = Storage.getLevelTier(newLevel);
        
        // 레벨업 팝업 생성
        const popup = document.createElement('div');
        popup.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none';
        popup.innerHTML = `
            <div class="level-up-popup text-center p-8 rounded-2xl" style="border: 2px solid ${tierInfo.color}; box-shadow: 0 0 40px ${tierInfo.color}60;">
                <div class="text-6xl mb-4">${tierInfo.icon}</div>
                <div class="text-3xl font-bold mb-2" style="color: ${tierInfo.color};">LEVEL UP!</div>
                <div class="text-2xl mb-2">Level ${newLevel} 달성!</div>
                <div class="text-lg opacity-80">${tierInfo.name}</div>
                <div class="text-sm opacity-60 mt-2">축하합니다! 🎊</div>
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

    // 게임 모드 여부 확인 (항상 true)
    isGameMode() {
        return true;
    },

    // 하위 호환성을 위한 메서드
    isFocusMode() {
        return false;
    }
};

console.log('Theme module loaded (Game Mode Only)');
