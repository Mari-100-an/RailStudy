/**
 * URBAN 과목 통합
 * 
 * 포함 챕터:
 * - 1장: 도시철도 총론 (16 concepts)
 * - 2장: 철도안전 (16 concepts)
 * - 3장: 영업 일반 (31 concepts)
 * - 4장: 운전 일반 (57 concepts)
 * - 5장: 차량 일반 (43 concepts)
 * - 6장: 신호 일반 (22 concepts)
 * - 7장: 전기 설비 일반
 * - 8장: 토목 일반
 * - 9장: 정보 통신 일반
 * - 10장: 관제 일반
 * - 11장: 노면 전차
 */

const SUBJECT_URBAN = {
    id: 'urban',
    name: '도시철도시스템',
    icon: '🚇',
    chapters: [
        CHAPTER_URBAN_CH1,
        CHAPTER_URBAN_CH2,
        CHAPTER_URBAN_CH3,
        CHAPTER_URBAN_CH4,
        CHAPTER_URBAN_CH5,
        CHAPTER_URBAN_CH6,
        CHAPTER_URBAN_CH7,
        CHAPTER_URBAN_CH8,
        CHAPTER_URBAN_CH9,
        CHAPTER_URBAN_CH10,
        CHAPTER_URBAN_CH11
    ]
};

console.log('URBAN loaded:', SUBJECT_URBAN.chapters.length, 'chapters');
