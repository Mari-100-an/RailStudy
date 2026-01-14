/**
 * 철도관련법 - 제1장
 * 기본 법률 개념 및 철도 운영 관련 법규
 */

const CHAPTER_LAW_CH1 = {
    id: 'law_ch1',
    name: '철도안전법',
    order: 1,
    sections: [
        {
            id: 'law_ch1_001',
            title: '철도사업법의 정의',
            content: '철도운송사업을 경영하는 자가 준수해야 할 기본 사항들을 규정한 법률',
            keyTerms: ['철도사업', '운송사업', '법규'],
            relatedQuestions: []
        },
        {
            id: 'law_ch1_002',
            title: '철도안전법의 목적',
            content: '철도의 안전을 확보하고 이용자의 권리를 보호하기 위한 법률',
            keyTerms: ['안전', '이용자 보호'],
            relatedQuestions: []
        },
        {
            id: 'law_ch1_003',
            title: '운전면허의 종류',
            content: '제1종 전기철도차량운전면허, 제2종 전기철도차량운전면허 등이 있음',
            keyTerms: ['운전면허', '자격'],
            relatedQuestions: []
        },
        {
            id: 'law_ch1_004',
            title: '운전자의 의무',
            content: '운전자는 관련 법규를 준수하고 안전운전에 최선을 다해야 함',
            keyTerms: ['운전자', '의무', '안전'],
            relatedQuestions: []
        },
        {
            id: 'law_ch1_005',
            title: '신호와 표지',
            content: '철도 신호 및 표지는 운전자가 반드시 따라야 하는 지시사항',
            keyTerms: ['신호', '표지', '지시'],
            relatedQuestions: []
        }
    ]
};

console.log('Law Chapter 1 loaded:', CHAPTER_LAW_CH1.sections.length, 'concepts');
