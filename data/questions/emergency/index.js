/**
 * 비상시 조치 - 전체 문제 통합 (3단원)
 */
var QUESTIONS_EMERGENCY = [
    ...(typeof QUESTIONS_EMERGENCY_CH1 !== 'undefined' ? QUESTIONS_EMERGENCY_CH1 : []),
    ...(typeof QUESTIONS_EMERGENCY_CH2 !== 'undefined' ? QUESTIONS_EMERGENCY_CH2 : []),
    ...(typeof QUESTIONS_EMERGENCY_CH3 !== 'undefined' ? QUESTIONS_EMERGENCY_CH3 : [])
];

console.log(`[Emergency] 총 ${QUESTIONS_EMERGENCY.length}개 문제 로드됨`);
