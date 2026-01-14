/**
 * THEORY 과목 문제
 * 자동 생성됨 - 수동 편집 가능
 */

const QUESTIONS_THEORY = [
    {
        id: 'theory_001',
        subject: 'theory',
        chapter: '개요',
        question: '철도의 사명은?',
        options: [
            '최대한 많은 이윤 창출',
            '여객과 화물을 약속한 시간 내 안전하게 목적지까지 수송',
            '철도 시설의 확장',
            '기관사 양성'
        ],
        answer: 1,
        explanation: '철도의 사명은 여객과 화물을 약속한 시간 내 안전하게 목적지까지 수송하는 데 있다.',
        source: '운전이론 일반 제1장'
    },
    {
        id: 'theory_002',
        subject: 'theory',
        chapter: '개요',
        question: '운전이론의 정의로 옳은 것은?',
        options: [
            '열차 속도를 높이는 방법',
            '철도의 사명을 합리적이고 경제적으로 완수하기 위한 운전기술의 기본',
            '철도 시설 관리 방법',
            '기관사 채용 기준'
        ],
        answer: 1,
        explanation: '운전이론은 철도의 사명을 합리적이고 경제적으로 완수하기 위한 운전기술의 기본이 된다.',
        source: '운전이론 일반 제1장'
    },
    {
        id: 'theory_003',
        subject: 'theory',
        chapter: '개요',
        question: '고압의 정의로 옳은 것은?',
        options: [
            '직류 750V 이하',
            '직류 1500V 초과 ~ 7000V 이하, 교류 1000V 초과 ~ 7000V 이하',
            '직류 7000V 초과',
            '교류 1000V 이하'
        ],
        answer: 1,
        explanation: '고압: 직류에 있어서는 1500V, 교류에 있어서는 1000V를 초과하여 7000V 이하의 전압을 말한다.',
        source: '운전이론 일반 제1장'
    },
    {
        id: 'theory_004',
        subject: 'theory',
        chapter: '운전성능',
        question: '점착력에 대한 설명으로 옳은 것은?',
        options: [
            '열차가 레일에서 떨어지려는 힘',
            '차륜답면과 레일의 접촉면과의 최대 마찰력에 대한 항력',
            '열차를 앞으로 미는 힘',
            '바람에 의한 저항력'
        ],
        answer: 1,
        explanation: '점착력이란 차륜답면과 레일의 접촉면과의 최대 마찰력에 대한 항력을 말한다.',
        source: '운전이론 일반 제4장'
    },
    {
        id: 'theory_005',
        subject: 'theory',
        chapter: '운전성능',
        question: '견인력이 점착력보다 큰 경우 발생하는 현상은?',
        options: [
            '활주(Skid)',
            '공전(Slip)',
            '탈선',
            '정상 운행'
        ],
        answer: 1,
        explanation: '견인력 > 점착력이면 공전(Slip)이 발생하여 레일에 손상을 준다.',
        source: '운전이론 일반 제4장'
    },
    {
        id: 'theory_006',
        subject: 'theory',
        chapter: '운전성능',
        question: '제동력이 점착력보다 큰 경우 발생하는 현상은?',
        options: [
            '공전(Slip)',
            '활주(Skid)',
            '탈선',
            '가속'
        ],
        answer: 1,
        explanation: '제동력 > 점착력이면 활주(Skid)가 발생하여 찰상(flat)이 생긴다.',
        source: '운전이론 일반 제4장'
    },
    {
        id: 'theory_007',
        subject: 'theory',
        chapter: '열차저항',
        question: '열차 저항의 종류가 아닌 것은?',
        options: [
            '출발 저항',
            '주행 저항',
            '가속 저항',
            '점착 저항'
        ],
        answer: 3,
        explanation: '열차 저항에는 출발 저항, 주행 저항, 기울기 저항, 곡선 저항, 터널 저항, 가속도 저항이 있다. 점착 저항은 열차 저항의 종류가 아니다.',
        source: '운전이론 일반 제5장'
    },
    {
        id: 'theory_008',
        subject: 'theory',
        chapter: '열차저항',
        question: '출발 저항이 발생하는 속도 범위는?',
        options: [
            '0~3 km/h',
            '3~10 km/h',
            '10~20 km/h',
            '20~30 km/h'
        ],
        answer: 0,
        explanation: '전기동차가 기울기가 없는 평탄 선로에서 출발하려고 할 경우 발생하는 마찰력으로, 0~3 km/h까지를 출발저항이라 한다.',
        source: '운전이론 일반 제5장'
    },
    {
        id: 'theory_009',
        subject: 'theory',
        chapter: '선로공학',
        question: '종곡선의 정의로 옳은 것은?',
        options: [
            '수평 곡선',
            '차량이 선로 기울기의 변경 지점을 원활하게 운행할 수 있도록 종단면에 두는 곡선',
            '레일의 횡방향 곡선',
            '터널 입구 곡선'
        ],
        answer: 1,
        explanation: '종곡선이란 차량이 선로 기울기의 변경 지점을 원활하게 운행할 수 있도록 종단면에 두는 곡선을 말한다.',
        source: '운전이론 일반 제6장'
    },
    {
        id: 'theory_010',
        subject: 'theory',
        chapter: '소음과 진동',
        question: '전동 소음의 발생 원인은?',
        options: [
            '엔진 소리',
            '차륜과 레일의 마찰',
            '바람 소리',
            '승객의 대화'
        ],
        answer: 1,
        explanation: '전동 소음은 차륜과 레일의 마찰에 의해 발생되며, 열차의 속도에 비례한다.',
        source: '운전이론 일반 제7장'
    },
    {
        id: 'theory_011',
        subject: 'theory',
        chapter: '전기기기',
        question: '직류전동기의 장점이 아닌 것은?',
        options: [
            '속도 제어가 쉽다',
            '회전 방향을 쉽게 제어할 수 있다',
            '유지보수가 필요 없다',
            '큰 시동 회전력을 얻을 수 있다'
        ],
        answer: 2,
        explanation: '직류전동기는 브러시와 정류자 등 유지보수가 필요한 부품이 있다. 이에 반해 유도전동기는 유지보수비가 적다.',
        source: '운전이론 일반 제3장'
    },
    {
        id: 'theory_012',
        subject: 'theory',
        chapter: '운전계획',
        question: '수송량의 단위로 여객 수송에 사용되는 것은?',
        options: [
            '수송 톤수',
            '승차 인원',
            '발송 톤수',
            '연톤 km'
        ],
        answer: 1,
        explanation: '수송량의 단위는 여객 수송일 경우 승차 인원, 화물 수송일 경우 수송 톤수, 발송 톤수로 표시한다.',
        source: '운전이론 일반 제8장'
    },
    {
        id: 'theory_013',
        subject: 'theory',
        chapter: '기초공학이론',
        question: '국제단위계(SI)의 기본단위가 아닌 것은?',
        options: [
            '길이(m)',
            '질량(kg)',
            '힘(N)',
            '시간(s)'
        ],
        answer: 2,
        explanation: '국제단위계의 기본단위는 길이(m), 질량(kg), 시간(s), 온도(K), 광도(cd), 전류(A), 물질량(mol)이다. 힘(N)은 유도단위이다.',
        source: '운전이론 일반 제2장'
    },
];

console.log(`'theory.js' loaded:`, QUESTIONS_THEORY.length);

