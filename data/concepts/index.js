/**
 * Concepts 통합 인덱스
 * 모든 과목의 개념정리를 하나로 모아서 제공
 */

// 과목별 데이터 통합 (각 과목의 index.js에서 SUBJECT_LAW, SUBJECT_URBAN 등으로 정의됨)
const CONCEPTS = {
    law: typeof SUBJECT_LAW !== 'undefined' ? SUBJECT_LAW : { id: 'law', name: '철도관련법', icon: '⚖️', chapters: [] },
    urban: typeof SUBJECT_URBAN !== 'undefined' ? SUBJECT_URBAN : { id: 'urban', name: '도시철도시스템', icon: '🚇', chapters: [] },
    emu: typeof SUBJECT_EMU !== 'undefined' ? SUBJECT_EMU : { id: 'emu', name: '전기동차 구조', icon: '🚃', chapters: [] },
    theory: typeof SUBJECT_THEORY !== 'undefined' ? SUBJECT_THEORY : { id: 'theory', name: '운전이론', icon: '📐', chapters: [] },
    emergency: typeof SUBJECT_EMERGENCY !== 'undefined' ? SUBJECT_EMERGENCY : { id: 'emergency', name: '비상시 조치', icon: '🚨', chapters: [] }
};

// ==========================================
// 헬퍼 함수
// ==========================================

/**
 * 과목별 개념 조회
 */
function getConceptsBySubject(subjectId) {
    return CONCEPTS[subjectId] || null;
}

/**
 * 과목의 모든 챕터 조회
 */
function getChaptersBySubject(subjectId) {
    const subject = CONCEPTS[subjectId];
    return subject ? subject.chapters : [];
}

/**
 * 특정 챕터 조회
 */
function getChapter(subjectId, chapterId) {
    const chapters = getChaptersBySubject(subjectId);
    return chapters.find(ch => ch.id === chapterId) || null;
}

/**
 * 특정 섹션 조회
 */
function getSection(subjectId, chapterId, sectionId) {
    const chapter = getChapter(subjectId, chapterId);
    if (!chapter) return null;
    return chapter.sections.find(s => s.id === sectionId) || null;
}

/**
 * 모든 과목 목록
 */
function getAllConcepts() {
    return Object.values(CONCEPTS);
}

/**
 * 특정 키워드로 섹션 검색
 */
function searchSections(keyword) {
    const results = [];
    
    Object.values(CONCEPTS).forEach(subject => {
        subject.chapters.forEach(chapter => {
            chapter.sections.forEach(section => {
                const searchText = `${section.title} ${section.content} ${section.keyTerms.join(' ')}`.toLowerCase();
                if (searchText.includes(keyword.toLowerCase())) {
                    results.push({
                        subject: subject.id,
                        subjectName: subject.name,
                        chapter: chapter.id,
                        chapterName: chapter.name,
                        section: section
                    });
                }
            });
        });
    });
    
    return results;
}

// ==========================================
// 통계 정보
// ==========================================

const CONCEPT_STATS = {
    totalSubjects: Object.keys(CONCEPTS).length,
    totalChapters: Object.values(CONCEPTS).reduce((sum, subj) => sum + subj.chapters.length, 0),
    totalSections: Object.values(CONCEPTS).reduce((sum, subj) => 
        sum + subj.chapters.reduce((s, ch) => s + (ch.sections ? ch.sections.length : 0), 0), 0
    ),
    bySubject: {}
};

Object.entries(CONCEPTS).forEach(([id, subject]) => {
    CONCEPT_STATS.bySubject[id] = {
        chapters: subject.chapters.length,
        sections: subject.chapters.reduce((sum, ch) => sum + (ch.sections ? ch.sections.length : 0), 0)
    };
});

console.log('📖 Concepts loaded');
console.log('  - Subjects:', CONCEPT_STATS.totalSubjects);
console.log('  - Chapters:', CONCEPT_STATS.totalChapters);
console.log('  - Sections:', CONCEPT_STATS.totalSections);
