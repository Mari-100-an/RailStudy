/**
 * 과목(Subject) 정의
 * 모든 과목의 메타데이터
 */

const SUBJECTS = {
    law: {
        id: 'law',
        name: '철도관련법',
        icon: '⚖️',
        color: '#3B82F6',
        description: '철도안전법, 도시철도운전규칙 등'
    },
    urban: {
        id: 'urban',
        name: '도시철도시스템',
        icon: '🚇',
        color: '#8B5CF6',
        description: '도시철도 총론, 신호일반, 관제일반 등'
    },
    emu: {
        id: 'emu',
        name: '전기동차 구조',
        icon: '🚃',
        color: '#10B981',
        description: '전기동차 일반, 특고압회로, 제동장치 등'
    },
    theory: {
        id: 'theory',
        name: '운전이론',
        icon: '📐',
        color: '#F59E0B',
        description: '기초공학, 열차저항, 선로공학 등'
    },
    emergency: {
        id: 'emergency',
        name: '비상시 조치',
        icon: '🚨',
        color: '#EF4444',
        description: '인적오류, 이례상황, 고장조치'
    }
};

// 과목 ID 목록
const SUBJECT_IDS = Object.keys(SUBJECTS);

// 과목 정보 조회
function getSubject(subjectId) {
    return SUBJECTS[subjectId] || null;
}

// 모든 과목 목록
function getAllSubjects() {
    return Object.values(SUBJECTS);
}

console.log('Subjects loaded:', SUBJECT_IDS.length);

