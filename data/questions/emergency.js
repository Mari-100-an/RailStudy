/**
 * EMERGENCY 과목 문제
 * 자동 생성됨 - 수동 편집 가능
 */

const QUESTIONS_EMERGENCY = [
    {
        id: 'emergency_001',
        subject: 'emergency',
        chapter: '인적오류',
        question: '인적 오류(Human Error)의 정의로 옳은 것은?',
        options: [
            '기계의 고장',
            '인간의 오인, 착각, 부주의 등으로 계획하지 않은 결과를 초래하여 발생한 사고나 장애',
            '자연재해로 인한 사고',
            '외부 충격에 의한 사고'
        ],
        answer: 1,
        explanation: '인적 오류란 인간의 오인, 착각, 부주의 등으로 계획하지 않은 결과를 초래하여 발생한 사고나 장애로, 인간이기 때문에 누구에게나 발생할 수 있다.',
        source: '비상시 조치 제1장'
    },
    {
        id: 'emergency_002',
        subject: 'emergency',
        chapter: '인적오류',
        question: '인적오류 예방을 위한 준수 사항으로 틀린 것은?',
        options: [
            '인적 오류 재발 방지를 위해 책임 추궁보다 철저한 원인 분석 실시',
            '오류 발생 경로를 차단할 수 있는 대안 수립',
            '책임자 처벌을 최우선으로 한다',
            '발생 경로를 차단할 수 있는 대안 수립'
        ],
        answer: 2,
        explanation: '인적 오류 재발 방지를 위해서는 책임 추궁보다 철저한 원인 분석 실시가 중요하다.',
        source: '비상시 조치 제1장'
    },
    {
        id: 'emergency_003',
        subject: 'emergency',
        chapter: '이례상황',
        question: '직무사상사고 예방을 위한 안전수칙으로 틀린 것은?',
        options: [
            '출고 시 지정된 통로 이용',
            '선로 내 하차 시 바닥상태 및 열차 진행유무 확인',
            '구내 보행 시 휴대폰 사용 권장',
            '출고 점검 시 구름방지조치를 하고 MC키를 휴대한 후 이석'
        ],
        answer: 2,
        explanation: '구내 보행 시 잡념을 배제하고 항상 열차진행유무를 확인해야 한다. 휴대폰 사용은 위험하다.',
        source: '비상시 조치 제2장'
    },
    {
        id: 'emergency_004',
        subject: 'emergency',
        chapter: '고장조치',
        question: '차량 교체(기 교체)의 정의로 옳은 것은?',
        options: [
            '차량을 폐기하는 것',
            '운행 도중 전기동차 고장 등으로 전기동차를 교환하여 원래의 목적지를 향해 열차번호 등의 변경 없이 계속 운행하는 방법',
            '차량을 새로 구매하는 것',
            '차량을 수리하는 것'
        ],
        answer: 1,
        explanation: '차량 교체란 운행 도중 전기동차 고장 및 기타 사유로 전기동차를 교환하여 원래의 목적지를 향해 열차번호 등의 변경 없이 계속 운행하는 방법이다.',
        source: '비상시 조치 제3장'
    },
    {
        id: 'emergency_005',
        subject: 'emergency',
        chapter: '고장조치',
        question: '퇴행운전(후진운전, 되돌이운전)의 정의로 옳은 것은?',
        options: [
            '정상적인 전진 운행',
            '최초의 진행방향과 반대방향으로 열차를 운전',
            '열차를 정지시키는 것',
            '열차를 가속하는 것'
        ],
        answer: 1,
        explanation: '퇴행운전이란 최초의 진행방향과 반대방향으로 열차를 운전하는 것을 말한다.',
        source: '비상시 조치 제3장'
    },
    {
        id: 'emergency_006',
        subject: 'emergency',
        chapter: '고장조치',
        question: '추진운전(밀기운전)의 정의로 옳은 것은?',
        options: [
            '전부 운전실에서 정상 운전',
            '전부 운전실 고장 등으로 후부 운전실에서 원래 진행하고자 하는 방향으로 밀고 가는 형태로 열차를 운전',
            '열차를 끌어당기는 운전',
            '열차를 정지시키는 운전'
        ],
        answer: 1,
        explanation: '추진운전이란 전부 운전실 고장 등으로 후부 운전실에서 원래 진행하고자 하는 방향으로 밀고 가는 형태로 열차를 운전하는 것이다.',
        source: '비상시 조치 제3장'
    },
    {
        id: 'emergency_007',
        subject: 'emergency',
        chapter: '고장조치',
        question: '모진의 종류로 틀린 것은?',
        options: [
            '신호모진',
            '직류모진',
            '정상모진',
            '신호모진, 직류모진 모두 해당'
        ],
        answer: 2,
        explanation: '모진의 종류에는 신호모진(정지신호 현시된 경우 정당한 절차 없이 신호기 내방으로 진입)과 직류모진(전기동차 회로가 교류로 구성된 상태에서 직류 전차선 구간 진입)이 있다.',
        source: '비상시 조치 제3장'
    },
    {
        id: 'emergency_008',
        subject: 'emergency',
        chapter: '고장조치',
        question: '단속 운전 취급의 설명으로 옳은 것은?',
        options: [
            '최고속도로 운전',
            '구원 연결 및 주의운전개소를 운전할 때 동력핸들을 잠깐 1~2단 후 OFF를 반복 취급하여 저속운전',
            '비상제동 취급',
            '정상 운전'
        ],
        answer: 1,
        explanation: '단속 운전 취급이란 구원 연결 및 주의운전개소를 운전할 때 동력핸들을 잠깐 1~2단 후 OFF를 반복 취급하여 저속운전하는 것이다.',
        source: '비상시 조치 제3장'
    },
];

console.log(`'emergency.js' loaded:`, QUESTIONS_EMERGENCY.length);

