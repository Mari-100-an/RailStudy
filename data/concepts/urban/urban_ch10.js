/**
 * 도시철도 시스템 일반 - 제10장 관제 일반
 * 
 * 60개 개념으로 완성된 관제 업무의 모든 핵심 내용
 * - 관제 업무 범위 및 지시
 * - 운전 정리 10가지 방식
 * - 열차 번호 및 통제 방식
 * - 사고·장애 분류 및 조치
 * - CTC, CBTC, ATC, ATP 시스템
 */

const CHAPTER_URBAN_CH10 = {
    id: 'urban_ch10',
    name: '관제 일반',
    order: 10,
    sections: [
        {
            id: 'cntrl_ch10_001',
            title: '도시철도의 정의와 특성',
            content: `## 도시철도
도시 교통의 원활한 소통을 위해 건설·운영되는 철도, 모노레일, 노면전차, LIM, 자기부상열차 등을 말함
- **특징**: 조밀한 운행 시격 + 안전성 강조`,
            keyTerms: ['도시철도'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_002',
            title: '관제 업무의 법적 범위',
            content: `## 관제 업무
- 철도차량 운행의 **제어·통제·감시**
- 사고 복구 지시
- 관제 시설 관리
- 철도 보호 지구 내 열차 운행 통제`,
            keyTerms: ['관제'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_003',
            title: '관제 지시(Control Direction)의 정의',
            content: `## 관제 지시
관제 기관 또는 종사자가 **철도 안전 운행**을 위해 운영자, 종사자, 자동차 운전자 등에게 내리는 지시 또는 필요한 조치`,
            keyTerms: ['지시'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_004',
            title: '운전 정리(Traffic Management)의 목적',
            content: `## 운전 정리
철도 **사고 등으로 혼란 발생** → 운행 조건 및 일정 변경 → **정상 운행 복귀**`,
            keyTerms: ['운전정리'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_005',
            title: '운전 정리 종류 1: 운전 휴지',
            content: `## 운전 휴지
열차의 운행을 **일시적으로 중지**하는 조치`,
            keyTerms: ['휴지'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_006',
            title: '운전 정리 종류 2: 운행 순서 변경',
            content: `## 순서 변경
먼저 운행할 열차의 시각은 변경하지 않고 **열차 간의 운행 순서만** 바꾸는 것`,
            keyTerms: ['순서변경'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_007',
            title: '운전 정리 종류 3: 운행 선로 변경',
            content: `## 선로 변경
운행 방향은 유지하되 **소정의 운행 선로를 다른 선로로** 변경`,
            keyTerms: ['선로변경'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_008',
            title: '운전 정리 종류 4: 운행 시각 변경',
            content: `## 시각 변경
계획된 열차의 운행 시각을 **앞당기거나 늦추는** 조치`,
            keyTerms: ['시각변경'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_009',
            title: '운전 정리 종류 5: 열차 합병',
            content: `## 합병
운행 중인 **둘 이상의 열차를 묶어** 1개의 열차로 편성하여 운행`,
            keyTerms: ['합병'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_010',
            title: '운전 정리 종류 6: 특발(Special Departure)',
            content: `## 특발
지연 열차의 도착을 기다리지 않고 **별도의 열차를 조성하여 출발**시키는 방식`,
            keyTerms: ['특발'],
            relatedQuestions: ['cntrl_q_001']
        },
        {
            id: 'cntrl_ch10_011',
            title: '운전 정리 종류 7: 교행 및 대피 변경',
            content: `## 교행/대피 변경
- **단선 구간**: 교행 정거장 변경
- **복선 구간**: 대피 정거장 변경`,
            keyTerms: ['교행', '대피'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_012',
            title: '운전 정리 종류 8: 폐색 방식 변경',
            content: `## 폐색 변경
장애 발생 시 안전 확보를 위해 **기존의 폐색구간 또는 방식을** 변경`,
            keyTerms: ['폐색'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_013',
            title: '운전 정리 종류 9: 임시 서행 및 정차',
            content: `## 서행/정차
사고나 복구, 부상자 후송 등을 위해:
- 열차 속도 **낮추기**
- **계획 없는 정차** 시행`,
            keyTerms: ['서행'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_014',
            title: '운전 정리 종류 10: 단선 운행',
            content: `## 단선 운행
복선 구간에서 한쪽 선로 **사용 불가 시**
→ 남은 선로로 상·하행 열차를 **번갈아 운행**`,
            keyTerms: ['단선운행'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_015',
            title: '열차 번호 부여 원칙 (숫자)',
            content: `## 열차 번호 체계
- **4자리 숫자**로 표시
- **하행 열차**: 홀수 (1001, 1003, ...)
- **상행 열차**: 짝수 (1002, 1004, ...)`,
            keyTerms: ['번호부여'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_016',
            title: '운영 기관별 열차 번호 접두어',
            content: `## 접두어 규칙
| 기관 | 접두어 |
|------|--------|
| 한국철도공사(KR) | **K** |
| 서울교통공사(STO) | **S** |`,
            keyTerms: ['접두어', 'K', 'S'],
            relatedQuestions: ['cntrl_q_002']
        },
        {
            id: 'cntrl_ch10_017',
            title: '알파벳 열차 종별 코드 1 (출고/입고)',
            content: `## 출고/입고 코드
- **여객열차**: 출고 H / 입고 D
- **단행 열차**: 출고 L / 입고 M`,
            keyTerms: ['코드'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_018',
            title: '알파벳 열차 종별 코드 2 (전동차 회송)',
            content: `## 회송 코드
- **사업 시작 전 출고**: F
- **사업 종료 후 입고**: G`,
            keyTerms: ['회송'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_019',
            title: '특발 열차 코드 (T)',
            content: `## T 코드
이례 사항 발생 시 지연 열차를 대신해 **중간 역에서 출발**하는 열차에 부여`,
            keyTerms: ['T코드'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_020',
            title: '관제 설비의 구성',
            content: `## 주요 설비
- CTC (열차집중제어장치)
- LDP (대형표시반)
- 주 컴퓨터
- 관제 콘솔
- 무선설비
- 관제 전화`,
            keyTerms: ['CTC', 'LDP'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_021',
            title: '운전 정리의 우선순위',
            content: `## 우선순위 기준
1. **상위 등급 열차** (우선순위 높음)
2. **동급 열차**: 속도 빠르거나 구간 긴 열차
3. **타 기관 간**: 계획 우선 (연쇄 지연 고려 가능)`,
            keyTerms: ['우선순위'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_022',
            title: '관제 승인 기록부 (XROIS)',
            content: `## 기록 체계
- **정상**: 철도 운행 정보 시스템(XROIS)에 입력
- **장애 시**: 수기 기록부로 유지 (대체 체계)`,
            keyTerms: ['XROIS'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_023',
            title: '철도 사고 vs 운행 장애',
            content: `## 구분
| 분류 | 정의 |
|------|------|
| **사고** | 인명 사상 또는 물건 파손 발생 |
| **장애** | 사고 아니지만 운행에 지장 |`,
            keyTerms: ['사고', '장애'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_024',
            title: '열차 사고의 4대 분류',
            content: `## 사고 종류
1. **충돌 사고**
2. **탈선 사고**
3. **화재 사고**
4. **기타 열차 사고** (위험물 누출 등)`,
            keyTerms: ['충돌', '탈선'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_025',
            title: '위험 사건(Dangerous Event)의 예시',
            content: `## 위험 사건 종류
- 정지신호 위반
- 허가 없는 구간 주행
- 본선 지장 탈선
- **주요 장치 고장**: 주행/제동 장치`,
            keyTerms: ['위험사건'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_026',
            title: '지연 운행의 기준 시간',
            content: `## 지연 기준
| 열차 종류 | 기준 시간 |
|----------|---------|
| 고속/전동 | 20분 이상 |
| 일반 여객 | 30분 이상 |
| 화물/기타 | 60분 이상 |`,
            keyTerms: ['지연'],
            relatedQuestions: ['cntrl_q_004']
        },
        {
            id: 'cntrl_ch10_027',
            title: '사상자의 정의',
            content: `## 사상자 분류
| 종류 | 기준 |
|------|------|
| **사망자** | 즉시 또는 30일 이내 사망 |
| **부상자** | 24시간 이상 입원 치료 필요 |`,
            keyTerms: ['사망', '부상'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_028',
            title: '사고 복구의 3대 기본 원칙',
            content: `## 복구 원칙
1. **인명 구조 및 안전 조치** (최우선)
2. 본선 개통 및 증거 확보
3. 민간 및 철도 재산 보호`,
            keyTerms: ['복구원칙'],
            relatedQuestions: ['cntrl_q_003']
        },
        {
            id: 'cntrl_ch10_029',
            title: '국토교통부 즉시 보고 대상 사고',
            content: `## 즉시 보고 기준
- **충돌/탈선**
- **운행 중지 화재**
- **사상자 3명 이상**
- **재산 피해 5천만 원 이상**`,
            keyTerms: ['보고'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_030',
            title: '운전 종사자의 사고 후속 조치',
            content: `## 조치 내용
- 관제 상황 전파
- 객내 안내 방송
- **여객 대피 유도**
- 구름(압사) 방지 조치
- 비상문 개방 등`,
            keyTerms: ['후속조치'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_031',
            title: '탈선 사고 시 관제 조치 (PTGT)',
            content: `## 탈선 조치
- 인접 선로 신호기 일괄 정지
- 고속선: 연동 구역(PTGT) 정지 설정
- 복구 장비 수배`,
            keyTerms: ['PTGT'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_032',
            title: '구원 운전 시 관제 조치 (10분 기준)',
            content: `## 10분 경과 조치
응급조치 시간이 **10분을 경과** → 관제 운영실과 협의 후 **즉시 구원 조치 우선 시행**`,
            keyTerms: ['구원운전'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_033',
            title: '화재 발생 열차 운행 원칙',
            content: `## 화재 운행 원칙
- **운행 방향**: 최근 역 또는 지하 구간 밖으로
- **목적**: 대피 용이성 확보
- **정차 시**: 출입문과 PSD 개방 유지`,
            keyTerms: ['화재'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_034',
            title: '장소별 사고 급보 책임자',
            content: `## 책임자 분류
| 장소 | 책임자 |
|------|--------|
| 정거장 내 | 역장 |
| 정거장 외 | 기관사(필요시 승무원) |
| 기타 장소 | 발견자 또는 관리자 |`,
            keyTerms: ['급보'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_035',
            title: '무선 방호 채널 및 요령',
            content: `## 방호 절차
1. 채널 **2번** 전환
2. '제00열차 무선 방호' **3~5회 반복** 발신
3. 인접 열차 정차`,
            keyTerms: ['방호'],
            relatedQuestions: ['cntrl_q_005']
        },
        {
            id: 'cntrl_ch10_036',
            title: '도시철도 주요 복구 장비',
            content: `## 복구 장비
터널 내 기중기 진입 어려움 → 주로 사용:
- **유니목(Unimog)**
- **유압 재크키트(Jack Kit)** (유압 JLCM)`,
            keyTerms: ['복구장비'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_037',
            title: '관제 제어 방식 1: 자동 (AUTO)',
            content: `## AUTO 모드
**중앙 컴퓨터 시스템**에 의해 자동으로:
- 열차 진로 제어
- 열차 운행 제어`,
            keyTerms: ['AUTO'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_038',
            title: '관제 제어 방식 2: 콘솔 (CCM)',
            content: `## CCM 모드
**Console Control Mode**
- 관제사가 **콘솔**에서 제어
- **키보드 + 마우스** 사용
- **수동** 진로 제어`,
            keyTerms: ['CCM', '콘솔'],
            relatedQuestions: ['cntrl_q_006']
        },
        {
            id: 'cntrl_ch10_039',
            title: '관제 제어 방식 3: 로컬 (LOCAL)',
            content: `## LOCAL 모드
**해당 역에서 직접 제어**:
- 관제 센터 제어 불가
- 권한 이전받음
- 신호 및 진로 제어`,
            keyTerms: ['LOCAL'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_040',
            title: '운행 관리 컴퓨터(MSC)의 역할',
            content: `## MSC 기능
- 열차 운행 계획(**DIA**) 작성
- 스케줄 입력
- 운행 실적 저장·관리`,
            keyTerms: ['MSC', 'DIA'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_041',
            title: '주 컴퓨터(TCC)의 역할',
            content: `## TCC 역할
**Traffic Control Computer**
- MSC로부터 스케줄 수신
- 각 역의 **선로 전환기** 제어
- **신호** 제어`,
            keyTerms: ['TCC'],
            relatedQuestions: ['cntrl_q_007']
        },
        {
            id: 'cntrl_ch10_042',
            title: '정보 전송 장치(DTS)의 역할',
            content: `## DTS 기능
**Data Transmission System**
- 관제 장치 ↔ 현장 연동 장치 간 통신
- **제어 정보** 전송
- **운행 정보** 전송 (궤도 점유 등)`,
            keyTerms: ['DTS'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_043',
            title: '대형표시반(LDP)의 주요 표시 정보',
            content: `## LDP 표시
| 항목 | 내용 |
|------|------|
| 궤도 점유 상태 | 색 표시 |
| 진로 구성 | 신호 설정 |
| 선로 전환기 | 정/반위 |
| 신호 정보 | 번호 표시 |
| 열차 정보 | 번호, 도착 예상 시각 |`,
            keyTerms: ['LDP'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_044',
            title: '열차 다이어그램(Train Diagram)의 정의',
            content: `## 다이어그램
**도식화된 운행 도표**
- **Y축**: 역(station)
- **X축**: 시간(time)
- 시간 흐름에 따른 열차 운행 상황 표현`,
            keyTerms: ['다이어그램'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_045',
            title: '도시철도용 1분목 다이어그램',
            content: `## 1분목 다이어그램
**운행 밀도가 높은 노선**에서 사용
→ 15초/30초/45초 단위를 **기호로 세밀하게** 표기`,
            keyTerms: ['1분목'],
            relatedQuestions: ['cntrl_q_008']
        },
        {
            id: 'cntrl_ch10_046',
            title: '다이어그램 주요 표기 사항',
            content: `## 표기 내용
- 열차 선/번호
- 정거장 명/종류/거리
- 구배
- 폐색 방식
- 본선 유효 장
- 교행 가능 여부`,
            keyTerms: ['표기'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_047',
            title: '통신 기반 열차 제어(CBTC)의 특징',
            content: `## CBTC
**양방향 무선 통신** 활용:
- 열차 위치 **실시간 파악**
- **이동 폐색** 방식
- **무인 운전(Driverless)** 가능`,
            keyTerms: ['CBTC', 'Driverless'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_048',
            title: '자동 운전 모드 (AM/ATO)',
            content: `## AM 모드
**완전 자동 운전**
- 가속 → **자동**
- 제동 → **자동**
- 타행 → **자동**
- 출입문 개방 → **자동**`,
            keyTerms: ['AM', 'ATO'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_049',
            title: '수동 운전 모드 (SM/ATP 감시)',
            content: `## SM 모드
지상 **ATP 장치의 제한속도 내**에서:
- 기관사가 **수동** 운전`,
            keyTerms: ['SM'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_050',
            title: '속도제한 수동 모드 (RM)',
            content: `## RM 모드
- **시스템 장애 시** 또는 **통신 초기화 시**
- **25km/h 이하** 제한
- 수동 운전`,
            keyTerms: ['RM'],
            relatedQuestions: ['cntrl_q_009']
        },
        {
            id: 'cntrl_ch10_051',
            title: '비상 모드 (Bypass)',
            content: `## Bypass 모드
- CBTCCOS를 **차단 위치**로 설정
- 시스템의 **보호 없이** 수동 운전
- **비상 상황** 전용`,
            keyTerms: ['Bypass'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_052',
            title: '출발 제어 로직',
            content: `## 출발 절차
1. ATS 정차 시간 계산 완료
2. ATP가 **모든 PSD 닫힘** 확인
3. ATP가 **열차 문 닫힘** 확인
4. **이동 권한(MA) 부여** → 출발`,
            keyTerms: ['출발'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_053',
            title: '열차 자동 제어(ATC) 시스템',
            content: `## ATC
**Automatic Train Control System**
→ 다음을 **자동으로** 수행:
- 열차 움직임 제어
- 안전 실행
- 운전 명령 지시`,
            keyTerms: ['ATC'],
            relatedQuestions: ['cntrl_q_010']
        },
        {
            id: 'cntrl_ch10_054',
            title: '열차 자동 보호(ATP) 시스템',
            content: `## ATP
**Automatic Train Protection**
- **충돌, 과속, 탈선** 등 위험 조건 보호
- **안전 보장** 유지
- ATC의 중요 서브시스템`,
            keyTerms: ['ATP'],
            relatedQuestions: ['cntrl_q_010']
        },
        {
            id: 'cntrl_ch10_055',
            title: '열차 자동 감시(ATS) 시스템',
            content: `## ATS
**Automatic Train Supervision**
- 열차 개별 성능 조절
- 스케줄 유지
- 운행 데이터 제공
- 서비스 품질 조절`,
            keyTerms: ['ATS'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_056',
            title: '열차 자동 운행(ATO) 시스템',
            content: `## ATO
**Automatic Train Operation**
실제 운행 기능 수행:
- 속도 제어
- 프로그램 정차
- 출입문 제어`,
            keyTerms: ['ATO'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_057',
            title: '이동 폐색(Moving Block)의 원리',
            content: `## Moving Block
**고정 구간 폐색 ✗** → **이동 폐색 ✓**
- 열차 간 **무선 통신**
- 후방 **안전거리 실시간 계산**
- 간격 **자동 조정** (최적화)`,
            keyTerms: ['이동폐색'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_058',
            title: '관제 업무 종사자의 의무',
            content: `## 의무 사항
- 운전 명령 숙지
- 정보 수시 파악
- 사고 시 **철도 운영자와 협의**하여 운전 정리 시행`,
            keyTerms: ['의무'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_059',
            title: '사고 보고 공통 7대 사항',
            content: `## 보고 내용 (5W2H)
1. **언제** (When)
2. **어디서** (Where)
3. **누가** (Who)
4. **왜** (Why)
5. **어떻게** (How)
6. **무엇을** (What)
7. **추가 보고 시기**`,
            keyTerms: ['보고'],
            relatedQuestions: []
        },
        {
            id: 'cntrl_ch10_060',
            title: '도시철도 개통 역사',
            content: `## 최초 개통
- **1974년 8월 15일**
- **서울역 ~ 청량리역** 구간
- 우리나라 최초 도시철도 개통`,
            keyTerms: ['1974년', '서울역'],
            relatedQuestions: []
        }
    ]
};
