/**
 * 도시철도 시스템 일반 - 제11장 노면전차(트램) 기술 일반
 * 
 * 60개 개념으로 완성된 노면전차의 모든 기술 및 법령 내용
 * - 노면전차 정의 및 특성, 무가선 급전 방식
 * - 노면전차 3법 (도시철도법, 철도안전법, 도로교통법)
 * - 차량 시스템: 동력, 제동, 냉난방, 출입문
 * - 신호 시스템: 시계 운전, 신호기, 능동식 우선 신호
 */

const CHAPTER_URBAN_CH11 = {
    id: 'urban_ch11',
    name: '노면전차(트램) 기술 일반',
    order: 11,
    sections: [
        {
            id: 'tram_ch11_001',
            title: '노면전차(Tram)의 법적 정의',
            content: `## 노면전차
도시교통권역에서 건설·운영하는 궤도 교통수단
- **주행로**: 도로상에 부설한 레일 위
- **구동**: 전차(전기 구동 차량)`,
            keyTerms: ['노면전차', '트램'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_002',
            title: '무가선(Wireless) 급전 방식',
            content: `## 무가선 방식
가공 전차선이나 제3궤조로부터 **전력 공급 받지 않음**
→ 차량에 탑재된 에너지원 활용:
- 배터리
- 슈퍼 커패시터 (울트라 커패시터)`,
            keyTerms: ['무가선', '배터리'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_003',
            title: '슈퍼 커패시터(Super Capacitor)의 특성',
            content: `## 슈퍼 커패시터
- 전기 용량 강화
- 배터리보다 **훨씬 높은 출력**
- **고속 저장 및 방전** 성능
- 장수명 (충방전 반복 100만 회 이상)`,
            keyTerms: ['슈퍼커패시터', '출력'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_004',
            title: 'MTB(Magnetic Track Brake)의 원리',
            content: `## MTB
차량 하부의 제동 패드를 **전자기력으로 레일에 흡착**
→ 감속하는 제동장치
- **용도**: 노면전차 강력한 비상 제동
- **감속도**: 약 6.0km/h/s`,
            keyTerms: ['MTB', '제동'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_005',
            title: '바이 모달(Bi-modal) 차량',
            content: `## 바이모달
- **일반 도로** 운행 가능
- **전용 궤도** 운행 가능
- 두 가지 모드 동시 보유`,
            keyTerms: ['바이모달'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_006',
            title: '한국 노면전차의 역사적 개통',
            content: `## 최초 개통
- **1899년**
- **서대문 ~ 동대문** 간
- 여객용 8대 + 귀빈용 1대 운행
- 정원: 40명 규모`,
            keyTerms: ['1899년', '서대문'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_007',
            title: '프랑스 알스톰(Alstom)의 급전 방식',
            content: `## 프랑스 알스톰
| 노선 | 방식 |
|------|------|
| 니스(Nice) | Ni-MH 배터리 하이브리드 |
| 보르도(Bordeaux) | 지중 매설 제3궤조(APS) |`,
            keyTerms: ['알스톰', '니스'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_008',
            title: '스페인 CAF의 ACR 시스템',
            content: `## CAF ACR
**울트라 커패시터** 사용
→ 정거장에서 **급속 충전** 방식`,
            keyTerms: ['CAF'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_009',
            title: '벨기에 봄바르디어(Bombardier) PRIMOVE',
            content: `## 봄바르디어
- **슈퍼 커패시터** 사용
- **비접촉 유도 급전** 방식
- 충전 장치 차량 하부에 설치`,
            keyTerms: ['봄바르디어'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_010',
            title: '우진산전 바이 모달 트램',
            content: `## 우진산전 국내 제품
- **디젤 하이브리드** 고무 차륜 방식
- 도로 지하에 **자기유도 코일** 매설
- 차량 운행을 **자기 유도**로 제어`,
            keyTerms: ['우진산전'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_011',
            title: '노면전차의 최소 곡선 반경',
            content: `## 회전 성능
- **최소 곡선 반경**: 25m
- 중량 전철보다 **훨씬 작음**
- **장점**: 도시 급곡선 구간에 적합 ✓`,
            keyTerms: ['곡선반경'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_012',
            title: '노면전차 도입의 주요 장점',
            content: `## 장점
1. **저렴한 건설비** (중량 전철 대비)
2. **짧은 공사 기간**
3. **우수한 접근성**:
   - 승강장이 노면에 위치
   - 교통 약자의 탑승 용이`,
            keyTerms: ['장점'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_013',
            title: '노면전차 도입의 주요 단점',
            content: `## 단점
1. **도로 공유로 인한 불편**:
   - 기존 자가용 이용자 영향
2. **운행 중단 위험**:
   - 사고 발생 시 전 구간 정지 가능`,
            keyTerms: ['단점'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_014',
            title: '노면전차 3법의 구성',
            content: `## 법적 근거 3가지
1. **도시철도법** (운영/건설)
2. **철도안전법** (안전)
3. **도로교통법** (도로 운행)`,
            keyTerms: ['3법'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_015',
            title: '도시철도법상 전용로 구분',
            content: `## 전용로 종류
| 형태 | 구분 방법 |
|------|---------|
| **전용 차로** | 안전표지로 구분 |
| **전용 도로** | 분리대·연석 등 물리적 구분 |`,
            keyTerms: ['전용로'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_016',
            title: '혼용 차로 설치 제한 규정',
            content: `## 혼용 차로 비율
- **제한 원칙**: 전체 선로의 **5분의 1 이하**
- 이유: 안전성 확보`,
            keyTerms: ['혼용차로'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_017',
            title: '플랫폼 설치 기준 (높이)',
            content: `## 플랫폼 높이
- 차량 출입문 바닥과의 **높이 차이**: **15mm 이내**
- **목적**: 교통 약자 이용 편의`,
            keyTerms: ['플랫폼'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_018',
            title: '운전 원칙: 시계 운전과 시스템 운전',
            content: `## 운전 방식
| 선로 | 방식 |
|------|------|
| 연계형 (도로) | **시계 운전** |
| 독립형 | **시스템 운전** |`,
            keyTerms: ['시계운전'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_019',
            title: '노면전차의 속도 제한 규칙',
            content: `## 속도 규제
- **도로 연계형**: 시속 **70km 초과 금지**
- **선로 전환기 미고정 등**: **15km/h 이하** 서행`,
            keyTerms: ['속도'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_020',
            title: '긴급자동차에 대한 양보 의무',
            content: `## 양보 의무
긴급자동차가 전용로 통행 시:
- **제동 거리 이상** 간격 유지
- 교차로 **통행권 양보**`,
            keyTerms: ['긴급'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_021',
            title: '노면전차 운전면허 요건',
            content: `## 이중 면허 요구
1. **노면전차 운전면허** (국토교통부 부여)
2. **1종 대형 운전면허** (도로교통법)
   - 버스 운전 면허와 동일`,
            keyTerms: ['면허'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_022',
            title: '철도 보호 지구 특례',
            content: `## 보호 지구 범위
| 철도 종류 | 범위 |
|----------|------|
| 일반 철도 | 궤도 끝에서 **30m** |
| 노면전차 | 궤도 끝에서 **10m 이내** |`,
            keyTerms: ['보호지구'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_023',
            title: '보호구역 내 속도 제한',
            content: `## 제한 속도
어린이 보호구역 등에서:
- 노면전차 통행 속도 → **시속 30km 이내**`,
            keyTerms: ['보호구역'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_024',
            title: '철길 건널목 통과 요건',
            content: `## 건널목 통과
- **기본**: 일시 정지 후 안전 확인
- **예외**: 신호기 신호에 따를 때는 바로 통과 가능`,
            keyTerms: ['건널목'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_025',
            title: '음주 운전 금지 기준',
            content: `## 음주 기준
노면전차 운전자:
- **혈중알코올농도**: **0.05% 이상 금지**`,
            keyTerms: ['음주'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_026',
            title: '가선 급전 방식의 전압',
            content: `## 급전 전압
- **일반 전철**: DC 1500V (고전압)
- **노면전차**: **DC 600~800V** (저전압)
- **이유**: 도심 안전 고려`,
            keyTerms: ['전압'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_027',
            title: '니켈-수소 전지(Ni-MH)의 기억 효과',
            content: `## 기억 효과
**Memory Effect**
- 완전 충·방전 하지 않으면 용량 감소
- 리튬 전지보다 심함
- **영향**: 장기 주행거리 단축`,
            keyTerms: ['기억효과'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_028',
            title: '리튬 폴리머(Li-Po) 배터리의 장점',
            content: `## Li-Po 특성
- 전해질이 **젤 형태**
- 리튬 이온 전지보다 **안정적**
- **국내 무가선 트램** (오송 시험차량):
  - 196kWh급 시스템 탑재`,
            keyTerms: ['리튬폴리머'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_029',
            title: '슈퍼 커패시터 방식의 충전 간격',
            content: `## 충전 특성
- **고속 충전 가능** ✓
- **방전 시간 짧음** (단점)
- **충전 장치 설치 간격**: 약 **1.5km마다**`,
            keyTerms: ['충전간격'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_030',
            title: '비접촉 유도 급전의 단점',
            content: `## 문제점
1. **에너지 손실** 발생
2. **인버터 용량** 과대화 우려
3. **전자기장 노출**: 차량 없는 구간도 고주파 노출`,
            keyTerms: ['비접촉유도'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_031',
            title: '노면전차 팬터그래프의 진화',
            content: `## 팬터그래프 역할 변화
- **기존**: 상시 운행 전원 공급
- **최근**: **배터리 충전 용도로** 변경
- **구동**: DC 24V 모터로 구동하는 **싱글 암 방식** 주류`,
            keyTerms: ['팬터그래프'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_032',
            title: '견인전동기 형식',
            content: `## 전동기 선택
**3상 농형 유도전동기**:
- 구조 **간단**
- 정비 요소 **적음**
- 노면전차 주류 방식`,
            keyTerms: ['전동기'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_033',
            title: '노면전차 가감속도 성능 수치',
            content: `## 성능 기준
- **가속도**: **3.5km/h/s**
- **상용 감속도**: **3.5km/h/s**
- **비상 감속도**: 약 **6.0km/h/s** (MTB 사용)`,
            keyTerms: ['성능'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_034',
            title: '전동기 냉각 방식',
            content: `## 냉각 방식
**전폐형 자기 통풍식**
- 내부 공기 순환
- 외부 공기 순환
- 열 식힘 효율적`,
            keyTerms: ['냉각'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_035',
            title: '보조 전원 장치(APU)',
            content: `## APU 역할
일반 열차의 **SIV와 동일 기능**:
- **냉난방**: AC 380V 공급
- **제어 전원**: DC 27.4V 공급
- **안정적** 전원 관리`,
            keyTerms: ['APU'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_036',
            title: '냉난방 장치(HVAC) 제어 모드',
            content: `## 5가지 모드
1. 환기
2. 전 냉방
3. 반 냉방
4. 전 난방
5. 반 난방

→ **자동/수동** 제어 가능`,
            keyTerms: ['HVAC'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_037',
            title: '유압 제동장치의 채택 이유',
            content: `## 유압 제동 선택 이유
- **도로 혼용 주행** 때문
- 공기 제동보다:
  - **응답률 높음** ✓
  - **고감속도 가능** ✓`,
            keyTerms: ['유압제동'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_038',
            title: '상용제동 로직',
            content: `## 제동 순서
1. **동력 대차의 전기제동** (우선)
2. **제동력 부족 시** → **부수 대차의 유압 제동 추가**`,
            keyTerms: ['상용제동'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_039',
            title: '정차제동(Holding Brake)의 기능',
            content: `## 정차 제동
- **역 정차 시**: 정지 상태 **유지**
- **경사지**: 롤백(Roll Back) 현상 **방지**`,
            keyTerms: ['정차제동'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_040',
            title: '비상제동 감속도 및 거리',
            content: `## 비상 제동 성능
**시속 70km 기준**:
- 비상 감속도: **6.3km/h/s** (최대 6.0)
- 제동 거리: 약 **108m**`,
            keyTerms: ['비상제동'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_041',
            title: '시계 운전(Drive on Sight)의 기본 원칙',
            content: `## 시계 운전
- **육안 신호 준수**
- **전방 차량** 안전거리 확보
- 운전자 **책임** 중심 방식`,
            keyTerms: ['시계운전'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_042',
            title: '시계 운전의 최고 속도 제한',
            content: `## 속도 상한
해외 규정 (Bostrab 등):
- 시계 운전 시 **최대 시속 70km까지만 허용**`,
            keyTerms: ['시계속도'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_043',
            title: '노면전차 우선 신호의 목표',
            content: `## 우선 신호 목표
- **표정속도 보장**
- **무정차 통과** 목표
- 도로 교통 제어기가 **트램에 우선권** 부여`,
            keyTerms: ['우선신호'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_044',
            title: '일반 신호기 모양과 의미 (수직/수평)',
            content: `## 신호 형상
| 형태 | 의미 |
|------|------|
| **수직 흰색 막대** (↑) | 진행 |
| **수평 흰색 막대** (←→) | 정지 |`,
            keyTerms: ['신호형상'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_045',
            title: '황색 T자형 조명등의 의미',
            content: `## 예고 신호
**황색 T자형 조명**:
- **의미**: 진행 신호가 곧 나타날 것
- **명칭**: '출발 예고' 또는 '진행 예고'`,
            keyTerms: ['예고신호'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_046',
            title: '능동식 우선 신호: Early Green',
            content: `## Early Green
- 트램이 **적색 신호**에 도착
- 비우선 신호를 **일찍 종료**
- 진행 신호 **기준보다 빨리 시작**`,
            keyTerms: ['EarlyGreen'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_047',
            title: '능동식 우선 신호: Green Extension',
            content: `## Green Extension
- 진행 신호 **끝나갈 때**
- 트램이 **접근하면**
- 신호 시간을 **연장**
- → **무정차 통과** 지원`,
            keyTerms: ['GreenExtension'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_048',
            title: '능동식 우선 신호: Phase Insert',
            content: `## Phase Insert
- 적색 시간 도중 트램 도착
- 짧은 통행 시간 **임시 삽입**
- 시간: **1~2대 분량** (약 10초)`,
            keyTerms: ['PhaseInsert'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_049',
            title: '열차 종합 제어장치(TCMS)의 기능',
            content: `## TCMS
**Train Control Management System**:
- 차량 상태 및 고장 **감시**
- 실시간 **기록**
- 서비스 기기 **제어**:
  - 출입문, 냉난방 등`,
            keyTerms: ['TCMS'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_050',
            title: '네트워크 이중화',
            content: `## TCMS 신뢰성
- **양쪽 운전실**에 CCU(제어 장치) 장착
- **한쪽 고장** → 다른 쪽이 제어권 인수
- 네트워크도 **이중 구성**`,
            keyTerms: ['이중화'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_051',
            title: '종합 방송 제어장치(ICCP)의 정의',
            content: `## ICCP
**Integrated Car-side Communication & Passenger information**:
- 차상 방송 관리
- 승객 안내 표시 제공
- **CCTV 영상** 통합 관리`,
            keyTerms: ['ICCP'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_052',
            title: '방송 우선순위 로직',
            content: `## 방송 우선순위
음성 성격에 따라 순위 결정:
1. 화재/비상 인터폰 (최고)
2. 일반 방송
→ **자동/수동** 송출 제어`,
            keyTerms: ['우선순위'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_053',
            title: '출입문 장치의 구동 방식',
            content: `## 최신 방식
**저상 트램**:
- 공기식 ✗
- **전자식(DC 18V 모터)** ✓
- **스크류-너트(Screw-nut) 방식** 구동`,
            keyTerms: ['출입문'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_054',
            title: '출입문 형태별 구분',
            content: `## 설치 위치별 형태
| 위치 | 형태 |
|------|------|
| 운전실 쪽 | Single Riff Type |
| 일반 객실 | Double Riff Type |`,
            keyTerms: ['문형태'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_055',
            title: '격리(Isolation) 기능',
            content: `## DCU 격리 기능
**Door Control Unit**:
- 고장 난 **특정 출입문** 신호 바이패스(Bypass)
- **나머지 문들** 정상 동작 유지`,
            keyTerms: ['격리'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_056',
            title: '장애우 승차용 발판',
            content: `## 접근성 개선
저상 트램의 모든 출입문 하단:
- **기본 설치** (필수)
- **승차 편의성** 향상
- 교통 약자 배려`,
            keyTerms: ['발판'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_057',
            title: '노면전차 건설 시 공공 시설물 설치 원칙',
            content: `## 시설물 배치
- **맨홀 등**: **건축 한계 밖**에 설치 (원칙)
- **불가피할 경우**: **유지보수 용이** 하도록 배치`,
            keyTerms: ['맨홀'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_058',
            title: '팬터그래프 습판 재질',
            content: `## 습판 재료
**Metallized Carbon(금속화 카본)**:
- **집전 성능** 고려
- **마찰** 고려
- 장수명성 확보`,
            keyTerms: ['습판'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_059',
            title: '신호기 설치 높이 기준',
            content: `## 설치 높이
**지상 3.5m ~ 4m 이하**:
- **시인성** 확보 (운전자 시야)
- **안전성** 고려`,
            keyTerms: ['높이'],
            relatedQuestions: []
        },
        {
            id: 'tram_ch11_060',
            title: '노면전차의 친환경적 재조명',
            content: `## 재평가
- **1968년**: 자동차 보급으로 **폐지**
- **최근**: **미세먼지 및 탄소 절감** 대책으로
- **재각광** 받는 중
→ 친환경 교통수단으로 재등장`,
            keyTerms: ['친환경'],
            relatedQuestions: []
        }
    ]
};
