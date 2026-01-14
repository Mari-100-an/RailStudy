/**
 * URBAN 과목 문제
 * 자동 생성됨 - 수동 편집 가능
 */

const QUESTIONS_URBAN = [
    {
        id: 'urban_001',
        subject: 'urban',
        chapter: '도시철도 총론',
        question: '도시철도의 특성으로 틀린 것은?',
        options: [
            '안전성',
            '정시성',
            '접근성',
            '저비용'
        ],
        answer: 3,
        explanation: '도시철도의 특성은 안전성, 정시성, 접근성, 편의성이다. 도시철도는 건설 및 운영비용이 높아 저비용이라고 할 수 없다.',
        source: '도시철도시스템 일반 제1장'
    },
    {
        id: 'urban_002',
        subject: 'urban',
        chapter: '철도안전',
        question: '철도산업발전기본법 제정 연도는?',
        options: [
            '2001년',
            '2003년',
            '2005년',
            '2007년'
        ],
        answer: 1,
        explanation: '2003년 7월 29일 철도산업발전기본법이 제정되었다. 이로 인해 기존 철도법은 철도건설법, 철도사업법, 철도안전법으로 분리되었다.',
        source: '도시철도시스템 일반 제2장'
    },
    {
        id: 'urban_003',
        subject: 'urban',
        chapter: '신호일반',
        question: '철도신호제어 설비의 설치 목적이 아닌 것은?',
        options: [
            '열차의 안전 운행',
            '수송 능력 향상',
            '선로 이용률 향상',
            '운행 비용 증가'
        ],
        answer: 3,
        explanation: '철도신호제어 설비는 열차의 안전 운행, 수송 능력 향상, 선로 이용률 향상을 목적으로 한다. 비용 증가는 목적이 아니다.',
        source: '도시철도시스템 일반 제6장'
    },
    {
        id: 'urban_004',
        subject: 'urban',
        chapter: '신호일반',
        question: '페일 세이프(Fail Safe)의 의미로 옳은 것은?',
        options: [
            '고장이 발생하지 않음',
            '고장이 발생해도 안전측으로 동작',
            '고장 시 빠른 복구',
            '고장 예방'
        ],
        answer: 1,
        explanation: '페일 세이프란 시스템에 고장이 발생하더라도 안전측으로 동작하여 사고를 방지하는 설계 원칙이다.',
        source: '도시철도시스템 일반 제6장'
    },
    {
        id: 'urban_005',
        subject: 'urban',
        chapter: '토목일반',
        question: '궤간의 측정 기준점은 레일 윗면에서 아래로 몇 mm인가?',
        options: [
            '10mm',
            '14mm',
            '16mm',
            '20mm'
        ],
        answer: 1,
        explanation: '궤간이란 양쪽 레일 안쪽 간의 거리 중 가장 짧은 거리를 말하며, 레일의 윗면으로부터 14mm 아래 지점을 기준으로 한다.',
        source: '도시철도시스템 일반 제8장'
    },
    {
        id: 'urban_006',
        subject: 'urban',
        chapter: '토목일반',
        question: '표준궤간의 표준 치수는?',
        options: [
            '1,067mm',
            '1,435mm',
            '1,520mm',
            '1,600mm'
        ],
        answer: 1,
        explanation: '표준궤간의 표준 치수는 1,435mm이다.',
        source: '도시철도시스템 일반 제8장'
    },
    {
        id: 'urban_007',
        subject: 'urban',
        chapter: '토목일반',
        question: '캔트(Cant)에 대한 설명으로 옳은 것은?',
        options: [
            '안쪽 레일을 기준으로 바깥쪽 레일을 높게 부설하는 것',
            '바깥쪽 레일을 기준으로 안쪽 레일을 높게 부설하는 것',
            '궤간을 넓히는 것',
            '궤간을 좁히는 것'
        ],
        answer: 0,
        explanation: '캔트란 차량이 곡선 구간을 안전하게 운행할 수 있도록 안쪽 레일을 기준으로 바깥쪽 레일을 높게 부설하는 것을 말한다.',
        source: '도시철도시스템 일반 제8장'
    },
    {
        id: 'urban_008',
        subject: 'urban',
        chapter: '토목일반',
        question: '슬랙(Slack)에 대한 설명으로 옳은 것은?',
        options: [
            '바깥쪽 레일을 높이는 것',
            '바깥쪽 레일을 기준으로 안쪽 레일을 조정하여 궤간을 넓히는 것',
            '레일 간격을 좁히는 것',
            '레일을 교체하는 것'
        ],
        answer: 1,
        explanation: '슬랙이란 차량이 곡선 구간의 선로를 원활하게 통과하도록 바깥쪽 레일을 기준으로 안쪽 레일을 조정하여 궤간을 넓히는 것을 말한다.',
        source: '도시철도시스템 일반 제8장'
    },
    {
        id: 'urban_009',
        subject: 'urban',
        chapter: '관제일반',
        question: '관제 업무에 해당하지 않는 것은?',
        options: [
            '철도차량 운행을 제어, 통제, 감시',
            '철도차량 운행과 관련한 조언과 정보 제공',
            '철도차량 제작 및 판매',
            '철도 사고 등 발생 시 사고 복구 지시'
        ],
        answer: 2,
        explanation: '관제 업무에는 열차 운행 제어·통제·감시, 조언과 정보 제공, 사고 복구 지시 등이 포함되지만, 차량 제작 및 판매는 포함되지 않는다.',
        source: '도시철도시스템 일반 제10장'
    },
    {
        id: 'urban_010',
        subject: 'urban',
        chapter: '전기설비일반',
        question: '전기철도란?',
        options: [
            '디젤을 동력원으로 하는 철도',
            '전기를 주 동력원으로 하여 차량을 운전하는 철도',
            '증기를 동력원으로 하는 철도',
            '수소를 동력원으로 하는 철도'
        ],
        answer: 1,
        explanation: '전기철도란 전기를 주 동력원으로 하여 차량을 운전하는 철도를 말한다.',
        source: '도시철도시스템 일반 제7장'
    },
    // ========== 제1장 도시철도 총론 ==========
    {
        id: 'metro_1_001',
        subject: 'urban',
        chapter: '도시철도 총론',
        question: '도시철도법상 도시철도 시설에 포함되지 않는 것은?',
        options: [
            '선로 및 역 시설',
            '차량 보수 기지 시설',
            '차량 제작 공장',
            '전철 전력 설비'
        ],
        answer: 2,
        explanation: '도시철도 시설에는 선로, 역 시설, 차량 보수 기지 시설, 전철 전력 설비 등이 포함되지만, 차량 제작 공장은 포함되지 않는다.',
        source: '도시철도법 제2조'
    },
    {
        id: 'metro_1_002',
        subject: 'urban',
        chapter: '도시철도 총론',
        question: 'AGT(Automated Guideway Transit)에 대한 설명으로 옳지 않은 것은?',
        options: [
            '전용 궤도를 주행하는 자동화 무인 시스템',
            '주로 고무 타이어(장륜식)를 사용',
            '철제 차륜만 사용 가능',
            '조향 장치를 갖추기도 함'
        ],
        answer: 2,
        explanation: 'AGT는 철제 차륜, 고무 타이어, 자기부상 등 다양한 안내 방식을 사용할 수 있다. 철제 차륜만 사용 가능하다는 설명은 틀렸다.',
        source: '도시철도시스템 일반 제1장'
    },
    {
        id: 'metro_1_003',
        subject: 'urban',
        chapter: '도시철도 총론',
        question: '공항철도에 대한 설명으로 옳지 않은 것은?',
        options: [
            '민간 투자 사업(BTO) 방식으로 건설',
            'DC 1,500V 전기 방식 사용',
            'VVVF 인버터(IGBT) 제어',
            '6량 편성 운행'
        ],
        answer: 1,
        explanation: '공항철도는 AC 25,000V 60Hz 전기 방식을 사용한다. DC 1,500V가 아니다.',
        source: '도시철도시스템 일반 제1장'
    },
    {
        id: 'metro_1_004',
        subject: 'urban',
        chapter: '도시철도 총론',
        question: '부산 4호선의 차륜 방식은?',
        options: [
            '철제 차륜',
            '고무 차륜',
            '자기부상',
            '모노레일'
        ],
        answer: 1,
        explanation: '부산 4호선은 고무 차륜 경전철로, DC 750V 전기 방식을 사용한다.',
        source: '도시철도시스템 일반 제1장'
    },
    {
        id: 'metro_1_005',
        subject: 'urban',
        chapter: '도시철도 총론',
        question: '우이신설경전철의 집전 방식은?',
        options: [
            'AC 25,000V 가공전차선',
            'DC 1,500V 가공전차선',
            'DC 750V 제3궤조 하면 접촉',
            'DC 750V 제3궤조 상면 접촉'
        ],
        answer: 2,
        explanation: '우이신설경전철은 DC 750V 제3궤조 하면 접촉 방식을 사용하며, 완전 무인운전을 한다.',
        source: '도시철도시스템 일반 제1장'
    },
    {
        id: 'metro_1_006',
        subject: 'urban',
        chapter: '도시철도 총론',
        question: '의정부경전철에 대한 설명으로 옳은 것은?',
        options: [
            '표준궤(1,435mm) 사용',
            '선형 유도전동기(LIM) 추진',
            '광궤(1,620mm) 및 고무바퀴 사용',
            'AC 25,000V 전기 방식'
        ],
        answer: 2,
        explanation: '의정부경전철은 Siemens VAL208 차량을 사용하며, 1,620mm 광궤와 고무바퀴(AGT)를 채택했다. LIM은 용인경량전철과 자기부상열차에 적용된다.',
        source: '도시철도시스템 일반 제1장'
    },
    {
        id: 'metro_1_007',
        subject: 'urban',
        chapter: '도시철도 총론',
        question: '우이신설경전철에 없는 제동 종류는?',
        options: [
            '상용제동',
            '비상제동',
            '주차제동',
            '보안제동'
        ],
        answer: 3,
        explanation: '우이신설경전철의 제동 종류에는 상용제동, 비상제동, 주차제동, 정차제동이 있다. 보안제동은 포함되지 않는다.',
        source: '도시철도시스템 일반 제1장'
    },
    {
        id: 'metro_1_008',
        subject: 'urban',
        chapter: '도시철도 총론',
        question: '인천공항 자기부상철도의 궤간은?',
        options: [
            '1,435mm',
            '1,620mm',
            '1,850mm',
            '1,067mm'
        ],
        answer: 2,
        explanation: '인천공항 자기부상철도(에코비)의 궤간은 1,850mm로 국내 유일의 특수 광궤이다.',
        source: '도시철도시스템 일반 제1장'
    },
    // ========== 제2장 철도안전 ==========
    {
        id: 'metro_2_001',
        subject: 'urban',
        chapter: '철도안전',
        question: '철도 관련 법령의 위계에 대한 설명으로 옳은 것은?',
        options: [
            '도시철도법은 철도안전법의 하위법이다',
            '철도산업발전기본법이 최상위법이다',
            '궤도운송법은 철도건설법의 하위법이다',
            '철도사업법이 최상위법이다'
        ],
        answer: 1,
        explanation: '철도산업발전기본법이 최상위법이며, 도시철도법과 궤도운송법은 철도안전법의 하위법이 아닌 독립적인 법률이다.',
        source: '도시철도시스템 일반 제2장'
    },
    {
        id: 'metro_2_002',
        subject: 'urban',
        chapter: '철도안전',
        question: '버드의 법칙에서 600이 의미하는 것은?',
        options: [
            '중상/사망 사고',
            '경상 사고',
            '물적 피해',
            '아차 사고(Near Miss)'
        ],
        answer: 3,
        explanation: '버드의 법칙(1:10:30:600)에서 600은 아차 사고(Near Miss), 즉 사고가 날 뻔한 상황을 의미한다.',
        source: '도시철도시스템 일반 제2장'
    },
    {
        id: 'metro_2_003',
        subject: 'urban',
        chapter: '철도안전',
        question: '사고비용 빙산 이론에서 직접비용과 간접비용의 비율은?',
        options: [
            '1 : 5',
            '1 : 10',
            '1 : 29',
            '1 : 50 이상'
        ],
        answer: 3,
        explanation: '버드가 제안한 사고비용 빙산 이론에서 직접비용과 간접비용의 비율은 1 : 50 이상이다.',
        source: '도시철도시스템 일반 제2장'
    },
    {
        id: 'metro_2_004',
        subject: 'urban',
        chapter: '철도안전',
        question: '철도안전관리체계(SMS)의 3대 구성요소에 해당하지 않는 것은?',
        options: [
            '철도안전관리시스템',
            '열차운행체계',
            '유지관리체계',
            '철도산업발전기반'
        ],
        answer: 3,
        explanation: 'SMS의 3대 구성요소는 철도안전관리시스템, 열차운행체계, 유지관리체계이다. 철도산업발전기반은 포함되지 않는다.',
        source: '도시철도시스템 일반 제2장'
    },
    {
        id: 'metro_2_005',
        subject: 'urban',
        chapter: '철도안전',
        question: '재해 발생의 4M 요인에서 Media가 의미하는 것은?',
        options: [
            '인적 요인',
            '설비적 요인',
            '작업적 요인',
            '관리적 요인'
        ],
        answer: 2,
        explanation: '4M 요인 중 Media는 작업적 요인(작업 환경, 방법)을 의미한다. Man(인적), Machine(설비적), Management(관리적)이다.',
        source: '도시철도시스템 일반 제2장'
    },
    // ========== 제3장 영업 일반 ==========
    {
        id: 'metro_3_001',
        subject: 'urban',
        chapter: '영업 일반',
        question: '부서 간 갈등의 주요 원인에 해당하지 않는 것은?',
        options: [
            '타 부서에 대한 지식 부족',
            '목표의 차이',
            '의사소통 장애',
            '근무 시간 차이'
        ],
        answer: 3,
        explanation: '부서 간 갈등의 5대 원인은 타 부서 지식 부족, 상호 의존성, 목표 차이, 의사소통 장애, 지각 차이이다. 근무 시간 차이는 주요 원인이 아니다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_002',
        subject: 'urban',
        chapter: '영업 일반',
        question: '한국철도공사(Korail)의 도시철도 담당 조직은?',
        options: [
            '수도권본부',
            '광역철도본부',
            '고속철도본부',
            '물류본부'
        ],
        answer: 1,
        explanation: 'Korail은 본사에 광역철도본부를 설치하여 도시철도를 담당한다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_003',
        subject: 'urban',
        chapter: '영업 일반',
        question: '도시철도 운영과 관련된 법령이 아닌 것은?',
        options: [
            '철도사업법',
            '도시철도운전규칙',
            '건축법',
            '철도차량운전규칙'
        ],
        answer: 2,
        explanation: '도시철도 운영 관련 법령에는 철도사업법, 도시철도운전규칙, 철도차량운전규칙, 한국철도공사법 등이 있다. 건축법은 직접 관련된 법령이 아니다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_004',
        subject: 'urban',
        chapter: '영업 일반',
        question: '철도교통관제사의 9대 업무에 해당하지 않는 것은?',
        options: [
            '운전 정리',
            '열차 방호',
            '상황 전파',
            '차량 정비'
        ],
        answer: 3,
        explanation: '관제사의 9대 업무는 확인점검, 감시, 제어, 통제, 운전정리, 승인허가, 열차방호, 상황전파, 상황보고이다. 차량 정비는 포함되지 않는다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_005',
        subject: 'urban',
        chapter: '영업 일반',
        question: '광역상황팀의 이례 사항 업무 처리 순서로 옳은 것은?',
        options: [
            '상황 파악 → 상황 수보 → 상황 전파 → 고객 안내 → 보고서 작성',
            '상황 수보 → 상황 파악 → 상황 전파 → 고객 안내 → 보고서 작성',
            '상황 전파 → 상황 수보 → 상황 파악 → 고객 안내 → 보고서 작성',
            '상황 수보 → 상황 전파 → 상황 파악 → 고객 안내 → 보고서 작성'
        ],
        answer: 1,
        explanation: '이례 사항 처리 순서는 상황 수보 → 상황 파악 → 상황 전파 → 고객 안내 → 보고서 작성이다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_006',
        subject: 'urban',
        chapter: '영업 일반',
        question: '열차 운행 조정 방법에 해당하지 않는 것은?',
        options: [
            '운행 간격 조정',
            '특별 출고',
            '반복 운행',
            '차량 신규 제작'
        ],
        answer: 3,
        explanation: '열차 운행 조정 방법에는 운행 간격 조정, 특별 출고, 운행 조정, 운행 중지, 반복 운행이 있다. 차량 신규 제작은 운행 조정 방법이 아니다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_007',
        subject: 'urban',
        chapter: '영업 일반',
        question: '혼잡도 150% 기준 중량(重) 전철의 1량당 수송 능력은?',
        options: [
            '150명',
            '192명',
            '240명',
            '300명'
        ],
        answer: 2,
        explanation: '혼잡도 150% 기준 중량(重) 전철은 1량당 240명, 중량(中)은 192명, 경량은 150명이다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_008',
        subject: 'urban',
        chapter: '영업 일반',
        question: '역명 관련 노선 지정 및 고시는 운영 개시 몇 개월 전까지 해야 하는가?',
        options: [
            '1개월',
            '3개월',
            '5개월',
            '6개월'
        ],
        answer: 1,
        explanation: '철도 거리표 제출은 운영 개시 5개월 전, 노선 지정 및 고시는 3개월 전까지 해야 한다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_009',
        subject: 'urban',
        chapter: '영업 일반',
        question: '보증금 환급기의 설치 위치는?',
        options: [
            '개찰구 안',
            '역무실',
            '자유 구역',
            '승강장'
        ],
        answer: 2,
        explanation: '보증금 환급기는 1회용 카드의 보증금을 환불하기 위해 자유 구역에 설치된다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_010',
        subject: 'urban',
        chapter: '영업 일반',
        question: '차량 화재 발생 시 정차 원칙으로 옳은 것은?',
        options: [
            '가장 가까운 역에 정차',
            '터널이나 교량 밖의 안전한 장소에 정차',
            '터널 내에서 정차',
            '즉시 정차'
        ],
        answer: 1,
        explanation: '화재 발생 시에는 터널이나 교량 밖의 안전한 장소에 정차해야 한다. 이는 대피 용이, 연기 배출, 구조 활동 편의를 위함이다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_011',
        subject: 'urban',
        chapter: '영업 일반',
        question: 'PSD(승강장 안전문) 연동 방식 중 가장 안전한 것은?',
        options: [
            'ATO 방식',
            'RF 방식',
            '센서 방식',
            '수동 방식'
        ],
        answer: 1,
        explanation: 'RF 방식은 무선 주파수 통신을 사용하며 오동작이 없고, 고장 시 센서로 자동 전환되어 가장 안전하다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_012',
        subject: 'urban',
        chapter: '영업 일반',
        question: '열차 운행과 관련된 여객 사상 사고를 무엇이라 하는가?',
        options: [
            '여객 안전 사상 사고',
            '여객 교통 사상 사고',
            '여객 시설 사상 사고',
            '여객 운영 사상 사고'
        ],
        answer: 1,
        explanation: '열차 운행 관련 사고는 여객 교통 사상 사고, 시설 내 추락/감전 등 운행과 무관한 사고는 철도 안전 사상 사고로 구분한다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_013',
        subject: 'urban',
        chapter: '영업 일반',
        question: 'CCTV 안내판에 필수로 표기해야 하는 사항이 아닌 것은?',
        options: [
            '설치 목적 및 장소',
            '촬영 범위 및 시간',
            '담당 부서 및 연락처',
            '제조사 및 모델명'
        ],
        answer: 3,
        explanation: 'CCTV 안내판에는 설치 목적 및 장소, 촬영 범위 및 시간, 담당 부서 및 연락처를 한글과 영문으로 병기해야 한다. 제조사 및 모델명은 필수 사항이 아니다.',
        source: '도시철도법 제41조'
    },
    {
        id: 'metro_3_014',
        subject: 'urban',
        chapter: '영업 일반',
        question: '열차 내에 설치되지 않는 안전 설비는?',
        options: [
            '화재감지기',
            '비상통화장치',
            '옥내 소화전',
            '휴대용 소화기'
        ],
        answer: 2,
        explanation: '옥내 소화전은 역에만 설치되며, 열차 내에는 화재감지기, 비상통화장치, 비상개방장치, 휴대용 소화기가 설치된다.',
        source: '도시철도시스템 일반 제3장'
    },
    {
        id: 'metro_3_015',
        subject: 'urban',
        chapter: '영업 일반',
        question: '안전 관리 시행 계획은 매년 언제까지 제출해야 하는가?',
        options: [
            '2월 말',
            '6월 말',
            '8월 말',
            '10월 말'
        ],
        answer: 3,
        explanation: '다음 연도 안전 관리 시행 계획은 매년 10월 말까지, 해당 연도 실적은 2월 말까지 국토교통부 장관에게 제출해야 한다.',
        source: '도시철도시스템 일반 제3장'
    },
    // Ch4: 운전 일반
    {
        id: 'metro_4_016',
        subject: 'urban',
        chapter: '운전 일반',
        question: '전동차 출고 점검 시 제동 핸들을 비상(Emergency) 위치에 두는 가장 주된 이유는?',
        options: [
            'MR 공기압이 빨리 차게 하기 위해',
            '제동 불완해를 방지하기 위해',
            '구동(역행) 회로를 차단하고 안전을 확보하기 위해',
            '배터리 방전을 막기 위해'
        ],
        answer: 2,
        explanation: '비상 위치에서는 비상제동 회로(Loop)가 차단됨과 동시에 역행 회로가 구성되지 않도록(Interlock) 하여, 기동 초기 예측 불가능한 차량 움직임을 방지한다.',
        source: '운전 일반'
    },
    {
        id: 'metro_4_017',
        subject: 'urban',
        chapter: '운전 일반',
        question: '한국철도공사(코레일) 규정에 따른 승무원의 "출고 시" 출근 시각 기준은?',
        options: [
            '출발 30분 전',
            '출발 40분 전',
            '출발 50분 전',
            '출발 1시간 5분 전'
        ],
        answer: 2,
        explanation: '코레일은 출고 시 출발 50분 전, 승계 시 출발 40분 전이다. (일반 도시철도 기준은 1시간 5분 전)',
        source: '운전 일반 취업규칙'
    },
    {
        id: 'metro_4_018',
        subject: 'urban',
        chapter: '운전 일반',
        question: '차량 기지 구내에서 운전할 때 제한 속도(입환 속도)로 가장 적절한 것은?',
        options: [
            '10km/h 이하',
            '25km/h 이하',
            '35km/h 이하',
            '45km/h 이하'
        ],
        answer: 1,
        explanation: '일반적인 구내 입환 속도는 25km/h 이하이다. (단, 차량 세척고 진입 등 특수 상황은 5km/h 등 별도 지정)',
        source: '운전 일반'
    },
    {
        id: 'metro_4_019',
        subject: 'urban',
        chapter: '운전 일반',
        question: '선형 유도 전동기(LIM) 방식 전동차의 장점이 아닌 것은?',
        options: [
            '등판 능력이 우수하다 (60‰)',
            '터널 단면적을 획기적으로 줄일 수 있다',
            '차륜과 레일의 점착력에 의존하지 않고 추진력을 얻는다',
            '에너지 효율이 회전형 모터보다 매우 높다'
        ],
        answer: 3,
        explanation: 'LIM 방식은 공극이 커서 일반 회전형 모터에 비해 효율은 다소 떨어진다.',
        source: '운전 일반'
    },
    {
        id: 'metro_4_020',
        subject: 'urban',
        chapter: '운전 일반',
        question: '기관사가 확인 제동(1단 이상)을 필수적으로 취급해야 하는 상황은?',
        options: [
            '역 정차 시',
            'ATC/ATS 제한 속도를 초과하여 경보음이 울릴 때',
            '절연 구간 통과 시',
            '출입문 개폐 시'
        ],
        answer: 1,
        explanation: '제한 속도를 초과하면 경보가 울리며, 이때 제동 핸들을 1단 이상 사용하여 감속 의지를 시스템에 확인(ACK) 시켜줘야 비상제동 체결을 막을 수 있다.',
        source: '운전 일반'
    },
    {
        id: 'metro_4_021',
        subject: 'urban',
        chapter: '운전 일반',
        question: '제2종 전기차량 운전면허 취득자를 위한 "신규 양성" 실무 수습 거리 기준은?',
        options: [
            '300km 이상',
            '1,200km 이상',
            '3,000km 이상',
            '6,000km 이상'
        ],
        answer: 3,
        explanation: '신규 면허 취득 자격 부여를 위해서는 6,000km 이상의 운전 실무 수습이 필요하다.',
        source: '철도안전법 시행규칙'
    },
    {
        id: 'metro_4_022',
        subject: 'urban',
        chapter: '운전 일반',
        question: '전동차 기동 전 축전지 전압이 최소 몇 V 이상이어야 정상 기동이 가능한가?',
        options: [
            '24V',
            '50V',
            '74V',
            '100V'
        ],
        answer: 2,
        explanation: '보통 DC 100V 회로를 사용하며, 기동 가능한 최저 전압은 약 74V(±20% 범위 하한선 근처)로 규정하고 있다.',
        source: '운전 일반'
    },
    // Ch5: 차량 일반
    {
        id: 'metro_5_101',
        subject: 'urban',
        chapter: '차량 일반',
        question: 'VVVF 전동차의 치차비(Gear Ratio)로 가장 일반적인 것은?',
        options: [
            '1 : 5.80',
            '1 : 6.53',
            '1 : 7.07',
            '1 : 4.13'
        ],
        answer: 2,
        explanation: 'VVVF 차량은 고속 회전이 가능한 유도 전동기를 사용하므로, 토크 확보를 위해 감속비가 큰 1:7.07(14:99)을 주로 사용한다.',
        source: '차량 일반'
    },
    {
        id: 'metro_5_102',
        subject: 'urban',
        chapter: '차량 일반',
        question: '교류(AC) 25,000V 구간에서 사고 전류 발생 시 이를 안전하게 차단할 수 있는 기기는?',
        options: [
            'Pantograph (Pan)',
            'Main Fuse (MF)',
            'Main Circuit Breaker (MCB)',
            'High Speed Circuit Breaker (HSCB)'
        ],
        answer: 2,
        explanation: 'MCB(진공차단기)는 교류 구간의 특고압 회로를 물리적으로 개폐 및 사고 차단할 수 있다. (참고: 직류 구간은 HSCB가 담당하거나 MCB가 단순 개방)',
        source: '차량 일반'
    },
    {
        id: 'metro_5_103',
        subject: 'urban',
        chapter: '차량 일반',
        question: '서울교통공사 기준 전동타 "전반 검사"의 주기는?',
        options: [
            '3년 또는 40만km',
            '4년 또는 80만km',
            '6년 또는 100만km',
            '8년 또는 120만km'
        ],
        answer: 2,
        explanation: '차체를 분리하여 시행하는 가장 큰 중정비인 전반 검사는 6년 또는 100만km 중 먼저 도래하는 시점에 시행한다.',
        source: '차량 정비 지침'
    },
    {
        id: 'metro_5_104',
        subject: 'urban',
        chapter: '차량 일반',
        question: '인천국제공항 자기부상철도의 궤간 폭은?',
        options: [
            '1,000mm',
            '1,435mm',
            '1,700mm',
            '1,850mm'
        ],
        answer: 3,
        explanation: '자기부상열차는 차체를 감싸는 형태로 궤간이 매우 넓다. 인천공항 자기부상철도는 1,850mm이다.',
        source: '차량 일반'
    },
    {
        id: 'metro_5_105',
        subject: 'urban',
        chapter: '차량 일반',
        question: '비상제동 회로를 "상시 여자(Energized)" 방식으로 구성하는 가장 큰 이유는?',
        options: [
            '배터리 효율을 높이기 위해',
            'Fail-Safe (선 절단 시 즉시 제동 체결) 확보를 위해',
            '응답 속도를 늦추기 위해',
            '회생 제동을 사용하기 위해'
        ],
        answer: 1,
        explanation: '전선이 끊어지거나(단선) 전원이 소실되면 자력이 없어져 스프링 힘 등으로 즉시 제동이 체결되도록 하는 Fail-Safe 설계이다.',
        source: '차량 일반'
    },
    // Ch6: 신호 일반
    {
        id: 'sig_q_001',
        subject: 'urban',
        chapter: '신호 일반',
        question: 'Fail-Safe(페일 세이프)의 3대 원칙이 아닌 것은?',
        options: [
            '무여자(De-energized) 원칙',
            '폐전로(Closed Circuit) 원칙',
            '이중화(Redundancy) 원칙',
            '비대칭 오류(Asymmetrical Fault) 특성'
        ],
        answer: 2,
        explanation: 'Fail-Safe의 고전적 3대 원칙은 무여자, 폐전로, 비대칭 오류 특성이다. 이중화는 가용성(Reliability)을 높이기 위한 방법이지, 그 자체로 Fail-Safe 원칙은 아니다.',
        source: '신호 일반'
    },
    {
        id: 'sig_q_002',
        subject: 'urban',
        chapter: '신호 일반',
        question: '지상의 주신호기(장내, 출발 등)의 최소 확인 거리 표준은?',
        options: [
            '200m 이상',
            '400m 이상',
            '600m 이상',
            '1,000m 이상'
        ],
        answer: 2,
        explanation: '열차의 제동 거리를 고려하여 주신호기는 600m 전방에서 확인할 수 있어야 한다.',
        source: '신호 일반'
    },
    {
        id: 'sig_q_003',
        subject: 'urban',
        chapter: '신호 일반',
        question: '다음 중 궤도회로(Track Circuit)의 종류가 아닌 것은?',
        options: [
            'PF 궤도회로',
            'AF 궤도회로',
            'RF 궤도회로',
            '임펄스 궤도회로'
        ],
        answer: 2,
        explanation: 'RF(Radio Frequency)는 보통 무선 통신을 의미하며, 궤도회로 종류로는 PF(상용주파수), AF(오디오주파수), 임펄스, 직류 등이 있다.',
        source: '신호 일반'
    },
    {
        id: 'sig_q_004',
        subject: 'urban',
        chapter: '신호 일반',
        question: '일반적인 궤도회로의 표준 단락 감도(Shunt Sensitivity) 저항값 기준은?',
        options: [
            '0.06Ω',
            '0.6Ω',
            '1.0Ω',
            '무한대'
        ],
        answer: 0,
        explanation: '차축이 궤도를 0.06Ω의 저항으로 단락시켰을 때 궤도계전기가 확실하게 낙하(검지)되어야 한다.',
        source: '신호 일반'
    },
    {
        id: 'sig_q_005',
        subject: 'urban',
        chapter: '신호 일반',
        question: 'NS형 전기 선로전환기의 마찰 클러치 동작(공전) 기준이 되는 슬립 전류(Slip Current)의 표준값은?',
        options: [
            '2.5A',
            '5.5A',
            '8.5A',
            '10.5A'
        ],
        answer: 2,
        explanation: 'NS형 선로전환기는 전환 중 과부하 시 모터 보호를 위해 약 8.5A(±)에서 슬립(공전)하도록 조정한다.',
        source: '신호 일반'
    },
    {
        id: 'sig_q_006',
        subject: 'urban',
        chapter: '신호 일반',
        question: '접근 쇄정(Approach Locking)이 걸렸을 때, 신호 취소 후 장내신호기의 해정 시분(Time Release)은?',
        options: [
            '30초',
            '60초',
            '90초',
            '120초'
        ],
        answer: 2,
        explanation: '장내신호기는 진입 속도가 빠르므로 90초의 여유 시간을 둔 뒤 해정된다. (출발신호기는 보통 30초)',
        source: '신호 일반'
    },
    {
        id: 'sig_q_007',
        subject: 'urban',
        chapter: '신호 일반',
        question: 'ATS 신호 방식에서 4현시(G, Y, YY, R)에 포함되지 않는 색상은?',
        options: [
            '녹색 (G)',
            '적색 (R)',
            '황색 (Y)',
            '백색 (W)'
        ],
        answer: 3,
        explanation: 'ATS 4현시는 G(진행), Y(주의), YY(경계), R(정지)를 사용하며, 백색은 사용하지 않는다. (차내 신호에는 있을 수 있음)',
        source: '신호 일반'
    },
    {
        id: 'sig_q_008',
        subject: 'urban',
        chapter: '신호 일반',
        question: 'ATC(열차자동제어장치)에 대한 설명으로 틀린 것은?',
        options: [
            '지상 장치와 차상 장치 간에 정보를 연속적으로 교환한다',
            '악천후의 영향을 덜 받는다',
            '지상 신호건립비를 절약할 수 있다',
            '운전 시격(Headway)을 ATS보다 넓게 유지해야 한다'
        ],
        answer: 3,
        explanation: 'ATC는 앞 열차의 위치에 따라 속도를 단계적으로 제어하므로 ATS보다 운전 시격을 단축(조밀 운전)할 수 있다.',
        source: '신호 일반'
    },
    {
        id: 'sig_q_009',
        subject: 'urban',
        chapter: '신호 일반',
        question: 'ATO 시스템에서 승강장 정위치 정차(TASC)를 위해 설치하는 지상 마커의 종류가 아닌 것은?',
        options: [
            'P1 마커',
            'P2 마커',
            'P3 마커',
            'P5 마커'
        ],
        answer: 3,
        explanation: '보통 P1(감속 시작), P2(거리 보정), P3(정차 위치확인), P4(출입문 연동) 등을 사용한다.',
        source: '신호 일반'
    },
    {
        id: 'sig_q_010',
        subject: 'urban',
        chapter: '신호 일반',
        question: 'ERTMS/ETCS Level 3의 가장 큰 특징은?',
        options: [
            '지상 신호기를 반드시 설치해야 한다',
            '발리스(Balise)만으로 제어한다',
            '궤도회로가 필요 없다 (차상 위치 검지)',
            '기관사가 직접 운전하지 않아도 된다'
        ],
        answer: 2,
        explanation: 'Level 3는 차상 장치가 자신의 위치와 무결성(열차 분리 여부)을 직접 검지하여 무선으로 전송하므로 지상의 궤도회로 설비가 불필요하다.',
        source: '신호 일반'
    },

    // ==========================================
    // Ch 7: 전기 설비 일반 (15문제)
    // ==========================================
    {
        id: 'elec_7_001',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '전기철도의 3대 구성 요소에 해당하지 않는 것은?',
        options: ['전철 변전소(S/S)', '전차선로', '귀선로', '신호기'],
        answer: 3,
        explanation: '전기철도는 변전소, 전차선로, 귀선로 3가지로 구성된다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_002',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '도시철도에서 사용하는 직류 1,500V는 전압 구분상 어디에 해당하는가?',
        options: ['저압', '고압', '특고압', '초고압'],
        answer: 0,
        explanation: '직류 1,500V 이하는 "저압"으로 분류된다. (교류는 1,000V 이하가 저압)',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_003',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '전기기관차의 점착 계수(0.33)가 디젤기관차(0.25)보다 높은 이유는?',
        options: ['차체가 가벼워서', '회전력이 균등하여', '바퀴가 더 커서', '엔진이 없어서'],
        answer: 1,
        explanation: '전동기는 회전력이 균등하게 전달되므로 바퀴가 헛돌지 않는 점착 성능이 약 30% 더 우수하다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_004',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '교류 급전 계통에서 단권변압기(AT)는 약 몇 km 간격으로 설치하는가?',
        options: ['2km', '5km', '10km', '20km'],
        answer: 2,
        explanation: 'AT 급전 방식에서 단권변압기는 약 10km 간격으로 병렬 설치한다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_005',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '심플 커티너리(Simple Catenary) 방식의 구성 요소가 아닌 것은?',
        options: ['조가선', '행거(Dropper)', '전차선', '보조 조가선'],
        answer: 3,
        explanation: '심플 커티너리는 조가선, 행거, 전차선 만으로 구성된다. 보조 조가선이 있으면 헤비 심플 또는 컴파운드 커티너리이다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_006',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '지하 구간 강체 전차선로 중 R-Bar 방식의 지지 간격 표준은?',
        options: ['5m', '8m', '10m', '12m'],
        answer: 2,
        explanation: 'R-Bar 방식은 강성이 좋아 지지 간격을 10m로 넓게 할 수 있다. (T-Bar는 5m)',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_007',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '전차선의 표준 설치 높이로 맞는 것은?',
        options: ['4,800mm', '5,000mm', '5,200mm', '5,400mm'],
        answer: 2,
        explanation: '일반적인 전차선 표준 높이는 레일면상 5,200mm이다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_008',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '전차선의 편위(Zigzag)를 두는 가장 주된 목적은?',
        options: ['전차선 처짐 방지', '집전판(Pantograph)의 편마모 방지', '바람에 의한 흔들림 방지', '전압 강하 방지'],
        answer: 1,
        explanation: '팬터그래프 집전판의 한 곳만 집중적으로 마모되는 것을 막기 위해 좌우 200mm 편위를 둔다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_009',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '교류-직류 절연구간(사구간)의 전체 길이는?',
        options: ['22m', '45m', '66m', '100m'],
        answer: 2,
        explanation: '교-직 절연구간은 [FRP 22m + 전차선 22m + FRP 22m]로 구성되어 총 66m이다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_010',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '절연구간(Neutral Section)을 설치할 때 선로 기울기(구배) 제한은?',
        options: ['3‰ 이내', '5‰ 이내', '10‰ 이내', '평탄선'],
        answer: 1,
        explanation: '열차가 관성으로 통과해야 하므로 상구배 5‰ 이내의 평탄한 곳에 설치해야 한다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_011',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '직류 전기철도에서 사고 전류를 차단할 때 사용하는 차단기는?',
        options: ['VCB', 'ACB', 'GCB', 'HSCB'],
        answer: 3,
        explanation: '직류는 전류 0점이 없으므로 고속도 차단기(HSCB)를 사용한다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_012',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '3상 교류를 2상 교류(M상, T상)로 변환하는 변압기 결선 방식은?',
        options: ['Y-Y 결선', '델타-델타 결선', '스코트(Scott) 결선', 'V-V 결선'],
        answer: 2,
        explanation: '전기철도 급전용으로 3상을 90도 위상차를 가진 2상으로 변환하는 방식은 스코트 결선이다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_013',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: 'SCADA 제어 방식 중 오조작 방지를 위해 "선택(Select) → 확인 → 실행(Operate)" 절차를 거치는 방식은?',
        options: ['SBO (Select Before Operate)', 'Direct Control', 'Check Back', 'Fail Safe'],
        answer: 0,
        explanation: 'SBO 방식은 대상을 먼저 선택하고 확인받은 후 실행 명령을 내리는 2단계 제어 방식이다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_014',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: 'LIM(선형 유도 전동기) 방식 전동차의 특징으로 틀린 것은?',
        options: ['터널 단면적을 줄일 수 있다', '등판 능력(구배)이 우수하다', '회전형 모터보다 효율이 매우 높다', '비점착 구동 방식이다'],
        answer: 2,
        explanation: 'LIM은 공극이 커서 회전형 모터에 비해 효율이 낮다는 단점이 있다. 그러나 바퀴 점착력에 의존하지 않아 등판 능력이 좋다.',
        source: '전기 설비 일반'
    },
    {
        id: 'elec_7_015',
        subject: 'urban',
        chapter: '전기 설비 일반',
        question: '도시형 자기부상열차의 일반적인 부상 높이는?',
        options: ['1mm 내외', '1cm 내외 (8~10mm)', '10cm 이상', '30cm 이상'],
        answer: 1,
        explanation: '상전도 흡인식 자기부상열차는 약 8mm ~ 1cm 정도 부상한다.',
        source: '전기 설비 일반'
    },

    // ==========================================
    // Ch 8: 토목 일반 (10문제)
    // ==========================================
    {
        id: 'civil_q_001',
        subject: 'urban',
        chapter: '토목 일반',
        question: '궤간(1,435mm)을 측정하는 위치는 레일 윗면으로부터 몇 mm 아래인가?',
        options: ['10mm', '14mm', '20mm', '25mm'],
        answer: 1,
        explanation: '레일 두부(머리) 상면으로부터 14mm 아래 지점의 안쪽 거리를 측정한다.',
        source: '토목 일반'
    },
    {
        id: 'civil_q_002',
        subject: 'urban',
        chapter: '토목 일반',
        question: '곡선 구간에서 궤간을 확대하는 "슬랙(Slack)"의 최대 한도는?',
        options: ['15mm', '20mm', '25mm', '30mm'],
        answer: 2,
        explanation: '슬랙은 곡선 통과를 원활하게 하기 위해 안쪽 레일을 넓히는 것으로, 최대 25mm를 초과할 수 없다(서울교통공사 기준 등).',
        source: '토목 일반'
    },
    {
        id: 'civil_q_003',
        subject: 'urban',
        chapter: '토목 일반',
        question: '차량 한계와 건축 한계의 설명으로 옳은 것은?',
        options: ['차량 한계가 건축 한계보다 크다', '건축 한계는 차량이 흔들려도 닿지 않아야 할 공간이다', '차량 한계 내에 신호기를 설치한다', '두 한계의 크기는 동일하다'],
        answer: 1,
        explanation: '건축 한계는 차량 한계보다 더 넓게 설정하여, 차량이 주행 중 진동하더라도 시설물에 닿지 않도록 확보한 공간이다.',
        source: '토목 일반'
    },
    {
        id: 'civil_q_004',
        subject: 'urban',
        chapter: '토목 일반',
        question: '곡선부 주행 저항을 고려하여 실제 기울기를 낮춰주는 것을 무엇이라 하는가?',
        options: ['완화 곡선', '종단 곡선', '곡선 보정(환산 기울기)', '캔트 체감'],
        answer: 2,
        explanation: '곡선 저항만큼 기울기를 완화해주는 것을 곡선 보정이라 하며, 보정치 Gc = 700 / R 공식을 주로 사용한다.',
        source: '토목 일반'
    },
    {
        id: 'civil_q_005',
        subject: 'urban',
        chapter: '토목 일반',
        question: '분기기의 "정위(Normal)"란 무엇을 의미하는가?',
        options: ['분기기가 고장 난 상태', '평상시 개통되어 있는 방향', '열차가 진입하는 방향', '측선으로 가는 방향'],
        answer: 1,
        explanation: '정위는 평상시에 유지하고 있는 개통 방향(주로 본선)을 말하며, 반위(Reverse)는 전환 시 개통되는 방향이다.',
        source: '토목 일반'
    },
    {
        id: 'civil_q_006',
        subject: 'urban',
        chapter: '토목 일반',
        question: '레일의 중량화(50kg -> 60kg) 효과로 틀린 것은?',
        options: ['레일 수명 연장', '보수비 절감', '진동 및 소음 감소', '전차선 전압 상승 효과'],
        answer: 3,
        explanation: '레일 중량화는 궤도 구조를 튼튼하게 하여 수명 연장, 진동 감소 등의 효과가 있으나 전차선 전압과는 직접 관계없다.',
        source: '토목 일반'
    },
    {
        id: 'civil_q_007',
        subject: 'urban',
        chapter: '토목 일반',
        question: '열차의 교행 또는 대피 시설을 갖추고 있는 정거장은?',
        options: ['신호장', '신호소', '간이역', '임시 승강장'],
        answer: 0,
        explanation: '신호장(Signal Station)은 열차의 교행/대피 시설이 있는 곳이다. 신호소는 그런 시설 없이 신호 취급만 한다.',
        source: '토목 일반'
    },
    {
        id: 'civil_q_008',
        subject: 'urban',
        chapter: '토목 일반',
        question: '궤도의 노반 강도를 나타내는 도상계수(K_30) 기준 중 "우량"에 해당하는 값은?',
        options: ['0.7 MPa 이상', '0.9 MPa 이상', '1.1 MPa 이상', '1.3 MPa 이상'],
        answer: 3,
        explanation: '도상계수 1.3 MPa(13kg/cm3) 이상일 때 우량 노반으로 분류한다.',
        source: '토목 일반'
    },
    {
        id: 'civil_q_009',
        subject: 'urban',
        chapter: '토목 일반',
        question: '우리나라 도시철도(지하 구간)에서 주로 사용하는 정척 레일의 길이는?',
        options: ['10m', '15m', '20m', '25m'],
        answer: 2,
        explanation: '지하 구간은 반입구의 제약 등으로 인해 20m 레일을 정척으로 주로 사용한다. (일반철도 지상은 25m)',
        source: '토목 일반'
    },
    {
        id: 'civil_q_010',
        subject: 'urban',
        chapter: '토목 일반',
        question: '선로의 기울기(구배)가 변하는 지점에 차량의 충격을 완화하기 위해 설치하는 곡선은?',
        options: ['완화 곡선', '종단 곡선', '반향 곡선', '복심 곡선'],
        answer: 1,
        explanation: '경사가 바뀌는 지점(수직 방향)에 설치하는 곡선을 종단 곡선(Vertical Curve)이라 한다.',
        source: '토목 일반'
    },

    // ==========================================
    // Ch 9: 정보 통신 일반 (10문제)
    // ==========================================
    {
        id: 'comm_q_001',
        subject: 'urban',
        chapter: '정보 통신 일반',
        question: '1901년 대서양 횡단 무선 통신에 성공한 사람은?',
        options: ['헤르츠', '마르코니', '벨', '모스'],
        answer: 1,
        explanation: '굴리엘모 마르코니는 1901년 영국-캐나다 간 대서양 횡단 무선 전신에 성공했다.',
        source: '정보 통신 일반'
    },
    {
        id: 'comm_q_002',
        subject: 'urban',
        chapter: '정보 통신 일반',
        question: 'UTP 케이블(LAN선)은 총 8가닥 중 통신용으로 주로 몇 가닥을 사용하는가?',
        options: ['2가닥', '4가닥', '6가닥', '8가닥'],
        answer: 1,
        explanation: '10/100Mbps 이더넷 통신에서는 1,2,3,6번 핀 4가닥을 사용한다. (기가비트는 8가닥 모두 사용)',
        source: '정보 통신 일반'
    },
    {
        id: 'comm_q_003',
        subject: 'urban',
        chapter: '정보 통신 일반',
        question: 'PC와 PC를 직접 연결할 때 사용하는 UTP 케이블 배열 방식은?',
        options: ['다이렉트 케이블', '크로스 케이블', '동축 케이블', '광 케이블'],
        answer: 1,
        explanation: '같은 장비(PC-PC, 허브-허브)를 연결할 때는 송수신 단자가 엇갈린 크로스 케이블을 사용한다.',
        source: '정보 통신 일반'
    },
    {
        id: 'comm_q_004',
        subject: 'urban',
        chapter: '정보 통신 일반',
        question: '철도 전화기 중 수화기를 들면 상대방이 즉시 호출되는 방식은?',
        options: ['자동식 전화기', '공전식 전화기', '자석식 전화기', '직통 전화기(Hot-line)'],
        answer: 3,
        explanation: '직통 전화기는 별도의 다이얼 조작 없이 수화기만 들면 특정 상대방과 바로 연결된다.',
        source: '정보 통신 일반'
    },
    {
        id: 'comm_q_005',
        subject: 'urban',
        chapter: '정보 통신 일반',
        question: '열차 무선 통화의 우선순위가 가장 높은 것은?',
        options: ['일반 통화', '관제 통화', '비상 통화', '그룹 통화'],
        answer: 2,
        explanation: '비상 통화가 최우선이며, 그다음이 관제 통화이다.',
        source: '정보 통신 일반'
    },
    {
        id: 'comm_q_006',
        subject: 'urban',
        chapter: '정보 통신 일반',
        question: 'LTE-R 기반 철도 통합 무선망이 사용하는 주파수 대역은?',
        options: ['150 MHz', '450 MHz', '700 MHz', '800 MHz'],
        answer: 2,
        explanation: '대한민국 국가 재난 안전망(PS-LTE) 및 철도 통합 무선망(LTE-R)은 700MHz 대역을 사용한다.',
        source: '정보 통신 일반'
    },
    {
        id: 'comm_q_007',
        subject: 'urban',
        chapter: '정보 통신 일반',
        question: 'LTE-R의 특징으로 옳지 않은 것은?',
        options: ['고속 데이터 전송 가능', '영상 통화 가능', '일대일 통화만 가능', '기존 VHF 방식 대체'],
        answer: 2,
        explanation: 'LTE-R은 일대일 통화뿐 아니라 그룹 통화, 일제 방송 등 다자간 통신이 가능하다.',
        source: '정보 통신 일반'
    },
    {
        id: 'comm_q_008',
        subject: 'urban',
        chapter: '정보 통신 일반',
        question: '역사 내 CCTV 영상 정보는 원칙적으로 최소 며칠 이상 보관해야 하는가?',
        options: ['7일', '15일', '30일', '60일'],
        answer: 2,
        explanation: '도시철도법 및 개인정보보호법 관련 규정에 따라 통상 30일 이상 보관을 원칙으로 한다.',
        source: '정보 통신 일반'
    },
    {
        id: 'comm_q_009',
        subject: 'urban',
        chapter: '정보 통신 일반',
        question: '자동 안내 방송 설비에서 최우선으로 송출되어야 하는 방송은?',
        options: ['행선 안내 방송', '광고 방송', '화재 경보 방송', '배경 음악'],
        answer: 2,
        explanation: '비상사태 발생 시 화재 경보 방송이 다른 모든 방송을 차단하고 최우선으로 나가야 한다.',
        source: '정보 통신 일반'
    },
    {
        id: 'comm_q_010',
        subject: 'urban',
        chapter: '정보 통신 일반',
        question: '역무 자동화(AFC) 설비 중 역 단위 전산 처리를 담당하는 장비는?',
        options: ['SCU (Station Computer Unit)', 'ISACU', 'TVM', 'AGM'],
        answer: 1,
        explanation: 'ISACU는 역무 자동화 설비의 데이터 집계 및 관리를 담당하는 역 단위 전산기이다.',
        source: '정보 통신 일반'
    },
    // ==========================================
    // Ch 10: 관제 일반 (10문제)
    // ==========================================
    {
        id: 'control_10_001',
        subject: 'urban',
        chapter: '관제 일반',
        question: '열차 운행 중 사고나 장애로 다이아가 흐트러졌을 때 정상 상태로 회복시키는 조치는?',
        options: ['운전 정리', '운전 사령', '운전 취급', '폐색 취급'],
        answer: 0,
        explanation: '열차 운행 순서 변경, 운휴, 특발 등을 통해 정상 운행으로 복귀시키는 것을 운전 정리라 한다.',
        source: '관제 일반'
    },
    {
        id: 'control_10_002',
        subject: 'urban',
        chapter: '관제 일반',
        question: '운전 정리 방법 중 "특발(Special Departure)"이란?',
        options: ['열차를 운행하지 않고 취소하는 것', '도착 열차를 바로 되돌려 보내는 것', '준비된 다른 열차를 당해 열차로서 시발역에서 출발시키는 것', '중간 역을 통과시키는 것'],
        answer: 2,
        explanation: '도착해야 할 열차가 늦어질 때, 예비차 등을 이용하여 정각에 해당 열차 번호로 출발시키는 것을 특발이라 한다.',
        source: '관제 일반'
    },
    {
        id: 'control_10_003',
        subject: 'urban',
        chapter: '관제 일반',
        question: '열차 번호 부여 원칙 중 하행 열차의 번호는?',
        options: ['짝수', '홀수', '영문', '기호'],
        answer: 1,
        explanation: '원칙적으로 하행 열차는 홀수, 상행 열차는 짝수를 부여한다.',
        source: '관제 일반'
    },
    {
        id: 'control_10_004',
        subject: 'urban',
        chapter: '관제 일반',
        question: '철도 사고 보고에서 사고 발생 즉시 개요를 보고하는 것을 무엇이라 하는가?',
        options: ['상보', '속보', '확보', '종결 보고'],
        answer: 1,
        explanation: '사고 발생 직후 육하원칙에 의거하여 신속하게 보고하는 것을 제1보(속보)라 한다.',
        source: '관제 일반'
    },
    {
        id: 'control_10_005',
        subject: 'urban',
        chapter: '관제 일반',
        question: '일반적인 고속열차의 "운행 장애" 기준 시간(지연 시간)은?',
        options: ['10분 이상', '20분 이상', '30분 이상', '60분 이상'],
        answer: 1,
        explanation: '고속열차는 20분 이상 지연 시, 일반열차는 30분 이상 지연 시 운행 장애로 분류한다.',
        source: '관제 일반'
    },
    {
        id: 'control_10_006',
        subject: 'urban',
        chapter: '관제 일반',
        question: '무선 방호(Radio Protection) 전송 시 사용하는 비상 채널은?',
        options: ['1번 채널', '2번 채널', '3번 채널', '4번 채널'],
        answer: 1,
        explanation: '인접 선로 열차에 경보를 보내는 무선 방호는 모든 열차가 수신 대기하는 2번 채널(비상 채널)을 사용한다.',
        source: '관제 일반'
    },
    {
        id: 'control_10_007',
        subject: 'urban',
        chapter: '관제 일반',
        question: '운관제사가 수행하는 업무가 아닌 것은?',
        options: ['열차 운행 감시', '운전 정리', '전차선 단전/급전 제어', '승차권 발매'],
        answer: 3,
        explanation: '승차권 발매는 역무원의 업무이며, 관제사는 열차 운행 통제, 전력 제어, 신호 제어 등을 담당한다. (전력관제 포함 시)',
        source: '관제 일반'
    },
    {
        id: 'control_10_008',
        subject: 'urban',
        chapter: '관제 일반',
        question: 'CBTC 신호 시스템의 운전 모드 중 완전 무인 자동 운전을 뜻하는 것은?',
        options: ['AM (Automatic Mode)', 'CM (Coded Manual)', 'RM (Restricted Manual)', 'EUM'],
        answer: 0,
        explanation: 'AM 모드는 출발, 주행, 정차, 출입문 개폐 등 모든 것이 자동화된 모드(ATO 포함)를 말한다.',
        source: '관제 일반'
    },
    {
        id: 'control_10_009',
        subject: 'urban',
        chapter: '관제 일반',
        question: '비상 상황 발생 시 무선 방호 송신은 최소 몇 회 이상 반복해야 하는가?',
        options: ['1회', '3회', '5회', '10회'],
        answer: 1,
        explanation: '수신 확인을 위해 "비상, 비상, 비상"과 같이 최소 3회 이상(보통 3~5회) 반복 송신해야 한다.',
        source: '관제 일반'
    },
    {
        id: 'control_10_010',
        subject: 'urban',
        chapter: '관제 일반',
        question: '열차 운행 중 사상 사고가 발생했을 때 조치로 가장 부적절한 것은?',
        options: ['즉시 관제사에 보고한다', '필요 시 인접 선로를 방호한다', '부상자 구호를 최우선으로 한다', '현장 보존을 위해 무조건 정차하여 대기만 한다'],
        answer: 3,
        explanation: '현장 보존도 중요하지만 부상자 구호 및 2차 사고 예방(방호) 조치를 취한 후 관제사 지시에 따라야 한다. 무조건 대기는 틀리다.',
        source: '관제 일반'
    },
    // ==========================================
    // Ch 11: 노면 전차 (10문제)
    // ==========================================
    {
        id: 'tram_11_001',
        subject: 'urban',
        chapter: '노면 전차',
        question: '노면전차(트램)를 운전하기 위해 필요한 운전면허는?',
        options: ['제2종 전기차량 운전면허', '제1종 대형 운전면허', '제2종 전기차량 면허 + 1종 대형 면허', '제2종 보통 면허'],
        answer: 2,
        explanation: '노면전차는 도로를 주행하므로 철도안전법상 제2종 전기차량 면허와 도로교통법상 1종 대형 면허가 모두 필요하다.',
        source: '노면 전차'
    },
    {
        id: 'tram_11_002',
        subject: 'urban',
        chapter: '노면 전차',
        question: '무가선 트램 방식 중 정거장에서 정차하는 동안 급속 충전하는 방식은?',
        options: ['수소 연료 전지 방식', '슈퍼 커패시터 방식', 'APS 방식', '디젤 발전 방식'],
        answer: 1,
        explanation: '슈퍼 커패시터는 충/방전 속도가 매우 빨라 승객 승하차 시간 동안 급속 충전이 가능하다.',
        source: '노면 전차'
    },
    {
        id: 'tram_11_003',
        subject: 'urban',
        chapter: '노면 전차',
        question: '노면전차의 운전 방식 중 가장 특징적인 것은?',
        options: ['ATC 운전', 'ATO 운전', '시계(Visual) 운전', 'CBTC 운전'],
        answer: 2,
        explanation: '노면전차는 도로 교통신호와 보행자를 확인하며 운전자가 직접 눈으로 보고 운전하는 시계 운전이 기본이다.',
        source: '노면 전차'
    },
    {
        id: 'tram_11_004',
        subject: 'urban',
        chapter: '노면 전차',
        question: '노면전차 전용 신호기에서 "정지"를 의미하는 현시는?',
        options: ['백색 수직 막대 (|)', '백색 수평 막대 (ㅡ)', '백색 사선 (/)', '적색 원'],
        answer: 1,
        explanation: '트램 신호에서 수평 막대(Bar)는 정지를, 수직 막대는 진행을 의미한다.',
        source: '노면 전차'
    },
    {
        id: 'tram_11_005',
        subject: 'urban',
        chapter: '노면 전차',
        question: '트램의 제동 장치 중 레일과 직접 마찰시켜 강력한 제동력을 얻는 장치는?',
        options: ['공기 제동', '회생 제동', '발전 제동', '흡착 제동(MTB)'],
        answer: 3,
        explanation: 'MTB(Magnetic Track Brake)는 자석의 힘으로 레일에 흡착하여 마찰력을 발생시키는 비상 제동 장치이다.',
        source: '노면 전차'
    },
    {
        id: 'tram_11_006',
        subject: 'urban',
        chapter: '노면 전차',
        question: '노면전차의 전용로 최고 속도 제한(설계속도가 아님)은 일반적으로 얼마인가?',
        options: ['30km/h', '50km/h', '60km/h', '80km/h'],
        answer: 2,
        explanation: '도시철도건설규칙 등에 따르면 노면전차의 전용로 최고속도는 통상 60km/h 정도로 제한된다.',
        source: '노면 전차'
    },
    {
        id: 'tram_11_007',
        subject: 'urban',
        chapter: '노면 전차',
        question: '교차로에서 트램에게 통행 우선권을 주는 신호 시스템은?',
        options: ['ATS', 'ATP', 'TSP (Transit Signal Priority)', 'ATO'],
        answer: 2,
        explanation: 'TSP는 트램이 교차로에 접근할 때 녹색 신호를 연장하거나 조기 점등하여 멈추지 않고 통과하게 해주는 시스템이다.',
        source: '노면 전차'
    },
    {
        id: 'tram_11_008',
        subject: 'urban',
        chapter: '노면 전차',
        question: '다음 중 "바이모달 트램"의 특징으로 맞는 것은?',
        options: ['반드시 궤도가 있어야 한다', '자동 운전만 가능하다', '버스처럼 일반 도로 주행도 가능하다', '공중 부양한다'],
        answer: 2,
        explanation: '바이모달(Bi-modal) 트램은 궤도 감지 주행과 일반 버스처럼 수동 조향 주행이 모두 가능한 차량이다.',
        source: '노면 전차'
    },
    {
        id: 'tram_11_009',
        subject: 'urban',
        chapter: '노면 전차',
        question: '노면전차 선로의 궤간은 표준궤와 비교하여 어떠한가?',
        options: ['더 좁다 (협궤)', '더 넓다 (광궤)', '동일하다 (1,435mm)', '규정이 없다'],
        answer: 2,
        explanation: '최신 노면전차는 대부분 표준궤(1,435mm)를 채택하여 호환성을 높이고 있다.',
        source: '노면 전차'
    },
    {
        id: 'tram_11_010',
        subject: 'urban',
        chapter: '노면 전차',
        question: '무가선 트램 도입의 가장 큰 장점은?',
        options: ['건설비가 매우 비싸다', '도시 미관이 개선된다', '속도가 고속철도만큼 빠르다', '수송력이 지하철보다 크다'],
        answer: 1,
        explanation: '공중 전차선이 없어 도시 미관이 쾌적해지는 것이 무가선 트램의 가장 큰 장점 중 하나이다.',
        source: '노면 전차'
    }
];

console.log(`'urban.js' loaded:`, QUESTIONS_URBAN.length);

