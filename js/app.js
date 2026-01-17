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

        // 대시보드 초기화
        Dashboard.init();

        // 홈 화면 통계 업데이트
        this.updateHomeStats();
        
        // 이어서 풀기 카드 업데이트
        this.updateContinueSessionCard();

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
        
        // 로고 버튼 - 홈으로 이동
        const logoBtn = document.getElementById('logo-btn');
        if (logoBtn) {
            logoBtn.addEventListener('click', () => this.navigateTo('home'));
        }
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
                this.updateContinueSessionCard();
                break;
            case 'quiz':
                // 퀴즈가 이미 시작되지 않았으면 선택 화면 표시
                if (!Quiz.state.questions || Quiz.state.questions.length === 0) {
                    Quiz.showStartSelection();
                    this.updateQuizContinueCard();
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

    // 홈화면 이어서 풀기 카드 업데이트
    updateContinueSessionCard() {
        const card = document.getElementById('continue-session-card');
        const info = document.getElementById('continue-session-info');
        if (!card || !info) return;
        
        const lastSession = Storage.getLastSession();
        
        if (lastSession && lastSession.currentIndex < lastSession.totalQuestions) {
            // 진행 중인 세션이 있음
            let sessionText = '';
            if (lastSession.type === 'chapter') {
                sessionText = `${lastSession.subjectName} > ${lastSession.chapterName}`;
            } else if (lastSession.type === 'subject') {
                sessionText = lastSession.subjectName;
            } else if (lastSession.type === 'random') {
                sessionText = '랜덤 문제';
            } else if (lastSession.type === 'wrong') {
                sessionText = '오답 복습';
            }
            
            const progress = lastSession.answeredCount || lastSession.currentIndex;
            info.textContent = `${sessionText} (${progress}/${lastSession.totalQuestions})`;
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    },

    // 문제탭 이어서 풀기 카드 업데이트
    updateQuizContinueCard() {
        const card = document.getElementById('quiz-continue-card');
        const info = document.getElementById('quiz-continue-info');
        const progress = document.getElementById('quiz-continue-progress');
        const count = document.getElementById('quiz-continue-count');
        if (!card) return;
        
        const lastSession = Storage.getLastSession();
        
        if (lastSession && lastSession.currentIndex < lastSession.totalQuestions) {
            // 진행 중인 세션이 있음
            let sessionText = '';
            if (lastSession.type === 'chapter') {
                sessionText = `${lastSession.subjectName} > ${lastSession.chapterName}`;
            } else if (lastSession.type === 'subject') {
                sessionText = lastSession.subjectName;
            } else if (lastSession.type === 'random') {
                sessionText = '랜덤 문제';
            } else if (lastSession.type === 'wrong') {
                sessionText = '오답 복습';
            }
            
            const answered = lastSession.answeredCount || lastSession.currentIndex;
            const total = lastSession.totalQuestions;
            const percent = Math.round((answered / total) * 100);
            
            if (info) info.textContent = sessionText;
            if (progress) progress.style.width = `${percent}%`;
            if (count) count.textContent = `${answered}/${total}`;
            
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    },

    // 마지막 세션 이어서 풀기
    continueLastSession() {
        const lastSession = Storage.getLastSession();
        if (!lastSession) {
            showToast('이어서 풀 세션이 없습니다.', 'info');
            return;
        }
        
        if (Quiz.continueSession(lastSession.key)) {
            this.navigateTo('quiz');
        }
    },

    // 마지막 세션 처음부터 다시
    restartLastSession() {
        const lastSession = Storage.getLastSession();
        if (!lastSession) {
            showToast('다시 시작할 세션이 없습니다.', 'info');
            return;
        }
        
        if (Quiz.restartSession(lastSession.key)) {
            this.navigateTo('quiz');
        }
    },

    // 과목 카드 설정
    setupSubjectCards() {
        const container = document.getElementById('subject-cards');
        if (!container) return;

        container.innerHTML = '';

        Object.values(SUBJECTS).forEach(subject => {
            const card = document.createElement('button');
            card.className = 'subject-card p-5 rounded-xl text-left transition-transform hover:scale-[1.02]';
            card.innerHTML = `
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span class="text-4xl">${subject.icon}</span>
                        <h4 class="font-bold text-lg">${subject.name}</h4>
                    </div>
                    <span class="text-2xl opacity-50"><i class="fas fa-chevron-right"></i></span>
                </div>
            `;
            card.style.borderLeft = `4px solid ${subject.color}`;
            
            card.addEventListener('click', () => {
                this.showChapterModal(subject);
            });

            container.appendChild(card);
        });
    },

    // 과목 선택 모달 표시 (퀴즈 페이지에서 사용)
    showSubjectModal(mode) {
        if (mode !== 'quiz') return;
        
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
                this.showChapterModal(subject);
            };
            container.appendChild(btn);
        });

        modal.classList.remove('hidden');
    },

    // 단원 선택 모달 표시 (과목별 단원 선택)
    showChapterModal(subject) {
        const modal = document.getElementById('modal-subject');
        const list = document.getElementById('modal-subject-list');
        
        if (!modal || !list) return;

        // 해당 과목의 단원 목록 가져오기
        const chapters = this.getSubjectChapters(subject.id);
        const progress = Storage.getChapterProgress(subject.id);
        
        list.innerHTML = `
            <div class="text-center mb-4">
                <span class="text-4xl">${subject.icon}</span>
                <h3 class="text-xl font-bold mt-2">${subject.name}</h3>
                <p class="text-sm opacity-70">단원을 선택하세요</p>
            </div>
            <div class="space-y-2" id="chapter-list">
                <!-- 전체 문제 풀기 옵션 -->
                <button class="modal-option w-full p-4 rounded-lg text-left flex items-center justify-between" data-chapter="all">
                    <div>
                        <i class="fas fa-layer-group mr-2 text-blue-500"></i>
                        <span class="font-bold">전체 문제</span>
                    </div>
                    <span class="text-sm opacity-70">${getQuestionsBySubject(subject.id).length}문제</span>
                </button>
            </div>
        `;

        const chapterList = list.querySelector('#chapter-list');
        
        // 단원별 버튼 생성
        chapters.forEach((chapter, index) => {
            const chapterNum = index + 1;
            
            // 세션에서 진행률 확인
            const sessionKey = `${subject.id}_${chapterNum}`;
            const session = Storage.getQuizSession(sessionKey);
            
            // 세션이 있으면 세션 기준, 없으면 기존 progress 기준
            let currentProgress = 0;
            let totalQuestions = chapter.count;
            
            if (session) {
                currentProgress = session.answeredCount || 0;
                totalQuestions = session.totalQuestions || chapter.count;
            } else {
                const chapterProgress = progress[chapterNum];
                if (chapterProgress) {
                    currentProgress = chapterProgress.current || 0;
                }
            }
            
            const isCompleted = currentProgress >= totalQuestions && totalQuestions > 0;
            const hasProgress = currentProgress > 0;
            
            const btn = document.createElement('button');
            btn.className = 'modal-option w-full p-4 rounded-lg text-left';
            btn.dataset.chapter = chapterNum;
            btn.innerHTML = `
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${isCompleted ? 'bg-green-500 text-white' : hasProgress ? 'bg-blue-500 text-white' : 'bg-gray-200'}">${chapterNum}</span>
                        <div>
                            <div class="font-medium">${chapter.name || chapterNum + '단원'}</div>
                            <div class="text-xs opacity-70">${chapter.count}문제 ${hasProgress ? `(${currentProgress}/${totalQuestions} 완료)` : ''}</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        ${hasProgress && !isCompleted ? '<span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">이어서</span>' : ''}
                        ${isCompleted ? '<i class="fas fa-check-circle text-green-500"></i>' : '<i class="fas fa-chevron-right opacity-50"></i>'}
                    </div>
                </div>
            `;
            
            chapterList.appendChild(btn);
        });

        // 클릭 이벤트
        list.querySelectorAll('.modal-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const chapter = btn.dataset.chapter;
                
                if (chapter === 'all') {
                    closeModal();
                    Quiz.startSubjectQuiz(subject.id);
                    this.navigateTo('quiz');
                } else {
                    const chapterNum = parseInt(chapter);
                    const sessionKey = `${subject.id}_${chapterNum}`;
                    const existingSession = Storage.getQuizSession(sessionKey);
                    
                    // 진행 중인 세션이 있는지 확인
                    if (existingSession && existingSession.answeredCount > 0 && existingSession.answeredCount < existingSession.totalQuestions) {
                        // 이어서 풀기 옵션 모달 표시
                        this.showChapterContinueModal(subject, chapterNum, existingSession);
                    } else {
                        closeModal();
                        Quiz.startChapterQuiz(subject.id, chapterNum, true);
                        this.navigateTo('quiz');
                    }
                }
            });
        });

        modal.classList.remove('hidden');
    },

    // 단원 이어서 풀기 선택 모달
    showChapterContinueModal(subject, chapterNum, session) {
        const modal = document.getElementById('modal-subject');
        const list = document.getElementById('modal-subject-list');
        
        const percent = Math.round((session.answeredCount / session.totalQuestions) * 100);
        
        list.innerHTML = `
            <div class="text-center mb-4">
                <span class="text-4xl">${subject.icon}</span>
                <h3 class="text-xl font-bold mt-2">${subject.name}</h3>
                <p class="text-lg font-medium">${chapterNum}단원</p>
            </div>
            
            <div class="mb-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
                <p class="text-sm text-center mb-2">이전 학습 진행률</p>
                <div class="flex items-center gap-3">
                    <div class="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div class="h-full bg-blue-500 rounded-full" style="width: ${percent}%"></div>
                    </div>
                    <span class="font-bold text-blue-600">${session.answeredCount}/${session.totalQuestions}</span>
                </div>
            </div>
            
            <div class="space-y-3">
                <button id="btn-continue-chapter" class="modal-option w-full p-4 rounded-lg text-left bg-green-50 border-2 border-green-500">
                    <div class="flex items-center gap-3">
                        <i class="fas fa-play text-green-500 text-xl"></i>
                        <div>
                            <div class="font-bold text-green-700">이어서 풀기</div>
                            <div class="text-xs text-green-600">${session.answeredCount + 1}번 문제부터 시작</div>
                        </div>
                    </div>
                </button>
                
                <button id="btn-restart-chapter" class="modal-option w-full p-4 rounded-lg text-left">
                    <div class="flex items-center gap-3">
                        <i class="fas fa-redo text-gray-500 text-xl"></i>
                        <div>
                            <div class="font-medium">처음부터 다시 풀기</div>
                            <div class="text-xs opacity-70">진행 상황이 초기화됩니다</div>
                        </div>
                    </div>
                </button>
                
                <button id="btn-back-chapters" class="w-full p-3 text-center text-sm text-gray-500 hover:text-gray-700">
                    <i class="fas fa-arrow-left mr-1"></i>단원 목록으로
                </button>
            </div>
        `;
        
        // 이벤트 바인딩
        document.getElementById('btn-continue-chapter').addEventListener('click', () => {
            closeModal();
            Quiz.continueSession(`${subject.id}_${chapterNum}`);
            this.navigateTo('quiz');
        });
        
        document.getElementById('btn-restart-chapter').addEventListener('click', () => {
            closeModal();
            Storage.deleteQuizSession(`${subject.id}_${chapterNum}`);
            Quiz.startChapterQuiz(subject.id, chapterNum, true);
            this.navigateTo('quiz');
        });
        
        document.getElementById('btn-back-chapters').addEventListener('click', () => {
            this.showChapterModal(subject);
        });
    },

    // 과목별 단원 정보 가져오기
    getSubjectChapters(subjectId) {
        // 각 과목별 단원 수와 문제 수 계산
        const chapterCounts = {
            law: 10,
            urban: 11,
            emu: 7,
            theory: 9,
            emergency: 3
        };
        
        const chapters = [];
        const numChapters = chapterCounts[subjectId] || 1;
        
        for (let i = 1; i <= numChapters; i++) {
            // 해당 단원의 문제 수 계산
            const varName = `QUESTIONS_${subjectId.toUpperCase()}_CH${i}`;
            const chapterQuestions = typeof window[varName] !== 'undefined' 
                ? window[varName] 
                : [];
            
            chapters.push({
                number: i,
                name: `${i}단원`,
                count: chapterQuestions.length
            });
        }
        
        return chapters;
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

console.log('App module loaded');
