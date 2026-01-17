/**
 * 도시철도시스템 - 11단원 문제
 */
var QUESTIONS_URBAN_CH11 = [
   // 11.1 노면전차 시스템 일반
{
  id: 'tram_11_001',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 용어 정의 중 "가공 전차선 또는 제3궤조로부터 전력을 공급받지 아니하고 차량에 탑재된 에너지원을 통하여 운행하는 방식"은?',
  options: ['유가선', '무가선', '바이 모달', '유도 급전'],
  answer: 1,
  explanation: '‘무가선(無架線)’이란 가공 전차선 또는 제3궤조로부터 전력을 공급받지 아니하고 차량에 탑재된 에너지원을 통하여 운행하는 급전 방식을 말한다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_002',
  subject: 'urban',
  chapter: '노면전차',
  question: '일반 도로와 전용 궤도를 모두 운행할 수 있는 차량 형태를 의미하는 용어는?',
  options: ['하이브리드', '바이 모달(Bi-modal)', '듀얼 모드', '트램 트레인'],
  answer: 1,
  explanation: '‘바이 모달(Bi-modal)’이란 ‘두 가지 모드(Mode)를 가진’뜻으로 일반 도로와 전용 궤도를 모두 운행할 수 있는 차량 형태를 의미한다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_003',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 차량 하부에 탑재된 제동 패드를 전자기력으로 매설된 레일에 흡착시켜 감속하는 제동장치는?',
  options: ['VVVF', 'MTB', 'ABS', 'TCMS'],
  answer: 1,
  explanation: '‘MTB(Magnetic Track Brake)’란 노면전차 차량 하부에 탑재된 제동 패드를 전자기력으로 매설된 레일에 흡착시켜 감속하는 방식의 제동장치이다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_004',
  subject: 'urban',
  chapter: '노면전차',
  question: '우리나라에서 서대문과 동대문 간에 최초로 전차가 개통된 연도는?',
  options: ['1882년', '1898년', '1899년', '1910년'],
  answer: 2,
  explanation: '우리나라에서는 1899년에 서대문과 동대문 간에 전차를 개통하였다.',
  source: '도시철도 11장 11.1.2'
},
{
  id: 'tram_11_005',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차의 특징으로 교재에 명시된 장점이 아닌 것은?',
  options: ['중량 전철에 비해 건설 비용이 저렴하다', '급곡선의 노선 설계가 가능하다', '교통 약자의 접근성이 매우 우수하다', '기후의 영향을 전혀 받지 않는다'],
  answer: 3,
  explanation: '노면전차는 지상 운행을 목적으로 하므로 기후의 영향을 많이 받는다는 단점이 있다.',
  source: '도시철도 11장 11.1.4'
},

// 11.2 노면전차 관련 법령
{
  id: 'tram_11_006',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 운영에서 핵심적인 법적 근거를 포함하는 "노면전차 3법"에 해당하지 않는 것은?',
  options: ['도시철도법', '철도안전법', '도로교통법', '건축법'],
  answer: 3,
  explanation: '노면전차 3법은 도시철도법, 철도안전법, 도로교통법이다.',
  source: '도시철도 11장 11.2.1'
},
{
  id: 'tram_11_007',
  subject: 'urban',
  chapter: '노면전차',
  question: '도시철도법상 노면전차 전용로 설치가 원칙이나 예외적으로 설치 가능한 차로는?',
  options: ['혼용 차로', '버스 전용 차로', '가변 차로', '임시 차로'],
  answer: 0,
  explanation: '전용 차로·도로 설치로 도로 교통이 현저히 혼잡해질 수 있는 경우 등 예외적으로 혼용 차로 설치가 가능하다.',
  source: '도시철도 11장 11.2.2'
},
{
  id: 'tram_11_008',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 건설 규칙상 혼용 차로 구간은 전체 선로의 얼마 이하로 제한되는가?',
  options: ['10분의 1', '5분의 1', '3분의 1', '2분의 1'],
  answer: 1,
  explanation: '혼용 차로 구간은 전체 선로의 5분의 1 이하로 제한한다.',
  source: '도시철도 11장 11.2.2 [표 11-7]'
},
{
  id: 'tram_11_009',
  subject: 'urban',
  chapter: '노면전차',
  question: '교통 약자의 원활한 이용을 위하여 노면전차 플랫폼 높이는 출입문 바닥과 얼마 이내로 설정해야 하는가?',
  options: ['10mm', '15mm', '20mm', '30mm'],
  answer: 1,
  explanation: '플랫폼 높이는 교통 약자의 원활한 이용을 위하여 출입문 바닥과 15mm 이내로 설정한다.',
  source: '도시철도 11장 11.2.2 [표 11-10]'
},
{
  id: 'tram_11_010',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 건설 규칙상 도로 연계형 선로 운행 시 시속 몇 km를 초과하여 주행할 수 없는가?',
  options: ['50km', '60km', '70km', '80km'],
  answer: 2,
  explanation: '도로 연계형 선로 운행 시 해당 도로의 최고 속도 및 시속 70km 초과 주행 금지.',
  source: '도시철도 11장 11.2.2 [표 11-12]'
},
{
  id: 'tram_11_011',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 운전자가 시속 15km 이하로 서행해야 하는 경우가 아닌 것은?',
  options: ['선로 전환기가 쇄정되지 않은 곳을 운행할 경우', '최초 진행 방향과 반대로 주행할 경우', '직선 구간을 주행할 경우', '같은 차로 내 선행 차량과의 거리가 100m 이하일 경우'],
  answer: 2,
  explanation: '직선 구간 주행은 서행 사유가 아니다. 1. 쇄정되지 않은 곳, 2. 반대 주행, 3. 100m 이하 거리일 때 15km/h 이하로 운행한다.',
  source: '도시철도 11장 11.2.2 [표 11-12]'
},
{
  id: 'tram_11_012',
  subject: 'urban',
  chapter: '노면전차',
  question: '철도안전법상 노면전차를 운전하려는 사람이 철도차량 운전면허 외에 추가로 소지해야 하는 면허는?',
  options: ['제1종 보통 운전면허', '제1종 대형 운전면허', '제2종 보통 운전면허', '원동기장치자전거 면허'],
  answer: 1,
  explanation: '노면전차를 운전하려는 사람은 철도차량 운전면허 외에 도로교통법 제80조에 따른 1종 대형 운전면허(버스)를 받도록 규정하고 있다.',
  source: '도시철도 11장 11.2.3'
},
{
  id: 'tram_11_013',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차의 철도 보호 지구는 바깥쪽 궤도 끝에서 몇 m 이내의 지역으로 지정되는가?',
  options: ['5m', '10m', '20m', '30m'],
  answer: 1,
  explanation: '노면전차의 경우 바깥쪽 궤도 끝에서 10m 이내의 지역을 철도 보호 지구로 지정한다. (일반 철도는 30m)',
  source: '도시철도 11장 11.2.3'
},
{
  id: 'tram_11_014',
  subject: 'urban',
  chapter: '노면전차',
  question: '도로교통법상 노면전차 운전이 금지되는 운전자 혈중알코올농도 기준은?',
  options: ['0.03%', '0.05%', '0.08%', '0.10%'],
  answer: 1,
  explanation: '운전이 금지되는 상태의 기준은 운전자 혈중알코올농도 0.05%이다.',
  source: '도시철도 11장 11.2.4 [표 11-19]'
},
{
  id: 'tram_11_015',
  subject: 'urban',
  chapter: '노면전차',
  question: '도로교통법상 노면전차 운전자는 교차로 진입 시 어떤 상황에서 진입이 금지되는가?',
  options: ['녹색 신호일 때', '보행자가 없을 때', '교차로 내에 정지하게 되어 다른 차의 통행에 방해가 될 우려가 있을 때', '우회전 하려고 할 때'],
  answer: 2,
  explanation: '교차로 진입 시 진행 진로 앞의 차 또는 노면전차 상황에 따라 교차로에 정지하게 되어... 방해가 될 우려가 있을 시 진입 금지(꼬리물기 금지).',
  source: '도시철도 11장 11.2.4 [표 11-18]'
},

// 11.3 노면전차 차량 시스템
{
  id: 'tram_11_016',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 가선 급전 방식에서 주로 사용하는 전압은?',
  options: ['AC 25,000V', 'DC 1,500V', 'DC 600~800V', 'AC 220V'],
  answer: 2,
  explanation: '노면전차는 도심 위를 달리는 특성상 안전을 위하여 DC 600~800V 사이의 더 낮은 전압을 사용하고 있다.',
  source: '도시철도 11장 11.3.1'
},
{
  id: 'tram_11_017',
  subject: 'urban',
  chapter: '노면전차',
  question: '무가선 노면전차에 사용되는 배터리 중 기억 효과(Memory effect)가 없고 자연 방전이 적은 전지는?',
  options: ['니켈-카드뮴 전지', '니켈-수소 전지(Ni-MH)', '리튬 이온 전지(Li-Ion)', '납축전지'],
  answer: 2,
  explanation: '리튬 이온 전지는 니켈 전지의 단점인 기억 효과가 없고, 자연 방전 현상도 매우 적은 편이다.',
  source: '도시철도 11장 11.3.1'
},
{
  id: 'tram_11_018',
  subject: 'urban',
  chapter: '노면전차',
  question: '슈퍼 커패시터(Super Capacitor) 방식의 단점으로 지적되는 것은?',
  options: ['충전 시간이 매우 길다', '폭발 위험이 크다', '출력이 매우 낮다', '방전 시간이 짧아 짧은 거리(약 1.5km)마다 충전해야 한다'],
  answer: 3,
  explanation: '짧은 충전 시간만큼 방전되는 시간도 짧은 편이기에 1.5km마다 충전 장치를 설치해야 한다.',
  source: '도시철도 11장 11.3.1'
},
{
  id: 'tram_11_019',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차와 노선 사이에 일정한 간격(공극)을 두고 비접촉으로 급전하는 방식은?',
  options: ['가선 급전 방식', '배터리 방식', '슈퍼 커패시터 방식', '유도 급전 방식'],
  answer: 3,
  explanation: '비접촉 유도 급전 시스템은 노면전차와 노선 사이에 일정한 간격(공극)을 두고 비접촉으로 급전하는 방식이다.',
  source: '도시철도 11장 11.3.1'
},
{
  id: 'tram_11_020',
  subject: 'urban',
  chapter: '노면전차',
  question: '최근 노면전차에서 주로 사용하는 싱글 암(Single Arm) 방식 팬터그래프의 상승/하강 구동 방식은?',
  options: ['압축공기 방식', '스프링 방식', '유압 방식', 'DC 24V 모터 방식'],
  answer: 3,
  explanation: '노면전차에 사용된 이 팬터그래프는 DC 24V 모터의 동작에 의해 상승, 하강하는 방식이다.',
  source: '도시철도 11장 11.3.2'
},
{
  id: 'tram_11_021',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 견인전동기의 형식으로 주로 사용되는 것은?',
  options: ['직류 직권 전동기', '3상 농형 유도전동기', '동기 전동기', '스텝 모터'],
  answer: 1,
  explanation: '노면전차 견인전동기 제원: 형식 - 3상 농형 유도전동기.',
  source: '도시철도 11장 11.3.3'
},
{
  id: 'tram_11_022',
  subject: 'urban',
  chapter: '노면전차',
  question: '보조 전원 장치(APU)가 출력하는 직류(DC) 전압은 얼마인가?',
  options: ['DC 12V', 'DC 24V', 'DC 27.4V', 'DC 100V'],
  answer: 2,
  explanation: 'DC 출력 정격출력전압은 27.4V DC(±2%)이다.',
  source: '도시철도 11장 11.3.4 [표 11-22]'
},
{
  id: 'tram_11_023',
  subject: 'urban',
  chapter: '노면전차',
  question: '냉난방 장치(HVAC)가 객실 내 환기를 위해 측정하는 기준 물질은?',
  options: ['미세먼지', '산소(O2)', '이산화탄소(CO2)', '일산화탄소(CO)'],
  answer: 2,
  explanation: '천정에 설치된 CO2 센서에 의해 객실 내 공기 질을 측정하고 나쁘다고 판단될 경우 팬을 동작시켜 환기한다.',
  source: '도시철도 11장 11.3.5'
},
{
  id: 'tram_11_024',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차에 적용되는 유압 제동 시스템에서 "정차제동(Holding Brake)"의 목적은?',
  options: ['비상시 급정거', '주행 중 속도 조절', '차량이 뒤로 밀리는 Roll Back 현상 방지', '장기간 주차 시 사용'],
  answer: 2,
  explanation: '정차제동은 역에서 정차하는 동안... 선로에 경사가 있는 여건에서 차량이 뒤로 밀리는 Roll Back 현상을 방지하기 위해 사용한다.',
  source: '도시철도 11장 11.3.7'
},
{
  id: 'tram_11_025',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차의 비상제동 시 트랙 브레이크(MTB)의 최대 감속도는?',
  options: ['3.5 km/h/s', '4.5 km/h/s', '5.0 km/h/s', '6.0 km/h/s'],
  answer: 3,
  explanation: '트랙 브레이크의 경우 감속도가 약 6.0km/h/s에 달한다. (비상제동 표에도 Max 6.0 km/h/s로 명시)',
  source: '도시철도 11장 11.3.7'
},

// 11.4 노면전차 신호 시스템
{
  id: 'tram_11_026',
  subject: 'urban',
  chapter: '노면전차',
  question: '해외 노면전차 운전은 전용 노선에서 어떤 운전 방식을 기본으로 하는가?',
  options: ['ATC 운전', 'ATO 운전', '시계 운전(Drive on Sight)', 'CBTC 운전'],
  answer: 2,
  explanation: '해외 노면전차 운전은 전용 노선에서 운전자 책임하에 시계 운전(Drive on Sight)을 기본으로 하고 있다.',
  source: '도시철도 11장 11.4.1'
},
{
  id: 'tram_11_027',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 신호기 중 "정지"를 의미하는 현시는?',
  options: ['수직의 흰색 막대', '수평의 흰색 막대', '노란색 T자형', '오른쪽으로 기운 흰색 막대'],
  answer: 1,
  explanation: '수평의 흰색 막대형 조명등은 정지를 의미한다.',
  source: '도시철도 11장 11.4.2 [표 11-30]'
},
{
  id: 'tram_11_028',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 신호기 중 "출발 예고(진행 예고)"를 의미하는 현시는?',
  options: ['수직의 흰색 막대', '수평의 흰색 막대', '노란색 T자형', '초점형 흰색 막대'],
  answer: 2,
  explanation: '노란색 T자형 조명등은 출발 예고(진행 예고)를 의미한다.',
  source: '도시철도 11장 11.4.2 [표 11-30]'
},
{
  id: 'tram_11_029',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 신호기 중 "진행"을 의미하는 현시는?',
  options: ['수직의 흰색 막대', '수평의 흰색 막대', '노란색 T자형', '초점형 흰색 막대'],
  answer: 0,
  explanation: '수직의 흰색 막대형 조명등은 진행을 의미한다.',
  source: '도시철도 11장 11.4.2 [표 11-30]'
},
{
  id: 'tram_11_030',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 신호등의 설치 높이 기준으로 권장되는 범위는?',
  options: ['2.0m ~ 2.5m', '3.5m ~ 4.0m', '5.0m ~ 5.5m', '6.0m 이상'],
  answer: 1,
  explanation: '시인성과 안전성을 고려하여 신호등의 높이를 3.5m∼4m 이하로 설치하여야 한다.',
  source: '도시철도 11장 11.4.2'
},
{
  id: 'tram_11_031',
  subject: 'urban',
  chapter: '노면전차',
  question: '능동식 우선 신호 기법 중 "적색 신호 시간을 줄이고 녹색 시간을 일찍 시작하여 지체를 줄이는 방법"은?',
  options: ['Early Green', 'Green Extension', 'Phase Insert', 'Queue Jump'],
  answer: 0,
  explanation: 'Early Green 기법은 적색 신호 시간을 줄이고, 녹색 시간을 기준 시간보다 일찍 적용하여 지체 시간을 줄여 주는 것이다.',
  source: '도시철도 11장 11.4.3'
},
{
  id: 'tram_11_032',
  subject: 'urban',
  chapter: '노면전차',
  question: '능동식 우선 신호 기법 중 "녹색 신호 시간을 연장하여 교차로를 통과할 수 있도록 하는 방법"은?',
  options: ['Early Green', 'Green Extension', 'Phase Insert', 'Passive Priority'],
  answer: 1,
  explanation: 'Green Extension 전략은 녹색 신호의 우선 현시를 연장하여 지체 없이 교차로를 통과할 수 있도록 한 기법이다.',
  source: '도시철도 11장 11.4.3'
},
{
  id: 'tram_11_033',
  subject: 'urban',
  chapter: '노면전차',
  question: '능동식 우선 신호 기법 중 "적색 시간 도중 짧은 통과 시간을 삽입하는 방식"은?',
  options: ['Early Green', 'Green Extension', 'Phase Insert', 'Fixed Priority'],
  answer: 2,
  explanation: 'Phase Insert 기법은 적색 시간 도중 한시적으로 대중교통 통과가 가능하도록 짧은 시간을 제공하는 것이다.',
  source: '도시철도 11장 11.4.3'
},

// 11.5 노면전차 기타 장치
{
  id: 'tram_11_034',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차의 차량 상태 및 고장을 감시하고 전기장치를 제어하는 "열차 종합 제어장치"의 약어는?',
  options: ['ICCP', 'TCMS', 'HVAC', 'VVVF'],
  answer: 1,
  explanation: '열차 종합 제어장치(Train Control and Monitoring System, TCMS)란 열차의 총괄적인 제어와 감시를 수행하는 장치이다.',
  source: '도시철도 11장 11.5.1'
},
{
  id: 'tram_11_035',
  subject: 'urban',
  chapter: '노면전차',
  question: 'TCMS 시스템 구성 요소 중 양쪽 운전실에 장착되어 이중구조로 제어권을 갖는 중앙 제어 유닛은?',
  options: ['CCU', 'MVB', 'DU', 'IO'],
  answer: 0,
  explanation: 'CCU(Central Control Unit)가 양쪽 운전실에 장착되어 이중구조로 구성되어 있다.',
  source: '도시철도 11장 11.5.1'
},
{
  id: 'tram_11_036',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차의 방송, 승객 안내 표시, 감시 카메라 등을 통합 제어하는 장치의 약어는?',
  options: ['TCMS', 'ICCP', 'VVVF', 'ECU'],
  answer: 1,
  explanation: '종합 방송 제어장치(ICCP)는 차상 방송 장치, 승객 안내 표시 장치, 실내/외 감시 카메라 등을 제어한다.',
  source: '도시철도 11장 11.5.2'
},
{
  id: 'tram_11_037',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 출입문 제어 장치(DCU)의 기능 중 고장 발생 시 신호를 다음 DCU로 넘겨 나머지 출입문을 정상 동작시키는 기능은?',
  options: ['비상 핸들 작동', 'Isolation S/W', '장애물 검지', '재개폐 기능'],
  answer: 1,
  explanation: 'Isolation S/W 기능은 고장 출입문의 신호를 By-Pass하여 고장 출입문을 제외한 모든 출입문은 정상 동작하도록 한다.',
  source: '도시철도 11장 11.5.3'
},

// 추가 보충 문제
{
  id: 'tram_11_038',
  subject: 'urban',
  chapter: '노면전차',
  question: '도시철도법 제2조에 따른 노면전차의 정의에 포함되지 않는 것은?',
  options: ['도로상의 일부에 부설한 레일 위를 주행하는 전차', '도시교통 권역에서 건설·운영하는 교통수단', '궤도에 의한 교통 시설', '지하 터널만을 운행하는 전철'],
  answer: 3,
  explanation: '노면전차는 "도로상의 일부에 부설한 레일 위를 주행하는 전차"를 말한다. 지하 터널만을 운행하는 것은 일반적인 도시철도(지하철)이다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_039',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 3법 중 하나인 철도안전법에서 규정하는 내용은?',
  options: ['노면전차 전용로 설치', '노면전차 운전면허', '노면전차의 도로 통행 방법', '노면전차 신호등 종류'],
  answer: 1,
  explanation: '철도안전법은 철도차량 운전면허, 철도 안전 관리 체계 승인 등을 규정한다. 전용로는 도시철도법, 통행 방법/신호등은 도로교통법이다.',
  source: '도시철도 11장 11.2.1 [표 11-3]'
},
{
  id: 'tram_11_040',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 운전면허 시험의 합격 기준은 필기시험 평균 몇 점 이상인가?',
  options: ['40점', '60점', '70점', '80점'],
  answer: 1,
  explanation: '운전면허 시험의 필기시험에서 평균 60점 이상을 받도록 규정하고 있다.',
  source: '도시철도 11장 11.2.3'
},
{
  id: 'tram_11_041',
  subject: 'urban',
  chapter: '노면전차',
  question: '도로교통법상 노면전차 운전자는 어린이 보호구역에서 시속 몇 km 이내로 통행 속도를 제한받을 수 있는가?',
  options: ['20km', '30km', '40km', '50km'],
  answer: 1,
  explanation: '어린이 보호구역에서 노면전차의 통행 속도를 시속 30km 이내로 제한 가능하다.',
  source: '도시철도 11장 11.2.4 [표 11-16]'
},
{
  id: 'tram_11_042',
  subject: 'urban',
  chapter: '노면전차',
  question: '하이브리드 방식 노면전차에서 팬터그래프의 역할은?',
  options: ['오직 가선 구간 운행 전원 공급만 담당', '오직 배터리 충전만 담당', '가선 전원 공급 및 배터리 충전 겸용', '비상용 예비 장치'],
  answer: 2,
  explanation: '하이브리드 팬터그래프는 전동기를 움직이게 하는 역할과 동시에 탑재된 대용량 배터리를 충전하기 위한 충전기 역할도 함께 수행한다.',
  source: '도시철도 11장 11.3.1'
},
{
  id: 'tram_11_043',
  subject: 'urban',
  chapter: '노면전차',
  question: '리튬 이온 전지의 단점(폭발 위험 등)을 개선하여 전해질을 젤 형태로 만든 배터리는?',
  options: ['니켈-수소 전지', '납축전지', '리튬 폴리머(Li-Po) 전지', '알카라인 전지'],
  answer: 2,
  explanation: '리튬 폴리머 전지는 전해질이 용액이 아닌 젤 형태로 되어 있어 리튬 이온 전지보다 훨씬 안정적이다.',
  source: '도시철도 11장 11.3.1'
},
{
  id: 'tram_11_044',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 견인전동기 제원에서 정격 전압은?',
  options: ['DC 750V', 'AC 380V', 'AC 550V', 'AC 220V'],
  answer: 2,
  explanation: '견인전동기 전압은 AC 550V이다. (가선 전압은 DC 750V)',
  source: '도시철도 11장 11.3.3'
},
{
  id: 'tram_11_045',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 냉난방 장치(HVAC)의 5가지 모드에 해당하지 않는 것은?',
  options: ['전 냉방', '반 난방', '환기', '제습'],
  answer: 3,
  explanation: 'HVAC 모드는 환기, 전 냉방, 반 냉방, 전 난방, 반 난방 5가지이다.',
  source: '도시철도 11장 11.3.5'
},
{
  id: 'tram_11_046',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 제동 시스템 중 "보안제동"의 특징은?',
  options: ['가장 강력한 제동력을 가진다', '시스템 무결성을 더 높은 수준으로 달성하기 위해 설치하며 성능은 상용/비상보다 낮다', '주차 시에만 사용한다', '승객이 직접 조작한다'],
  answer: 1,
  explanation: '보안제동은 시스템 무결성을 위해 설치하며, 제동 성능은 비상제동 또는 상용제동보다 낮게 설정되었다.',
  source: '도시철도 11장 11.3.7'
},
{
  id: 'tram_11_047',
  subject: 'urban',
  chapter: '노면전차',
  question: '해외 노면전차 운영 형태 중 "배타적 전용 노선"의 운전 속도 기준은?',
  options: ['40km/h 이하', '50km/h 이상', '70km/h 이상', '100km/h 이상'],
  answer: 2,
  explanation: '배타적 전용 노선(Exclusive Right of Way)은 운전 속도 70km/h 이상이다.',
  source: '도시철도 11장 11.4.1 [표 11-27]'
},
{
  id: 'tram_11_048',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 신호 표지 중 "속도제한 30"을 의미하는 표지의 모양은?',
  options: ['다이아몬드 모양 흰색 바탕에 검은색 숫자', '원형 빨간 테두리', '역삼각형 황색', '사각형 청색'],
  answer: 0,
  explanation: '속도제한 표시기는 다이아몬드 모양 흰색 바탕에 검은색 숫자로 표시한다.',
  source: '도시철도 11장 11.4.2 [표 11-31]'
},
{
  id: 'tram_11_049',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 운전실에 설치되는 출입문 타입은?',
  options: ['Single Riff Type', 'Double Riff Type', 'Sliding Type', 'Folding Type'],
  answer: 0,
  explanation: '운전실 쪽 차량에는 Single Riff Type 출입문이 취부 된다.',
  source: '도시철도 11장 11.5.3'
},
{
  id: 'tram_11_050',
  subject: 'urban',
  chapter: '노면전차',
  question: 'TCMS의 DU(Display Unit) 화면 해상도는?',
  options: ['640*480', '800*600', '1024*768', '1920*1080'],
  answer: 1,
  explanation: 'DU 제원 표에 따르면 해상도는 800*600 Pixel이다.',
  source: '도시철도 11장 11.5.1 [표 11-35]'
},
// ==========================================
// 11.1 노면전차 시스템 일반 (심화 20문항)
// ==========================================

{
  id: 'tram_11_1_001',
  subject: 'urban',
  chapter: '노면전차',
  question: '용어 정의 중 "공기의 조건(냉난방·제습·가습·정화 등)을 대상 공간의 요구에 맞추어 동시에 처리하기 위해 사용하는 기계장치"는?',
  options: ['VVVF', 'HVAC', 'APU', 'TCMS'],
  answer: 1,
  explanation: '‘냉난방 장치/공기 조화 장치(HVAC)’란 공기의 조건(냉난방·제습·가습·정화 등)을 대상 공간의 요구에 맞추어 동시에 처리하기 위해 사용하는 기계장치이다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_002',
  subject: 'urban',
  chapter: '노면전차',
  question: '가공 전차선 또는 제3궤조로부터 전력을 공급받지 아니하고 차량에 탑재된 에너지원을 통하여 운행하는 급전 방식은?',
  options: ['유가선', '무가선', '하이브리드', '유도 급전'],
  answer: 1,
  explanation: '‘무가선(無架線)’이란 가공 전차선 또는 제3궤조로부터 전력을 공급받지 아니하고 차량에 탑재된 에너지원을 통하여 운행하는 급전 방식을 말한다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_003',
  subject: 'urban',
  chapter: '노면전차',
  question: '‘두 가지 모드(Mode)를 가진’ 뜻으로 일반 도로와 전용 궤도를 모두 운행할 수 있는 차량 형태를 의미하는 용어는?',
  options: ['듀얼 모드', '하이브리드', '바이 모달(Bi-modal)', '트램 트레인'],
  answer: 2,
  explanation: '‘바이 모달(Bi-modal)’이란 ‘두 가지 모드(Mode)를 가진’ 뜻으로 일반 도로와 전용 궤도를 모두 운행할 수 있는 차량 형태를 의미한다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_004',
  subject: 'urban',
  chapter: '노면전차',
  question: '커패시터의 성능 중 전기 용량의 성능을 강화하여 전지의 목적으로 사용하며 배터리보다 훨씬 높은 출력을 낼 수 있는 부품은?',
  options: ['리튬 이온 전지', '슈퍼 커패시터', '니켈 수소 전지', '연료 전지'],
  answer: 1,
  explanation: '‘슈퍼 커패시터(Super Capacitor)’란 커패시터(콘덴서)의 성능 중 전기 용량의 성능을 강화하여 전지의 목적으로 사용하도록 한 부품이다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_005',
  subject: 'urban',
  chapter: '노면전차',
  question: '차상 설비와 지상 설비 간의 열차 정보를 상호 교환하기 위한 장치의 명칭은?',
  options: ['TCMS', 'TWC', 'ATP', 'ICCP'],
  answer: 1,
  explanation: '‘열차 정보 전송 장치(Track Wayside Control)’란 차상 설비와 지상 설비 간의 열차 정보를 상호 교환하기 위한 장치이다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_006',
  subject: 'urban',
  chapter: '노면전차',
  question: '열차의 총괄적인 제어와 감시를 수행하며 차량의 상태 및 고장을 감시하여 ADU에 현시 및 기록하는 장치는?',
  options: ['TWC', 'VVVF', 'TCMS', 'SIV'],
  answer: 2,
  explanation: '‘열차 종합 제어장치(Train Control and Monitoring System, TCMS)’란 열차의 총괄적인 제어와 감시를 수행하는 장치이다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_007',
  subject: 'urban',
  chapter: '노면전차',
  question: '기존 전력선과의 접점을 이용한 방식과 달리 무선의 전자유도 방식을 활용하여 비접촉으로 에너지를 공급하는 방식은?',
  options: ['가선 급전', '제3궤조 급전', '유도 급전', '배터리 급전'],
  answer: 2,
  explanation: '‘유도 급전’이란... 무선의 전자유도 방식을 활용하여 비(非)접촉으로 전기적 에너지를 공급하는 방식이다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_008',
  subject: 'urban',
  chapter: '노면전차',
  question: '지상에서 전송되는 열차 제어 정보를 인식하여 자동적으로 열차를 제어하는 장치는?',
  options: ['ATS', 'ATC', 'ATP', 'ATO'],
  answer: 1,
  explanation: '‘열차 자동제어장치(Automatic Train Control, ATC)’란 지상에서 전송되는 열차 제어 정보를 인식하여 자동적으로 열차를 제어하는 장치이다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_009',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 용어 중 유가선 방식과 무가선 방식으로 모두 운행할 수 있는 운전 방식을 뜻하는 말은?',
  options: ['바이 모달', '하이브리드(Hybrid)', '듀얼 모드', '크로스 오버'],
  answer: 1,
  explanation: '‘하이브리드(Hybrid)’란 ‘두 가지 이상의 방식을 조합한’이란 뜻으로 노면전차에서는 유가선 방식과 무가선 방식으로 모두 운행할 수 있는 운전 방식을 말한다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_010',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 차량 하부에 탑재된 제동 패드를 전자기력으로 레일에 흡착시켜 감속하는 제동장치는?',
  options: ['회생 제동', '공기 제동', 'MTB (Magnetic Track Brake)', '디스크 제동'],
  answer: 2,
  explanation: '‘MTB(Magnetic Track Brake)’란 노면전차 차량 하부에 탑재된 제동 패드를 전자기력으로 매설된 레일에 흡착시켜 감속하는 방식의 제동장치이다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_011',
  subject: 'urban',
  chapter: '노면전차',
  question: '경량 전철의 건설과 운영에 관한 독일 연방 규정을 일컫는 용어는?',
  options: ['ORR', 'UIC', 'Bostrab', 'EN'],
  answer: 2,
  explanation: '‘Bostrab’란 경량 전철의 건설과 운영에 관한 독일 연방 규정을 말한다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_012',
  subject: 'urban',
  chapter: '노면전차',
  question: '교류 유도전동기에 공급하는 전압과 주파수를 조절하여 출력을 제어하는 방식은?',
  options: ['CVCF', 'VVVF', 'Chopper', 'Rheostatic'],
  answer: 1,
  explanation: '‘VVVF(Variable Voltage-Variable Frequence)’란 가변 전압 가변 주파수란 의미로... 견인전동기의 출력을 제어하는 방식을 말한다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'tram_11_1_013',
  subject: 'urban',
  chapter: '노면전차',
  question: '1879년 베를린 박람회에서 최초로 노면전차 시험 주행을 시작한 독일의 전기회사는?',
  options: ['지멘스(Siemens)', '알스톰', '봄바르디어', 'CAF'],
  answer: 0,
  explanation: '1879년 독일의 전기회사인 지멘스(Siemens)가 처음 베를린 박람회에서의 시험 주행을 시작으로 운행하게 되었다.',
  source: '도시철도 11장 11.1.2'
},
{
  id: 'tram_11_1_014',
  subject: 'urban',
  chapter: '노면전차',
  question: '우리나라에서 노면전차가 최초로 개통된 구간과 연도는?',
  options: ['서대문~청량리 (1898년)', '서대문~동대문 (1899년)', '서울역~노량진 (1899년)', '부산진~동래 (1910년)'],
  answer: 1,
  explanation: '우리나라에서는 1899년에 서대문과 동대문 간에 전차를 개통하였다.',
  source: '도시철도 11장 11.1.2'
},
{
  id: 'tram_11_1_015',
  subject: 'urban',
  chapter: '노면전차',
  question: '1898년 설립되어 우리나라 최초의 전차 운행을 주도한 회사는?',
  options: ['경성전기주식회사', '한성 전기회사', '남선합동전기', '한국전력'],
  answer: 1,
  explanation: '1898년에 한성 전기회사가 설립되었으며, 1899년에 서대문과 동대문 간에 전차를 개통하였다.',
  source: '도시철도 11장 11.1.2'
},
{
  id: 'tram_11_1_016',
  subject: 'urban',
  chapter: '노면전차',
  question: '우리나라에서 노면전차 운행이 중지된 연도는?',
  options: ['1950년', '1960년', '1968년', '1974년'],
  answer: 2,
  explanation: '우리나라에서는 1899년 처음 등장해 1968년까지 운행을 이어 오다 버스와 자동차의 교통량 증가로 자취를 감추게 되었다.',
  source: '도시철도 11장 11.1.2'
},
{
  id: 'tram_11_1_017',
  subject: 'urban',
  chapter: '노면전차',
  question: '바이 모달 트램의 특징으로 교재에 기술된 내용은?',
  options: ['차량 전부에 팬터그래프를 탑재한다', '차량 후부에 디젤엔진 발전기를 탑재한다', '완전한 무궤도 차량이다', '지하 구간만 운행한다'],
  answer: 1,
  explanation: '바이 모달 트램의 경우... 차량 후부에 디젤엔진 발전기를 탑재해 운행 전원을 생산하는 방식이다.',
  source: '도시철도 11장 11.1.3'
},
{
  id: 'tram_11_1_018',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차의 장점으로 교재에 명시되지 않은 것은?',
  options: ['중량 전철에 비해 건설 비용이 저렴하다', '급곡선의 노선 설계가 가능하다', '교통 약자의 접근성이 매우 우수하다', '기상 조건에 관계없이 정시성이 완벽하다'],
  answer: 3,
  explanation: '노면전차는 지상 운행을 목적으로 하므로 기후의 영향을 많이 받는다는 것이 단점으로 기술되어 있다.',
  source: '도시철도 11장 11.1.4'
},
{
  id: 'tram_11_1_019',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차의 단점으로 옳은 것은?',
  options: ['건설 공사 시 도로 교통이 혼잡하다', '화석 연료를 사용하여 환경 오염을 유발한다', '승강장이 지하 깊은 곳에 위치한다', '수송량이 버스보다 적다'],
  answer: 0,
  explanation: '단점: 건설 공사 착공 시 해당 기간 동안 도로 교통이 매우 혼잡, 도로를 공유하므로 기존 자가용 이용자의 불편 초래 등.',
  source: '도시철도 11장 11.1.4'
},
{
  id: 'tram_11_1_020',
  subject: 'urban',
  chapter: '노면전차',
  question: '해외 도입 사례 중 프랑스 니스(Nice)의 Citadis 모델이 사용하는 전원 방식은?',
  options: ['Ni-MH 배터리 (유/무가선 하이브리드)', '제3궤조', '슈퍼 커패시터', '지면 전원 급전'],
  answer: 0,
  explanation: '프랑스 Nice의 Citadis 모델은 Ni-MH 배터리를 사용하는 유/무가선 하이브리드 방식이다.',
  source: '도시철도 11장 [표 11-1]'
},

// ==========================================
// 11.2 노면전차 관련 법령 (심화 20문항)
// ==========================================

{
  id: 'tram_11_2_001',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 운영에서 핵심적인 법적 근거를 포함하는 "노면전차 3법"은?',
  options: ['도시철도법, 철도사업법, 철도안전법', '도시철도법, 철도안전법, 도로교통법', '철도건설법, 철도안전법, 도로교통법', '도시철도법, 도로법, 교통안전법'],
  answer: 1,
  explanation: '노면전차 관련 법령은 크게 노면전차 운영에서 핵심적인 법적 근거를 포함하는 노면전차 3법(도시철도법/철도안전법/도로교통법)으로 구성된다.',
  source: '도시철도 11장 11.2.1'
},
{
  id: 'tram_11_2_002',
  subject: 'urban',
  chapter: '노면전차',
  question: '도시철도법 제2조에서 정의하는 도시철도의 범위에 포함되지 않는 것은?',
  options: ['노면전차', '선형 유도전동기', '모노레일', '시내버스'],
  answer: 3,
  explanation: '도시철도법 제2조: 철도/모노레일/노면전차/선형 유도전동기/자기부상열차 등 궤도에 의한 교통 시설 및 교통수단.',
  source: '도시철도 11장 11.2.2 [표 11-5]'
},
{
  id: 'tram_11_2_003',
  subject: 'urban',
  chapter: '노면전차',
  question: '도시철도법 제18조의2에 따라 노면전차 노선 건설 시 원칙적으로 설치해야 하는 것은?',
  options: ['전용 차로 또는 전용 도로', '혼용 차로', '지하 터널', '고가 선로'],
  answer: 0,
  explanation: '도로상에 노면전차 노선 건설 시 전용 차로·도로를 설치하도록 규정하고 있다.',
  source: '도시철도 11장 11.2.2 [표 11-5]'
},
{
  id: 'tram_11_2_004',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 건설 규칙상 혼용 차로 구간은 전체 선로의 얼마 이하로 제한되는가?',
  options: ['10분의 1', '5분의 1', '3분의 1', '2분의 1'],
  answer: 1,
  explanation: '혼용 차로 구간은 전체 선로의 5분의 1 이하로 제한.',
  source: '도시철도 11장 11.2.2 [표 11-7]'
},
{
  id: 'tram_11_2_005',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 전용로의 구성 요소로 규정된 경계 시설물이 아닌 것은?',
  options: ['분리대', '연석', '노면 높이 차이', '철조망'],
  answer: 3,
  explanation: '전용 차로·도로의 구성 요소: 경계부 분리대·연석 또는 유사 시설물 및 노면 높이를 차이.',
  source: '도시철도 11장 11.2.2 [표 11-7]'
},
{
  id: 'tram_11_2_006',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 플랫폼 높이는 교통 약자의 원활한 이용을 위하여 출입문 바닥과 얼마 이내로 설정해야 하는가?',
  options: ['10mm', '15mm', '20mm', '30mm'],
  answer: 1,
  explanation: '플랫폼 높이는 교통 약자의 원활한 이용을 위하여 출입문 바닥과 15mm 이내로 설정.',
  source: '도시철도 11장 11.2.2 [표 11-10]'
},
{
  id: 'tram_11_2_007',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 플랫폼에 설치하는 구조물 중 지상에서 2m를 초과할 경우 설치가 허용되는 것은?',
  options: ['광고판', '전력 공급 시설물을 지지하는 구조물', '매점', '대기실 벽면'],
  answer: 1,
  explanation: '안전과 편의를 해칠 수 있는 구조물을 설치할 수 없으나, 전력 공급 시설물을 지지하는 구조물 등으로 지상에서 2m 초과 시에는 제외.',
  source: '도시철도 11장 11.2.2 [표 11-10]'
},
{
  id: 'tram_11_2_008',
  subject: 'urban',
  chapter: '노면전차',
  question: '도로 연계형 선로 운행 시 노면전차의 최고 주행 속도 제한은?',
  options: ['50km/h', '60km/h', '70km/h', '80km/h'],
  answer: 2,
  explanation: '도로 연계형 선로 운행 시 해당 도로의 최고 속도 및 시속 70km 초과 주행 금지.',
  source: '도시철도 11장 11.2.2 [표 11-12]'
},
{
  id: 'tram_11_2_009',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차가 시속 15km 이하로 운행해야 하는 경우가 아닌 것은?',
  options: ['선로 전환기가 쇄정되지 않은 곳을 운행할 경우', '최초 진행 방향과 반대로 주행할 경우', '같은 차로 내 선행 차량과의 거리가 100m 이하일 경우', '직선 구간을 정상 주행할 경우'],
  answer: 3,
  explanation: '1. 선로 전환기 미쇄정, 2. 역방향 주행, 3. 선행 차량 거리 100m 이하일 경우 15km/h 이하로 운행해야 한다.',
  source: '도시철도 11장 11.2.2 [표 11-12]'
},
{
  id: 'tram_11_2_010',
  subject: 'urban',
  chapter: '노면전차',
  question: '철도안전법상 노면전차를 운전하려는 사람이 철도차량 운전면허 외에 추가로 소지해야 하는 면허는?',
  options: ['제1종 보통 운전면허', '제1종 대형 운전면허', '제2종 보통 운전면허', '특수 면허'],
  answer: 1,
  explanation: '노면전차를 운전하려는 사람은... 도로교통법 제80조에 따른 1종 대형 운전면허(버스)를 받도록 규정.',
  source: '도시철도 11장 11.2.3'
},
{
  id: 'tram_11_2_011',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차의 철도 보호 지구는 바깥쪽 궤도 끝에서 몇 m 이내의 지역인가?',
  options: ['10m', '20m', '30m', '50m'],
  answer: 0,
  explanation: '노면전차의 경우 바깥쪽 궤도 끝에서 10m 이내의 지역을 철도 보호 지구로 지정.',
  source: '도시철도 11장 11.2.3'
},
{
  id: 'tram_11_2_012',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 철도 보호 지구 바깥쪽 경계선에서 몇 m 이내 지역에서 굴착 등의 행위 시 신고해야 하는가?',
  options: ['10m', '20m', '30m', '40m'],
  answer: 1,
  explanation: '노면전차 철도 보호 지구 바깥쪽 경계선에서 20m 내 지역에서... 행위를 하려는 자는... 신고해야 한다.',
  source: '도시철도 11장 11.2.3'
},
{
  id: 'tram_11_2_013',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 운전면허 교육·훈련 시간은 총 몇 시간인가?',
  options: ['100시간', '210시간', '240시간', '400시간'],
  answer: 2,
  explanation: '노면전차 운전면허 응시자는... 240시간 교육·훈련을 받도록 규정하고 있다.',
  source: '도시철도 11장 11.2.3'
},
{
  id: 'tram_11_2_014',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 운전면허 필기시험의 합격 기준 점수는?',
  options: ['평균 40점 이상', '평균 60점 이상', '평균 70점 이상', '평균 80점 이상'],
  answer: 1,
  explanation: '운전면허 시험의 필기시험에서 평균 60점 이상을 받도록 규정(별표10)하고 있다.',
  source: '도시철도 11장 11.2.3'
},
{
  id: 'tram_11_2_015',
  subject: 'urban',
  chapter: '노면전차',
  question: '도로교통법상 노면전차의 정의는 어느 법에 따르는가?',
  options: ['도시철도법', '철도사업법', '건축법', '도로법'],
  answer: 0,
  explanation: '도로교통법 제2조: 도시철도법에 따른 노면전차로 도로에서 궤도를 이용하여 운행되는 차.',
  source: '도시철도 11장 11.2.4 [표 11-14]'
},
{
  id: 'tram_11_2_016',
  subject: 'urban',
  chapter: '노면전차',
  question: '도로교통법상 노면전차 운전이 금지되는 혈중알코올농도 기준은?',
  options: ['0.03%', '0.05%', '0.08%', '0.10%'],
  answer: 1,
  explanation: '운전이 금지되는 상태의 기준은 운전자 혈중알코올농도 0.05%이다.',
  source: '도시철도 11장 11.2.4 [표 11-19]'
},
{
  id: 'tram_11_2_017',
  subject: 'urban',
  chapter: '노면전차',
  question: '도로교통법상 어린이 보호구역에서 노면전차의 통행 속도 제한 가능 범위는?',
  options: ['시속 20km 이내', '시속 30km 이내', '시속 40km 이내', '시속 50km 이내'],
  answer: 1,
  explanation: '어린이 보호구역을 지정, 노면전차의 통행 속도를 시속 30km 이내로 제한 가능.',
  source: '도시철도 11장 11.2.4 [표 11-16]'
},
{
  id: 'tram_11_2_018',
  subject: 'urban',
  chapter: '노면전차',
  question: '도로교통법상 노면전차 운전자가 철길 건널목 통과 시 준수해야 할 사항은?',
  options: ['서행하며 통과', '일시 정지하여 안전 확인 후 통과', '가속하여 신속 통과', '그대로 통과'],
  answer: 1,
  explanation: '노면전차 운전자는 철길 건널목 통과 시 건널목 앞에서 일시 정지하여 안전 확인 후 통과.',
  source: '도시철도 11장 11.2.4 [표 11-17]'
},
{
  id: 'tram_11_2_019',
  subject: 'urban',
  chapter: '노면전차',
  question: '도로교통법상 노면전차가 교차로 진입이 금지되는 상황은?',
  options: ['녹색 신호일 때', '보행자가 없을 때', '교차로 내에 정지하여 다른 차의 통행에 방해가 될 우려가 있을 때', '야간 운행 시'],
  answer: 2,
  explanation: '진행 진로 앞의 차 또는 노면전차 상황에 따라 교차로에 정지하게 되어... 방해가 될 우려가 있을 시 진입 금지.',
  source: '도시철도 11장 11.2.4 [표 11-18]'
},
{
  id: 'tram_11_2_020',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 운전자가 보행자 전용로를 통행할 수 있는 예외적인 경우는?',
  options: ['승객이 요구할 때', '운행 시간 단축을 위해', '지방경찰청장이나 경찰서장의 허용이 있을 때', '야간에만'],
  answer: 2,
  explanation: '노면전차 운전자는 보행자 전용로를 통행할 수 없으나 필요할 때 지방경찰청장이나 경찰서장의 허용을 전제로 통행 가능.',
  source: '도시철도 11장 11.2.4 [표 11-18]'
},
{
  id: 'core_11_001',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차(트램)를 운전하기 위해 필요한 운전면허는?',
  options: [
    '제2종 전기차량 운전면허',
    '제1종 대형 운전면허',
    '제2종 전기차량 면허 + 1종 대형 면허',
    '제2종 보통 면허'
  ],
  answer: 2,
  explanation: '노면전차를 운전하려는 사람은 국토교통부 장관이 부여하는 철도차량 운전면허(제2종 전기차량) 외에 도로교통법 제80조에 따른 1종 대형 운전면허(버스)를 받도록 규정하고 있다.',
  source: '도시철도 11장 11.2.3'
},
{
  id: 'core_11_002',
  subject: 'urban',
  chapter: '노면전차',
  question: '무가선 트램 방식 중 정거장에서 정차하는 동안 급속 충전하는 방식은?',
  options: [
    '수소 연료 전지 방식',
    '슈퍼 커패시터 방식',
    'APS 방식',
    '디젤 발전 방식'
  ],
  answer: 1,
  explanation: '슈퍼 커패시터 방식은 고속 충전이 가능하며, 충전 시간이 매우 짧다는 점을 고려해 정거장 정차 중에 급속 충전하여 운행할 수 있다.',
  source: '도시철도 11장 11.3.1'
},
{
  id: 'core_11_003',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차의 운전 방식 중 가장 특징적인 것은?',
  options: [
    'ATC 운전',
    'ATO 운전',
    '시계(Visual) 운전',
    'CBTC 운전'
  ],
  answer: 2,
  explanation: '해외 노면전차 운전은 전용 노선에서 운전자 책임하에 시계 운전(Drive on Sight)을 기본으로 하고 있다.',
  source: '도시철도 11장 11.4.1'
},
{
  id: 'core_11_004',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 전용 신호기에서 "정지"를 의미하는 현시는?',
  options: [
    '백색 수직 막대 (|)',
    '백색 수평 막대 (ㅡ)',
    '백색 사선 (/)',
    '적색 원'
  ],
  answer: 1,
  explanation: '노면전차 신호기에서 "수평의 흰색 막대형 조명등"은 정지를 의미한다. (수직은 진행, 사선은 좌/우측 진행)',
  source: '도시철도 11장 11.4.2 [표 11-30]'
},
{
  id: 'core_11_005',
  subject: 'urban',
  chapter: '노면전차',
  question: '트램의 제동 장치 중 레일과 직접 마찰시켜 강력한 제동력을 얻는 장치는?',
  options: [
    '공기 제동',
    '회생 제동',
    '발전 제동',
    '흡착 제동(MTB)'
  ],
  answer: 3,
  explanation: 'MTB(Magnetic Track Brake)란 노면전차 차량 하부에 탑재된 제동 패드를 전자기력으로 매설된 레일에 흡착시켜 감속하는 방식의 제동장치이다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'core_11_006',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차 건설 및 운전 등에 관한 규칙상 도로 연계형 선로의 최고 운행 속도는?',
  options: [
    '30km/h',
    '50km/h',
    '60km/h',
    '70km/h'
  ],
  answer: 3,
  explanation: '도로 연계형 선로 운행 시 해당 도로의 최고 속도 및 시속 70km를 초과하여 주행할 수 없다.',
  source: '도시철도 11장 11.2.2 [표 11-12]'
},
{
  id: 'core_11_007',
  subject: 'urban',
  chapter: '노면전차',
  question: '교차로에서 트램에게 통행 우선권을 주는 신호 시스템은?',
  options: [
    'ATS',
    'ATP',
    'TSP (Transit Signal Priority)',
    'ATO'
  ],
  answer: 2,
  explanation: '노면전차의 특성상 우선적으로 통행해야 할 필요성에 따라 도입된 "우선 신호 체계"에는 Early Green, Green Extension 등의 기법이 있다.',
  source: '도시철도 11장 11.4.3'
},
{
  id: 'core_11_008',
  subject: 'urban',
  chapter: '노면전차',
  question: '다음 중 "바이모달 트램"의 특징으로 맞는 것은?',
  options: [
    '반드시 궤도가 있어야 한다',
    '일반 도로와 전용 궤도를 모두 운행할 수 있다',
    '가선 급전만 사용한다',
    '공중 부양한다'
  ],
  answer: 1,
  explanation: '‘바이 모달(Bi-modal)’이란 ‘두 가지 모드(Mode)를 가진’ 뜻으로 일반 도로와 전용 궤도를 모두 운행할 수 있는 차량 형태를 의미한다.',
  source: '도시철도 11장 11.1.1'
},
{
  id: 'core_11_009',
  subject: 'urban',
  chapter: '노면전차',
  question: '무가선 트램 도입의 가장 큰 장점은?',
  options: [
    '건설비가 매우 비싸다',
    '도시 미관이 개선된다',
    '속도가 고속철도만큼 빠르다',
    '수송력이 지하철보다 크다'
  ],
  answer: 1,
  explanation: '무가선 트램은 전차선을 설치할 필요가 없어 도심 곳곳에 전주와 전선 등의 구조물을 설치하지 않아도 되므로 도시 미관을 해치지 않는 장점이 있다.',
  source: '도시철도 11장 11.3.1'
},
{
  id: 'core_11_010',
  subject: 'urban',
  chapter: '노면전차',
  question: '노면전차의 단점으로 교재에 언급된 내용은?',
  options: [
    '교통 약자의 접근성이 나쁘다',
    '건설 비용이 중량 전철보다 비싸다',
    '기상 조건(기후)의 영향을 많이 받는다',
    '배기가스를 많이 배출한다'
  ],
  answer: 2,
  explanation: '노면전차의 단점으로는 지상 운행을 목적으로 하므로 기후의 영향을 많이 받으며, 도로 교통 혼잡을 유발할 수 있다는 점 등이 있다.',
  source: '도시철도 11장 11.1.4'
}

];