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

        // 다음 문제 버튼
        const nextBtn = document.getElementById('btn-next');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (typeof Sound !== 'undefined') Sound.select();
                this.nextQuestion();
            });
        }

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
        
        return this.startWithQuestions(questions, null);
    },



    // 과목별 문제 풀이 시작
    startSubjectQuiz(subjectId) {
        const settings = Storage.getSettings();
        const count = settings.questionCount || 10;
        const questions = getRandomQuestions(count, subjectId);
        
        if (questions.length === 0) {
            showToast('선택한 과목에 문제가 없습니다.', 'error');
            return;
        }
        
        this.startWithQuestions(questions, subjectId);
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

    // 특정 문제들로 퀴즈 시작 (학습 모듈에서 사용)
    startWithQuestions(questions, subjectId = null) {
        if (!questions || questions.length === 0) {
            showToast('문제가 없습니다.', 'error');
            return false;
        }

        // 선택 화면 숨기기
        document.getElementById('quiz-start-selection').classList.add('hidden');

        // 상태 초기화
        this.state = {
            questions,
            currentIndex: 0,
            answers: new Array(questions.length).fill(null),
            selectedOption: null,
            isSubmitted: false,
            startTime: Date.now(),
            questionStartTime: Date.now(),
            subject: subjectId
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
        const btnContainer = document.querySelector('#page-quiz .flex.justify-between');

        if (quizCard) quizCard.classList.remove('hidden');
        if (quizProgress) quizProgress.classList.remove('hidden');
        if (quizResult) quizResult.classList.add('hidden');
        if (explanation) explanation.classList.add('hidden');
        if (btnContainer) btnContainer.classList.remove('hidden');

        // 버튼 상태 초기화
        const submitBtn = document.getElementById('btn-submit');
        const nextBtn = document.getElementById('btn-next');
        
        if (submitBtn) {
            submitBtn.classList.remove('hidden');
            submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>정답 확인';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '0';
            submitBtn.style.pointerEvents = 'none';
        }
        if (nextBtn) nextBtn.classList.add('hidden');
    },

    // 문제 렌더링
    renderQuestion() {
        const question = this.state.questions[this.state.currentIndex];
        if (!question) return;

        const { currentIndex, questions } = this.state;

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
            badge.style.backgroundColor = subject.color + '20';
            badge.style.color = subject.color;
        }

        // 문제 번호와 텍스트
        document.getElementById('question-number').textContent = 
            `Q.${currentIndex + 1} - ${question.chapter || ''}`;
        document.getElementById('question-text').textContent = question.question;

        // 선택지 렌더링
        this.renderOptions(question);

        // 상태 초기화
        this.state.selectedOption = null;
        this.state.isSubmitted = false;
        this.state.questionStartTime = Date.now();

        // 해설 숨기기
        document.getElementById('answer-explanation').classList.add('hidden');

        // 버튼 상태
        const submitBtn = document.getElementById('btn-submit');
        const nextBtn = document.getElementById('btn-next');
        
        if (submitBtn) {
            submitBtn.classList.remove('hidden');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '선택하세요';
        }
        if (nextBtn) nextBtn.classList.add('hidden');
    },

    // 선택지 렌더링
    renderOptions(question) {
        const container = document.getElementById('options-container');
        container.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn w-full p-4 rounded-xl text-left transition-all';
            button.innerHTML = `
                <span class="option-label inline-block w-8 h-8 rounded-full text-center leading-8 mr-3">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
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

        // 사운드 재생
        if (typeof Sound !== 'undefined') {
            Sound.select();
        }

        // 버튼 표시 및 활성화
        const submitBtn = document.getElementById('btn-submit');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.pointerEvents = 'auto';
            submitBtn.style.transition = 'opacity 0.3s ease';
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

        // 버튼 상태 변경
        document.getElementById('btn-submit').classList.add('hidden');
        document.getElementById('btn-next').classList.remove('hidden');
    },

    // 다음 문제
    nextQuestion() {
        if (this.state.currentIndex < this.state.questions.length - 1) {
            this.state.currentIndex++;
            this.renderQuestion();

            // 선택지 상태 초기화
            const options = document.querySelectorAll('.option-btn');
            options.forEach(btn => {
                btn.classList.remove('correct', 'wrong', 'selected');
                btn.style.pointerEvents = '';
            });

            // 버튼 상태
            const submitBtn = document.getElementById('btn-submit');
            const nextBtn = document.getElementById('btn-next');
            
            if (submitBtn) {
                submitBtn.classList.remove('hidden');
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0';
                submitBtn.style.pointerEvents = 'none';
            }
            if (nextBtn) nextBtn.classList.add('hidden');
        } else {
            this.showResults();
        }
    },

    // 문제 건너뛰기
    skipQuestion() {
        // 답안을 null로 기록
        this.state.answers[this.state.currentIndex] = {
            selected: null,
            correct: this.state.questions[this.state.currentIndex].answer,
            isCorrect: false,
            skipped: true
        };

        this.nextQuestion();
    },

    // 결과 화면 표시
    showResults() {
        const { questions, answers, startTime } = this.state;
        
        const total = questions.length;
        const correct = answers.filter(a => a && a.isCorrect).length;
        const accuracy = Math.round((correct / total) * 100);
        const totalTime = Math.round((Date.now() - startTime) / 1000);

        // 퀴즈 카드 숨기기
        document.getElementById('quiz-card').classList.add('hidden');
        document.getElementById('quiz-progress').classList.add('hidden');
        document.getElementById('answer-explanation').classList.add('hidden');
        document.getElementById('btn-submit').classList.add('hidden');
        document.getElementById('btn-next').classList.add('hidden');

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
    }
};

console.log('Quiz module loaded');
