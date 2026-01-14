/**
 * 학습 모듈
 * 개념정리 및 이론 학습 관리
 */

const Study = {
    currentSubject: null,
    currentChapter: null,
    currentSection: null,

    // 초기화
    init() {
        this.bindEvents();
    },

    // 이벤트 바인딩
    bindEvents() {
        // 뒤로가기 버튼
        const backBtn = document.getElementById('study-back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.goBack());
        }

        // 단원 문제풀기 버튼
        const practiceBtn = document.getElementById('study-practice-btn');
        if (practiceBtn) {
            practiceBtn.addEventListener('click', () => this.startChapterQuiz());
        }
    },

    // 과목 목록 표시
    showSubjectList() {
        this.currentSubject = null;
        this.currentChapter = null;
        this.currentSection = null;

        const container = document.getElementById('study-content');
        const breadcrumb = document.getElementById('study-breadcrumb');
        const practiceBtn = document.getElementById('study-practice-btn');
        const backBtn = document.getElementById('study-back-btn');

        if (practiceBtn) practiceBtn.classList.add('hidden');
        if (backBtn) backBtn.classList.add('hidden'); // 과목 목록에서는 뒤로가기 버튼 숨김
        if (breadcrumb) breadcrumb.innerHTML = '<span class="text-gray-500">과목을 선택하세요</span>';

        let html = '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
        
        Object.values(CONCEPTS).forEach(subject => {
            const chapterCount = subject.chapters.length;
            const hasContent = chapterCount > 0;
            
            html += `
                <div class="study-subject-card p-6 rounded-xl cursor-pointer transition-all hover:scale-[1.02] ${hasContent ? '' : 'opacity-50'}"
                     onclick="${hasContent ? `Study.showChapterList('${subject.id}')` : ''}"
                     style="border-left: 4px solid ${SUBJECTS[subject.id]?.color || '#666'}">
                    <div class="flex items-center gap-4">
                        <span class="text-4xl">${subject.icon}</span>
                        <div>
                            <h3 class="text-xl font-bold">${subject.name}</h3>
                            <p class="text-sm opacity-70">
                                ${hasContent ? `${chapterCount}개 단원` : '준비 중...'}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    },

    // 단원 목록 표시
    showChapterList(subjectId) {
        this.currentSubject = subjectId;
        this.currentChapter = null;
        this.currentSection = null;

        const subject = CONCEPTS[subjectId];
        if (!subject) return;

        const container = document.getElementById('study-content');
        const breadcrumb = document.getElementById('study-breadcrumb');
        const practiceBtn = document.getElementById('study-practice-btn');
        const backBtn = document.getElementById('study-back-btn');

        if (practiceBtn) practiceBtn.classList.add('hidden');
        if (backBtn) backBtn.classList.remove('hidden'); // 단원 목록에서는 뒤로가기 버튼 표시
        breadcrumb.innerHTML = `
            <span class="text-primary cursor-pointer hover:underline" onclick="Study.showSubjectList()">과목 선택</span>
            <i class="fas fa-chevron-right text-xs mx-2 opacity-50"></i>
            <span>${subject.icon} ${subject.name}</span>
        `;

        let html = '<div class="space-y-3">';
        
        subject.chapters.forEach(chapter => {
            const sectionCount = chapter.sections.length;
            html += `
                <div class="study-chapter-card p-5 rounded-xl cursor-pointer transition-all hover:bg-opacity-80"
                     onclick="Study.showSectionList('${subjectId}', '${chapter.id}')">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                                ${chapter.order}
                            </span>
                            <div>
                                <h4 class="font-bold text-lg">${chapter.name}</h4>
                                <p class="text-sm opacity-70">${sectionCount}개 섹션</p>
                            </div>
                        </div>
                        <i class="fas fa-chevron-right opacity-50"></i>
                    </div>
                </div>
            `;
        });
        
        if (subject.chapters.length === 0) {
            html += `
                <div class="text-center py-12 opacity-50">
                    <i class="fas fa-book-open text-4xl mb-4"></i>
                    <p>컨텐츠 준비 중입니다...</p>
                </div>
            `;
        }
        
        html += '</div>';
        container.innerHTML = html;
    },

    // 섹션 목록 표시
    showSectionList(subjectId, chapterId) {
        this.currentSubject = subjectId;
        this.currentChapter = chapterId;
        this.currentSection = null;

        const subject = CONCEPTS[subjectId];
        const chapter = getChapter(subjectId, chapterId);
        if (!subject || !chapter) return;

        const container = document.getElementById('study-content');
        const breadcrumb = document.getElementById('study-breadcrumb');
        const practiceBtn = document.getElementById('study-practice-btn');
        const backBtn = document.getElementById('study-back-btn');

        if (practiceBtn) {
            practiceBtn.classList.remove('hidden');
            practiceBtn.innerHTML = `<i class="fas fa-pencil-alt mr-2"></i>${chapter.name} 문제풀기`;
        }
        if (backBtn) backBtn.classList.remove('hidden'); // 섹션 목록에서는 뒤로가기 버튼 표시

        breadcrumb.innerHTML = `
            <span class="text-primary cursor-pointer hover:underline" onclick="Study.showSubjectList()">과목 선택</span>
            <i class="fas fa-chevron-right text-xs mx-2 opacity-50"></i>
            <span class="text-primary cursor-pointer hover:underline" onclick="Study.showChapterList('${subjectId}')">${subject.icon} ${subject.name}</span>
            <i class="fas fa-chevron-right text-xs mx-2 opacity-50"></i>
            <span>${chapter.name}</span>
        `;

        let html = '<div class="space-y-3">';
        
        chapter.sections.forEach((section, index) => {
            html += `
                <div class="study-section-card p-5 rounded-xl cursor-pointer transition-all hover:bg-opacity-80"
                     onclick="Study.showContent('${subjectId}', '${chapterId}', '${section.id}')">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="w-6 h-6 rounded bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-medium">
                                ${index + 1}
                            </span>
                            <span class="font-medium">${section.title}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            ${section.relatedQuestions.length > 0 ? 
                                `<span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">문제 ${section.relatedQuestions.length}개</span>` : ''}
                            <i class="fas fa-chevron-right opacity-50"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    },

    // 컨텐츠 표시
    showContent(subjectId, chapterId, sectionId) {
        this.currentSubject = subjectId;
        this.currentChapter = chapterId;
        this.currentSection = sectionId;

        const subject = CONCEPTS[subjectId];
        const chapter = getChapter(subjectId, chapterId);
        const section = getSection(subjectId, chapterId, sectionId);
        if (!subject || !chapter || !section) return;

        const container = document.getElementById('study-content');
        const breadcrumb = document.getElementById('study-breadcrumb');
        const practiceBtn = document.getElementById('study-practice-btn');
        const backBtn = document.getElementById('study-back-btn');

        if (practiceBtn) {
            practiceBtn.classList.remove('hidden');
        }
        if (backBtn) backBtn.classList.remove('hidden'); // 컨텐츠 화면에서는 뒤로가기 버튼 표시

        breadcrumb.innerHTML = `
            <span class="text-primary cursor-pointer hover:underline" onclick="Study.showSubjectList()">과목 선택</span>
            <i class="fas fa-chevron-right text-xs mx-2 opacity-50"></i>
            <span class="text-primary cursor-pointer hover:underline" onclick="Study.showChapterList('${subjectId}')">${subject.icon} ${subject.name}</span>
            <i class="fas fa-chevron-right text-xs mx-2 opacity-50"></i>
            <span class="text-primary cursor-pointer hover:underline" onclick="Study.showSectionList('${subjectId}', '${chapterId}')">${chapter.name}</span>
            <i class="fas fa-chevron-right text-xs mx-2 opacity-50"></i>
            <span>${section.title}</span>
        `;

        // Markdown을 HTML로 간단히 변환
        const contentHtml = this.parseMarkdown(section.content);

        let html = `
            <article class="study-article prose max-w-none">
                <h1 class="text-2xl font-bold mb-6 pb-4 border-b">${section.title}</h1>
                <div class="study-content-body">
                    ${contentHtml}
                </div>
            </article>

            <!-- 핵심 용어 -->
            ${section.keyTerms.length > 0 ? `
                <div class="mt-8 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <h3 class="font-bold text-yellow-800 mb-2">
                        <i class="fas fa-key mr-2"></i>핵심 용어
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        ${section.keyTerms.map(term => `
                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">${term}</span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- 관련 문제 -->
            ${section.relatedQuestions.length > 0 ? `
                <div class="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <h3 class="font-bold text-blue-800 mb-3">
                        <i class="fas fa-question-circle mr-2"></i>관련 문제 풀어보기
                    </h3>
                    <button onclick="Study.startRelatedQuiz('${sectionId}')" 
                            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        <i class="fas fa-play mr-2"></i>관련 문제 ${section.relatedQuestions.length}개 풀기
                    </button>
                </div>
            ` : ''}

            <!-- 이전/다음 섹션 네비게이션 -->
            <div class="mt-12 flex gap-4 justify-center items-center py-8 border-t">
                ${this.getPrevSection(subjectId, chapterId, sectionId) ? `
                    <button onclick="Study.showContent('${subjectId}', '${chapterId}', '${this.getPrevSection(subjectId, chapterId, sectionId).id}')"
                            class="flex-1 max-w-xs px-6 py-4 bg-primary text-white rounded-xl hover:bg-primary/80 transition font-bold flex items-center justify-center gap-2">
                        <i class="fas fa-chevron-left"></i>
                        <span>이전</span>
                    </button>
                ` : '<div class="flex-1 max-w-xs"></div>'}
                
                <button onclick="Study.showSectionList('${subjectId}', '${chapterId}')" class="px-4 py-2 text-gray-600 hover:text-primary transition">
                    <i class="fas fa-list"></i>섹션 목록
                </button>
                
                ${this.getNextSection(subjectId, chapterId, sectionId) ? `
                    <button onclick="Study.showContent('${subjectId}', '${chapterId}', '${this.getNextSection(subjectId, chapterId, sectionId).id}')"
                            class="flex-1 max-w-xs px-6 py-4 bg-primary text-white rounded-xl hover:bg-primary/80 transition font-bold flex items-center justify-center gap-2">
                        <span>다음</span>
                        <i class="fas fa-chevron-right"></i>
                    </button>
                ` : '<div class="flex-1 max-w-xs"></div>'}
            </div>
        `;
        
        container.innerHTML = html;
        container.scrollTop = 0;
    },

    // 간단한 Markdown 파서
    parseMarkdown(text) {
        // 테이블 먼저 처리
        text = this.parseMarkdownTables(text);
        
        // 코드 블록 먼저 처리 (```...```)
        text = text.replace(/```[\s\S]*?```/g, (match) => {
            const code = match.slice(3, -3).trim();
            return `<pre class="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto font-mono text-sm border border-gray-200"><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
        });
        
        // 인라인 코드 (`...`)
        text = text.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded font-mono text-sm text-blue-700">$1</code>');
        
        return text
            // 헤더
            .replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold mt-6 mb-3">$1</h3>')
            .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-8 mb-4 text-primary">$1</h2>')
            // 굵게
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary">$1</strong>')
            // 인용
            .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-primary pl-4 py-2 my-4 bg-blue-50 rounded-r">$1</blockquote>')
            // 리스트
            .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
            .replace(/^- (.*$)/gm, '<li class="ml-4 mb-1 list-disc">$1</li>')
            // 줄바꿈
            .replace(/\n\n/g, '</p><p class="mb-4">')
            .replace(/\n/g, '<br>');
    },

    // 마크다운 테이블 파싱
    parseMarkdownTables(text) {
        const lines = text.split('\n');
        let result = [];
        let inTable = false;
        let tableRows = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // 테이블 행 감지 (|로 시작하고 끝나는 행)
            if (line.startsWith('|') && line.endsWith('|')) {
                // 구분선(|---|---|) 스킵
                if (line.match(/^\|[\s\-:|]+\|$/)) {
                    continue;
                }
                
                if (!inTable) {
                    inTable = true;
                    tableRows = [];
                }
                tableRows.push(line);
            } else {
                // 테이블 종료
                if (inTable) {
                    result.push(this.buildTable(tableRows));
                    inTable = false;
                    tableRows = [];
                }
                result.push(lines[i]);
            }
        }

        // 마지막 테이블 처리
        if (inTable && tableRows.length > 0) {
            result.push(this.buildTable(tableRows));
        }

        return result.join('\n');
    },

    // 테이블 HTML 생성
    buildTable(rows) {
        if (rows.length === 0) return '';

        let html = '<table class="w-full border-collapse my-4">';
        
        rows.forEach((row, idx) => {
            const cells = row.split('|').filter(c => c.trim() !== '');
            const tag = idx === 0 ? 'th' : 'td';
            const cellClass = idx === 0 ? 'bg-gray-100 font-bold border px-3 py-2' : 'border px-3 py-2';
            
            html += '<tr>';
            cells.forEach(cell => {
                html += `<${tag} class="${cellClass}">${cell.trim()}</${tag}>`;
            });
            html += '</tr>';
        });

        html += '</table>';
        return html;
    },

    // 이전 섹션 가져오기
    getPrevSection(subjectId, chapterId, sectionId) {
        const chapter = getChapter(subjectId, chapterId);
        if (!chapter) return null;
        const index = chapter.sections.findIndex(s => s.id === sectionId);
        return index > 0 ? chapter.sections[index - 1] : null;
    },

    // 다음 섹션 가져오기
    getNextSection(subjectId, chapterId, sectionId) {
        const chapter = getChapter(subjectId, chapterId);
        if (!chapter) return null;
        const index = chapter.sections.findIndex(s => s.id === sectionId);
        return index < chapter.sections.length - 1 ? chapter.sections[index + 1] : null;
    },

    // 뒤로가기
    goBack() {
        if (this.currentSection) {
            this.showSectionList(this.currentSubject, this.currentChapter);
        } else if (this.currentChapter) {
            this.showChapterList(this.currentSubject);
        } else if (this.currentSubject) {
            this.showSubjectList();
        } else {
            // 과목 목록에서도 뒤로가기 버튼이 눌렸을 때는 메인으로 돌아감
            App.navigateTo('home');
        }
    },

    // 단원 문제풀기
    startChapterQuiz() {
        if (!this.currentSubject || !this.currentChapter) return;
        
        const chapter = getChapter(this.currentSubject, this.currentChapter);
        if (!chapter) return;

        // 해당 단원의 관련 문제 ID들 수집
        const questionIds = [];
        chapter.sections.forEach(section => {
            questionIds.push(...section.relatedQuestions);
        });

        if (questionIds.length === 0) {
            showToast('해당 단원에 연결된 문제가 없습니다.', 'info');
            return;
        }

        // 해당 문제들로 퀴즈 시작
        const questions = QUESTIONS.filter(q => questionIds.includes(q.id));
        if (questions.length > 0) {
            App.navigateTo('quiz');
            Quiz.startWithQuestions(questions);
        }
    },

    // 관련 문제 풀기
    startRelatedQuiz(sectionId) {
        const section = getSection(this.currentSubject, this.currentChapter, sectionId);
        if (!section || section.relatedQuestions.length === 0) return;

        const questions = QUESTIONS.filter(q => section.relatedQuestions.includes(q.id));
        if (questions.length > 0) {
            App.navigateTo('quiz');
            Quiz.startWithQuestions(questions);
        }
    }
};
