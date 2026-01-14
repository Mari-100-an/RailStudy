/**
 * 전기동차 일반 - 제1장 전기동차 기초 이론
 * 
 * 80개 개념으로 완성된 전기동차의 모든 기초 내용
 * - 철도 및 전기동차 정의
 * - 주요 기기 및 전력 변환
 * - 보호 및 제어 장치
 * - 운전실 기기 및 운전 취급
 */

const CHAPTER_EMU_CH1 = {
    id: 'emu_ch1',
    name: '전기동차 기초 이론',
    order: 1,
    sections: [
        {
            id: 'gen_ch1_001',
            title: '전기철도의 정의 및 구분',
            content: `## 전기철도
전기를 동력원으로 하는 차량이 운행하는 철도
- **교류(AC) 방식**: AC 25,000V
- **직류(DC) 방식**: DC 1,500V 또는 DC 750V`,
            keyTerms: ['전기철도', '교류', '직류'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_002',
            title: '전기동차의 3가지 종류',
            content: `## 동차 분류
| 종류 | 특징 |
|------|------|
| **교류 전기동차** | 교류 구간만 운행 |
| **직류 전기동차** | 직류 구간용 |
| **교직류 전기동차** | 두 구간 모두 운행 가능 |`,
            keyTerms: ['교직류'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_003',
            title: 'VVVF 제어 방식의 도입',
            content: `## VVVF 시대 개막
**1990년대 중반**부터 도입
- **기술**: 전압 + 주파수 동시 가변 제어
- **VVVF 인버터 전기동차** 운영 시작
- **장점**: 에너지 효율, 동작 부드러움`,
            keyTerms: ['VVVF'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_004',
            title: '철도(Railroad/Railway)의 법적 정의',
            content: `## 철도 정의
여객 또는 화물 운송에 필요한 다음 요소가 유기적으로 구성된 운송체계:
- 철도시설
- 철도차량
- 운영 지원체계`,
            keyTerms: ['철도'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_005',
            title: '선로와 궤도의 구성 차이',
            content: `## 구성 요소
| 요소 | 범위 |
|------|------|
| **선로(Line)** | 궤도 + 노반/구조물 (전체) |
| **궤도(Track)** | 레일 + 침목 + 도상 + 부속품 |`,
            keyTerms: ['선로', '궤도'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_006',
            title: '레일(Rail)의 3대 기능',
            content: `## 레일 기능
1. **하중 지지**: 차량 무게 직접 지탱
2. **주행 유도**: 차륜 주행 가이드 + 주행면 제공
3. **전기 경로**: 귀선 전류 + 신호 전류(궤도회로) 통로`,
            keyTerms: ['레일'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_007',
            title: '궤도회로의 목적',
            content: `## 궤도회로
레일을 전기회로의 일부로 사용하여:
- **목적**: 선로 위 열차/차량의 **위치 검지**
- **역할**: 신호 제어의 핵심 설비`,
            keyTerms: ['궤도회로'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_008',
            title: '세계 철도의 기원과 최초 개통',
            content: `## 철도 역사
- **16세기**: 독일 광산 지역에서 시작
- **1804년**: 리처드 트레비식 - 최초 증기기관차 제작
- **1825년**: 영국 - 세계 최초 철도 개통`,
            keyTerms: ['1825년', '영국'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_009',
            title: '한국 철도 및 지하철 주요 연혁',
            content: `## 한국 철도 개통
- **1974년 8월 15일** (최초)
- **서울 지하철 1호선** (서울역~청량리)
- **수도권 전철 구간** 동시 개통
- 현재 전국으로 확대`,
            keyTerms: ['1974년'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_010',
            title: '자기부상열차의 부상 및 추진 방식',
            content: `## 자기부상 열차
**부상 방식**:
- 반발식
- 흡인식

**추진 방식**:
- LIM (선형 유도전동기)
- LSM (선형 동기전동기)
- 모두 비점착식`,
            keyTerms: ['자기부상', 'LIM'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_011',
            title: '표준궤간의 수치와 측정 기준',
            content: `## 궤간 측정
- **표준 수치**: **1,435mm** (세계 표준)
- **측정 기준**: 레일 윗면으로부터 **14mm 아래** 지점
- **측정 대상**: 양쪽 레일 안쪽 면의 **가장 짧은 거리**`,
            keyTerms: ['궤간', '1435mm'],
            relatedQuestions: ['gen_q_001']
        },
        {
            id: 'gen_ch1_012',
            title: '폐색(Blocking)과 폐색장치의 정의',
            content: `## 폐색 시스템
**폐색**: 선로를 일정 구간으로 나누어 **1구간에 2대 이상 열차 진입 금지**
- **목적**: 열차 안전성 확보
- **폐색장치**: 이를 제어하는 전기 기기`,
            keyTerms: ['폐색'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_013',
            title: '진로(Route)와 진로표시기',
            content: `## 진로 표시
**진로**: 열차가 운전해 나가는 **통로**
- **진로표시기**: 신호기에 부착
- **기능**: 기관사에게 진입/진출 선로 표시`,
            keyTerms: ['진로'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_014',
            title: '열차 최고속도 결정 원칙',
            content: `## 속도 제한 원칙
**차량 최고속도** vs **선로 최고속도**
→ **낮은 쪽이 운행 최고속도**

예: 차량 150km/h, 선로 130km/h → 운행 속도 130km/h`,
            keyTerms: ['속도제한'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_015',
            title: '열차자동정지장치(ATS)의 동작 로직',
            content: `## ATS 동작
1. 신호기 현시속도 **초과** → **3초 경보**
2. 3초 내에 **4단계 이상 감속** 조치 필요
3. 미실시 시 → **열차 자동 정지**`,
            keyTerms: ['ATS'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_016',
            title: '열차자동제어장치(ATC)의 동작 로직',
            content: `## ATC 동작
- 차내 신호기(ADU): **지시 속도 표시**
- 속도 초과 시: **자동 감속**
- 3초 내 **감속도 2.4km/h/s 미달** → **비상제동** 체결`,
            keyTerms: ['ATC'],
            relatedQuestions: ['gen_q_002']
        },
        {
            id: 'gen_ch1_017',
            title: '열차자동방호장치(ATP)의 특징',
            content: `## ATP 특성
- 지상장치로부터 **위치 정보** 수신
- 차상 신호현시창에 **실시간 표시**
- 열차 속도 **자동 감시**
- 자동 감속 및 제어 수행`,
            keyTerms: ['ATP'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_018',
            title: '차륜과 동륜의 구분',
            content: `## 차륜 분류
| 종류 | 기능 |
|------|------|
| **차륜(Wheel)** | 주행 + 하중 전달 |
| **동륜(Driving Wheel)** | 견인력 **직접 발생** |`,
            keyTerms: ['차륜', '동륜'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_019',
            title: '대차(Bogie)의 구성 요소',
            content: `## 대차 구성
- 차축
- 차륜
- 축상
- 지지장치
- 기초제동장치
- **견인전동기** ← 핵심 구동 요소
- 대차 프레임`,
            keyTerms: ['대차'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_020',
            title: '차축과 차륜의 결합 비',
            content: `## 결합 비율
1개 차축 = 2개 차륜 **결합** (회전함)`,
            keyTerms: ['차축'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_021',
            title: '답면제동과 디스크제동의 차이',
            content: `## 제동 방식
| 종류 | 방식 |
|------|------|
| **답면제동** | 제륜자로 **차륜 주행면** 직접 압착 |
| **디스크제동** | 차축의 **별도 원판** 압착 |`,
            keyTerms: ['제동'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_022',
            title: '전차선의 구분 (코레일 vs 도시철도)',
            content: `## 전차선 전압
| 운영사 | 전압 |
|--------|------|
| 한국철도공사(코레일) | **AC 25,000V** |
| 도시철도 | **DC 1,500V** 또는 **DC 750V** |`,
            keyTerms: ['전차선'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_023',
            title: '집전장치의 종류',
            content: `## 집전 방식
| 종류 | 사용 처 |
|------|--------|
| **팬터그래프** | 가공 전차선과 접촉 |
| **집전슈(Shoe)** | 제3궤조(전용 궤도) |`,
            keyTerms: ['집전장치'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_024',
            title: '변전소와 변압기의 역할',
            content: `## 전력 처리
| 기기 | 역할 |
|------|------|
| **변전소** | 전압 강압 / AC→DC 변환 |
| **변압기** | 전자유도 이용 / AC 전압 조정 |`,
            keyTerms: ['변전소'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_025',
            title: '정류기(Rectifier)의 역할',
            content: `## 정류기
**AC(교류) → DC(직류) 변환** 장치
- 교류를 직류로 변환
- 도시철도 직류 구간 필수`,
            keyTerms: ['정류기'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_026',
            title: '전력변환 반도체 소자의 발전 단계',
            content: `## 반도체 소자 진화
1. **싸이리스터(Thyristor)**
2. **GTO** (중간 단계)
3. **IGBT** (현재 주류) ✓`,
            keyTerms: ['IGBT'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_027',
            title: '주변환장치(C/I) 내 컨버터와 인버터의 기능',
            content: `## 전력 변환
| 기기 | 입력 | 출력 |
|------|------|------|
| **컨버터(교직컨)** | AC(교류) | DC(직류) |
| **인버터(직교인)** | DC(직류) | 3상 AC(교류) |

→ 견인전동기 구동 전원 공급`,
            keyTerms: ['컨버터', '인버터'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_028',
            title: '단락(Short Circuit)의 정의',
            content: `## 단락 현상
회로 전선 간 **절연 손상** → 낮은 저항 접촉
- **결과**: **막대한 과전류** 유입
- **위험**: 화재 및 기기 손상`,
            keyTerms: ['단락'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_029',
            title: '서지(Surge)의 특성',
            content: `## 서지 특성
전기 회로에서:
- 전압/전류가 **짧은 시간 급속 증가**
- **서서히 감소**
- **기기 손상 방지**: 차단 작용 필요`,
            keyTerms: ['서지'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_030',
            title: '보조전원장치(SIV)의 역할 및 출력',
            content: `## SIV 기능
| 출력 | 용도 |
|------|------|
| **AC 3상 440V** | 냉난방, CM(공기압축기) |
| **DC 100V** | 축전지 충전, 제어 전원 |`,
            keyTerms: ['SIV'],
            relatedQuestions: ['gen_q_003']
        },
        {
            id: 'gen_ch1_031',
            title: '보조전원장치(SIV) 설치 차량 번호',
            content: `## SIV 위치
**10칸 편성 기준**:
- **TC차** (0호차)
- **T1차** (5호차, 9호차)
→ 총 3개 차량에만 설치`,
            keyTerms: ['SIV설치'],
            relatedQuestions: ['gen_q_004']
        },
        {
            id: 'gen_ch1_032',
            title: '축전지(Battery)의 기동 전후 전압',
            content: `## 축전지 전압
| 상태 | 전압 |
|------|------|
| **기동 전** | DC 84V(Ni-Cd) 또는 92.5V(Li-Po) |
| **기동 후** | DC 100V (SIV 출력) |`,
            keyTerms: ['축전지'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_033',
            title: '공기압축기(CM)의 작동 압력 및 전원',
            content: `## CM 사양
- **압축 압력**: **8~9kg/cm²**
- **전원**: **SIV AC 3상 440V** 공급`,
            keyTerms: ['CM'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_034',
            title: '주변환장치(C/I)의 설치 위치',
            content: `## C/I 위치
**동력차** (M, M'차):
- 1, 2, 4, 7, 8호차 **하부**에 설치`,
            keyTerms: ['C/I'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_035',
            title: '팬터그래프(Pan) 제어 스위치',
            content: `## Pan 제어
| 스위치 | 기능 |
|--------|------|
| **PanUS** | 상승 |
| **PanDS** | 하강 |
| **EPanDS** | 비상 하강 |

→ 운전실에서 제어`,
            keyTerms: ['팬터그래프'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_036',
            title: '비상접지스위치(EGS)의 역할',
            content: `## EGS 기능
**팬터그래프 집전 전원 강제 접지**
→ **변전소 차단기 트립(단전)**
- 비상 상황 대응`,
            keyTerms: ['EGS'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_037',
            title: '계기용변압기(PT)의 전압 검지 범위',
            content: `## PT 검지
| 구간 | 입력 전압 | 검지 전압 |
|------|----------|---------|
| **교류** | AC 25,000V | 100V (강압) |
| **직류** | DC 1,500V | DC 1,500V (그대로) |`,
            keyTerms: ['PT'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_038',
            title: '교류피뢰기(ACArr)의 역할 및 위치',
            content: `## 피뢰기
- **역할**: 외부 서지 유입 시 **방전 접지**
- **기능**: 기기 보호
- **설치**: M'차 옥상`,
            keyTerms: ['피뢰기'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_039',
            title: '주차단기(MCB)의 구간별 역할',
            content: `## MCB 역할
| 구간 | 기능 |
|------|------|
| **교류** | 사고 차단기 (보호 기능) |
| **직류** | 단순 개폐기 (개폐만 수행) |`,
            keyTerms: ['MCB'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_040',
            title: '주차단기(MCB) 사고 차단 조건 3가지',
            content: `## MCB 차단 조건
1. **ACOCR** 여자: 교류 1차 과전류 (120A)
2. **ArrOCR** 여자: 피뢰기 동작
3. **MCBOR** 작동: 2차 접지/과부하/GTO 단락`,
            keyTerms: ['MCB차단'],
            relatedQuestions: ['gen_q_005']
        },
        {
            id: 'gen_ch1_041',
            title: '교직절환기(ADCg)의 동작 전제 조건',
            content: `## 절환 조건
**필수**: MCB가 **차단된 상태**에서만
→ ADS(교직절환스위치) 취급으로 절환 가능`,
            keyTerms: ['절환'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_042',
            title: '주퓨즈(MFs)의 목적 및 단추 돌출 수치',
            content: `## 주퓨즈
- **목적**: 직류 모진 시 **MT(주변압기) 보호**
- **용단 시**: **적색 단추 30mm 돌출**`,
            keyTerms: ['퓨즈'],
            relatedQuestions: ['gen_q_006']
        },
        {
            id: 'gen_ch1_043',
            title: '보조공기압축기(ACM)의 기능 및 압력',
            content: `## ACM 역할
기동 전 축전지 전원 이용:
- **압축 압력**: **5kg/cm²**
- **기능**: Pan 상승 + MCB 투입 가능`,
            keyTerms: ['ACM'],
            relatedQuestions: ['gen_q_007']
        },
        {
            id: 'gen_ch1_044',
            title: '주변압기(MT)의 전압 변환 수치',
            content: `## MT 기능
AC 25,000V (수전)
→ **AC 840V (강압)**
→ 컨버터에 공급`,
            keyTerms: ['MT'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_045',
            title: '연장급전접촉기(ESK)의 역할',
            content: `## ESK 기능
**SIV 고장 시**:
- 인접 유닛 SIV로부터 **전원 공급** 수신
- **T차 하부**에 설치`,
            keyTerms: ['ESK'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_046',
            title: '푸시버튼 스위치와 버튼 스위치의 차이',
            content: `## 스위치 유형
| 종류 | 특징 |
|------|------|
| **푸시버튼** | 손 떼면 차단 (복귀) |
| **버튼 스위치** | 누름 상태 유지 / 시계방향 돌려서 복귀 |`,
            keyTerms: ['스위치'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_047',
            title: '주간제어기(MC) 핸들의 구성',
            content: `## MC 핸들 구성
| 종류 | 위치 |
|------|------|
| **전후진 핸들** | 4개 위치 (F/R/N/OFF) |
| **동력 핸들** | 5개 위치 (OFF/1~4단) |`,
            keyTerms: ['MC'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_048',
            title: '기관사 안전장치(DSD) 동작 로직',
            content: `## DSD 안전 기능
핸들 누름 상태 **해제** → **5초 경보 방송** → **비상제동 자동 체결**`,
            keyTerms: ['DSD'],
            relatedQuestions: ['gen_q_008']
        },
        {
            id: 'gen_ch1_049',
            title: '제동핸들(BC)의 10개 위치',
            content: `## BC 위치
1. **완해** (풀림)
2. **상용제동** 1~7단
3. **비상**
4. **취거** (제거)

→ **최초 기동 시 시동 키** 역할`,
            keyTerms: ['BC'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_050',
            title: '주차단기 제어 스위치(MCBCS/MCBOS)의 운전실 취급 제한',
            content: `## 제어 제한
- **MCBCS**: 전부 **운전실에서만** 취급
- **MCBOS**: **MCBCS를 취급한 운전실에서만** 제어 가능`,
            keyTerms: ['MCBCS'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_051',
            title: '교직절환 제어 스위치(ATCCgS) 수동 취급 시점',
            content: `## 절환 타이밍
**ATS/ATC 구간 진입 전**에 기관사가:
- **수동으로 직접 취급** 필요`,
            keyTerms: ['절환스위치'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_052',
            title: '비상제동스위치(EBS) 설치 수량',
            content: `## EBS 배치
- **전 운전실**: 2개
- **후 운전실**: 2개
→ **총 4개** 설치`,
            keyTerms: ['EBS'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_053',
            title: '출입문 개폐 스위치(DOS)와 ZVR',
            content: `## 속도 제한
**ZVR(Zero Velocity Relay)**:
- **5km/h 이상** 주행 시 → DOS 취급 불가
- **예외**: LSBS 취급 시 → 속도 무관 개방 가능`,
            keyTerms: ['DOS'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_054',
            title: '보조공기압축기 제어 스위치(ACMCS) 취급 시 점등 색상 및 수치',
            content: `## ACMCS 동작
- **점등 색상**: **녹색등**
- **압력 유지**: **6.5~7.5kg/cm²** (ACMG 조압기)`,
            keyTerms: ['ACMCS'],
            relatedQuestions: ['gen_q_004']
        },
        {
            id: 'gen_ch1_055',
            title: '강제완해스위치(CpRS)의 동작 원리',
            content: `## 강제 완해
제동 불완해 시 CpRS 누름:
- **CRV 전자밸브** 여자
- **절환밸브** 통해 강제 배기`,
            keyTerms: ['강제완해'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_056',
            title: '고장차량차단스위치(VCOS) 사용 상황',
            content: `## VCOS 사용 시기
다음 동작 시 RS 취급으로 복귀 불능:
- **MTAR** (유닛 차단)
- **BMFR** (제동 장애)
- **CIFR** (C/I 고장)
→ VCOS로 차단`,
            keyTerms: ['VCOS'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_057',
            title: 'TEST 스위치 취급 시 점등 표시등 및 로직',
            content: `## TEST 취급
- **점등**: **SqLP(백색등)**
- **결과**: SqR2 여자로 인해 **MCB 투입 불가**`,
            keyTerms: ['TEST'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_058',
            title: '주차제동스위치의 특징',
            content: `## 주차 제동
**압축공기 없을 시**:
- **스프링 힘**에 의해 자동 제동 체결
- 안전 기능`,
            keyTerms: ['주차제동'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_059',
            title: '교류전원 표시등(ACV등)과 직류전원 표시등(DCV등)의 점등 조건',
            content: `## 전원 표시등
Pan 상승 후:
- PT가 전원 검지
- ACVR 또는 DCVR 여자
- **ACV등** 또는 **DCV등** 점등`,
            keyTerms: ['ACV'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_060',
            title: 'Power등의 점등 시기',
            content: `## Power등 점등
**다음 상황에서만** 점등:
- 동력 운전 (역행)
- 회생제동 취급`,
            keyTerms: ['Power등'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_061',
            title: '후부 TC차 주차방지핀(PLPN) 차단 시 소등되는 표시등',
            content: `## PLPN 차단 영향
다음 3가지 표시등이 **점등 불능** 상태:
1. **Power등**
2. **MCB ON등**
3. **MCB OFF등**`,
            keyTerms: ['PLPN'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_062',
            title: 'Fault등(적색) 점등 유발 주요 계전기',
            content: `## Fault등 점등 조건
다음 계전기 여자 시 점등:
- **EOCR** (과전류)
- **SIVFR** (SIV 고장)
- **CIFR** (C/I 고장)
- **L1FR** (선로 고장)
- **ACOCR** (교류 과전류)
- **ArrOCR** (피뢰기)
- **MTAR** (유닛 차단)`,
            keyTerms: ['Fault'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_063',
            title: 'UCO등과 VCO등의 차이',
            content: `## 차단 표시
| 표시등 | 원인 |
|--------|------|
| **UCO등** | 유닛 차단 (MTAR 여자) |
| **VCO등** | 개별 차량 차단 (CIFR, BMFR) → VCOS 취급 |`,
            keyTerms: ['UCO'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_064',
            title: '보조전원장치(SIV) 표시등 점등 기준',
            content: `## SIV등 점등
열차 편성 중 **단 1대의 SIV만 기동**되어도 점등`,
            keyTerms: ['SIV등'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_065',
            title: '출입문 표시등(DOOR등) 점등 및 소등 기준 수치',
            content: `## DOOR등 점등 조건
| 상태 | 기준 | 표시 |
|------|------|------|
| **점등** | 7.5mm 이하로 **모두 닫힘** | 백색 점등 |
| **소등** | 12.5mm 이상 **열린 문** 1개 이상 | 소등 |`,
            keyTerms: ['DOOR등'],
            relatedQuestions: ['gen_q_009']
        },
        {
            id: 'gen_ch1_066',
            title: '밀착연결기와 10칸 편성 보조전원장치(SIV) 조합',
            content: `## SIV 배치
- **특징**: 공기압까지 연결 가능 (밀착연결)
- **SIV 조합**: 0-2, 4-5, 8-9호차
→ 각 조합당 1개씩 설치`,
            keyTerms: ['연결기'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_067',
            title: '동력분산식과 총괄제어의 정의',
            content: `## 운영 방식
**동력분산식**:
- 동력차가 편성 내 **분산** 배치
- **총괄제어**: 운전실에서 **일괄 제어**`,
            keyTerms: ['분산식'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_068',
            title: '교류와 직류의 전류 특성 비교',
            content: `## 전류 특성
| 방식 | 전류 크기 | 사고 판별 |
|------|---------|---------|
| **교류** | 낮음 | 구분 **용이** |
| **직류** | 높음 | 구분 **어려움** |`,
            keyTerms: ['전류특성'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_069',
            title: '절연구간의 종류 및 길이',
            content: `## 절연 구간
| 종류 | 길이 | 사유 |
|------|------|------|
| **교-교** | **22m** | 위상 차 |
| **교-직** | **66m** | 전기 방식 차 |`,
            keyTerms: ['절연구간'],
            relatedQuestions: ['gen_q_010']
        },
        {
            id: 'gen_ch1_070',
            title: '최초 기동 전 운전실 상태',
            content: `## 기동 전 상태
- 모든 표시등 **소등**
- 압축공기 **없음** (Pan/MCB 불능)
- 주차 제동 + 비상제동 **체결**`,
            keyTerms: ['기동전'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_071',
            title: '제동핸들 삽입 시 일어나는 첫 변화',
            content: `## 제동핸들 삽입
1. 축전지 전원 → 103선 공급
2. **MCB OFF등(적색)** 점등
3. **DOOR등(백색)** 점등`,
            keyTerms: ['삽입'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_072',
            title: 'Pan 상승 및 MCB 투입 순서',
            content: `## 기동 절차
1. **PanUS** 취급 (Pan 상승)
2. **AC/DC등** 점등 확인
3. **ADS** 위치 확인 (교/직 구간 확인)
4. **MCBCS** 취급 (MCB 투입)`,
            keyTerms: ['기동절차'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_073',
            title: '보조전원장치(SIV)의 자동 기동 조건',
            content: `## SIV 자동 기동
**MCB 투입** → **SIV 자동 기동**
→ 서비스 전원 공급 시작`,
            keyTerms: ['자동기동'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_074',
            title: '제동 완해 조건 (주공기 압력)',
            content: `## 완해 조건
**CM 구동** → **주공기(MR) 압력 7kg/cm² 이상**
→ **주차 + 비상제동 완해**`,
            keyTerms: ['완해'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_075',
            title: '교류 구간 역행 전원 경로',
            content: `## 동력 경로 (교류)
**전차선** 
→ **주변압기(MT, AC 840V)**
→ **컨버터(DC 1,800V)**
→ **인버터**
→ **견인전동기** ✓`,
            keyTerms: ['경로'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_076',
            title: '유닛(Unit)의 구성',
            content: `## Unit 편성
**동력차 + 부수차 = 1 Unit**
- **동력차**: M, M'
- **부수차**: T`,
            keyTerms: ['유닛'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_077',
            title: '구동차와 부수차의 제동 차이',
            content: `## 제동 방식 차이
| 차종 | 제동 방식 |
|------|---------|
| **구동차(M, M')** | 전기제동 + 공기제동 |
| **부수차(T)** | 공기제동만 |`,
            keyTerms: ['제동차이'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_078',
            title: '회생제동과 발전제동의 정의',
            content: `## 제동 분류
| 종류 | 정의 |
|------|------|
| **회생제동** | 전차선으로 **전원 반환** |
| **발전제동** | 저항기에서 **열로 소비** |`,
            keyTerms: ['회생제동'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_079',
            title: '운행 종료 시 기기 취급 순서',
            content: `## 정지 절차
1. **MCBOS** 취급 (MCB 차단)
2. **PanDS** 취급 (Pan 하강)
3. 전후진 **OFF**
4. 키 **취거**
5. 제동핸들 **취거**`,
            keyTerms: ['정지'],
            relatedQuestions: []
        },
        {
            id: 'gen_ch1_080',
            title: '최종 전동방지 조치',
            content: `## 전동 방지
**주차제동 스위치**를 주차 위치로 설정
→ **전동(굴러감) 방지** 완료
→ 안전하게 정차 완료`,
            keyTerms: ['전동방지'],
            relatedQuestions: []
        }
    ]
};
