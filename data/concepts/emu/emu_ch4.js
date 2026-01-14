/**
 * 고압보조장치
 * aux_ch4_001~080: 고압보조 장치 및 공기압축기
 * 자동 생성됨 - 수동 편집 가능
 */

const CHAPTER_EMU_CH4 = {
    id: 'emu_ch4',
    name: '고압보조장치',
    order: 4,
    sections: [
        {
            id: 'aux_ch4_001',
            title: '고압보조 장치의 정의',
            content: `DC 1,500V~1,800V를 공급받아 구동하는 SIV와 그 출력인 AC 440V를 전원으로 작용하는 CM, BM, 냉난방장치 등을 총칭한다.`,
            keyTerms: ['고압보조', '장치', 'SIV'],
            relatedQuestions: ['aux_q_001']
        },
        {
            id: 'aux_ch4_002',
            title: '특고압 vs 고압보조 기기 구분',
            content: `AC 25,000V 사용 기기는 특고압 장치이며, DC 1,500V를 사용하지만 차량을 견인하지 않는 SIV, CM 등은 고압보조 장치로 분류한다.`,
            keyTerms: ['특고압', '고압보조', '분류'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_003',
            title: '고압보조 회로 가압 시점',
            content: `Pan이 상승하고 주회로 차단기(MCB)가 투입되면 고압보조 회로에 DC 1,500V가 공급되며 전차선 전압계(HV)가 동작한다.`,
            keyTerms: ['고압보조회로', '가압', 'Pan'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_004',
            title: '고압보조 Unit의 구성 (10량 편성)',
            content: `3개 Unit(3량-3량-4량)으로 구성되며, 각각 TC1, T1, TC2 차량에 설치된 SIV가 해당 Unit의 전원을 담당한다.`,
            keyTerms: ['Unit', '구성', '10량편성'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_005',
            title: 'SIV(Static Inverter)의 기본 역할',
            content: `DC 1,500V~1,800V를 입력받아 AC 3상 440V 60Hz의 정격 전력을 만들어 각 보조 기기에 공급한다.`,
            keyTerms: ['SIV', '보조전원장치', 'AC440V'],
            relatedQuestions: ['aux_q_001']
        },
        {
            id: 'aux_ch4_006',
            title: 'SIV의 주회로 및 제어 방식',
            content: `주회로는 12상 IGBT 인버터 방식을, 제어는 PWM(펄스폭 변조) 제어 방식을 채택한다.`,
            keyTerms: ['SIV', '12상IGBT', 'PWM'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_007',
            title: 'SIV의 냉각 방식',
            content: `히트 싱크(Heat Sink)를 이용한 자연 냉각 방식을 채택하여 신뢰성을 높였으며 소음이 적다.`,
            keyTerms: ['SIV', '냉각', '히트싱크'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_008',
            title: 'SIV 정격 용량 및 과부하 내량',
            content: `정격 용량은 190KVA(연속)이며, 과부하 내량은 200%에서 1분간 견딜 수 있다.`,
            keyTerms: ['SIV', '190KVA', '과부하'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_009',
            title: 'SIV의 12상 인버터 구조',
            content: `2대의 6상 인버터를 30도의 위상차로 운전하여 출력 파형의 품질을 높인다.`,
            keyTerms: ['12상인버터', '6상', '위상차'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_010',
            title: 'IVF(SIV Fuse)의 기능',
            content: `SIV 입력 전원(DC 1,500V)의 과전류 발생 시 SIV 장치를 보호하기 위해 용단되는 퓨즈이다.`,
            keyTerms: ['IVF', 'SIV Fuse', '과전류'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_011',
            title: 'IVS(Knife Switch)의 역할',
            content: `유지보수 시 점검자 보호를 위해 고압 회로를 수동으로 분리하며, 방전 회로를 구성한다.`,
            keyTerms: ['IVS', 'Knife Switch', '방전회로'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_012',
            title: 'IVHB(SIV 고속도차단기)의 역할',
            content: `SIV 전용 고속도 차단기로, 보호장치 동작 시 신속하게 차단하여 장치를 보호한다.`,
            keyTerms: ['IVHB', '고속도차단기', '보호'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_013',
            title: 'HK(방전 접촉기)의 동작 특징',
            content: `SIV 정상 구동 시 항상 차단(동작) 상태인 B접점(Normal Close) 타입으로, 정지 시 투입되어 FC 잔류 전하를 방전한다.`,
            keyTerms: ['HK', '방전접촉기', 'FC'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_014',
            title: 'FL 및 SL(평활 리액터)의 차이',
            content: `FL은 입력 전원의 리플 전류를 평활화하고, SL은 인버터 스위칭 시 발생하는 고조파를 제거한다.`,
            keyTerms: ['평활리액터', 'FL', 'SL'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_015',
            title: 'SIVK(출력 접촉기)의 투입 조건',
            content: `SIV 출력이 AC 440V 60Hz의 정전압·정주파수가 확보되었을 때만 투입되어 부하에 전원을 공급한다.`,
            keyTerms: ['SIVK', '출력접촉기', 'AC440V'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_016',
            title: 'SIV 기동을 위한 3대 필수 신호',
            content: `①701선 전원(DC 1,500V), ②115선(제어 전원), ③114b선(기동 명령)이 모두 입력되어야 한다.`,
            keyTerms: ['SIV기동', '필수신호', '701선'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_017',
            title: '구간별 SIV 구동 전원 공급 경로',
            content: `교류 구간은 주변압기(MT)와 컨버터를 통해, 직류 구간은 L1 고속도차단기 투입 시 즉시 공급된다.`,
            keyTerms: ['SIV', '전원공급', '경로'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_018',
            title: 'SIV PLC(제어장치)의 기능',
            content: `입출력 전원 모니터링, Gate 제어, PWM 펄스 발생 및 고장 기록 저장을 수행한다.`,
            keyTerms: ['SIV PLC', '제어장치', '기능'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_019',
            title: 'SIV 경고장(Minor Fault)의 정의',
            content: `고장 시 SIV는 정지하나 모니터에 현시되지 않으며, 3초 후 자동 Reset되어 60초간 감시한다.`,
            keyTerms: ['경고장', 'Minor Fault', '60초'],
            relatedQuestions: ['aux_q_002']
        },
        {
            id: 'aux_ch4_020',
            title: 'SIV 중고장(Major Fault)의 정의',
            content: `SIVFR이 여자되어 모니터에 'SIV 고장'이 뜨고, Fault등 및 차측등이 점등되며 자동 재기동이 Locking된다.`,
            keyTerms: ['중고장', 'Major Fault', 'SIVFR'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_021',
            title: 'SIV 중고장 전환 조건',
            content: `경고장 발생 후 60초 감시 시간 내 재고장이 발생하거나, 초기 고장 자체가 중고장 요인일 때 발생한다.`,
            keyTerms: ['중고장', '전환조건', '60초'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_022',
            title: 'ASOC(출력회로 단락) 보호의 특수성',
            content: `부하 단락 시 SIV가 정지하며, 연장급전 시 정상 SIV까지 죽는 것을 막기 위해 ASOCR을 여자하여 연장급전 회로 구성을 차단한다.`,
            keyTerms: ['ASOC', '단락보호', '연장급전'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_023',
            title: 'SIV 중고장 시 MCB 차단 타이밍',
            content: `SIV 중고장 발생 60초 후에 해당 Unit의 MCB가 자동으로 차단된다.`,
            keyTerms: ['SIV중고장', 'MCB차단', '60초'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_024',
            title: '연장급전(Extension Supply)의 목적',
            content: `SIV 고장 또는 Pan 하강 시 정상 Unit의 SIV 전원을 연장하여 고장 Unit 보조 기기를 가동하기 위함이다.`,
            keyTerms: ['연장급전', '목적', 'SIV고장'],
            relatedQuestions: ['aux_q_003']
        },
        {
            id: 'aux_ch4_025',
            title: 'ESPS(연장급전 스위치)의 기능',
            content: `운전실 원격 스위치로, SIV 중고장(SIVFR 여자) 상태에서만 유효하게 작동한다.`,
            keyTerms: ['ESPS', '연장급전스위치', '원격'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_026',
            title: 'ESS(연장급전 선택 스위치)의 위치',
            content: `①번 위치, ②번 위치, N(자차) 위치의 3단계로 구성되며, N 위치에서는 연장급전이 되지 않는다.`,
            keyTerms: ['ESS', '선택스위치', '위치'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_027',
            title: 'ESS 위치 설정의 의미 (중간 T1차)',
            content: `①번은 TC1 SIV로부터 수전(6량 분담), ②번은 TC2 SIV로부터 수전(7량 분담)을 의미한다.`,
            keyTerms: ['ESS위치', 'T1차', '분담'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_028',
            title: 'ESKS(연장급전 접촉기 스위치) 설정',
            content: `6/10량 편성은 'T' 위치, 8량 편성은 'N' 위치로 설정되어 있어야 연장급전이 가능하다.`,
            keyTerms: ['ESKS', '스위치설정', '편성'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_029',
            title: 'ESK(연장급전 접촉기)의 설치 위치',
            content: `T차량(3호차, 6호차)의 차량 하부에 설치되어 전원을 바이패스시킨다.`,
            keyTerms: ['ESK', '접촉기', '위치'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_030',
            title: 'IVCN(SIV 제어 NFB)의 핵심 역할',
            content: `연장급전 시 반드시 IVCN이 차단되어야 회로가 구성되며, 차단 시 TGIS에 '연장급전'과 'SIV 통신이상'이 현시된다.`,
            keyTerms: ['IVCN', 'SIV제어', 'NFB'],
            relatedQuestions: ['aux_q_003']
        },
        {
            id: 'aux_ch4_031',
            title: 'AMCS(자동 연장급전 스위치)의 용도',
            content: `1인 운전 및 ATO 운전 시 SIV 고장 발생 시 자동으로 IVCN을 트립시켜 연장급전을 시행하는 장치이다.`,
            keyTerms: ['AMCS', '자동연장급전', '1인운전'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_032',
            title: '전부 Unit(TC1) SIV 고장 시 전원 공급',
            content: `중간 Unit(T1)의 SIV로부터 AC 440V를 연장급전 받아 공급한다.`,
            keyTerms: ['TC1', 'SIV고장', '전원공급'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_033',
            title: '중간 Unit(T1) SIV 고장 시 ESS 권장 위치',
            content: `부하 분담(6량) 효율을 위해 ①번 위치(전부 수전)를 권장한다.`,
            keyTerms: ['T1', 'SIV고장', '부하분담'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_034',
            title: '연장급전 취급 후 부하 제한 1 (객실등)',
            content: `LRR2 계전기 여자로 인해 전 차량의 객실 AC등이 반감(소등)된다.`,
            keyTerms: ['연장급전', '객실등', 'LRR2'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_035',
            title: '연장급전 취급 후 부하 제한 2 (난방)',
            content: `LRR1 여자로 인해 1,050W 취급 시 350W 히터는 가동되지 않는다.`,
            keyTerms: ['연장급전', '난방', 'LRR1'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_036',
            title: '연장급전 취급 후 부하 제한 3 (냉방)',
            content: `LRR1 여자로 인해 FULL 냉방 취급 시에도 HALF 냉방(압축기 1대 정지)으로만 가동된다.`,
            keyTerms: ['연장급전', '냉방', '압축기'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_037',
            title: 'CM(Compressor Motor)의 구동 전원',
            content: `SIV로부터 공급받는 AC 3상 440V 60Hz를 전원으로 유도전동기를 구동한다.`,
            keyTerms: ['CM', '공기압축기', 'AC440V'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_038',
            title: 'CM의 압축 방식 및 제원',
            content: `스크루(Screw)형 암수 로터에 의한 연속 1단 압축 방식이며, 토출 압력은 9kgf/cm²이다.`,
            keyTerms: ['CM', '스크루형', '압축'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_039',
            title: 'CM-G(압축기 조정 스위치)의 설정치',
            content: `MR 압력이 8.0kg/cm² 이하에서 구동을 시작하고, 9.0kg/cm² 이상에서 정지한다.`,
            keyTerms: ['CM-G', '조정스위치', '설정치'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_040',
            title: 'CM 안전밸브의 설정 압력',
            content: `공기압 과다 상승 시 9.7 ± 0.1kg/cm²에서 압축공기를 대기로 방출하여 기기를 보호한다.`,
            keyTerms: ['안전밸브', 'CM', '9.7kg'],
            relatedQuestions: ['aux_q_006']
        },
        {
            id: 'aux_ch4_041',
            title: '공기건조기(Air Dryer)의 작동 주기',
            content: `트윈 타워 방식으로 타이머에 의해 2분 간격으로 교호 동작하며 수분을 제거한다.`,
            keyTerms: ['공기건조기', '트윈타워', '2분'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_042',
            title: 'CM의 동기구동 회로(112선)의 정의',
            content: `10량 편성의 CM 3대를 112선으로 연결하여 동시에 구동 및 정지하게 하는 회로이다.`,
            keyTerms: ['동기구동', '112선', '회로'],
            relatedQuestions: ['aux_q_004']
        },
        {
            id: 'aux_ch4_043',
            title: 'CM-G 용착 시 고장 차량 판별법',
            content: `CMGN을 순차적으로 OFF하여 전체 CM이 멈추는 차량을 확인하며, 해당 차 CMGN OFF 상태로 운전한다.`,
            keyTerms: ['CM-G', '용착', '판별'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_044',
            title: 'CM 바이패스(BY-PASS) 구동의 시한',
            content: `CM 인버터 고장 시 5초 후 1단 구동, 다시 5초 후 2단 고속 구동으로 자동 전환된다.`,
            keyTerms: ['CM바이패스', '5초', '자동전환'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_045',
            title: '연장급전 시 CM의 재기동 시간',
            content: `연장급전 조치 후 AC 440V가 재공급되면 CM은 3초 후 자동으로 재구동한다.`,
            keyTerms: ['연장급전', 'CM', '3초'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_046',
            title: 'CM 보호장치: EOCR(과전류계전기)',
            content: `바이패스 구동 시 전동기 과부하를 검지하여 PCR 및 BCMK 회로를 차단하고 정지시킨다.`,
            keyTerms: ['EOCR', '과전류', '보호'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_047',
            title: 'CM 오일 온도 보호(Oil Th)',
            content: `압축기 내 순환 오일의 온도가 110℃ 이상 시 구동을 차단한다.`,
            keyTerms: ['오일온도', '110℃', '보호'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_048',
            title: '송풍전동기 장치의 기본 전원',
            content: `SIV 공급 전원인 AC 440V를 사용하며, 주변압기, 주변환기, 필터리액터 냉각에 쓰인다.`,
            keyTerms: ['송풍기', 'BM', 'AC440V'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_049',
            title: 'CIBM(주변환기 송풍기)의 설치 위치',
            content: `M차와 M'차 하부에 설치되어 컨버터와 인버터를 냉각한다 (GTO 차량 기준).`,
            keyTerms: ['CIBM', '주변환기', 'M차'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_050',
            title: 'MTBM 및 MTOM의 역할',
            content: `MTOM은 절연유를 강제 순환시키고, MTBM은 오일 쿨러를 송풍하여 주변압기를 냉각한다.`,
            keyTerms: ['MTBM', 'MTOM', '냉각'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_051',
            title: 'FLBM(필터리액터 송풍기)의 운행 구간',
            content: `필터리액터(FL)는 직류 구간에서만 동작하므로, FLBM도 직류 구간 운행 시 냉각 작용을 한다.`,
            keyTerms: ['FLBM', '필터리액터', '직류구간'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_052',
            title: 'M\'차 FLBM의 특이한 전원 공급로',
            content: `M'차의 FLBM은 MTBMN(주변압기 송풍기 NFB)을 통하여 전원을 공급받는다.`,
            keyTerms: ['M\'차', 'FLBM', 'MTBMN'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_053',
            title: 'CIBMN 차단 시 TCU 보호 동작',
            content: `BMF 신호를 받은 TCU는 C/I를 정지시키며, 동력운전 및 회생제동이 불능 상태가 된다.`,
            keyTerms: ['CIBMN', 'BMF신호', 'TCU'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_054',
            title: 'APR(고압보조 확인계전기)의 기능',
            content: `SIV의 구동 상태를 확인하며, 무여자 시 각 차량 TCU에 BMF를 입력하여 C/I를 정지시킨다.`,
            keyTerms: ['APR', '확인계전기', 'SIV'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_055',
            title: 'MTAR(주변압기 보호) 여자 시점',
            content: `MTOMN/MTBMN 차단 또는 오일 흐름 불량(MTOFR 차단) 60초 후 MTOFTR 여자 시 발생한다.`,
            keyTerms: ['MTAR', '주변압기', '여자'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_056',
            title: '냉난방 절환 스위치(CHCgS)의 구성',
            content: `난방(350/700/1050W), OFF, FAN, 냉방(HALF/FULL)의 단계적 취급이 가능하다.`,
            keyTerms: ['냉난방스위치', 'CHCgS', '구성'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_057',
            title: '난방 1,050W 취급 시의 히터 조합',
            content: `350W 히터와 700W 히터가 동시에 작용하여 최대 열량을 낸다.`,
            keyTerms: ['난방', '1050W', '히터'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_058',
            title: '객실 난방장치의 제어 위치',
            content: `운행 중에는 후부 운전실에서만 취급 가능하며, 유치 중에는 양쪽 모두 가능하다.`,
            keyTerms: ['난방장치', '제어위치', '운전실'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_059',
            title: '냉방 장치(Unit Cooler)의 기기 구성',
            content: `1대당 증발기 팬(EF), 압축기(CP) 2대, 응축기(CF) 2대가 내장되어 있다.`,
            keyTerms: ['Unit Cooler', '냉방', '기기'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_060',
            title: '냉방 HALF 위치 시 동작 기기',
            content: `증발기 팬 전체와 압축기 1대, 응축기 1대만 가동하여 냉방을 조절한다.`,
            keyTerms: ['냉방', 'HALF', '동작'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_061',
            title: '냉매(R22)의 순환 원리',
            content: `액체가 기체로 증발할 때 주위 열을 흡수하는 원리를 이용하며, 증발기(EF)를 통해 객실 공기를 식힌다.`,
            keyTerms: ['냉매', 'R22', '증발'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_062',
            title: '운전실 난방 규격',
            content: `750W 난방기 2대가 설치되어 있으며 CabHeN1/2 스위치로 제어한다.`,
            keyTerms: ['운전실난방', '750W', '스위치'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_063',
            title: '축전지 충전을 위한 전압 강압 수치',
            content: `SIV 출력 AC 440V를 BCT에서 AC 76V로 낮춘 후 정류하여 DC 100V를 만든다.`,
            keyTerms: ['축전지충전', 'BCT', 'DC100V'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_064',
            title: 'SSS(외부전원공급장치)의 목적',
            content: `SIV 미구동 상태에서 외부 AC 440V를 받아 보조 기기를 시험·검사할 수 있게 한다.`,
            keyTerms: ['SSS', '외부전원', '검사'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_065',
            title: 'EqRe(전류 평형용 저항기)의 역할',
            content: `교-교 절연구간 통과 시 무가압 상태가 되어도 SIV 정지를 막기 위해 정상 Unit과 평형을 맞춘다.`,
            keyTerms: ['EqRe', '평형용저항기', '절연구간'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_066',
            title: '12상 인버터의 IGBT 모듈 구성',
            content: `3개의 히트 싱크 모듈로 구성되어 방열 효율을 극대화하였다.`,
            keyTerms: ['IGBT', '인버터', '히트싱크'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_067',
            title: 'SIV 중고장 복귀 시 3초의 의미',
            content: `MCBOS-RS 취급 후 3초 대기는 TCU 및 SIV 제어장치가 초기화되기를 기다리는 시간이다.`,
            keyTerms: ['SIV중고장', '복귀', '초기화'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_068',
            title: '연장급전 시 SIV 부하 분담',
            content: `연장급전 시 1대의 SIV가 최소 6량에서 최대 7량의 보조 전력을 담당하게 된다.`,
            keyTerms: ['연장급전', 'SIV', '부하분담'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_069',
            title: 'CM 스크루 압축기의 오일 용량',
            content: `오일 최대 용량은 8~10리터이며 오일 쿨러에 의해 강제 냉각된다.`,
            keyTerms: ['압축기', '오일용량', '냉각'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_070',
            title: 'CM 구동 제어 계전기(CMAR/PCR)',
            content: `CMAR이 기동 명령을 수신하면 PCR이 CMSB(기동장치)에 최종 기동 신호를 준다.`,
            keyTerms: ['CMAR', 'PCR', '기동'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_071',
            title: 'BMFR(송풍기 고장계전기) 여자 시 현상',
            content: `Fault등 점등과 함께 해당 차 TCU에 BMF가 입력되어 인버터 제어가 중단된다.`,
            keyTerms: ['BMFR', '송풍기고장', 'Fault'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_072',
            title: 'SIV 고장 시 냉방 작용 변화',
            content: `LRR1 여자로 인해 NO1, NO2 냉방기의 2번 압축기(CP2)가 모두 정지하여 HALF 상태가 된다.`,
            keyTerms: ['SIV고장', '냉방', 'CP2'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_073',
            title: 'MR 본관 파손 시의 CM 조치',
            content: `공기 누설 방지를 위해 해당 차량의 CMGN과 CMCN을 동시에 OFF하여 구동을 완전 정지시킨다.`,
            keyTerms: ['MR본관', 'CM', '정지'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_074',
            title: 'SIV 제어 전원(CPSF) 이상 시',
            content: `보호 항목 중 CPSF 경고장이 발생하며, 즉시 IVHB가 차단된다.`,
            keyTerms: ['CPSF', '제어전원', 'IVHB'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_075',
            title: '169선 가압의 의미',
            content: `연장급전 시 169선이 전 차량에 직통 가압되어 전체 LRR1, LRR2를 동시에 여자시킨다.`,
            keyTerms: ['169선', '연장급전', '가압'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_076',
            title: 'CMN(50A) 차단기의 특성',
            content: `기동 시의 순간적인 돌입 과전류에는 차단되지 않고 지속적인 과부하 시에만 차단된다.`,
            keyTerms: ['CMN', '차단기', '특성'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_077',
            title: '쵸퍼부(CH1, CH2)의 작용',
            content: `인버터 장치에 일정한 직류 전원을 공급하기 위해 상하 2중 구조로 교호 동작한다.`,
            keyTerms: ['쵸퍼부', 'CH1', 'CH2'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_078',
            title: 'MG(전동발전기)와의 차이',
            content: `구형 MG는 회전형으로 무겁고 복잡했으나, SIV는 반도체 정지형으로 가볍고 정밀하다.`,
            keyTerms: ['MG', 'SIV', '차이'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_079',
            title: '냉방기 제어 전원 종류',
            content: `구동은 AC 440V, 제어는 DC 100V, 제어 및 동결방지는 AC 100V를 사용한다.`,
            keyTerms: ['냉방기', '제어전원', 'AC440V'],
            relatedQuestions: []
        },
        {
            id: 'aux_ch4_080',
            title: 'Shutdown 상태의 의미',
            content: `ASOC(출력 단락) 등 중대한 고장으로 인해 SIV가 완전히 정지하여 재기동이 불가능한 상태이다.`,
            keyTerms: ['Shutdown', 'ASOC', '상태'],
            relatedQuestions: []
        }
    ]
};
