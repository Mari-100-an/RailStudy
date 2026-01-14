/**
 * 도시철도 시스템 일반 - 제9장 정보 통신 일반
 * 
 * 60개 개념으로 완성된 정보통신 분야의 모든 핵심 내용
 * - 통신 기초: 송신기, 수신기, 전송 매체
 * - 유선 케이블: 동축, UTP, 광케이블
 * - 전화 설비, 열차 무선설비 (VHF, LTE-R)
 * - CCTV, 행선 안내, 방송설비, 역무 자동화
 */

const CHAPTER_URBAN_CH9 = {
    id: 'urban_ch9',
    name: '정보 통신 일반',
    order: 9,
    sections: [
        {
            id: 'comm_ch9_001',
            title: '정보 통신의 정의',
            content: `## 통신의 본질
송신자와 수신자 간에 통신 매체를 이용하여 **의사, 지식, 각종 자료를 효율적으로 전달하거나 교환**하는 과정`,
            keyTerms: ['정보통신', '의사소통'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_002',
            title: '정보 통신의 3대 구성 요소',
            content: `## 통신 요소
| 요소 | 역할 |
|------|------|
| **송신기(Sender)** | 정보를 보냄 |
| **전송매체(Trans. Medium)** | 정보를 실어 나름 |
| **수신기(Receiver)** | 정보를 받음 |`,
            keyTerms: ['송신기', '수신기', '매체'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_003',
            title: '무선 통신의 역사적 기원',
            content: `## 주요 인물
- **1887년**: 헤르츠(독일) - 최초 무선송신기 제작
- **1901년**: 마르코니(이탈리아) - 대서양 횡단 장거리 무선통신 성공`,
            keyTerms: ['헤르츠', '마르코니', '1887년', '1901년'],
            relatedQuestions: ['comm_q_001']
        },
        {
            id: 'comm_ch9_004',
            title: '전송 매체의 분류',
            content: `## 매체 종류
| 종류 | 특징 | 예시 |
|------|------|------|
| **유선 매체** | 물리적 경로 있음 | 트위스트 페어, 동축, 광섬유 |
| **무선 매체** | 경로 없이 전파 이용 | 마이크로파, 라디오파 |`,
            keyTerms: ['유선', '무선', '매체'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_005',
            title: '트위스트 페어 케이블(Twisted Pair)의 원리',
            content: `## 간섭 감소 원리
두 개의 절연 구리선을 **규칙적으로 꼬아** 만듦으로써:
- 상호 전기적 간섭(Crosstalk) 현상 감소`,
            keyTerms: ['트위스트페어', '간섭감소'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_006',
            title: 'UTP와 STP 케이블의 차이',
            content: `## 케이블 타입
| 형태 | 특징 |
|------|------|
| **UTP** | 외부 차폐막 없음 |
| **STP** | 각 쌍에 외부 차폐 보호막 / 신호 간섭 감소 |`,
            keyTerms: ['UTP', 'STP', '차폐'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_007',
            title: '유선 매체의 일반적 특징',
            content: `## 유선 매체
**특징**:
- 온도, 날씨 등 기후 조건에 따라 감쇠 현상 발생
- 지형에 따른 설치 제약
- 근거리 및 광대역 통신에 적합 ✓`,
            keyTerms: ['유선매체'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_008',
            title: '무선 매체의 일반적 특징',
            content: `## 무선 매체
**특징**:
- 지형이나 재해에 상관없이 전송 가능
- 원거리 통신에 적합 (지상/위성 통신)`,
            keyTerms: ['무선매체', '원거리'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_009',
            title: '아날로그 데이터의 정의',
            content: `## 아날로그
시간에 따라 **연속적으로 변화**하는 물리량을 그대로 표현
- 예: 소리, 카세트테이프`,
            keyTerms: ['아날로그', '연속'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_010',
            title: '디지털 데이터의 정의',
            content: `## 디지털
**이산 값(discrete value)**을 가지며, 아날로그 데이터를 임의 시간의 물리량으로 정수화하여 표현`,
            keyTerms: ['디지털', '이산값'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_011',
            title: '철도 정보 통신설비의 7대 종류',
            content: `## 7대 설비
1. 통신선로
2. 전화 설비
3. 열차 무선설비
4. 영상 감시 설비 (CCTV)
5. 행선 안내 설비 (PIDS)
6. 방송설비
7. 역무 자동화 설비 (AFC)`,
            keyTerms: ['7대설비'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_012',
            title: '통신선로의 설치 목적',
            content: `## 설치 목적
- 열차 운행 상태 모니터링 및 제어
- 전차선 전기 공급/차단 데이터 전송
- 기관사와 관제사 간 무선 통화 데이터 전송`,
            keyTerms: ['통신선로'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_013',
            title: '동 케이블의 접속 공법',
            content: `## 접속 방법
동 케이블은 **접속 불량에 의한 감쇠가 큼**
→ **3M 접속 공법** 사용하여 접속 불량 최소화`,
            keyTerms: ['동케이블', '3M공법'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_014',
            title: '동 케이블 심선경(직경)별 분류',
            content: `## 심선경 규격
| 직경 | 용도 |
|------|------|
| **0.4mm** | 근거리용 |
| **0.5mm** | 가입자용 표준 |
| **0.65mm** | 광역 케이블 |
| **0.9mm** | 통신실 간 중계용 |`,
            keyTerms: ['심선경', '0.5mm'],
            relatedQuestions: ['comm_q_002']
        },
        {
            id: 'comm_ch9_015',
            title: '동 케이블 용도별 분류',
            content: `## 용도 분류
| 분류 | 특징 |
|------|------|
| **시내 케이블** | 가입자/중계 |
| **시외 케이블** | 장거리 |
| **구내 케이블** | 역사/건물 내 |`,
            keyTerms: ['시내케이블'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_016',
            title: 'UTP 케이블의 구조적 특징',
            content: `## 구조
- **내부**: 8가닥의 선 구성
- **실제 데이터 전송**: **4가닥만 사용**
- **나머지 4가닥**: 접지에 사용`,
            keyTerms: ['UTP구조', '8가닥'],
            relatedQuestions: ['comm_q_003']
        },
        {
            id: 'comm_ch9_017',
            title: '다이렉트 케이블(Direct Cable)',
            content: `## 다이렉트 케이블
양 끝의 전선 색깔 순서가 **똑같게 배열**
- 용도: 컴퓨터와 허브 연결`,
            keyTerms: ['다이렉트'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_018',
            title: '크로스 케이블(Cross Cable)',
            content: `## 크로스 케이블
전선 가닥이 **서로 엇갈려 연결**
- 용도: 
  - 허브 없이 컴퓨터 2대 직접 연결
  - 허브 간 연결`,
            keyTerms: ['크로스케이블'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_019',
            title: 'UTP 케이블 카테고리 등급',
            content: `## 등급 분류
미국 전자산업협회(EIA) 기준:
- **가장 낮은 등급**: 1
- **가장 높은 등급**: 8
- 전송 능력에 따라 분류`,
            keyTerms: ['카테고리'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_020',
            title: '광케이블의 기본 구조',
            content: `## 구조
| 층 | 역할 |
|-----|------|
| **심(Core)** | 빛 전송 |
| **클래드(Clad)** | 빛 반사 |
| **재킷(Jacket)** | 보호막 |

→ 심과 클래드 사이의 **굴절률 차이**에 의한 **전반사** 원리 이용`,
            keyTerms: ['광케이블', '전반사'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_021',
            title: '광케이블의 장점',
            content: `## 광케이블 우수성
빛의 형태로 정보 전송 → 다음 외부 간섭 **전혀 없음**:
- 충격성 잡음
- 누화 (crosstalk)
- 전자기 간섭`,
            keyTerms: ['광케이블', '간섭없음'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_022',
            title: '전화 설비의 기본 원리',
            content: `## 전화 원리
1. 음성을 **전기 신호**로 변환
2. 신호 전송
3. 다시 **음성으로 재생**
4. 전화교환기를 통해 접속`,
            keyTerms: ['전화원리'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_023',
            title: '자동 전화기',
            content: `## 자동 전화기
- **정의**: 교환기에 연결되어 고유 번호를 가지는 일반적인 사무용 전화기
- **최근**: LAN 기반 **IP 전화기**로 보편화됨`,
            keyTerms: ['자동전화기'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_024',
            title: 'IP 전화기의 특성',
            content: `## IP 전화기
**서비스**:
- 음성, 데이터, 화상 **통합** 서비스 가능
- 유선전화의 **고정성** + 이동전화의 **이동성** 구현`,
            keyTerms: ['IP전화기', '통합서비스'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_025',
            title: '직통 전화기(Hot-line)',
            content: `## 직통 전화기
번호를 **누르지 않고 들기만 하면** 바로 상대방과 연결
- 주 사용자: 로컬 역 간 운전 취급자`,
            keyTerms: ['직통전화기'],
            relatedQuestions: ['comm_q_004']
        },
        {
            id: 'comm_ch9_026',
            title: '관제 전화기',
            content: `## 관제 전화기
관제 센터 관제사와 로컬 역 운전 취급원 간 **전용 설비**
- **기능**: 개별, 군별, 일체 호출 가능`,
            keyTerms: ['관제전화기'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_027',
            title: '연선 전화기(Trackside Phone)',
            content: `## 연선 전화기
철도 연변 통신선로에 설치
- **용도**: 현장 보수 작업자나 기관사의 비상 긴급 연락`,
            keyTerms: ['연선전화기'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_028',
            title: '페이징 폰(Paging Phone) 설비',
            content: `## 페이징 폰
승강장 및 차량 기지 근무자가 휴대
- **용도**: 안내 방송 송출, 검수원 간 통화`,
            keyTerms: ['페이징폰'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_029',
            title: '열차 무선설비의 주 기능',
            content: `## 무선통신 대상
- 관제사 ↔ 기관사
- 역무원 ↔ 기관사
- 기관사 ↔ 기관사
→ **열차 운행 관계자 상호간 무선 통신**`,
            keyTerms: ['열차무선'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_030',
            title: '열차 무선 방식의 발전 및 통합',
            content: `## 무선 방식 진화
1. **VHF** (146~174MHz)
2. **TRS** (중간 단계)
3. **LTE-R** (700MHz)

→ 2027년까지 전국 철도망이 **LTE-R로 통합** 예정`,
            keyTerms: ['VHF', 'TRS', 'LTE-R'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_031',
            title: '무선국 종류: 기지국과 이동국',
            content: `## 무선국 분류
| 종류 | 설치 위치 |
|------|---------|
| **기지국** | 관제 센터, 역 |
| **이동국 (차량용)** | 기관차 등 부착 |
| **이동국 (휴대용)** | 무전기 |`,
            keyTerms: ['기지국', '이동국'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_032',
            title: '열차 무선 통화의 4대 종류',
            content: `## 통화 분류
1. 비상 통화
2. 관제 통화
3. 일반 통화
4. 작업 통화`,
            keyTerms: ['통화종류'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_033',
            title: '무선 통화 우선순위',
            content: `## 우선순위
1. **비상 통화** (최고 우선)
2. 관제 통화
3. 일반 통화
4. 작업 통화`,
            keyTerms: ['우선순위'],
            relatedQuestions: ['comm_q_005']
        },
        {
            id: 'comm_ch9_034',
            title: 'VHF 열차 무선 주파수 및 특징',
            content: `## VHF 특성
- **주파수**: 146~174MHz (**초단파**)
- **파장**: 짧음
- **문제**: 반사 현상 심함 → 음영 지역 발생`,
            keyTerms: ['VHF', '146MHz'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_035',
            title: 'VHF 무선 통화 요령',
            content: `## 통화 절차
1. **상대국** 2회 호출
2. **자국** 1회 송화
3. 통화 끝: "이상"
4. 전체 종료: "통화 끝"`,
            keyTerms: ['VHF요령'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_036',
            title: 'VHF 비상 통화 요령',
            content: `## 비상 절차
1. 채널을 **'2번'**으로 맞춤
2. **'비상'**을 **3회 연속 호출**
3. 모든 무선국: 통화 즉시 중지, 청취`,
            keyTerms: ['VHF비상'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_037',
            title: 'VHF 채널별 용도(코레일 기준)',
            content: `## 채널 구성
| 채널 | 용도 |
|------|------|
| **1번** | 일반 |
| **2번** | 비상 |
| **3·4번** | 관제, 보수 작업 |`,
            keyTerms: ['VHF채널'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_038',
            title: '감청 수신기(Monitoring Receiver)',
            content: `## 감청기
비상 통화 전용 수신기
- **1종**: 기관차/역용
- **2종**: 수도권 전동차용 (스캔 기능 있음)`,
            keyTerms: ['감청수신기'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_039',
            title: '서울메트로 1호선 무선 채널 구성',
            content: `## 채널 이원화
- **SMSC**: 서울역~청량리 지하 구간용
- **KNR**: 한국철도공사 구간용
→ 이원화되어 운영`,
            keyTerms: ['SMSC', 'KNR'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_040',
            title: '무전기 인계인수 시기',
            content: `## 인계인수 대상
다음 시기에 **반드시 인계인수**:
- 교대 근무 시
- 차고지 입출고 시
- 차량 관리단 입출고 시
- 신설/철거 시`,
            keyTerms: ['인계인수'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_041',
            title: 'LTE-R의 정의 및 주파수',
            content: `## LTE-R 개요
- **정의**: LTE 기술 기반의 **철도 통합 무선망**
- **주파수**: **700MHz** 대역
- **제정**: 2014년 국내 표준`,
            keyTerms: ['LTE-R', '700MHz'],
            relatedQuestions: ['comm_q_006']
        },
        {
            id: 'comm_ch9_042',
            title: 'LTE-R의 주요 기능적 장점',
            content: `## 기능 향상
기존 음성 위주 → **멀티미디어 서비스** 가능:
- 영상 통화
- 대용량 동영상 전송`,
            keyTerms: ['LTE-R멀티미디어'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_043',
            title: 'LTE-R 기지국 장비(eNB)',
            content: `## 기지국 구성
| 부분 | 역할 |
|------|------|
| **RU (Radio Unit)** | 안테나, RF 모듈 |
| **DU (Digital Unit)** | 신호 처리, 스케줄링 |`,
            keyTerms: ['eNB', 'RU', 'DU'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_044',
            title: 'LTE-R 안테나의 종류별 용도',
            content: `## 안테나 선택
| 종류 | 용도 |
|------|------|
| **Yagi** | 터널 |
| **Patch/Omni** | 건물 내 |
| **Sector** | 지상 또는 터널 |`,
            keyTerms: ['안테나'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_045',
            title: 'IMS(Call) 서버',
            content: `## IMS 서버
VoIP 기반 **음성 및 영상 서비스**
- **프로토콜**: SIP (Session Initiation Protocol) 신호 처리
- **역할**: 핵심 통신 서버`,
            keyTerms: ['IMS서버', 'VoIP'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_046',
            title: 'PTT(Push-to-Talk) 서버',
            content: `## PTT 서버
IP 네트워크상에서 단말기에 **무전 기능 결합**
- **통신 방식**: 반이중 통신`,
            keyTerms: ['PTT서버'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_047',
            title: 'LTE-R 장애 대책: DU 이중화',
            content: `## 신뢰성 확보
기지국 DU 장비를 **이중화**:
- 자동 절체 가능
- **통신 신뢰도** 확보`,
            keyTerms: ['DU이중화'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_048',
            title: '영상 감시 설비(CCTV)의 목적',
            content: `## CCTV 목적
역사 승강장, 맞이방, 주요 시설물 등의 **영상을 원격 표시/제어**
→ **안전 상태 감시**`,
            keyTerms: ['CCTV'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_049',
            title: 'CCTV 촬상 소자의 종류',
            content: `## 촬상 소자
빛을 **전기 신호로 전환**하는 소자:
- CCD
- CMOS`,
            keyTerms: ['CCD', 'CMOS'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_050',
            title: 'IP 카메라의 특징',
            content: `## IP 카메라
**유무선 인터넷에 직접 연결**
- 휴대폰 등을 통해 **실시간 영상** 확인 가능
- 최신 방식`,
            keyTerms: ['IP카메라'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_051',
            title: 'NVR(Network Video Recorder)',
            content: `## NVR 장비
IP 카메라로부터 전송된 영상을 **네트워크를 통해 저장**
- **최근 가장 많이 사용되는** 방식`,
            keyTerms: ['NVR'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_052',
            title: 'CCTV 영상 정보 저장 기간',
            content: `## 저장 기간
일반적으로 **일주일(7일)** 단위로 저장
- 필요시 저장 기간 **연장 가능**`,
            keyTerms: ['저장기간', '7일'],
            relatedQuestions: ['comm_q_008']
        },
        {
            id: 'comm_ch9_053',
            title: '행선 안내 설비(PIDS)의 기능',
            content: `## PIDS 역할
**LED/LCD 표시기와 음성**으로 안내:
- 열차 운행 상태
- 도착 정보
- 공지 사항`,
            keyTerms: ['PIDS', '행선안내'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_054',
            title: 'HSE와 LSE 시스템',
            content: `## 시스템 구성
| 장치 | 역할 |
|------|------|
| **HSE** | 중앙 제어 / 정보 생성·전송 |
| **LSE** | 역 제어 / 정보 수신 및 표출 |`,
            keyTerms: ['HSE', 'LSE'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_055',
            title: '방송설비의 구성 및 기능',
            content: `## 방송 구성
| 구성 | 기능 |
|------|------|
| **주 방송 장비** | Rack 수용 |
| **조정탁** | 제어 |
| **충전기함** | 배터리 충전 |
| **스피커** | 음성 출력 |

→ **화재 경보 시 자동 방송** 기능`,
            keyTerms: ['방송설비'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_056',
            title: '방송 우선순위 로직',
            content: `## 방송 순위
1. **화재 경보 방송** (최고)
2. 열차 접근/도착 방송
3. 관제 원격 방송
4. 일반 방송`,
            keyTerms: ['방송우선순위'],
            relatedQuestions: ['comm_q_009']
        },
        {
            id: 'comm_ch9_057',
            title: '관제 원격 방송',
            content: `## 원격 방송
긴급 상황 시:
- 관제 센터에서 각 역사 방송 장비에 접속
- 개별 또는 **그룹별** 안내 방송 수행`,
            keyTerms: ['관제방송'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_058',
            title: '역무 자동화 설비(AFC)의 구성',
            content: `## AFC 장비
| 장비 | 역할 |
|------|------|
| **ISACU** | 역 단위 전산기 |
| **통합 발매기** | 승차권 판매 |
| **자동 개집표기** | 개표/회수 |
| **교통 카드 단말기** | 카드 결제 |`,
            keyTerms: ['AFC', 'ISACU'],
            relatedQuestions: []
        },
        {
            id: 'comm_ch9_059',
            title: '역 단위 전산기(ISACU)의 역할',
            content: `## ISACU 기능
- 역내 장비로부터 자료 **집계**
- 운영 정보(운임 등) **관리**
- 상위 전산기(SCO)로 **전송**`,
            keyTerms: ['ISACU'],
            relatedQuestions: ['comm_q_010']
        },
        {
            id: 'comm_ch9_060',
            title: '교통 카드의 분류',
            content: `## 카드 유형
| 종류 | 특징 |
|------|------|
| **선불 카드** | 미리 충전 (티머니, 레일플러스 등) |
| **후불 카드** | 카드사 월 1회 청구 |`,
            keyTerms: ['교통카드'],
            relatedQuestions: []
        }
    ]
};
