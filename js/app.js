/**
 * 메인 앱 모듈
 * 전체 앱 상태 관리 및 네비게이션
 */

const App = {
    currentPage: 'home',

    // 앱 초기화
    init() {
        // 로딩 화면 표시 중 초기화 수행
        this.setupNavigation();
        this.setupSubjectCards();
        this.setupQuickActions();
        this.setupSettings();
        this.setupReviewPage();

        // 테마 초기화
        Theme.init();

        // 퀴즈 모듈 초기화
        Quiz.init();

        // 학습 모듈 초기화
        Study.init();

        // 대시보드 초기화
        Dashboard.init();

        // 홈 화면 통계 업데이트
        this.updateHomeStats();

        // 로딩 완료
        setTimeout(() => {
            this.hideLoadingScreen();
        }, 500);

        console.log('App initialized');
    },

    // 로딩 화면 숨기기
    hideLoadingScreen() {
        const loading = document.getElementById('loading-screen');
        const app = document.getElementById('app');
        
        if (loading) {
            loading.classList.add('fade-out');
            setTimeout(() => {
                loading.classList.add('hidden');
            }, 300);
        }
        
        if (app) {
            app.classList.remove('hidden');
        }
    },

    // 네비게이션 설정
    setupNavigation() {
        const navButtons = {
            'nav-home': 'home',
            'nav-study': 'study',
            'nav-quiz': 'quiz',
            'nav-review': 'review',
            'nav-dashboard': 'dashboard',
            'nav-settings': 'settings'
        };

        Object.entries(navButtons).forEach(([btnId, pageId]) => {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.addEventListener('click', () => this.navigateTo(pageId));
            }
        });
    },

    // 페이지 이동
    navigateTo(pageId) {
        // 모든 페이지 숨기기
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden');
            page.classList.remove('active');
        });

        // 선택한 페이지 표시
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            targetPage.classList.add('active');
        }

        // 네비게이션 버튼 상태 업데이트
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeBtn = document.getElementById(`nav-${pageId}`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        this.currentPage = pageId;

        // 페이지별 초기화
        switch (pageId) {
            case 'home':
                this.updateHomeStats();
                break;
            case 'study':
                Study.showSubjectList();
                break;
            case 'quiz':
                // 퀴즈가 이미 시작되지 않았으면 선택 화면 표시
                if (!Quiz.state.questions || Quiz.state.questions.length === 0) {
                    Quiz.showStartSelection();
                }
                break;
            case 'review':
                this.updateReviewPage();
                break;
            case 'dashboard':
                Dashboard.update();
                break;
            case 'settings':
                this.updateSettingsUI();
                break;
        }
    },

    // 과목 카드 설정
    setupSubjectCards() {
        const container = document.getElementById('subject-cards');
        if (!container) return;

        container.innerHTML = '';

        Object.values(SUBJECTS).forEach(subject => {
            const card = document.createElement('button');
            card.className = 'subject-card p-4 rounded-xl text-left transition-transform hover:scale-[1.02]';
            card.innerHTML = `
                <div class="flex items-center gap-3 mb-2">
                    <span class="text-3xl">${subject.icon}</span>
                    <h4 class="font-bold">${subject.name}</h4>
                </div>
                <p class="text-sm opacity-70">${subject.description}</p>
                <div class="mt-3 flex justify-between items-center text-sm">
                    <span class="subject-question-count">총 ${getQuestionsBySubject(subject.id).length}문제</span>
                    <span class="subject-arrow"><i class="fas fa-arrow-right"></i></span>
                </div>
            `;
            card.style.borderLeft = `4px solid ${subject.color}`;
            
            card.addEventListener('click', () => {
                this.showSubjectModal(subject);
            });

            container.appendChild(card);
        });
    },

    // 과목 선택 모달 표시 (확장 버전)
    showSubjectModal(subjectOrMode) {
        // 모드만 전달된 경우 (quiz 모드)
        if (typeof subjectOrMode === 'string' && subjectOrMode === 'quiz') {
            const modal = document.getElementById('modal-subject');
            const list = document.getElementById('modal-subject-list');
            
            if (!modal || !list) return;

            list.innerHTML = `
                <div class="text-center mb-4">
                    <h3 class="text-xl font-bold">📚 과목 선택</h3>
                    <p class="text-sm opacity-70 mt-2">문제를 풀 과목을 선택하세요</p>
                </div>
                <div class="grid grid-cols-2 gap-3" id="quiz-subject-buttons">
                </div>
            `;

            const container = list.querySelector('#quiz-subject-buttons');
            Object.values(SUBJECTS).forEach(subject => {
                const btn = document.createElement('button');
                btn.className = 'modal-option p-4 rounded-xl text-center';
                btn.innerHTML = `
                    <div class="text-4xl mb-2">${subject.icon}</div>
                    <div class="font-bold text-sm">${subject.name}</div>
                    <div class="text-xs opacity-70 mt-1">${getQuestionsBySubject(subject.id).length}문제</div>
                `;
                btn.onclick = () => {
                    closeModal();
                    Quiz.startSubjectQuiz(subject.id);
                };
                container.appendChild(btn);
            });

            modal.classList.remove('hidden');
            return;
        }

        // 기존 과목 선택 모달 (학습 모드)
        const subject = subjectOrMode;
        const modal = document.getElementById('modal-subject');
        const list = document.getElementById('modal-subject-list');
        
        if (!modal || !list) return;

        list.innerHTML = `
            <div class="text-center mb-4">
                <span class="text-5xl">${subject.icon}</span>
                <h3 class="text-xl font-bold mt-2">${subject.name}</h3>
                <p class="text-sm opacity-70">${subject.description}</p>
            </div>
            <div class="space-y-2">
                <button class="modal-option w-full p-4 rounded-lg text-left" data-count="5">
                    <i class="fas fa-bolt mr-2"></i>빠른 학습 (5문제)
                </button>
                <button class="modal-option w-full p-4 rounded-lg text-left" data-count="10">
                    <i class="fas fa-book mr-2"></i>일반 학습 (10문제)
                </button>
                <button class="modal-option w-full p-4 rounded-lg text-left" data-count="20">
                    <i class="fas fa-graduation-cap mr-2"></i>심화 학습 (20문제)
                </button>
                <button class="modal-option w-full p-4 rounded-lg text-left" data-count="all">
                    <i class="fas fa-infinity mr-2"></i>전체 문제 (${getQuestionsBySubject(subject.id).length}문제)
                </button>
            </div>
        `;

        // 옵션 클릭 이벤트
        list.querySelectorAll('.modal-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const count = btn.dataset.count;
                const questionCount = count === 'all' 
                    ? getQuestionsBySubject(subject.id).length 
                    : parseInt(count);
                
                closeModal();
                if (Quiz.start(subject.id, questionCount)) {
                    this.navigateTo('quiz');
                }
            });
        });

        modal.classList.remove('hidden');
    },

    // 빠른 액션 설정
    setupQuickActions() {
        const quickQuizBtn = document.getElementById('quick-quiz-btn');
        if (quickQuizBtn) {
            quickQuizBtn.addEventListener('click', () => {
                if (Quiz.start()) {
                    this.navigateTo('quiz');
                }
            });
        }

        const continueBtn = document.getElementById('continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => {
                // 오답 우선 학습
                const settings = Storage.getSettings();
                const originalOrder = settings.questionOrder;
                Storage.updateSetting('questionOrder', 'wrong-first');
                
                if (Quiz.start()) {
                    this.navigateTo('quiz');
                }
                
                // 설정 복원
                Storage.updateSetting('questionOrder', originalOrder);
            });
        }
    },

    // 설정 페이지 설정
    setupSettings() {
        // 문제 수 설정
        const questionCountSelect = document.getElementById('setting-question-count');
        if (questionCountSelect) {
            questionCountSelect.addEventListener('change', (e) => {
                Storage.updateSetting('questionCount', parseInt(e.target.value));
                showToast('설정이 저장되었습니다.', 'success');
            });
        }

        // 문제 순서 설정
        const orderSelect = document.getElementById('setting-order');
        if (orderSelect) {
            orderSelect.addEventListener('change', (e) => {
                Storage.updateSetting('questionOrder', e.target.value);
                showToast('설정이 저장되었습니다.', 'success');
            });
        }

        // 즉시 채점 설정
        const instantFeedback = document.getElementById('setting-instant-feedback');
        if (instantFeedback) {
            instantFeedback.addEventListener('change', (e) => {
                Storage.updateSetting('instantFeedback', e.target.checked);
                showToast('설정이 저장되었습니다.', 'success');
            });
        }

        // 데이터 내보내기
        const exportBtn = document.getElementById('btn-export-data');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                const data = Storage.exportData();
                const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `railway-study-backup-${new Date().toISOString().split('T')[0]}.json`;
                a.click();
                URL.revokeObjectURL(url);
                showToast('데이터가 내보내기 되었습니다.', 'success');
            });
        }

        // 데이터 초기화
        const resetBtn = document.getElementById('btn-reset-data');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('정말로 모든 학습 데이터를 초기화하시겠습니까?\n이 작업은 되돌릴 수 없습니다.')) {
                    Storage.resetAllData();
                    showToast('모든 데이터가 초기화되었습니다.', 'success');
                    this.updateHomeStats();
                    Dashboard.update();
                    this.updateReviewPage();
                    Theme.init();
                }
            });
        }
    },

    // 설정 UI 업데이트
    updateSettingsUI() {
        const settings = Storage.getSettings();

        const questionCountSelect = document.getElementById('setting-question-count');
        if (questionCountSelect) {
            questionCountSelect.value = settings.questionCount;
        }

        const orderSelect = document.getElementById('setting-order');
        if (orderSelect) {
            orderSelect.value = settings.questionOrder;
        }

        const instantFeedback = document.getElementById('setting-instant-feedback');
        if (instantFeedback) {
            instantFeedback.checked = settings.instantFeedback;
        }
    },

    // 홈 화면 통계 업데이트
    updateHomeStats() {
        const todayStats = Storage.getTodayStats();

        document.getElementById('stat-solved').textContent = todayStats.solved;
        document.getElementById('stat-correct').textContent = todayStats.correct;
        document.getElementById('stat-accuracy').textContent = `${todayStats.accuracy}%`;
        document.getElementById('stat-streak').textContent = todayStats.streak;
    },

    // 오답 노트 페이지 설정
    setupReviewPage() {
        // 필터
        const filter = document.getElementById('review-filter');
        if (filter) {
            filter.addEventListener('change', () => {
                this.updateReviewPage();
            });
        }

        // 전체 삭제
        const clearBtn = document.getElementById('btn-clear-review');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (confirm('모든 오답 기록을 삭제하시겠습니까?')) {
                    Storage.clearWrongAnswers();
                    this.updateReviewPage();
                    showToast('오답 기록이 삭제되었습니다.', 'success');
                }
            });
        }

        // 오답 다시 풀기
        const practiceBtn = document.getElementById('btn-practice-wrong');
        if (practiceBtn) {
            practiceBtn.addEventListener('click', () => {
                const filter = document.getElementById('review-filter').value;
                Quiz.practiceWrongNotes(filter);
            });
        }
    },

    // 오답 노트 페이지 업데이트
    updateReviewPage() {
        const filter = document.getElementById('review-filter')?.value || 'all';
        let wrongQuestions = Storage.getWrongQuestions();

        if (filter !== 'all') {
            wrongQuestions = wrongQuestions.filter(q => q.subject === filter);
        }

        const emptyEl = document.getElementById('review-empty');
        const listEl = document.getElementById('review-list');
        const actionsEl = document.getElementById('review-actions');

        if (wrongQuestions.length === 0) {
            emptyEl.classList.remove('hidden');
            listEl.classList.add('hidden');
            actionsEl.classList.add('hidden');
            return;
        }

        emptyEl.classList.add('hidden');
        listEl.classList.remove('hidden');
        actionsEl.classList.remove('hidden');

        listEl.innerHTML = wrongQuestions.map(q => {
            const subject = SUBJECTS[q.subject];
            const wrongCount = q.wrongData?.count || 1;
            
            return `
                <div class="review-card p-4 rounded-xl">
                    <div class="flex justify-between items-start mb-3">
                        <span class="subject-badge" style="background-color: ${subject.color}20; color: ${subject.color}">
                            ${subject.icon} ${subject.name}
                        </span>
                        <span class="wrong-count text-sm text-red-500">
                            <i class="fas fa-times mr-1"></i>${wrongCount}회 오답
                        </span>
                    </div>
                    <h4 class="font-bold mb-2">${q.question}</h4>
                    <div class="text-sm opacity-70 mb-3">
                        <span class="text-green-600">정답: ${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}</span>
                    </div>
                    <div class="flex justify-end gap-2">
                        <button class="btn-sm btn-secondary" onclick="App.showQuestionDetail('${q.id}')">
                            <i class="fas fa-eye mr-1"></i>상세 보기
                        </button>
                        <button class="btn-sm btn-danger" onclick="App.removeWrongQuestion('${q.id}')">
                            <i class="fas fa-trash mr-1"></i>삭제
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    },

    // 오답 문제 상세 보기
    showQuestionDetail(questionId) {
        const question = getQuestionById(questionId);
        if (!question) return;

        const subject = SUBJECTS[question.subject];
        const options = question.options.map((opt, i) => 
            `<p class="${i === question.answer ? 'font-bold text-green-600' : ''}">${String.fromCharCode(65 + i)}. ${opt}</p>`
        ).join('');

        alert(`[${subject.name}] ${question.chapter || ''}\n\n문제: ${question.question}\n\n${question.options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join('\n')}\n\n정답: ${String.fromCharCode(65 + question.answer)}\n\n${question.explanation}\n\n출처: ${question.source || '표준교재'}`);
    },

    // 오답 문제 삭제
    removeWrongQuestion(questionId) {
        if (confirm('이 문제를 오답 노트에서 삭제하시겠습니까?')) {
            Storage.removeWrongAnswer(questionId);
            this.updateReviewPage();
            showToast('삭제되었습니다.', 'success');
        }
    }
};

// 전역 함수
function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
    });
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const icon = document.getElementById('toast-icon');
    const msg = document.getElementById('toast-message');

    if (!toast || !icon || !msg) return;

    // 아이콘 설정
    const icons = {
        success: 'fas fa-check-circle text-green-500',
        error: 'fas fa-times-circle text-red-500',
        info: 'fas fa-info-circle text-blue-500',
        warning: 'fas fa-exclamation-circle text-yellow-500'
    };

    icon.className = icons[type] || icons.info;
    msg.textContent = message;

    // 표시
    toast.classList.remove('hidden');
    toast.classList.add('toast-show');

    // 자동 숨김
    setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('toast-show');
    }, 3000);
}

// 앱 시작
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// 윈도우 리사이즈 시 차트 리사이즈
window.addEventListener('resize', () => {
    Dashboard.resizeCharts();
});

console.log('App module loaded');
