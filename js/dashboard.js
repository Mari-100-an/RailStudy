/**
 * 대시보드 모듈
 * 학습 통계 관리 (심플 버전)
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
        this.updateStats();
        this.renderSubjectBars();
        this.renderWeeklySummary();
        
        if (Theme.isGameMode()) {
            Gamification.renderBadgeGrid();
        }
    },

    // 전체 통계 업데이트
    updateStats() {
        const userData = Storage.getUserData();
        
        document.getElementById('dash-total-solved').textContent = 
            userData.totalSolved.toLocaleString();
        
        const avgAccuracy = userData.totalSolved > 0 
            ? Math.round((userData.totalCorrect / userData.totalSolved) * 100)
            : 0;
        document.getElementById('dash-avg-accuracy').textContent = `${avgAccuracy}%`;
        
        document.getElementById('dash-study-days').textContent = 
            `${userData.studyDays.length}일`;
        
        document.getElementById('dash-best-streak').textContent = userData.bestStreak;
    },

    // 과목별 성취도 프로그레스 바 렌더링
    renderSubjectBars() {
        const container = document.getElementById('subject-progress-bars');
        if (!container) return;

        const userData = Storage.getUserData();
        const subjects = Object.values(SUBJECTS);
        
        let html = '';
        
        subjects.forEach(subject => {
            const stats = userData.subjectStats[subject.id] || { solved: 0, correct: 0 };
            const accuracy = stats.solved > 0 ? Math.round((stats.correct / stats.solved) * 100) : 0;
            const barWidth = Math.min(accuracy, 100);
            
            html += `
                <div class="subject-bar-item">
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-sm font-medium">${subject.name}</span>
                        <span class="text-sm opacity-70">${accuracy}% (${stats.correct}/${stats.solved})</span>
                    </div>
                    <div class="w-full h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <div class="h-full rounded-full transition-all duration-500" 
                             style="width: ${barWidth}%; background-color: ${subject.color};">
                        </div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    },

    // 주간 학습량 요약 렌더링
    renderWeeklySummary() {
        const weekStats = Storage.getWeeklyStats();
        
        // 오늘 통계 (배열 마지막이 오늘)
        const today = weekStats[weekStats.length - 1] || { solved: 0 };
        const todayEl = document.getElementById('dash-today-solved');
        if (todayEl) {
            todayEl.textContent = today.solved;
        }
        
        // 주간 합계
        const weekTotal = weekStats.reduce((sum, day) => sum + day.solved, 0);
        const weekEl = document.getElementById('dash-week-solved');
        if (weekEl) {
            weekEl.textContent = weekTotal;
        }
        
        // 주간 요약 텍스트
        const summaryEl = document.getElementById('weekly-summary');
        if (summaryEl) {
            const avgPerDay = weekTotal > 0 ? (weekTotal / 7).toFixed(1) : 0;
            const weekCorrect = weekStats.reduce((sum, day) => sum + day.correct, 0);
            const weekAccuracy = weekTotal > 0 ? Math.round((weekCorrect / weekTotal) * 100) : 0;
            
            summaryEl.innerHTML = `
                일평균 ${avgPerDay}문제 · 주간 정답률 ${weekAccuracy}%
            `;
        }
    }
};

console.log('Dashboard module loaded');
