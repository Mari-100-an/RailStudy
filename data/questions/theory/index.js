/**
 * 운전이론 - 전체 문제 통합 (9단원)
 */
var QUESTIONS_THEORY = [
    ...(typeof QUESTIONS_THEORY_CH1 !== 'undefined' ? QUESTIONS_THEORY_CH1 : []),
    ...(typeof QUESTIONS_THEORY_CH2 !== 'undefined' ? QUESTIONS_THEORY_CH2 : []),
    ...(typeof QUESTIONS_THEORY_CH3 !== 'undefined' ? QUESTIONS_THEORY_CH3 : []),
    ...(typeof QUESTIONS_THEORY_CH4 !== 'undefined' ? QUESTIONS_THEORY_CH4 : []),
    ...(typeof QUESTIONS_THEORY_CH5 !== 'undefined' ? QUESTIONS_THEORY_CH5 : []),
    ...(typeof QUESTIONS_THEORY_CH6 !== 'undefined' ? QUESTIONS_THEORY_CH6 : []),
    ...(typeof QUESTIONS_THEORY_CH7 !== 'undefined' ? QUESTIONS_THEORY_CH7 : []),
    ...(typeof QUESTIONS_THEORY_CH8 !== 'undefined' ? QUESTIONS_THEORY_CH8 : []),
    ...(typeof QUESTIONS_THEORY_CH9 !== 'undefined' ? QUESTIONS_THEORY_CH9 : [])
];

console.log(`[Theory] 총 ${QUESTIONS_THEORY.length}개 문제 로드됨`);
