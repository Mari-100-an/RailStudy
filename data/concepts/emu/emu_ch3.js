/**
 * 견인장치
 * trac_ch3_001~080: 견인장치 및 동력 제어 회로
 * 자동 생성됨 - 수동 편집 가능
 */

const CHAPTER_EMU_CH3 = {
    id: 'emu_ch3',
    name: '견인장치',
    order: 3,
    sections: [
        {
            id: 'trac_ch3_001',
            title: '철도용 유도전동기 채택의 역사',
            content: `과거에는 정류자가 있는 직류전동기를 썼으나, VVVF 제어 기술의 발전으로 구조가 간단하고 신뢰성이 높은 유도전동기가 최초로 채택되었다.`,
            keyTerms: ['유도전동기', '직류전동기', 'VVVF'],
            relatedQuestions: ['trac_q_001']
        },
        {
            id: 'trac_ch3_002',
            title: '유도전동기의 4대 특징',
            content: `정류자/브러시가 없어 정비비 절감, 기계적 강도가 높아 고속 운전 가능, 직류기 대비 30% 소형·경량화, 인버터 제어로 기계적 절환기 감소 등이 있다.`,
            keyTerms: ['유도전동기', '정류자', '브러시', '경량화'],
            relatedQuestions: ['trac_q_001']
        },
        {
            id: 'trac_ch3_003',
            title: 'GTO 사이리스터의 기능',
            content: `무접점 스위치 역할을 하는 전력변환 소자로, 외부 신호에 의해 전력을 공급하거나 차단하고 제어하는 기능을 수행한다.`,
            keyTerms: ['GTO', '사이리스터', '전력변환', '스위치'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_004',
            title: 'IGBT(절연게이트 양극성 트랜지스터)',
            content: `GTO보다 스위칭 속도가 빠르고 소음 및 발열이 적어 최신 전기동차의 전력변환 장치에서 무접점 스위치로 널리 사용된다.`,
            keyTerms: ['IGBT', 'GTO', '스위칭', '발열'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_005',
            title: 'VVVF(가변전압 가변주파수) 제어',
            content: `인버터를 통해 교류 전력의 전압과 주파수를 동시에 변화시켜 유도전동기의 속도와 회전력(토크)을 정밀하게 제어하는 방식이다.`,
            keyTerms: ['VVVF', '가변전압', '가변주파수', '토크'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_006',
            title: 'TCU(견인제어장치)의 역할',
            content: `주 변환장치에 내장된 마이크로프로세서 장치로, 컨버터와 인버터를 제어하여 동력 운전, 전기제동 및 견인 장치 보호를 수행한다.`,
            keyTerms: ['TCU', '견인제어장치', '컨버터', '인버터'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_007',
            title: '견인 회로의 범위',
            content: `주 변압기 2차 측의 주 변환장치(C/I) 입구부터 실제 추진력을 내는 유도전동기까지의 전기 회로 전체를 의미한다.`,
            keyTerms: ['견인회로', '주변환장치', 'C/I'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_008',
            title: '차단기(Line Breaker)의 분류',
            content: `견인/고압 회로를 상시 개폐하거나 과부하 시 차단하는 장치로, 고속도차단기(L1)와 유닛 스위치(L2, L3) 등이 포함된다.`,
            keyTerms: ['차단기', 'L1', 'L2', 'L3'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_009',
            title: '역률(Power Factor)의 정의',
            content: `이론상의 전력 중 실제로 일을 하는 유효전력의 비율이며, 리액터 회로에서는 전압 위상이 전류보다 앞선다.`,
            keyTerms: ['역률', 'Power Factor', '유효전력'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_010',
            title: 'PWM(펄스폭 변조) 제어',
            content: `전력소자의 스위칭을 이용해 펄스 폭을 조절함으로써 원하는 정현파 출력 파형과 전압·전류의 크기를 얻는 제어 방법이다.`,
            keyTerms: ['PWM', '펄스폭변조', '스위칭'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_011',
            title: '앙페르의 오른나사 법칙',
            content: `전류가 흐르는 방향이 나사의 진행 방향일 때, 나사의 회전 방향이 자기장의 방향이 된다는 법칙이다.`,
            keyTerms: ['앙페르', '오른나사', '자기장'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_012',
            title: '플레밍의 오른손 법칙 (발전기)',
            content: `자기장 내에서 도체를 이동시킬 때 유도되는 전류 방향을 나타내며, 엄지는 힘, 검지는 자기장, 중지는 전류를 뜻한다.`,
            keyTerms: ['플레밍', '오른손법칙', '발전기'],
            relatedQuestions: ['trac_q_002']
        },
        {
            id: 'trac_ch3_013',
            title: '플레밍의 왼손 법칙 (전동기)',
            content: `전류와 자기장의 상호작용으로 발생하는 힘의 방향을 나타내며, 엄지(힘), 검지(자기장), 중지(전류) 순이다.`,
            keyTerms: ['플레밍', '왼손법칙', '전동기'],
            relatedQuestions: ['trac_q_002']
        },
        {
            id: 'trac_ch3_014',
            title: '렌츠의 법칙',
            content: `자속의 변화를 방해하는 방향으로 유도기전력이 발생한다는 법칙으로, 변압기의 기본 원리가 된다.`,
            keyTerms: ['렌츠의법칙', '자속', '유도기전력'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_015',
            title: '전기동차 동력 전달 순서',
            content: `유도전동기 회전자 회전력 → 기어 커플링 → 소치차 → 대치차 → 차축 → 동륜 순으로 전달된다.`,
            keyTerms: ['동력전달', '기어커플링', '소치차', '대치차'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_016',
            title: '회생제동의 원리',
            content: `제동 시 전동기를 발전기로 작용시켜 발생한 전기에너지를 다시 전차선으로 되돌려 보내는 에너지 절약 방식이다.`,
            keyTerms: ['회생제동', '발전기', '에너지절약'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_017',
            title: '직류 구간 동력 운전 경로',
            content: `전차선 → 팬터그래프 → 주차단기 → 교직절환기 → 고속도차단기(L1) → 인버터 → 유도전동기 순이다.`,
            keyTerms: ['직류구간', '동력운전', '경로'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_018',
            title: '교류 구간 동력 운전 경로',
            content: `전차선 → 팬터그래프 → 주차단기 → 교직절환기 → 주 변압기 → 컨버터 → 인버터 → 유도전동기 순이다.`,
            keyTerms: ['교류구간', '동력운전', '경로'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_019',
            title: '유도전동기의 구조적 특징',
            content: `고정자 권선에만 전류가 흐르고 회전자에는 외부 전류 공급 장치(브러시 등)가 없어 구조가 매우 견고하다.`,
            keyTerms: ['유도전동기', '고정자', '회전자'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_020',
            title: '유도전동기의 제원 (표준)',
            content: `3상 4극 농형 유도전동기로, 연속 정격은 200kW, 1,100V, 130A, 2,055RPM이다.`,
            keyTerms: ['유도전동기', '200kW', '1100V', '2055RPM'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_021',
            title: '아라고(Arago)의 원판',
            content: `동 원판 위에 자석을 회전시키면 와전류와 자기장의 상호작용으로 원판이 따라 도는 현상으로 유도전동기의 기본 원리다.`,
            keyTerms: ['아라고원판', '와전류', '기본원리'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_022',
            title: '회전자계의 발생',
            content: `고정자 철심 홈에 120도 전기각 간격으로 배치된 3상 코일에 전류를 흘리면 가상의 전자석이 회전하는 현상이다.`,
            keyTerms: ['회전자계', '3상코일', '120도'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_023',
            title: '동기속도(Ns) 계산식',
            content: `Ns = 120f / P (f: 주파수, P: 극수)이며, 회전 속도는 주파수에 비례하고 극 수에 반비례한다.`,
            keyTerms: ['동기속도', 'Ns', '계산식'],
            relatedQuestions: ['trac_q_003']
        },
        {
            id: 'trac_ch3_024',
            title: '주파수 제어의 한계 보완',
            content: `주파수만 높이면 회전력(토크)이 떨어지므로, 전압을 동시에 올려 회전력을 유지하는 VVVF 제어를 사용한다.`,
            keyTerms: ['주파수제어', 'VVVF', '토크'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_025',
            title: '슬립(Slip)의 정의와 공식',
            content: `회전자계 속도(Ns)와 실제 회전자 속도(N)가 일치하지 않는 비율로, S = (Ns - N) / Ns로 나타낸다.`,
            keyTerms: ['슬립', 'Slip', '공식'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_026',
            title: '유도전동기 회전력(Torque) 공식',
            content: `T = K · (V/f)² · Fs (Fs: 슬립주파수)이며, 전압/주파수 비와 슬립주파수를 통해 토크를 제어한다.`,
            keyTerms: ['토크', 'Torque', '공식'],
            relatedQuestions: ['trac_q_004']
        },
        {
            id: 'trac_ch3_027',
            title: '주 변환장치(C/I)의 구성 요소',
            content: `전력변환장치부(컨버터, 인버터, 평활회로)와 견인제어장치부(TCU)로 구성되어 있다.`,
            keyTerms: ['주변환장치', 'C/I', '컨버터', '인버터'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_028',
            title: '직류 구간 인버터의 역할',
            content: `직류 1,500V 전원을 입력받아 평활화한 후 3상 교류로 변환하여 4대의 유도전동기를 제어한다.`,
            keyTerms: ['인버터', '직류', '3상교류'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_029',
            title: '교류 구간 컨버터의 역할',
            content: `주 변압기에서 온 단상교류(AC 840V)를 직류 1,800V로 변환하여 인버터로 공급한다.`,
            keyTerms: ['컨버터', '교류구간', 'AC840V'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_030',
            title: '견인제어장치(TCU) 제어부 구성',
            content: `전압/전류 검출회로, 속도검출회로, 연산회로, 전력소자를 제어하는 구동회로로 나뉜다.`,
            keyTerms: ['TCU', '제어부', '구성'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_031',
            title: '가벼운 고장 시 하드웨어 보호',
            content: `전력소자를 OFF 하는 동시에 과전압 방전 사이리스터(OVCRf)로 필터커패시터(FC) 전하를 방전한다.`,
            keyTerms: ['보호', 'OVCRf', 'FC'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_032',
            title: '교류 구간 중고장 시 보호',
            content: `전력소자 소손, 과부하, 접지 등 중고장 시 MCBOR 무여자로 주차단기(MCB)를 직접 차단한다.`,
            keyTerms: ['중고장', 'MCBOR', 'MCB'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_033',
            title: 'PWM 컨버터의 3대 작용',
            content: `교류를 직류로 바꾸는 정류작용, 전압을 DC 1,800V로 높이는 승압작용, 역률 및 정전압 제어 작용을 한다.`,
            keyTerms: ['컨버터', 'PWM', '정류'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_034',
            title: '정전압 제어 로직',
            content: `실제 전압이 낮으면 전류를 증가시켜 전압을 높이고, 높으면 전원 측으로 유효전력을 회생시켜 DC 1,800V를 유지한다.`,
            keyTerms: ['정전압제어', '로직'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_035',
            title: '인버터의 전압 및 주파수 제어법',
            content: `출력 전압은 펄스폭(ON 기간)으로 제어하며, 주파수는 스위칭 주기(t2)를 변경하여 제어한다.`,
            keyTerms: ['인버터', '전압제어', '주파수제어'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_036',
            title: '유도전동기 회전 방향 바꾸기',
            content: `인버터 전력소자의 점호 순서를 변경하여 유도전동기 고정자 권선의 V상과 W상을 서로 바꿈으로써 결정한다.`,
            keyTerms: ['회전방향', '인버터', '점호순서'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_037',
            title: '속도 영역별 전기제동 제어',
            content: `고속은 주파수만, 중속은 주파수와 슬립주파수를, 저속은 주파수와 전압을 함께 줄여 감속시킨다.`,
            keyTerms: ['전기제동', '속도영역'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_038',
            title: 'OVCRf(과전압 방전 사이리스터)',
            content: `회생제동 시 FC 전압이 설정치를 초과하거나 소자 제어 전원 저하 시 FC 전하를 과전압 저항기(OVRe)로 방전한다.`,
            keyTerms: ['OVCRf', '과전압', '방전'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_039',
            title: '방전 저항기(DCHRe)의 기능',
            content: `Pan 하강 후 FC에 남아있는 잔류 전하를 수 분 내에 자연 방전시켜 안전한 검수 작업을 돕는다.`,
            keyTerms: ['방전저항기', 'DCHRe', '잔류전하'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_040',
            title: '필터리액터(FL)의 역할 (직류 전용)',
            content: `직류 구간 맥류 전압의 고조파(리플 전압)와 이상 충격 전압을 흡수하여 주 변환장치를 보호한다.`,
            keyTerms: ['필터리액터', 'FL', '고조파'],
            relatedQuestions: ['trac_q_019']
        },
        {
            id: 'trac_ch3_041',
            title: '필터리액터 냉각 방식',
            content: `SIV의 AC 440V 전원을 사용하는 송풍 전동기(FLBFM)에 의해 강제 공냉식으로 냉각된다.`,
            keyTerms: ['필터리액터', '냉각', '송풍기'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_042',
            title: 'L1 차단기 트립 기준',
            content: `직류 구간 운행 중 회로 전류가 1,600A를 초과하거나 전력소자 소손(GTO Arm 단락) 시 즉시 트립된다.`,
            keyTerms: ['L1차단기', '트립', '1600A'],
            relatedQuestions: ['trac_q_006']
        },
        {
            id: 'trac_ch3_043',
            title: 'L2, L3 차단기의 투입 순서',
            content: `전기적 충격 완화를 위해 L3이 먼저 투입되어 CHR을 통해 FC를 충전한 후, L2가 투입되어 정상 회로를 맺는다.`,
            keyTerms: ['L2', 'L3', '차단기'],
            relatedQuestions: ['trac_q_007']
        },
        {
            id: 'trac_ch3_044',
            title: 'L2, L3 차단기의 개방 순서',
            content: `차단 시 발생하는 충격을 줄이기 위해 L2가 먼저 끊기고, 약한 전류가 흐르는 상태에서 L3이 최종 개방한다.`,
            keyTerms: ['L2', 'L3', '개방'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_045',
            title: 'AK(보조 접촉기)와 K(교류 접촉기)',
            content: `AK가 먼저 투입되어 FC를 초기 충전(돌입전류 방지)하고, 충전 완료 후 K가 투입되면 AK는 차단된다.`,
            keyTerms: ['AK', 'K', '접촉기'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_046',
            title: 'TCU의 기동 대전제',
            content: `전차선 급전, Pan 상승, MCB 투입, SIV 기동으로 압축공기와 제어 전원이 정상 상태여야 운전 제어가 가능하다.`,
            keyTerms: ['TCU', '기동', '대전제'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_047',
            title: '주간제어기(MC)의 구성',
            content: `전·후진 핸들(4개 위치), 동력 핸들(5개 위치), 그리고 기관사안전장치(DSD)로 구성된다.`,
            keyTerms: ['주간제어기', 'MC', 'DSD'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_048',
            title: 'DSD(기관사안전장치)의 작동',
            content: `주행 중 동력 핸들을 누르지 않으면 경고 방송 후 약 5초 후에 전 차량 비상제동이 자동으로 체결된다.`,
            keyTerms: ['DSD', '기관사안전', '비상제동'],
            relatedQuestions: ['trac_q_008']
        },
        {
            id: 'trac_ch3_049',
            title: '동력 신호의 변환 과정',
            content: `동력 핸들 위치가 전위차계의 저항값으로 변환되고, 인코더가 이를 PWM 신호로 만들어 TCU로 전송한다.`,
            keyTerms: ['동력신호', '변환', 'PWM'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_050',
            title: '전기/공기 혼합제동 로직',
            content: `EOD가 제동패턴을 TCU에 주면 TCU는 전기제동을 우선 시행하고, 부족분은 피드백을 통해 공기제동이 보충한다.`,
            keyTerms: ['혼합제동', '전기제동', '공기제동'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_051',
            title: '직류 구간 L1 투입 조건',
            content: `전부 운전실 103선 가압, MCB 투입 상태에서 L1R 계전기가 여자되어야 L1 차단기가 투입된다.`,
            keyTerms: ['L1', '투입조건', '103선'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_052',
            title: '직류 구간 SIV 기동 신호',
            content: `L1 투입을 확인하는 L1RR 계전기가 여자되면 SIV 기동 신호가 전달되어 SIV가 작동한다.`,
            keyTerms: ['L1', 'SIV', '기동신호'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_053',
            title: '동력 제어의 필수 연동 조건',
            content: `전체 출입문이 닫혀 DIR1 계전기가 작동하거나, 부득이한 경우 DIRS(비연동 스위치)를 취급해야 동력 신호(11선)가 전달된다.`,
            keyTerms: ['동력제어', '출입문', '11선'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_054',
            title: '직류 구간 동력 투입 타이밍',
            content: `동력 신호(11선) 발생 → 0.3초 후 L3 투입 → 0.6초 후 L2 투입 → 0.1초 후 인버터 기동 순이다.`,
            keyTerms: ['동력투입', '타이밍', '순서'],
            relatedQuestions: ['trac_q_010']
        },
        {
            id: 'trac_ch3_055',
            title: '인버터 제어의 3개 영역',
            content: `저속의 정토크 제어, 중속의 정출력 제어, 고속의 특성 제어 영역으로 구분된다.`,
            keyTerms: ['인버터제어', '속도영역'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_056',
            title: '교류 구간 M\'차 특화 기동',
            content: `M'차는 SIV 전원 공급을 위해 동력 핸들 취급 전에도 L3, L2 차단기가 먼저 투입되어야 한다.`,
            keyTerms: ['교류구간', 'M\'차', '기동'],
            relatedQuestions: ['trac_q_009']
        },
        {
            id: 'trac_ch3_057',
            title: '교류 구간 AK/K 투입 타이밍',
            content: `L2 투입 1초 후 AK(충전용) 투입 → 0.75초 후 K(메인) 투입 및 AK 차단 순이다.`,
            keyTerms: ['교류구간', 'AK', 'K'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_058',
            title: '전기제동 신호(10선) 가압',
            content: `제동 핸들을 1~7Step으로 두면 10선이 가압되어 TCU에 회생제동 지령을 전달하며 ELBR 여자로 11선(역행)을 차단한다.`,
            keyTerms: ['전기제동', '10선', '회생제동'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_059',
            title: '비상제동 시 전기제동 차단',
            content: `비상제동 Loop 회로가 끊겨 EBR1 계전기가 무여자되면 10선을 차단하여 순수 공기 제동만 작동하게 한다.`,
            keyTerms: ['비상제동', '전기제동', '공기제동'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_060',
            title: 'CIFR(주 변환장치 고장) 발생 현상',
            content: `직류에서는 L2, L3 차단 및 인버터 정지, 교류에서는 K 차단 및 컨버터/인버터가 정지된다.`,
            keyTerms: ['CIFR', '고장', '현상'],
            relatedQuestions: ['trac_q_012']
        },
        {
            id: 'trac_ch3_061',
            title: 'M\'차 CIFR 여자의 연쇄 현상',
            content: `CIFR 여자 → L2, L3 차단 → 10초 후 SIV 정지 → 송풍기/MTOM 정지 → 60초 후 MTAR 여자로 MCB 차단 순이다.`,
            keyTerms: ['M\'차', 'CIFR', '연쇄현상'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_062',
            title: '보호 작용 후 기본 복귀 절차',
            content: `MCBOS(차단) → RS 취급 → 3초 대기(TCU 초기화) → MCBCS(투입) 순으로 시행한다.`,
            keyTerms: ['보호', '복귀절차'],
            relatedQuestions: ['trac_q_013']
        },
        {
            id: 'trac_ch3_063',
            title: '재기동 시 10초 대기 이유',
            content: `TCU의 완전 초기화 시간 확보와 FC 내 잔류 전하의 자연 방전 시간을 고려한 것이다.`,
            keyTerms: ['재기동', '대기', '초기화'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_064',
            title: 'L1 트립 시 운전실 표시등',
            content: `FAULT등과 함께 HSCB등이 점등되며, 모니터에는 'L1 차단 동작'이 현시된다.`,
            keyTerms: ['L1트립', '표시등', 'FAULT'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_065',
            title: 'MCBOR(MCB 차단계전기) 무여자 요인',
            content: `주 변압기 2차 측(컨버터 측) 과부하, 접지, 또는 전력소자 소손 시 무여자되어 MCB를 차단한다.`,
            keyTerms: ['MCBOR', '무여자', 'MCB'],
            relatedQuestions: ['trac_q_014']
        },
        {
            id: 'trac_ch3_066',
            title: 'BMFR(송풍전동기 고장)의 원인',
            content: `CIBMN, FLBMN 등의 차단기 트립이나 SIV 정지로 인해 송풍기가 멈추면 여자된다.`,
            keyTerms: ['BMFR', '송풍기', '고장'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_067',
            title: 'TCU의 BMF 신호 수신 조치',
            content: `BMF(송풍기 이상) 신호를 수신한 TCU는 기기 과열 방지를 위해 20초 후에 주 변환장치를 정지시킨다.`,
            keyTerms: ['BMF신호', 'TCU', '정지'],
            relatedQuestions: ['trac_q_015']
        },
        {
            id: 'trac_ch3_068',
            title: '회생제동 시 직류 과전압 보호',
            content: `팬터그래프 이탈 등으로 회생 전압이 급증하면 OVCRf가 작동하여 전하를 방전하고 장치를 보호한다.`,
            keyTerms: ['회생제동', '과전압', '보호'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_069',
            title: 'VCOS(차량차단스위치) 취급 대상',
            content: `CIFR, BMFR, MTAR 여자 시 RS 취급으로도 복귀되지 않을 때 해당 차량의 동력을 차단하기 위해 사용한다.`,
            keyTerms: ['VCOS', '차량차단', '스위치'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_070',
            title: 'VCOS 취급 시 기기 변화',
            content: `VCOR 계전기가 여자되어 해당 차량의 L1~L3, AK, K 투입 회로가 완전히 차단된다.`,
            keyTerms: ['VCOS', 'VCOR', '차단'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_071',
            title: 'M\'차 VCOS 취급 시 유의사항',
            content: `M'차 차단 시 SIV도 정지하므로 인접 유닛으로부터 전원을 받는 연장 급전 조치가 병행되어야 한다.`,
            keyTerms: ['M\'차', 'VCOS', '연장급전'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_072',
            title: 'VRS(차량차단 복귀스위치)의 사용',
            content: `고장 원인을 제거한 후 VCORR을 무여자시켜 차량 차단 상태를 정상으로 복구할 때 사용한다.`,
            keyTerms: ['VRS', '복귀스위치'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_073',
            title: 'MTAR 여자 유발 조건',
            content: `MTOMN 차단, MTOMK 무여자, 또는 MTOFTR(유류 순환 정지 60초) 여자 시 발생한다.`,
            keyTerms: ['MTAR', '여자조건'],
            relatedQuestions: ['trac_q_017']
        },
        {
            id: 'trac_ch3_074',
            title: 'UCOR(유닛 차단 계전기)의 기능',
            content: `MTAR 작동 시 여자되어 해당 유닛 M, M'차 2량의 동력을 동시에 차단하고 MCB 투입을 저지한다.`,
            keyTerms: ['UCOR', '유닛차단', '계전기'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_075',
            title: '계전기의 a접점과 b접점',
            content: `a접점은 작동(여자) 시 붙는 접점이고, b접점은 무여자 시 붙어 있다가 작동 시 떨어지는 접점이다.`,
            keyTerms: ['계전기', 'a접점', 'b접점'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_076',
            title: '아크(Arc)의 정의',
            content: `전류가 흐르는 회로를 차단할 때 접점 사이의 공기를 통해 불꽃이 튀며 전류가 계속 흐르는 현상이다.`,
            keyTerms: ['아크', 'Arc', '차단'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_077',
            title: '응하중 신호의 목적',
            content: `공기스프링의 압력을 검지하여 승객 수에 따른 최적의 동력과 제동력을 계산하기 위한 입력 값이다.`,
            keyTerms: ['응하중', '신호'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_078',
            title: '유지 계전기(Keep Relay)의 특징',
            content: `전원이 차단되어도 마지막 작동 상태를 물리적 혹은 전기적으로 유지하는 계전기로 PanR(C) 등이 해당한다.`,
            keyTerms: ['유지계전기', 'Keep Relay'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_079',
            title: '동력 핸들 0단 시의 상태',
            content: `11선이 무가압되어 TCU 지령이 끊기며, 직류 구간에서는 L2, L3이 즉시 개방된다.`,
            keyTerms: ['동력핸들', '0단', '개방'],
            relatedQuestions: []
        },
        {
            id: 'trac_ch3_080',
            title: 'GTO/IGBT 스택의 냉각',
            content: `전력 변환 시 발생하는 막대한 열을 식히기 위해 CIBM(송풍기)을 이용해 강제 냉각한다.`,
            keyTerms: ['GTO', 'IGBT', '냉각'],
            relatedQuestions: []
        }
    ]
};
