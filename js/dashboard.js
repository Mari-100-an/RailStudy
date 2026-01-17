/**
 * 대시보드 모듈
 * 게임 통계 및 배지 컬렉션
 */

const Dashboard = {
    // 초기화
    init() {
        // 뒤로가기 버튼
        const backBtn = document.getElementById('dashboard-back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => App.navigateTo('home'));
        }
    },

    // 대시보드 업데이트
    update() {
        this.updateGameStats();
        Gamification.renderBadgeGrid();
    },

    // 게임 통계 업데이트
    updateGameStats() {
        const gameData = Storage.getGameData();
        const userData = Storage.getUserData();
        
        // 현재 레벨
        const levelEl = document.getElementById('game-level');
        if (levelEl) {
            const tierInfo = Storage.getLevelTier(gameData.level || 1);
            levelEl.textContent = `Lv. ${gameData.level || 1} ${tierInfo.icon}`;
        }
        
        // 총 경험치
        const xpEl = document.getElementById('game-total-xp');
        if (xpEl) {
            const totalXP = gameData.totalXP || 0;
            xpEl.textContent = `${totalXP.toLocaleString()} XP`;
        }
        
        // 최대 콤보
        const comboEl = document.getElementById('game-max-combo');
        if (comboEl) {
            comboEl.textContent = `${gameData.maxCombo}`;
        }
        
        // 획득 배지 수
        const badgesEl = document.getElementById('game-badges');
        if (badgesEl) {
            const unlockedCount = gameData.unlockedBadges ? gameData.unlockedBadges.length : 0;
            const totalBadges = Gamification.BADGES.length;
            badgesEl.textContent = `${unlockedCount}/${totalBadges}개`;
        }
    }
};
