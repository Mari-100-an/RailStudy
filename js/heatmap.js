/**
 * 학습 히트맵 모듈
 * 사용자의 학습 활동을 시각화
 */

const Heatmap = {
    // 히트맵 렌더링
    render(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const userData = Storage.getUserData();
        const studyDays = userData.studyDays || [];
        
        // 최근 12주 데이터 생성
        const weeks = 12;
        const today = new Date();
        const heatmapData = this.generateHeatmapData(studyDays, weeks);

        container.innerHTML = `
            <div class="heatmap-wrapper">
                <div class="text-sm font-bold mb-3 opacity-70">📅 학습 활동</div>
                <div class="heatmap-grid">
                    ${this.renderWeeks(heatmapData)}
                </div>
                <div class="heatmap-legend mt-3 flex items-center gap-2 text-xs opacity-60">
                    <span>Less</span>
                    <div class="flex gap-1">
                        <div class="heatmap-cell level-0"></div>
                        <div class="heatmap-cell level-1"></div>
                        <div class="heatmap-cell level-2"></div>
                        <div class="heatmap-cell level-3"></div>
                        <div class="heatmap-cell level-4"></div>
                    </div>
                    <span>More</span>
                </div>
            </div>
        `;
    },

    // 히트맵 데이터 생성
    generateHeatmapData(studyDays, weeks) {
        const data = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // 학습한 날짜를 맵으로 변환 (날짜별 문제 수)
        const studyMap = {};
        studyDays.forEach(dateStr => {
            const date = new Date(dateStr);
            date.setHours(0, 0, 0, 0);
            const key = date.toISOString().split('T')[0];
            studyMap[key] = (studyMap[key] || 0) + 1;
        });

        // 최근 weeks주 데이터 생성
        for (let week = weeks - 1; week >= 0; week--) {
            const weekData = [];
            for (let day = 6; day >= 0; day--) {
                const date = new Date(today);
                date.setDate(date.getDate() - (week * 7 + day));
                const key = date.toISOString().split('T')[0];
                const count = studyMap[key] || 0;
                
                weekData.unshift({
                    date: key,
                    count: count,
                    level: this.getLevel(count)
                });
            }
            data.unshift(weekData);
        }

        return data;
    },

    // 활동 레벨 계산 (0-4)
    getLevel(count) {
        if (count === 0) return 0;
        if (count <= 5) return 1;
        if (count <= 10) return 2;
        if (count <= 20) return 3;
        return 4;
    },

    // 주 단위 렌더링
    renderWeeks(heatmapData) {
        return heatmapData.map(week => `
            <div class="heatmap-week">
                ${week.map(day => `
                    <div class="heatmap-cell level-${day.level}" 
                         title="${day.date}: ${day.count}문제"
                         data-date="${day.date}">
                    </div>
                `).join('')}
            </div>
        `).join('');
    }
};

console.log('Heatmap module loaded');
