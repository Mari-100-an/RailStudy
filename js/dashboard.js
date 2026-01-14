/**
 * 대시보드 모듈
 * 학습 통계 및 차트 관리
 */

const Dashboard = {
    charts: {
        subject: null,
        weekly: null
    },

    // 초기화
    init() {
        // 뒤로가기 버튼
        const backBtn = document.getElementById('dashboard-back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => App.navigateTo('home'));
        }

        this.setupCharts();
    },

    // 차트 설정
    setupCharts() {
        // 페이지 전환 시 차트 업데이트를 위해 지연 실행
        setTimeout(() => {
            this.createSubjectChart();
            this.createWeeklyChart();
        }, 100);
    },

    // 대시보드 업데이트
    update() {
        this.updateStats();
        this.updateSubjectChart();
        this.updateWeeklyChart();
        
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

    // 과목별 성취도 차트 생성
    createSubjectChart() {
        const canvas = document.getElementById('subject-chart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // 기존 차트 제거
        if (this.charts.subject) {
            this.charts.subject.destroy();
        }

        const userData = Storage.getUserData();
        const subjects = Object.values(SUBJECTS);
        
        const labels = subjects.map(s => s.name);
        const solved = subjects.map(s => userData.subjectStats[s.id]?.solved || 0);
        const correct = subjects.map(s => userData.subjectStats[s.id]?.correct || 0);
        const colors = subjects.map(s => s.color);

        this.charts.subject = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: '푼 문제',
                        data: solved,
                        backgroundColor: colors.map(c => c + '40'),
                        borderColor: colors,
                        borderWidth: 2,
                        borderRadius: 8
                    },
                    {
                        label: '정답',
                        data: correct,
                        backgroundColor: colors.map(c => c + '80'),
                        borderColor: colors,
                        borderWidth: 2,
                        borderRadius: 8
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            color: Theme.isGameMode() ? '#F8FAFC' : '#374151'  // 게임 모드용 텍스트 색상
                        }
                    },
                    tooltip: {
                        callbacks: {
                            afterLabel: function(context) {
                                const idx = context.dataIndex;
                                const s = solved[idx];
                                const c = correct[idx];
                                if (s > 0) {
                                    return `정답률: ${Math.round((c / s) * 100)}%`;
                                }
                                return '';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 5,
                            color: Theme.isGameMode() ? '#CBD5E1' : '#6B7280'  // 게임 모드용 눈금 색상
                        },
                        grid: {
                            color: Theme.isGameMode() ? '#475569' : '#E5E7EB'  // 게임 모드용 그리드 색상
                        }
                    },
                    x: {
                        ticks: {
                            color: Theme.isGameMode() ? '#CBD5E1' : '#6B7280'  // 게임 모드용 눈금 색상
                        },
                        grid: {
                            color: Theme.isGameMode() ? '#475569' : '#E5E7EB'  // 게임 모드용 그리드 색상
                        }
                    }
                }
            }
        });
    },

    // 과목별 차트 업데이트
    updateSubjectChart() {
        if (!this.charts.subject) {
            this.createSubjectChart();
            return;
        }

        const userData = Storage.getUserData();
        const subjects = Object.values(SUBJECTS);
        
        const solved = subjects.map(s => userData.subjectStats[s.id]?.solved || 0);
        const correct = subjects.map(s => userData.subjectStats[s.id]?.correct || 0);

        this.charts.subject.data.datasets[0].data = solved;
        this.charts.subject.data.datasets[1].data = correct;
        this.charts.subject.update();
    },

    // 주간 학습량 차트 생성
    createWeeklyChart() {
        const canvas = document.getElementById('weekly-chart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // 기존 차트 제거
        if (this.charts.weekly) {
            this.charts.weekly.destroy();
        }

        const weekStats = Storage.getWeeklyStats();
        
        const labels = weekStats.map(s => s.dayName);
        const solved = weekStats.map(s => s.solved);
        const correct = weekStats.map(s => s.correct);

        this.charts.weekly = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: '푼 문제',
                        data: solved,
                        borderColor: '#3B82F6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointRadius: 6,
                        pointBackgroundColor: '#3B82F6'
                    },
                    {
                        label: '정답',
                        data: correct,
                        borderColor: '#10B981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointRadius: 6,
                        pointBackgroundColor: '#10B981'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            color: Theme.isGameMode() ? '#F8FAFC' : '#374151'  // 게임 모드용 텍스트 색상
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 5,
                            color: Theme.isGameMode() ? '#CBD5E1' : '#6B7280'  // 게임 모드용 눈금 색상
                        },
                        grid: {
                            color: Theme.isGameMode() ? '#475569' : '#E5E7EB'  // 게임 모드용 그리드 색상
                        }
                    },
                    x: {
                        ticks: {
                            color: Theme.isGameMode() ? '#CBD5E1' : '#6B7280'  // 게임 모드용 눈금 색상
                        },
                        grid: {
                            color: Theme.isGameMode() ? '#475569' : '#E5E7EB'  // 게임 모드용 그리드 색상
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    },

    // 주간 차트 업데이트
    updateWeeklyChart() {
        if (!this.charts.weekly) {
            this.createWeeklyChart();
            return;
        }

        const weekStats = Storage.getWeeklyStats();
        
        const solved = weekStats.map(s => s.solved);
        const correct = weekStats.map(s => s.correct);

        this.charts.weekly.data.datasets[0].data = solved;
        this.charts.weekly.data.datasets[1].data = correct;
        this.charts.weekly.update();
    },

    // 차트 리사이즈
    resizeCharts() {
        if (this.charts.subject) {
            this.charts.subject.resize();
        }
        if (this.charts.weekly) {
            this.charts.weekly.resize();
        }
    }
};

console.log('Dashboard module loaded');
