/**
 * LAW 과목 통합
 */

const SUBJECT_LAW = {
    id: 'law',
    name: '철도관련법',
    icon: '⚖️',
    chapters: [
        typeof CHAPTER_LAW_CH1 !== 'undefined' ? CHAPTER_LAW_CH1 : { id: 'law_ch1', name: '철도안전법', sections: [] }
    ]
};

console.log('LAW loaded:', SUBJECT_LAW.chapters.length, 'chapters');
