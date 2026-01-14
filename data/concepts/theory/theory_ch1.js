/**
 * 운전이론 - 제1장
 * 기본 이론 및 운전 원리
 */

const CHAPTER_THEORY_CH1 = {
    id: 'theory_ch1',
    name: '운전이론 기초',
    order: 1,
    sections: [
        {
            id: 'theory_ch1_001',
            title: '운전 기본 원리',
            content: '안전하고 효율적인 운전을 위한 기본 원리',
            keyTerms: ['운전', '원리', '효율'],
            relatedQuestions: []
        },
        {
            id: 'theory_ch1_002',
            title: '속도 제어',
            content: '적절한 속도 유지를 통한 안전 운전',
            keyTerms: ['속도', '제어', '안전'],
            relatedQuestions: []
        },
        {
            id: 'theory_ch1_003',
            title: '제동 이론',
            content: '효과적인 제동을 위한 이론적 배경',
            keyTerms: ['제동', '이론'],
            relatedQuestions: []
        },
        {
            id: 'theory_ch1_004',
            title: '에너지 관리',
            content: '효율적인 에너지 사용을 통한 경제적 운전',
            keyTerms: ['에너지', '관리', '경제'],
            relatedQuestions: []
        },
        {
            id: 'theory_ch1_005',
            title: '운전 기술',
            content: '다양한 운전 상황에서 필요한 기술',
            keyTerms: ['기술', '상황', '대응'],
            relatedQuestions: []
        }
    ]
};

console.log('Theory Chapter 1 loaded:', CHAPTER_THEORY_CH1.sections.length, 'concepts');
