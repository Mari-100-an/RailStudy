/**
 * 퀴즈 엔진 모듈
 * 문제 풀이, 채점, 결과 처리
 */

const Quiz = {
    // 현재 퀴즈 상태
    state: {
        questions: [],
        currentIndex: 0,
        answers: [],
        selectedOption: null,
        isSubmitted: false,
        startTime: null,
        questionStartTime: null,
        subject: null
    },

    // 퀴즈 초기화
    init() {
        this.bindEvents();
    },

    // 이벤트 바인딩
    bindEvents() {
        // 정답 확인 버튼
        const submitBtn = document.getElementById('btn-submit');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                if (typeof Sound !== 'undefined') Sound.select();
                this.submitAnswer();
            });
        }

        // 이전 문제 버튼 (onclick은 updateNavigationButtons에서 관리)
        // 다음 문제 버튼 (onclick은 updateNavigationButtons에서 관리)

        // 결과 화면 버튼들
        const retryBtn = document.getElementById('btn-retry');
        if (retryBtn) {
            retryBtn.addEventListener('click', () => {
                if (typeof Sound !== 'undefined') Sound.select();
                this.retry();
            });
        }

        const reviewBtn = document.getElementById('btn-review-wrong');
        if (reviewBtn) {
            reviewBtn.addEventListener('click', () => {
                if (typeof Sound !== 'undefined') Sound.select();
                this.reviewWrongAnswers();
            });
        }

        const homeBtn = document.getElementById('btn-home');
        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                if (typeof Sound !== 'undefined') Sound.select();
                App.navigateTo('home');
            });
        }

        // 키보드 단축키 (좌우 화살표)
        document.addEventListener('keydown', (e) => {
            // 퀴즈 페이지가 활성화되어 있고 모달이 열려있지 않을 때만
            const quizPage = document.getElementById('page-quiz');
            const modalOpen = document.querySelector('.modal:not(.hidden)');
            
            if (quizPage && !quizPage.classList.contains('hidden') && !modalOpen) {
                if (e.key === 'ArrowLeft' && this.state.currentIndex > 0) {
                    this.goToQuestion(this.state.currentIndex - 1);
                } else if (e.key === 'ArrowRight' && this.state.currentIndex < this.state.questions.length - 1) {
                    this.goToQuestion(this.state.currentIndex + 1);
                }
            }
        });
    },

    // 퀴즈 시작 선택 화면 표시
    showStartSelection() {
        document.getElementById('quiz-start-selection').classList.remove('hidden');
        document.getElementById('quiz-progress').classList.add('hidden');
        document.getElementById('quiz-card').classList.add('hidden');
        document.getElementById('answer-explanation').classList.add('hidden');
        
        // 버튼들 숨기기
        const btnContainer = document.querySelector('#page-quiz .flex.justify-between');
        if (btnContainer) btnContainer.classList.add('hidden');
        
        // 오답 개수 업데이트
        const wrongAnswers = Storage.getWrongAnswers();
        const wrongCountBadge = document.getElementById('wrong-count-badge');
        if (wrongCountBadge) {
            wrongCountBadge.textContent = `${wrongAnswers.length}개`;
        }
    },

    // 랜덤 문제 풀이 시작
    startRandomQuiz() {
        const settings = Storage.getSettings();
        const count = settings.questionCount || 10;
        const questions = getRandomQuestions(count, null);
        
        if (questions.length === 0) {
            showToast('문제가 없습니다.', 'error');
            return false;
        }
        
        // 세션 정보 설정
        this.state.sessionInfo = {
            type: 'random',
            sessionKey: 'random'
        };
        
        return this.startWithQuestions(questions, null);
    },

    // 오답 문제 풀이 시작
    startWrongQuiz() {
        const wrongAnswers = Storage.getWrongAnswers();
        
        if (wrongAnswers.length === 0) {
            showToast('오답 노트에 문제가 없습니다.', 'info');
            return false;
        }
        
        const settings = Storage.getSettings();
        const count = Math.min(settings.questionCount || 10, wrongAnswers.length);
        const questions = this.getWrongFirstQuestions(count, null);
        
        // 세션 정보 설정
        this.state.sessionInfo = {
            type: 'wrong',
            sessionKey: 'wrong'
        };
        
        return this.startWithQuestions(questions, null);
    },

    // 세션에서 이어서 풀기
    continueSession(sessionKey) {
        const session = Storage.getQuizSession(sessionKey);
        if (!session) {
            showToast('저장된 세션을 찾을 수 없습니다.', 'error');
            return false;
        }
        
        // 세션 타입에 따라 문제 복원
        let questions = [];
        if (session.questionIds && session.questionIds.length > 0) {
            // 저장된 문제 ID로 복원
            questions = session.questionIds.map(id => getQuestionById(id)).filter(q => q);
        } else if (session.type === 'chapter') {
            const varName = `QUESTIONS_${session.subjectId.toUpperCase()}_CH${session.chapterNum}`;
            questions = typeof window[varName] !== 'undefined' ? [...window[varName]] : [];
        } else if (session.type === 'subject') {
            questions = getQuestionsBySubject(session.subjectId);
        }
        
        if (questions.length === 0) {
            showToast('문제를 불러올 수 없습니다.', 'error');
            return false;
        }
        
        // 선택 화면 숨기기
        document.getElementById('quiz-start-selection').classList.add('hidden');
        
        // 상태 복원
        this.state = {
            questions,
            currentIndex: session.currentIndex || 0,
            answers: session.answers || new Array(questions.length).fill(null),
            selectedOption: null,
            isSubmitted: false,
            startTime: Date.now(),
            questionStartTime: Date.now(),
            subject: session.subjectId,
            chapter: session.chapterNum,
            sessionInfo: {
                type: session.type,
                sessionKey: sessionKey,
                subjectId: session.subjectId,
                subjectName: session.subjectName,
                chapterNum: session.chapterNum,
                chapterName: session.chapterName
            }
        };
        
        // 게이미피케이션 세션 초기화
        Gamification.resetSession();
        
        // UI 초기화
        this.showQuizUI();
        this.renderQuestion();
        
        return true;
    },

    // 세션 처음부터 다시 시작
    restartSession(sessionKey) {
        const session = Storage.getQuizSession(sessionKey);
        if (!session) return false;
        
        // 세션 삭제 후 새로 시작
        Storage.deleteQuizSession(sessionKey);
        
        if (session.type === 'chapter') {
            return this.startChapterQuiz(session.subjectId, session.chapterNum, true);
        } else if (session.type === 'subject') {
            return this.startSubjectQuiz(session.subjectId);
        } else if (session.type === 'random') {
            return this.startRandomQuiz();
        } else if (session.type === 'wrong') {
            return this.startWrongQuiz();
        }
        return false;
    },



    // 과목별 문제 풀이 시작
    startSubjectQuiz(subjectId) {
        const questions = getQuestionsBySubject(subjectId);
        
        if (questions.length === 0) {
            showToast('선택한 과목에 문제가 없습니다.', 'error');
            return false;
        }
        
        const subject = SUBJECTS[subjectId];
        
        // 세션 정보 설정
        this.state.sessionInfo = {
            type: 'subject',
            sessionKey: subjectId,
            subjectId: subjectId,
            subjectName: subject?.name || subjectId
        };
        
        // 순서대로 풀기 (랜덤 아님)
        return this.startWithQuestions([...questions], subjectId);
    },

    // 단원별 문제 풀이 시작
    startChapterQuiz(subjectId, chapterNum, forceRestart = false) {
        // 해당 단원의 문제 가져오기
        const varName = `QUESTIONS_${subjectId.toUpperCase()}_CH${chapterNum}`;
        const questions = typeof window[varName] !== 'undefined' ? window[varName] : [];
        
        if (questions.length === 0) {
            showToast('해당 단원에 문제가 없습니다.', 'error');
            return false;
        }
        
        const subject = SUBJECTS[subjectId];
        const sessionKey = `${subjectId}_${chapterNum}`;
        
        // 세션 정보 설정
        this.state.sessionInfo = {
            type: 'chapter',
            sessionKey: sessionKey,
            subjectId: subjectId,
            subjectName: subject?.name || subjectId,
            chapterNum: chapterNum,
            chapterName: `${chapterNum}단원`
        };
        
        // 기존 세션 확인 (forceRestart가 아닐 때만)
        if (!forceRestart) {
            const existingSession = Storage.getQuizSession(sessionKey);
            if (existingSession && existingSession.currentIndex > 0 && existingSession.currentIndex < questions.length) {
                // 이어서 풀기 확인은 모달에서 처리하므로 여기서는 새로 시작
            }
        }
        
        // 상태에 단원 정보 저장 (레거시 호환)
        this.state.chapterInfo = {
            subjectId,
            chapterNum,
            startIndex: 0
        };
        
        // 문제 순서 섞기
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        
        return this.startWithQuestions(shuffled, subjectId, chapterNum);
    },

    // 퀴즈 시작 (레거시 - 호환성 유지)
    start(subjectId = null, questionCount = null) {
        const settings = Storage.getSettings();
        const count = questionCount || settings.questionCount || 10;

        // 문제 가져오기
        let questions;
        if (settings.questionOrder === 'wrong-first') {
            questions = this.getWrongFirstQuestions(count, subjectId);
        } else {
            questions = getRandomQuestions(count, subjectId);
        }

        if (questions.length === 0) {
            showToast('선택한 과목에 문제가 없습니다.', 'error');
            return false;
        }

        return this.startWithQuestions(questions, subjectId);
    },

    // 특정 문제들로 퀴즈 시작
    startWithQuestions(questions, subjectId = null, chapterNum = null) {
        if (!questions || questions.length === 0) {
            showToast('문제가 없습니다.', 'error');
            return false;
        }

        // 선택 화면 숨기기
        document.getElementById('quiz-start-selection').classList.add('hidden');

        // 세션 정보 유지
        const sessionInfo = this.state.sessionInfo || null;

        // 상태 초기화
        this.state = {
            questions,
            currentIndex: 0,
            answers: new Array(questions.length).fill(null),
            selectedOption: null,
            isSubmitted: false,
            startTime: Date.now(),
            questionStartTime: Date.now(),
            subject: subjectId,
            chapter: chapterNum,
            chapterInfo: this.state.chapterInfo || null,  // 단원 정보 유지
            sessionInfo: sessionInfo  // 세션 정보 유지
        };

        // 게이미피케이션 세션 초기화
        Gamification.resetSession();

        // UI 초기화
        this.showQuizUI();
        this.renderQuestion();

        return true;
    },

    // 오답 우선 문제 가져오기
    getWrongFirstQuestions(count, subjectId) {
        const wrongQuestions = Storage.getWrongQuestions();
        let questions = [];

        // 오답 문제 우선 추가
        const filteredWrong = subjectId 
            ? wrongQuestions.filter(q => q.subject === subjectId)
            : wrongQuestions;
        
        questions = [...filteredWrong];

        // 부족한 수만큼 일반 문제 추가
        if (questions.length < count) {
            const remaining = count - questions.length;
            const additionalIds = questions.map(q => q.id);
            let pool = subjectId ? getQuestionsBySubject(subjectId) : [...QUESTIONS];
            pool = pool.filter(q => !additionalIds.includes(q.id));
            const shuffled = pool.sort(() => Math.random() - 0.5);
            questions = [...questions, ...shuffled.slice(0, remaining)];
        }

        return questions.slice(0, count).sort(() => Math.random() - 0.5);
    },

    // 퀴즈 UI 표시
    showQuizUI() {
        const quizCard = document.getElementById('quiz-card');
        const quizProgress = document.getElementById('quiz-progress');
        const quizResult = document.getElementById('quiz-result');
        const explanation = document.getElementById('answer-explanation');
        const submitContainer = document.getElementById('submit-container');
        const navButtons = document.getElementById('nav-buttons');

        if (quizCard) quizCard.classList.remove('hidden');
        if (quizProgress) quizProgress.classList.remove('hidden');
        if (quizResult) quizResult.classList.add('hidden');
        if (explanation) explanation.classList.add('hidden');
        if (submitContainer) submitContainer.classList.remove('hidden');
        if (navButtons) navButtons.classList.add('hidden');

        // 버튼 상태 초기화
        const submitBtn = document.getElementById('btn-submit');
        
        if (submitBtn) {
            submitBtn.classList.remove('hidden');
            submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>정답 확인';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';
        }
        
        // 네비게이션 버튼 업데이트
        this.updateNavigationButtons();
    },

    // 네비게이션 버튼 상태 업데이트
    updateNavigationButtons() {
        const prevBtn = document.getElementById('btn-prev');
        const nextNavBtn = document.getElementById('btn-next-nav');
        
        const { currentIndex, questions, answers } = this.state;
        const isLastQuestion = currentIndex === questions.length - 1;
        const allAnswered = answers.filter(a => a !== null).length === questions.length;
        
        // 이전 버튼 활성화 상태
        if (prevBtn) {
            prevBtn.disabled = currentIndex === 0;
            prevBtn.onclick = () => {
                if (typeof Sound !== 'undefined') Sound.select();
                this.goToQuestion(this.state.currentIndex - 1);
            };
        }
        
        // 다음 버튼: 마지막 문제이고 모두 답변했으면 "결과 보기"로 변경
        if (nextNavBtn) {
            if (isLastQuestion && allAnswered) {
                nextNavBtn.disabled = false;
                nextNavBtn.innerHTML = '결과 보기<i class="fas fa-flag-checkered ml-2"></i>';
                nextNavBtn.onclick = () => {
                    if (typeof Sound !== 'undefined') Sound.select();
                    this.showResults();
                };
            } else if (isLastQuestion) {
                nextNavBtn.disabled = true;
                nextNavBtn.innerHTML = '다음 문제<i class="fas fa-chevron-right ml-2"></i>';
                nextNavBtn.onclick = null;
            } else {
                nextNavBtn.disabled = false;
                nextNavBtn.innerHTML = '다음 문제<i class="fas fa-chevron-right ml-2"></i>';
                nextNavBtn.onclick = () => {
                    if (typeof Sound !== 'undefined') Sound.select();
                    this.goToQuestion(this.state.currentIndex + 1);
                };
            }
        }
    },

    // 문제 렌더링
    renderQuestion() {
        const question = this.state.questions[this.state.currentIndex];
        if (!question) return;

        const { currentIndex, questions, answers } = this.state;
        const existingAnswer = answers[currentIndex];

        // 진행 상황 업데이트
        document.getElementById('quiz-progress-text').textContent = 
            `문제 ${currentIndex + 1} / ${questions.length}`;
        document.getElementById('quiz-progress-bar').style.width = 
            `${((currentIndex + 1) / questions.length) * 100}%`;

        // 과목 뱃지
        const subject = SUBJECTS[question.subject];
        const badge = document.getElementById('quiz-subject-badge');
        if (badge && subject) {
            badge.textContent = subject.name;
            badge.style.backgroundColor = subject.color;
            badge.style.color = '#ffffff';
        }

        // 문제 번호와 텍스트
        document.getElementById('question-number').textContent = 
            `Q.${currentIndex + 1} - ${question.chapter || ''}`;
        document.getElementById('question-text').textContent = question.question;

        // 이미 풀었던 문제인지 확인
        if (existingAnswer) {
            // 이미 푼 문제 - 결과 표시
            this.renderAnsweredQuestion(question, existingAnswer);
        } else {
            // 아직 안 푼 문제
            this.renderOptions(question);
            
            // 상태 초기화
            this.state.selectedOption = null;
            this.state.isSubmitted = false;
            this.state.questionStartTime = Date.now();

            // 해설 숨기기, 네비게이션 숨기기, 정답확인 버튼도 숨기기
            document.getElementById('answer-explanation').classList.add('hidden');
            document.getElementById('nav-buttons')?.classList.add('hidden');
            document.getElementById('submit-container')?.classList.add('hidden');
        }
        
        // 네비게이션 버튼 업데이트
        this.updateNavigationButtons();
    },

    // 이미 풀었던 문제 렌더링
    renderAnsweredQuestion(question, answer) {
        const container = document.getElementById('options-container');
        container.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn w-full p-4 rounded-xl text-left transition-all flex items-start gap-3';
            button.innerHTML = `
                <span class="option-label flex-shrink-0 w-8 h-8 rounded-full text-center leading-8 font-bold">${String.fromCharCode(65 + index)}</span>
                <span class="option-text flex-1">${option}</span>
            `;
            
            // 정답/오답 표시
            if (index === question.answer) {
                button.classList.add('correct');
            } else if (index === answer.selected && !answer.isCorrect) {
                button.classList.add('wrong');
            }
            button.style.pointerEvents = 'none';
            
            container.appendChild(button);
        });

        // 해설 표시
        this.showAnswerResult(answer.isCorrect, question);
        
        // 정답확인 버튼 숨기기, 네비게이션 표시
        document.getElementById('submit-container')?.classList.add('hidden');
        document.getElementById('nav-buttons')?.classList.remove('hidden');
    },

    // 특정 문제로 이동
    goToQuestion(index) {
        if (index < 0 || index >= this.state.questions.length) return;
        
        this.state.currentIndex = index;
        this.renderQuestion();
        
        // 화면 상단으로 스크롤
        document.getElementById('quiz-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },

    // 선택지 렌더링
    renderOptions(question) {
        const container = document.getElementById('options-container');
        container.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn w-full p-4 rounded-xl text-left transition-all flex items-start gap-3';
            button.innerHTML = `
                <span class="option-label flex-shrink-0 w-8 h-8 rounded-full text-center leading-8 font-bold">${String.fromCharCode(65 + index)}</span>
                <span class="option-text flex-1">${option}</span>
            `;
            button.addEventListener('click', () => this.selectOption(index));
            container.appendChild(button);
        });
    },

    // 선택지 선택
    selectOption(index) {
        if (this.state.isSubmitted) return;

        this.state.selectedOption = index;

        // UI 업데이트
        const options = document.querySelectorAll('.option-btn');
        options.forEach((btn, i) => {
            btn.classList.remove('selected');
            if (i === index) {
                btn.classList.add('selected');
            }
        });

        // 선택지 클릭 시 사운드는 제거 (정답/오답 사운드와 겹치지 않도록)
        // if (typeof Sound !== 'undefined') {
        //     Sound.select();
        // }

        // 정답 확인 버튼 표시
        document.getElementById('submit-container')?.classList.remove('hidden');
        const submitBtn = document.getElementById('btn-submit');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>정답 확인';
        }

        // 즉시 채점 옵션 확인
        const settings = Storage.getSettings();
        if (settings.instantFeedback) {
            this.submitAnswer();
        }
    },

    // 정답 제출
    submitAnswer() {
        // 선택하지 않았으면 무시
        if (this.state.selectedOption === null) {
            return;
        }
        
        if (this.state.isSubmitted) return;

        this.state.isSubmitted = true;
        const question = this.state.questions[this.state.currentIndex];
        const isCorrect = this.state.selectedOption === question.answer;

        // 사운드 재생
        if (typeof Sound !== 'undefined') {
            if (isCorrect) {
                Sound.correct();
            } else {
                Sound.wrong();
            }
        }

        // 답안 저장
        this.state.answers[this.state.currentIndex] = {
            selected: this.state.selectedOption,
            correct: question.answer,
            isCorrect,
            timeSpent: Date.now() - this.state.questionStartTime
        };

        // 세션 저장
        this.saveCurrentSession();

        // 통계 업데이트
        Storage.updateUserStats(isCorrect, question.subject);
        Storage.addStudyLog(question.id, isCorrect, question.subject, 
            Date.now() - this.state.questionStartTime);

        // 오답 노트 업데이트
        if (!isCorrect) {
            Storage.addWrongAnswer(question.id, this.state.selectedOption);
        } else {
            // 이전에 틀렸던 문제면 마스터 처리
            Storage.markAsMastered(question.id);
        }

        // 게이미피케이션 처리
        if (isCorrect) {
            Gamification.handleCorrectAnswer();
        } else {
            Gamification.handleWrongAnswer();
        }

        // UI 업데이트
        this.showAnswerResult(isCorrect, question);
    },

    // 정답 결과 표시
    showAnswerResult(isCorrect, question) {
        const options = document.querySelectorAll('.option-btn');
        const quizCard = document.getElementById('quiz-card');
        
        // 퀴즈 카드 애니메이션 (게임 모드에서만)
        if (Theme.isGameMode() && quizCard) {
            quizCard.classList.add(isCorrect ? 'correct-animation' : 'wrong-animation');
            setTimeout(() => {
                quizCard.classList.remove('correct-animation', 'wrong-animation');
            }, isCorrect ? 600 : 500);
        }
        
        // 선택지 상태 업데이트
        options.forEach((btn, i) => {
            btn.classList.remove('selected');
            if (i === question.answer) {
                btn.classList.add('correct');
            } else if (i === this.state.selectedOption && !isCorrect) {
                btn.classList.add('wrong');
            }
            btn.style.pointerEvents = 'none';
        });

        // 해설 표시
        const explanation = document.getElementById('answer-explanation');
        const result = document.getElementById('answer-result');
        const explanationText = document.getElementById('explanation-text');
        const sourceRef = document.getElementById('source-reference');

        explanation.classList.remove('hidden');
        explanation.classList.remove('correct', 'wrong');
        explanation.classList.add(isCorrect ? 'correct' : 'wrong');

        result.innerHTML = isCorrect 
            ? '<i class="fas fa-check-circle text-2xl"></i><span class="text-xl font-bold">정답입니다! 🎉</span>'
            : '<i class="fas fa-times-circle text-2xl"></i><span class="text-xl font-bold">틀렸습니다 😢</span>';

        // 정답 보여주기
        const correctAnswer = String.fromCharCode(65 + question.answer);
        explanationText.innerHTML = `
            <p class="font-bold mb-2">정답: ${correctAnswer}. ${question.options[question.answer]}</p>
            <p>${question.explanation || '해설이 없습니다.'}</p>
        `;

        if (sourceRef && question.source) {
            sourceRef.innerHTML = `<i class="fas fa-book-open mr-2"></i><span>출처: ${question.source}</span>`;
        }

        // 버튼 상태 변경: 정답확인 숨기고 네비게이션 표시
        document.getElementById('submit-container')?.classList.add('hidden');
        document.getElementById('nav-buttons')?.classList.remove('hidden');
        
        // 해설로 부드럽게 스크롤
        setTimeout(() => {
            explanation.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
        
        // 네비게이션 버튼 업데이트
        this.updateNavigationButtons();
    },

    // 다음 문제 (자동으로 다음으로 이동하지 않음 - 네비게이션 사용)
    nextQuestion() {
        // 단원별 퀴즈인 경우 진행상태 저장
        if (this.state.chapterInfo) {
            const { subjectId, chapterNum, startIndex } = this.state.chapterInfo;
            const totalCompleted = startIndex + this.state.currentIndex + 1;
            const varName = `QUESTIONS_${subjectId.toUpperCase()}_CH${chapterNum}`;
            const totalQuestions = typeof window[varName] !== 'undefined' ? window[varName].length : 0;
            Storage.saveChapterProgress(subjectId, chapterNum, totalCompleted, totalQuestions);
        }
        
        // 네비게이션 버튼만 업데이트
        this.updateNavigationButtons();
    },

    // 문제 건너뛰기 (레거시 - 호환성)
    skipQuestion() {
        // 다음 문제로 이동
        this.goToQuestion(this.state.currentIndex + 1);
    },

    // 결과 화면 표시
    showResults() {
        const { questions, answers, startTime } = this.state;
        
        const total = questions.length;
        const correct = answers.filter(a => a && a.isCorrect).length;
        const accuracy = Math.round((correct / total) * 100);
        const totalTime = Math.round((Date.now() - startTime) / 1000);

        // 세션 완료 처리 (모든 문제를 풀었으면 삭제)
        const allAnswered = answers.every(a => a !== null);
        if (allAnswered) {
            this.completeSession();
        }

        // 퀴즈 카드 숨기기
        document.getElementById('quiz-card').classList.add('hidden');
        document.getElementById('quiz-progress').classList.add('hidden');
        document.getElementById('answer-explanation').classList.add('hidden');
        document.getElementById('submit-container')?.classList.add('hidden');
        document.getElementById('nav-buttons')?.classList.add('hidden');

        // 결과 화면 표시
        const resultEl = document.getElementById('quiz-result');
        resultEl.classList.remove('hidden');

        // 결과 아이콘 및 메시지
        const resultIcon = document.getElementById('result-icon');
        const resultMessage = document.getElementById('result-message');

        // 완료 사운드
        if (typeof Sound !== 'undefined') {
            Sound.complete();
        }

        if (accuracy >= 90) {
            resultIcon.textContent = '🎊';
            resultMessage.textContent = '완벽해요! 최고의 기관사가 될 거예요!';
        } else if (accuracy >= 70) {
            resultIcon.textContent = '🎉';
            resultMessage.textContent = '잘했어요! 조금만 더 노력하면 합격이에요!';
        } else if (accuracy >= 50) {
            resultIcon.textContent = '💪';
            resultMessage.textContent = '괜찮아요! 꾸준히 학습하면 실력이 올라갈 거예요!';
        } else {
            resultIcon.textContent = '📚';
            resultMessage.textContent = '더 열심히 공부해봐요! 화이팅!';
        }

        // 통계 업데이트
        document.getElementById('result-total').textContent = total;
        document.getElementById('result-correct').textContent = correct;
        document.getElementById('result-accuracy').textContent = `${accuracy}%`;

        // 게임 모드 보상 표시
        Gamification.showResultRewards(correct, total);

        // 홈 화면 통계 업데이트
        App.updateHomeStats();
    },

    // 다시 풀기
    retry() {
        this.start(this.state.subject);
        App.navigateTo('quiz');
    },

    // 오답 복습
    reviewWrongAnswers() {
        const wrongQuestions = this.state.questions.filter((q, i) => 
            this.state.answers[i] && !this.state.answers[i].isCorrect
        );

        if (wrongQuestions.length === 0) {
            showToast('틀린 문제가 없습니다!', 'success');
            return;
        }

        // 오답만으로 새 퀴즈 시작
        this.state = {
            questions: wrongQuestions,
            currentIndex: 0,
            answers: new Array(wrongQuestions.length).fill(null),
            selectedOption: null,
            isSubmitted: false,
            startTime: Date.now(),
            questionStartTime: Date.now(),
            subject: null
        };

        Gamification.resetSession();
        this.showQuizUI();
        this.renderQuestion();
    },

    // 오답 노트에서 다시 풀기
    practiceWrongNotes(subjectFilter = 'all') {
        let wrongQuestions = Storage.getWrongQuestions();
        
        if (subjectFilter !== 'all') {
            wrongQuestions = wrongQuestions.filter(q => q.subject === subjectFilter);
        }

        if (wrongQuestions.length === 0) {
            showToast('복습할 오답이 없습니다.', 'info');
            return false;
        }

        this.state = {
            questions: wrongQuestions.sort(() => Math.random() - 0.5),
            currentIndex: 0,
            answers: new Array(wrongQuestions.length).fill(null),
            selectedOption: null,
            isSubmitted: false,
            startTime: Date.now(),
            questionStartTime: Date.now(),
            subject: subjectFilter === 'all' ? null : subjectFilter
        };

        Gamification.resetSession();
        App.navigateTo('quiz');
        this.showQuizUI();
        this.renderQuestion();

        return true;
    },

    // 현재 세션 저장
    saveCurrentSession() {
        if (!this.state.sessionInfo) return;
        
        const { sessionKey, type, subjectId, subjectName, chapterNum, chapterName } = this.state.sessionInfo;
        
        // 푼 문제 수 계산
        const answeredCount = this.state.answers.filter(a => a !== null).length;
        
        Storage.saveQuizSession(sessionKey, {
            type,
            subjectId,
            subjectName,
            chapterNum,
            chapterName,
            currentIndex: this.state.currentIndex,
            totalQuestions: this.state.questions.length,
            answeredCount,
            answers: this.state.answers,
            questionIds: this.state.questions.map(q => q.id)
        });
    },

    // 세션 완료 (삭제)
    completeSession() {
        if (!this.state.sessionInfo) return;
        
        // 세션 삭제
        Storage.deleteQuizSession(this.state.sessionInfo.sessionKey);
    }
};

console.log('Quiz module loaded');
