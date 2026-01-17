/**
 * 도시철도시스템 - 8단원 문제
 */
var QUESTIONS_URBAN_CH8 = [
    // 여기에 8단원 문제 추가
    // 8.1.1 개론 및 용어 정의
{
  id: 'civil_8_001',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도 건설 규칙상 "궤간"을 측정하는 기준 위치는 레일 윗면으로부터 몇 mm 아래 지점인가?',
  options: ['10mm', '12mm', '13mm', '14mm'],
  answer: 3,
  explanation: '궤간이란 양쪽 레일 안쪽 간의 거리 중 가장 짧은 거리를 말하며, 레일의 윗면으로부터 14mm 아래 지점을 기준으로 한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'civil_8_002',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량이 곡선 구간을 원활하게 운행할 수 있도록 안쪽 레일을 기준으로 바깥쪽 레일을 높게 부설하는 것은?',
  options: ['슬랙(Slack)', '캔트(Cant)', '궤간 확대', '유간'],
  answer: 1,
  explanation: '캔트(Cant)란 차량이 곡선 구간을 원활하게 운행할 수 있도록 안쪽 레일을 기준으로 바깥쪽 레일을 높게 부설하는 것을 말한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'civil_8_003',
  subject: 'urban',
  chapter: '토목일반',
  question: '정거장의 분류 중 열차의 교행 또는 대피를 위하여 설치한 장소는?',
  options: ['역', '조차장', '신호장', '신호소'],
  answer: 2,
  explanation: '신호장이란 열차의 교행 또는 대피를 위하여 설치한 장소를 말한다. (조차장: 조성/입환, 신호소: 교행시설 없이 신호만 취급)',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'civil_8_004',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량이 곡선 구간의 선로를 원활하게 통과하도록 바깥쪽 레일을 기준으로 궤간을 넓히는 것은?',
  options: ['캔트', '슬랙(확대 궤간)', '완화 곡선', '종곡선'],
  answer: 1,
  explanation: '슬랙(Slack, 확대 궤간)이란 차량이 곡선 구간의 선로를 원활하게 통과하도록 바깥쪽 레일을 기준으로 궤간을 넓히는 것을 말한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'civil_8_005',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량이 안전하게 운행될 수 있도록 궤도 위에 설정한 일정한 공간을 무엇이라 하는가?',
  options: ['차량 한계', '건축 한계', '운행 한계', '시설 한계'],
  answer: 1,
  explanation: '건축 한계란 차량이 안전하게 운행될 수 있도록 궤도 위에 설정한 일정한 공간을 말한다.',
  source: '도시철도 8장 8.1.1.1'
},

// 8.1.1.2 선로의 구조
{
  id: 'civil_8_006',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도 지하 구간의 건축 한계(폭×높이) 기준은?',
  options: ['3,200×4,750mm', '3,400×4,750mm', '3,600×5,150mm', '3,800×5,500mm'],
  answer: 2,
  explanation: '선로 구조 기준표에 따르면 지하 구간의 건축 한계는 3,600×5,150mm이다.',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_007',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도 차량 한계(폭×높이) 기준은?',
  options: ['3,200×4,750mm', '3,600×5,150mm', '3,400×4,500mm', '2,900×4,000mm'],
  answer: 0,
  explanation: '차량 한계는 3,200×4,750mm이다.',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_008',
  subject: 'urban',
  chapter: '토목일반',
  question: '정거장 안의 선로 기울기(구배) 기준은? (차량 분리·연결 유치하는 경우)',
  options: ['3/1000', '8/1000', '10/1000', '35/1000'],
  answer: 0,
  explanation: '정거장 안에서 차량을 분리·연결 유치하는 경우 기울기 한도는 3/1000이다.',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_009',
  subject: 'urban',
  chapter: '토목일반',
  question: '정거장 밖 본선의 기울기 한도는?',
  options: ['30/1000', '35/1000', '40/1000', '45/1000'],
  answer: 1,
  explanation: '정거장 밖 본선의 기울기 한도는 35/1000이다.',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_010',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도 승강장 연단 높이는 레일 윗면으로부터 얼마인가?',
  options: ['1.100m', '1.135m', '1.150m', '1.200m'],
  answer: 1,
  explanation: '승강장 연단 높이는 레일 윗면으로부터 1.135m이다.',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_011',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도 선로 구조 기준상 철제 차륜 형식 \'경량 전철\'의 최대 캔트량 기준은?',
  options: [
    '100mm',
    '120mm',
    '150mm',
    '160mm'
  ],
  answer: 2,
  explanation: '교재 [표 8-1] 선로 구조 기준에 따르면 일반적인 도시철도의 최대 캔트량은 160mm이나, 비고란에 "철제 차륜 형식 경량 전철의 경우 150mm"라고 별도로 규정되어 있습니다.',
  source: '도시철도 8장 [표 8-1]'
},

// 8.1.1.3 궤간
{
  id: 'civil_8_012',
  subject: 'urban',
  chapter: '토목일반',
  question: '세계적으로 가장 많이 사용되는 표준 궤간(standard gauge)의 치수는?',
  options: ['1,067mm', '1,435mm', '1,524mm', '1,676mm'],
  answer: 1,
  explanation: '대부분 1,435mm인 표준 궤간을 채용하고 있다.',
  source: '도시철도 8장 8.1.1.3'
},
{
  id: 'civil_8_013',
  subject: 'urban',
  chapter: '토목일반',
  question: '광궤(broad gauge)의 장점이 아닌 것은?',
  options: ['승차감이 좋다', '차량 궤도의 파괴를 감소시킨다', '건설비가 저렴하다', '차륜의 지름을 크게 할 수 있다'],
  answer: 2,
  explanation: '광궤는 건설비를 제외하면 모든 면에서 유리하다. 협궤가 용지비 포함 건설비가 싸다.',
  source: '도시철도 8장 8.1.1.3'
},

// 8.1.2 곡선
{
  id: 'civil_8_014',
  subject: 'urban',
  chapter: '토목일반',
  question: '직선과 원곡선 사이에 삽입하여 곡률의 급격한 변화를 완화하는 곡선은?',
  options: ['종곡선', '완화 곡선', '반향 곡선', '배향 곡선'],
  answer: 1,
  explanation: '직선과 원곡선 사이에 완화 곡선을 삽입하여 회전각의 변화(곡률의 변화)를 완화한다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'civil_8_015',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도에서 채용하고 있는 완화 곡선의 종류는?',
  options: ['3차 포물선', '클로소이드 곡선', '사인 곡선', '렘니즈케이트'],
  answer: 1,
  explanation: '한국철도공사는 3차 포물선, 도시철도에서는 클로소이드 곡선을 채용하고 있다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'civil_8_016',
  subject: 'urban',
  chapter: '토목일반',
  question: '슬랙량(S) 산정 공식으로 옳은 것은? (R: 곡선반경)',
  options: ['S = 2400/R - S\'', 'S = 700/R', 'S = 1000/R', 'S = 11.8V^2/R'],
  answer: 0,
  explanation: '슬랙량 산정 공식은 S = 2,400/R - S\' 이다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'civil_8_017',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도건설규칙에 규정된 확대 궤간(슬랙)의 최대 한도는?',
  options: ['15mm', '20mm', '25mm', '30mm'],
  answer: 2,
  explanation: '확대 궤간은 그 치수는 25mm를 초과하지 아니하는 범위에서 정한다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'civil_8_018',
  subject: 'urban',
  chapter: '토목일반',
  question: '설정 캔트(C)를 구하는 공식에서 부족 캔트(Cd)와의 관계는? (C\'는 균형캔트)',
  options: ['C = C\' + Cd', 'C = C\' - Cd', 'C = C\' * Cd', 'C = Cd / C\''],
  answer: 1,
  explanation: '균형 캔트 Ceq는 설정 캔트 C와 부족 캔트 Cd의 합이므로, 설정 캔트 C = 11.8V^2/R - Cd 이다.',
  source: '도시철도 8장 8.1.2'
},

// 8.1.3 기울기
{
  id: 'civil_8_019',
  subject: 'urban',
  chapter: '토목일반',
  question: '천분율(‰) 기울기 표시법에서 수평 거리 1000m에 대한 높이 차가 30m일 때 표시는?',
  options: ['3‰', '30‰', '300‰', '3%'],
  answer: 1,
  explanation: '수평 거리 1000m에 대한 고저 차가 30m일 때 30‰로 표시한다.',
  source: '도시철도 8장 8.1.3'
},
{
  id: 'civil_8_020',
  subject: 'urban',
  chapter: '토목일반',
  question: '열차 운전 계획상 역 사이의 임의 지점 간 거리 1km 연장 중 가장 급한 기울기로 조정된 것은?',
  options: ['최급 기울기', '제한 기울기', '표준 기울기', '가상 기울기'],
  answer: 2,
  explanation: '표준 기울기는 열차 운전 계획상 정거장 사이마다 조정된 기울기이다.',
  source: '도시철도 8장 8.1.3'
},
{
  id: 'civil_8_021',
  subject: 'urban',
  chapter: '토목일반',
  question: '곡선 저항을 기울기 저항으로 환산한 환산 기울기(Gc) 공식은?',
  options: ['Gc = 600/R', 'Gc = 700/R', 'Gc = 800/R', 'Gc = 1000/R'],
  answer: 1,
  explanation: '환산 기울기의 크기는 Gc = 700/R 이다.',
  source: '도시철도 8장 8.1.3'
},

// 8.1.4 분기기
{
  id: 'civil_8_022',
  subject: 'urban',
  chapter: '토목일반',
  question: '분기기의 3대 구성 요소가 아닌 것은?',
  options: ['포인트부', '리드부', '크로싱부', '가드부'],
  answer: 3,
  explanation: '분기기는 포인트부, 리드부, 크로싱부의 세 부분으로 구성된다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'civil_8_023',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량이 분기기 전단에서 후단 방향(포인트→크로싱)으로 진입하는 것을 무엇이라 하는가?',
  options: ['대향(Facing)', '배향(Trailing)', '정위', '반위'],
  answer: 0,
  explanation: '분기기의 전단에서 후단의 방향으로 진입할 때의 차량은 분기기에 대하여 대향(Facing)이라고 한다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'civil_8_024',
  subject: 'urban',
  chapter: '토목일반',
  question: '분기기 크로싱 번수(N)를 구하는 공식은? (L1: 기준선 길이, L2: 분기선 폭)',
  options: ['N = L2 / L1', 'N = L1 / L2', 'N = L1 × L2', 'N = L1 - L2'],
  answer: 1,
  explanation: '분기기 번수 N = L1 / L2 이다.',
  source: '도시철도 8장 8.1.4'
},

// 8.1.6 궤도 중심 간격 & 8.1.7 선로제표
{
  id: 'civil_8_025',
  subject: 'urban',
  chapter: '토목일반',
  question: '정거장 내 선로를 나란히 설치할 때 기준이 되는 궤도 중심 간격은?',
  options: ['3.8m 이상', '4.0m 이상', '4.3m 이상', '4.5m 이상'],
  answer: 2,
  explanation: '정거장(기지 포함) 안에 나란히 설치하는 궤도의 중심 간격은 4.3미터 이상 되어야 한다.',
  source: '도시철도 8장 8.1.6'
},
{
  id: 'civil_8_026',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량 접촉 한계표는 궤도 중심 간격 몇 m 지점에 설치하는가?',
  options: ['3.0m', '3.5m', '4.0m', '4.3m'],
  answer: 2,
  explanation: '차량 접촉 한계표는 인접 궤도의 차량과 접촉을 피하고자 궤도 중심 간격 4m 지점에 설치한다.',
  source: '도시철도 8장 8.1.7'
},
{
  id: 'civil_8_027',
  subject: 'urban',
  chapter: '토목일반',
  question: '기적표는 필요 개소 전방 몇 m 앞쪽에 설치하는가?',
  options: ['200m', '300m', '400m', '500m'],
  answer: 2,
  explanation: '기적표는 기적을 울릴 필요가 있는 곳에 열차 진행 방향 400m 이상 앞쪽에 설치한다.',
  source: '도시철도 8장 8.1.7'
},

// 8.2 궤도 구조 (레일)
{
  id: 'civil_8_028',
  subject: 'urban',
  chapter: '토목일반',
  question: '궤도(Track)의 3대 구성 요소에 포함되지 않는 것은?',
  options: ['레일', '침목', '도상', '노반'],
  answer: 3,
  explanation: '궤도는 레일, 침목, 도상으로 구성된다. 노반은 궤도를 지지하는 하부 구조이다.',
  source: '도시철도 8장 8.2.1'
},
{
  id: 'civil_8_029',
  subject: 'urban',
  chapter: '토목일반',
  question: '현재 우리나라에서 사용하는 대부분의 레일 단면 형상은?',
  options: ['쌍두 레일', '우두 레일', '평저 레일', '유구 레일'],
  answer: 2,
  explanation: '현재 우리나라에서 사용하는 대부분 레일은 평저 레일이다.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_030',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도에서 사용하는 정척 레일의 길이는?',
  options: ['10m', '20m', '25m', '200m'],
  answer: 1,
  explanation: '도시철도에서는 지하 터널 운반 어려움 등을 고려하여 20m를 정척 레일로 사용한다. (한국철도공사는 25m)',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_031',
  subject: 'urban',
  chapter: '토목일반',
  question: '60kg 레일의 일반적인 교환 기준 통과 톤수는?',
  options: ['3억 톤', '4억 톤', '5억 톤', '6억 톤'],
  answer: 3,
  explanation: '60kg 레일의 통과 톤수 기준은 6억 톤이다.',
  source: '도시철도 8장 [표 8-16]'
},
{
  id: 'civil_8_032',
  subject: 'urban',
  chapter: '토목일반',
  question: '레일 재질에 내마모성을 증가시키기 위해 10~15% 정도 함유시키는 성분은?',
  options: ['탄소(C)', '규소(Si)', '망간(Mn)', '인(P)'],
  answer: 2,
  explanation: '망간(Mn)을 10~15% 정도 함유시킨 망간 레일은 내구연한이 길어 마모가 심한 곳에 쓰인다.',
  source: '도시철도 8장 8.2.2'
},

// 8.2.3 침목
{
  id: 'civil_8_033',
  subject: 'urban',
  chapter: '토목일반',
  question: '목 침목의 장점이 아닌 것은?',
  options: ['가공이 편리하다', '탄성이 풍부하다', '전기 절연도가 높다', '내구연한이 길다'],
  answer: 3,
  explanation: '목 침목은 자연 부식으로 내구연한이 비교적 짧다는 단점이 있다.',
  source: '도시철도 8장 8.2.3'
},
{
  id: 'civil_8_034',
  subject: 'urban',
  chapter: '토목일반',
  question: '목 침목의 부패를 방지하기 위해 주입하는 방부제는?',
  options: ['크레오소오트유', '아스팔트유', '벤젠', '알코올'],
  answer: 0,
  explanation: '목 침목 방부 처리에는 크레오소오트유와 중유를 혼합하여 사용한다.',
  source: '도시철도 8장 8.2.3'
},
{
  id: 'civil_8_035',
  subject: 'urban',
  chapter: '토목일반',
  question: '서울교통공사 기준 지하 본선(정)의 20m당 침목 부설 수는?',
  options: ['30정', '34정', '35정', '40정'],
  answer: 1,
  explanation: '지하 본선(정)의 20m당 침목 부설 수는 34정이다.',
  source: '도시철도 8장 [표 8-19]'
},
{
  id: 'civil_8_036',
  subject: 'urban',
  chapter: '토목일반',
  question: 'P.C(Prestressed Concrete) 침목의 단점으로 옳은 것은?',
  options: ['자중이 가벼워 안정이 나쁘다', '전기 절연성이 목 침목보다 우수하다', '충격력에 약하다', '보수비가 많이 든다'],
  answer: 2,
  explanation: '콘크리트 침목은 충격력에 약하고 탄성이 부족하며, 중량이 무거워 취급이 곤란하다.',
  source: '도시철도 8장 8.2.3'
},

// 8.2.4 도상 & 8.2.5 체결장치
{
  id: 'civil_8_037',
  subject: 'urban',
  chapter: '토목일반',
  question: '도상 계수(K) 판정 기준에서 "우량 노반"에 해당하는 값은?',
  options: ['0.5 MPa', '0.9 MPa', '1.1 MPa', '1.3 MPa'],
  answer: 3,
  explanation: '도상 계수 k = 1.3 MPa 일 때 우량 노반으로 판정한다.',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'civil_8_038',
  subject: 'urban',
  chapter: '토목일반',
  question: '콘크리트 도상의 장점으로 틀린 것은?',
  options: ['보수 노력이 경감된다', '궤도 틀림 진행이 적다', '건설비가 저렴하다', '배수가 양호하다'],
  answer: 2,
  explanation: '콘크리트 도상은 시공 기간이 길고 건설비가 많이 든다는 단점이 있다.',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'civil_8_039',
  subject: 'urban',
  chapter: '토목일반',
  question: '도상 자갈의 구비 조건으로 틀린 것은?',
  options: ['단위 중량이 가벼울 것', '능각이 풍부할 것', '배수가 양호할 것', '경질일 것'],
  answer: 0,
  explanation: '도상 자갈은 단위 중량이 무겁고 입자 간의 마찰력이 커야 한다.',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'civil_8_040',
  subject: 'urban',
  chapter: '토목일반',
  question: '탄성 체결 장치 사용 시 레일과 침목 사이에 설치하여 충격을 흡수하고 전기 절연을 돕는 부품은?',
  options: ['스파이크', '타이 패드', '크로싱', '클립'],
  answer: 1,
  explanation: '타이 패드(Tie pad)는 충격 완화, 침목 수명 연장, 전기 절연성 확보 등의 역할을 한다.',
  source: '도시철도 8장 8.2.5'
},

// 추가 보충 문제
{
  id: 'civil_8_041',
  subject: 'urban',
  chapter: '토목일반',
  question: '정거장 밖 본선에서 곡선인 경우 35/1000 기울기 제한에 무엇을 적용해야 하는가?',
  options: ['곡선 보정', '캔트 보정', '슬랙 보정', '속도 보정'],
  answer: 0,
  explanation: '정거장 밖 본선 기울기 한도는 35/1000이며, 곡선인 경우 곡선 보정 기울기를 적용해야 한다.',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_042',
  subject: 'urban',
  chapter: '토목일반',
  question: '선로 제표 중 열차 진행 방향의 대향으로 건식하여 선로 작업 상황을 알리는 표지는?',
  options: ['선로 작업표', '서행 예고 신호기', '임시 신호기', '낙석표'],
  answer: 0,
  explanation: '선로 작업표는 선로 작업 상황을 알리는 표지로 열차 진행 방향에 대향으로 건식한다.',
  source: '도시철도 8장 8.1.7'
},
{
  id: 'civil_8_043',
  subject: 'urban',
  chapter: '토목일반',
  question: '다음 중 본선이 아닌 선로를 일컫는 용어는?',
  options: ['측선', '부본선', '정거장', '신호소'],
  answer: 0,
  explanation: '측선이란 본선이 아닌 선로를 말한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'civil_8_044',
  subject: 'urban',
  chapter: '토목일반',
  question: '곡선의 종류 중 S자 모양으로 상반된 방향의 곡선이 연속되는 것은?',
  options: ['복심 곡선', '반향 곡선', '완화 곡선', '종단 곡선'],
  answer: 1,
  explanation: '반향 곡선(Reverse curve)은 상반된 방향의 곡선이 연속되는 형태이다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'civil_8_045',
  subject: 'urban',
  chapter: '토목일반',
  question: '고정 크로싱의 결선부를 없애 승차감을 개선한 크로싱은?',
  options: ['망간 크로싱', '가동 크로싱', '조립 크로싱', '용접 크로싱'],
  answer: 1,
  explanation: '가동 크로싱은 고정 크로싱의 최대 약점인 결선부를 없게 하여 충격, 소음을 해소한 것이다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'civil_8_046',
  subject: 'urban',
  chapter: '토목일반',
  question: '레일 표면에 발생하는 "파상 마모" 현상의 주된 원인 중 하나는?',
  options: ['도상이 너무 부드러울 때', '도상이 과도하게 견고하여 탄력성이 부족할 때', '차량이 너무 가벼울 때', '직선 구간을 주행할 때'],
  answer: 1,
  explanation: '파상 마모는 도상이 과도하게 견고한 장소나 콘크리트 도상 등 탄력성이 부족함에 따라 발생한다.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_047',
  subject: 'urban',
  chapter: '토목일반',
  question: '다음 중 레일 훼손의 주요 원인으로 "제작 시 결함"에 해당하는 것은?',
  options: ['압연 작업 불량', '차량 불량', '궤도 보수 불량', '부식'],
  answer: 0,
  explanation: '압연 작업 불량으로 품질적인 결함이 발생하는 것은 제작 시 결함에 해당한다. 나머지는 부설 및 취급에 의한 결함이다.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_048',
  subject: 'urban',
  chapter: '토목일반',
  question: '레일 이음매 침목의 치수는 보통 침목과 비교하여 어떻게 다른가? (두께 150mm 동일 가정)',
  options: ['길이는 같고 폭이 더 넓다', '길이가 더 길다', '폭이 더 좁다', '치수가 동일하다'],
  answer: 0,
  explanation: '보통 침목은 240mm 폭이지만, 이음매 침목은 300mm로 폭이 더 넓다. 길이는 2,500mm로 같다.',
  source: '도시철도 8장 8.2.3'
},
{
  id: 'civil_8_049',
  subject: 'urban',
  chapter: '토목일반',
  question: '레일 체결 장치의 기능으로 옳지 않은 것은?',
  options: ['궤간의 확보', '전기적 절연 성능 확보', '진동의 증폭', '레일 복진 방지'],
  answer: 2,
  explanation: '레일 체결 장치는 진동을 감쇠 또는 차단해야 한다. 증폭시키는 것은 기능에 반한다.',
  source: '도시철도 8장 8.2.5'
},
{
  id: 'civil_8_050',
  subject: 'urban',
  chapter: '토목일반',
  question: '선로 기울기 변화가 1천분의 5를 초과할 때 삽입해야 하는 반경 3천 미터 이상의 곡선은?',
  options: ['완화 곡선', '종곡선', '원곡선', '배향 곡선'],
  answer: 1,
  explanation: '도시철도건설규칙에 따라 선로 기울기 변화가 1천분의 5를 초과하면 반경 3천 미터 이상의 종곡선을 삽입해야 한다.',
  source: '도시철도 8장 8.1.3'
},
// ==========================================
// 8.1 철도선로 (심화 20문항)
// ==========================================

{
  id: 'civil_8_1_001',
  subject: 'urban',
  chapter: '토목일반',
  question: '철도선로 용어 정의 중 "본선이 아닌 선로"를 무엇이라 하는가?',
  options: ['측선', '부본선', '안전선', '피난선'],
  answer: 0,
  explanation: '‘측선’이란 본선이 아닌 선로를 말한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'civil_8_1_002',
  subject: 'urban',
  chapter: '토목일반',
  question: '정거장의 분류 중 "열차의 조성 또는 차량의 입환을 위하여 설치한 장소"는?',
  options: ['역', '조차장', '신호장', '신호소'],
  answer: 1,
  explanation: '‘조차장’이란 열차의 조성 또는 차량의 입환(入換)을 위하여 설치한 장소를 말한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'civil_8_1_003',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량이 선로 기울기의 변경 지점을 원활하게 운행할 수 있도록 종단면에 두는 곡선은?',
  options: ['완화 곡선', '종곡선', '원곡선', '반향 곡선'],
  answer: 1,
  explanation: '‘종곡선(縱曲線)’이란 차량이 선로 기울기의 변경 지점을 원활하게 운행할 수 있도록 종단면에 두는 곡선을 말한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'civil_8_1_004',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도 건설 규칙상 승강장 연단 높이는 레일 윗면으로부터 몇 m인가?',
  options: ['1.100m', '1.135m', '1.150m', '1.200m'],
  answer: 1,
  explanation: '승강장 연단 높이: 레일 윗면으로부터 1.135m',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_1_005',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도에서 철제 차륜 형식의 최대 캔트량 기준은?',
  options: ['150mm', '160mm', '180mm', '200mm'],
  answer: 1,
  explanation: '최대 캔트량: 160mm (도시철도건설규칙 제11조)',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_1_006',
  subject: 'urban',
  chapter: '토목일반',
  question: '직선과 원곡선 사이에 삽입하여 회전각의 변화(곡률의 변화)를 완화하는 곡선으로 도시철도에서 주로 채용하는 것은?',
  options: ['3차 포물선', '클로소이드 곡선', '렘니즈케이트', '사인 반파장 곡선'],
  answer: 1,
  explanation: '완화 곡선에는 한국철도공사에서 채택하고 있는 3차 포물선, 도시철도에서 채용하고 있는 클로소이드 곡선 등이 있다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'civil_8_1_007',
  subject: 'urban',
  chapter: '토목일반',
  question: '슬랙(확대 궤간) 산정 공식으로 옳은 것은? (R: 곡선반경)',
  options: ['S = 2400/R - S\'', 'S = 700/R', 'S = 1000/R', 'S = 11.8V^2/R'],
  answer: 0,
  explanation: '슬랙량 S = 2,400 / R - S\' 이다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'civil_8_1_008',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도건설규칙에 따라 확대 궤간(슬랙)은 몇 mm를 초과하지 않아야 하는가?',
  options: ['15mm', '20mm', '25mm', '30mm'],
  answer: 2,
  explanation: '확대 궤간은 그 치수는 25mm를 초과하지 아니하는 범위에서 정한다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'civil_8_1_009',
  subject: 'urban',
  chapter: '토목일반',
  question: '곡선 저항을 기울기 저항으로 환산한 환산 기울기(Gc)의 공식은?',
  options: ['Gc = 500/R', 'Gc = 600/R', 'Gc = 700/R', 'Gc = 800/R'],
  answer: 2,
  explanation: '환산 기울기의 크기는 Gc = 700 / R 이다.',
  source: '도시철도 8장 8.1.3'
},
{
  id: 'civil_8_1_010',
  subject: 'urban',
  chapter: '토목일반',
  question: '정거장 안에서 차량을 분리·연결 유치하는 경우 선로 기울기 한도는?',
  options: ['3/1000', '8/1000', '10/1000', '35/1000'],
  answer: 0,
  explanation: '정거장 안: 3/1000 (차량 분리, 연결 유치하는 경우).',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_1_011',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도건설규칙에 따라 인접 기울기의 변화가 얼마를 초과하면 종곡선을 삽입해야 하는가?',
  options: ['3/1000', '4/1000', '5/1000', '10/1000'],
  answer: 2,
  explanation: '인접 기울기의 변화가 1천분의 5를 초과하면 반경 3천 미터 이상의 종곡선을 삽입하여야 한다.',
  source: '도시철도 8장 8.1.3'
},
{
  id: 'civil_8_1_012',
  subject: 'urban',
  chapter: '토목일반',
  question: '분기기의 3대 구성 요소가 아닌 것은?',
  options: ['포인트부', '리드부', '크로싱부', '가드부'],
  answer: 3,
  explanation: '분기기는 포인트부, 리드부, 크로싱부의 세 부분으로 구성된다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'civil_8_1_013',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량이 크로싱을 통하여 포인트 방향(후단→전단)으로 통과하는 것을 무엇이라 하는가?',
  options: ['대향(Facing)', '배향(Trailing)', '정위', '반위'],
  answer: 1,
  explanation: '크로싱을 통하여 포인트를 통과하는 경우를 배향(trailing)이라고 한다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'civil_8_1_014',
  subject: 'urban',
  chapter: '토목일반',
  question: '분기기의 평상시 개통 방향을 무엇이라 하는가?',
  options: ['정위(Normal)', '반위(Reverse)', '대향', '배향'],
  answer: 0,
  explanation: '상시 개통되어 있는 방향을 포인트의 정위라 하고 반대로 개통되어 있는 것을 반위라 한다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'civil_8_1_015',
  subject: 'urban',
  chapter: '토목일반',
  question: '고정 크로싱의 결선부를 없애 승차감을 개선한 크로싱은?',
  options: ['망간 크로싱', '조립 크로싱', '가동 크로싱', '용접 크로싱'],
  answer: 2,
  explanation: '가동 크로싱은 고정 크로싱의 최대 약점인 결선부를 없게 하여... 승차 기분을 개선한 것이다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'civil_8_1_016',
  subject: 'urban',
  chapter: '토목일반',
  question: '정거장(기지 포함) 안에 나란히 설치하는 궤도의 중심 간격은 얼마 이상이어야 하는가?',
  options: ['3.8m', '4.0m', '4.3m', '4.5m'],
  answer: 2,
  explanation: '정거장(기지 포함) 안에 나란히 설치하는 궤도의 중심 간격은 4.3미터 이상 되어야 한다.',
  source: '도시철도 8장 8.1.6'
},
{
  id: 'civil_8_1_017',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량 접촉 한계표는 궤도 중심 간격 몇 m 지점에 설치하는가?',
  options: ['3.5m', '3.8m', '4.0m', '4.3m'],
  answer: 2,
  explanation: '차량 접촉 한계표 : 인접 궤도의 차량과 접촉을 피하고자 건식하는 표지로서 궤도 중심 간격 4m 지점에 설치한다.',
  source: '도시철도 8장 8.1.7'
},
{
  id: 'civil_8_1_018',
  subject: 'urban',
  chapter: '토목일반',
  question: '기적표는 기적을 울릴 필요가 있는 곳의 열차 진행 방향 전방 몇 m 이상 앞쪽에 설치하는가?',
  options: ['200m', '300m', '400m', '500m'],
  answer: 2,
  explanation: '기적표 : 건널목, 교량, 급곡선 등... 열차 진행 방향 400m이상 앞쪽에 설치한다.',
  source: '도시철도 8장 8.1.7'
},
{
  id: 'civil_8_1_019',
  subject: 'urban',
  chapter: '토목일반',
  question: '선로 기울기의 변환점에 건식하여 기울기의 상, 하 정도를 표시하는 제표는?',
  options: ['거리표', '기울기표', '수준표', '곡선표'],
  answer: 1,
  explanation: '기울기표 : 선로 기울기의 변환점에 건식하여 기울기의 상, 하의 정도를 표시하여 열차운전 편의를 제공한다.',
  source: '도시철도 8장 8.1.7'
},
{
  id: 'civil_8_1_020',
  subject: 'urban',
  chapter: '토목일반',
  question: '원곡선의 시점과 종점에 세워 곡선 반경, 캔트, 확대 궤간 등을 기입하는 표지는?',
  options: ['곡선표', '기울기표', '수준표', '차량 접촉 한계표'],
  answer: 0,
  explanation: '곡선표 : 원곡선의 시점과 종점에 세워 곡선 반경, 캔트, 확대 궤간 등을 기입한다.',
  source: '도시철도 8장 8.1.7'
},


// ==========================================
// 8.2 궤도 (심화 20문항)
// ==========================================

{
  id: 'civil_8_2_001',
  subject: 'urban',
  chapter: '토목일반',
  question: '궤도(Track)의 주요 구성 요소 3가지에 해당하지 않는 것은?',
  options: ['레일', '침목', '도상', '노반'],
  answer: 3,
  explanation: '궤도는 레일, 침목, 도상으로 이루어지는 철도선로의 중요한 부분이다. (노반은 궤도를 지지하는 하부 구조)',
  source: '도시철도 8장 8.2.1'
},
{
  id: 'civil_8_2_002',
  subject: 'urban',
  chapter: '토목일반',
  question: '우리나라에서 사용하는 대부분의 레일 단면 형상은?',
  options: ['쌍두 레일', '우두 레일', '평저 레일', '유구 레일'],
  answer: 2,
  explanation: '현재 우리나라에서 사용하는 대부분 레일은 평저 레일이다.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_2_003',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도에서 사용하는 정척 레일의 한 개의 길이는?',
  options: ['10m', '20m', '25m', '200m'],
  answer: 1,
  explanation: '도시철도에서는... 한 개의 레일 길이를 20m로 하는 정척 레일을 사용하고 있다. (한국철도공사는 25m)',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_2_004',
  subject: 'urban',
  chapter: '토목일반',
  question: '장대 레일(Continuous Welded Rail)의 기준 길이는?',
  options: ['100m 이상', '200m 이상', '300m 이상', '500m 이상'],
  answer: 1,
  explanation: '장대 레일 : 200m 이상.',
  source: '도시철도 8장 [표 8-17]'
},
{
  id: 'civil_8_2_005',
  subject: 'urban',
  chapter: '토목일반',
  question: '60kg 레일의 교환 기준이 되는 누적 통과 톤수는?',
  options: ['3억 톤', '5억 톤', '6억 톤', '8억 톤'],
  answer: 2,
  explanation: '60kg 레일의 통과 톤수 기준은 6억 톤이다. (50kg은 5억 톤)',
  source: '도시철도 8장 [표 8-16]'
},
{
  id: 'civil_8_2_006',
  subject: 'urban',
  chapter: '토목일반',
  question: '내구연한이 길어(보통 레일의 6배) 마모가 심한 곳에 주로 쓰이는 특수 레일은?',
  options: ['고탄소강 레일', '망간 레일', '경두 레일', '복합 레일'],
  answer: 1,
  explanation: '망간 레일 : 망간(Mn)을 10~15% 정도 함유시킨 레일로서 내구연한이 길며(보통 레일의 6배) 마모가 심한 곳에 주로 쓰인다.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_2_007',
  subject: 'urban',
  chapter: '토목일반',
  question: '도상이 과도하게 견고하여 탄력성이 부족할 때 레일 길이 방향으로 파형으로 마모되는 현상은?',
  options: ['측면 마모', '편 마모', '파상 마모', '수직 마모'],
  answer: 2,
  explanation: '파상(波狀) 마모 현상... 도상이 과도하게 견고한 장소나 콘크리트 도상 등... 탄력성이 부족함에 따라 균열이 발생하는 것을 말한다.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_2_008',
  subject: 'urban',
  chapter: '토목일반',
  question: '목 침목의 방부 처리에 사용되는 혼합유 성분은?',
  options: ['크레오소오트유 + 중유', '휘발유 + 경유', '아스팔트유 + 등유', '알코올 + 벤젠'],
  answer: 0,
  explanation: '주약 처리 방법 : 크레오소오트 50% + 중유 50%',
  source: '도시철도 8장 8.2.3'
},
{
  id: 'civil_8_2_009',
  subject: 'urban',
  chapter: '토목일반',
  question: '서울교통공사 기준 지하 본선(정)의 20m당 침목 부설 수는?',
  options: ['30정', '34정', '35정', '40정'],
  answer: 1,
  explanation: '지하 본선(정) : 34정.',
  source: '도시철도 8장 [표 8-19]'
},
{
  id: 'civil_8_2_010',
  subject: 'urban',
  chapter: '토목일반',
  question: '이음매 침목의 치수(길이×폭×두께)로 옳은 것은?',
  options: ['2,500×240×150', '2,500×300×150', '3,000×230×230', '2,800×240×150'],
  answer: 1,
  explanation: '이음매 침목 : 2,500×300×150 mm',
  source: '도시철도 8장 8.2.3'
},
{
  id: 'civil_8_2_011',
  subject: 'urban',
  chapter: '토목일반',
  question: '콘크리트 침목의 단점으로 옳은 것은?',
  options: ['부식의 염려가 있다', '자중이 가벼워 안정이 나쁘다', '전기 절연성이 목 침목보다 부족하다', '보수비가 많이 든다'],
  answer: 2,
  explanation: '콘크리트 침목 단점: 전기 절연성이 목 침목 보다 부족하다, 충격력에 약하고 탄성이 부족하다 등.',
  source: '도시철도 8장 8.2.3'
},
{
  id: 'civil_8_2_012',
  subject: 'urban',
  chapter: '토목일반',
  question: '도상 계수 K값이 얼마일 때 "우량 노반"으로 판정하는가?',
  options: ['0.5 MPa', '0.9 MPa', '1.1 MPa', '1.3 MPa'],
  answer: 3,
  explanation: 'k = 1.3MPa : 우량 노반',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'civil_8_2_013',
  subject: 'urban',
  chapter: '토목일반',
  question: '도상 자갈의 구비 조건으로 틀린 것은?',
  options: ['경질일 것', '단위 중량이 가벼울 것', '능각이 풍부할 것', '배수가 양호할 것'],
  answer: 1,
  explanation: '단위 중량이 무겁고, 능각이 풍부하고 입자 간의 마찰력이 클 것.',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'civil_8_2_014',
  subject: 'urban',
  chapter: '토목일반',
  question: '콘크리트 도상의 장점으로 틀린 것은?',
  options: ['보수 노력이 경감된다', '궤도 틀림 진행이 적다', '건설비가 저렴하다', '배수가 양호하다'],
  answer: 2,
  explanation: '콘크리트 도상은 시공 기간이 길고 건설비가 많이 든다는 단점이 있다.',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'civil_8_2_015',
  subject: 'urban',
  chapter: '토목일반',
  question: '기존 콘크리트 도상과 노반 사이에 완충재(모르타르 등)를 삽입시키는 궤도 구조는?',
  options: ['자갈 도상 궤도', '슬래브 궤도(Slab Track)', '목재 궤도', '무도상 궤도'],
  answer: 1,
  explanation: '슬래브 궤도 : 직결 도상 체결 방식에 의한 콘크리트 도상과 노반 사이에 시멘트 아스팔트 모르타르를 완충재로 삽입시키는 궤도.',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'civil_8_2_016',
  subject: 'urban',
  chapter: '토목일반',
  question: '레일 체결 장치의 기능으로 옳지 않은 것은?',
  options: ['궤간의 확보', '전기적 절연 성능 확보', '진동의 증폭', '레일 복진 방지'],
  answer: 2,
  explanation: '진동의 감쇠, 차단이 기능이다. (증폭은 틀림)',
  source: '도시철도 8장 8.2.5'
},
{
  id: 'civil_8_2_017',
  subject: 'urban',
  chapter: '토목일반',
  question: '고무제의 타이 패드를 깔고 상하 쌍방에서 체결하는 방식은?',
  options: ['일반 스파이크', '나사 스파이크', '단 탄성 체결', '2중 탄성 체결'],
  answer: 3,
  explanation: '고무제의 탄성 패드를 깔고 상하 쌍방에서 체결하는 것을 이중 탄성 체결이라 한다.',
  source: '도시철도 8장 8.2.5'
},
{
  id: 'civil_8_2_018',
  subject: 'urban',
  chapter: '토목일반',
  question: '탄성 체결구의 특징으로 옳지 않은 것은?',
  options: ['열차 진동과 충격을 흡수 완화한다', '레일의 복진을 방지한다', '전기적 절연을 확보할 수 없다', '궤간 틀림 등에 대해 효과적이다'],
  answer: 2,
  explanation: '타이 패드의 전기 절연성에 의한 레일과 침목과의 절연을 확보할 수 있다.',
  source: '도시철도 8장 8.2.5'
},
{
  id: 'civil_8_2_019',
  subject: 'urban',
  chapter: '토목일반',
  question: '레일 끝부분 열처리(Rail end hardening)의 주된 목적은?',
  options: ['전기 전도성 향상', '부식 방지', '이음매부의 끝 닳음 예방', '용접 용이성 확보'],
  answer: 2,
  explanation: '이음매부의 끝 닳음을 예방하기 위하여 보통 레일의 끝부분을 10~20㎝ 정도 표면을 열처리한 것.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_2_020',
  subject: 'urban',
  chapter: '토목일반',
  question: '레일의 마모 방지 대책으로 교재에 언급되지 않은 것은?',
  options: ['레일 경질화', '레일 중량화', '레일 도유기 설치', '레일 가열 장치 설치'],
  answer: 3,
  explanation: '레일의 마모 방지는 레일 경질(硬質)화, 중량(重量)화, 레일 도유기 설치로 가능하다.',
  source: '도시철도 8장 8.2.2'
},

{
  id: 'civil_8_1_001',
  subject: 'urban',
  chapter: '토목일반',
  question: '철도선로 용어 정의 중 "본선이 아닌 선로"를 무엇이라 하는가?',
  options: ['측선', '부본선', '안전선', '피난선'],
  answer: 0,
  explanation: '‘측선’이란 본선이 아닌 선로를 말한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'civil_8_1_002',
  subject: 'urban',
  chapter: '토목일반',
  question: '정거장의 분류 중 "열차의 조성 또는 차량의 입환을 위하여 설치한 장소"는?',
  options: ['역', '조차장', '신호장', '신호소'],
  answer: 1,
  explanation: '‘조차장’이란 열차의 조성 또는 차량의 입환(入換)을 위하여 설치한 장소를 말한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'civil_8_1_003',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량이 선로 기울기의 변경 지점을 원활하게 운행할 수 있도록 종단면에 두는 곡선은?',
  options: ['완화 곡선', '종곡선', '원곡선', '반향 곡선'],
  answer: 1,
  explanation: '‘종곡선(縱曲線)’이란 차량이 선로 기울기의 변경 지점을 원활하게 운행할 수 있도록 종단면에 두는 곡선을 말한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'civil_8_1_004',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도 건설 규칙상 승강장 연단 높이는 레일 윗면으로부터 몇 m인가?',
  options: ['1.100m', '1.135m', '1.150m', '1.200m'],
  answer: 1,
  explanation: '승강장 연단 높이: 레일 윗면으로부터 1.135m',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_1_005',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도에서 철제 차륜 형식의 최대 캔트량 기준은?',
  options: ['150mm', '160mm', '180mm', '200mm'],
  answer: 1,
  explanation: '최대 캔트량: 160mm (도시철도건설규칙 제11조)',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_1_006',
  subject: 'urban',
  chapter: '토목일반',
  question: '직선과 원곡선 사이에 삽입하여 회전각의 변화(곡률의 변화)를 완화하는 곡선으로 도시철도에서 주로 채용하는 것은?',
  options: ['3차 포물선', '클로소이드 곡선', '렘니즈케이트', '사인 반파장 곡선'],
  answer: 1,
  explanation: '완화 곡선에는 한국철도공사에서 채택하고 있는 3차 포물선, 도시철도에서 채용하고 있는 클로소이드 곡선 등이 있다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'civil_8_1_007',
  subject: 'urban',
  chapter: '토목일반',
  question: '슬랙(확대 궤간) 산정 공식으로 옳은 것은? (R: 곡선반경)',
  options: ['S = 2400/R - S\'', 'S = 700/R', 'S = 1000/R', 'S = 11.8V^2/R'],
  answer: 0,
  explanation: '슬랙량 S = 2,400 / R - S\' 이다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'civil_8_1_008',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도건설규칙에 따라 확대 궤간(슬랙)은 몇 mm를 초과하지 않아야 하는가?',
  options: ['15mm', '20mm', '25mm', '30mm'],
  answer: 2,
  explanation: '확대 궤간은 그 치수는 25mm를 초과하지 아니하는 범위에서 정한다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'civil_8_1_009',
  subject: 'urban',
  chapter: '토목일반',
  question: '곡선 저항을 기울기 저항으로 환산한 환산 기울기(Gc)의 공식은?',
  options: ['Gc = 500/R', 'Gc = 600/R', 'Gc = 700/R', 'Gc = 800/R'],
  answer: 2,
  explanation: '환산 기울기의 크기는 Gc = 700 / R 이다.',
  source: '도시철도 8장 8.1.3'
},
{
  id: 'civil_8_1_010',
  subject: 'urban',
  chapter: '토목일반',
  question: '정거장 안에서 차량을 분리·연결 유치하는 경우 선로 기울기 한도는?',
  options: ['3/1000', '8/1000', '10/1000', '35/1000'],
  answer: 0,
  explanation: '정거장 안: 3/1000 (차량 분리, 연결 유치하는 경우).',
  source: '도시철도 8장 [표 8-1]'
},
{
  id: 'civil_8_1_011',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도건설규칙에 따라 인접 기울기의 변화가 얼마를 초과하면 종곡선을 삽입해야 하는가?',
  options: ['3/1000', '4/1000', '5/1000', '10/1000'],
  answer: 2,
  explanation: '인접 기울기의 변화가 1천분의 5를 초과하면 반경 3천 미터 이상의 종곡선을 삽입하여야 한다.',
  source: '도시철도 8장 8.1.3'
},
{
  id: 'civil_8_1_012',
  subject: 'urban',
  chapter: '토목일반',
  question: '분기기의 3대 구성 요소가 아닌 것은?',
  options: ['포인트부', '리드부', '크로싱부', '가드부'],
  answer: 3,
  explanation: '분기기는 포인트부, 리드부, 크로싱부의 세 부분으로 구성된다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'civil_8_1_013',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량이 크로싱을 통하여 포인트 방향(후단→전단)으로 통과하는 것을 무엇이라 하는가?',
  options: ['대향(Facing)', '배향(Trailing)', '정위', '반위'],
  answer: 1,
  explanation: '크로싱을 통하여 포인트를 통과하는 경우를 배향(trailing)이라고 한다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'civil_8_1_014',
  subject: 'urban',
  chapter: '토목일반',
  question: '분기기의 평상시 개통 방향을 무엇이라 하는가?',
  options: ['정위(Normal)', '반위(Reverse)', '대향', '배향'],
  answer: 0,
  explanation: '상시 개통되어 있는 방향을 포인트의 정위라 하고 반대로 개통되어 있는 것을 반위라 한다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'civil_8_1_015',
  subject: 'urban',
  chapter: '토목일반',
  question: '고정 크로싱의 결선부를 없애 승차감을 개선한 크로싱은?',
  options: ['망간 크로싱', '조립 크로싱', '가동 크로싱', '용접 크로싱'],
  answer: 2,
  explanation: '가동 크로싱은 고정 크로싱의 최대 약점인 결선부를 없게 하여... 승차 기분을 개선한 것이다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'civil_8_1_016',
  subject: 'urban',
  chapter: '토목일반',
  question: '정거장(기지 포함) 안에 나란히 설치하는 궤도의 중심 간격은 얼마 이상이어야 하는가?',
  options: ['3.8m', '4.0m', '4.3m', '4.5m'],
  answer: 2,
  explanation: '정거장(기지 포함) 안에 나란히 설치하는 궤도의 중심 간격은 4.3미터 이상 되어야 한다.',
  source: '도시철도 8장 8.1.6'
},
{
  id: 'civil_8_1_017',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량 접촉 한계표는 궤도 중심 간격 몇 m 지점에 설치하는가?',
  options: ['3.5m', '3.8m', '4.0m', '4.3m'],
  answer: 2,
  explanation: '차량 접촉 한계표 : 인접 궤도의 차량과 접촉을 피하고자 건식하는 표지로서 궤도 중심 간격 4m 지점에 설치한다.',
  source: '도시철도 8장 8.1.7'
},
{
  id: 'civil_8_1_018',
  subject: 'urban',
  chapter: '토목일반',
  question: '기적표는 기적을 울릴 필요가 있는 곳의 열차 진행 방향 전방 몇 m 이상 앞쪽에 설치하는가?',
  options: ['200m', '300m', '400m', '500m'],
  answer: 2,
  explanation: '기적표 : 건널목, 교량, 급곡선 등... 열차 진행 방향 400m이상 앞쪽에 설치한다.',
  source: '도시철도 8장 8.1.7'
},
{
  id: 'civil_8_1_019',
  subject: 'urban',
  chapter: '토목일반',
  question: '선로 기울기의 변환점에 건식하여 기울기의 상, 하 정도를 표시하는 제표는?',
  options: ['거리표', '기울기표', '수준표', '곡선표'],
  answer: 1,
  explanation: '기울기표 : 선로 기울기의 변환점에 건식하여 기울기의 상, 하의 정도를 표시하여 열차운전 편의를 제공한다.',
  source: '도시철도 8장 8.1.7'
},
{
  id: 'civil_8_1_020',
  subject: 'urban',
  chapter: '토목일반',
  question: '원곡선의 시점과 종점에 세워 곡선 반경, 캔트, 확대 궤간 등을 기입하는 표지는?',
  options: ['곡선표', '기울기표', '수준표', '차량 접촉 한계표'],
  answer: 0,
  explanation: '곡선표 : 원곡선의 시점과 종점에 세워 곡선 반경, 캔트, 확대 궤간 등을 기입한다.',
  source: '도시철도 8장 8.1.7'
},


// ==========================================
// 8.2 궤도 (심화 20문항)
// ==========================================

{
  id: 'civil_8_2_001',
  subject: 'urban',
  chapter: '토목일반',
  question: '궤도(Track)의 주요 구성 요소 3가지에 해당하지 않는 것은?',
  options: ['레일', '침목', '도상', '노반'],
  answer: 3,
  explanation: '궤도는 레일, 침목, 도상으로 이루어지는 철도선로의 중요한 부분이다. (노반은 궤도를 지지하는 하부 구조)',
  source: '도시철도 8장 8.2.1'
},
{
  id: 'civil_8_2_002',
  subject: 'urban',
  chapter: '토목일반',
  question: '우리나라에서 사용하는 대부분의 레일 단면 형상은?',
  options: ['쌍두 레일', '우두 레일', '평저 레일', '유구 레일'],
  answer: 2,
  explanation: '현재 우리나라에서 사용하는 대부분 레일은 평저 레일이다.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_2_003',
  subject: 'urban',
  chapter: '토목일반',
  question: '도시철도에서 사용하는 정척 레일의 한 개의 길이는?',
  options: ['10m', '20m', '25m', '200m'],
  answer: 1,
  explanation: '도시철도에서는... 한 개의 레일 길이를 20m로 하는 정척 레일을 사용하고 있다. (한국철도공사는 25m)',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_2_004',
  subject: 'urban',
  chapter: '토목일반',
  question: '장대 레일(Continuous Welded Rail)의 기준 길이는?',
  options: ['100m 이상', '200m 이상', '300m 이상', '500m 이상'],
  answer: 1,
  explanation: '장대 레일 : 200m 이상.',
  source: '도시철도 8장 [표 8-17]'
},
{
  id: 'civil_8_2_005',
  subject: 'urban',
  chapter: '토목일반',
  question: '60kg 레일의 교환 기준이 되는 누적 통과 톤수는?',
  options: ['3억 톤', '5억 톤', '6억 톤', '8억 톤'],
  answer: 2,
  explanation: '60kg 레일의 통과 톤수 기준은 6억 톤이다. (50kg은 5억 톤)',
  source: '도시철도 8장 [표 8-16]'
},
{
  id: 'civil_8_2_006',
  subject: 'urban',
  chapter: '토목일반',
  question: '내구연한이 길어(보통 레일의 6배) 마모가 심한 곳에 주로 쓰이는 특수 레일은?',
  options: ['고탄소강 레일', '망간 레일', '경두 레일', '복합 레일'],
  answer: 1,
  explanation: '망간 레일 : 망간(Mn)을 10~15% 정도 함유시킨 레일로서 내구연한이 길며(보통 레일의 6배) 마모가 심한 곳에 주로 쓰인다.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_2_007',
  subject: 'urban',
  chapter: '토목일반',
  question: '도상이 과도하게 견고하여 탄력성이 부족할 때 레일 길이 방향으로 파형으로 마모되는 현상은?',
  options: ['측면 마모', '편 마모', '파상 마모', '수직 마모'],
  answer: 2,
  explanation: '파상(波狀) 마모 현상... 도상이 과도하게 견고한 장소나 콘크리트 도상 등... 탄력성이 부족함에 따라 균열이 발생하는 것을 말한다.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_2_008',
  subject: 'urban',
  chapter: '토목일반',
  question: '목 침목의 방부 처리에 사용되는 혼합유 성분은?',
  options: ['크레오소오트유 + 중유', '휘발유 + 경유', '아스팔트유 + 등유', '알코올 + 벤젠'],
  answer: 0,
  explanation: '주약 처리 방법 : 크레오소오트 50% + 중유 50%',
  source: '도시철도 8장 8.2.3'
},
{
  id: 'civil_8_2_009',
  subject: 'urban',
  chapter: '토목일반',
  question: '서울교통공사 기준 지하 본선(정)의 20m당 침목 부설 수는?',
  options: ['30정', '34정', '35정', '40정'],
  answer: 1,
  explanation: '지하 본선(정) : 34정.',
  source: '도시철도 8장 [표 8-19]'
},
{
  id: 'civil_8_2_010',
  subject: 'urban',
  chapter: '토목일반',
  question: '이음매 침목의 치수(길이×폭×두께)로 옳은 것은?',
  options: ['2,500×240×150', '2,500×300×150', '3,000×230×230', '2,800×240×150'],
  answer: 1,
  explanation: '이음매 침목 : 2,500×300×150 mm',
  source: '도시철도 8장 8.2.3'
},
{
  id: 'civil_8_2_011',
  subject: 'urban',
  chapter: '토목일반',
  question: '콘크리트 침목의 단점으로 옳은 것은?',
  options: ['부식의 염려가 있다', '자중이 가벼워 안정이 나쁘다', '전기 절연성이 목 침목보다 부족하다', '보수비가 많이 든다'],
  answer: 2,
  explanation: '콘크리트 침목 단점: 전기 절연성이 목 침목 보다 부족하다, 충격력에 약하고 탄성이 부족하다 등.',
  source: '도시철도 8장 8.2.3'
},
{
  id: 'civil_8_2_012',
  subject: 'urban',
  chapter: '토목일반',
  question: '도상 계수 K값이 얼마일 때 "우량 노반"으로 판정하는가?',
  options: ['0.5 MPa', '0.9 MPa', '1.1 MPa', '1.3 MPa'],
  answer: 3,
  explanation: 'k = 1.3MPa : 우량 노반',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'civil_8_2_013',
  subject: 'urban',
  chapter: '토목일반',
  question: '도상 자갈의 구비 조건으로 틀린 것은?',
  options: ['경질일 것', '단위 중량이 가벼울 것', '능각이 풍부할 것', '배수가 양호할 것'],
  answer: 1,
  explanation: '단위 중량이 무겁고, 능각이 풍부하고 입자 간의 마찰력이 클 것.',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'civil_8_2_014',
  subject: 'urban',
  chapter: '토목일반',
  question: '콘크리트 도상의 장점으로 틀린 것은?',
  options: ['보수 노력이 경감된다', '궤도 틀림 진행이 적다', '건설비가 저렴하다', '배수가 양호하다'],
  answer: 2,
  explanation: '콘크리트 도상은 시공 기간이 길고 건설비가 많이 든다는 단점이 있다.',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'civil_8_2_015',
  subject: 'urban',
  chapter: '토목일반',
  question: '기존 콘크리트 도상과 노반 사이에 완충재(모르타르 등)를 삽입시키는 궤도 구조는?',
  options: ['자갈 도상 궤도', '슬래브 궤도(Slab Track)', '목재 궤도', '무도상 궤도'],
  answer: 1,
  explanation: '슬래브 궤도 : 직결 도상 체결 방식에 의한 콘크리트 도상과 노반 사이에 시멘트 아스팔트 모르타르를 완충재로 삽입시키는 궤도.',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'civil_8_2_016',
  subject: 'urban',
  chapter: '토목일반',
  question: '레일 체결 장치의 기능으로 옳지 않은 것은?',
  options: ['궤간의 확보', '전기적 절연 성능 확보', '진동의 증폭', '레일 복진 방지'],
  answer: 2,
  explanation: '진동의 감쇠, 차단이 기능이다. (증폭은 틀림)',
  source: '도시철도 8장 8.2.5'
},
{
  id: 'civil_8_2_017',
  subject: 'urban',
  chapter: '토목일반',
  question: '고무제의 타이 패드를 깔고 상하 쌍방에서 체결하는 방식은?',
  options: ['일반 스파이크', '나사 스파이크', '단 탄성 체결', '2중 탄성 체결'],
  answer: 3,
  explanation: '고무제의 탄성 패드를 깔고 상하 쌍방에서 체결하는 것을 이중 탄성 체결이라 한다.',
  source: '도시철도 8장 8.2.5'
},
{
  id: 'civil_8_2_018',
  subject: 'urban',
  chapter: '토목일반',
  question: '탄성 체결구의 특징으로 옳지 않은 것은?',
  options: ['열차 진동과 충격을 흡수 완화한다', '레일의 복진을 방지한다', '전기적 절연을 확보할 수 없다', '궤간 틀림 등에 대해 효과적이다'],
  answer: 2,
  explanation: '타이 패드의 전기 절연성에 의한 레일과 침목과의 절연을 확보할 수 있다.',
  source: '도시철도 8장 8.2.5'
},
{
  id: 'civil_8_2_019',
  subject: 'urban',
  chapter: '토목일반',
  question: '레일 끝부분 열처리(Rail end hardening)의 주된 목적은?',
  options: ['전기 전도성 향상', '부식 방지', '이음매부의 끝 닳음 예방', '용접 용이성 확보'],
  answer: 2,
  explanation: '이음매부의 끝 닳음을 예방하기 위하여 보통 레일의 끝부분을 10~20㎝ 정도 표면을 열처리한 것.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'civil_8_2_020',
  subject: 'urban',
  chapter: '토목일반',
  question: '레일의 마모 방지 대책으로 교재에 언급되지 않은 것은?',
  options: ['레일 경질화', '레일 중량화', '레일 도유기 설치', '레일 가열 장치 설치'],
  answer: 3,
  explanation: '레일의 마모 방지는 레일 경질(硬質)화, 중량(重量)화, 레일 도유기 설치로 가능하다.',
  source: '도시철도 8장 8.2.2'
},

{
  id: 'core_8_001',
  subject: 'urban',
  chapter: '토목일반',
  question: '궤간의 측정 기준점은 레일 윗면에서 아래로 몇 mm인가?',
  options: [
    '10mm',
    '14mm',
    '16mm',
    '20mm'
  ],
  answer: 1,
  explanation: '‘궤간’이란 양쪽 레일 안쪽 간의 거리 중 가장 짧은 거리를 말하며, 레일의 윗면으로부터 14mm 아래 지점을 기준으로 한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'core_8_002',
  subject: 'urban',
  chapter: '토목일반',
  question: '표준궤간의 표준 치수는?',
  options: [
    '1,067mm',
    '1,435mm',
    '1,520mm',
    '1,600mm'
  ],
  answer: 1,
  explanation: '세계 주요 국가에서 대부분 1,435mm인 표준 궤간(standard gauge)을 채용하고 있다.',
  source: '도시철도 8장 8.1.1.3'
},
{
  id: 'core_8_003',
  subject: 'urban',
  chapter: '토목일반',
  question: '캔트(Cant)에 대한 설명으로 옳은 것은?',
  options: [
    '안쪽 레일을 기준으로 바깥쪽 레일을 높게 부설하는 것',
    '바깥쪽 레일을 기준으로 안쪽 레일을 높게 부설하는 것',
    '궤간을 넓히는 것',
    '궤간을 좁히는 것'
  ],
  answer: 0,
  explanation: '‘캔트(Cant)’란 차량이 곡선 구간을 원활하게 운행할 수 있도록 안쪽 레일을 기준으로 바깥쪽 레일을 높게 부설하는 것을 말한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'core_8_004',
  subject: 'urban',
  chapter: '토목일반',
  question: '슬랙(Slack)에 대한 설명으로 옳은 것은?',
  options: [
    '바깥쪽 레일을 높이는 것',
    '바깥쪽 레일을 기준으로 안쪽 레일을 조정하여 궤간을 넓히는 것',
    '레일 간격을 좁히는 것',
    '레일을 교체하는 것'
  ],
  answer: 1,
  explanation: '‘슬랙(Slack, 확대 궤간)’이란 차량이 곡선 구간의 선로를 원활하게 통과하도록 바깥쪽 레일을 기준으로 궤간을 넓히는 것을 말한다.',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'core_8_005',
  subject: 'urban',
  chapter: '토목일반',
  question: '궤간(1,435mm)을 측정하는 위치는 레일 윗면으로부터 몇 mm 아래인가?',
  options: [
    '10mm',
    '14mm',
    '20mm',
    '25mm'
  ],
  answer: 1,
  explanation: '궤간은 레일의 맨 위쪽 부분으로부터 14mm 아래 지점에 위치한 양쪽 레일의 안쪽 간의 가장 짧은 거리를 말한다.',
  source: '도시철도 8장 8.1.1.3'
},
{
  id: 'core_8_006',
  subject: 'urban',
  chapter: '토목일반',
  question: '곡선 구간에서 궤간을 확대하는 "슬랙(Slack)"의 최대 한도는?',
  options: [
    '15mm',
    '20mm',
    '25mm',
    '30mm'
  ],
  answer: 2,
  explanation: '확대 궤간은 곡선 부분의 안쪽 레일에 두어야 하며, 그 치수는 25mm를 초과하지 아니하는 범위에서 정한다.',
  source: '도시철도 8장 8.1.2'
},
{
  id: 'core_8_007',
  subject: 'urban',
  chapter: '토목일반',
  question: '차량 한계와 건축 한계의 설명으로 옳은 것은?',
  options: [
    '차량 한계가 건축 한계보다 크다',
    '건축 한계는 차량이 흔들려도 닿지 않아야 할 공간이다',
    '차량 한계 내에 신호기를 설치한다',
    '두 한계의 크기는 동일하다'
  ],
  answer: 1,
  explanation: '‘건축 한계’란 차량이 안전하게 운행될 수 있도록 궤도 위에 설정한 일정한 공간을 말하며, 차량 한계는 건축 한계보다 좁게 설정하여 철도 시설물과 차량과의 접촉을 방지하는 것이다.',
  source: '도시철도 8장 8.1.5'
},
{
  id: 'core_8_008',
  subject: 'urban',
  chapter: '토목일반',
  question: '곡선부 주행 저항을 고려하여 실제 기울기를 낮춰주는 것을 무엇이라 하는가?',
  options: [
    '완화 곡선',
    '종단 곡선',
    '곡선 보정(환산 기울기)',
    '캔트 체감'
  ],
  answer: 2,
  explanation: '곡선 저항을 고려하여 기울기를 보정하는 것을 곡선 보정이라 하며, 곡선 저항을 기울기 저항으로 환산한 환산 기울기(Gc = 700/R)만큼 최대 기울기를 완화해야 한다.',
  source: '도시철도 8장 8.1.3'
},
{
  id: 'core_8_009',
  subject: 'urban',
  chapter: '토목일반',
  question: '분기기의 "정위(Normal)"란 무엇을 의미하는가?',
  options: [
    '분기기가 고장 난 상태',
    '평상시 개통되어 있는 방향',
    '열차가 진입하는 방향',
    '측선으로 가는 방향'
  ],
  answer: 1,
  explanation: '상시 개통되어 있는 방향을 포인트의 정위라 하고 반대로 개통되어 있는 것을 반위라 한다.',
  source: '도시철도 8장 8.1.4'
},
{
  id: 'core_8_010',
  subject: 'urban',
  chapter: '토목일반',
  question: '레일의 중량화(50kg -> 60kg) 효과로 틀린 것은?',
  options: [
    '레일 수명 연장',
    '보수비 절감',
    '진동 및 소음 감소',
    '전차선 전압 상승 효과'
  ],
  answer: 3,
  explanation: '레일 중량화의 장점은 구조적 안전성, 내구연한 증대, 유지 보수비 절감, 소음 및 진동 저감 등이다. 전압 상승과는 관련이 없다.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'core_8_011',
  subject: 'urban',
  chapter: '토목일반',
  question: '열차의 교행 또는 대피 시설을 갖추고 있는 정거장은?',
  options: [
    '신호장',
    '신호소',
    '간이역',
    '임시 승강장'
  ],
  answer: 0,
  explanation: '‘신호장’이란 열차의 교행 또는 대피를 위하여 설치한 장소를 말한다. (신호소는 교행 시설이 없음)',
  source: '도시철도 8장 8.1.1.1'
},
{
  id: 'core_8_012',
  subject: 'urban',
  chapter: '토목일반',
  question: '궤도의 노반 강도를 나타내는 도상계수(K_30) 기준 중 "우량"에 해당하는 값은?',
  options: [
    '0.7 MPa 이상',
    '0.9 MPa 이상',
    '1.1 MPa 이상',
    '1.3 MPa 이상'
  ],
  answer: 3,
  explanation: '도상 계수(K) 판정 기준에서 K = 1.3MPa는 우량 노반에 해당한다.',
  source: '도시철도 8장 8.2.4'
},
{
  id: 'core_8_013',
  subject: 'urban',
  chapter: '토목일반',
  question: '우리나라 도시철도(지하 구간)에서 주로 사용하는 정척 레일의 길이는?',
  options: [
    '10m',
    '15m',
    '20m',
    '25m'
  ],
  answer: 2,
  explanation: '도시철도에서는 도로 운송 제약 및 지하 터널로의 반입 어려움을 고려하여 한 개의 레일 길이를 20m로 하는 정척 레일을 사용하고 있다.',
  source: '도시철도 8장 8.2.2'
},
{
  id: 'core_8_014',
  subject: 'urban',
  chapter: '토목일반',
  question: '선로의 기울기(구배)가 변하는 지점에 차량의 충격을 완화하기 위해 설치하는 곡선은?',
  options: [
    '완화 곡선',
    '종단 곡선',
    '반향 곡선',
    '복심 곡선'
  ],
  answer: 1,
  explanation: '‘종곡선(종단 곡선)’이란 차량이 선로 기울기의 변경 지점을 원활하게 운행할 수 있도록 종단면에 두는 곡선을 말한다.',
  source: '도시철도 8장 8.1.1.1'
}

];
