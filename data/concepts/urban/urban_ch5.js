/**
 * 도시철도 시스템 일반 - 제5장 차량 일반
 * 
 * 학습 목표:
 * - 전기동차의 구성 및 동력 분산식 특징 이해
 * - 제어 방식(저항/초퍼/VVVF)의 변천사 숙지
 * - 차량 상세 제원 및 주요 기기(MCB, C/I 등) 역할 이해
 * - 검사 주기 및 유지보수 체계 파악
 */

const CHAPTER_URBAN_CH5 = {
    id: 'urban_ch5',
    name: '차량 일반',
    order: 5,
    sections: [
        {
            id: 'metro_ch5_001',
            title: '전기동차(EMU)의 정의와 구성',
            content: `## 전기동차 (Electric Multiple Unit)

전기를 동력원으로 하며, 동력차(M)와 부수차(T), 제어차(Tc)로 구성된 **동력 분산 방식** 차량

### 차량 구성 기호
- **Mc**: 운전실 + 동력
- **M**: 동력차 (운전실 없음)
- **Tc**: 운전실 + 무동력 (제어차)
- **T**: 무동력 (부수차)`,
            keyTerms: ['EMU', '동력분산식', 'MC', 'TC'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_002',
            title: '동력 분산 방식의 장점',
            content: `## 동력 집중식 vs 분산식

### 동력 분산식 3대 장점
1. **객실 공간 확보 용이**: 기기가 바닥 하부에 배치됨
2. **차량 경량화**: 중량이 차축별로 분산됨 (선로 부담 감소)
3. **운행 신뢰성**: 일부 동력차 고장 시에도 나머지로 자력 운행 가능

### 기타 장점
- 가감속 성능 우수 (고밀도 운전 적합)
- 회생제동 효율 높음`,
            keyTerms: ['동력분산식', '경량화', '자력운행'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_003',
            title: '전기동차의 운행상 특징',
            content: `## 도시철도 최적화

- **일괄 제어**: 운전실에서 전체 차량 제어 가능
- **고가감속**: 점착 중량이 커서 급가속/급제동 유리
- **표정속도 유지**: 역 간 거리가 짧아도 고성능으로 시간 단축`,
            keyTerms: ['일괄제어', '고가감속', '점착성능'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_004',
            title: '간선형 및 준고속형 전기동차',
            content: `## 종류 구분

| 구분 | 속도 | 대표 차량 | 비고 |
|------|------|----------|------|
| **간선형** | 150km/h 이하 | 누리로 (TEC) | 저상/고상 겸용 |
| **준고속형** | ~180km/h | ITX-청춘 | 2층 객차 포함 |`,
            keyTerms: ['간선형', '준고속형', '누리로', 'ITX청춘'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_005',
            title: '전력 공급 방식 분류',
            content: `## 전압별 구분

- **직류 전용**: DC 1,500V (서울 2~9호선 등)
- **교류 전용**: AC 25kV (분당선, 중앙선 등)
- **교직 겸용**: 1호선, 4호선 (서울교통공사-코레일 직결 운행 구간)`,
            keyTerms: ['DC1500V', 'AC25kV', '교직겸용'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_006',
            title: '속도 제어 방식의 변천',
            content: `## 기술 발전사

1. **저항 제어**: 저항기를 이용해 전압 강하 (열 손실 큼)
2. **초퍼 제어**: 반도체(싸이리스터) 스위칭, 회생제동 가능
3. **VVVF 제어**: 전압/주파수 가변, 유도전동기 사용 (효율 최상)`,
            keyTerms: ['저항제어', '초퍼제어', 'VVVF'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_007',
            title: '직류 직권전동기의 특성',
            content: `## 직류 직권전동기

- **특징**: 기동 토크가 큼 (철도 차량에 적합)
- **단점**: 브러시(Brush) 마모로 유지보수 소요
- **속도 특성**: 회전수는 단자전압에 비례, 자속(전류)에 반비례`,
            keyTerms: ['직권전동기', '기동토크', '브러시'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_008',
            title: '저항제어의 3대 기법',
            content: `## 저항차 속도 제어

1. **저항 제어**: 저항값 순차 제거 (가속)
2. **직병렬 제어**: 모터 연결 변경 (직렬→직병렬→병렬)
3. **약계자 제어**: 계자 전류를 줄여 고속 회전 유도`,
            keyTerms: ['저항제어', '직병렬제어', '약계자'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_009',
            title: '초퍼(Chopper) 제어와 회생제동',
            content: `## 초퍼 제어

- **원리**: DC 전원을 고속 스위칭(ON/OFF)하여 평균 전압 제어
- **회생제동**: 제동 시 모터를 발전기로 작동, 발생 전압을 가선 전압보다 높게 하여 반환
- **단점**: 유도 장애 발생 가능성`,
            keyTerms: ['초퍼', '스위칭', '유도장애'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_010',
            title: '3상 농형 유도전동기와 VVVF',
            content: `## VVVF + 유도전동기

- **유도전동기 장점**: 브러시 없음(유지보수 불필요), 소형 경량, 내구성 우수
- **VVVF**: Variable Voltage Variable Frequency (가변전압 가변주파수)
- 제어 소자: GTO → **IGBT** (현재 주력) → SiC`,
            keyTerms: ['유도전동기', '브러시리스', 'IGBT'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_011',
            title: '중량(重) 전철 제원',
            content: `## 대형 전동차

- **길이**: 19.5m 이상
- **폭**: 3.12m 이상
- **정원**: 160명/량 (혼잡도 240명)
- 예: 서울 1~4호선, 분당선 등 코레일 광역철도`,
            keyTerms: ['중량전철', '19.5m', '3.12m'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_012',
            title: '중량(中) 전철 제원',
            content: `## 중형 전동차

- **길이**: 17.5 ~ 19.5m
- **폭**: 2.75m 내외
- **정원**: 130명/량
- 예: 서울 5~8호선, 부산 1~3호선, 대구, 대전, 광주`,
            keyTerms: ['중형전철', '5~8호선', '지방도시철도'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_013',
            title: '경량(輕) 전철 법적 기준',
            content: `## 경전철 (LRT)

- **축중 기준**: 최대 설계 축중 **13.5톤 이하** (분포하중 2.8t/m)
- 종류: 모노레일, 트램, AGT, LIM 등
- 건설비: 지하철의 50% 수준`,
            keyTerms: ['경전철', '축중13.5톤'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_014',
            title: '차량 종류별 연속 정격 출력',
            content: `## 1편성(10량) 기준 예시

| 차종 | 출력 (1 Unit 기준 아님) | 비고 |
|------|------------------------|------|
| 저항차 | 120kW x 모터 수 | 상대적 낮음 |
| 초퍼차 | 160kW 급 | - |
| **VVVF** | **200kW** 이상 | **고출력** |

> VVVF 인버터차 연속 정격: **1,600kW** (4M 기준)`,
            keyTerms: ['연속정격', '1600kW'],
            relatedQuestions: ['metro_5_101']
        },
        {
            id: 'metro_ch5_015',
            title: '가속도 및 감속도 수치 (일반형)',
            content: `## 성능 표준 (VVVF 기준)

- **가속도**: 3.0km/h/s (3.3까지 가능)
- **상용 감속도**: 3.5km/h/s
- **비상 감속도**: **4.5km/h/s**`,
            keyTerms: ['3.0', '3.5', '4.5'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_016',
            title: '치차비(Gear Ratio) 비교',
            content: `## 제어 방식별 치차비

| 차종 | 치차비 | 소기어:대기어 |
|------|--------|--------------|
| 저항 | 1 : 5.80 | 15 : 87 |
| 초퍼 | 1 : 6.53 | 15 : 98 |
| **VVVF** | **1 : 7.07** | **14 : 99** |

> 고속 회전 모터 사용으로 치차비가 큼`,
            keyTerms: ['치차비', '7.07', '14:99'],
            relatedQuestions: ['metro_5_101']
        },
        {
            id: 'metro_ch5_017',
            title: '대차 형식의 진화',
            content: `## 대차 종류

1. 스윙 볼스터 (초기)
2. 에어 스프링 대차
3. **볼스터리스(Bolsterless)** 대차
   - 부품 수 감소, 경량화, 정비성 향상
   - 현재 표준 사용`,
            keyTerms: ['볼스터리스', '대차', '경량화'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_018',
            title: '간선형/준고속형 제원',
            content: `## 스펙 비교

| 구분 | 누리로 | ITX-청춘 |
|------|--------|----------|
| 최고속도 | 150km/h | **180km/h** |
| 모터출력 | 250kW | 250kW |
| 가속도 | 2.5km/h/s | 2.0km/h/s (고속형) |`,
            keyTerms: ['누리로', 'ITX청춘', '180km/h'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_019',
            title: 'ITX-청춘의 치차비',
            content: `## 고속 주행용 치차비

- **1 : 4.136** (22 : 91)
- 일반 전동차(1:7.07)보다 훨씬 낮음 → 고속 유리`,
            keyTerms: ['ITX치차비', '4.136', '고속주행'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_020',
            title: '경전철 궤간(Gauge)의 다양성',
            content: `## 궤간 비교

| 노선 | 방식 | 궤간 |
|------|------|------|
| 대구 3호선 | 모노레일 | 850mm (빔 폭) |
| 용인/김해 | LIM/철제 | 1,435mm (표준) |
| 부산 4호선 | 고무차륜 | 1,700mm |
| **인천공항** | **자기부상** | **1,850mm** (최대) |`,
            keyTerms: ['1850mm', '자기부상', '궤간'],
            relatedQuestions: ['metro_5_104']
        },
        {
            id: 'metro_ch5_021',
            title: '차량 위치 호칭법',
            content: `## 방향 기준

- **앞쪽**: 운전실(0호차) 방향
- **좌/우**: 운전실에서 객실을 바라봤을 때가 아님. **진행 방향(앞)을 향해 섰을 때** 기준
- 좌측 번호: **홀수**? 짝수? (통상 좌측 1,3 / 우측 2,4 - *차륜 번호 등 확인 필요*)

> **주의**: 표준 규격상 **앞쪽을 향해 좌측이 1쪽(홀수), 우측이 2쪽(짝수)** 원칙 사용 (차륜 번호 등)`,
            keyTerms: ['위치호칭', '좌측홀수', '우측짝수'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_022',
            title: '기기별 상세번호 부여',
            content: `## 번호 부여 원칙

- **차륜**: 좌측 앞부터 1,3,5,7 / 우측 앞부터 2,4,6,8 (8륜 기준)
- **출입문**: 좌측 1,3,5,7 / 우측 2,4,6,8
- **견인전동기**: 1~4번 (단위)
- **대차**: 전위대차(1), 후위대차(2)`,
            keyTerms: ['차륜번호', '문번호'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_023',
            title: '유닛(UNIT)의 필수 구성',
            content: `## M-M' Unit

2량(또는 1량)이 한 조가 되어 기능 수행:
- **집전**: Pan
- **특고압**: MCB, PT, AC/DC변환
- **제어**: C/I (컨버터/인버터)
- **보조전원**: SIV
- **공기원**: CM

> 하나라도 없으면 기동 불가`,
            keyTerms: ['Unit', '필수기기'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_024',
            title: '열차 편성 예시 (10량)',
            content: `## 4호선/과천선 예시

\`\`\`
Tc - M - M' - T - M' - T1 - T - M - M' - Tc
(5M 5T 구성)
\`\`\`
- M'차에 주요 기기(Pan, C/I, SIV 등) 집중 배치되는 경향`,
            keyTerms: ['10량편성', '5M5T'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_025',
            title: '저크(Jerk) 한계와 구배 기동',
            content: `## 승차감과 성능

- **저크(Jerk)**: 가속도의 변화율 ($m/s^3$)
- 한계치: **0.8 $m/s^3$ 이하** (승차감 저하 방지)
- **기동 등판**: 1유닛 고장 시에도 **35‰** 구배에서 기동 가능해야 함`,
            keyTerms: ['저크', '0.8', '35퍼밀'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_026',
            title: '상용제동 제어 우선순위',
            content: `## 에너지 절약 제동 순서

1. **M차 회생제동** (전기 생산)
2. **T차 공기제동** (부족분 보충)
3. **M차 공기제동** (최후 보충)

> 회생제동을 최우선으로 사용하여 에너지 효율 극대화 및 패드 마모 저감`,
            keyTerms: ['제동순서', '회생우선'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_027',
            title: '주 차단기(MCB)의 역할',
            content: `## Main Circuit Breaker (진공차단기 VCB)

- **교류 구간**: 사고 시 대전류 **차단** 가능
- **직류 구간**: 고속도차단기(HSCB)가 별도로 있어 MCB는 **단순 개폐** 역할만 수행하거나, 직류 구간 회로 보호 협조

> 가장 중요한 특고압 보호 기기`,
            keyTerms: ['MCB', 'VCB', '교류차단'],
            relatedQuestions: ['metro_5_102']
        },
        {
            id: 'metro_ch5_028',
            title: 'PT와 DCArr',
            content: `## 보호/계측 기기

- **PT (계기용변압기)**: AC 25kV를 AC 100V로 다운 → 전압원 검지 (ACVR)
- **DCArr (직류피뢰기)**: 
  - 직류 구간: 서지(Surge) 흡수
  - 교류 구간: **모진 보호** (교류가 직류 회로로 침입 시 방전하여 MCB 트립 시킴)`,
            keyTerms: ['PT', 'ACVR', 'DCArr', '모진보호'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_029',
            title: '주 변압기(MT)와 주 변환기(C/I)',
            content: `## 전력 변환

- **MT**: AC 25kV → AC 840V 등으로 강압
- **C/I (Converter/Inverter)**:
  - 컨버터: AC/DC → DC 링크 전압 생성
  - 인버터: DC → 3상 AC (VVVF) 만들어 모터 구동`,
            keyTerms: ['MT', 'C/I', '전력변환'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_030',
            title: '공기압축기(CM) 안전 장치',
            content: `## Air Compressor

- 압축 공기 생산 (보통 8~9kg/cm²)
- **안전 밸브(Safety Valve)**: 압력 스위치 고장 등으로 과압(예: 9.7kg 이상) 발생 시 기계적으로 개방하여 보호`,
            keyTerms: ['CM', '안전밸브'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_031',
            title: 'TCMS (열차 종합 제어 장치)',
            content: `## Train Control & Monitoring System

- **기능**: 운전 제어, 고장 현시, 검사 기능, 승무원지원
- **구성**: 중앙장치(M), 단말장치(L), 표시장치(D)
- 통신: **RS-485** 등 시리얼 통신 기반`,
            keyTerms: ['TCMS', 'TGIS', '모니터링'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_032',
            title: 'SELD 제동장치 (저항차)',
            content: `## SELD (Self-Lapping Electopneumatic Brake)

- **발전제동** 병용 전기지령식 전자직통제동
- 응급 시: 전자변 무효화 시키고 **순직통 제동(Air Only)**으로 전환 가능 (BP관 감압 방식 아님에 유의, 여기서는 SAP 직접 제어 등)`,
            keyTerms: ['SELD', '발전제동'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_033',
            title: 'HRDA 제동장치 (VVVF차)',
            content: `## HRDA

- **회생제동** 병용 전기지령식
- **Cross Blending**: 전 제동력을 연산하여 각 차량에 배분
- 디지털 제어, 응답성 빠름`,
            keyTerms: ['HRDA', '회생제동', 'CrossBlending'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_034',
            title: '비상제동의 상시 여자(Excitation)',
            content: `## Fail-Safe 설계

비상제동 루프 회로는 **항상 전기가 흐르는(여자)** 상태가 정상.
선이 끊어지거나 전원이 죽으면(무여자) → 즉시 비상제동 체결

> **순수 공기제동**만 사용 (회생제동 차단)`,
            keyTerms: ['상시여자', 'FailSafe', '순수공기제동'],
            relatedQuestions: ['metro_5_105']
        },
        {
            id: 'metro_ch5_035',
            title: '비상제동 체결 조건',
            content: `## EB 동작 조건

1. 핸들 비상 위치
2. **EBS 스위치** 작동
3. **ATS/ATC** 비상 제동 지령
4. **열차 분리**
5. **MR 압력 저하**
6. 데드맨 동작 등`,
            keyTerms: ['EBS', '열차분리', 'MR저하'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_036',
            title: '보안제동과 주차제동',
            content: `## 비상용 백업

- **보안제동**: 별도의 직통 공기제동 회로 (전기지령 고장 시 사용). 지령선 가압(여자) 시 작동.
- **주차제동**: **스프링 완해식**. 공기가 빠지면 스프링 힘으로 제동 체결 (유치 시 사용).`,
            keyTerms: ['보안제동', '주차제동', '스프링완해'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_037',
            title: '정차제동(Holding Brake)',
            content: `## 밀림 방지

- 언덕 정차 후 출발 시 뒤로 밀리는 것을 방지
- 제동 력을 유지하다가 동력이(전류) 일정 수준 올라오면 해제`,
            keyTerms: ['HoldingBrake', '밀림방지'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_038',
            title: '경정비의 범위',
            content: `## 경정비 (Light Maintenance)

차량 기지에서 시행:
- **반복 검사**: 매일/운행 전후
- **일상 검사**
- **월상 검사**
- 소모품 교환 및 기능 점검 위주`,
            keyTerms: ['경정비', '일상검사'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_039',
            title: '중정비의 범위',
            content: `## 중정비 (Heavy Maintenance)

전용 공장(중정비 기지) 입창:
- **분해 정비** (Overhaul)
- 기기 완전 분해, 세척, 수리, 도장, 시험
- 검수 주기: 년 단위 또는 대량 km 단위`,
            keyTerms: ['중정비', '오버홀', '분해정비'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_040',
            title: '서울교통공사 정기 검사 주기',
            content: `## 검사 주기 (서울)

| 종류 | 주기 | 비고 |
|------|------|------|
| 일상 | 3일 / 72시간 | - |
| 월상 | 3개월 / 5천~5만km | - |
| **전반** | **6년 / 100만km** | 가장 큰 중정비 |

> 전반검사 = 6년/100만km (둘 중 먼저 도래 기준)`,
            keyTerms: ['검사주기', '전반검사', '6년100만'],
            relatedQuestions: ['metro_5_103']
        },
        {
            id: 'metro_ch5_041',
            title: '코레일 정비 주기 (인버터차)',
            content: `## 검사 주기 (코레일)

- **경정비**: 6만km / 4개월
- **중정비**: 72만km (4년) / **144만km (8년)**
- 시스템이 다름 (거리 위주)`,
            keyTerms: ['코레일정비', '72만', '144만'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_042',
            title: '비정기 검사 종류',
            content: `## 수시 검사

- **임시 검사(T)**: 고장 발생 시
- **특별 검사(S)**: 개조, 사고 복구 후 등
- **인수 검사(A)**: 신차 도입 시
- 차륜 교환(NWC): 삭정 한계 도달 시`,
            keyTerms: ['임시검사', '특별검사'],
            relatedQuestions: []
        },
        {
            id: 'metro_ch5_043',
            title: '차체 구조 및 재질',
            content: `## 차체

- **재질**: 초기(연강) → 스테인리스(SUS) → **알루미늄** (더 경량, 고급)
- 구조: 모노코크(응력외피) 구조 등 경량화 설계`,
            keyTerms: ['스테인리스', '알루미늄', '경량화'],
            relatedQuestions: []
        }
    ]
};
