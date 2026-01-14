/**
 * EMU 과목 문제
 * 자동 생성됨 - 수동 편집 가능
 */

const QUESTIONS_EMU = [
    // ============ Chapter 1 - 전기동차 기초 이론 (emu_ch1_001~020) ============
    {
        id: 'emu_ch1_001',
        subject: 'emu',
        chapter: '전기동차 기초 이론',
        question: '전기동차 10량 편성의 차량 배치로 옳은 것은?',
        options: [
            'TC - M - M\' - T - M\' - T1 - T - M - M\' - TC',
            'TC - T - M - M\' - T - T1 - M - M\' - T - TC',
            'M - M\' - TC - T - T1 - T - TC - M\' - M - TC',
            'TC - TC - M - M\' - T - T1 - M - M\' - TC - TC'
        ],
        answer: 0,
        explanation: '10량 편성: TC - M - M\' - T - M\' - T1 - T - M - M\' - TC 순서로 배치된다.',
        source: '전기동차 구조 및 기능 1장'
    },
    {
        id: 'emu_ch1_002',
        subject: 'emu',
        chapter: '전기동차 기초 이론',
        question: '전기철도의 분류 중 한국 도시철도 시스템에 가장 많이 사용되는 방식은?',
        options: [
            'AC 25,000V 50Hz',
            'AC 25,000V 60Hz',
            'DC 1,500V',
            'DC 750V'
        ],
        answer: 2,
        explanation: '한국 도시철도는 DC 1,500V 직류 방식을 표준으로 사용하고 있다.',
        source: '전기동차 구조 및 기능 1장'
    },
    {
        id: 'emu_ch1_003',
        subject: 'emu',
        chapter: '전기동차 기초 이론',
        question: '견인전동기의 회전력을 차를 앞으로 나아가게 하는 기계적 동력으로 전환하는 기기는?',
        options: [
            '감속기어',
            '차축',
            '휠'
        ],
        answer: 1,
        explanation: '감속기어는 고속 저토크를 저속 고토크로 변환하며, 이를 통해 효율적인 구동이 가능하다.',
        source: '전기동차 구조 및 기능 1장'
    },
    {
        id: 'emu_ch1_004',
        subject: 'emu',
        chapter: '전기동차 기초 이론',
        question: '전기동차 편성 내 차량들을 연결하는 고압 가선으로서 견인 전류 공급 역할을 하는 것은?',
        options: [
            '101선',
            '102선',
            '103선',
            '차축'
        ],
        answer: 1,
        explanation: '101선과 102선이 실제 견인 전류를 공급하며, 103선은 제어 전원으로 사용된다.',
        source: '전기동차 구조 및 기능 1장'
    },
    {
        id: 'emu_ch1_005',
        subject: 'emu',
        chapter: '전기동차 기초 이론',
        question: '전기동차에서 사용되는 축전지의 용도가 아닌 것은?',
        options: [
            '기동 시 제어 회로 전원',
            '운행 중 견인 전류 공급',
            '기동 초기 공기 압축',
            '비상시 조명 및 제어 전원'
        ],
        answer: 2,
        explanation: '축전지는 제어 전원으로만 사용되며, 견인 전류는 전차선에서 공급된다.',
        source: '전기동차 구조 및 기능 1장'
    },
    // ============ Chapter 2 - 특고압 회로 (hv_q_001~020) ============
    {
        id: 'hv_q_001',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '팬터그래프(Pan)의 표준 작용 높이와 해방 시의 높이 수치로 옳은 것은?',
        options: ['1,000mm / 1,380mm', '1,000mm / 1,480mm', '1,100mm / 1,380mm', '1,100mm / 1,480mm'],
        answer: 1,
        explanation: '표준 작용 높이는 1,000mm이며 해방 시(최고 도달) 높이는 1,480mm입니다.',
        source: '특고압 회로 2장 팬터그래프 제원'
    },
    {
        id: 'hv_q_002',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '교-교 절연구간 통과 시 순간 무가압 상태에서 MCB 차단을 방지하기 위한 시한계전기와 설정 시간은?',
        options: ['DCVRTR - 0.5초', 'ACVRTR - 0.5초', 'ACVRTR - 1.0초', 'MCBTR - 0.5초'],
        answer: 2,
        explanation: 'ACVRTR은 교-교 절연구간 통과 시 MCB 차단 방지를 위해 1.0초간 여자를 유지합니다 [38-40].',
        source: '2.3.2.3 ACVRTR 동작 회로'
    },
    {
        id: 'hv_q_003',
        subject: 'emu',
        chapter: '특고압 회로',
        question: 'ACM 구동을 멈추게 하는 조압기(ACMG)의 정지 압력 기준은?',
        options: ['6.5kg/cm² 이상', '7.5kg/cm² 이상', '8.0kg/cm² 이상', '9.0kg/cm² 이상'],
        answer: 1,
        explanation: 'ACMG는 6.5kg/cm² 이하에서 구동하고 7.5kg/cm² 이상에서 정지시킵니다 [23, 24, 99].',
        source: '2.1.3.2 (4) 조압기'
    },
    {
        id: 'hv_q_004',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '주 변압기 1차 측 과전류(ACOCR) 동작 시 트립을 방지하기 위한 MCBTR의 시한은?',
        options: ['0.1초', '0.5초', '1.0초', '3.0초'],
        answer: 1,
        explanation: '돌입전류에 의한 ACOCR 오동작을 막기 위해 MCBTR이 0.5초간 차단을 방지합니다 [38, 41].',
        source: '2.4.4.4 교류 과전류 계전기'
    },
    {
        id: 'hv_q_005',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '직류 절환(AC->DC) 직후 MCB \'양 소등\' 현상이 발생했다면 이는 어떤 고장을 의미하는가?',
        options: ['MCB 절연 불량', 'MCB 기계적 고착(차단 불능)', '주 퓨즈 용단', '피뢰기 동작'],
        answer: 1,
        explanation: 'ADS 전환 후 MCB가 차단되어야 하나 차단되지 않았을 때(고착 시) 양 소등이 발생합니다 [90, 91].',
        source: '2.5.3.3 모진 보호'
    },
    {
        id: 'hv_q_006',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '다음 중 Pan 상승이 불가능한 조건인 것은?',
        options: ['DC 구간에서 MCBN2 투입 상태', 'AC 구간에서 EGCS 취급 상태', '축전지 전압 DC 100V 상태', '주간제어기(MC) OFF 상태'],
        answer: 1,
        explanation: 'AC 구간에서 EGCS를 취급하면 EGSR 여자로 전체 Pan 상승이 불가능합니다 [30, 73].',
        source: '2.3.1.3 Pan 상승 회로'
    },
    {
        id: 'hv_q_007',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '주 퓨즈(MFs)가 용단되었을 때 나타나는 물리적 현상으로 옳은 것은?',
        options: ['백색 차측등 점등', 'MCB 즉시 차단', '적색 단추 30mm 돌출', 'SIV 과부하 점등'],
        answer: 2,
        explanation: 'MFs 용단 시 퓨즈함 끝의 적색 단추가 30mm 튀어나옵니다 [76, 77].',
        source: '2.4.4.2 구조 및 동작'
    },
    {
        id: 'hv_q_008',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '차량 유치 중 단전 발생 시 축전지 방전을 막기 위해 Pan을 자동으로 하강시키는 시점은?',
        options: ['단전 즉시', '단전 1분 후', '단전 3분 후', '단전 10분 후'],
        answer: 2,
        explanation: 'PDARTR(b) 시한 연동에 의해 단전 3분 후 Pan이 하강합니다 [78, 79].',
        source: '2.5.5.2 축전지 방전 방지 회로'
    },
    {
        id: 'hv_q_009',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '운전실 교환 시, 신 운전실에서 전·후진 핸들을 전진(F) 위치로 두었을 때의 작용은?',
        options: ['103선 가압 시작', '도착 운전실 MCB 투입 회로 차단', '전체 Pan 상승', '비상제동 완해'],
        answer: 1,
        explanation: '2선을 통해 도착 운전실의 MCBHR(O)를 여자시켜 투입 회로를 차단합니다 [81, 82].',
        source: '2.5.2.2 운전실 교환 회로'
    },
    {
        id: 'hv_q_010',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '교직 절환 취급 시 절연구간 예고 방송을 출력하기 위해 수신하는 주파수는?',
        options: ['38kHz', '68kHz', '98kHz', '128kHz'],
        answer: 1,
        explanation: '지상자로부터 68kHz 주파수를 수신하여 방송을 수행합니다 [93, 94].',
        source: '2.5.4.1 절연 구간 예고 방송'
    },
    {
        id: 'hv_q_011',
        subject: 'emu',
        chapter: '특고압 회로',
        question: 'MCB 투입 전 확인해야 할 공기 압력 스위치(PanPS)의 최소 작동 압력은?',
        options: ['2.2~2.4kg/cm²', '3.2~3.4kg/cm²', '4.2~4.4kg/cm²', '5.0~5.2kg/cm²'],
        answer: 2,
        explanation: 'PanPS는 4.2~4.4kg/cm² 이하에서 접점을 열어 MCB 투입을 막습니다 [15, 47].',
        source: '2.3.4.3 MCBR1 여자'
    },
    {
        id: 'hv_q_012',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '주 변압기 냉각유의 흐름이 멈추었을 때, MCB가 차단되기까지의 지연 시간은?',
        options: ['10초', '30초', '60초', '120초'],
        answer: 2,
        explanation: 'MTOFTR 시한 계전기에 의해 유류 정지 60초 후 MCB가 차단됩니다 [68, 98].',
        source: '2.4.4.3 동작 회로'
    },
    {
        id: 'hv_q_013',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '다음 중 \'완전 부동 취급\'의 대상이 아닌 상황은?',
        options: ['MCB 절연 불량 발생 시', '주 퓨즈(MFs) 용단 시', 'ACM 구동 불능 시', '피뢰기(Arr) 동작 시'],
        answer: 2,
        explanation: 'ACM 구동 불능은 기동 문제이며, 완전 부동 취급은 특고압 기기 파손/동작 시 수행합니다 [57, 93].',
        source: '2.3.4.4 (4) MCB 차단 회로'
    },
    {
        id: 'hv_q_014',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '교-직 절연구간 진입 전 \'직류 절환(AC->DC)\' 시 일어나는 현상으로 틀린 것은?',
        options: ['전체 MCB 일제 차단', 'ADCg가 DC 측으로 절환', 'ADDR 여자', '전체 Pan 즉시 하강'],
        answer: 3,
        explanation: '절환 시 MCB는 차단되지만 Pan은 하강하지 않고 상승 상태를 유지합니다 [85, 86].',
        source: '2.5.3.2 교-직 절환 회로'
    },
    {
        id: 'hv_q_015',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '전차선 DC 1,500V가 전기동차의 교류회로로 유입되는 \'직류 모진\' 발생 시 보호 기기는?',
        options: ['DCArr', 'ACOCR', 'MFs (주 퓨즈)', 'EGS'],
        answer: 2,
        explanation: '직류 모진 시 MFs가 용단되어 주 변압기(MT)를 보호합니다 [77, 85].',
        source: '2.5.3.3 모진 보호'
    },
    {
        id: 'hv_q_016',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '리튬 폴리머(Li-Po) 축전지를 사용하는 차량의 표준 전압은?',
        options: ['DC 84V', 'DC 92.5V', 'DC 100V', 'DC 110V'],
        answer: 1,
        explanation: 'Li-Po 배터리는 3.7V 25셀로 DC 92.5V가 표준입니다 [5, 6].',
        source: '2.1.2 용어 정의'
    },
    {
        id: 'hv_q_017',
        subject: 'emu',
        chapter: '특고압 회로',
        question: 'ADCg를 AC에서 DC 위치로 전환했을 때 가동되는 전자밸브와 블레이드 회전 각도는?',
        options: ['AC 측 전자밸브 / 30도', 'DC 측 전자밸브 / 30도', 'DC 측 전자밸브 / 60도', 'AC 측 전자밸브 / 60도'],
        answer: 2,
        explanation: 'DC 측 전자밸브가 여자되어 블레이드를 60도 회전시킵니다 [44, 100-102].',
        source: '2.3.3.3 동작'
    },
    {
        id: 'hv_q_018',
        subject: 'emu',
        chapter: '특고압 회로',
        question: 'MCB 투입 완료 후 \'MCB-C\' 코일이 무여자 되는 가장 큰 이유는?',
        options: ['공기 압축기 보호', '축전지 방전 방지', '신속한 차단 작용 준비', '자동 재투입 방지'],
        answer: 2,
        explanation: '실린더의 공기를 미리 배출해두어야 사고 시 트립 코일에 의해 즉시 차단이 가능하기 때문입니다 [52, 53].',
        source: '2.3.4.3 MCB-C 무여자'
    },
    {
        id: 'hv_q_019',
        subject: 'emu',
        chapter: '특고압 회로',
        question: '다음 중 1개 Unit의 MCB가 투입되지 않는 원인으로 옳은 것은?',
        options: ['전부 운전실 HCRN 차단', '해당 차량의 CIN(NFB) 차단', '후부 운전실 PanDN 차단', '전부 운전실 MCN 투입'],
        answer: 1,
        explanation: 'CIN이 차단되면 TCU 전원이 끊겨 해당 유닛의 MCB 투입이 불가능합니다 [49, 50].',
        source: '2.3.4.3 MCB-C 여자'
    },
    {
        id: 'hv_q_020',
        subject: 'emu',
        chapter: '특고압 회로',
        question: 'EGS(비상접지스위치) 동작 시 가동 접점이 고정 접점과 용착되었는지 확인하는 시점은?',
        options: ['EGCS 취급 즉시', 'EGCS 복귀 취급 직후', 'EGCS 복귀 후 Pan 상승 순간', 'MCB 투입 순간'],
        answer: 2,
        explanation: 'EGCS를 복귀해도 접점이 붙어있으므로, Pan을 올리는 순간 접지되어 단전이 발생할 때 확인 가능합니다 [72, 73].',
        source: '2.4.1.3 동작 (4) EGS 용착'
    },
    {
        id: 'emu_001',
        subject: 'emu',
        chapter: '전기동차 일반',
        question: '전기동차 10량 편성의 차량 배치로 옳은 것은?',
        options: [
            'TC - M - M\' - T - M\' - T1 - T - M - M\' - TC',
            'TC - T - M - M\' - T - T1 - M - M\' - T - TC',
            'M - M\' - TC - T - T1 - T - TC - M\' - M - TC',
            'TC - TC - M - M\' - T - T1 - M - M\' - TC - TC'
        ],
        answer: 0,
        explanation: '10량 편성: TC - M - M\' - T - M\' - T1 - T - M - M\' - TC 순서로 배치된다.',
        source: '전기동차 구조 및 기능 제1장'
    },
    {
        id: 'emu_002',
        subject: 'emu',
        chapter: '특고압회로',
        question: '103선의 역할은?',
        options: [
            '견인전류 공급',
            '제어전원 공급',
            '냉방전원 공급',
            '조명전원 공급'
        ],
        answer: 1,
        explanation: '103선은 축전지(DC 84V 또는 92.5V) 또는 SIV(DC 100V)에서 공급되는 제어전원을 각 차량에 공급하는 역할을 한다.',
        source: '전기동차 구조 및 기능 제2장'
    },
    {
        id: 'emu_003',
        subject: 'emu',
        chapter: '특고압회로',
        question: 'Pan(팬터그래프) 상승에 필요한 압축공기의 압력은?',
        options: [
            '3 kg/cm²',
            '5 kg/cm²',
            '7 kg/cm²',
            '9 kg/cm²'
        ],
        answer: 1,
        explanation: 'PanUS를 누르면 103선 전원과 ACM에서 압축한 5 kg/cm²의 압축공기로 편성 내 모든 M\'차의 Pan이 상승된다.',
        source: '전기동차 구조 및 기능 제2장'
    },
    {
        id: 'emu_004',
        subject: 'emu',
        chapter: '견인장치',
        question: 'VVVF 제어의 의미는?',
        options: [
            '가변전류 가변저항',
            '가변전압 가변주파수',
            '고정전압 고정주파수',
            '고정전류 가변저항'
        ],
        answer: 1,
        explanation: 'VVVF(Variable Voltage Variable Frequency)는 가변전압 가변주파수 제어방식으로, 교류전력의 전압과 주파수를 변환하여 전기기기의 속도와 회전력을 제어한다.',
        source: '전기동차 구조 및 기능 제3장'
    },
    {
        id: 'emu_005',
        subject: 'emu',
        chapter: '견인장치',
        question: 'VVVF 제어 전기동차에 사용되는 전동기는?',
        options: [
            '직류전동기',
            '유도전동기',
            '동기전동기',
            '스텝전동기'
        ],
        answer: 1,
        explanation: 'VVVF 제어 전기동차에는 유도전동기가 채택되었다. 직류전동기에 비해 유지보수비가 적고 고속운전이 가능하다.',
        source: '전기동차 구조 및 기능 제3장'
    },
    {
        id: 'emu_006',
        subject: 'emu',
        chapter: '고압보조장치',
        question: 'SIV의 출력 전원으로 옳은 것은?',
        options: [
            'DC 1500V',
            'AC 3상 440V 60Hz',
            'DC 100V',
            'AC 220V'
        ],
        answer: 1,
        explanation: 'SIV(Static Inverter)는 DC 1500~1800V를 입력받아 AC 3상 440V 60Hz 전력을 출력하여 공기압축기, 냉난방장치 등에 공급한다.',
        source: '전기동차 구조 및 기능 제4장'
    },
    {
        id: 'emu_007',
        subject: 'emu',
        chapter: '고압보조장치',
        question: '10량 편성에서 SIV가 설치된 차량은?',
        options: [
            'M, M\' 차',
            'TC1, T1, TC2 차',
            'T 차만',
            '모든 차량'
        ],
        answer: 1,
        explanation: '10량 편성의 경우 SIV는 TC1, T1, TC2 차에 설치되어 있다.',
        source: '전기동차 구조 및 기능 제4장'
    },
    {
        id: 'emu_008',
        subject: 'emu',
        chapter: '저압보조장치',
        question: '보조변압기(AT)가 SIV의 AC440V를 강압하여 출력하는 전압은?',
        options: [
            'AC100V만',
            'AC220V만',
            'AC220V와 AC100V',
            'DC100V'
        ],
        answer: 2,
        explanation: '보조변압기(AT)는 SIV의 AC440V를 공급받아 AC220V(객실등 전원)와 AC100V(냉방장치 제어 등)로 강압하여 출력한다.',
        source: '전기동차 구조 및 기능 제5장'
    },
    {
        id: 'emu_009',
        subject: 'emu',
        chapter: '제동장치',
        question: '전기동차의 제동장치가 갖추어야 할 기능이 아닌 것은?',
        options: [
            '정지',
            '속도의 억제와 감속',
            '이동 방지',
            '가속'
        ],
        answer: 3,
        explanation: '제동장치는 정지, 속도의 억제와 감속, 이동 방지 기능을 갖추어야 한다. 가속은 견인장치의 기능이다.',
        source: '전기동차 구조 및 기능 제6장'
    },
    {
        id: 'emu_010',
        subject: 'emu',
        chapter: '제동장치',
        question: '기관사 안전장치(DSD)의 기능은?',
        options: [
            '과속 방지',
            '기관사가 졸음이나 심신장애 등으로 장치를 일정 압력으로 누르지 않으면 비상제동 체결',
            '화재 감지',
            '출입문 잠금'
        ],
        answer: 1,
        explanation: '기관사 안전장치(DSD)는 기관사가 졸음이나 심신장애 등으로 장치를 일정 압력으로 누르지 않으면 경보를 하고, 복귀하지 않으면 자동으로 비상제동을 체결하여 열차를 정차시킨다.',
        source: '전기동차 구조 및 기능 제6장'
    },
    {
        id: 'emu_011',
        subject: 'emu',
        chapter: '운전보안장치',
        question: 'ATS 장치의 역할은?',
        options: [
            '열차 자동 운전',
            '정지신호 오진입, 속도초과 인지 불량 시 자동으로 비상제동 동작',
            '열차 위치 추적',
            '승객 안내 방송'
        ],
        answer: 1,
        explanation: 'ATS(열차자동정지장치)는 정지신호 오진입, 속도초과 인지 불량 시 자동으로 비상제동을 동작시키는 운전보안장치이다.',
        source: '전기동차 구조 및 기능 제7장'
    },
    {
        id: 'emu_012',
        subject: 'emu',
        chapter: '운전보안장치',
        question: 'ATC 장치의 감속도 확인 기준은?',
        options: [
            '1.2 km/h/sec',
            '2.4 km/h/sec',
            '3.6 km/h/sec',
            '4.8 km/h/sec'
        ],
        answer: 1,
        explanation: 'ATC 장치의 감속도 확인 기준은 2.4 km/h/sec이다. 이 감속도 미달 시 비상제동이 체결된다.',
        source: '전기동차 구조 및 기능 제7장'
    },
    {
        id: 'emu_013',
        subject: 'emu',
        chapter: '특고압회로',
        question: 'MCB(주회로차단기)의 역할은?',
        options: [
            '출입문 개폐',
            '전차선 전원을 주회로에 연결 또는 차단',
            '조명 제어',
            '냉방기 제어'
        ],
        answer: 1,
        explanation: 'MCB(주회로차단기)는 Pan이 상승된 후 전차선의 고압 전원을 주회로에 연결하거나 차단하는 역할을 한다.',
        source: '전기동차 구조 및 기능 제2장'
    },
    {
        id: 'emu_014',
        subject: 'emu',
        chapter: '고압보조장치',
        question: 'CM(전동공기압축기)에서 생성하는 압축공기의 압력은?',
        options: [
            '5~6 kg/cm²',
            '6~7 kg/cm²',
            '7~8 kg/cm²',
            '8~9 kg/cm²'
        ],
        answer: 3,
        explanation: 'CM(전동공기압축기)은 SIV 전원 AC440V 60Hz로 유도전동기를 구동하여 8~9 kg/cm²의 압축공기를 생성한다.',
        source: '전기동차 구조 및 기능 제4장'
    },
    {
        id: 'emu_101',
        subject: 'emu',
        chapter: '특고압회로',
        question: '팬터그래프(Pan)의 상승 및 하강 시간에 대한 설명으로 옳은 것은?',
        options: [
            '상승 4~6초, 하강 10~14초',
            '상승 10~14초, 하강 4~6초',
            '상승 5~6분, 하강 4~6초',
            '상승 10~14초, 하강 10분'
        ],
        answer: 1,
        explanation: '팬터그래프의 표준 상승 시간은 10~14초이며, 하강 시간은 4~6초이다.',
        source: '전기동차 구조 및 기능 제2장'
    },
    {
        id: 'emu_102',
        subject: 'emu',
        chapter: '특고압회로',
        question: '교교 절연구간 통과 시 전차선 전원 일시 무여자로 인한 MCB 차단을 방지하는 시한계전기와 설정 시간은?',
        options: [
            'DCVRTR, 0.5초',
            'MCBTR, 0.5초',
            'ACVRTR, 1.0초',
            'PDARTR, 3분'
        ],
        answer: 2,
        explanation: 'ACVRTR은 ACVR 무여자 시에도 1초간 여자 상태를 유지하여 절연구간 통과 시 MCB 차단을 방지한다.',
        source: '전기동차 구조 및 기능 제2장'
    },
    {
        id: 'emu_103',
        subject: 'emu',
        chapter: '특고압회로',
        question: '직류 모진(DC 1,500V가 교류회로 유입) 발생 시 기기를 보호하기 위해 동작하는 장치와 현상은?',
        options: [
            'DCArr 동작으로 인한 전차선 단전',
            'MFs 용단 및 적색 단추 30mm 탈출',
            'ACOCR 여자로 인한 MCB 사고 차단',
            'EGS 동작으로 인한 Pan 상승 불능'
        ],
        answer: 1,
        explanation: '직류 모진 시 MFs(주 퓨즈)가 용단되어 MT를 보호하며, 이때 적색 단추가 30mm 탈출한다.',
        source: '전기동차 구조 및 기능 제2장'
    },
    {
        id: 'emu_104',
        subject: 'emu',
        chapter: '특고압회로',
        question: '운전실 선택 계전기인 HCR 1~4를 직렬로 연결한 주요 목적은?',
        options: [
            '전압을 분산시켜 기기를 보호하기 위해',
            '하나라도 고장 시 전체 제어가 불가능하게 하여 안전을 확보하기 위해',
            '순차적으로 전원을 공급하여 돌입전류를 막기 위해',
            '후부 운전실에서도 동력 운전을 가능하게 하기 위해'
        ],
        answer: 1,
        explanation: 'HCR은 중요 제어를 담당하므로 하나라도 단선되면 모든 제어가 불가능하도록 직렬로 연결되어 오동작을 방지한다.',
        source: '전기동차 구조 및 기능 제2장'
    },
    {
        id: 'emu_105',
        subject: 'emu',
        chapter: '특고압회로',
        question: '절연구간 예고 방송을 위해 지상자로부터 수신하는 검지 주파수와 방송 지속 시간은?',
        options: [
            '50KHz, 68초',
            '68KHz, 50초',
            '100KHz, 60초',
            '68KHz, 3분'
        ],
        answer: 1,
        explanation: '절연구간 검지용 지상자는 68KHz 주파수를 발신하며, 수신 시 50초간 예고 방송을 출력한다.',
        source: '전기동차 구조 및 기능 제2장'
    },
    {
        id: 'emu_128',
        subject: 'emu',
        chapter: '특고압회로',
        question: '팬터그래프의 해방 높이(해방 시 높이)는 얼마인가?',
        options: [
            '1,000mm',
            '1,380mm',
            '1,480mm',
            '530mm'
        ],
        answer: 2,
        explanation: '팬터그래프 해방 시 높이는 1,480mm이며, 표준 작용 높이는 1,000mm, 최고 작용 높이는 1,380mm 이하이다.',
        source: '전기동차 구조 및 기능 제2장'
    },
    {
        id: 'emu_129',
        subject: 'emu',
        chapter: '특고압회로',
        question: '주 퓨즈(MFs) 용단 시 아크를 소호하는 물질은?',
        options: [
            '질소 가스',
            '모래',
            '고압 수증기',
            '이산화탄소'
        ],
        answer: 2,
        explanation: 'MFs 내부에 물이 있어 용단 시 고압 수증기가 발생하여 아크를 소호한다.',
        source: '전기동차 구조 및 기능 제2장'
    },
    {
        id: 'emu_130',
        subject: 'emu',
        chapter: '특고압회로',
        question: '운전실 교환 시 Pan 조작 및 MCB 투입을 담당하는 선 번호는?',
        options: [
            '7선',
            '8선',
            '2선',
            '106선'
        ],
        answer: 2,
        explanation: '2선은 운전실 교환 시 Pan 조작 및 MCB 투입 지령을 담당한다. 7선은 MCB 투입, 8선은 MCB 차단, 106선은 절연구간 타호기 MCB 차단 지령선이다.',
        source: '전기동차 구조 및 기능 제2장'
    },
    {
        id: 'emu_131',
        subject: 'emu',
        chapter: '특고압회로',
        question: '교류 구간에서 직류 구간으로 진입 시 MCB 차단 불능(양소등) 발생 시 EPanDS 취급 후의 조치로 옳은 것은?',
        options: [
            '속도 제한 없이 절연구간 통과',
            '40km/h 이하의 속도로 절연구간 통과',
            '즉시 비상제동 체결 후 정차',
            '회생제동을 사용하여 감속'
        ],
        answer: 1,
        explanation: 'AC구간은 MCB가 차단되어야 Pan이 하강하므로, 차단 불능 시 절연구간 진입 후 Pan이 하강할 시간을 벌기 위해 40km/h 이하로 서행해야 한다.',
        source: '전기동차 구조 및 기능 - 2.5.3.3 모진 보호'
    },
    {
        id: 'emu_132',
        subject: 'emu',
        chapter: '특고압회로',
        question: '주공기 압력스위치(MRPS)의 설정값 중, 기타 기기 작동 지장으로 인해 운행을 중단해야 하는 기준 압력은?',
        options: [
            '9.7kg/㎠',
            '8~9kg/㎠',
            '6~7kg/㎠',
            '5kg/㎠ 이하'
        ],
        answer: 3,
        explanation: 'MRPS가 6~7kg/㎠ 이하면 비상제동이 체결되며, 5kg/㎠ 이하가 되면 제동 및 기타 기기 작동 지장으로 운행을 중단한다.',
        source: '전기동차 구조 및 기능 - 2.1.3.2 주요 기기'
    },
    {
        id: 'emu_301',
        subject: 'emu',
        chapter: '견인장치',
        question: '유도전동기(TM)의 연속정격 제원으로 옳지 않은 것은?',
        options: [
            '연속정격: 200KW',
            '연속정격 전압: 1,100V',
            '연속정격 전류: 130A',
            '연속정격 회전수: 2,550RPM'
        ],
        answer: 3,
        explanation: '유도전동기의 연속정격 회전수는 2,055RPM이다.',
        source: '전기동차 구조 및 기능 - 3.2.1 유도전동기'
    },
    {
        id: 'emu_302',
        subject: 'emu',
        chapter: '견인장치',
        question: '직류 구간 동력 제어 시퀀스 중 L3 차단기가 투입된 후 L2 차단기가 투입될 때까지의 지연 시간은?',
        options: [
            '0.1초',
            '0.3초',
            '0.6초',
            '1.0초'
        ],
        answer: 2,
        explanation: '동력 신호 수신 후 0.3초 후 L3이 투입되고, L3 투입 신호(L3A) 수신 후 0.6초 후에 L2가 투입된다.',
        source: '전기동차 구조 및 기능 - 3.3.3.1 직류 구간의 기동 및 동력 제어'
    },
    {
        id: 'emu_303',
        subject: 'emu',
        chapter: '견인장치',
        question: '주변환장치 송풍기(CIBM) 고장 신호(BMF)가 입력되었을 때, TCU가 주변환장치를 정지시키는 보호 시한은?',
        options: [
            '즉시 정지',
            '10초',
            '20초',
            '60초'
        ],
        answer: 2,
        explanation: '송풍기 이상 신호(BMF)가 입력되면 TCU는 20초 후에 장치 보호를 위해 주변환장치를 OFF한다.',
        source: '전기동차 구조 및 기능 - 3.4.4.1 보호 작용'
    },
    {
        id: 'emu_304',
        subject: 'emu',
        chapter: '견인장치',
        question: '고속도차단기(L1)가 사고로 차단(Trip)되었을 때 제어대 표시등의 상태로 옳은 것은?',
        options: [
            'FAULT등만 점등',
            'HSCB등만 점등',
            'FAULT등과 HSCB등 동시 점등',
            'MCB등 양소등'
        ],
        answer: 2,
        explanation: 'L1 사고 차단 시 제어대의 FAULT등과 HSCB등이 동시에 점등되며, 고장 차량의 백색 차측등이 켜진다.',
        source: '전기동차 구조 및 기능 - 3.4.2.1 보호 작용'
    },
    {
        id: 'emu_305',
        subject: 'emu',
        chapter: '견인장치',
        question: '재기동을 위해 제어 전원을 차단한 후 10초 이상 대기해야 하는 주된 이유는?',
        options: [
            '팬터그래프 공기압을 채우기 위해',
            'TCU 완전 초기화 및 FC 잔류 전하 방전 시간 확보',
            'SIV의 출력 전압을 안정화하기 위해',
            '주공기 압축기(CM)의 과열을 방지하기 위해'
        ],
        answer: 1,
        explanation: 'TCU의 완전 초기화와 필터 콘덴서(FC)에 남은 전하를 방전저항기(DCHRe)를 통해 자연 방전시키는 시간을 고려한 것이다.',
        source: '전기동차 구조 및 기능 - 3.4.1.2 CIFR의 복귀'
    },
    {
        id: 'emu_401',
        subject: 'emu',
        chapter: '고압보조장치',
        question: 'SIV(보조전원장치)의 기동 3요소에 해당하지 않는 것은?',
        options: [
            '701선의 DC 1,500V 고압 전원',
            'IVCN을 통해 입력되는 115선 제어 전원',
            '114b선 기동 명령',
            '103선을 통한 보조공기압축기(ACM) 구동 신호'
        ],
        answer: 3,
        explanation: 'SIV 기동 3요소는 701선 고압, 115선 제어전원, 114b선 기동명령이다.',
        source: '전기동차 구조 및 기능 - 4.2.3'
    },
    {
        id: 'emu_402',
        subject: 'emu',
        chapter: '고압보조장치',
        question: '연장급전이 구성되기 위해 반드시 차단(Trip)되어야 하는 차단기는?',
        options: [
            'AMCN',
            'IVCN',
            'CMGN',
            'MFs'
        ],
        answer: 1,
        explanation: '연장급전 회로 구성을 위해서는 해당 유닛의 IVCN(SIV 제어 NFB)이 반드시 차단되어야 한다.',
        source: '전기동차 구조 및 기능 - 4.3.1.1'
    },
    {
        id: 'emu_403',
        subject: 'emu',
        chapter: '고압보조장치',
        question: '공기압축기 조정 스위치(CM-G)의 정상적인 구동 및 정지 압력 범위는?',
        options: [
            '7.0kg/cm² ~ 9.0kg/cm²',
            '8.0kg/cm² ~ 9.0kg/cm²',
            '8.0kg/cm² ~ 9.7kg/cm²',
            '9.0kg/cm² ~ 9.7kg/cm²'
        ],
        answer: 1,
        explanation: 'CM-G는 8.0kg/cm² 이하에서 구동하고 9.0kg/cm² 이상에서 정지한다.',
        source: '전기동차 구조 및 기능 - 4.4.1.2'
    },
    {
        id: 'emu_404',
        subject: 'emu',
        chapter: '고압보조장치',
        question: 'SIV 경고장(Light Fault) 발생 시의 보호 동작으로 옳은 것은?',
        options: [
            'TGIS에 즉시 현시된다',
            '60초 후 MCB가 차단된다',
            '3초 후 자동 Reset되어 60초간 감시한다',
            'Fault등과 차측등이 점등된다'
        ],
        answer: 2,
        explanation: '경고장은 TGIS 현시나 점등 없이 3초 후 자동 Reset되어 60초간 감시 과정을 거친다.',
        source: '전기동차 구조 및 기능 - 4.2.4'
    },
    {
        id: 'emu_405',
        subject: 'emu',
        chapter: '고압보조장치',
        question: 'M\'차의 주변환기 송풍기 차단기(CIBMN) 차단 시 발생하는 현상으로 옳은 것은?',
        options: [
            '해당 차의 C/I만 정지한다',
            'C/I와 SIV가 모두 정지하며 60초 후 MCB가 차단된다',
            '연장급전 회로가 자동으로 구성된다',
            '전 차량의 객실등이 즉시 소등된다'
        ],
        answer: 1,
        explanation: 'M\'차 CIBMN 차단 시 C/I와 SIV가 모두 정지하며, 60초 후 MCB가 차단되는 보호 동작이 수행된다.',
        source: '전기동차 구조 및 기능 - 4.5.3.1'
    },
    {
        id: 'emu_501',
        subject: 'emu',
        chapter: '저압보조장치',
        question: '보조변압기(AT)와 충전장치의 전압 변환 과정으로 틀린 것은?',
        options: [
            'AT는 AC 440V를 AC 220V와 AC 100V로 강압한다.',
            'BCT는 SIV의 AC 440V를 정류장치 입력을 위해 AC 76V로 낮춘다.',
            '정류장치(RF)는 교류를 DC 100V로 정류하여 103선을 가압한다.',
            'ATN 차단 시 103선 제어 전원이 상실되어 열차가 정지한다.'
        ],
        answer: 3,
        explanation: 'ATN 차단 시에는 해당 차량의 객실 AC등 소등과 냉방장치 가동 불능 현상이 발생하며, 103선 제어 전원과는 직접적 관련이 없습니다.',
        source: '전기동차 구조 및 기능 5.1.2, 5.2.1'
    },
    {
        id: 'emu_502',
        subject: 'emu',
        chapter: '저압보조장치',
        question: '출입문 스위치(DS) 접점의 작동 기준으로 옳은 것을 모두 고르면?',
        options: [
            'DILP DS: 7.5mm 이하로 닫힐 때 회로 구성',
            'DLP DS: 12.5mm 이상 열릴 때 차측등 점등',
            'DRO DS: 12.5mm 이상 열린 문에 대해 재개폐 회로 구성',
            '위 항목 모두 옳다.'
        ],
        answer: 3,
        explanation: 'DILP는 7.5mm 연동, DLP와 DRO는 12.5mm 열림 조건에서 각각 동작합니다. 모든 설명이 정확합니다.',
        source: '전기동차 구조 및 기능 5.3.2.1'
    },
    {
        id: 'emu_503',
        subject: 'emu',
        chapter: '저압보조장치',
        question: '운행 중 MCB ON/OFF등과 Power CRT등이 일제히 소등되었을 때 확인해야 할 차단기는?',
        options: [
            '전부 운전실의 PLPN',
            '후부 운전실의 PLPN',
            '해당 유닛 M\'차의 PLPN',
            '후부 운전실의 DILPN'
        ],
        answer: 1,
        explanation: 'MCB 관련 표시등과 Power등은 후부 TC 차량의 PLPN으로부터 전원을 공급받습니다.',
        source: '전기동차 구조 및 기능 5.4.4.2'
    },
    {
        id: 'emu_504',
        subject: 'emu',
        chapter: '저압보조장치',
        question: 'TGIS 모니터 장치의 기능 및 제원에 대한 설명으로 옳은 것은?',
        options: [
            '데이터 전송 속도는 10,000bps이다.',
            '열차 운행 기록은 최대 24시간 동안 가능하다.',
            '고장 현시 우선순위는 제동 관련 고장이 1순위이다.',
            '전부 모니터 고장 시 자동으로 후부 TC차가 중앙국으로 변경된다.'
        ],
        answer: 3,
        explanation: 'TGIS 전송 속도는 1,000bps, 기록 시간은 145시간이며, 우선순위 1순위는 ATC/ATS 고장입니다. 전부 모니터 고장 시 후부 TC차로 자동 전환됩니다.',
        source: '전기동차 구조 및 기능 5.5.1.1, 5.5.2.3'
    },
    {
        id: 'emu_505',
        subject: 'emu',
        chapter: '저압보조장치',
        question: '비상회로 구성 스위치(EOCN)를 ON 취급했을 때 축전지 전원으로 사용 가능한 기기가 아닌 것은?',
        options: [
            '열차 무전기(TRCP)',
            '각 차량의 객실 방공등',
            '차내 방송 장치',
            '객실 에어컨 및 냉방 장치'
        ],
        answer: 3,
        explanation: 'EOCN은 최소한의 전력으로 비상 안내 방송, 통신, 최소 조명(방공등)만을 유지하기 위한 장치입니다. 객실 에어컨 및 냉방 장치는 사용할 수 없습니다.',
        source: '전기동차 구조 및 기능 5.6.2.3'
    },
    {
        id: 'emu_601',
        subject: 'emu',
        chapter: '제동장치',
        question: 'HRDA 제동장치의 일괄교차제어(Cross Blending) 시, 제동력 할당의 우선순위로 옳은 것은?',
        options: [
            '부수차 공기제동 → 구동차 전기제동 → 구동차 공기제동',
            '구동차 전기제동 → 부수차 공기제동 → 구동차 공기제동',
            '구동차 전기제동 → 구동차 공기제동 → 부수차 공기제동',
            '전 차량 공기제동 → 부족분 전기제동 보충'
        ],
        answer: 1,
        explanation: '구동차의 전기제동을 최우선으로 사용하고, 부족 시 부수차(Trailer)의 공기제동을 먼저 사용하며, 마지막으로 구동차의 공기제동을 보충합니다.',
        source: '전기동차 구조 및 기능 6.2'
    },
    {
        id: 'emu_602',
        subject: 'emu',
        chapter: '제동장치',
        question: '제동 시 승차감 향상을 위한 저크(Jerk) 제어의 한계값으로 옳은 것은?',
        options: [
            '0.5m/s³ 이하',
            '0.8m/s³ 이하',
            '1.0m/s³ 이하',
            '1.5m/s³ 이하'
        ],
        answer: 1,
        explanation: '전기동차의 저크 한계값은 0.8m/s³ 이하로 규정되어 있습니다.',
        source: '전기동차 구조 및 기능 6.1.1.1'
    },
    {
        id: 'emu_603',
        subject: 'emu',
        chapter: '제동장치',
        question: '제어공기통(CR)의 용적과 압력조정밸브에 의해 조정되는 상시 압력은?',
        options: [
            '330L, 8.0~9.0kgf/cm²',
            '165L, 5.0kgf/cm²',
            '50L, 5.0kgf/cm²',
            '50L, 4.0kgf/cm²'
        ],
        answer: 2,
        explanation: '제어공기통은 50L 용적이며, 압력조정밸브에 의해 항상 5.0kgf/cm²로 유지됩니다.',
        source: '전기동차 구조 및 기능 6.3.1.1'
    },
    {
        id: 'emu_604',
        subject: 'emu',
        chapter: '제동장치',
        question: '비상제동이 체결된 후 이를 완해(Reset)하기 위한 필수 조건은?',
        options: [
            '제동핸들을 완해(REL) 위치로 즉시 이동',
            '제동핸들을 상용 1단 위치에 5초간 유지',
            '제동핸들을 반드시 7단 위치에 두어 BER 여자',
            '보안제동 스위치를 ON/OFF 조작'
        ],
        answer: 2,
        explanation: '비상제동 복귀를 위해서는 반드시 제동핸들을 7단 위치에 두어 E3 접점을 통해 BER 계전기를 여자시켜야 루프 회로가 재구성됩니다.',
        source: '전기동차 구조 및 기능 6.4.2.2'
    },
    {
        id: 'emu_605',
        subject: 'emu',
        chapter: '제동장치',
        question: '공전전환기(PEC)가 \'제동 불완해\'를 감지하여 모니터에 신호를 보내는 기준 시간은?',
        options: [
            '1.5초 이상',
            '3.5초 이상',
            '5초 이상',
            '10초 이상'
        ],
        answer: 2,
        explanation: '제동 완해 조건임에도 제동통에 기준치 이상의 압력이 5초 이상 지속되면 제동 불완해로 간주합니다.',
        source: '전기동차 구조 및 기능 6.3.4.10'
    },
    {
        id: 'emu_606',
        subject: 'emu',
        chapter: '제동장치',
        question: '구원운전을 위해 12점퍼선을 연결했을 때, BEER 계전기 여자와 상관없이 항상 통하는 선은?',
        options: [
            '10, 27, 28선',
            '31, 32, 33선',
            '145, 175, 176선',
            '100, 164, 10선'
        ],
        answer: 2,
        explanation: '145선(출입문), 175/176선(방송)은 점퍼 연결 즉시 통하며, 나머지 9개 선은 RSOS 취급으로 BEER이 여자되어야 연결됩니다.',
        source: '전기동차 구조 및 기능 6.5.2.2'
    },
    {
        id: 'emu_701',
        subject: 'emu',
        chapter: '운전보안장치',
        question: 'ATS 주의(Y) 신호 수신 시 지시속도와 이에 대응하는 공진주파수로 옳은 것은?',
        options: [
            '25km/h - 114kHz',
            '45km/h - 106kHz',
            '65km/h - 98kHz',
            '0km/h - 122kHz'
        ],
        answer: 1,
        explanation: '주의(Y) 신호 수신 시 지시속도는 45km/h이며, 공진주파수는 106kHz입니다.',
        source: '전기동차 구조 및 기능 7.2.2.2'
    },
    {
        id: 'emu_702',
        subject: 'emu',
        chapter: '운전보안장치',
        question: 'ATC 장치의 제동력 보장 기능(BA)에 대한 설명 중 틀린 것은?',
        options: [
            '지시속도 초과로 자동 7단 제동 시 작동한다.',
            '3초 이내에 감속도를 확인한다.',
            '기준 감속도는 2.4km/h/sec 이상이다.',
            '감속도 부족 시 즉시 상용 1단 제동으로 완해된다.'
        ],
        answer: 3,
        explanation: '감속도 부족 시에는 제동 계통 고장으로 판단하고 ATCEBR을 무여자시켜 ATC 비상제동을 체결합니다.',
        source: '전기동차 구조 및 기능 7.3.3.6'
    },
    {
        id: 'emu_703',
        subject: 'emu',
        chapter: '운전보안장치',
        question: 'ATS 비상제동이 체결된 후 완해(Reset)하기 위한 조치로 옳은 것은?',
        options: [
            '제동핸들을 즉시 완해위치로 이동한다.',
            '제동핸들을 비상위치로 하여 BMR을 무여자시킨 후 7단으로 이동한다.',
            '15KS 스위치를 정차 없이 즉시 취급한다.',
            'ATSN1 차단기를 꺼다가 다시 켠다.'
        ],
        answer: 1,
        explanation: '기억계전기 BMR을 무여자시키기 위해 정차 후 제동핸들을 비상 위치로 두어야 하며, 이후 7단에서 루프를 재구성합니다.',
        source: '전기동차 구조 및 기능 7.2.4.7'
    },
    {
        id: 'emu_704',
        subject: 'emu',
        chapter: '운전보안장치',
        question: 'ATC에서 본선 80km/h 운전 시 수신하는 코드 주파수는?',
        options: [
            '8.6Hz',
            '10.8Hz',
            '13.6Hz',
            '20.4Hz'
        ],
        answer: 2,
        explanation: '80km/h 지시속도에 대응하는 코드 주파수는 13.6Hz입니다.',
        source: '전기동차 구조 및 기능 7.3.1.1'
    },
    {
        id: 'emu_705',
        subject: 'emu',
        chapter: '운전보안장치',
        question: '운전 중 ATSN2 차단기가 OFF(차단)되었을 때 발생하는 현상은?',
        options: [
            '즉시 비상제동이 체결된다.',
            'ATS 비상제동 기능이 상실(완해)되고 경보가 동작하지 않는다.',
            '속도계 내의 모든 표시등이 소등된다.',
            '기동 시 초기설정이 불가능해진다.'
        ],
        answer: 1,
        explanation: 'ATSN2는 비상제동 제어회로 전원을 담당하므로, 차단 시 비상제동 기능이 상실되며 경보와 표시등 전원도 끊깁니다.',
        source: '전기동차 구조 및 기능 7.2.5.1'
    },
    {
        id: 'emu_706',
        subject: 'emu',
        chapter: '운전보안장치',
        question: 'ATC에서 YARD2(구내운전) 계전기가 해제(무여자)되는 조건은?',
        options: [
            '15km/h 정지신호를 수신했을 때',
            '본선의 지시속도 신호(SC 여자)를 수신했을 때',
            '열차 속도가 25km/h를 초과했을 때',
            '제동핸들을 비상 위치로 두었을 때'
        ],
        answer: 1,
        explanation: '본선의 지시속도 신호를 수신하여 SC 계전기가 여자되면 유지 계전기인 YARD2가 무여자되면서 본선 모드로 전환됩니다.',
        source: '전기동차 구조 및 기능 7.3.4.1'
    },
    {
        id: 'emu_707',
        subject: 'emu',
        chapter: '운전보안장치',
        question: 'ASOS(특수운전 스위치)를 취급해야 하는 상황이 아닌 것은?',
        options: [
            '절대정지(R0) 신호를 관제 승인 후 진입할 때',
            '지상장치(지상자) 고장 시',
            '허용정지(R1) 구간을 위반 진입했을 때',
            '유도신호에 따라 운전할 때'
        ],
        answer: 2,
        explanation: '허용정지(R1) 구간 관련 조치는 15KS(15km/h 스위치)를 사용합니다.',
        source: '전기동차 구조 및 기능 7.2.4.9'
    },
    // 6장 제동장치 심화 문제 (emu_6_101 ~ emu_6_105)
    {
        id: 'emu_6_101',
        subject: 'emu',
        chapter: '제동장치',
        question: 'EOD의 히스테리시스 보정 기능에 대한 설명으로 옳은 것은?',
        options: [
            '전기제동 소멸 시 공기제동 지연을 방지한다.',
            '제동 전류 증가 시와 감소 시의 제동통 압력을 동일하게 맞춘다.',
            '공기스프링 파손 시 최소 제동력을 보증한다.',
            '제동 단수 변화 시 충격을 완화한다.'
        ],
        answer: 1,
        explanation: '히스테리시스 보정은 제어전류가 커질 때 압력이 늦게 형성되는 현상을 보완하기 위해 전류 증가 시 설정치를 낮추는 기능입니다.',
        source: '전기동차 구조 및 기능 6.3.4.1 (2) 7)'
    },
    {
        id: 'emu_6_102',
        subject: 'emu',
        chapter: '제동장치',
        question: '전공변환밸브(EPV)에 500mA의 전류 신호가 입력되었을 때 출력되는 공기 압력은?',
        options: [
            '1.56 kgf/㎠',
            '3.24 kgf/㎠',
            '4.52 kgf/㎠',
            '7.48 kgf/㎠'
        ],
        answer: 2,
        explanation: 'EPV는 300/500/700mA일 때 각각 약 1.56/4.52/7.48 kgf/㎠의 압력을 생성합니다.',
        source: '전기동차 구조 및 기능 요약 160'
    },
    {
        id: 'emu_6_103',
        subject: 'emu',
        chapter: '제동장치',
        question: '공전전환기(PEC)가 제동력 부족을 감지하여 해당 차량에 비상제동을 체결시키는 조건은?',
        options: [
            '상용 7단 체결 후 5초 경과 시',
            '전기제동 무효 상태에서 상용 7단 체결 후 3.5초 이내 압력 미달 시',
            '전기제동 작동 중 제동통 압력이 3.5초 이내 도달하지 않을 때',
            '상용 4단 제동 중 활주가 발생하여 압력이 떨어질 때'
        ],
        answer: 1,
        explanation: '전기제동 미작동 시, 상용 7단/ATC 제동에서 공기압력이 3.5초 이내 설정치에 미달하면 제동력 부족으로 간주합니다.',
        source: '전기동차 구조 및 기능 6.3.4.10 (2) 3)'
    },
    {
        id: 'emu_6_104',
        subject: 'emu',
        chapter: '제동장치',
        question: '구원운전 시 12점퍼선을 연결했을 때, RSOS 취급 없이도 항상 통하는 인통선 번호의 조합은?',
        options: [
            '10, 27, 33선',
            '31, 32, 164선',
            '145, 175, 176선',
            '100, 164, 10선'
        ],
        answer: 2,
        explanation: '145(출입문), 175/176(방송)선은 점퍼 연결 즉시 연결되며, 나머지는 BEER 계전기 여자가 필요합니다.',
        source: '전기동차 구조 및 기능 6.5.2.2'
    },
    {
        id: 'emu_6_105',
        subject: 'emu',
        chapter: '제동장치',
        question: '비상제동 루프회로를 재구성하여 제동을 완해하기 위해 거쳐야 하는 제동핸들의 필수 위치는?',
        options: [
            '완해(REL) 위치',
            '상용 1단 위치',
            '상용 4단 위치',
            '상용 7단 위치'
        ],
        answer: 3,
        explanation: '비상제동 복귀를 위해서는 반드시 제동핸들을 7단 위치에 두어 E3 접점으로 BER을 여자시켜야 루프가 살아납니다.',
        source: '전기동차 구조 및 기능 6.4.2.2 (3)'
    },
    // ============ Chapter 3 - 견인장치 (trac_q_001~020) ============
    {
        id: 'trac_q_001',
        subject: 'emu',
        chapter: '견인장치',
        question: '유도전동기가 직류전동기에 비해 갖는 장점으로 틀린 것은?',
        options: [
            '정류자나 브러시가 없어 유지보수비가 절감된다.',
            '기계적 강도가 뛰어나 고속운전이 가능하다.',
            '직류기에 비해 크기가 약 30% 정도 크고 무겁다.',
            '인버터 제어로 동력과 제동의 절환이 용이하다.'
        ],
        answer: 2,
        explanation: '유도전동기는 직류전동기 대비 약 30% 정도 작고 가볍습니다.',
        source: '견인장치 3.1.1 개요'
    },
    {
        id: 'trac_q_002',
        subject: 'emu',
        chapter: '견인장치',
        question: '자기장 내에서 도체를 회전시킬 때 유도되는 전류 방향을 결정하는 발전기의 원리 법칙은?',
        options: [
            '앙페르의 오른나사 법칙',
            '플레밍의 오른손 법칙',
            '플레밍의 왼손 법칙',
            '렌츠의 법칙'
        ],
        answer: 1,
        explanation: '발전기의 원리는 플레밍의 오른손 법칙이며, 전동기의 원리는 왼손 법칙입니다.',
        source: '견인장치 3.1.2.2 플레밍의 법칙'
    },
    {
        id: 'trac_q_003',
        subject: 'emu',
        chapter: '견인장치',
        question: '4극 유도전동기에 60Hz의 전원을 공급할 때의 동기속도(Ns)는?',
        options: ['900 RPM', '1,200 RPM', '1,800 RPM', '3,600 RPM'],
        answer: 2,
        explanation: 'Ns = 120f / P 이므로, 120 * 60 / 4 = 1,800 RPM입니다.',
        source: '견인장치 3.2.1.4 회전자계와 회전수'
    },
    {
        id: 'trac_q_004',
        subject: 'emu',
        chapter: '견인장치',
        question: '유도전동기 토크(T) 공식에서 토크의 크기와 \'비례\' 관계가 아닌 것은?',
        options: ['상수 K', '전원 전압(V)의 제곱', '전원 주파수(f)의 제곱', '슬립주파수(Fs)'],
        answer: 2,
        explanation: '토크는 주파수(f)의 제곱에 \'반비례\'하며, 전압의 제곱과 슬립주파수에 비례합니다.',
        source: '견인장치 3.2.1.5 (3) 회전력 제어'
    },
    {
        id: 'trac_q_005',
        subject: 'emu',
        chapter: '견인장치',
        question: '주 변환장치에서 정류 시 발생하는 파형 전압(리플)을 흡수하는 평활회로의 구성 요소는?',
        options: [
            '필터리액터 (FL)',
            '필터커패시터 (FC)',
            '과전압 저항기 (OVRe)',
            '충전 저항기 (CHR)'
        ],
        answer: 1,
        explanation: '필터커패시터(FC)가 리플 전압을 흡수하여 전압을 평활화합니다.',
        source: '견인장치 3.2.2.1 (1) 주 변환장치부'
    },
    {
        id: 'trac_q_006',
        subject: 'emu',
        chapter: '견인장치',
        question: '직류 구간에서 고속도차단기(L1)가 트립(Trip)되는 회로 전류 기준치는?',
        options: ['120A 초과', '840A 초과', '1,500A 초과', '1,600A 초과'],
        answer: 3,
        explanation: '직류 전류가 1,600A를 초과하면 견인 장치 보호를 위해 L1이 트립됩니다.',
        source: '견인장치 3.2.4.1 L1 차단기'
    },
    {
        id: 'trac_q_007',
        subject: 'emu',
        chapter: '견인장치',
        question: '전기적 충격 방지를 위해 L3이 먼저 투입되어 FC를 충전할 때 거치는 저항기는?',
        options: ['OVRe', 'DCHRe', 'CHR', 'CRe'],
        answer: 2,
        explanation: 'L3 투입 시 충전 저항기(CHR)를 통해 FC에 완만한 충전이 이루어집니다.',
        source: '견인장치 3.2.4.2 L2, L3 차단기'
    },
    {
        id: 'trac_q_008',
        subject: 'emu',
        chapter: '견인장치',
        question: '기관사안전장치(DSD)가 작동한 후 자동으로 비상제동이 체결되기까지 걸리는 시간은?',
        options: ['즉시', '약 3초 후', '약 5초 후', '약 10초 후'],
        answer: 2,
        explanation: 'DSD 작동 시 경고 방송 송출 후 약 5초 후에 비상제동이 체결됩니다.',
        source: '견인장치 3.3.2.1 (3) 기관사안전장치부'
    },
    {
        id: 'trac_q_009',
        subject: 'emu',
        chapter: '견인장치',
        question: '교류 구간에서 SIV의 구동을 위해 M\'차에서 반드시 투입되어야 하는 차단기는?',
        options: ['L1', 'L2, L3', 'AK', 'K'],
        answer: 1,
        explanation: '교류 구간 M\'차는 L3, L2가 투입되어야 SIV에 전원이 공급됩니다.',
        source: '견인장치 3.3.3 동력 제어회로'
    },
    {
        id: 'trac_q_010',
        subject: 'emu',
        chapter: '견인장치',
        question: '직류 구간에서 동력 운전 신호(11선) 발생 후 인버터가 기동되기까지의 순서로 옳은 것은?',
        options: [
            '0.1초 후 L3 투입 -> 0.3초 후 L2 투입',
            '0.3초 후 L3 투입 -> 0.6초 후 L2 투입 -> 0.1초 후 인버터 기동',
            '즉시 L2, L3 동시 투입 -> 인버터 기동',
            '0.6초 후 L2 투입 -> 0.3초 후 L3 투입'
        ],
        answer: 1,
        explanation: '11선 가압 0.3초 후 L3, 그 0.6초 후 L2, 다시 0.1초 후 인버터가 기동합니다.',
        source: '견인장치 3.3.3.1 (5) 직류 구간 제어 요약'
    },
    {
        id: 'trac_q_011',
        subject: 'emu',
        chapter: '견인장치',
        question: '전기제동(회생제동)은 어떤 제동 상태에서만 작용하는가?',
        options: ['보안제동', '비상제동', '상용제동', '주차제동'],
        answer: 2,
        explanation: '전기제동은 오직 상용제동(1~7Step) 시에만 공기 제동과 혼합되어 작용합니다.',
        source: '견인장치 3.3.4 전기제동 제어회로'
    },
    {
        id: 'trac_q_012',
        subject: 'emu',
        chapter: '견인장치',
        question: '교류 구간 M\'차에서 CIFR(주 변환장치 고장) 발생 시 나타나는 최종 현상은?',
        options: [
            'Pan 즉시 하강',
            '60초 후 MTAR 여자로 인한 MCB 차단',
            'L1 차단 동작 현시',
            '축전지 전압 급락'
        ],
        answer: 1,
        explanation: 'CIFR -> SIV 정지 -> MTOM 정지 -> 60초 후 MTAR 여자로 MCB가 차단됩니다.',
        source: '견인장치 3.4.1.1 CIFR 보호 작용'
    },
    {
        id: 'trac_q_013',
        subject: 'emu',
        chapter: '견인장치',
        question: 'L1 차단기가 트립된 후, 사고 차단 상태에서 정상 차단 상태로 복귀시키기 위한 조치는?',
        options: [
            '즉시 MCBCS 취급',
            'PanDS 후 다시 PanUS',
            'MCBOS 후 RS(리셋) 취급',
            'VCOS 취급'
        ],
        answer: 2,
        explanation: '사고 차단된 L1은 RS 취급을 해주어야 정상 차단 상태로 돌아와 재투입이 가능해집니다.',
        source: '견인장치 3.4.2.2 L1 트립 복귀'
    },
    {
        id: 'trac_q_014',
        subject: 'emu',
        chapter: '견인장치',
        question: '교류 구간에서 \'주 변압기 2차 측 과부하\' 발생 시 MCB를 차단시키는 계전기는?',
        options: ['L1FR', 'CIFR', 'MCBOR', 'BMFR'],
        answer: 2,
        explanation: '주 변압기 2차 측 고장은 중고장이므로 MCBOR이 무여자되어 MCB를 차단합니다.',
        source: '견인장치 3.4.3.1 MCBOR 보호 작용'
    },
    {
        id: 'trac_q_015',
        subject: 'emu',
        chapter: '견인장치',
        question: 'BMF(송풍기 이상) 신호 입력 시 기기 보호를 위해 TCU가 주 변환장치를 정지시키는 시점은?',
        options: ['즉시', '5초 후', '10초 후', '20초 후'],
        answer: 3,
        explanation: 'TCU는 BMF 신호 수신 20초 후에 전력소자를 OFF 하여 장치를 보호합니다.',
        source: '견인장치 3.4.4.1 (2) TCU 고장 신호 입력'
    },
    {
        id: 'trac_q_016',
        subject: 'emu',
        chapter: '견인장치',
        question: 'VCOS(차량차단스위치) 취급 시 \'운전실 표시등\'에 점등되는 고장 표시등은?',
        options: ['FAULT등', 'UCO등', 'VCO등', 'HSCB등'],
        answer: 2,
        explanation: 'VCOS 취급 시에는 해당 차량 차단을 의미하는 VCO등이 점등됩니다.',
        source: '견인장치 3.5.1 CIFR, BMFR 여자 시 차단'
    },
    {
        id: 'trac_q_017',
        subject: 'emu',
        chapter: '견인장치',
        question: '주 변압기 오일펌프(MTOM) 정지 후 몇 초가 지나야 MTOFTR이 여자되는가?',
        options: ['10초', '20초', '30초', '60초'],
        answer: 3,
        explanation: '유류 순환 정지 후 시한장치에 의해 60초 후에 MTOFTR이 여자됩니다.',
        source: '견인장치 3.5.2 MTAR 여자 시 차단'
    },
    {
        id: 'trac_q_018',
        subject: 'emu',
        chapter: '견인장치',
        question: '유도전동기의 \'자체 냉각 방식\'에 대한 설명 중 옳은 것은?',
        options: [
            '별도의 송풍기로 냉각한다.',
            '회전자에 부착된 팬이 회전하며 냉각한다.',
            '수냉식 재킷을 이용한다.',
            '냉각유를 순환시킨다.'
        ],
        answer: 1,
        explanation: '전기동차용 유도전동기는 자체 냉각 방식을 채택하고 있습니다.',
        source: '견인장치 3.2.1 유도전동기 개요'
    },
    {
        id: 'trac_q_019',
        subject: 'emu',
        chapter: '견인장치',
        question: '직류 구간 맥류 전압에 포함된 \'고조파\' 성분을 제거하는 기기는?',
        options: ['주 변압기', '인버터', '필터리액터', '과전압 방전 사이리스터'],
        answer: 2,
        explanation: '필터리액터(FL)는 직류 구간 맥류의 고조파를 제거하기 위해 설치됩니다.',
        source: '견인장치 3.2.3 필터리액터'
    },
    {
        id: 'trac_q_020',
        subject: 'emu',
        chapter: '견인장치',
        question: '교류 구간에서 \'AK 투입\' 후 FC 충전이 완료되면 \'K\'가 투입되기까지 걸리는 시간은?',
        options: ['0.3초', '0.75초', '1.0초', '3.0초'],
        answer: 1,
        explanation: 'AK 투입으로부터 0.75초 후에 TCU에서 KR(K 투입) 신호를 보냅니다.',
        source: '견인장치 3.3.3.2 (1) 6) K 투입신호'
    },
    // ============ Chapter 4 - 고압보조장치 (aux_q_001~020) ============
    {
        id: 'aux_q_001',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: 'SIV(보조전원장치)의 입력 및 출력 규격으로 옳은 것은?',
        options: [
            '입력 DC 1500V / 출력 AC 440V 60Hz',
            '입력 AC 25000V / 출력 DC 1500V',
            '입력 DC 1500V / 출력 DC 100V',
            '입력 AC 840V / 출력 AC 440V'
        ],
        answer: 0,
        explanation: 'SIV는 DC 1,500V를 입력받아 AC 3상 440V 60Hz 전력을 생산합니다.',
        source: '고압보조 4.1.1 (1) 보조전원장치'
    },
    {
        id: 'aux_q_002',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: 'SIV 경고장 발생 시 조치로 옳은 것은?',
        options: [
            '즉시 Pan 하강 취급',
            '해당 Unit MCB 즉시 차단',
            '모니터 메시지 확인 후 수동 리셋',
            '자동으로 3초 후 복구'
        ],
        answer: 3,
        explanation: '경고장은 모니터 현시 없이 3초 후 자동 재기동하며 60초간 이상 유무를 감시합니다.',
        source: '고압보조 4.2.4.2 SIV 경고장'
    },
    {
        id: 'aux_q_003',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: '연장급전 시 반드시 \'차단\'되어야 연장급전 회로가 구성되는 차단기는?',
        options: ['MCN', 'HCRN', 'IVCN', 'ESKN'],
        answer: 2,
        explanation: 'IVCN이 차단되어야 SIV 제어장치가 정지하고 연장급전 접촉기(ESK) 투입 회로가 완성됩니다.',
        source: '고압보조 4.3.1.1 (5) IVCN'
    },
    {
        id: 'aux_q_004',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: 'CM(공기압축기)의 동기구동을 담당하는 핵심 회로선 번호는?',
        options: ['10선', '11선', '103선', '112선'],
        answer: 3,
        explanation: '112선을 통해 3대의 CM 구동 제어회로를 연결하여 동기구동을 실시합니다.',
        source: '고압보조 4.4.3.1 동기구동 회로 구성'
    },
    {
        id: 'aux_q_005',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: 'SIV 고장으로 연장급전을 시행했을 때 나타나는 현상으로 틀린 것은?',
        options: [
            '객실 AC등이 반감된다.',
            '난방 1050W 취급 시 350W 히터는 가동되지 않는다.',
            '고장 Unit의 동력운전 출력이 정상화된다.',
            '냉방은 HALF 상태로만 작동된다.'
        ],
        answer: 2,
        explanation: '연장급전으로는 고장 Unit의 보조기기만 동작하며, 동력운전은 불가능합니다.',
        source: '고압보조 4.3.3.2 연장급전 취급 후 현상'
    },
    {
        id: 'aux_q_006',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: '주공기 압력이 과다 상승하여 안전밸브가 분출될 때의 설정 압력은?',
        options: [
            '8.0 kg/cm²',
            '8.5 kg/cm²',
            '9.7 ± 0.1 kg/cm²',
            '11.0 kg/cm²'
        ],
        answer: 2,
        explanation: '안전밸브는 9.7 ± 0.1kg/cm²를 초과할 경우 공기를 방출합니다.',
        source: '고압보조 4.4.1.2 (6) 안전밸브'
    },
    {
        id: 'aux_q_007',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: 'SIV 중고장 발생 시 운전실 표시등과 모니터의 변화로 옳은 것은?',
        options: [
            '파란색 SIV 표시등만 점등',
            'TGIS \'SIV 고장\' 자막과 Fault등 점등',
            '백색 차측등 소등',
            '모니터 영상 자동 차단'
        ],
        answer: 1,
        explanation: '중고장 시에는 TGIS \'SIV 고장\' 자막과 함께 Fault등 및 차측등이 점등됩니다.',
        source: '고압보조 4.2.4.3 SIV 중고장'
    },
    {
        id: 'aux_q_008',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: 'FLBM(필터리액터 송풍기)이 동작하는 구간은?',
        options: ['교류 구간만', '직류 구간만', '모든 구간', '절연구간 통과 중'],
        answer: 1,
        explanation: '필터리액터(FL)는 직류 구간에서만 동작하므로, FLBM도 직류 구간 운행 시만 냉각합니다.',
        source: '고압보조 4.5.2 (2) 필터리액터 송풍기'
    },
    {
        id: 'aux_q_009',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: 'CM 인버터 고장 시 자동으로 바이패스 구동으로 전환되는 타이밍은?',
        options: [
            '즉시',
            '5초 후 1단, 다시 5초 후 2단',
            '10초 후',
            '20초 후'
        ],
        answer: 1,
        explanation: 'CM 인버터 고장 시 5초 후 1단 구동, 다시 5초 후 2단 고속 구동으로 자동 전환됩니다.',
        source: '고압보조 4.4.2.2 CM 인버터 장치 고장 시'
    },
    {
        id: 'aux_q_010',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: 'M\'차의 FLBM(필터리액터 송풍기)의 전원은 어느 차단기를 통해 공급되는가?',
        options: [
            'CIBMN',
            'MTBMN',
            'MTOMN',
            'FLBMN'
        ],
        answer: 1,
        explanation: 'M\'차의 FLBM은 MTBMN(주변압기 송풍기 NFB)을 통하여 전원을 공급받습니다.',
        source: '고압보조 4.5.2 (2) 필터리액터 송풍기'
    },
    {
        id: 'aux_q_011',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: 'CIBMN 차단 시 TCU의 보호 동작은?',
        options: [
            'Pan 자동 하강',
            'MCB 자동 차단',
            'C/I 정지 및 회생제동 불능',
            'SIV 자동 차단'
        ],
        answer: 2,
        explanation: 'BMF 신호를 받은 TCU는 C/I를 정지시키며, 동력운전 및 회생제동이 불능 상태가 됩니다.',
        source: '고압보조 4.5.1.2 (3) 송풍전동기 보호'
    },
    {
        id: 'aux_q_012',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: 'MTAR(주변압기 보호) 여자 시 다음 중 동시에 일어나는 현상은?',
        options: [
            '비상제동 체결',
            'SIV 정지',
            'MCB 자동 차단',
            'Pan 자동 하강'
        ],
        answer: 2,
        explanation: 'MTAR 여자로 인해 UCOR 계전기가 동시에 여자되어 MCB를 차단합니다.',
        source: '고압보조 4.5.3.1 UCOR의 기능'
    },
    {
        id: 'aux_q_013',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: '냉난방 절환 스위치(CHCgS)에서 \'OFF\' 위치의 의미는?',
        options: [
            '냉방 HALF 상태',
            '냉방 FULL 상태',
            '난방과 냉방 모두 미작동',
            '송풍만 작동'
        ],
        answer: 2,
        explanation: '냉난방 절환 스위치는 난방, OFF, FAN, 냉방 HALF/FULL 위치로 구성됩니다.',
        source: '고압보조 4.6.1 냉난방 장치'
    },
    {
        id: 'aux_q_014',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: '난방 1,050W를 취급할 때 동시에 작동하는 히터의 조합은?',
        options: [
            '700W만',
            '350W만',
            '350W + 700W',
            '750W'
        ],
        answer: 2,
        explanation: '난방 1,050W 취급 시의 히터 조합은 350W 히터와 700W 히터가 동시에 작용합니다.',
        source: '고압보조 4.6.1.2 (2) 난방'
    },
    {
        id: 'aux_q_015',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: '객실 난방장치를 제어할 수 있는 위치는?',
        options: [
            '전부 운전실만',
            '후부 운전실만',
            '운행 중 후부, 유치 중 양쪽 모두',
            '어느 운전실에서나 항상 가능'
        ],
        answer: 2,
        explanation: '객실 난방장치는 운행 중에는 후부 운전실에서만, 유치 중에는 양쪽 모두 취급 가능합니다.',
        source: '고압보조 4.6.1.2 (3) 제어 위치'
    },
    {
        id: 'aux_q_016',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: '냉방 HALF 위치 시 동작하는 냉방기 구성 요소는?',
        options: [
            '압축기 2대, 응축기 1대',
            '압축기 1대, 응축기 1대, 팬 2개',
            '증발기 팬 전체 + 압축기 1대 + 응축기 1대',
            '증발기만 동작'
        ],
        answer: 2,
        explanation: '냉방 HALF 위치 시 동작 기기는 증발기 팬 전체와 압축기 1대, 응축기 1대입니다.',
        source: '고압보조 4.6.3.2 (2) HALF 위치 시 동작'
    },
    {
        id: 'aux_q_017',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: '냉매(R22)가 증발기에서 수행하는 기능은?',
        options: [
            '열을 발생시켜 난방한다',
            '액체가 기체로 증발할 때 열을 흡수하여 객실을 식힌다',
            '압축기에 전원을 공급한다',
            '응축기에서 방열한다'
        ],
        answer: 1,
        explanation: '냉매는 액체가 기체로 증발할 때 주위 열을 흡수하는 원리를 이용합니다.',
        source: '고압보조 4.6.3.3 (2) R22의 순환 원리'
    },
    {
        id: 'aux_q_018',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: '운전실 난방의 전원 및 규격으로 옳은 것은?',
        options: [
            'AC 440V, 350W 2대',
            'DC 100V, 500W 1대',
            'AC 440V, 750W 2대',
            'DC 100V, 1050W 1대'
        ],
        answer: 2,
        explanation: '운전실 난방은 750W 난방기 2대가 설치되어 CabHeN1/2 스위치로 제어합니다.',
        source: '고압보조 4.6.4 운전실 난방'
    },
    {
        id: 'aux_q_019',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: '축전지 충전 과정에서 AC 440V는 어느 전압으로 강압되는가?',
        options: ['AC 76V', 'AC 100V', 'DC 100V', 'DC 84V'],
        answer: 0,
        explanation: 'SIV 출력 AC 440V를 BCT에서 AC 76V로 낮춘 후 정류하여 DC 100V를 만듭니다.',
        source: '고압보조 4.7 충전장치'
    },
    {
        id: 'aux_q_020',
        subject: 'emu',
        chapter: '고압보조 장치',
        question: 'SIV 중고장 발생 60초 후에 자동으로 차단되는 기기는?',
        options: [
            'Pan 차단',
            'L1 차단기',
            '해당 Unit의 MCB',
            'Pan과 MCB 동시'
        ],
        answer: 2,
        explanation: 'SIV 중고장 발생 60초 후에 해당 Unit의 MCB가 자동으로 차단됩니다.',
        source: '고압보조 4.2.4.3 SIV 중고장시 MCB 차단 타이밍'
    }
];

console.log(`'emu.js' loaded:`, QUESTIONS_EMU.length);

