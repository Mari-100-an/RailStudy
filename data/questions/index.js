/**
 * Questions 통합 인덱스
 * 모든 과목의 문제를 하나로 모아서 제공
 */

// 과목별 문제 로드 (subjects.js는 이미 로드됨)
// 각 과목 파일에서 QUESTIONS_LAW, QUESTIONS_URBAN 등으로 정의됨

// 전체 문제 통합
const QUESTIONS = [
    ...(typeof QUESTIONS_LAW !== 'undefined' ? QUESTIONS_LAW : []),
    ...(typeof QUESTIONS_URBAN !== 'undefined' ? QUESTIONS_URBAN : []),
    ...(typeof QUESTIONS_EMU !== 'undefined' ? QUESTIONS_EMU : []),
    ...(typeof QUESTIONS_THEORY !== 'undefined' ? QUESTIONS_THEORY : []),
    ...(typeof QUESTIONS_EMERGENCY !== 'undefined' ? QUESTIONS_EMERGENCY : [])
];

// ==========================================
// 헬퍼 함수
// ==========================================

/**
 * 과목별 문제 필터링
 */
function getQuestionsBySubject(subjectId) {
    return QUESTIONS.filter(q => q.subject === subjectId);
}

/**
 * 랜덤 문제 가져오기
 */
function getRandomQuestions(count, subjectId = null) {
    let pool = subjectId ? getQuestionsBySubject(subjectId) : [...QUESTIONS];
    const shuffled = pool.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * 특정 ID의 문제 가져오기
 */
function getQuestionById(id) {
    return QUESTIONS.find(q => q.id === id);
}

/**
 * 챕터별 문제 가져오기
 */
function getQuestionsByChapter(subjectId, chapterName) {
    return QUESTIONS.filter(q => q.subject === subjectId && q.chapter === chapterName);
}

/**
 * 문제 ID 목록으로 문제 가져오기
 */
function getQuestionsByIds(ids) {
    return ids.map(id => getQuestionById(id)).filter(q => q !== undefined);
}

// ==========================================
// 통계 정보
// ==========================================

const QUESTION_STATS = {
    total: QUESTIONS.length,
    bySubject: {
        law: getQuestionsBySubject('law').length,
        urban: getQuestionsBySubject('urban').length,
        emu: getQuestionsBySubject('emu').length,
        theory: getQuestionsBySubject('theory').length,
        emergency: getQuestionsBySubject('emergency').length
    }
};

console.log('📚 Questions loaded:', QUESTION_STATS.total);
console.log('📊 By subject:', QUESTION_STATS.bySubject);

