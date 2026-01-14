/**
 * 비상시 조치 과목 통합
 */

const SUBJECT_EMERGENCY = {
    id: 'emergency',
    name: '비상시 조치',
    icon: '🚨',
    chapters: [
        typeof CHAPTER_EMERGENCY_CH1 !== 'undefined' ? CHAPTER_EMERGENCY_CH1 : { id: 'emergency_ch1', name: '비상시 조치 기초', sections: [] }
    ]
};

console.log('Emergency concepts loaded:', SUBJECT_EMERGENCY.chapters.length, 'chapters');
