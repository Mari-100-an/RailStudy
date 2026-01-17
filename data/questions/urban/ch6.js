/**
 * 도시철도시스템 - 6단원 문제
 */
var QUESTIONS_URBAN_CH6 = [
  // ========== 6.1 신호 일반 및 원칙 ==========
  {
    id: 'signal_6_001',
    subject: 'urban',
    chapter: '신호일반',
    question: '철도신호제어 설비의 목적과 기능에 대한 설명으로 틀린 것은?',
    options: [
      '열차 또는 차량 운행의 안전 확보',
      '선로 이용률 향상 및 수송 능력 증대',
      '열차의 진로를 안전하게 구성',
      '수동 운전 시 기관사의 책임 전적인 배제'
    ],
    answer: 3,
    explanation: '철도신호제어 설비는 열차 안전 운행, 수송 능력 향상, 선로 이용률 제고 등을 목적으로 하며, 최근에는 인간의 오인/오동작 사고를 방지하는 역할을 한다. 기관사의 책임을 전적으로 배제한다는 내용은 없다.',
    source: '도시철도시스템 일반 제6장 [1]'
  },
  {
    id: 'signal_6_002',
    subject: 'urban',
    chapter: '신호일반',
    question: '신호 설비의 페일 세이프(Fail-safe) 원칙에 대한 설명으로 옳은 것은?',
    options: [
      '고장이 발생하면 시스템이 즉시 정지하고 재부팅된다.',
      '고장이 발생하거나 취급자가 잘못 취급해도 안전 측(정지 등)으로 동작한다.',
      '고장을 사전에 예측하여 자동으로 부품을 교체한다.',
      '고장 발생 시 가장 마지막 명령을 유지한다.'
    ],
    answer: 1,
    explanation: 'Fail-safe 원칙이란 설비의 고장 또는 취급자의 오조작 시에도 악성 고장이 되지 않도록 안전 측(주로 정지 또는 하위 신호)으로 동작하는 것을 말한다.',
    source: '도시철도시스템 일반 제6장 [3]'
  },
  {
    id: 'signal_6_003',
    subject: 'urban',
    chapter: '신호일반',
    question: '신호 제어 설비에서 적용하는 Fail-safe 방식이 아닌 것은?',
    options: [
      '궤도회로의 폐전로 방식 구성',
      '전원과 계전기 위치를 양단으로 하는 방식',
      '단선을 이용한 계전기 제어 방식',
      '위상 제어 방식'
    ],
    answer: 2,
    explanation: '계전기 제어는 양선(두 선)으로 제어하여 혼촉이나 미류에 의한 오동작을 방지해야 한다. 단선을 이용하는 것은 Fail-safe 방식이 아니다.',
    source: '도시철도시스템 일반 제6장 [27], [28]'
  },
  {
    id: 'signal_6_004',
    subject: 'urban',
    chapter: '신호일반',
    question: '지상 신호방식과 차상 신호방식의 비교 설명으로 틀린 것은?',
    options: [
      '지상 신호방식은 기상 조건(안개 등)에 따라 신호 확인이 어려울 수 있다.',
      '차상 신호방식은 오버랩(Over lap) 구간이 불필요하다.',
      '지상 신호방식은 고밀도 운전에 적합하다.',
      '차상 신호방식은 신호 현시의 다변화가 용이하다.'
    ],
    answer: 2,
    explanation: '지상 신호방식은 저밀도 운전에 적합하며, 차상 신호방식(ATC 등)이 고밀도 운전에 적합하다.',
    source: '도시철도시스템 일반 제6장 [29], [30]'
  },

  // ========== 6.2.1 신호기 장치 ==========
  {
    id: 'signal_6_005',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 중 주 신호기(Main signal)에 해당하지 않는 것은?',
    options: [
      '장내신호기',
      '출발신호기',
      '원방신호기',
      '엄호신호기'
    ],
    answer: 2,
    explanation: '원방신호기는 종속 신호기에 해당한다. 주 신호기에는 장내, 출발, 폐색, 유도, 엄호, 입환 신호기가 있다.',
    source: '도시철도시스템 일반 제6장 [5], [31]'
  },
  {
    id: 'signal_6_006',
    subject: 'urban',
    chapter: '신호일반',
    question: '주 신호기의 확인 거리를 보충하기 위해 설치하는 종속 신호기는?',
    options: [
      '유도신호기',
      '중계신호기',
      '입환신호기',
      '폐색신호기'
    ],
    answer: 1,
    explanation: '종속 신호기에는 원방, 통과, 중계신호기가 있다. 중계신호기는 주체 신호기의 신호를 중계하기 위해 설치한다.',
    source: '도시철도시스템 일반 제6장 [31]'
  },
  {
    id: 'signal_6_007',
    subject: 'urban',
    chapter: '신호일반',
    question: '색등식 신호기의 5현시 방식 순서로 옳은 것은?',
    options: [
      '정지-주의-감속-경계-진행',
      '정지-경계-주의-감속-진행',
      '정지-감속-주의-경계-진행',
      '정지-주의-경계-감속-진행'
    ],
    answer: 1,
    explanation: '5현시 방식은 정지(R) - 경계(YY) - 주의(Y) - 감속(YG) - 진행(G) 순서이다.',
    source: '도시철도시스템 일반 제6장 [6]'
  },
  {
    id: 'signal_6_008',
    subject: 'urban',
    chapter: '신호일반',
    question: '신호기의 정위(Normal position)가 "소등(현시하지 않음)"인 신호기는?',
    options: [
      '장내신호기',
      '출발신호기',
      '폐색신호기',
      '유도신호기'
    ],
    answer: 3,
    explanation: '유도신호기의 정위는 현시하지 않음(소등)이며, 장내/출발은 정지, 복선 구간 폐색신호기는 진행이 정위이다.',
    source: '도시철도시스템 일반 제6장 [32]'
  },
  {
    id: 'signal_6_009',
    subject: 'urban',
    chapter: '신호일반',
    question: '임시 신호기에 해당하지 않는 것은?',
    options: [
      '서행 예고 신호기',
      '서행 신호기',
      '서행 해제 신호기',
      '입환 신호기'
    ],
    answer: 3,
    explanation: '입환 신호기는 상치 신호기(주 신호기)에 해당한다. 임시 신호기에는 서행 예고, 서행, 서행 해제 신호기가 있다.',
    source: '도시철도시스템 일반 제6장 [33]'
  },
  {
    id: 'signal_6_010',
    subject: 'urban',
    chapter: '신호일반',
    question: '수신호 중 "서행 신호"의 주간 현시 방법은?',
    options: [
      '적색기 진동',
      '녹색기 진동',
      '적색기 및 녹색기를 머리 위에서 교차',
      '녹색등 깜박임'
    ],
    answer: 2,
    explanation: '서행 신호의 주간 현시는 적색기 및 녹색기의 기폭을 걷어잡고 머리 위에서 교차하는 것이다.',
    source: '도시철도시스템 일반 제6장 [34]'
  },
  {
    id: 'signal_6_011',
    subject: 'urban',
    chapter: '신호일반',
    question: '자동폐색 식별 표지의 설명으로 옳은 것은?',
    options: [
      '정지 신호 현시 시 절대 정차해야 한다.',
      '일단 정지 후 15km/h 이하로 운행 가능하다.',
      '일단 정지 후 25km/h 이하로 운행 가능하다.',
      '서행 허용 표지와 동일하다.'
    ],
    answer: 1,
    explanation: '자동폐색 식별 표지는 폐색신호기가 정지를 현시하더라도 일단 정지 후 15km/h 이하로 운행할 수 있음을 나타낸다.',
    source: '도시철도시스템 일반 제6장 [35]'
  },
  {
    id: 'signal_6_012',
    subject: 'urban',
    chapter: '신호일반',
    question: '장내, 출발, 폐색 신호기의 최소 확인 거리 기준은?',
    options: [
      '100m 이상',
      '200m 이상',
      '400m 이상',
      '600m 이상'
    ],
    answer: 3,
    explanation: '장내, 출발, 폐색신호기는 600m 이상의 확인 거리를 확보해야 한다.',
    source: '도시철도시스템 일반 제6장 [36]'
  },

  // ========== 6.2.2 궤도회로 장치 ==========
  {
    id: 'signal_6_013',
    subject: 'urban',
    chapter: '신호일반',
    question: '궤도회로의 기본 원리에서 열차가 진입했을 때 궤도계전기(TR)의 상태는?',
    options: [
      '여자 (Energized)',
      '무여자 (De-energized)',
      '단락 (Short)',
      '개방 (Open)'
    ],
    answer: 1,
    explanation: '폐전로식 궤도회로에서는 열차가 진입하면 차축에 의해 회로가 단락되어 전류가 차단되므로 궤도계전기는 무여자(낙하) 된다.',
    source: '도시철도시스템 일반 제6장 [37]'
  },
  {
    id: 'signal_6_014',
    subject: 'urban',
    chapter: '신호일반',
    question: '전철 구간에서 신호 전류는 차단하고 전차선의 귀선 전류만 흐르게 하는 장치는?',
    options: [
      '레일 본드',
      '임피던스 본드',
      '절연 이음매',
      '한류 장치'
    ],
    answer: 1,
    explanation: '임피던스 본드는 신호 전류에 대해서는 임피던스를 갖게 하여 차단하고, 전차선 귀선 전류는 통과시키는 역할을 한다.',
    source: '도시철도시스템 일반 제6장 [38]'
  },
  {
    id: 'signal_6_015',
    subject: 'urban',
    chapter: '신호일반',
    question: '궤도회로의 사구간(Dead section) 길이는 최대 몇 m를 넘지 않아야 하는가?',
    options: [
      '5m',
      '7m',
      '10m',
      '12m'
    ],
    answer: 1,
    explanation: '사구간에서는 열차 단락이 불가능하므로, 차량의 축간 거리를 고려하여 그 길이는 7m를 넘지 않도록 해야 한다.',
    source: '도시철도시스템 일반 제6장 [9]'
  },
  {
    id: 'signal_6_016',
    subject: 'urban',
    chapter: '신호일반',
    question: '궤도회로 단락 감도 측정 기준(일반 구간)은?',
    options: [
      '0.06Ω 이상',
      '0.1Ω 이상',
      '0.5Ω 이상',
      '1.0Ω 이상'
    ],
    answer: 1,
    explanation: '임피던스 본드 및 AF 궤도회로 구간은 0.06Ω 이상, 그 밖의 구간은 0.1Ω 이상이어야 한다.',
    source: '도시철도시스템 일반 제6장 [9]'
  },
  {
    id: 'signal_6_017',
    subject: 'urban',
    chapter: '신호일반',
    question: 'AF 궤도회로에 대한 설명으로 틀린 것은?',
    options: [
      '가청 주파수 대역(Audio Frequency)을 사용한다.',
      '무절연 궤도회로 구성이 가능하다.',
      'ATC 장치의 속도 명령 전송에 활용된다.',
      '전차선 귀선 전류의 간섭을 많이 받아 사용하지 않는다.'
    ],
    answer: 3,
    explanation: 'AF 궤도회로는 상용주파수 궤도회로보다 간섭에 강하며, 무절연 궤도회로 및 차상 신호 전송용으로 널리 사용된다.',
    source: '도시철도시스템 일반 제6장 [39], [40]'
  },

  // ========== 6.2.3 선로전환기 장치 ==========
  {
    id: 'signal_6_018',
    subject: 'urban',
    chapter: '신호일반',
    question: '분기기의 구성 요소가 아닌 것은?',
    options: [
      '포인트(Point)부',
      '리드(Lead)부',
      '크로싱(Crossing)부',
      '댐퍼(Damper)부'
    ],
    answer: 3,
    explanation: '분기기는 포인트부, 리드부, 크로싱부로 구성된다.',
    source: '도시철도시스템 일반 제6장 [10]'
  },
  {
    id: 'signal_6_019',
    subject: 'urban',
    chapter: '신호일반',
    question: '선로전환기 정위(Normal) 결정법으로 틀린 것은?',
    options: [
      '본선과 측선의 경우 본선 방향',
      '본선과 안전측선의 경우 본선 방향',
      '탈선 선로전환기는 탈선시키는 방향',
      '단선 구간 상·하 본선은 열차가 진입하는 방향'
    ],
    answer: 1,
    explanation: '본선 또는 측선과 안전측선(피난선 포함)의 경우에는 안전측선의 방향을 정위로 한다.',
    source: '도시철도시스템 일반 제6장 [11]'
  },
  {
    id: 'signal_6_020',
    subject: 'urban',
    chapter: '신호일반',
    question: 'NS형 전기 선로전환기의 정격 슬립(Slip) 전류 기준은?',
    options: [
      '2.5A',
      '5.5A',
      '8.5A',
      '12.0A'
    ],
    answer: 2,
    explanation: 'NS형 전기 선로전환기의 정부하 특성에서 전동기의 슬립 전류는 8.5A가 되도록 조정한다.',
    source: '도시철도시스템 일반 제6장 [12]'
  },
  {
    id: 'signal_6_021',
    subject: 'urban',
    chapter: '신호일반',
    question: '노스 가동 분기기의 특징이 아닌 것은?',
    options: [
      '크로싱 부분의 결선부를 없앴다.',
      '소음과 진동이 적다.',
      '고속 열차 운행 구간에 적합하다.',
      '일반 분기기에 비해 구조가 간단하고 저렴하다.'
    ],
    answer: 3,
    explanation: '노스 가동 분기기는 구조가 복잡하고 고가이나, 승차감과 안전성이 우수하여 고속선에 사용된다.',
    source: '도시철도시스템 일반 제6장 [41]'
  },
  {
    id: 'signal_6_022',
    subject: 'urban',
    chapter: '신호일반',
    question: '텅레일의 밀착 상태를 감시하여 탈선을 방지하는 장치는?',
    options: [
      '밀착 검지기',
      '쇄정 장치',
      '전철 표시기',
      '히팅 장치'
    ],
    answer: 0,
    explanation: '밀착 검지기는 기본 레일과 텅레일이 허용치 이내로 밀착되었는지를 확인하여 불밀착 시 신호를 현시하지 않도록 한다.',
    source: '도시철도시스템 일반 제6장 [12]'
  },

  // ========== 6.2.4 폐색장치 ==========
  {
    id: 'signal_6_023',
    subject: 'urban',
    chapter: '신호일반',
    question: '1폐색 구간에는 1개의 열차만 운행시킨다는 원칙을 무엇이라 하는가?',
    options: [
      '폐색의 원칙',
      '신호의 원칙',
      '연동의 원칙',
      '보안의 원칙'
    ],
    answer: 0,
    explanation: '폐색장치는 일정한 구간(폐색구간)을 정해 1개 열차만 운행하도록 하여 열차 충돌을 방지하는 장치이다.',
    source: '도시철도시스템 일반 제6장 [13]'
  },
  {
    id: 'signal_6_024',
    subject: 'urban',
    chapter: '신호일반',
    question: '자동 폐색장치(ABS)의 효과로 거리가 먼 것은?',
    options: [
      '열차 운행 횟수 증가',
      '열차의 안전도 향상',
      '열차 운용의 합리화',
      '인건비의 대폭 상승'
    ],
    answer: 3,
    explanation: '자동 폐색장치는 수동 취급을 줄이고 설비의 확실성을 높여 안전도와 선로 용량을 증대시키며 운용을 합리화한다.',
    source: '도시철도시스템 일반 제6장 [42]'
  },
  {
    id: 'signal_6_025',
    subject: 'urban',
    chapter: '신호일반',
    question: '이동 폐색 방식(Moving Block)의 특징이 아닌 것은?',
    options: [
      '궤도회로를 사용하지 않는다(또는 의존하지 않는다).',
      '열차 간격이 고정 폐색구간의 길이에 제한받지 않는다.',
      '열차 스스로 제동거리를 판단한다.',
      '지상 신호기를 반드시 설치해야 한다.'
    ],
    answer: 3,
    explanation: '이동 폐색 방식은 차상 중심 제어이므로 지상 신호기가 불필요하거나 최소화되며, 궤도회로 없이 무선 통신 등을 이용한다.',
    source: '도시철도시스템 일반 제6장 [43]'
  },

  // ========== 6.2.5 연동장치 ==========
  {
    id: 'signal_6_026',
    subject: 'urban',
    chapter: '신호일반',
    question: '연동장치의 쇄정(Locking) 종류 중, 열차가 궤도회로를 점유하고 있을 때 선로전환기가 전환되지 않도록 하는 것은?',
    options: [
      '철사 쇄정 (Detector Locking)',
      '진로 쇄정 (Route Locking)',
      '접근 쇄정 (Approach Locking)',
      '보류 쇄정 (Stick Locking)'
    ],
    answer: 0,
    explanation: '철사 쇄정은 선로전환기를 포함하는 궤도회로 내에 열차가 있을 때(단락 시) 선로전환기를 전환할 수 없도록 쇄정하는 것이다.',
    source: '도시철도시스템 일반 제6장 [16]'
  },
  {
    id: 'signal_6_027',
    subject: 'urban',
    chapter: '신호일반',
    question: '접근 쇄정의 해정 시분으로 옳은 것은?',
    options: [
      '장내신호기 30초, 출발신호기 90초',
      '장내신호기 60초, 출발신호기 60초',
      '장내신호기 90초, 출발신호기 30초',
      '장내신호기 120초, 출발신호기 60초'
    ],
    answer: 2,
    explanation: '접근 쇄정 해정 시분은 장내신호기 90초(±10%), 출발신호기 및 입환표지 30초(±10%)이다.',
    source: '도시철도시스템 일반 제6장 [44]'
  },
  {
    id: 'signal_6_028',
    subject: 'urban',
    chapter: '신호일반',
    question: '전자연동장치의 특징으로 틀린 것은?',
    options: [
      '하드웨어와 소프트웨어의 이중화(Redundancy)를 통해 신뢰성을 확보한다.',
      '자기 진단 기능이 있어 유지보수가 용이하다.',
      '현장 설비와의 연결은 굵은 케이블 다발로만 가능하다.',
      '다른 시스템(CTC, TTC 등)과의 인터페이스가 용이하다.'
    ],
    answer: 2,
    explanation: '전자연동장치는 소량의 통신 케이블(광케이블 등)을 통해 설비를 제어할 수 있는 장점이 있다.',
    source: '도시철도시스템 일반 제6장 [45], [46]'
  },
  {
    id: 'signal_6_029',
    subject: 'urban',
    chapter: '신호일반',
    question: '대향 진로의 신호기 A와 B 중 한쪽을 진행으로 하면 다른 쪽은 진행으로 할 수 없도록 하는 쇄정은?',
    options: [
      '정위 쇄정',
      '반위 쇄정',
      '조건부 쇄정',
      '철사 쇄정'
    ],
    answer: 0,
    explanation: '상호 대향인 신호기 간 충돌 방지를 위해 한쪽을 반위(진행)로 하면 다른 쪽을 정위(정지)로 쇄정하는 것을 정위 쇄정이라 한다.',
    source: '도시철도시스템 일반 제6장 [47]'
  },

  // ========== 6.2.6 CTC ==========
  {
    id: 'signal_6_030',
    subject: 'urban',
    chapter: '신호일반',
    question: '열차집중제어장치(CTC)의 주요 기능이 아닌 것은?',
    options: [
      '열차 운행 계획 관리',
      '신호 설비 원격 감시 및 제어',
      '열차 진로 자동 제어',
      '차량 정비 스케줄 자동 생성'
    ],
    answer: 3,
    explanation: 'CTC는 열차 운행 계획, 신호 설비 감시/제어, 진로 자동 제어, 운행 상황 표시 등을 수행하지만 차량 정비 스케줄 생성은 주요 기능이 아니다.',
    source: '도시철도시스템 일반 제6장 [48], [49]'
  },
  {
    id: 'signal_6_031',
    subject: 'urban',
    chapter: '신호일반',
    question: 'CTC 도입 효과로 볼 수 없는 것은?',
    options: [
      '열차 운전 정리의 신속 정확화',
      '선로 용량 증대 및 안전도 향상',
      '각 역의 운전 취급 인원 증가',
      '경영 합리화 및 승객 서비스 향상'
    ],
    answer: 2,
    explanation: 'CTC를 도입하면 중앙에서 집중 제어하므로 각 역의 운전 취급 업무가 생략되거나 자동화되어 인력을 효율적으로 운영(감소)할 수 있다.',
    source: '도시철도시스템 일반 제6장 [50]'
  },

  // ========== 6.3 열차운행제어 설비 (ATS, ATC, ATO, ATP, CBTC) ==========
  {
    id: 'signal_6_032',
    subject: 'urban',
    chapter: '신호일반',
    question: '열차자동정지장치(ATS) 지상자의 설치 위치 기준은?',
    options: [
      '신호기 바로 아래',
      '신호기 전방 20m',
      '신호기 후방 20m',
      '신호기 전방 50m'
    ],
    answer: 1,
    explanation: 'ATS 지상자는 해당 신호기 20m 전방에 설치하여 차상자와 대응하도록 한다.',
    source: '도시철도시스템 일반 제6장 [51]'
  },
  {
    id: 'signal_6_033',
    subject: 'urban',
    chapter: '신호일반',
    question: '4현시 구간 ATS 장치에서 "진행(G)" 신호 시 차상 장치의 제한 속도는?',
    options: [
      '45km/h',
      '65km/h',
      '105km/h',
      'FREE (속도 조사 없음)'
    ],
    answer: 3,
    explanation: '4현시 및 5현시 구간에서 진행(G) 신호 시에는 속도 조사를 받지 않고 자유(FREE) 주행한다.',
    source: '도시철도시스템 일반 제6장 [20]'
  },
  {
    id: 'signal_6_034',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ATS 지상자 제어 계전기의 리드선 규격으로 옳은 것은?',
    options: [
      '0.6mm x 7심',
      '1.2mm x 4심',
      '7/0.6 x 20',
      '임의의 전선 사용 가능'
    ],
    answer: 2,
    explanation: '지상자 리드선은 7/0.6x20 규격을 사용하며, 임의로 자르거나 연장할 수 없다.',
    source: '도시철도시스템 일반 제6장 [51]'
  },
  {
    id: 'signal_6_035',
    subject: 'urban',
    chapter: '신호일반',
    question: '열차자동제어장치(ATC)의 기본 기능에 해당하지 않는 것은?',
    options: [
      '지상 측 열차 검지',
      '지상 측 신호 정보 전송',
      '차상 측 신호 정보 수신 및 속도 제어',
      '선로전환기 강제 전환'
    ],
    answer: 3,
    explanation: 'ATC는 열차 검지, 신호 전송, 속도 수신 및 초과 시 자동 감속 기능을 수행한다. 선로전환기 전환은 연동장치 및 CTC의 기능이다.',
    source: '도시철도시스템 일반 제6장 [52]'
  },
  {
    id: 'signal_6_036',
    subject: 'urban',
    chapter: '신호일반',
    question: '과천선 등에서 사용하는 ATC 신호 코드 중 80km/h 제한 속도에 해당하는 주파수는?',
    options: [
      '3.2 Hz',
      '8.6 Hz',
      '10.8 Hz',
      '13.6 Hz'
    ],
    answer: 3,
    explanation: '3.2Hz(기지/25km/h), 8.6Hz(60km/h), 10.8Hz(70km/h), 13.6Hz(80km/h) 이다.',
    source: '도시철도시스템 일반 제6장 [22]'
  },
  {
    id: 'signal_6_037',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ATC 차상 신호 모드 중 "기지 모드(Yard Mode)"의 제한 속도는?',
    options: [
      '15km/h',
      '25km/h',
      '45km/h',
      '60km/h'
    ],
    answer: 1,
    explanation: '기지 모드는 차량 기지나 유치선 등 연속적인 지시 속도가 없을 때 사용하며 최대 25km/h로 제한한다.',
    source: '도시철도시스템 일반 제6장 [53]'
  },
  {
    id: 'signal_6_038',
    subject: 'urban',
    chapter: '신호일반',
    question: '열차자동운전장치(ATO)의 주요 기능이 아닌 것은?',
    options: [
      '정속도 운행 제어',
      '정위치 정지 제어 (TASC)',
      '출입문 자동 개폐',
      '선로 변 신호기 현시 제어'
    ],
    answer: 3,
    explanation: 'ATO는 차량의 가감속, 정위치 정차, 출입문 개폐 등을 자동 수행한다. 신호기 현시는 지상 신호 설비의 역할이다.',
    source: '도시철도시스템 일반 제6장 [54]'
  },
  {
    id: 'signal_6_039',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ATO 시스템에서 차상과 지상 설비 간 양방향 통신을 수행하는 장치는?',
    options: [
      'TWC (Train to Wayside Communication)',
      'ATS 차상자',
      '임피던스 본드',
      '궤도 계전기'
    ],
    answer: 0,
    explanation: 'TWC는 운행 차량과 현장 설비 간 양방향 통신을 통해 열차 번호, 행선지, 출입문 제어 정보 등을 교환한다.',
    source: '도시철도시스템 일반 제6장 [55]'
  },
  {
    id: 'signal_6_040',
    subject: 'urban',
    chapter: '신호일반',
    question: '열차자동방호장치(ATP)의 동작 원리로 옳은 것은?',
    options: [
      'Distance-to-go (목표 거리) 방식',
      'Step-by-step (계단식 속도 제어) 방식',
      'Time interval (시간 간격) 방식',
      'Absolute stop (절대 정지) 방식'
    ],
    answer: 0,
    explanation: 'ATP는 지상자로부터 정보를 받아 목표 지점까지의 거리를 계산하여 제동 곡선(Distance-to-go)을 생성한다. ATC가 주로 Step-by-step 방식을 쓴다.',
    source: '도시철도시스템 일반 제6장 [24]'
  },
  {
    id: 'signal_6_041',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ATP 지상 설비 중 가변 정보를 생성하여 발리스로 전송하는 장치는?',
    options: [
      'LEU (Line side Electronic Unit)',
      'MMI (Man Machine Interface)',
      'Tachometer',
      'Odometer'
    ],
    answer: 0,
    explanation: 'LEU는 기존 신호 장치와 인터페이스 되어 신호 현시 등의 가변 정보를 생성해 가변 발리스로 전송한다.',
    source: '도시철도시스템 일반 제6장 [24]'
  },
  {
    id: 'signal_6_042',
    subject: 'urban',
    chapter: '신호일반',
    question: '무선통신 기반 열차제어시스템(CBTC)의 특징이 아닌 것은?',
    options: [
      '이동 폐색(Moving Block) 구현 가능',
      '지상과 차상 간 양방향 무선 통신',
      '궤도회로에 의한 열차 검지 필수',
      '유지보수 비용 절감'
    ],
    answer: 2,
    explanation: 'CBTC는 궤도회로에 의존하지 않고 무선 통신으로 열차 위치를 검지하여 이동 폐색을 구현한다.',
    source: '도시철도시스템 일반 제6장 [26]'
  },
  {
    id: 'signal_6_043',
    subject: 'urban',
    chapter: '신호일반',
    question: '유럽열차제어시스템(ERTMS/ETCS)의 레벨별 특징으로 틀린 것은?',
    options: [
      'Level 1: 발리스를 이용한 점제어/불연속 전송',
      'Level 2: GSM-R 무선을 이용한 연속 제어',
      'Level 3: 이동 폐색 및 궤도회로 불필요',
      'Level 1: 이동 폐색 사용'
    ],
    answer: 3,
    explanation: 'Level 1과 Level 2는 고정 폐색 시스템을 사용하며, Level 3에서 이동 폐색 시스템을 사용한다.',
    source: '도시철도시스템 일반 제6장 [56]'
  },
  {
    id: 'signal_6_044',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ATC 시스템에서 정상 운행 중 비상제동이 체결되는 조건은?',
    options: [
      '제한 속도 1km/h 초과 시',
      '자동 감속 중 일정 시간 내 감속도(2.4km/h/s) 부족 시',
      '역 진입 시',
      '출입문 개방 시'
    ],
    answer: 1,
    explanation: 'ATC는 과속 시 상용 제동으로 감속하나, 제동력이 부족하여(2.4km/h/s 이하) 감속되지 않으면 브레이크 파손 등으로 간주해 비상제동을 체결한다.',
    source: '도시철도시스템 일반 제6장 [23]'
  },
  {
    id: 'signal_6_045',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ATS와 ATC/ATP를 비교한 설명 중 틀린 것은?',
    options: [
      'ATS는 지상 신호, ATC는 차상 신호 방식이다.',
      'ATS는 5현시 이상 다현시가 어렵다.',
      'ATC는 기관사의 신호 오인이 발생하기 쉽다.',
      'ATC/ATP는 고밀도 운전에 적합하다.'
    ],
    answer: 2,
    explanation: 'ATC는 차내에 신호가 표시되고 자동으로 속도가 제어되므로 기관사의 신호 오인이 없거나 적다.',
    source: '도시철도시스템 일반 제6장 [29]'
  },
  {
    id: 'signal_6_046',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ATC 신호 코드 중 "정지(Stop)" 신호일 때, 제한 속도 0km/h를 지시하는 코드는?',
    options: [
      'S1 코드',
      'S2 코드',
      '13.6 Hz',
      '16.8 Hz'
    ],
    answer: 0,
    explanation: '참고 그림 설명 및 일반적인 ATC 구성에서 S1은 목표 속도 0(정지)을 의미한다. (S2는 비상제동 등)',
    source: '도시철도시스템 일반 제6장 [57]'
  },
  {
    id: 'signal_6_047',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ATO 속도 제어에서 감속을 위해 설치하는 지상자(마커)의 기호는?',
    options: [
      'P1 ~ P4',
      'P5',
      'S1',
      'AD'
    ],
    answer: 1,
    explanation: '정위치 정차용 지상자는 제1~4지상자이며, 감속용 지상자는 제5지상자(P5)이다.',
    source: '도시철도시스템 일반 제6장 [58]'
  },
  {
    id: 'signal_6_048',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ATP 차상 장치에 입력되는 데이터가 아닌 것은?',
    options: [
      '열차 길이',
      '최대 허용 속도',
      '열차의 가감속 성능',
      '선로의 구배 및 곡선 반경'
    ],
    answer: 3,
    explanation: '선로의 구배, 곡선 등 선로 데이터는 지상의 발리스로부터 전송받는 정보이며, 열차 길이/성능 등은 차상에 입력된 데이터이다.',
    source: '도시철도시스템 일반 제6장 [59]'
  },
  {
    id: 'signal_6_049',
    subject: 'urban',
    chapter: '신호일반',
    question: 'CBTC 시스템의 주요 장점이 아닌 것은?',
    options: [
      '정차 거리 감소 및 운행 간격 단축',
      '지상 신호 설비 감소로 유지보수비 절감',
      '기존 시스템과의 병행 운전 불가능',
      '다양한 위치 확인 방식 사용 가능'
    ],
    answer: 2,
    explanation: 'CBTC는 기존 열차제어시스템과 병행 운전이 가능하며(Overlay 방식 등), 호환성이 높다.',
    source: '도시철도시스템 일반 제6장 [60]'
  },
  {
    id: 'signal_6_050',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ATS 차상 장치 중 3현시 방식의 동작 특성은?',
    options: [
      '점제어, 단변주 방식',
      '점제어, 다변주 방식',
      '연속제어, 단변주 방식',
      '연속제어, 다변주 방식'
    ],
    answer: 0,
    explanation: '3현시 ATS는 점제어, 단변주(105kHz -> 130kHz) 방식을 사용한다. 4/5현시는 속도조사식 다변주 방식이다.',
    source: '도시철도시스템 일반 제6장 [61]'
  },


  // ==========================================
  // 6.1 신호 일반 및 원칙 (심화)
  // ==========================================
  {
    id: 'signal_6_sub_001',
    subject: 'urban',
    chapter: '신호일반',
    question: '철도신호의 분류 중 "전호(Hand Signal)"에 해당하지 않는 것은?',
    options: [
      '제동 시험 전호',
      '입환 전호',
      '기적(기뢰) 전호',
      '입환 신호기'
    ],
    answer: 3,
    explanation: '입환 신호기는 "신호(Signal)" 중 상치 신호기에 속하며, 전호는 직원의 의지를 모양이나 소리로 표시하는 것이다.',
    source: '도시철도시스템 일반 제6장 [1]'
  },
  {
    id: 'signal_6_sub_002',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 중 "표지(Sign)"에 해당하는 것은?',
    options: [
      '임시 신호기',
      '출발 신호기',
      '차량 접촉 한계 표지',
      '수신호'
    ],
    answer: 2,
    explanation: '차량 접촉 한계 표지는 장소의 상태를 표시하는 "표지"에 해당한다. 나머지는 "신호"에 해당한다.',
    source: '도시철도시스템 일반 제6장 [2]'
  },
  {
    id: 'signal_6_sub_003',
    subject: 'urban',
    chapter: '신호일반',
    question: '지상 신호방식에서 사용되는 ATS 장치의 설명으로 틀린 것은?',
    options: [
      '지상 신호기의 현시 조건에 따라 운행한다.',
      '기상 조건에 따라 신호 확인이 어려울 수 있다.',
      'R0, R1 간의 오버랩(Over lap) 구간이 불필요하다.',
      '저밀도 운전에 적합하다.'
    ],
    answer: 2,
    explanation: '지상 신호방식(ATS)은 안전 확보를 위해 R0, R1 간의 오버랩(Over lap) 구간이 필요하다. 불필요한 것은 차상 신호방식이다.',
    source: '도시철도시스템 일반 제6장 [3]'
  },
  {
    id: 'signal_6_sub_004',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ATP(열차자동방호장치) 시스템의 제어 방식 분류로 옳은 것은?',
    options: [
      '점제어 차상 신호방식',
      '연속제어 차상 신호방식',
      '지상 신호방식',
      '수동 제어 방식'
    ],
    answer: 0,
    explanation: 'ATP는 폐색구간 경계 지점에 설치한 지상자(Balise)를 통해 정보를 받는 "점제어 차상 신호방식"으로 분류된다.',
    source: '도시철도시스템 일반 제6장 [4]'
  },
  {
    id: 'signal_6_sub_005',
    subject: 'urban',
    chapter: '신호일반',
    question: '시스템의 안전성(Safety)에 대한 설명으로 가장 적절한 것은?',
    options: [
      '주어진 조건 하에서 일정 시간 기능을 올바르게 수행하는 능력',
      '시스템에 악성 장애가 발생되지 않도록 하는 성능',
      '고장 발생 시 시스템을 즉시 재부팅하는 능력',
      '가장 저렴한 비용으로 시스템을 유지하는 능력'
    ],
    answer: 1,
    explanation: '안전성(Safety)은 시스템에 악성 장애(위험 측 고장)가 발생되지 않도록 하는 성능을 말하며, 1번은 신뢰성(Reliability)에 대한 설명이다.',
    source: '도시철도시스템 일반 제6장 [5]'
  },
  {
    id: 'signal_6_sub_006',
    subject: 'urban',
    chapter: '신호일반',
    question: 'Fail-safe 기법 중 "하드웨어 리던던시(Redundancy)"에 대한 설명은?',
    options: [
      '단일 컴퓨터가 모든 처리를 수행한다.',
      '복수의 컴퓨터가 동일 처리를 수행하고 결과를 조합하여 안전 측으로 출력을 고정한다.',
      '소프트웨어 코드를 간소화하여 버그를 줄인다.',
      '전원을 차단하여 시스템을 보호한다.'
    ],
    answer: 1,
    explanation: '하드웨어 리던던시는 복수의 하드웨어가 동일 처리를 수행하고 그 결과를 비교/조합하여 출력을 결정하는 방식이다.',
    source: '도시철도시스템 일반 제6장 [6]'
  },
  {
    id: 'signal_6_sub_007',
    subject: 'urban',
    chapter: '신호일반',
    question: '신호 설비의 계전기 회로에서 Fail-safe를 위해 전원과 계전기의 위치는 어떻게 구성하는가?',
    options: [
      '전원과 계전기를 같은 쪽에 설치',
      '전원과 계전기를 회로의 양단(양 끝)에 설치',
      '전원 없이 계전기만 설치',
      '계전기를 병렬로만 연결'
    ],
    answer: 1,
    explanation: '전원과 계전기를 양단(맨 끝)에 설치해야 혼촉이나 단락 발생 시 계전기가 무여자되어 안전 측으로 동작한다.',
    source: '도시철도시스템 일반 제6장 [7]'
  },
  {
    id: 'signal_6_sub_008',
    subject: 'urban',
    chapter: '신호일반',
    question: '한국철도공사 과천, 분당, 일산선에서 사용하는 신호 제어 방식은?',
    options: [
      'ATS (지상 신호)',
      'ATC (차상 신호)',
      'CBTC (무선 기반)',
      'ATP (점제어)'
    ],
    answer: 1,
    explanation: '과천, 분당, 일산선 및 서울교통공사 5~8호선 등은 ATC(차상 신호) 방식을 사용한다.',
    source: '도시철도시스템 일반 제6장 [8]'
  },
  {
    id: 'signal_6_sub_009',
    subject: 'urban',
    chapter: '신호일반',
    question: 'CBTC(무선통신 기반 열차제어) 방식의 장점이 아닌 것은?',
    options: [
      '이동 폐색(Moving Block) 구현 가능',
      '정차 거리 감소 및 운행 간격 단축',
      '지상 신호 설비 감소',
      '궤도회로에 의한 열차 검지 필수'
    ],
    answer: 3,
    explanation: 'CBTC는 궤도회로와 같은 고정 폐색 구간에 영향을 받지 않고 무선 통신으로 열차 위치를 검지하므로 궤도회로가 필수적이지 않다.',
    source: '도시철도시스템 일반 제6장 [9]'
  },
  {
    id: 'signal_6_sub_010',
    subject: 'urban',
    chapter: '신호일반',
    question: '신호 설비의 계전기 회로가 무여자(De-energized) 될 때 안전 측으로 동작하는 원칙은?',
    options: [
      'Fail-Safe',
      'Fail-Soft',
      'Fault-Tolerance',
      'Back-up'
    ],
    answer: 0,
    explanation: '전원이 차단되거나 고장 시 계전기가 무여자(낙하)되어 정지 신호(안전 측)를 현시하는 것이 Fail-Safe 원칙이다.',
    source: '도시철도시스템 일반 제6장 [10]'
  },

  // ==========================================
  // 6.2.1 신호기 장치 (심화)
  // ==========================================
  {
    id: 'signal_6_sub_011',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 중 "종속 신호기"에 해당하는 것은?',
    options: [
      '출발 신호기',
      '엄호 신호기',
      '원방 신호기',
      '유도 신호기'
    ],
    answer: 2,
    explanation: '원방, 통과, 중계 신호기는 종속 신호기이며, 출발, 엄호, 유도 신호기는 주 신호기에 해당한다.',
    source: '도시철도시스템 일반 제6장 [2]'
  },
  {
    id: 'signal_6_sub_012',
    subject: 'urban',
    chapter: '신호일반',
    question: '유도 신호기(Caller signal)의 정위(Normal Position)는?',
    options: [
      '정지(적색)',
      '진행(녹색)',
      '주의(황색)',
      '소등(현시하지 않음)'
    ],
    answer: 3,
    explanation: '유도 신호기는 평상시 소등되어 있다가 필요시에만 백색등 2개를 45도 방향으로 점등한다.',
    source: '도시철도시스템 일반 제6장 [11]'
  },
  {
    id: 'signal_6_sub_013',
    subject: 'urban',
    chapter: '신호일반',
    question: '임시 신호기 중 서행 신호기 외방 몇 m 지점에 "서행 예고 신호기"를 설치해야 하는가? (지상 구간 130km/h 미만 기준)',
    options: [
      '200m 이상',
      '400m 이상',
      '600m 이상',
      '1,000m 이상'
    ],
    answer: 1,
    explanation: '서행 예고 신호기는 서행 신호기 외방 400m 이상의 지점에 설치한다. (지하 구간은 200m 이상)',
    source: '도시철도시스템 일반 제6장 [12]'
  },
  {
    id: 'signal_6_sub_014',
    subject: 'urban',
    chapter: '신호일반',
    question: '신호기의 확인 거리 기준 중 "입환 신호기"의 최소 확인 거리는?',
    options: [
      '100m 이상',
      '200m 이상',
      '400m 이상',
      '600m 이상'
    ],
    answer: 1,
    explanation: '입환 신호기, 원방 신호기, 중계 신호기는 200m 이상의 확인 거리를 확보해야 한다. (장내/출발은 600m)',
    source: '도시철도시스템 일반 제6장 [13]'
  },
  {
    id: 'signal_6_sub_015',
    subject: 'urban',
    chapter: '신호일반',
    question: '자동폐색 식별 표지의 형태에 대한 설명으로 옳은 것은?',
    options: [
      '백색 원판 중앙에 폐색신호기 번호 표시',
      '적색 사각형 중앙에 번호 표시',
      '황색 삼각형 중앙에 번호 표시',
      '청색 원판 중앙에 번호 표시'
    ],
    answer: 0,
    explanation: '자동폐색 식별 표지는 초고휘도 반사재를 사용한 백색 원판 중앙에 폐색신호기 번호를 표시한다.',
    source: '도시철도시스템 일반 제6장 [14]'
  },

  // ==========================================
  // 6.2.2 궤도회로 장치 (심화)
  // ==========================================
  {
    id: 'signal_6_sub_016',
    subject: 'urban',
    chapter: '신호일반',
    question: '궤도회로의 사구간(Dead section) 길이는 최대 얼마를 넘지 않아야 하는가?',
    options: [
      '5m',
      '7m',
      '10m',
      '12m'
    ],
    answer: 1,
    explanation: '사구간 길이는 차량의 축간 거리를 고려하여 7m를 넘지 않도록 해야 한다.',
    source: '도시철도시스템 일반 제6장 [15]'
  },
  {
    id: 'signal_6_sub_017',
    subject: 'urban',
    chapter: '신호일반',
    question: '임피던스 본드(Impedance Bond) 및 AF 궤도회로 구간의 단락 감도 기준은?',
    options: [
      '0.06Ω 이상',
      '0.1Ω 이상',
      '0.5Ω 이상',
      '1.0Ω 이상'
    ],
    answer: 0,
    explanation: '임피던스 본드 및 AF 궤도회로 구간은 0.06Ω 이상, 그 밖의 구간은 0.1Ω 이상이어야 한다.',
    source: '도시철도시스템 일반 제6장 [15]'
  },
  {
    id: 'signal_6_sub_018',
    subject: 'urban',
    chapter: '신호일반',
    question: '궤도 절연(Insulation Joint)의 설치 위치 기준으로 옳은 것은? (정거장 구내 신호기 내방)',
    options: [
      '3m 이내',
      '6m 이내',
      '12m 이내',
      '20m 이내'
    ],
    answer: 1,
    explanation: '신호기 내방의 경우 정거장 구내에서는 6m 이내, 정거장 외에는 12m 이내에 절연을 설치한다.',
    source: '도시철도시스템 일반 제6장 [16]'
  },
  {
    id: 'signal_6_sub_019',
    subject: 'urban',
    chapter: '신호일반',
    question: 'AF 궤도회로에서 사용하는 주파수 대역은?',
    options: [
      '초저주파 (0~10Hz)',
      '가청 주파수 (16~20,000Hz)',
      '라디오 주파수 (RF)',
      '마이크로파'
    ],
    answer: 1,
    explanation: 'AF(Audio Frequency) 궤도회로는 사람이 들을 수 있는 16~20,000Hz 대역의 가청 주파수를 사용한다.',
    source: '도시철도시스템 일반 제6장 [17]'
  },
  {
    id: 'signal_6_sub_020',
    subject: 'urban',
    chapter: '신호일반',
    question: '전차선 귀선 전류는 통과시키고 신호 전류는 차단(임피던스 형성)하는 장치는?',
    options: [
      '레일 본드',
      '임피던스 본드',
      '차상자',
      '지상자'
    ],
    answer: 1,
    explanation: '임피던스 본드는 전차선 귀선 전류(직류/상용주파수)는 통과시키고, 신호 전류에 대해서는 임피던스를 갖게 하여 차단한다.',
    source: '도시철도시스템 일반 제6장 [16]'
  },

  // ==========================================
  // 6.2.3 선로전환기 장치 (심화)
  // ==========================================
  {
    id: 'signal_6_sub_021',
    subject: 'urban',
    chapter: '신호일반',
    question: 'NS형 전기 선로전환기의 정격 슬립(Slip) 전류 조정 기준은?',
    options: [
      '5.5A',
      '8.5A',
      '10.5A',
      '12.5A'
    ],
    answer: 1,
    explanation: 'NS형 전기 선로전환기의 정부하 특성에서 슬립 전류는 8.5A가 되도록 조정한다.',
    source: '도시철도시스템 일반 제6장 [18]'
  },
  {
    id: 'signal_6_sub_022',
    subject: 'urban',
    chapter: '신호일반',
    question: '선로전환기 정위(Normal Position) 결정법으로 틀린 것은?',
    options: [
      '본선과 측선의 경우 본선 방향',
      '본선과 안전측선의 경우 본선 방향',
      '탈선 선로전환기는 탈선시키는 방향',
      '단선 구간 상·하 본선은 열차가 진입하는 방향'
    ],
    answer: 1,
    explanation: '본선(또는 측선)과 안전측선의 경우에는 "안전측선"의 방향을 정위로 한다.',
    source: '도시철도시스템 일반 제6장 [19]'
  },
  {
    id: 'signal_6_sub_023',
    subject: 'urban',
    chapter: '신호일반',
    question: '노스 가동 분기기(Movable Nose Crossing)의 특징이 아닌 것은?',
    options: [
      '크로싱 부분의 결선부(Gap)를 없앴다.',
      '소음과 진동이 적다.',
      '고속 열차 운행에 적합하다.',
      '구조가 간단하고 설치비가 매우 저렴하다.'
    ],
    answer: 3,
    explanation: '노스 가동 분기기는 구조가 복잡하고 고가이지만, 승차감과 안전성이 우수하여 고속선에 사용된다.',
    source: '도시철도시스템 일반 제6장 [20]'
  },
  {
    id: 'signal_6_sub_024',
    subject: 'urban',
    chapter: '신호일반',
    question: '텅레일의 밀착 상태를 감시하여 불밀착 시 신호를 현시하지 않도록 하는 장치는?',
    options: [
      '밀착 검지기',
      '쇄정 장치',
      '전철 표시기',
      '히팅 장치'
    ],
    answer: 0,
    explanation: '밀착 검지기는 기본 레일과 텅레일이 허용치 이내로 밀착되었는지를 확인하는 안전장치이다.',
    source: '도시철도시스템 일반 제6장 [18]'
  },
  {
    id: 'signal_6_sub_025',
    subject: 'urban',
    chapter: '신호일반',
    question: '전기 선로전환기 설치 위치 기준은 궤도 중심선에서 몇 mm인가?',
    options: [
      '1,000mm',
      '1,200mm',
      '1,500mm',
      '1,800mm'
    ],
    answer: 1,
    explanation: '전기 선로전환기 설치하는 쪽 레일 내측에서 선로전환기 중심선까지 거리는 1,200mm이다.',
    source: '도시철도시스템 일반 제6장 [18]'
  },

  // ==========================================
  // 6.2.4 폐색장치 및 6.2.5 연동장치 (심화)
  // ==========================================
  {
    id: 'signal_6_sub_026',
    subject: 'urban',
    chapter: '신호일반',
    question: '접근 쇄정(Approach Locking)의 해정 시분으로 옳은 것은?',
    options: [
      '장내신호기 60초, 출발신호기 30초',
      '장내신호기 90초, 출발신호기 30초',
      '장내신호기 90초, 출발신호기 60초',
      '장내신호기 120초, 출발신호기 60초'
    ],
    answer: 1,
    explanation: '접근 쇄정 해정 시분은 장내신호기 90초(±10%), 출발신호기 및 입환표지 30초(±10%)이다.',
    source: '도시철도시스템 일반 제6장 [21]'
  },
  {
    id: 'signal_6_sub_027',
    subject: 'urban',
    chapter: '신호일반',
    question: '선로전환기를 포함하는 궤도회로 내에 열차가 있을 때 선로전환기를 전환할 수 없도록 하는 쇄정은?',
    options: [
      '철사 쇄정 (Detector Locking)',
      '진로 쇄정 (Route Locking)',
      '접근 쇄정 (Approach Locking)',
      '보류 쇄정 (Stick Locking)'
    ],
    answer: 0,
    explanation: '철사 쇄정은 열차가 궤도회로를 단락(점유)하고 있을 때 선로전환기 전환을 막는 쇄정이다.',
    source: '도시철도시스템 일반 제6장 [22]'
  },
  {
    id: 'signal_6_sub_028',
    subject: 'urban',
    chapter: '신호일반',
    question: '대향 진로의 신호기 A와 B 중 한쪽을 진행으로 하면 다른 쪽은 진행으로 할 수 없도록 하는 쇄정은?',
    options: [
      '정위 쇄정',
      '반위 쇄정',
      '철사 쇄정',
      '시간 쇄정'
    ],
    answer: 0,
    explanation: '상호 대향인 신호기 간 충돌 방지를 위해 한쪽을 반위(진행)로 하면 다른 쪽을 정위(정지)로 쇄정하는 것을 정위 쇄정이라 한다.',
    source: '도시철도시스템 일반 제6장 [23]'
  },
  {
    id: 'signal_6_sub_029',
    subject: 'urban',
    chapter: '신호일반',
    question: '이동 폐색 방식(Moving Block System)의 특징이 아닌 것은?',
    options: [
      '궤도회로에 의존하지 않는다.',
      '열차 간격이 고정 폐색 구간 길이에 제한받지 않는다.',
      '지상과 차상 간 양방향 무선 통신을 사용한다.',
      '열차 위치 검지를 위해 반드시 궤도 절연이 필요하다.'
    ],
    answer: 3,
    explanation: '이동 폐색 방식은 궤도회로(궤도 절연) 없이 무선 통신 등으로 열차 위치를 파악한다.',
    source: '도시철도시스템 일반 제6장 [24]'
  },
  {
    id: 'signal_6_sub_030',
    subject: 'urban',
    chapter: '신호일반',
    question: '전자연동장치의 특징으로 틀린 것은?',
    options: [
      '하드웨어와 소프트웨어의 이중화(Redundancy)로 신뢰성 확보',
      '자기 진단 기능 보유',
      '현장 설비와 굵은 케이블 다발로 연결해야 함',
      '기존 전기연동장치보다 소형, 경량화'
    ],
    answer: 2,
    explanation: '전자연동장치는 소량의 통신 케이블(광케이블 등)을 통해 제어할 수 있다. 굵은 케이블 다발은 전기연동장치(계전기식)의 특징이다.',
    source: '도시철도시스템 일반 제6장 [25]'
  },

  // ==========================================
  // 6.2.6 CTC 및 기타 (심화)
  // ==========================================
  {
    id: 'signal_6_sub_031',
    subject: 'urban',
    chapter: '신호일반',
    question: 'CTC(열차집중제어장치)의 주요 기능 중 "열차 운행 상황 표시"에 포함되지 않는 것은?',
    options: [
      '열차 번호 및 위치',
      '신호기 및 선로전환기 상태',
      '승객 수 및 혼잡도',
      '진로 상태'
    ],
    answer: 2,
    explanation: 'CTC 표시 제어반에는 열차 번호, 위치, 진로, 신호/선로전환기 상태 등이 표시되나, 승객 수나 혼잡도는 일반적으로 표시되지 않는다.',
    source: '도시철도시스템 일반 제6장 [26]'
  },
  {
    id: 'signal_6_sub_032',
    subject: 'urban',
    chapter: '신호일반',
    question: '열차 진로 자동 제어(PRC) 기능에 대한 설명으로 옳은 것은?',
    options: [
      '운영자의 수동 개입이 반드시 필요하다.',
      '열차 운행 계획을 바탕으로 운영자 개입 없이 자동으로 진로를 설정한다.',
      '신호 설비 고장 시에만 작동한다.',
      '차량 정비 스케줄을 자동으로 생성한다.'
    ],
    answer: 1,
    explanation: '열차 진로 자동 제어는 열차 운행 계획을 바탕으로 지정된 경로를 주행할 수 있도록 자동으로 진로를 제어하는 기능이다.',
    source: '도시철도시스템 일반 제6장 [27]'
  },
  {
    id: 'signal_6_sub_033',
    subject: 'urban',
    chapter: '신호일반',
    question: '시간 쇄정(Time Locking)이 필요한 경우가 아닌 것은?',
    options: [
      '진로 쇄정을 설비할 수 없는 선로전환기',
      '열차 도착 전 해정 될 수 있는 선로전환기',
      '과주 여유 거리 내의 선로전환기',
      '이미 열차가 궤도회로를 완전히 통과한 경우'
    ],
    answer: 3,
    explanation: '열차가 궤도회로를 완전히 통과하면 진로 구분 쇄정 등에 의해 해정되며, 시간 쇄정은 열차가 아직 접근 중이거나 통과하지 않았을 때 안전을 위해 시간을 두는 것이다.',
    source: '도시철도시스템 일반 제6장 [28]'
  },
  {
    id: 'signal_6_sub_034',
    subject: 'urban',
    chapter: '신호일반',
    question: '신호기 A를 반위(진행)로 하기 위해 선로전환기 21호가 반위여야 하고, 이때 21호는 반위로 쇄정되는 방식을 무엇이라 하는가?',
    options: [
      '정위 쇄정',
      '반위 쇄정',
      '조건부 쇄정',
      '철사 쇄정'
    ],
    answer: 1,
    explanation: '신호기가 반위로 되었을 때 선로전환기를 반위 위치로 쇄정하는 것을 반위 쇄정이라 한다.',
    source: '도시철도시스템 일반 제6장 [23]'
  },
  {
    id: 'signal_6_sub_035',
    subject: 'urban',
    chapter: '신호일반',
    question: '자동 폐색장치(ABS) 도입의 효과로 가장 거리가 먼 것은?',
    options: [
      '열차 운행 횟수 증가',
      '인건비의 대폭 상승',
      '열차 안전도 향상',
      '열차 운용의 합리화'
    ],
    answer: 1,
    explanation: '자동 폐색장치는 수동 취급을 줄여 인력을 효율화하고 운행 효율을 높이는 효과가 있다. 인건비 상승은 효과가 아니다.',
    source: '도시철도시스템 일반 제6장 [29]'
  },
  {
    id: 'signal_6_sub_036',
    subject: 'urban',
    chapter: '신호일반',
    question: '연동 폐색식에서 출발신호기를 취급하기 위해 갖춰야 할 조건이 아닌 것은?',
    options: [
      '폐색구간에 열차가 없을 것',
      '반대 방향 신호기는 정지 신호를 현시할 것',
      '폐색장치 고장 시에도 진행 신호를 현시할 것',
      '상호 연동 조건이 충족될 것'
    ],
    answer: 2,
    explanation: '폐색장치에 고장이 났을 때는 정지 신호를 현시해야 한다(Fail-safe). 진행 신호를 현시하면 안 된다.',
    source: '도시철도시스템 일반 제6장 [30]'
  },
  {
    id: 'signal_6_sub_037',
    subject: 'urban',
    chapter: '신호일반',
    question: '보류 쇄정(Stick Locking)은 어떤 경우에 사용하는가?',
    options: [
      '접근 궤도회로가 있는 경우',
      '접근 궤도회로가 없는 구간에서 신호 취소 시 일정 시간 해정을 막기 위해',
      '열차가 궤도회로 내에 정차해 있을 때',
      '선로전환기가 전환 중일 때'
    ],
    answer: 1,
    explanation: '보류 쇄정은 접근 궤도가 없는 구간에서 신호 현시 후 취소 시, 정해진 시간 동안 해정되지 않도록 하는 것이다.',
    source: '도시철도시스템 일반 제6장 [21]'
  },
  {
    id: 'signal_6_sub_038',
    subject: 'urban',
    chapter: '신호일반',
    question: '복선 구간의 상용 폐색 방식에 해당하지 않는 것은?',
    options: [
      '자동 폐색식 (ABS)',
      '연동 폐색식',
      '차내 신호 폐색식',
      '통표 폐색식'
    ],
    answer: 3,
    explanation: '통표 폐색식은 단선 구간에서 사용하는 폐색 방식이다.',
    source: '도시철도시스템 일반 제6장 [31]'
  },
  {
    id: 'signal_6_sub_039',
    subject: 'urban',
    chapter: '신호일반',
    question: '신호 제어 설비의 고장 발생 시 CTC 관제 설비의 장점은?',
    options: [
      '고장을 자동으로 수리한다.',
      '현장 설비 상태를 실시간 감시하여 고장 파악이 용이하다.',
      '고장 난 열차를 자동으로 폐차시킨다.',
      '고장 발생 시 모든 열차를 즉시 탈선시킨다.'
    ],
    answer: 1,
    explanation: 'CTC는 현장 설비를 실시간 감시하므로 고장 위치와 상태를 신속히 파악하여 보수 효율을 높일 수 있다.',
    source: '도시철도시스템 일반 제6장 [32]'
  },
  {
    id: 'signal_6_sub_040',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 중 신호기와 선로전환기 상호 간의 연쇄 기준으로 옳은 것은?',
    options: [
      '신호기는 선로전환기와 무관하게 취급되어야 한다.',
      '신호기 취급 시 관계 선로전환기는 정당한 방향으로 전환되고 쇄정되어야 한다.',
      '선로전환기가 전환 중일 때 진행 신호를 현시해야 한다.',
      '신호기 현시 후 선로전환기를 자유롭게 전환할 수 있어야 한다.'
    ],
    answer: 1,
    explanation: '신호 취급 시 진로 상의 선로전환기는 정당한 방향으로 개통되고 쇄정되어야 하며, 진행 신호 현시 중에는 전환되어서는 안 된다.',
    source: '도시철도시스템 일반 제6장 [33]'
  },

   // ==================== 6.1 신호 일반 및 신호기 ====================
  {
    id: 'license_urban_120',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 전호에서 모양과 색에 의한 것으로 옳은 것은?',
    options: [
      '제동시험 전호',
      '이동금지 전호',
      '입환전호',
      '기적전호'
    ],
    answer: 2,
    explanation: '전호는 직원의 의지를 표시하는 것으로, 모양과 색에 의한 전호에는 입환 전호, 출발 전호 등이 있다. 기적 전호는 소리에 의한 것이다.',
    source: '제2종 전기차량운전면허 핵심문제 Q120'
  },
  {
    id: 'license_urban_121',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 중 특수신호가 아닌 것은?',
    options: [
      '발보신호',
      '현시신호',
      '발광신호',
      '화염신호'
    ],
    answer: 1,
    explanation: '특수신호에는 발보신호, 발광신호, 폭음신호, 화염신호가 있다. 현시신호라는 분류는 없다.',
    source: '제2종 전기차량운전면허 핵심문제 Q121'
  },
  {
    id: 'license_urban_122',
    subject: 'urban',
    chapter: '신호일반',
    question: '지상 신호방식과 차상 신호방식을 비교했을 때 지상 신호방식의 설명이 아닌 것은?',
    options: [
      '신호기를 선로 변에 설치해야 하므로 차량 건축한계를 고려해서 설치해야 한다.',
      '차상 신호방식에 비해 경제성이 고가이다.',
      '저밀도 운전에 적합하다.',
      '최대 5현시로 한정되며 그 이상의 제한속도에는 현시가 불가능하다.'
    ],
    answer: 1,
    explanation: '지상 신호방식은 차상 신호방식에 비해 경제성이 저렴하다(저가). 차상 신호방식이 고가이다.',
    source: '제2종 전기차량운전면허 핵심문제 Q122'
  },
  {
    id: 'license_urban_123',
    subject: 'urban',
    chapter: '신호일반',
    question: '신호제어설비에서 적용하고 있는 Fail-safe 방식이 아닌 것은?',
    options: [
      '개전로 방식',
      '전원과 계전기 위치를 양단으로 하는 방식',
      '양선으로 계전기를 제어하는 방식',
      '위상제어 방식'
    ],
    answer: 0,
    explanation: '신호 설비는 고장 시 안전측 동작을 위해 궤도회로 등을 "폐전로 방식"으로 구성한다. 개전로 방식은 단선 시 무검지 위험이 있어 Fail-safe에 부합하지 않는다.',
    source: '제2종 전기차량운전면허 핵심문제 Q123'
  },
  {
    id: 'license_urban_126',
    subject: 'urban',
    chapter: '신호일반',
    question: '특별히 방호를 요하는 지점을 통과할 열차에 대하여 신호기 안쪽으로의 진입 여부를 지시하는 신호기는?',
    options: [
      '유도신호기',
      '원방신호기',
      '중계신호기',
      '엄호신호기'
    ],
    answer: 3,
    explanation: '엄호신호기(Protecting signal)는 특별히 방호를 요하는 지점을 통과할 열차에 대해 진입 여부를 지시한다.',
    source: '제2종 전기차량운전면허 핵심문제 Q126'
  },
  {
    id: 'license_urban_127',
    subject: 'urban',
    chapter: '신호일반',
    question: '주로 자동구간의 장내·출발·폐색신호기에 종속하며 주체 신호기의 신호를 중계하기 위하여 설치하는 신호기는?',
    options: [
      '통과신호기',
      '원방신호기',
      '중계신호기',
      '유도신호기'
    ],
    answer: 2,
    explanation: '중계신호기(Repeating signal)는 주체 신호기의 현시를 중계하여 확인 거리를 보충한다.',
    source: '제2종 전기차량운전면허 핵심문제 Q127'
  },
  {
    id: 'license_urban_128',
    subject: 'urban',
    chapter: '신호일반',
    question: '평상 시에는 소등되어 있다가 현시할 때에만 2개 백색등이 45°로 점등하여 진행신호를 현시하는 신호로 평상 시는 소등 또는 무현시가 정위인 신호기는?',
    options: [
      '중계신호기',
      '입환신호기',
      '원방신호기',
      '유도신호기'
    ],
    answer: 3,
    explanation: '유도신호기(Caller signal)는 평상시 소등(정위)되어 있다가, 장내신호기가 정지임에도 유도를 받을 열차 진입 시 백색등 2개를 45도(우하향)로 점등한다.',
    source: '제2종 전기차량운전면허 핵심문제 Q128'
  },
  {
    id: 'license_urban_130',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 3위식 신호 현시상태로 틀린 것은?',
    options: [
      '3현시 : 정지, 주의, 진행',
      '4현시 : 정지, 주의, 감속, 진행(지상 구간)',
      '4현시 : 정지, 경계, 감속, 진행(지하 구간)',
      '4현시 : 정지, 경계, 주의, 진행(지하 구간)'
    ],
    answer: 2,
    explanation: '지하 구간의 4현시는 정지(R), 경계(YY), 주의(Y), 진행(G)을 사용한다. 감속(YG)은 주로 지상 구간 4/5현시에서 사용된다.',
    source: '제2종 전기차량운전면허 핵심문제 Q130'
  },
  {
    id: 'license_urban_131',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 신호기의 신호 현시 확인할 수 있는 거리로 틀린 것은?',
    options: [
      '중계신호기 : 200m 이상',
      '유도신호기 : 100m 이상',
      '진로표시기(주 신호용) : 200m 이상',
      '폐색신호기 : 200m 이상'
    ],
    answer: 3,
    explanation: '장내, 출발, 폐색신호기는 600m 이상의 확인 거리를 확보해야 한다.',
    source: '제2종 전기차량운전면허 핵심문제 Q131'
  },
  {
    id: 'license_urban_134',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음은 서행예고신호기에 대한 설명으로 빈 칸에 들어갈 숫자로 맞는 것은? "서행신호기 외방 [ A ] 이상의 지점에 설치하여... 선로최고속도가 [ B ] 이상 지상구간에서는 700m..."',
    options: [
      '400m, 130km/h',
      '200m, 130km/h',
      '400m, 120km/h',
      '200m, 120km/h'
    ],
    answer: 0,
    explanation: '서행 예고 신호기는 서행 신호기 외방 400m 이상에 설치하며, 130km/h 이상 구간은 700m, 지하구간은 200m 이상 지점에 설치한다.',
    source: '제2종 전기차량운전면허 핵심문제 Q134'
  },

  // ==================== 6.2 궤도회로 및 선로전환기 ====================
  {
    id: 'license_urban_138',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 궤도회로의 주요 구성으로 틀린 것은?',
    options: [
      '레일본드',
      '한류장치',
      '궤도절연',
      '전원장치'
    ],
    answer: 0,
    explanation: '궤도회로의 주요 구성 요소는 전원장치, 한류장치, 궤도절연, 궤도계전기이다. 레일본드는 레일 이음매의 저항을 줄이기 위한 부속 설비로 분류된다.',
    source: '제2종 전기차량운전면허 핵심문제 Q138'
  },
  {
    id: 'license_urban_139',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 중 한국철도공사 운영 구간에서 사용되는 궤도회로 장치는?',
    options: [
      'AF 궤도회로',
      '고전압 임펄스 궤도회로',
      '교류 궤도회로',
      '정류 궤도회로'
    ],
    answer: 1,
    explanation: '한국철도공사(코레일)는 전철/비전철 전 구간에서 사용 가능한 고전압 임펄스 궤도회로(HVIT)를 주로 사용해왔다.',
    source: '제2종 전기차량운전면허 핵심문제 Q139'
  },
  {
    id: 'license_urban_141',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 중 궤도회로의 사구간 길이로 옳은 것은?',
    options: [
      '66m',
      '22m',
      '13m',
      '7m'
    ],
    answer: 3,
    explanation: '궤도회로의 사구간(Dead section) 길이는 차량의 축간 거리를 고려하여 7m를 넘지 않도록 해야 한다.',
    source: '제2종 전기차량운전면허 핵심문제 Q141'
  },
  {
    id: 'license_urban_145',
    subject: 'urban',
    chapter: '신호일반',
    question: '선로전환기 정위 결정법으로 다음 설명 중 틀린 것은?',
    options: [
      '본선과 본선 또는 측선과 측선과의 경우는 주요한 방향',
      '본선에 있어서 상하 본선은 열차가 진입하는 방향',
      '탈선 선로전환기는 탈선시키는 방향',
      '본선 또는 측선과 안전측선의 경우에는 안전측선의 방향'
    ],
    answer: 1,
    explanation: '단선 구간의 상·하 본선은 열차가 진입하는 방향을 정위로 한다. (문제 지문의 "본선"은 단선 구간을 의미하는 것으로 해석됨, 복선 구간은 해당 없음)',
    source: '제2종 전기차량운전면허 핵심문제 Q145'
  },
  {
    id: 'license_urban_147',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 선로전환기에 대한 설명으로 틀린 것은?',
    options: [
      '삼지선로전환기 : 텅레일이 4본 있고 좌·중·우 3개 분기기에 사용',
      '탈선선로전환기 : 크로싱이 없는 선로전환기로 차량을 탈선시키는 데 사용',
      '수동선로전환기 : 사람의 힘에 의하여 선로전환기를 전환하는 것',
      '발조선로전환기 : 전기 및 스프링의 힘에 의하여 선로전환기를 전환하는 것'
    ],
    answer: 3,
    explanation: '발조 선로전환기(Spring switch)는 사람 및 스프링의 힘을 이용하는 것으로, 전기를 주 동력으로 사용하지 않는다.',
    source: '제2종 전기차량운전면허 핵심문제 Q147'
  },
  {
    id: 'license_urban_150',
    subject: 'urban',
    chapter: '신호일반',
    question: 'NS형 전기선로전환기 정부하 특성으로 빈 칸에 들어갈 적절한 것은? (A: 동작 간 슬립전류, B: 전원)',
    options: [
      'A : 130, B : AC105/220V 3상 60Hz',
      'A : 185, B : AC105/220V 3상 60Hz',
      'A : 130, B : AC105/220V 단상 60Hz',
      'A : 8.5A, B : AC105/220V 단상 60Hz'
    ],
    answer: 3,
    explanation: '문제의 선택지가 원본과 다소 상이할 수 있으나, NS형 선로전환기 정격 슬립 전류는 8.5A, 전원은 단상 AC 105/220V를 사용한다. (보기 4번으로 유추)',
    source: '제2종 전기차량운전면허 핵심문제 Q150'
  },

  // ==================== 6.3 폐색, 연동, CTC ====================
  {
    id: 'license_urban_154',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 중 자동폐색장치의 효과로 적합하지 않은 것은?',
    options: [
      '열차운행횟수를 증가시킬 수 있다.',
      '열차를 합리적으로 운용할 수 있다.',
      '열차고장 시 신속한 조치를 할 수 있다.',
      '열차의 안전도를 향상시킬 수 있다.'
    ],
    answer: 2,
    explanation: '자동폐색장치는 폐색구간 분할로 운행 횟수 증가 및 안전도 향상에 기여하지만, 열차 고장 시 직접적인 신속 조치(수리 등)와는 거리가 있다.',
    source: '제2종 전기차량운전면허 핵심문제 Q154'
  },
  {
    id: 'license_urban_156',
    subject: 'urban',
    chapter: '신호일반',
    question: '출발신호기 등을 소정 위치에 설비할 수 없어 열차 정지 표지 등을 설치하고, 궤도회로 내 열차 점유 시 취급 버튼을 정위로 쇄정하는 것은?',
    options: [
      '보류 쇄정',
      '시간 쇄정',
      '표시 쇄정',
      '폐로 쇄정'
    ],
    answer: 3,
    explanation: '폐로 쇄정(Closed circuit locking)은 신호기를 설치할 수 없는 경우 등에 궤도회로 점유 시 선로전환기 등을 정위로 쇄정하는 것이다.',
    source: '제2종 전기차량운전면허 핵심문제 Q156'
  },
  {
    id: 'license_urban_157',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 접근쇄정에 대한 설명으로 틀린 것은?',
    options: [
      '신호기 외방 일정구간에 열차가 진입하였을 경우 선로전환할 수 없도록 한다.',
      '접근 궤도회로에 열차가 없을 경우 즉시 해정한다.',
      '장내신호기의 경우 해정 시·분은 80초 ± 10% 이다.',
      '접근궤도회로가 있어도 제동거리를 확보하지 못할 경우에는 보류쇄정으로 한다.'
    ],
    answer: 2,
    explanation: '장내신호기의 접근 쇄정 해정 시분은 90초(±10%)이다. (출발신호기는 30초)',
    source: '제2종 전기차량운전면허 핵심문제 Q157'
  },
  {
    id: 'license_urban_161',
    subject: 'urban',
    chapter: '신호일반',
    question: '열차집중제어장치(CTC)의 효과로 적합하지 않은 것은?',
    options: [
      '신호제어설비 고장파악 용이 및 보수 효율적 관리',
      '선로용량 감소 및 안전도 향상',
      '열차운행 상황에 대한 정보수집 자동화',
      '경영 합리화'
    ],
    answer: 1,
    explanation: 'CTC는 효율적 제어로 선로 용량을 증대(증가)시키고 안전도를 향상시킨다. 감소가 아니다.',
    source: '제2종 전기차량운전면허 핵심문제 Q161'
  },

  // ==================== 6.4 열차제어시스템 (ATS, ATC, ATO, ATP) ====================
  {
    id: 'license_urban_166',
    subject: 'urban',
    chapter: '신호일반',
    question: '다음 열차자동정지장치(ATS)에 대한 설명으로 틀린 것은?',
    options: [
      '3현시 신호방식의 경우 지상장치는 정지신호에서만, 차상장치는 단변주 방식에 의하여 동작한다.',
      '4현시 구간 일반열차의 경우 주의신호 공진주파수는 122KHz이다.',
      '5현시 구간 전기동차(경춘선)의 경우 주의신호 공진주파수는 90KHz이다.',
      '5현시 구간 KTX의 경우 감속신호 공진주파수는 98KHz이다.'
    ],
    answer: 3,
    explanation: 'KTX 및 일반열차의 5현시 구간에서 감속신호(YG) 공진주파수는 106kHz이다. (진행 G가 98kHz)',
    source: '제2종 전기차량운전면허 핵심문제 Q166'
  },
  {
    id: 'license_urban_170',
    subject: 'urban',
    chapter: '신호일반',
    question: '과천선, 일산선, 서울지하철 3, 4호선에서 사용하는 코드주파수로 틀린 것은?',
    options: [
      '지시속도 15km/h : 코드 주파수 없음(일단 정지 후 진행 모드)',
      '지시속도 25km/h : 3.2Hz 기지모드, 5.0Hz 수동 모드',
      '지시속도 60km/h : 8.6Hz',
      '지시속도 80km/h : 16.8Hz'
    ],
    answer: 3,
    explanation: '80km/h 신호 코드는 13.6Hz이다. (16.8Hz는 Yard Cancel 등 특수 코드)',
    source: '제2종 전기차량운전면허 핵심문제 Q170'
  },
  {
    id: 'license_urban_174',
    subject: 'urban',
    chapter: '신호일반',
    question: '궤도회로가 아닌 별도의 비컨(발리스) 또는 루프 코일을 이용하여 열차운행에 필요한 이동권한, 제한속도, 구배 등의 정보를 디지털로 지상에서 차상으로 전송하는 방식은?',
    options: [
      'CBTC',
      'ATP',
      'KRTCS',
      'ETCS'
    ],
    answer: 1,
    explanation: '발리스(Balise)를 이용한 점제어 기반 차상 신호 방식은 ATP(열차자동방호장치)이다. (ETCS Level 1도 ATP의 일종)',
    source: '제2종 전기차량운전면허 핵심문제 Q174'
  },
  {
    id: 'license_urban_180',
    subject: 'urban',
    chapter: '신호일반',
    question: 'ERTMS/ETCS 레벨 특성에 따른 설명으로 틀린 것은?',
    options: [
      'Level 1 – 궤도회로/차축 계수기는 불필요하다.',
      'Level 2 – 정보 전송 매체는 무선을 사용한다.',
      'Level 3 – 이동 폐색(MBS)를 사용한다.',
      'Level 3 – 지상신호기는 필요하지 않다.'
    ],
    answer: 0,
    explanation: 'Level 1은 지상 신호기와 연동되며 열차 검지를 위해 궤도회로 또는 차축 계수기가 필요하다. (Level 3에서 불필요)',
    source: '제2종 전기차량운전면허 핵심문제 Q180'
  }
];
