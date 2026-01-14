/**
 * 운전이론 과목 통합
 */

const SUBJECT_THEORY = {
    id: 'theory',
    name: '운전이론',
    icon: '📚',
    chapters: [
        typeof CHAPTER_THEORY_CH1 !== 'undefined' ? CHAPTER_THEORY_CH1 : { id: 'theory_ch1', name: '운전이론 기초', sections: [] }
    ]
};

console.log('Theory concepts loaded:', SUBJECT_THEORY.chapters.length, 'chapters');
