/**
 * 도시철도 시스템 일반 - 제8장 토목 일반 (철도 선로 및 궤도)
 * 
 * 60개 개념으로 완성된 토목 분야의 모든 핵심 내용
 * - 철도 선로 기본 (본선, 측선, 궤간)
 * - 곡선, 기울기, 분기기 설계
 * - 레일, 침목, 도상 등 궤도 구조
 */

const CHAPTER_URBAN_CH8 = {
    id: 'urban_ch8',
    name: '토목 일반',
    order: 8,
    sections: [
        {
            id: 'civil_ch8_001',
            title: '본선(Main Line)과 측선(Side Line)의 정의',
            content: `## 선로 분류
- **본선**: 열차의 운전에 상용(常用)하는 선로
- **측선**: 본선이 아닌 모든 선로를 총칭`,
            keyTerms: ['본선', '측선', '상용'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_002',
            title: '궤간(Gauge)의 정의 및 측정 기준',
            content: `## 궤간 측정
양쪽 레일 안쪽 간의 가장 짧은 거리로, 철제 차륜의 경우 **레일 윗면으로부터 14mm 아래** 지점을 기준으로 측정`,
            keyTerms: ['궤간', '14mm', '측정기준'],
            relatedQuestions: ['civil_q_001']
        },
        {
            id: 'civil_ch8_003',
            title: '궤간의 종류: 표준궤, 광궤, 협궤',
            content: `## 궤간 분류
| 종류 | 기준 | 특징 |
|------|------|------|
| **표준궤** | 1,435mm | 국제 표준 |
| **광궤** | 1,435mm 초과 | 안정성 우수 |
| **협궤** | 1,435mm 미만 | 저비용, 곡선성 우수 |`,
            keyTerms: ['표준궤', '광궤', '협궤', '1435mm'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_004',
            title: '광궤와 협궤의 특성 비교',
            content: `## 비교 분석
- **광궤**: 주행 안정성과 승차감 우수, 건설비 많음
- **협궤**: 건설비 저렴, 곡선 통과 용이, 수송량/속도 제한`,
            keyTerms: ['광궤장점', '협궤장점'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_005',
            title: '선로(Track)와 궤도(Permanent Way)의 구성',
            content: `## 구성 요소
- **궤도**: 레일 + 침목 + 도상 + 부속품
- **선로**: 궤도 + 노반(또는 인공 구조물)`,
            keyTerms: ['선로', '궤도', '노반'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_006',
            title: '캔트(Cant)의 정의 및 목적',
            content: `## 캔트
곡선 구간에서 열차의 원심력을 상쇄하기 위해 안쪽 레일을 기준으로 바깥쪽 레일을 **높게 부설**하는 것`,
            keyTerms: ['캔트', '원심력상쇄'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_007',
            title: '슬랙(Slack, 확대 궤간)의 정의',
            content: `## 슬랙
차량이 곡선 구간을 원활하게 통과하도록 안쪽 레일을 기준으로 궤간을 넓히는 것`,
            keyTerms: ['슬랙', '확대궤간'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_008',
            title: '슬랙(Slack)의 설치 한도 및 위치',
            content: `## 슬랙 규정
- **확대 치수**: **25mm를 초과할 수 없음**
- **위치**: 반드시 곡선 부분의 **안쪽 레일**에 설치`,
            keyTerms: ['슬랙한도', '25mm'],
            relatedQuestions: ['civil_q_002']
        },
        {
            id: 'civil_ch8_009',
            title: '정거장의 분류: 역, 조차장, 신호장',
            content: `## 정거장 종류
| 종류 | 목적 |
|------|------|
| **역** | 여객/화물 취급 |
| **조차장** | 열차 조성 및 입환 |
| **신호장** | 열차 교행/대피 |`,
            keyTerms: ['역', '조차장', '신호장'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_010',
            title: '신호소(Signal Box)의 정의',
            content: `## 신호소
열차의 교차 통행이나 대피 시설 없이 **상치신호기(또는 열차 제어 시스템)만을 취급**하는 장소`,
            keyTerms: ['신호소', '상치신호기'],
            relatedQuestions: ['civil_q_007']
        },
        {
            id: 'civil_ch8_011',
            title: '건축 한계(Architecture Limit)의 정의',
            content: `## 건축 한계
차량이 안전하게 운행될 수 있도록 궤도 위에 설정한 **일정한 여유 공간**으로, 이 범위 안에는 시설물을 설치할 수 없음`,
            keyTerms: ['건축한계', '여유공간'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_012',
            title: '차량 한계(Vehicle Limit)의 정의',
            content: `## 차량 한계
궤도 위에 정지된 상태에서 측정한 차량의 길이, 너비, 높이의 최대 한계로 **건축 한계보다 좁게 설정**`,
            keyTerms: ['차량한계', '건축한계'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_013',
            title: '도시철도 선로 구조 기준 (서울)',
            content: `## 규정 수치
| 항목 | 폭 | 높이 |
|------|-------|--------|
| **건축 한계** | 3,600mm | 5,150mm |
| **차량 한계** | 3,200mm | 4,750mm |
| **승강장 높이** | - | 레일면으로부터 1,135m |`,
            keyTerms: ['3600mm', '5150mm', '1135m'],
            relatedQuestions: ['civil_q_003']
        },
        {
            id: 'civil_ch8_014',
            title: '설계 속도에 따른 곡선 반경 결정 요소',
            content: `## 결정 요소
최소 곡선 반경은 다음에 따라 결정:
1. 궤간
2. 열차 속도
3. 차량의 고정 축거(Rigid Wheel Base)`,
            keyTerms: ['곡선반경', '축거'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_015',
            title: '완화 곡선(Transition Curve)의 목적',
            content: `## 완화 곡선 역할
1. 곡률의 급격한 변화 방지
2. 차량의 요동 완화
3. 캔트를 점진적으로 체감시킴`,
            keyTerms: ['완화곡선', '곡률변화'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_016',
            title: '완화 곡선의 종류',
            content: `## 곡선 타입
| 기관 | 채용 곡선 |
|------|---------|
| **한국철도공사** | 3차 포물선 |
| **도시철도** | 클로소이드 또는 사인 반 파장 곡선 |`,
            keyTerms: ['클로소이드', '포물선'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_017',
            title: '최대 캔트량(Maximum Cant) 제한',
            content: `## 캔트 규정
도시철도건설규칙에 따라:
- **일반 (철제)**: 160mm 이하
- **경량전철 (철제)**: 160mm 이하
- **경량전철 (고무)**: 150mm 이하`,
            keyTerms: ['최대캔트', '160mm', '150mm'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_018',
            title: '기울기(Gradient)의 표시 방식: 천분율(‰)',
            content: `## 천분율 표시
수평 거리 **1,000m**에 대한 **수직 높이 차이**를 표시
→ 한국, 프랑스, 독일, 일본 등에서 주로 사용`,
            keyTerms: ['천분율', '‰', '1000m'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_019',
            title: '최급 기울기(Steepest Gradient)의 한도',
            content: `## 기울기 제한
- **전기동차 전용선 일반 본선**: 35‰ 이하
- **정거장 안 본선**: 2~3‰ (부득이시 8~10‰)`,
            keyTerms: ['최급기울기', '35‰'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_020',
            title: '기울기의 종류: 제한, 타력, 표준, 가상',
            content: `## 기울기 분류
- **제한 기울기**: 견인정수를 제한하는 기울기
- **타력 기울기**: 짧은 연장을 열차의 타력으로 통과 가능한 기울기`,
            keyTerms: ['제한기울기', '타력기울기'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_021',
            title: '종곡선(Vertical Curve)의 설치 기준',
            content: `## 종곡선 규정
기울기 변화가 심한 지점에 설치
- **도시철도**: 인접 기울기 변화 5‰ 초과 시
- **최소 반경**: 3,000m 이상`,
            keyTerms: ['종곡선', '3000m'],
            relatedQuestions: ['civil_q_010']
        },
        {
            id: 'civil_ch8_022',
            title: '곡선 보정(Curve Compensation)과 환산 기울기',
            content: `## 환산 기울기
곡선 저항을 기울기로 환산한 값:
$$G_c = \\frac{700}{R}$$
- **상당 기울기** = 실제 기울기 + 환산 기울기`,
            keyTerms: ['환산기울기', 'Gc=700/R'],
            relatedQuestions: ['civil_q_004']
        },
        {
            id: 'civil_ch8_023',
            title: '분기기(Turnout)의 3대 구성 부분',
            content: `## 분기기 구성
| 부분 | 역할 |
|------|------|
| **포인트(Point)** | 레일 편향 |
| **리드(Lead)** | 연결부 |
| **크로싱(Crossing)** | 교차 통로 |`,
            keyTerms: ['분기기', '포인트', '크로싱'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_024',
            title: '분기기의 대향(Facing)과 배향(Trailing)',
            content: `## 분기기 통과 방향
- **대향**: 포인트 선단에서 후단으로 진입 (위험도 높음)
- **배향**: 크로싱에서 포인트 방향으로 진입`,
            keyTerms: ['대향', '배향'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_025',
            title: '분기기의 정위(Normal) 표준',
            content: `## 정위 규정
평상시 개통되어 있는 방향
- **본선 ↔ 측선**: 본선 방향이 정위
- **본선 ↔ 안전측선**: 안전측선 방향이 정위`,
            keyTerms: ['정위', 'normal'],
            relatedQuestions: ['civil_q_005']
        },
        {
            id: 'civil_ch8_026',
            title: '고정 크로싱과 가동 크로싱',
            content: `## 크로싱 비교
| 종류 | 특징 | 용도 |
|------|------|------|
| **고정 크로싱** | 결선부 있음, 진동/소음 큼 | - |
| **가동 노즈 크로싱** | 결선부 없음, 고속 주행 안전 | 고속 구간 |`,
            keyTerms: ['고정크로싱', '가동크로싱'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_027',
            title: '분기기 번수(N)와 통과 속도의 관계',
            content: `## 번수와 성능
번수가 커질수록:
- 분기 각도가 작아짐
- 횡방향 동요 감소
- **더 높은 속도로 통과 가능**`,
            keyTerms: ['분기기번수'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_028',
            title: '궤도 중심 간격의 기준 (정거장 외)',
            content: `## 중심 간격 규정
나란히 설치하는 궤도의 최소 중심 간격:
- **70km/h 이하**: 3.8m
- **350km/h 초과**: 4.8m`,
            keyTerms: ['중심간격', '3.8m', '4.8m'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_029',
            title: '선로제표: 킬로미터표와 미터표',
            content: `## 선로 표지
기점으로부터 거리를 표시
- **킬로미터표**: 1km마다 설치
- **미터표**: 200m마다 (지하는 100m), 선로 좌측에 설치`,
            keyTerms: ['킬로미터표', '미터표'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_030',
            title: '차량 접촉 한계표의 설치 위치',
            content: `## 한계표 위치
인접 궤도 차량과의 접촉 방지 표지
- **설치 위치**: 궤도 중심 간격이 **4m이 되는 지점**`,
            keyTerms: ['한계표'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_031',
            title: '레일(Rail)의 4대 역할',
            content: `## 레일 기능
1. **하중 직접 지지**
2. **운행 방향 안내** (선형 유지)
3. **평탄한 주행면 제공**
4. **전기/신호 전류의 귀로** 역할`,
            keyTerms: ['레일역할', '4대기능'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_032',
            title: '레일의 단면 형상과 평저 레일',
            content: `## 레일 형태
수직 하중에 유리하도록:
- 높이가 높음
- 저부(밑부분)가 넓음
→ **평저 레일(Flat-bottom Rail)** 주로 사용`,
            keyTerms: ['평저레일'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_033',
            title: '레일 중량화의 5대 장점',
            content: `## 중량화 효과
1. **구조적 안전성 증대** (단면 2차 모멘트 큼)
2. **내구연한 연장**
3. **유지보수비 절감**
4. **소음/진동 저감**
5. **안전 운행 도모**`,
            keyTerms: ['레일중량화'],
            relatedQuestions: ['civil_q_006']
        },
        {
            id: 'civil_ch8_034',
            title: '레일의 마모 교환 기준 (60kg 레일)',
            content: `## 교환 기준
다음 중 하나 충족 시 교환:
- **수직 마모**: 13mm
- **편 마모**: 15mm
- **통과 톤수**: 6억 톤`,
            keyTerms: ['레일마모', '13mm', '15mm'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_035',
            title: '정척 레일(Standard Rail)의 길이',
            content: `## 레일 길이
| 기관 | 정척 레일 길이 | 사유 |
|------|-----------|------|
| **한국철도공사** | 25m | - |
| **도시철도** | **20m** | 운송/터널 투입 조건 |`,
            keyTerms: ['정척레일', '20m'],
            relatedQuestions: ['civil_q_009']
        },
        {
            id: 'civil_ch8_036',
            title: '장대 레일(Long Rail)의 정의',
            content: `## 장대 레일
이음매를 용접하여 한 개의 길이가 **200m 이상인 레일**을 말함`,
            keyTerms: ['장대레일', '200m'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_037',
            title: '망간 레일(Manganese Rail)의 특성',
            content: `## 망간 레일
- **망간 함유량**: 10~15%
- **내구연한**: 보통 레일의 약 **6배**
- **주용도**: 마모가 심한 분기기 등`,
            keyTerms: ['망간레일', '6배'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_038',
            title: '레일 훼손의 주요 원인',
            content: `## 훼손 원인
- 제작 시 내부 결함
- 부설/취급 불량
- 궤도 보수 불량
- 차량 하중 과다 및 탈선 사고`,
            keyTerms: ['레일훼손'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_039',
            title: '침목(Tie/Sleeper)의 역할',
            content: `## 침목 기능
1. 레일을 소정 위치에 고정/지지
2. 레일로부터 받은 하중을 도상에 **넓게 분포**`,
            keyTerms: ['침목', '하중분산'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_040',
            title: '목 침목(Wooden Tie)의 장점',
            content: `## 목 침목 장점
1. **탄성 풍부**, 완충성 크음
2. 레일 체결/교환 작업 용이
3. 전기 절연도가 높음`,
            keyTerms: ['목침목'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_041',
            title: '콘크리트 침목(PC Sleeper)의 장점',
            content: `## PC 침목 장점
1. **부식 우려 없음**
2. 수명이 목 침목보다 약 **3배** 길음
3. 자중이 커서 궤도 틀림에 저항력 크음`,
            keyTerms: ['PC침목', '3배수명'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_042',
            title: '콘크리트 침목(PC Sleeper)의 제조 방식',
            content: `## 제조 방식
| 방식 | 설명 |
|------|------|
| **프리텐션** | 콘크리트 타설 **전** 강선 긴장 |
| **포스트텐션** | 콘크리트 타설 **후** 강선 긴장 |

→ 한국: **프리텐션** 주로 사용`,
            keyTerms: ['프리텐션', '포스트텐션'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_043',
            title: '서울교통공사 침목 부설 수 기준',
            content: `## 부설 수 규정
지하 본선 장대레일 구간 기준:
- **20m당**: 34정
- **1km당**: 1,700정
- **침목 간격**: 약 588~595mm`,
            keyTerms: ['침목부설', '1700정'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_044',
            title: '도상(Ballast)의 역할',
            content: `## 도상 기능
1. 침목을 고정
2. 하중을 노반에 전달
3. 탄성으로 충격/소음 완화
4. 배수를 원활하게 함`,
            keyTerms: ['도상', '도상역할'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_045',
            title: '도상 자갈의 구비 조건',
            content: `## 자갈 조건
- 경질이고 마찰에 강함
- **능각(모서리각)** 풍부
- 입자 간 마찰력이 큼
- 배수가 양호함`,
            keyTerms: ['도상자갈', '능각'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_046',
            title: '도상의 단면 형상 및 두께',
            content: `## 도상 규정
| 항목 | 수치 |
|------|------|
| **단면** | 사다리꼴 |
| **두께** (침목 하면) | 25~35cm |
| **어깨 폭** | 350~450mm |`,
            keyTerms: ['도상형상', '두께'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_047',
            title: '도상 계수(K)와 노반 판정',
            content: `## 계수 판정
| 도상 계수 K | 판정 |
|-----------|------|
| **0.5MPa** | 불량 |
| **0.9MPa** | 양호 |
| **1.3MPa** | 우량 |`,
            keyTerms: ['도상계수', '1.3MPa'],
            relatedQuestions: ['civil_q_008']
        },
        {
            id: 'civil_ch8_048',
            title: '콘크리트 도상 궤도의 특징',
            content: `## 콘크리트 도상
- **초기 건설비**: 자갈 도상의 **1.5~2.5배**
- **유지보수비**: 거의 들지 않음
- **선형 유지**: 우수함`,
            keyTerms: ['콘크리트도상'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_049',
            title: '슬래브 궤도(Slab Track)와 B2S 시스템',
            content: `## 슬래브 궤도
콘크리트 도상과 노반 사이에 모르타르 완충재를 삽입한 구조
- **소음/진동** 감소
- **품질** 우수`,
            keyTerms: ['슬래브궤도', 'B2S'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_050',
            title: '레일 체결 장치(Fastener)의 기능',
            content: `## 체결 장치 역할
1. 레일 위치 고정
2. 하중을 침목에 전달
3. 진동 감쇠
4. 전기적 절연 성능 확보`,
            keyTerms: ['체결장치', 'fastener'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_051',
            title: '탄성 체결 장치(Elastic Fastening)',
            content: `## 탄성 체결
탄성 클립과 타이 패드를 사용:
- 레일의 미세 진동 흡수
- 레일 복진(이동) 방지`,
            keyTerms: ['탄성체결', '클립'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_052',
            title: '이중 탄성 체결의 정의',
            content: `## 이중 탄성
레일과 침목 사이에:
1. 고무제 패드 설치
2. 상하 양방향에서 탄성적으로 체결`,
            keyTerms: ['이중탄성', '패드'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_053',
            title: '종단 곡선(Vertical Curve) 삽입 기준 (도시철도)',
            content: `## 삽입 기준
- **삽입 조건**: 선로 기울기 변화가 **5‰** 초과
- **최소 반경**: **3,000m 이상**`,
            keyTerms: ['종단곡선', '3000m'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_054',
            title: '기울기 구간 평균 기울기 제한',
            content: `## 평균 기울기
철도건설기준에 따라:
- **연속 10km** 기울기에 대해
- **평균 기울기**: **25‰ 이하**`,
            keyTerms: ['평균기울기', '25‰'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_055',
            title: '최급 기울기 35‰ 구간의 길이 제한',
            content: `## 35‰ 제한
최대 기울기 35‰가 연속될 경우:
- **길이 제한**: **6km를 초과할 수 없음**`,
            keyTerms: ['35‰', '6km'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_056',
            title: '레일의 파상 마모(Corrugation)',
            content: `## 파상 마모
레일 표면이 물결 모양으로 마모되는 현상
- **발생 원인**: 도상이 과하게 견고하거나 탄성 부족`,
            keyTerms: ['파상마모', 'corrugation'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_057',
            title: '레일 도유기의 목적',
            content: `## 도유기 역할
곡선부에서:
- 차륜 플랜지와 레일 측면의 마찰 감소
- **레일 마모 방지**`,
            keyTerms: ['도유기'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_058',
            title: '침목의 방부 처리 방법',
            content: `## 방부 처리
- **약제**: 크레오소트유 등
- **방식**: 가압 주입
- **종류**: 베셀법, 루핑법, 로오리법 등`,
            keyTerms: ['방부처리', '크레오소트유'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_059',
            title: '디젤차 대비 전기차의 점착 계수 장점',
            content: `## 점착 계수 우수성
전기차:
- 동력 분산 가능
- 점착 계수가 높음
- **고구배(35‰)에서도 운행 용이**`,
            keyTerms: ['점착계수', '동력분산'],
            relatedQuestions: []
        },
        {
            id: 'civil_ch8_060',
            title: '선로제표: 수준표(Level Post)',
            content: `## 수준표
- **목적**: 선로 표고 측정의 기준
- **설치 간격**: 약 1km마다
- **위치**: 선로 우측에 설치`,
            keyTerms: ['수준표', '레벨포스트'],
            relatedQuestions: []
        }
    ]
};
