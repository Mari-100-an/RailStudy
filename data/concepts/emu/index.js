/**
 * EMU 과목 통합
 */

const SUBJECT_EMU = {
    id: 'emu',
    name: '전기동차 구조',
    icon: '🚃',
    chapters: [
        CHAPTER_EMU_CH2,
        CHAPTER_EMU_CH3,
        CHAPTER_EMU_CH4,
        CHAPTER_EMU_CH5,
        CHAPTER_EMU_CH6,
        CHAPTER_EMU_CH7
    ]
};

console.log('EMU loaded:', SUBJECT_EMU.chapters.length, 'chapters');
