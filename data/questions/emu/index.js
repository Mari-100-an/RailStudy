/**
 * 전기동차 구조 및 기능 - 전체 문제 통합 (7단원)
 */
const QUESTIONS_EMU = [
    ...(typeof QUESTIONS_EMU_CH1 !== 'undefined' ? QUESTIONS_EMU_CH1 : []),
    ...(typeof QUESTIONS_EMU_CH2 !== 'undefined' ? QUESTIONS_EMU_CH2 : []),
    ...(typeof QUESTIONS_EMU_CH3 !== 'undefined' ? QUESTIONS_EMU_CH3 : []),
    ...(typeof QUESTIONS_EMU_CH4 !== 'undefined' ? QUESTIONS_EMU_CH4 : []),
    ...(typeof QUESTIONS_EMU_CH5 !== 'undefined' ? QUESTIONS_EMU_CH5 : []),
    ...(typeof QUESTIONS_EMU_CH6 !== 'undefined' ? QUESTIONS_EMU_CH6 : []),
    ...(typeof QUESTIONS_EMU_CH7 !== 'undefined' ? QUESTIONS_EMU_CH7 : [])
];

console.log(`[EMU] 총 ${QUESTIONS_EMU.length}개 문제 로드됨`);
