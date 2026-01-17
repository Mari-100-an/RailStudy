/**
 * 도시철도시스템 - 5단원 문제
 */
var QUESTIONS_URBAN_CH5 = [
    // 여기에 5단원 문제 추가

  // ========== 5.1 전기동차 현황 (용어 및 특징) ==========
  {
    id: 'vehicle_5_001',
    subject: 'urban',
    chapter: '차량일반',
    question: '다음 중 "간선형 전기동차"의 정의로 옳은 것은?',
    options: [
      '도시 내의 원활한 소통을 위해 건설된 철도',
      '도시와 도시 간 운행을 목적으로 시속 150km 이하로 주행하는 전기동차',
      '시속 200km 이상으로 주행하는 고속 열차',
      '화물 운송을 주 목적으로 하는 철도 차량'
    ],
    answer: 1,
    explanation: '간선형 전기동차란 도시와 도시 간의 운행을 목적으로 위생 설비 등의 편의 설비를 갖추고, 시속 150킬로미터 이하로 주행하는 전기동차를 말한다.',
    source: '도시철도시스템 일반 제5장 [1]'
  },
  {
    id: 'vehicle_5_002',
    subject: 'urban',
    chapter: '차량일반',
    question: '경사진 선로에 정차한 열차가 제동력을 상실했을 때, 중력에 의해 진행 방향과 반대되는 방향으로 움직이는 현상은?',
    options: [
      '슬립 (Slip)',
      '슬라이드 (Slide)',
      '롤백 (Roll Back)',
      '저크 (Jerk)'
    ],
    answer: 2,
    explanation: '롤백(Roll Back)이란 경사진 선로에 정차한 열차가 제동력을 상실했을 때, 중력에 의해 진행 방향과 반대되는 방향으로 움직이는 것을 말한다.',
    source: '도시철도시스템 일반 제5장 [1]'
  },
  {
    id: 'vehicle_5_003',
    subject: 'urban',
    chapter: '차량일반',
    question: '승객의 수(하중)에 따라 공기스프링의 압력 변화를 검출하여 제동력 또는 견인력을 조절하는 제어 방식은?',
    options: [
      '일괄 제어',
      '응하중 제어',
      '회생 제동 제어',
      '약계자 제어'
    ],
    answer: 1,
    explanation: '응하중 제어란 승객의 많고 적음을 대차에 설치된 공기스프링의 압력 변화 등으로 검출하여 제동력 또는 견인력에 반영하는 제어 방법을 말한다.',
    source: '도시철도시스템 일반 제5장 [2]'
  },
  {
    id: 'vehicle_5_004',
    subject: 'urban',
    chapter: '차량일반',
    question: '전기동차의 특징인 "동력 분산 방식"의 장점이 아닌 것은?',
    options: [
      '축당 중량 분배가 가능하여 경량화가 수월하다.',
      '일부 구동차 고장 시에도 자력 운행이 가능하다.',
      '객실 공간 확보가 용이하다.',
      '동력 집중식에 비해 소음과 진동이 매우 크다.'
    ],
    answer: 3,
    explanation: '전기동차는 견인전동기의 구동으로 동력이 발생하는 만큼 저소음, 저진동 운행이 가능한 친환경적인 교통수단이다.',
    source: '도시철도시스템 일반 제5장 [3], [4]'
  },
  {
    id: 'vehicle_5_005',
    subject: 'urban',
    chapter: '차량일반',
    question: '전기동차의 주요 장치에 적용된 설계 개념으로, 고장 시 안전 측(Safe)으로 작동하도록 하는 원칙은?',
    options: [
      'Fail Safe',
      'Fail Soft',
      'Back-up',
      'Fool Proof'
    ],
    answer: 0,
    explanation: '전기동차의 주요 장치는 고장 시 안전 측으로 작동한다는 페일세이프(Fail Safe) 개념을 적용하여 안전성이 높다.',
    source: '도시철도시스템 일반 제5장 [4]'
  },

  // ========== 5.2 전기동차 일반 (분류 및 제어 방식) ==========
  {
    id: 'vehicle_5_006',
    subject: 'urban',
    chapter: '차량일반',
    question: '서울 지하철 1호선과 4호선(과천/안산선) 처럼 직류와 교류 구간을 모두 운행할 수 있는 차량은?',
    options: [
      '직류 전기동차',
      '교류 전기동차',
      '교직류 전기동차',
      '디젤 동차'
    ],
    answer: 2,
    explanation: '교직류 전기동차는 AC25kV와 DC1,500V 모두 운행할 수 있도록 교직절환장치 등을 장착하고 있다.',
    source: '도시철도시스템 일반 제5장 [5]'
  },
  {
    id: 'vehicle_5_007',
    subject: 'urban',
    chapter: '차량일반',
    question: '저항제어 전기동차의 속도 제어 방법이 아닌 것은?',
    options: [
      '주파수 가변 제어',
      '저항 제어',
      '직병렬 제어',
      '약계자 제어'
    ],
    answer: 0,
    explanation: '주파수 가변 제어(VVVF)는 유도전동기를 사용하는 VVVF 인버터 제어 차량의 방식이다. 저항차는 저항, 직병렬, 약계자 제어를 사용한다.',
    source: '도시철도시스템 일반 제5장 [6]'
  },
  {
    id: 'vehicle_5_008',
    subject: 'urban',
    chapter: '차량일반',
    question: '쵸퍼(Chopper) 제어 전기동차의 특징으로 틀린 것은?',
    options: [
      '직류 직권전동기를 사용한다.',
      '싸이리스터 스위칭 소자를 사용한다.',
      '회생 제동이 불가능하다.',
      '저항제어의 전력 낭비와 발열 문제를 개선했다.'
    ],
    answer: 2,
    explanation: '쵸퍼 제어차는 발전된 기전력을 가선 전압보다 높게 승압시켜 가선으로 되돌리는 회생제동을 채택하여 에너지 소비를 절감한다.',
    source: '도시철도시스템 일반 제5장 [7]'
  },
  {
    id: 'vehicle_5_009',
    subject: 'urban',
    chapter: '차량일반',
    question: 'VVVF 인버터 제어 전기동차에 주로 사용되는 전동기 형식은?',
    options: [
      '직류 직권전동기',
      '직류 분권전동기',
      '3상 농형 유도전동기',
      '단상 유도전동기'
    ],
    answer: 2,
    explanation: '최근 제작되는 전기동차의 대부분은 3상 농형 유도전동기를 사용하며, VVVF 인버터로 속도를 제어한다.',
    source: '도시철도시스템 일반 제5장 [8]'
  },
  {
    id: 'vehicle_5_010',
    subject: 'urban',
    chapter: '차량일반',
    question: 'VVVF 제어 방식의 의미로 옳은 것은?',
    options: [
      '가변 전압 가변 전류 제어',
      '가변 전압 가변 주파수 제어',
      '가변 저항 가변 전압 제어',
      '정전압 정주파수 제어'
    ],
    answer: 1,
    explanation: 'VVVF는 Variable Voltage Variable Frequency의 약자로, 전압과 주파수를 동시에 변화시켜 속도를 제어하는 방식이다.',
    source: '도시철도시스템 일반 제5장 [9]'
  },
  {
    id: 'vehicle_5_011',
    subject: 'urban',
    chapter: '차량일반',
    question: '일반형 VVVF 인버터 제어 전기동차의 성능 기준으로 일반적인 가속도는?',
    options: [
      '2.0 km/h/s',
      '2.5 km/h/s',
      '3.0 km/h/s',
      '3.5 km/h/s'
    ],
    answer: 2,
    explanation: '일반형 VVVF 인버터 제어차의 가속도는 3.0km/h/s이다. (저항제어차는 2.5km/h/s)',
    source: '도시철도시스템 일반 제5장 [10]'
  },
  {
    id: 'vehicle_5_012',
    subject: 'urban',
    chapter: '차량일반',
    question: 'VVVF 전기동차의 일반적인 기어비(치차비)는?',
    options: [
      '1 : 5.80',
      '1 : 6.53',
      '1 : 7.07',
      '1 : 4.13'
    ],
    answer: 2,
    explanation: 'VVVF 인버터 제어차의 치차비는 14:99 = 1:7.07 이다. (저항차 1:5.80, 쵸퍼차 1:6.53)',
    source: '도시철도시스템 일반 제5장 [11]'
  },
  {
    id: 'vehicle_5_013',
    subject: 'urban',
    chapter: '차량일반',
    question: '경량 전철(Light Rail)의 차량 최대 설계 축중 기준은?',
    options: [
      '10.0톤 이하',
      '13.5톤 이하',
      '16.0톤 이하',
      '20.0톤 이하'
    ],
    answer: 1,
    explanation: '도시철도건설규칙에서 경량 전철은 차량 최대 설계 축중 13.5톤 이하의 전기철도를 말한다.',
    source: '도시철도시스템 일반 제5장 [12]'
  },
  {
    id: 'vehicle_5_014',
    subject: 'urban',
    chapter: '차량일반',
    question: '다음 경량 전철 시스템 중 "용인경전철"이 채택한 방식은?',
    options: [
      '고무 차륜 AGT',
      '철제 차륜 AGT',
      '모노레일',
      '선형 유도전동기(LIM)'
    ],
    answer: 3,
    explanation: '용인경전철은 선형 유도전동기(LIM) 형식을 사용한다. (부산4호선: 고무차륜, 인천2호선: 철제차륜, 대구3호선: 모노레일)',
    source: '도시철도시스템 일반 제5장 [13]'
  },
  {
    id: 'vehicle_5_015',
    subject: 'urban',
    chapter: '차량일반',
    question: '인천공항 자기부상열차의 궤간은?',
    options: [
      '1,067mm',
      '1,435mm',
      '1,700mm',
      '1,850mm'
    ],
    answer: 3,
    explanation: '인천공항 자기부상열차의 궤간은 1,850mm이다.',
    source: '도시철도시스템 일반 제5장 [13]'
  },
  {
    id: 'vehicle_5_016',
    subject: 'urban',
    chapter: '차량일반',
    question: '차량 위치 칭호에서 차량의 앞쪽을 기준으로 왼쪽과 오른쪽의 구분으로 옳은 것은?',
    options: [
      '운전실에서 객실을 바라보고 좌우',
      '차량 밖에서 차량을 바라보고 좌우',
      '차량의 앞쪽(운전실 등)에서 뒤쪽을 향해 바라보고 좌우',
      '차량의 뒤쪽에서 앞쪽을 향해 바라보고 좌우'
    ],
    answer: 2,
    explanation: '차량의 앞쪽에서 뒤쪽으로 바라보고 좌측을 "왼쪽", 우측을 "오른쪽"이라 칭한다.',
    source: '도시철도시스템 일반 제5장 [14], [15]'
  },
  {
    id: 'vehicle_5_017',
    subject: 'urban',
    chapter: '차량일반',
    question: '차량 각 부의 위치 칭호에서 "왼쪽"에 부여되는 번호는?',
    options: [
      '홀수 (1, 3, 5...)',
      '짝수 (2, 4, 6...)',
      '알파벳 (A, B, C...)',
      '음수 (-1, -2...)'
    ],
    answer: 1,
    explanation: '차량의 앞쪽을 기준으로 오른쪽 기기는 홀수, 왼쪽 기기는 짝수 번호를 부여한다.',
    source: '도시철도시스템 일반 제5장 [14]'
  },

  // ========== 5.3 전기동차 구성 (기기 및 장치) ==========
  {
    id: 'vehicle_5_018',
    subject: 'urban',
    chapter: '차량일반',
    question: '전기동차의 차종 중 운전실이 있고 동력이 없는 제어차를 나타내는 약호는?',
    options: [
      'M (Motor Car)',
      'T (Trailer Car)',
      'Tc (Train Control)',
      'Mc (Motor Control)'
    ],
    answer: 2,
    explanation: '운전실이 있는 제어 차량은 TC(Train Control)로 표기한다. (동력 구동차는 M, 부수차는 T)',
    source: '도시철도시스템 일반 제5장 [16]'
  },
  {
    id: 'vehicle_5_019',
    subject: 'urban',
    chapter: '차량일반',
    question: '일반형 전기동차(VVVF) 10칸 열차 편성(5M5T)의 구성 예시로 옳은 것은? (서울교통공사 기준)',
    options: [
      'Tc-M-M-T-M-T-T-M-M-Tc',
      'Tc-M-M-T1-M-T2-T1-M-M-Tc',
      'Tc-M-M-M-M-M-T-T-T-T',
      'Mc-T-T-M-M-T-T-M-M-Mc'
    ],
    answer: 1,
    explanation: '서울교통공사 10칸 편성은 Tc-M-M-T1-M-T2-T1-M-M-Tc 구성을 가진다.',
    source: '도시철도시스템 일반 제5장 [17]'
  },
  {
    id: 'vehicle_5_020',
    subject: 'urban',
    chapter: '차량일반',
    question: '교직류 전기동차에서 교류 구간 운전 중 회로 고장 시 과전류를 신속히 차단하는 주 보호 기기는?',
    options: [
      '팬터그래프 (Pan)',
      '주 차단기 (MCB)',
      '교직 절환기 (ADCg)',
      '필터 리액터 (FL)'
    ],
    answer: 1,
    explanation: '주 차단기(MCB)는 교류 구간에서 이상 발생 시 과전류를 신속하고 안전하게 차단하여 기기를 보호한다.',
    source: '도시철도시스템 일반 제5장 [18]'
  },
  {
    id: 'vehicle_5_021',
    subject: 'urban',
    chapter: '차량일반',
    question: '주 변압기를 보호할 목적으로 1차 측에 설치되며, 이상 전류 시 용손되어 회로를 끊는 기기는?',
    options: [
      '주 퓨즈 (Main Fuse)',
      '피뢰기 (Arrester)',
      '접지 브러시',
      '단로기'
    ],
    answer: 0,
    explanation: '주 퓨즈는 주 변압기 1차 측 회로에 이상 전류가 들어올 경우 용손되어 주 변압기를 보호한다.',
    source: '도시철도시스템 일반 제5장 [19]'
  },
  {
    id: 'vehicle_5_022',
    subject: 'urban',
    chapter: '차량일반',
    question: '비상 접지 스위치(EGS)의 역할로 옳은 것은?',
    options: [
      '차체 누설 전류를 방지한다.',
      '비상시 팬터그래프 회로를 접지시켜 전차선을 단락하고 변전소 차단기를 개방시킨다.',
      '낙뢰로부터 차량을 보호한다.',
      '교류와 직류를 절환한다.'
    ],
    answer: 1,
    explanation: '비상 접지 스위치는 비상시 팬터그래프 회로를 직접 접지시켜 전차선을 단락하고 전원 측(변전소) 차단기를 개로시킨다.',
    source: '도시철도시스템 일반 제5장 [19]'
  },
  {
    id: 'vehicle_5_023',
    subject: 'urban',
    chapter: '차량일반',
    question: '직류 피뢰기의 역할 중 틀린 것은?',
    options: [
      '직류 구간 운행 중 외부 써지를 흡수한다.',
      '교류 구간 모진 시 절연이 파괴된다.',
      '방전 전류를 검지하여 주 차단기를 차단시킨다.',
      '교류 25kV를 직류로 정류한다.'
    ],
    answer: 3,
    explanation: '교류를 직류로 정류하는 것은 컨버터 또는 정류기의 역할이다. 직류 피뢰기는 써지 흡수 및 모진 보호 역할을 한다.',
    source: '도시철도시스템 일반 제5장 [20]'
  },
  {
    id: 'vehicle_5_024',
    subject: 'urban',
    chapter: '차량일반',
    question: '귀환 전류의 통로로서 베어링의 전기적 부식을 방지하기 위해 설치하는 장치는?',
    options: [
      '접지 브러시',
      '필터 리액터',
      '변류기',
      '계기용 변압기'
    ],
    answer: 0,
    explanation: '접지 브러시는 귀환 전류의 통로로서, 베어링의 전식(전기적 부식)을 방지하기 위하여 설치한다.',
    source: '도시철도시스템 일반 제5장 [20]'
  },
  {
    id: 'vehicle_5_025',
    subject: 'urban',
    chapter: '차량일반',
    question: 'SIV(정지형 인버터) 장치의 주된 기능은?',
    options: [
      '견인전동기의 속도를 제어한다.',
      '직류 전원을 3상 440V 교류로 변환하여 보조 전원을 공급한다.',
      '압축공기를 생산한다.',
      '제동력을 조절한다.'
    ],
    answer: 1,
    explanation: 'SIV는 고압 보조 회로의 직류 전원을 받아 3상 440V 60Hz 교류 전원으로 변환하여 냉난방, 조명 등에 공급한다.',
    source: '도시철도시스템 일반 제5장 [21]'
  },
  {
    id: 'vehicle_5_026',
    subject: 'urban',
    chapter: '차량일반',
    question: '열차 종합 정보 장치(TGIS/TCMS)의 기능에 해당하지 않는 것은?',
    options: [
      '고장 상태 표시 및 처치 안내',
      '차내 안내 표시기 및 방송 제어',
      '팬터그래프의 직접 기계적 구동',
      '주요 기기 동작 데이터 수집'
    ],
    answer: 2,
    explanation: 'TGIS는 정보를 수집, 기록, 표시, 제어 지령을 내리는 장치이며, 팬터그래프를 직접 기계적으로 구동하는 동력원은 아니다.',
    source: '도시철도시스템 일반 제5장 [22], [23]'
  },
  {
    id: 'vehicle_5_027',
    subject: 'urban',
    chapter: '차량일반',
    question: 'VVVF 전동차의 HRDA형 제동장치 특징으로 옳은 것은?',
    options: [
      '순수 공기제동만 사용한다.',
      '발전제동과 공기제동을 병용한다.',
      '회생제동과 공기제동을 일괄 교차 제어(Cross Blending)한다.',
      '전자직통제동 방식을 사용한다.'
    ],
    answer: 2,
    explanation: 'HRDA형 제동장치는 회생제동과 공기제동을 병용하는 일괄 교차 연산식을 채택하고 있다.',
    source: '도시철도시스템 일반 제5장 [24]'
  },
  {
    id: 'vehicle_5_028',
    subject: 'urban',
    chapter: '차량일반',
    question: '다음 중 비상제동이 체결되는 조건이 아닌 것은?',
    options: [
      '제동핸들 비상 위치 시',
      '운전실 비상제동 스위치 작동 시',
      '주 공기압력이 설정치 이하로 낮을 경우',
      '출입문이 모두 닫혔을 경우'
    ],
    answer: 3,
    explanation: '출입문이 모두 닫히는 것은 정상 운행 조건이다. 열차 분리, ATS/ATC 비상 지령, 공기압 부족 등이 비상제동 조건이다.',
    source: '도시철도시스템 일반 제5장 [25]'
  },
  {
    id: 'vehicle_5_029',
    subject: 'urban',
    chapter: '차량일반',
    question: '상용제동과 비상제동이 모두 고장 났을 때 사용하는 제동은?',
    options: [
      '회생제동',
      '주차제동',
      '보안제동',
      '정차제동'
    ],
    answer: 2,
    explanation: '보안제동은 상용 및 비상제동 고장 시에 사용하며, 전후부 운전실 어디서든 취급 가능하다.',
    source: '도시철도시스템 일반 제5장 [25]'
  },
  {
    id: 'vehicle_5_030',
    subject: 'urban',
    chapter: '차량일반',
    question: '차내에 압축공기가 없을 때 스프링 힘으로 제동을 체결하여 구름을 방지하는 제동은?',
    options: [
      '상용제동',
      '보안제동',
      '주차제동',
      '발전제동'
    ],
    answer: 2,
    explanation: '주차제동은 차내 압축공기가 없을 때 필요한 제동으로, 공기 완해 스프링 제동 방식을 사용한다.',
    source: '도시철도시스템 일반 제5장 [25]'
  },
  {
    id: 'vehicle_5_031',
    subject: 'urban',
    chapter: '차량일반',
    question: '경사 선로에서 정차 후 출발 시 뒤로 밀리는 것을 방지하기 위해 사용하는 제동은?',
    options: [
      '비상제동',
      '정차제동',
      '보안제동',
      '회생제동'
    ],
    answer: 1,
    explanation: '정차제동은 경사진 선로에서 정차 후 출발할 때 전동(밀림) 방지를 위해 사용하며 추진 회로와 연동된다.',
    source: '도시철도시스템 일반 제5장 [26]'
  },

  // ========== 5.4 유지 관리 (검사 및 주기) ==========
  {
    id: 'vehicle_5_032',
    subject: 'urban',
    chapter: '차량일반',
    question: '전기동차의 유지 관리 업무에 포함되지 않는 것은?',
    options: [
      '기능 상태 점검',
      '부품 교체',
      '성능 확보를 위한 정비',
      '신규 노선 건설'
    ],
    answer: 3,
    explanation: '유지 관리는 차량의 정상적인 기능을 확보하고 보전하기 위해 시행하는 점검, 정비, 수리 등을 말하며 건설은 포함되지 않는다.',
    source: '도시철도시스템 일반 제5장 [1], [27]'
  },
  {
    id: 'vehicle_5_033',
    subject: 'urban',
    chapter: '차량일반',
    question: '전동차의 단위 기기에 대한 상태 점검, 소모품 교환 등 경미한 검사를 통칭하는 용어는?',
    options: [
      '경정비',
      '중정비',
      '임시검사',
      '특별검사'
    ],
    answer: 0,
    explanation: '경정비는 전동차의 상태를 정상적으로 유지하기 위해 시행하는 검사로 일상검사, 월상검사 등이 포함된다.',
    source: '도시철도시스템 일반 제5장 [28]'
  },
  {
    id: 'vehicle_5_034',
    subject: 'urban',
    chapter: '차량일반',
    question: '주공장에 입창하여 주요 부품을 분해, 정비, 시험하는 검사는?',
    options: [
      '일상 검사',
      '월상 검사',
      '중정비',
      '도착 점검'
    ],
    answer: 2,
    explanation: '중정비는 전동차의 기능을 최적 상태로 복원하기 위해 주공장에서 시행하는 분해 정비 검사이다.',
    source: '도시철도시스템 일반 제5장 [28]'
  },
  {
    id: 'vehicle_5_035',
    subject: 'urban',
    chapter: '차량일반',
    question: '다음 중 "정기 검사"에 해당하지 않는 것은?',
    options: [
      '일상 검사',
      '월상 검사',
      '전반 검사',
      '임시 검사'
    ],
    answer: 3,
    explanation: '임시 검사는 전동차의 이상 상태 발생 시 시행하는 비정기 검사에 해당한다.',
    source: '도시철도시스템 일반 제5장 [29], [30]'
  },
  {
    id: 'vehicle_5_036',
    subject: 'urban',
    chapter: '차량일반',
    question: '차륜 바깥지름이 교환 한도에 도달하여 시행하는 비정기 검사는?',
    options: [
      '특별 검사',
      '인수 검사',
      '차륜 교환 검사',
      '중간 검사'
    ],
    answer: 2,
    explanation: '차륜 교환 검사는 차륜 삭정 한도 도달 또는 파손 시 차륜을 교환하기 위해 시행하는 검사이다.',
    source: '도시철도시스템 일반 제5장 [30]'
  },
  {
    id: 'vehicle_5_037',
    subject: 'urban',
    chapter: '차량일반',
    question: '서울교통공사 VVVF 차량 기준으로 "전반 검사"의 주기는?',
    options: [
      '2년 또는 40만km',
      '3년 또는 50만km',
      '4년 또는 80만km',
      '6년 또는 100만km'
    ],
    answer: 3,
    explanation: '서울교통공사 전동차 관리 규정에 따르면 VVVF 차량의 전반 검사 주기는 6년 또는 1,000,000km이다.',
    source: '도시철도시스템 일반 제5장 [31]'
  },
  {
    id: 'vehicle_5_038',
    subject: 'urban',
    chapter: '차량일반',
    question: '서울교통공사 VVVF 차량의 "월상 검사" 주기는?',
    options: [
      '1개월',
      '2개월',
      '3개월',
      '4개월'
    ],
    answer: 2,
    explanation: '서울교통공사 VVVF 차량의 월상 검사 주기는 3개월이다. (1~4호선 비VVVF 차량은 2개월)',
    source: '도시철도시스템 일반 제5장 [31]'
  },
  {
    id: 'vehicle_5_039',
    subject: 'urban',
    chapter: '차량일반',
    question: '전기동차 구조상 특징으로 틀린 것은?',
    options: [
      '대부분 전기장치로 구성되어 기계적 마모가 적다.',
      '주요 장치는 유닛화되어 있다.',
      '고장 원인이 단순하여 규명이 매우 쉽다.',
      '주요 부품은 밀봉 상태를 유지한다.'
    ],
    answer: 2,
    explanation: '전기동차는 다양하고 복잡한 정밀 부품을 사용하기 때문에 고장 원인이 복잡하여 원인을 규명하기가 곤란한 경우가 많다.',
    source: '도시철도시스템 일반 제5장 [27], [32]'
  },
  {
    id: 'vehicle_5_040',
    subject: 'urban',
    chapter: '차량일반',
    question: 'Tc차 옥상에 설치되는 주요 기기는?',
    options: [
      '팬터그래프',
      '주 차단기',
      '열차 무선전화기용 안테나',
      '주 변압기'
    ],
    answer: 2,
    explanation: 'TC차에는 열차 무선전화기용 안테나가 설치되어 있고, 팬터그래프나 고압 기기는 주로 M\'차에 설치된다.',
    source: '도시철도시스템 일반 제5장 [33]'
  },

  // ========== 추가 혼합 문제 (수치 및 상세) ==========
  {
    id: 'vehicle_5_041',
    subject: 'urban',
    chapter: '차량일반',
    question: '저항제어 전기동차의 상용 감속도는?',
    options: [
      '3.0 km/h/s',
      '3.5 km/h/s',
      '4.0 km/h/s',
      '4.5 km/h/s'
    ],
    answer: 0,
    explanation: '저항 제어차의 상용 감속도는 3.0km/h/s이다. (VVVF차는 3.5km/h/s)',
    source: '도시철도시스템 일반 제5장 [10]'
  },
  {
    id: 'vehicle_5_042',
    subject: 'urban',
    chapter: '차량일반',
    question: 'ITX-청춘(준고속형 전기동차)의 최고 속도는?',
    options: [
      '110 km/h',
      '150 km/h',
      '180 km/h',
      '300 km/h'
    ],
    answer: 2,
    explanation: '준고속형 전기동차(ITX-청춘)의 최고 속도는 180km/h이다.',
    source: '도시철도시스템 일반 제5장 [34]'
  },
  {
    id: 'vehicle_5_043',
    subject: 'urban',
    chapter: '차량일반',
    question: '중량(Heavy) 전철 대형 전동차의 차체 길이 기준은?',
    options: [
      '15,500mm 이상',
      '17,500mm 이상',
      '19,500mm 이상',
      '23,500mm 이상'
    ],
    answer: 2,
    explanation: '중량 전철(대형 전동차)은 차체 길이 19,500mm 이상이다.',
    source: '도시철도시스템 일반 제5장 [35]'
  },
  {
    id: 'vehicle_5_044',
    subject: 'urban',
    chapter: '차량일반',
    question: '부산 4호선 경전철의 전기 방식은?',
    options: [
      'DC 1,500V',
      'DC 750V',
      'AC 25kV',
      '수소연료'
    ],
    answer: 1,
    explanation: '부산 4호선(고무차륜 AGT)은 DC 750V 방식을 사용한다.',
    source: '도시철도시스템 일반 제5장 [13]'
  },
  {
    id: 'vehicle_5_045',
    subject: 'urban',
    chapter: '차량일반',
    question: '교류 구간에서 전차선으로부터 공급받는 전압은?',
    options: [
      'AC 25,000V',
      'DC 1,500V',
      'DC 750V',
      'AC 380V'
    ],
    answer: 0,
    explanation: '교류 구간의 전차선 전원은 AC 25kV (25,000V)이다.',
    source: '도시철도시스템 일반 제5장 [5]'
  },
  {
    id: 'vehicle_5_046',
    subject: 'urban',
    chapter: '차량일반',
    question: '차량 번호 1317호는 편성 내 몇 번째 차량인가? (0호차부터 시작 시)',
    options: [
      '1번째',
      '3번째',
      '4번째',
      '7번째'
    ],
    answer: 2,
    explanation: '1000단위 차량번호에서 백의 자리가 호차를 의미한다. 3xx호는 0호차부터 시작할 때 4번째 차량이다(0, 1, 2, 3).',
    source: '도시철도시스템 일반 제5장 [36]'
  },
  {
    id: 'vehicle_5_047',
    subject: 'urban',
    chapter: '차량일반',
    question: 'TGIS의 구성 요소 중 각 차량에 설치되어 기기 상태를 감시하고 제어하는 장치는?',
    options: [
      '중앙장치',
      '단말장치',
      '표시장치',
      '기록장치'
    ],
    answer: 1,
    explanation: '단말장치는 각 차량에 설치되어 기기의 상태를 감시하고 제어한다.',
    source: '도시철도시스템 일반 제5장 [23]'
  },
  {
    id: 'vehicle_5_048',
    subject: 'urban',
    chapter: '차량일반',
    question: '저항제어 전기동차에서 발전제동 시 발생하는 역회전력을 얻기 위해 견인전동기를 무엇으로 전환시키는가?',
    options: [
      '유도전동기',
      '동기발전기',
      '직류 직권발전기',
      '변압기'
    ],
    answer: 2,
    explanation: '발전제동은 직류 직권전동기를 직류 직권발전기로 전환시켜 운동에너지를 전기에너지로 변환한다.',
    source: '도시철도시스템 일반 제5장 [6]'
  },
  {
    id: 'vehicle_5_049',
    subject: 'urban',
    chapter: '차량일반',
    question: '공기압축기(CM)의 구동 방식 중 소음을 줄이기 위해 오일과 공기를 혼합 압축하는 방식은?',
    options: [
      '왕복동식',
      '스크류(Screw) 식',
      '터보 식',
      '베인 식'
    ],
    answer: 1,
    explanation: '압축 소음을 줄이기 위해 오일과 공기를 혼합하여 압축하는 방식은 스크류 방식이다.',
    source: '도시철도시스템 일반 제5장 [22]'
  },
  {
    id: 'vehicle_5_050',
    subject: 'urban',
    chapter: '차량일반',
    question: '전기동차의 1개 열차 편성을 구성하는 최소 단위로, 운전 제어와 동력 기능을 가진 묶음을 무엇이라 하는가?',
    options: [
      '대차 (Bogie)',
      '유닛 (UNIT)',
      '차체 (Body)',
      '모듈 (Module)'
    ],
    answer: 1,
    explanation: '열차 기능을 가진 최소 구성단위를 UNIT라 하며, 운전 제어 차량과 동력 차량 등으로 이루어진다.',
    source: '도시철도시스템 일반 제5장 [37]'
  },
   // ==========================================
  // Part 1. 5.1 현황 및 5.2 일반 (용어, 분류, 제원)
  // ==========================================
  {
    id: 'vehicle_5_step2_001',
    subject: 'urban',
    chapter: '차량일반',
    question: '도시철도 용어 중 "준(準)고속형 전기동차"의 정의로 옳은 것은?',
    options: [
      '시속 150킬로미터 이하로 주행하는 전기동차',
      '시속 151킬로미터 이상 200킬로미터 미만으로 주행하는 전기동차',
      '시속 200킬로미터 이상 300킬로미터 미만으로 주행하는 전기동차',
      '시속 300킬로미터 이상으로 주행하는 전기동차'
    ],
    answer: 1,
    explanation: '준고속형 전기동차란 위생 설비 등의 편의 설비를 갖추고 시속 151km 이상 200km 미만으로 주행하는 전기동차를 말한다.',
    source: '도시철도시스템 일반 제5장 [1]'
  },
  {
    id: 'vehicle_5_step2_002',
    subject: 'urban',
    chapter: '차량일반',
    question: '제동 시 구동차와 부수차를 단위별로 묶어 전기제동을 최대한 사용하고 부족분을 공기제동으로 보충하는 제어 방식은?',
    options: [
      '응하중 제어',
      '일괄 교차 제어',
      '활주 방지 제어',
      '저크 제어'
    ],
    answer: 1,
    explanation: '일괄 교차 제어(Cross Blending)란 전기제동(회생제동)을 우선 사용하고 부족한 제동력을 공기제동으로 보충하는 방식을 말한다.',
    source: '도시철도시스템 일반 제5장 [2]'
  },
  {
    id: 'vehicle_5_step2_003',
    subject: 'urban',
    chapter: '차량일반',
    question: '차량의 "축중"에 대한 정의로 옳은 것은?',
    options: [
      '차량 전체의 중량을 차축 수로 나눈 값',
      '수평 상태에서 1개 차축에 연결된 차륜에 가해지는 중량의 합',
      '승객이 만차일 때의 차량 총중량',
      '차체만의 중량'
    ],
    answer: 1,
    explanation: '축중이란 수평 상태에서 1개 차축에 연결된 차륜에 가해지는 중량의 합을 말한다.',
    source: '도시철도시스템 일반 제5장 [1]'
  },
  {
    id: 'vehicle_5_step2_004',
    subject: 'urban',
    chapter: '차량일반',
    question: '직류 직권전동기의 회전수 특성에 대한 설명으로 옳은 것은?',
    options: [
      '단자전압에 반비례하고 전류에 비례한다.',
      '단자전압에 비례하고 전류(자속 수)에 반비례한다.',
      '주파수에 비례한다.',
      '전압과 무관하게 일정하다.'
    ],
    answer: 1,
    explanation: '직류 직권전동기의 회전수는 단자전압에 비례하고 자속 수(전류)에 반비례하는 특성이 있다.',
    source: '도시철도시스템 일반 제5장 [3]'
  },
  {
    id: 'vehicle_5_step2_005',
    subject: 'urban',
    chapter: '차량일반',
    question: 'VVVF 인버터 제어 차량에서 사용하는 3상 유도전동기의 장점이 아닌 것은?',
    options: [
      '정류자와 브러시가 없어 유지 보수가 용이하다.',
      '소형 경량화가 가능하다.',
      '직류 전동기에 비해 구조가 단순하다.',
      '회전수 제어를 위해 반드시 저항기가 필요하다.'
    ],
    answer: 3,
    explanation: '유도전동기는 인버터를 통해 전압과 주파수를 변화시켜 속도를 제어하므로 저항기가 필요 없다.',
    source: '도시철도시스템 일반 제5장 [4]'
  },
  {
    id: 'vehicle_5_step2_006',
    subject: 'urban',
    chapter: '차량일반',
    question: 'VVVF 제어 방식에서 "VVVF"가 의미하는 것은?',
    options: [
      'Variable Voltage Variable Frequency',
      'Variable Velocity Variable Force',
      'Variable Voltage Variable Force',
      'Variable Velocity Variable Frequency'
    ],
    answer: 0,
    explanation: 'VVVF는 가변 전압 가변 주파수(Variable Voltage Variable Frequency) 제어를 의미한다.',
    source: '도시철도시스템 일반 제5장 [5]'
  },
  {
    id: 'vehicle_5_step2_007',
    subject: 'urban',
    chapter: '차량일반',
    question: '일반형 전기동차(VVVF 제어차)의 상용 감속도와 비상 감속도 기준은?',
    options: [
      '상용 3.0km/h/s, 비상 4.0km/h/s',
      '상용 3.5km/h/s, 비상 4.5km/h/s',
      '상용 3.0km/h/s, 비상 3.5km/h/s',
      '상용 4.0km/h/s, 비상 5.0km/h/s'
    ],
    answer: 1,
    explanation: 'VVVF 제어차의 성능 기준은 상용 감속도 3.5km/h/s, 비상 감속도 4.5km/h/s이다. (저항차는 3.0 / 4.0)',
    source: '도시철도시스템 일반 제5장 [6]'
  },
  {
    id: 'vehicle_5_step2_008',
    subject: 'urban',
    chapter: '차량일반',
    question: '중량(Heavy) 전철 대형 전동차의 차체 폭 기준은?',
    options: [
      '2,750mm 이상',
      '2,980mm 이상',
      '3,120mm 이상',
      '3,400mm 이상'
    ],
    answer: 2,
    explanation: '중량(重輛) 전철은 차체 길이 19,500mm 이상, 차체 폭 3,120mm 이상인 대형 전동차를 말한다.',
    source: '도시철도시스템 일반 제5장 [7]'
  },
  {
    id: 'vehicle_5_step2_009',
    subject: 'urban',
    chapter: '차량일반',
    question: '경량 전철 중 "선형 유도전동기(LIM)" 형식을 사용하는 노선은?',
    options: [
      '부산 4호선',
      '대구 3호선',
      '용인 경전철',
      '인천 2호선'
    ],
    answer: 2,
    explanation: '용인 경전철은 선형 유도전동기(LIM) 형식을 사용한다. (부산 4호선: 고무차륜, 대구 3호선: 모노레일)',
    source: '도시철도시스템 일반 제5장 [8]'
  },
  {
    id: 'vehicle_5_step2_010',
    subject: 'urban',
    chapter: '차량일반',
    question: '대구 3호선 모노레일 차량의 궤간은?',
    options: [
      '850mm',
      '1,000mm',
      '1,435mm',
      '1,700mm'
    ],
    answer: 0,
    explanation: '대구 3호선 모노레일의 궤간(빔 폭)은 850mm이다.',
    source: '도시철도시스템 일반 제5장 [8]'
  },
  {
    id: 'vehicle_5_step2_011',
    subject: 'urban',
    chapter: '차량일반',
    question: '경량 전철 시스템 중 "노면전차(트램)"의 최고 속도는 일반적으로 얼마인가?',
    options: [
      '40km/h',
      '60km/h',
      '80km/h',
      '100km/h'
    ],
    answer: 1,
    explanation: '표에 따르면 노면전차(트램)의 최고 속도는 60km/h이다.',
    source: '도시철도시스템 일반 제5장 [9]'
  },
  {
    id: 'vehicle_5_step2_012',
    subject: 'urban',
    chapter: '차량일반',
    question: '차량 번호 부여 시 TC+M+M\' 편성에서 0호차 방향을 기준으로 할 때, 가장 뒤쪽에 있는 차량은?',
    options: [
      '0호차',
      '1호차',
      '5호차',
      '9호차 (10량 편성 시)'
    ],
    answer: 3,
    explanation: '0호차 방향을 앞쪽으로 하고 1호차, 2호차... 순으로 부여하므로, 10량 편성 시 9호차가 가장 뒤쪽이다.',
    source: '도시철도시스템 일반 제5장 [10]'
  },
  {
    id: 'vehicle_5_step2_013',
    subject: 'urban',
    chapter: '차량일반',
    question: '차량 기기의 위치 칭호에서, 차량 앞쪽을 기준으로 "왼쪽"에 설치된 기기에 부여되는 번호는?',
    options: [
      '홀수 (1, 3, 5...)',
      '짝수 (2, 4, 6...)',
      '알파벳 순서',
      '랜덤 번호'
    ],
    answer: 1,
    explanation: '차량 앞쪽을 기준으로 오른쪽 기기는 홀수, 왼쪽 기기는 짝수 번호를 부여한다.',
    source: '도시철도시스템 일반 제5장 [11]'
  },
  {
    id: 'vehicle_5_step2_014',
    subject: 'urban',
    chapter: '차량일반',
    question: '차륜(Wheel)의 위치 호칭에서, 각 대차별로 "오른쪽"에 있는 차륜의 번호는?',
    options: [
      '1차륜, 3차륜',
      '2차륜, 4차륜',
      '1차륜, 2차륜',
      '3차륜, 4차륜'
    ],
    answer: 0,
    explanation: '각 대차별로 앞쪽을 보고 오른쪽은 1, 3차륜(홀수), 왼쪽은 2, 4차륜(짝수)으로 한다.',
    source: '도시철도시스템 일반 제5장 [11]'
  },
  {
    id: 'vehicle_5_step2_015',
    subject: 'urban',
    chapter: '차량일반',
    question: '일반형 VVVF 전기동차의 치차비(Gear Ratio)는?',
    options: [
      '1 : 5.80',
      '1 : 6.53',
      '1 : 7.07',
      '1 : 4.13'
    ],
    answer: 2,
    explanation: 'VVVF 인버터 제어차의 치차비는 14:99 = 1:7.07 이다. (저항차 1:5.80, 쵸퍼차 1:6.53)',
    source: '도시철도시스템 일반 제5장 [12]'
  },
  {
    id: 'vehicle_5_step2_016',
    subject: 'urban',
    chapter: '차량일반',
    question: '간선형 전기동차 ITX-새마을의 가속도 성능은?',
    options: [
      '2.0 km/h/s',
      '2.5 km/h/s',
      '3.0 km/h/s',
      '3.5 km/h/s'
    ],
    answer: 1,
    explanation: 'ITX-새마을(간선형)의 가속도는 2.5km/h/s이다. (ITX-청춘 2.0km/h/s)',
    source: '도시철도시스템 일반 제5장 [13]'
  },
  {
    id: 'vehicle_5_step2_017',
    subject: 'urban',
    chapter: '차량일반',
    question: '준고속형 전기동차(ITX-청춘)의 최고 속도는?',
    options: [
      '150 km/h',
      '180 km/h',
      '200 km/h',
      '250 km/h'
    ],
    answer: 1,
    explanation: 'ITX-청춘은 최고 속도 180km/h로 운행하는 준고속형 전기동차이다.',
    source: '도시철도시스템 일반 제5장 [13]'
  },
  {
    id: 'vehicle_5_step2_018',
    subject: 'urban',
    chapter: '차량일반',
    question: '경량 전철의 분류 기준인 "최대 설계 축중"은 얼마 이하인가?',
    options: [
      '10.0톤',
      '13.5톤',
      '15.0톤',
      '16.0톤'
    ],
    answer: 1,
    explanation: '경량 전철은 차량 최대 설계 축중 13.5톤 이하의 전기철도를 말한다.',
    source: '도시철도시스템 일반 제5장 [14]'
  },
  {
    id: 'vehicle_5_step2_019',
    subject: 'urban',
    chapter: '차량일반',
    question: '인천공항 자기부상열차의 부상 높이는 약 얼마인가?',
    options: [
      '8mm',
      '110mm',
      '150mm',
      '300mm'
    ],
    answer: 0,
    explanation: '도시형 자기부상열차(상전도 흡인식)는 약 8mm(8~10mm) 정도 부상하여 주행한다.',
    source: '도시철도시스템 일반 제5장 [15]'
  },
  {
    id: 'vehicle_5_step2_020',
    subject: 'urban',
    chapter: '차량일반',
    question: '중량(中輛) 전철(중형 전동차)의 1량당 승객 정원 기준은?',
    options: [
      '80~100명',
      '110~130명',
      '140~160명',
      '200명 이상'
    ],
    answer: 1,
    explanation: '중량(中輛) 전철은 승객 정원 110~130명/칸, 중량(重輛) 전철은 140~160명/칸이다.',
    source: '도시철도시스템 일반 제5장 [7]'
  },

  // ==========================================
  // Part 2. 5.3 구성 및 5.4 유지 관리 (장치, 정비)
  // ==========================================
  {
    id: 'vehicle_5_step2_021',
    subject: 'urban',
    chapter: '차량일반',
    question: '전기동차의 1개 열차 편성을 구성하는 최소 단위로, 운전 제어와 동력 기능을 가진 묶음을 무엇이라 하는가?',
    options: [
      '대차 (Bogie)',
      '유닛 (UNIT)',
      '모듈 (Module)',
      '세트 (Set)'
    ],
    answer: 1,
    explanation: '열차 기능을 가진 최소 구성단위를 UNIT라 하며, 운전 제어가 가능한 차량과 동력을 제공하는 차량으로 이루어진다.',
    source: '도시철도시스템 일반 제5장 [16]'
  },
  {
    id: 'vehicle_5_step2_022',
    subject: 'urban',
    chapter: '차량일반',
    question: '서울교통공사 VVVF 10칸 열차 편성(5M5T)에서 "T1" 차량의 특징은?',
    options: [
      '운전실이 있다.',
      '팬터그래프가 있다.',
      '보조 전원 장치(SIV)가 설치되어 있다.',
      '견인전동기가 있다.'
    ],
    answer: 2,
    explanation: 'T1 차량은 동력이 없는 부수차이지만 보조 전원 장치(SIV)와 공기압축기(CM) 등이 설치된 차량이다.',
    source: '도시철도시스템 일반 제5장 [17]'
  },
  {
    id: 'vehicle_5_step2_023',
    subject: 'urban',
    chapter: '차량일반',
    question: '일반형 전기동차 사양 한계에서, 표정속도는 최소 얼마 이상 확보되어야 하는가?',
    options: [
      '30km/h',
      '50km/h',
      '60km/h',
      '80km/h'
    ],
    answer: 1,
    explanation: '견인 장치는 열차의 표정속도 50km/h 이상을 확보해야 한다.',
    source: '도시철도시스템 일반 제5장 [18]'
  },
  {
    id: 'vehicle_5_step2_024',
    subject: 'urban',
    chapter: '차량일반',
    question: '승차감에 영향을 주는 최대 저크(Jerk, 가속도 변화율)의 한계 기준은?',
    options: [
      '0.5m/s³ 이하',
      '0.8m/s³ 이하',
      '1.0m/s³ 이하',
      '1.2m/s³ 이하'
    ],
    answer: 1,
    explanation: '최대 저크(Jerk)의 한계는 0.8m/s³ 이하이다.',
    source: '도시철도시스템 일반 제5장 [18]'
  },
  {
    id: 'vehicle_5_step2_025',
    subject: 'urban',
    chapter: '차량일반',
    question: '교직류 전기동차의 "주 차단기(MCB)"에 대한 설명으로 옳은 것은?',
    options: [
      '직류 구간에서는 차단기 역할을, 교류 구간에서는 개폐기 역할만 한다.',
      '교류 구간에서는 차단기와 개폐기 역할을 겸하고, 직류 구간에서는 개폐기 역할만 한다.',
      '교류와 직류를 변환하는 장치이다.',
      '전차선의 전압을 강압하는 장치이다.'
    ],
    answer: 1,
    explanation: 'MCB는 교류 구간에서 사고 시 차단기 역할을 수행하며, 직류 구간에서는 단순 개폐기 역할만 수행한다(직류 사고 차단은 HSCB 등이 담당).',
    source: '도시철도시스템 일반 제5장 [19]'
  },
  {
    id: 'vehicle_5_step2_026',
    subject: 'urban',
    chapter: '차량일반',
    question: '주 변압기(MT)의 1차 측 회로에 이상 전류가 흐를 때 용손(녹아서 끊어짐)되어 변압기를 보호하는 기기는?',
    options: [
      '주 퓨즈 (Main Fuse)',
      '비상 접지 스위치 (EGS)',
      '교류 피뢰기 (AC Arr)',
      '필터 리액터 (FL)'
    ],
    answer: 0,
    explanation: '주 퓨즈는 주 변압기 1차 측 회로의 과전류 보호용으로 설치된다.',
    source: '도시철도시스템 일반 제5장 [20]'
  },
  {
    id: 'vehicle_5_step2_027',
    subject: 'urban',
    chapter: '차량일반',
    question: '주 변압기(MT)는 교류 구간에서 AC 25kV를 받아 약 몇 V로 강압하여 컨버터에 공급하는가?',
    options: [
      'AC 380V',
      'AC 440V',
      'AC 840V',
      'DC 1,500V'
    ],
    answer: 2,
    explanation: '주 변압기는 교류 25kV를 840V × 2(또는 유사 전압)로 강압하여 주 변환기(컨버터)에 공급한다.',
    source: '도시철도시스템 일반 제5장 [21]'
  },
  {
    id: 'vehicle_5_step2_028',
    subject: 'urban',
    chapter: '차량일반',
    question: '직류 피뢰기의 기능 중 "교류 구간 모진" 시의 역할은?',
    options: [
      '교류를 직류로 변환한다.',
      '절연이 파괴되어 방전 전류를 흘림으로써 주 차단기를 차단시킨다.',
      '교류 전압을 승압한다.',
      '아무런 동작을 하지 않는다.'
    ],
    answer: 1,
    explanation: '직류 피뢰기는 교류 구간 모진(잘못 진입) 시 절연이 파괴되어 대지로 전류를 흘리고, 이를 변류기가 검지하여 MCB를 차단시킴으로써 회로를 보호한다.',
    source: '도시철도시스템 일반 제5장 [21]'
  },
  {
    id: 'vehicle_5_step2_029',
    subject: 'urban',
    chapter: '차량일반',
    question: '보조 전원 장치(SIV)가 출력하는 전원의 규격은?',
    options: [
      '직류 100V',
      '단상 교류 220V',
      '3상 교류 440V, 60Hz',
      '3상 교류 380V, 50Hz'
    ],
    answer: 2,
    explanation: 'SIV는 직류 전원을 받아 3상 AC 440V 60Hz로 변환하여 냉난방, 조명 등에 공급한다.',
    source: '도시철도시스템 일반 제5장 [22]'
  },
  {
    id: 'vehicle_5_step2_030',
    subject: 'urban',
    chapter: '차량일반',
    question: '공기압축기(CM) 중 소음을 줄이기 위해 오일과 공기를 혼합 압축하는 방식은?',
    options: [
      '왕복동식',
      '스크류(Screw) 식',
      '터보 식',
      '베인 식'
    ],
    answer: 1,
    explanation: '스크류 식 공기압축기는 소음 저감을 위해 오일과 공기를 혼합하여 압축하는 방식을 사용한다.',
    source: '도시철도시스템 일반 제5장 [23]'
  },
  {
    id: 'vehicle_5_step2_031',
    subject: 'urban',
    chapter: '차량일반',
    question: '열차 종합 정보 장치(TGIS)의 구성 요소 중 TC차 운전실에 설치되어 차량 상태를 시각적으로 보여주는 장치는?',
    options: [
      '중앙장치',
      '단말장치',
      '표시장치',
      '기록장치'
    ],
    answer: 2,
    explanation: 'TC차 운전실에 설치되어 기관사에게 차량 상태 정보를 현시하는 것은 표시장치(Monitor)이다.',
    source: '도시철도시스템 일반 제5장 [24]'
  },
  {
    id: 'vehicle_5_step2_032',
    subject: 'urban',
    chapter: '차량일반',
    question: 'HRDA형 제동장치의 특징인 "일괄 교차 제어(Cross Blending)"의 의미는?',
    options: [
      '전기제동과 공기제동을 50:50으로 사용한다.',
      '전기제동(회생제동)을 우선 최대로 사용하고 부족분을 공기제동으로 보충한다.',
      '공기제동을 우선 사용하고 부족분을 전기제동으로 보충한다.',
      '비상시에만 전기제동을 사용한다.'
    ],
    answer: 1,
    explanation: '일괄 교차 제어는 구동차의 회생제동력을 우선 최대한 사용하고, 부족한 제동력을 공기제동으로 보충하여 에너지 효율을 높이고 삭마를 줄이는 방식이다.',
    source: '도시철도시스템 일반 제5장 [25]'
  },
  {
    id: 'vehicle_5_step2_033',
    subject: 'urban',
    chapter: '차량일반',
    question: '비상제동 회로를 구성할 때 "상시 여자(Energized)" 방식을 사용하는 이유는?',
    options: [
      '전력 소모를 줄이기 위해',
      'Fail-Safe (선 절단 시 즉시 제동 체결)를 확보하기 위해',
      '제동 응답 속도를 늦추기 위해',
      '회생제동 효율을 높이기 위해'
    ],
    answer: 1,
    explanation: '상시 여자 방식은 회로가 단선되거나 전원이 차단되면 자력이 소실되어 즉시 비상제동이 체결되도록 하는 Fail-Safe 설계이다.',
    source: '도시철도시스템 일반 제5장 [25]'
  },
  {
    id: 'vehicle_5_step2_034',
    subject: 'urban',
    chapter: '차량일반',
    question: '경사진 선로에서 정차 후 출발 시 뒤로 밀리는 것을 방지하기 위한 제동은?',
    options: [
      '보안제동',
      '정차제동',
      '주차제동',
      '비상제동'
    ],
    answer: 1,
    explanation: '정차제동(Holding Brake)은 경사로 출발 시 차량 밀림(전동)을 방지하기 위해 추진 회로와 연동하여 사용한다.',
    source: '도시철도시스템 일반 제5장 [26]'
  },
  {
    id: 'vehicle_5_step2_035',
    subject: 'urban',
    chapter: '차량일반',
    question: '서울교통공사 전동차 관리 규정상 VVVF 차량의 "전반 검사" 주기는?',
    options: [
      '3년 또는 40만km',
      '4년 또는 80만km',
      '6년 또는 100만km',
      '8년 또는 120만km'
    ],
    answer: 2,
    explanation: '서울교통공사 VVVF 차량의 전반 검사 주기는 6년 또는 1,000,000km이다.',
    source: '도시철도시스템 일반 제5장 [27]'
  },
  {
    id: 'vehicle_5_step2_036',
    subject: 'urban',
    chapter: '차량일반',
    question: '서울교통공사 VVVF 차량의 "중간 검사" 주기는?',
    options: [
      '2년 또는 20만km',
      '3년 또는 50만km',
      '4년 또는 60만km',
      '6년 또는 80만km'
    ],
    answer: 1,
    explanation: '서울교통공사 VVVF 차량의 중간 검사 주기는 3년 또는 500,000km이다.',
    source: '도시철도시스템 일반 제5장 [27]'
  },
  {
    id: 'vehicle_5_step2_037',
    subject: 'urban',
    chapter: '차량일반',
    question: '비정기 검사 중 "임시 검사"의 정의는?',
    options: [
      '정해진 주기에 도달했을 때 시행하는 검사',
      '전동차의 이상 상태 발생 시 원상회복을 위해 시행하는 검사',
      '신규 도입 시 시행하는 검사',
      '차륜 교환을 위해 시행하는 검사'
    ],
    answer: 1,
    explanation: '임시 검사는 전동차의 이상 상태 발생 시 또는 이상 징후 감지 시 원상회복을 위해 시행하는 비정기 검사이다.',
    source: '도시철도시스템 일반 제5장 [28]'
  },
  {
    id: 'vehicle_5_step2_038',
    subject: 'urban',
    chapter: '차량일반',
    question: '전기동차 유지 관리(정비)의 종류 중 "경정비"에 해당하지 않는 것은?',
    options: [
      '일상 검사',
      '월상 검사',
      '중간 검사',
      '도착 점검'
    ],
    answer: 2,
    explanation: '중간 검사와 전반 검사는 주공장에서 시행하는 "중정비"에 해당한다. 일상, 월상 검사는 경정비이다.',
    source: '도시철도시스템 일반 제5장 [29]'
  },
  {
    id: 'vehicle_5_step2_039',
    subject: 'urban',
    chapter: '차량일반',
    question: '한국철도공사(코레일)의 2009년 이후 도입 차량의 "중정비" 주기는?',
    options: [
      '4년 / 540,000km',
      '6년 / 600,000km',
      '8년 / 1,440,000km',
      '10년 / 1,000,000km'
    ],
    answer: 2,
    explanation: '표에 따르면 한국철도공사의 2009년도 이후 도입 차량 중정비 주기는 1,440,000km 또는 8년이다.',
    source: '도시철도시스템 일반 제5장 [30]'
  },
  {
    id: 'vehicle_5_step2_040',
    subject: 'urban',
    chapter: '차량일반',
    question: '차륜의 바깥지름이 한도에 도달하거나 균열 등으로 교환이 필요할 때 시행하는 검사는?',
    options: [
      '특별 검사',
      '인수 검사',
      '차륜 교환 검사',
      '임시 정비'
    ],
    answer: 2,
    explanation: '차륜 교환 검사(NWC)는 차륜의 삭정 한도 도달이나 파손 시 차륜을 교환하기 위해 시행한다.',
    source: '도시철도시스템 일반 제5장 [28]'
  },
  