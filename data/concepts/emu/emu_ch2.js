/**
 * 전기동차 2장 - 특고압 회로 (High Voltage Circuit)
 * 
 * 80개 개념으로 완성된 특고압 회로의 모든 내용
 * - 저압 제어 시스템
 * - 팬터그래프 제어
 * - 주회로차단기(MCB) 동작
 * - 모진 보호 및 안전장치
 * - 교직 절환 원리
 */

const CHAPTER_EMU_CH2 = {
    id: 'emu_ch2',
    name: '특고압 회로',
    order: 2,
    sections: [
        {
            id: 'hv_ch2_001',
            title: '저압 전원에 의한 간접 제어 방식',
            content: '운전실에서 특고압·고압 기기를 직접 조작하지 않고, 축전지(DC 84V/92.5V) 전원을 제어원으로 사용하여 기기를 동작시키는 방식이다.',
            keyTerms: ['간접 제어', '축전지', 'DC 84V', 'DC 92.5V'],
            relatedQuestions: ['hv_q_001']
        },
        {
            id: 'hv_ch2_002',
            title: '103선(제어 회로선)의 역할',
            content: '전기동차 편성 내 모든 차량을 점퍼선으로 연결하며, 제어 전원 및 직류 부하 전원으로 사용되는 핵심 회로선이다.',
            keyTerms: ['103선', '제어 전원', '점퍼선'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_003',
            title: '특고압 회로의 범위',
            content: '팬터그래프(Pan)에서 주변환장치(C/I) 전까지의 회로를 말하며, 여기에 배치된 기기들을 특고압 장치라 한다.',
            keyTerms: ['특고압 회로', '팬터그래프', '주변환장치'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_004',
            title: '견인 회로 및 고압 보조 회로',
            content: 'C/I에서 견인전동기(TM)까지는 견인 회로, SIV 및 그 출력으로 구동되는 CM·송풍기·냉난방 회로는 고압 보조 회로로 분류한다.',
            keyTerms: ['견인 회로', '고압 보조 회로', 'SIV'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_005',
            title: '축전지 전압 규격 (Ni-Cd vs Li-Po)',
            content: '니켈-카드뮴(Ni-Cd)은 1.2V 70셀로 DC 84V, 리튬 폴리머(Li-Po)는 3.7V 25셀로 DC 92.5V를 사용한다.',
            keyTerms: ['Ni-Cd', 'Li-Po', 'DC 84V', 'DC 92.5V'],
            relatedQuestions: ['hv_q_016']
        },
        {
            id: 'hv_ch2_006',
            title: '아크(Arc)와 소호(消弧) 작용',
            content: '전류가 흐르는 상태에서 회로를 차단할 때 공기를 통해 빛과 열이 발생하는 현상이 아크이며, 이를 끄는 작용을 소호라고 한다.',
            keyTerms: ['아크', '소호', '접점'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_007',
            title: '용착(Welding)과 용단(Melting)',
            content: '아크의 열로 접점이 붙어버리는 것이 용착, 정격 이상의 대전류로 퓨즈가 끊어지는 것이 용단이다.',
            keyTerms: ['용착', '용단', '퓨즈'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_008',
            title: '지상 및 지하 가선 방식',
            content: '지상은 조가선에 전차선을 매단 커티너리(현수식) 방식, 지하는 애자와 T-Bar를 이용한 강체 가선 방식을 주로 사용한다.',
            keyTerms: ['커티너리', '강체 가선', '전차선'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_009',
            title: '회로 차단기(NFB)의 원리',
            content: 'No Fuse Breaker의 약자로, 내부에 과전류 검지 코일이 있어 용량 초과 시 자동으로 트립(Trip)되며 복귀는 수동으로 한다.',
            keyTerms: ['NFB', '과전류', '트립'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_010',
            title: '계전기(Relay)의 a접점과 b접점',
            content: '여자 시 닫히는 접점이 a접점(작동 접점), 무여자 시 닫혀 있다가 여자 시 열리는 접점이 b접점(복귀 접점)이다.',
            keyTerms: ['계전기', 'a접점', 'b접점'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_011',
            title: '전자밸브(Magnetic Valve)의 작용',
            content: '전자력을 이용해 제어 공기를 실린더에 공급하거나 배출하여 Pan, MCB 등의 기기를 물리적으로 동작시킨다.',
            keyTerms: ['전자밸브', '실린더', '압축공기'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_012',
            title: '103선 가압을 위한 스위치 접점',
            content: '제동 핸들을 투입하면 S2 접점은 103선 가압 회로를, S9 접점은 운전실 선택 회로를 연결한다.',
            keyTerms: ['S2 접점', 'S9 접점', '제동 핸들'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_013',
            title: 'HCR 및 TCR 계전기',
            content: '제동 핸들을 투입한 쪽은 HCR(전부차 계전기), 반대쪽은 TCR(후부차 계전기)이 여자되어 위치가 결정된다.',
            keyTerms: ['HCR', 'TCR', '운전실 선택'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_014',
            title: 'HCR 계전기의 직렬 연결 이유',
            content: 'HCR 1~4번 중 하나라도 고장(단선)나면 모든 제어가 불가능하도록 직렬로 구성하여 운전 안전성을 확보한다.',
            keyTerms: ['HCR', '직렬 연결', '안전성'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_015',
            title: '103선 가압 완료 확인 방법',
            content: '축전지 전압계가 DC 84V 또는 92.5V를 현시하는 것으로 확인할 수 있다.',
            keyTerms: ['전압계', '103선 가압'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_016',
            title: 'ACM(보조공기압축기)의 구동 목적',
            content: '기동 시 Pan 상승, MCB 투입, ADCg 절환 등에 필요한 5kg/cm²의 압축공기를 생성하기 위함이다.',
            keyTerms: ['ACM', '압축공기', '5kg/cm²'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_017',
            title: 'ACM 구동 시간 및 정격',
            content: '정상 구동 시간은 5~6분이며, 전동기의 과열 방지를 위한 정격 구동 시간은 10분이다.',
            keyTerms: ['ACM', '정격 시간', '과열 방지'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_018',
            title: 'ACMG(ACM 조압기)의 작동 수치',
            content: '공기 압력이 6.5kg/cm² 이하에서 구동을 시작하고, 7.5kg/cm² 이상에서 중지한다.',
            keyTerms: ['ACMG', '조압기', '6.5kg/cm²', '7.5kg/cm²'],
            relatedQuestions: ['hv_q_003']
        },
        {
            id: 'hv_ch2_019',
            title: 'MCB 투입과 ACM의 관계',
            content: 'MCB가 투입되면 MCBR2(b) 접점에 의해 ACM 구동 회로가 완전히 차단되어 더 이상 구동되지 않는다.',
            keyTerms: ['MCB', 'ACM', 'MCBR2'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_020',
            title: '팬터그래프 압상력 표준치',
            content: '전차선과 접촉을 유지하기 위한 밀어올리는 힘은 표준 6.0kgf이다.',
            keyTerms: ['팬터그래프', '압상력', '6.0kgf'],
            relatedQuestions: ['hv_q_001']
        },
        {
            id: 'hv_ch2_021',
            title: 'Pan의 조작 및 동작 방식',
            content: '조작은 전자 공기식이며, 동작은 공기에 의해 상승하고 스프링의 힘에 의해 하강하는 방식이다.',
            keyTerms: ['팬터그래프', '공기식', '스프링'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_022',
            title: '팬터그래프 주요 높이 제원',
            content: '접은 높이 280mm 이하, 표준 작용 높이 1,000mm, 최고 작용 높이 1,380mm 이하이다.',
            keyTerms: ['팬터그래프', '높이 제원', '1,000mm'],
            relatedQuestions: ['hv_q_001']
        },
        {
            id: 'hv_ch2_023',
            title: 'Pan 상승의 필수 조건',
            content: '103선 가압, 전부 운전실 선택, MCB 차단 상태, EGCS 정상 위치가 충족되어야 한다.',
            keyTerms: ['Pan 상승', '조건', 'MCB 차단'],
            relatedQuestions: ['hv_q_006']
        },
        {
            id: 'hv_ch2_024',
            title: 'PanR(C) 계전기의 성격',
            content: '한 번 여자되면 전원이 차단되어도 상태를 유지하는 유지 계전기(Keep Relay)이다.',
            keyTerms: ['유지 계전기', 'PanR', '자기 유지'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_025',
            title: 'Pan 상승 시간 수치',
            content: '실린더에 공기가 공급되어 완전히 상승하기까지 보통 10~14초가 소요된다.',
            keyTerms: ['Pan 상승', '10~14초'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_026',
            title: 'PanDS와 EPanDS의 차이',
            content: 'PanDS는 102선(축전지) 전원을, EPanDS는 103선(제어) 전원을 사용하여 Pan을 하강시킨다.',
            keyTerms: ['PanDS', 'EPanDS', '102선', '103선'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_027',
            title: '교류(AC) 구간 Pan 하강 조건',
            content: '아크 방지를 위해 반드시 MCB가 차단된 상태에서만 하강이 가능하다.',
            keyTerms: ['Pan 하강', 'MCB 차단', '아크 방지'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_028',
            title: '직류(DC) 구간 Pan 하강 특례',
            content: '직류 구간은 MCB 차단 여부와 관계없이 ACVR(b) 접점에 의해 즉시 하강이 가능하다.',
            keyTerms: ['DC 구간', 'Pan 하강', 'ACVR'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_029',
            title: 'Pan 하강 시간 수치',
            content: '공기 배출 및 하강 스프링 작용으로 보통 4~6초 이내에 하강이 완료된다.',
            keyTerms: ['Pan 하강', '4~6초'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_030',
            title: 'PT(계기용 변압기)의 기본 작용',
            content: '전차선 전압을 검지하여 AC 25kV를 AC 100V로 변환하거나, DC 1.5kV를 검지해 ACVR/DCVR을 여자시킨다.',
            keyTerms: ['PT', '계기용 변압기', 'AC 100V'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_031',
            title: 'ACVRTR의 시한 및 목적 (1.0초)',
            content: '교-교 절연구간 통과 시 순간적인 무가압 상태에서 MCB가 차단되는 것을 방지하기 위해 1초간 여자를 유지한다.',
            keyTerms: ['ACVRTR', '시한 계전기', '1.0초'],
            relatedQuestions: ['hv_q_002']
        },
        {
            id: 'hv_ch2_032',
            title: 'DCVRTR의 시한 및 목적 (0.5초)',
            content: '강체 구간에서 Pan의 일시적 이탈(뜀틀 현상) 시 MCB 차단을 방지하기 위해 0.5초간 여자를 유지한다.',
            keyTerms: ['DCVRTR', '0.5초', '뜀틀 현상'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_033',
            title: 'MCBTR의 시한 및 목적 (0.5초)',
            content: 'MCB 투입 시나 절연구간 통과 시 발생하는 돌입전류로 인한 ACOCR 오동작(차단)을 0.5초간 방지한다.',
            keyTerms: ['MCBTR', '0.5초', '돌입전류'],
            relatedQuestions: ['hv_q_004']
        },
        {
            id: 'hv_ch2_034',
            title: 'ADCg(교직 절환기)의 동작 압력',
            content: '5kg/cm²의 압축공기를 이용하며, 블레이드가 60도를 회전하여 AC 또는 DC 측 접촉부에 투입된다.',
            keyTerms: ['ADCg', '교직 절환기', '60도 회전'],
            relatedQuestions: ['hv_q_017']
        },
        {
            id: 'hv_ch2_035',
            title: 'ADCg 절환의 대전제',
            content: '접점 소손 방지를 위해 반드시 MCB가 차단된 조건에서만 절환되도록 인터록이 구성되어 있다.',
            keyTerms: ['ADCg', '인터록', 'MCB 차단'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_036',
            title: 'MCB(주차단기)의 정식 명칭과 특징',
            content: '진공차단기(VCB)라고도 하며, 진공 용기 내에서 전극을 개방하여 전류를 신속히 차단한다.',
            keyTerms: ['MCB', 'VCB', '진공차단기'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_037',
            title: 'MCB의 구간별 역할 차이',
            content: 'AC 구간에서는 개폐기 및 사고 차단기 역할을 수행하나, DC 구간에서는 단순 개폐기 역할만 한다.',
            keyTerms: ['MCB', 'AC 구간', 'DC 구간'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_038',
            title: 'MCB 조압 스위치(PanPS)의 기준',
            content: '공기 압력이 4.2~4.4kg/cm² 이하로 떨어지면 MCBR1 회로를 차단하여 MCB 투입을 방지한다.',
            keyTerms: ['MCB', 'PanPS', '4.2~4.4kg/cm²'],
            relatedQuestions: ['hv_q_011']
        },
        {
            id: 'hv_ch2_039',
            title: 'MCBHR(C) 코일의 성격',
            content: 'MCBCS에서 손을 떼어도 여자 상태를 유지하여 투입 회로를 잠금(Locking)하는 유지 계전기이다.',
            keyTerms: ['MCBHR', '유지 계전기', '잠금'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_040',
            title: 'CIN(주변환장치 제어차단기)의 역할',
            content: 'TCU에 제어 전원을 공급하며, CIN이 OFF되면 MCBOR 무여자로 해당 유닛의 MCB 투입이 불가능하다.',
            keyTerms: ['CIN', 'TCU', 'MCBOR'],
            relatedQuestions: ['hv_q_019']
        },
        {
            id: 'hv_ch2_041',
            title: 'MCBR2 계전기의 자기 유지 목적',
            content: 'MCB가 고장으로 차단된 후 원인이 사라졌을 때 자동으로 재투입되는 것을 방지하기 위함이다.',
            keyTerms: ['MCBR2', '자기 유지', '재투입 방지'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_042',
            title: 'MCB-C 코일의 무여자 시점',
            content: 'MCB 투입 완료 후 MCBR2가 여자되면 즉시 무여자되어 실린더 공기를 배출, 신속한 차단을 준비한다.',
            keyTerms: ['MCB-C', '무여자', '실린더'],
            relatedQuestions: ['hv_q_018']
        },
        {
            id: 'hv_ch2_043',
            title: 'MCB 정상 차단 동작 순서',
            content: 'MCBOS 취급 -> MCBHR(O) 여자 -> MCBR1 무여자 -> MCB-T(트립 코일) 여자 순으로 이루어진다.',
            keyTerms: ['MCB 차단', '동작 순서', 'MCBOS'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_044',
            title: 'MCBN1/NFB 차단 시의 문제',
            content: 'AC 구간에서 MCBN1이 차단되면 트립 코일 전원이 끊겨 MCB 차단이 불가능해진다.',
            keyTerms: ['MCBN1', 'NFB', '트립 코일'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_045',
            title: 'ACOCR(교류 과전류 계전기) 동작 수치',
            content: 'MT 1차 측에 120A 이상의 과전류가 흐르면 CT1이 이를 검지하여 MCB를 즉시 사고 차단한다.',
            keyTerms: ['ACOCR', '과전류 계전기', '120A'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_046',
            title: 'MCBOR 무여자 유발 3대 고장',
            content: 'MT 2차 측 과부하, 2차 측 접지, 주변환기(C/I) 소자 소손 시 무여자되어 MCB를 차단한다.',
            keyTerms: ['MCBOR', '3대 고장', '무여자'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_047',
            title: 'ArrOCR(피뢰기 과전류 계전기)의 역할',
            content: '교류 모진 등으로 피뢰기가 동작할 때 흐르는 방전 전류를 CT2가 검지하여 MCB를 차단시킨다.',
            keyTerms: ['ArrOCR', '피뢰기', '방전 전류'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_048',
            title: 'MT(주변압기)의 전압 변환 규격',
            content: '1차 측 AC 25,000V를 수전하여 2차 측에서 AC 840V로 전압을 낮춰 컨버터에 공급한다.',
            keyTerms: ['주변압기', '25,000V', '840V'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_049',
            title: 'MT 냉각 계통 구성 기기',
            content: '실리콘 오일을 순환시키는 MTOM(오일 펌프)과 오일을 식히는 MTBM(송풍기)으로 구성된다.',
            keyTerms: ['MTOM', 'MTBM', '냉각 계통'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_050',
            title: 'MT 보호 계전기 (유류/온도)',
            content: '유류 정지 시 MTOFR이, 오일 온도가 100℃ 도달 시 MTTHR(온도 계전기)이 동작한다.',
            keyTerms: ['MTOFR', 'MTTHR', '보호 계전기'],
            relatedQuestions: ['hv_q_012']
        },
        {
            id: 'hv_ch2_051',
            title: 'FL(필터 리액터)의 작용 (DC 구간)',
            content: 'DC 1,500V에 포함된 고조파(리플 전압)를 제거하여 인버터 동작을 안정화시킨다.',
            keyTerms: ['필터 리액터', '고조파', '리플 전압'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_052',
            title: 'AC 구간 컨버터 기동 순서',
            content: 'MCB 투입 -> L3, L2 투입 -> AK 투입 및 초기 충전 -> K 투입 -> AK 차단 순이다.',
            keyTerms: ['컨버터', '기동 순서', 'MCB 투입'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_053',
            title: 'DC 구간 SIV 전원 공급 경로',
            content: '전차선(DC 1,500V) -> Pan -> MCB -> ADCg -> L1을 거쳐 SIV에 공급된다.',
            keyTerms: ['SIV', 'DC 구간', '전원 공급'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_054',
            title: 'MTOM 정지 시 파급 효과 (60초)',
            content: '냉각 불능으로 60초 후 MTOFTR이 동작하여 MTAR을 여자시키고 MCB를 최종 차단한다.',
            keyTerms: ['MTOM', 'MTOFTR', '60초'],
            relatedQuestions: ['hv_q_012']
        },
        {
            id: 'hv_ch2_055',
            title: 'C/I·송풍기·SIV 고장의 공통 결과',
            content: 'AC 구간 M\'차의 위 기기 중 하나라도 고장 나면 최종적으로 해당 유닛의 MCB가 차단된다.',
            keyTerms: ['고장 보호', 'MCB 차단', '연쇄 동작'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_056',
            title: 'EGS(비상접지스위치)의 설치 목적',
            content: '비상시 Pan 회로를 직접 접지시켜 변전소 차단기를 트립함으로써 전차선을 강제 단전시킨다.',
            keyTerms: ['EGS', '비상접지', '강제 단전'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_057',
            title: 'EGS 사용 금지 구간',
            content: 'DC 구간은 대전류로 인한 궤도회로 손상 위험이 있어 EGS를 사용하지 않는다.',
            keyTerms: ['EGS', 'DC 구간', '궤도회로'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_058',
            title: 'EGS 용착 시 현상 및 조치',
            content: 'Pan 상승 순간 단전이 발생하며, 고장 차량은 완전 부동 취급 및 연장 급전을 실시해야 한다.',
            keyTerms: ['EGS 용착', '단전', '완전 부동'],
            relatedQuestions: ['hv_q_020']
        },
        {
            id: 'hv_ch2_059',
            title: 'ACArr(교류 피뢰기) 동작 현상',
            content: 'MCB 투입 순간 전차선 단전이 발생하며, 외관상 고장 표시등은 점등되지 않는다.',
            keyTerms: ['ACArr', '피뢰기', '단전'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_060',
            title: 'DCArr(직류 피뢰기) 동작 현상',
            content: '교류 모진 시 동작하며, ArrOCR 여자로 MCB 사고 차단 및 \'AC 1차 과전류\'가 현시된다.',
            keyTerms: ['DCArr', '모진', 'ArrOCR'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_061',
            title: 'MFs(주 퓨즈)의 위치와 소호 원리',
            content: 'ADCg와 MT 사이에 있으며, 용단 시 붕산이 수증기로 변하는 소호 작용을 이용한다.',
            keyTerms: ['MFs', '주 퓨즈', '붕산'],
            relatedQuestions: ['hv_q_007']
        },
        {
            id: 'hv_ch2_062',
            title: 'MFs 용단 식별 방법',
            content: '퓨즈 함 우측 끝의 적색 단추가 30mm 돌출되는 것으로 육안 확인이 가능하다.',
            keyTerms: ['MFs', '적색 단추', '30mm'],
            relatedQuestions: ['hv_q_007']
        },
        {
            id: 'hv_ch2_063',
            title: '축전지 방전 방지 회로 기준 (3분)',
            content: '유치 중 단전 시 3분 후 PDARTR(b) 접점에 의해 Pan을 하강시켜 축전지 방전을 막는다.',
            keyTerms: ['축전지 방전', '3분', 'PDARTR'],
            relatedQuestions: ['hv_q_008']
        },
        {
            id: 'hv_ch2_064',
            title: '운전실 교환 시 MCB 유지 로직',
            content: 'MCBHR(C)이 유지 계전기이므로 제동 핸들을 취거해도 도착 운전실의 MCB 투입 회로는 유지된다.',
            keyTerms: ['운전실 교환', 'MCBHR', 'MCB 유지'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_065',
            title: '운전실 교환 완료 지점',
            content: '신 운전실에서 전·후진 핸들을 전진(F) 위치로 두어 2선으로 구 운전실 회로를 차단할 때 완료된다.',
            keyTerms: ['운전실 교환', '전·후진 핸들'],
            relatedQuestions: ['hv_q_009']
        },
        {
            id: 'hv_ch2_066',
            title: '교직 절연구간 길이 수치',
            content: 'AC와 DC의 전압 차이를 절연하기 위해 설정된 구간의 길이는 66m이다.',
            keyTerms: ['절연구간', '66m', '교직 절환'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_067',
            title: '교직 절환 표지 순서',
            content: '예고 표지 -> 타행 표지 -> 절연구간 표지 -> 역행 표지 순으로 배치된다.',
            keyTerms: ['교직 절환', '표지', '순서'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_068',
            title: '직류 절환(AC->DC) 시 MCB 동작',
            content: 'ADS 전환 즉시 전체 MCB가 일제 차단되고, DC 구간 진입에 맞춰 순차 투입된다.',
            keyTerms: ['직류 절환', 'MCB', 'ADS'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_069',
            title: '교류 절환(DC->AC) 시 MCB 동작',
            content: 'ADS 전환 시 L1이 먼저 부하를 차단한 후 MCB가 일제 차단된다.',
            keyTerms: ['교류 절환', 'L1', 'MCB'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_070',
            title: '교류 모진(AC Incursion)의 정의',
            content: 'AC 25kV 전기가 직류 회로로 유입되는 것으로, DCArr 동작 및 전차선 단전이 발생한다.',
            keyTerms: ['모진', '교류 모진', 'DCArr'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_071',
            title: '직류 모진(DC Incursion)의 정의',
            content: 'DC 1.5kV 전기가 교류 회로(MT)로 유입되는 것으로, MFs가 용단되어 기기를 보호한다.',
            keyTerms: ['직류 모진', 'MFs', '보호'],
            relatedQuestions: ['hv_q_015']
        },
        {
            id: 'hv_ch2_072',
            title: '기계적 고착에 의한 모진 (AC->DC)',
            content: 'MCB가 차단되지 않은 채 DC 구간에 진입하면 직류 모진이 발생하여 MFs가 용단된다.',
            keyTerms: ['MCB 고착', '직류 모진', 'MFs 용단'],
            relatedQuestions: ['hv_q_005']
        },
        {
            id: 'hv_ch2_073',
            title: '절연 불량에 의한 모진 (AC->DC)',
            content: 'ADS 전환 즉시 MCB를 통과한 AC 전기가 DC 회로에 유입되어 즉시 교류 모진이 발생한다.',
            keyTerms: ['절연 불량', '교류 모진'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_074',
            title: '기계적 고착 시 속도 제한 (AC->DC)',
            content: 'MCB 차단 불능 시 EPanDS를 취급하고 40km/h 이하로 서행하여 Pan 하강 시간을 벌어야 한다.',
            keyTerms: ['MCB 고착', '서행', '40km/h'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_075',
            title: '절연구간 검지 주파수 수신',
            content: '지상자로부터 68kHz 주파수를 수신하면 DSSR 계전기가 여자되어 예고 방송을 시작한다.',
            keyTerms: ['68kHz', '지상자', 'DSSR'],
            relatedQuestions: ['hv_q_010']
        },
        {
            id: 'hv_ch2_076',
            title: '절연구간 예고 방송 지속 시간',
            content: '주파수 수신 후 운전자의 인지를 위해 50초간 방송과 버저가 작동한다.',
            keyTerms: ['예고 방송', '50초'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_077',
            title: 'ATC -> ATS 절환 조건',
            content: 'ATS 지상자 신호 수신, 제동 4단 이상(B4R) 또는 정차 후 비상제동 조건에서 가능하다.',
            keyTerms: ['ATC', 'ATS', '신호 절환'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_078',
            title: 'ATS -> ATC 절환 조건',
            content: 'ATC 신호를 수신하여 CNSR이 여자되면 방송이 나오고 정차 후 절환한다.',
            keyTerms: ['ATS', 'ATC', 'CNSR'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_079',
            title: 'AC Control Box 내장 계전기',
            content: 'ACVR, DCVR, MCBR, ArrOCR, ACOCR, MTAR 등 주요 전압·과전류 계전기가 내장되어 있다.',
            keyTerms: ['AC Control Box', '계전기'],
            relatedQuestions: []
        },
        {
            id: 'hv_ch2_080',
            title: '완전 부동 취급을 해야 하는 5대 사유',
            content: 'Pan 파손, 피뢰기 동작, MFs 용단, EGS 용착, MCB 차단/투입 불능 시 실시한다.',
            keyTerms: ['완전 부동', '5대 사유'],
            relatedQuestions: ['hv_q_013']
        }
    ]
};
