/**
 * 비상시 조치 - 제1장
 * 비상상황 대응 및 안전 절차
 */

const CHAPTER_EMERGENCY_CH1 = {
    id: 'emergency_ch1',
    name: '비상시 조치 기초',
    order: 1,
    sections: [
        {
            id: 'emergency_ch1_001',
            title: '비상상황의 정의',
            content: '예상치 못한 긴급 상황에 대한 이해 및 대응',
            keyTerms: ['비상', '상황', '대응'],
            relatedQuestions: []
        },
        {
            id: 'emergency_ch1_002',
            title: '비상제동',
            content: '긴급 상황에서 안전하게 차량을 정지시키는 절차',
            keyTerms: ['비상제동', '정지', '안전'],
            relatedQuestions: []
        },
        {
            id: 'emergency_ch1_003',
            title: '비상 신호',
            content: '비상상황 발생 시 신호 전달 절차',
            keyTerms: ['신호', '전달', '통신'],
            relatedQuestions: []
        },
        {
            id: 'emergency_ch1_004',
            title: '승객 안내',
            content: '비상상황에서의 승객 안내 및 대피 절차',
            keyTerms: ['승객', '안내', '대피'],
            relatedQuestions: []
        },
        {
            id: 'emergency_ch1_005',
            title: '사후 조치',
            content: '비상상황 발생 후 필요한 후속 조치',
            keyTerms: ['사후', '조치', '보고'],
            relatedQuestions: []
        }
    ]
};

console.log('Emergency Chapter 1 loaded:', CHAPTER_EMERGENCY_CH1.sections.length, 'concepts');
