/**
 * 비상시 조치 - 3단원 문제
 */
var QUESTIONS_EMERGENCY_CH3 = [
    // 3.1 개요 및 용어 (5문제)
  {
    "id": "fault_ch3_001",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "다음 중 '차량 고장 발생 등으로 MCB를 투입 불능 상태가 되도록 하여, 해당 Unit(M'차+M차)의 동력이 발휘하지 못하게 하는 등의 조치'를 뜻하는 용어는?",
    "options": [
      "Vehicle Cut",
      "Unit Cut",
      "Extension Feed (연장 급전)",
      "Rescue Operation (구원 운전)"
    ],
    "answer": 1,
    "explanation": "Unit Cut이란 차량 고장 발생 등으로 MCB를 투입 불능 상태가 되도록 하여, 해당 Unit(M'차+M차)의 동력이 발휘하지 못하게 하는 등의 조치를 말한다. [1]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.1.2"
  },
  {
    "id": "fault_ch3_002",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "과천선 전기동차(10량 편성)에서 SIV, CM, Battery가 설치된 차량(T차 계열)의 호차 구성으로 옳은 것은?",
    "options": [
      "1호차, 5호차, 10호차",
      "0호차, 5호차, 9호차",
      "2호차, 4호차, 8호차",
      "0호차, 4호차, 9호차"
    ],
    "answer": 1,
    "explanation": "0호, 5호, 9호 차량에는 SIV, CM, Battery가 설치되어 있다. [2]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.1.3"
  },
  {
    "id": "fault_ch3_003",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "운전실 제어대 오른쪽 하단에 위치한 스위치 중 '차량 고장 발생 시 보호계전기 복귀 및 TCU 초기 설정을 위해 취급'하는 것은?",
    "options": [
      "VCOS",
      "ESPS",
      "RS (Reset Switch)",
      "ACMCS"
    ],
    "answer": 2,
    "explanation": "RS(자동 복귀)는 차량 고장 발생 시, 보호계전기 복귀 및 TCU 초기 설정을 위해 취급한다. [3]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.1.4"
  },
  {
    "id": "fault_ch3_004",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "제동 핸들을 '완해' 위치에서 '비상' 위치까지 조작할 때, 비상제동이 체결되는 위치는?",
    "options": [
      "7단",
      "비상 (Emergency)",
      "상용제동 전체 구간",
      "핸들 취거 위치"
    ],
    "answer": 1,
    "explanation": "제동 핸들은 완해, 상용제동 1, 2, 3, 4, 5, 6, 7단, 비상, 핸들 취거 위치로 구성된다. [4]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.1.4"
  },
  {
    "id": "fault_ch3_005",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "다음 중 M'차에 설치되어 전원을 공급받는 주요 기기가 아닌 것은?",
    "options": [
      "Pan (팬터그래프)",
      "MCB (주 차단기)",
      "MT (주 변압기)",
      "SIV (보조 전원 장치)"
    ],
    "answer": 3,
    "explanation": "M'차(2, 4, 8호)에는 Pan, MCB, MT, C/I, TM이 설치되며, SIV는 0, 5, 9호 차량에 설치된다. [2]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.1.3"
  },

  // 3.2 기본 조치 (5문제)
  {
    "id": "fault_ch3_006",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "차량 고장 발생 시 기본 취급 순서 중 MCB 관련 조작 순서로 옳은 것은?",
    "options": [
      "MCBOS → MCBCS → 3초 후 RS",
      "MCBOS → RS → 3초 후 MCBCS",
      "RS → MCBOS → MCBCS",
      "MCBCS → RS → 3초 후 MCBOS"
    ],
    "answer": 1,
    "explanation": "기본 취급 순서는 MCBOS → RS → 3초 후 MCBCS이다. [5]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.2.1.2"
  },
  {
    "id": "fault_ch3_007",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "RS(Reset Switch) 취급 후 3초 후에 MCBCS를 취급하는 이유는 무엇인가?",
    "options": [
      "배터리 전압을 충전하기 위해",
      "SIV를 재기동하기 위해",
      "주 변환 장치(C/I) 내 TCU가 초기 설정 상태로 복귀되기 위한 시간을 확보하기 위해",
      "공기 압축기를 보호하기 위해"
    ],
    "answer": 2,
    "explanation": "3초 후 MCBCS 취급은 Reset 스위치 취급 시, 주 변환 장치(C/I) 내 TCU가 초기 설정 상태로 복귀되기 위한 시간 확보를 위함이다. [6]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.2.1.3"
  },
  {
    "id": "fault_ch3_008",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "다음 중 연장 급전(Extension Feed)이 필요한 상황이 아닌 것은?",
    "options": [
      "완전 부동 취급 시",
      "SIV 고장 시",
      "M'차 C/I(주 변환 장치) 고장 시",
      "DC 구간 M'차 L1 차단 복귀 불능 시"
    ],
    "answer": 2,
    "explanation": "M'차 주 변환 장치(C/I) 고장 시에는 해당 차량을 VCOS 등으로 차단하면 되고, SIV 전원 공급과는 무관하므로 연장 급전이 필요 없다. 연장 급전은 SIV 고장, 완전 부동, L1 차단 복귀 불능 등으로 SIV가 정지했을 때 필요하다. [7]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.2.2.4"
  },
  {
    "id": "fault_ch3_009",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "장시간 단전으로 EOCN(비상 제어 전원 NFB)을 ON 취급했을 때 사용 가능한 기능이 아닌 것은?",
    "options": [
      "객실 방공등 4개 점등",
      "열차 무선전화 사용",
      "실내 방송 및 승무원 연락 통화",
      "에어컨(냉방) 가동"
    ],
    "answer": 3,
    "explanation": "EOCN ON 취급 시 기능: 객실 방공등 4개 점등, 열차 무선전화 사용 가능, 실내 방송 및 승무원 연락 통화 가능. (냉방은 고전압이 필요하므로 불가능) [8]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.2.2.5"
  },
  {
    "id": "fault_ch3_010",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "완전 부동 취급 시 조치 순서로 옳은 것은?",
    "options": [
      "Pan 하강 → 연장 급전 → ADAN/ADDN OFF",
      "전 편성 MCB 차단 후 Pan 하강 → 해당 차량 ADAN, ADDN OFF 후 PanVN 차단 → 연장 급전 → Pan 상승 후 MCB 투입",
      "연장 급전 → PanVN 차단 → MCB 투입",
      "VCOS 취급 → Pan 하강 → 연장 급전"
    ],
    "answer": 1,
    "explanation": "완전 부동 취급 방법: 1) 전 편성 MCB 차단 후 Pan 하강, 2) 해당 차량 ADAN, ADDN OFF 후 PanVN 차단, 3) 고장 Unit의 TC 또는 T1차량에서 연장 급전, 4) Pan 상승 후 MCB 투입. [9]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.2.2.3"
  },

  // 3.3.1 기동 관련 고장 (5문제)
  {
    "id": "fault_ch3_011",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "103선(직류 모선) 가압 불능 시 확인해야 할 차단기가 아닌 것은?",
    "options": [
      "전부 TC차 배전반 내 BatKN1",
      "전, 후 TC 및 T1차량 배전반 내 BatKN2",
      "BatN1, BatN2",
      "CN (Compressor NFB)"
    ],
    "answer": 3,
    "explanation": "103선 가압 불능 시 조치는 전부 TC차 배전반 내 BatKN1 확인 복귀, 전/후 TC 및 T1차량 배전반 내 BatKN2, BatN1, BatN2 확인 복귀이다. [10]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.1.1"
  },
  {
    "id": "fault_ch3_012",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "ACM(보조 공기 압축기) 구동 불능의 원인으로 옳은 것은?",
    "options": [
      "축전지 전압 74V 이하 시",
      "MR 압력이 9.0kg/cm² 이상일 때",
      "Pan이 상승되어 있을 때",
      "MCB가 투입되어 있을 때"
    ],
    "answer": 0,
    "explanation": "ACM 구동 불능 원인: 1) 축전지 전압 74V 이하 시, 2) 전부 운전실 HCRN 차단. [11]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.1.2"
  },
  {
    "id": "fault_ch3_013",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "축전지 전압이 낮아(74V 이하) ACM 구동이 불가능할 때 조치 방법은?",
    "options": [
      "모든 부하를 켠 상태로 ACMCS를 계속 누른다.",
      "전, 후부 운전실 LPCS, MLPS OFF 및 전부 Unit M'차량 외의 나머지 M'차량 ACMN OFF 후 ACMCS 취급",
      "구원 열차를 부른다.",
      "Pan을 수동으로 상승시킨다."
    ],
    "answer": 1,
    "explanation": "103선 부하를 최대한 줄인 후(LPCS, MLPS OFF), 1개 Unit만 기동하기 위해 나머지 차량의 ACMN, ACMKN을 OFF하고 ACMCS를 취급하여 ACM을 구동한다. [12]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.1.3"
  },
  {
    "id": "fault_ch3_014",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "전체 Pan 상승 불능 시 조치 사항으로 틀린 것은?",
    "options": [
      "전차선 전원 표시등(ACV, DCV) 점등 불능 및 모니터 Pan 하강 표시 확인",
      "축전지 전압 74V 이상을 확인",
      "ACM 공기 충기 여부 확인",
      "전부 TC차량 MCN, HCRN을 차단(OFF)한다"
    ],
    "answer": 3,
    "explanation": "전부 TC차량 MCN, HCRN의 차단 여부를 '확인'해야 하며, 만약 차단되어 있다면 복귀해야 한다. 임의로 차단하는 것이 아니다. [13]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.1.4"
  },
  {
    "id": "fault_ch3_015",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "1개 Unit Pan 상승 불능 시 해당 M'차량에서 확인해야 할 콕(Cock)은?",
    "options": [
      "MR Cock",
      "Pan Cock (Pan 1개당 2개)",
      "Door Cock",
      "Brake Cock"
    ],
    "answer": 1,
    "explanation": "해당 M'차량 의자 밑 Pan Cock 확인(Pan 1개당 Pan Cock 2개). [13]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.1.5"
  },

  // 3.3.2 특고압 및 견인 회로 고장 (6문제)
  {
    "id": "fault_ch3_016",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "ACArr(교류 피뢰기) 동작 시 현상으로 옳은 것은?",
    "options": [
      "전차선 단전 및 ACV 등 소등, MCB OFF 등 점등",
      "SIV 고장 표시등 점등",
      "출입문이 열림",
      "비상제동이 체결됨"
    ],
    "answer": 0,
    "explanation": "ACArr 동작 시 현상: 1) 전차선 단전 및 ACV등 소등, 2) MCB OFF등 점등. [14]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.2.1"
  },
  {
    "id": "fault_ch3_017",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "AC 구간에서 EGS(비상 접지 스위치) 동작 시 조치로 옳은 것은?",
    "options": [
      "그대로 운행한다.",
      "즉시 EPanDS 취급, Pan 하강 조치 후 EPanDS 복귀하고 전, 후부 운전실의 EGCS 동작 확인",
      "VCOS를 취급한다.",
      "관제사에게 보고하지 않는다."
    ],
    "answer": 1,
    "explanation": "즉시 EPanDS 취급, Pan 하강 조치. EPanDS 복귀하고 전, 후부 운전실의 EGCS 동작 확인. 동작된 EGCS 복귀 Pan 상승. [15]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.2.2"
  },
  {
    "id": "fault_ch3_018",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "주 변압기 1차 측 120A 이상 과전류로 ACOCR이 동작했을 때, 모니터에 현시되는 문구는?",
    "options": [
      "AC 과전류(1차)",
      "주 변압기 냉각기 정지",
      "송풍기 정지",
      "L1 차단 동작"
    ],
    "answer": 0,
    "explanation": "동작 원인: 주 변압기 1차 측 120A 이상 과전류로 교류 과전류 계전기(ACOCR) 동작. 현상: 모니터에 'AC 과전류(1차)' 현시. [16]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.2.3"
  },
  {
    "id": "fault_ch3_019",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "주 변압기 냉각 계통 고장(MTAR 여자) 시 현상으로 틀린 것은?",
    "options": [
      "모니터에 '주 변압기 냉각기 정지' 현시",
      "해당 차량 MCB 차단",
      "Fault등 및 해당 M'차량 차측등(백색) 점등",
      "비상제동이 체결됨"
    ],
    "answer": 3,
    "explanation": "MTAR 여자 시 현상은 모니터 메시지 현시, MCB 차단, Fault등/차측등 점등이며, 비상제동 체결은 해당하지 않는다. [17]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.2.4"
  },
  {
    "id": "fault_ch3_020",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "주 변환 장치(C/I) 고장 시 계전기 동작과 현상으로 옳은 것은?",
    "options": [
      "CIFR 여자, Fault등 및 고장 차량 차측등 점등",
      "MTAR 여자, ACV 소등",
      "ACOCR 여자, MCB 투입",
      "EOCR 여자, SIV 정지"
    ],
    "answer": 0,
    "explanation": "주 변환 장치 고장 계전기(CIFR) 여자 시, Fault등 및 고장 차량 차측등(백색)이 점등되고 해당 차량 동력 운전 및 회생제동이 불능 된다. [18]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.2.6"
  },
  {
    "id": "fault_ch3_021",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "AC 구간에서 송풍기 고장 시 보호 동작 시퀀스로 옳은 것은?",
    "options": [
      "송풍기 정지 → 즉시 MCB 차단",
      "송풍기 정지 → 20초 후 C/I 정지 → 10초 후 SIV 정지 → 60초 후 MCB 차단",
      "송풍기 정지 → 60초 후 C/I 정지 → MCB 차단",
      "송풍기 정지 → SIV 정지 → C/I 정지"
    ],
    "answer": 1,
    "explanation": "AC 구간(M'차) 동작 시퀀스: 송풍기 정지 → 20초 후 주 변환 장치(C/I) 정지 → 10초 후 SIV 정지 → 60초 후 MCB 차단. [19]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.2.7"
  },

  // 3.3.3 교-직 절연 및 절연 구간 고장 (4문제)
  {
    "id": "fault_ch3_022",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "교직 절환 직후 MCB 양 소등(기계적 고착) 시 조치 속도는?",
    "options": [
      "25km/h 이하",
      "40km/h 이하",
      "60km/h 이하",
      "속도 제한 없음"
    ],
    "answer": 1,
    "explanation": "즉시 EPanDS 취급, AC→DC 운전 시 40km/h 이하 운전, DC→AC 운전 시는 그대로 운전. [20]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.3.1"
  },
  {
    "id": "fault_ch3_023",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "교직 절환(AC→DC) 순간 전차선 단전 발생 시 원인은?",
    "options": [
      "MCB 진공 파괴에 따른 절연 불량",
      "직류 피뢰기(DCArr) 동작으로 전차선 단전",
      "L1 차단기 동작",
      "배터리 저전압"
    ],
    "answer": 1,
    "explanation": "원인: 1) MCB 진공 파괴에 따른 절연 불량, 2) 직류 피뢰기(DCArr) 동작으로 전차선 단전. [20]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.3.2"
  },
  {
    "id": "fault_ch3_024",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "절연 구간 통과 시 L1이 계속 차단되어 복귀 불능일 때, 예상되는 고장 원인은?",
    "options": [
      "전력 변환기인 Inverter의 ( U, V, W ) 상 암 단락(Short) 등 소자 파손",
      "SIV 고장",
      "송풍기 고장",
      "출입문 고장"
    ],
    "answer": 0,
    "explanation": "절연 구간 통과 중 MCB 양 소등(L1(C) 연동 접점으로 인해 해당 차량 MCB 차단 불능) 시, 주 변환 장치(Inverter)의 전력 변환 소자 소손이 원인일 수 있다. [21]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.3.5"
  },
  {
    "id": "fault_ch3_025",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "전부 Pan이 교-직 절연 구간 내에 정차했을 때 조치 사항으로 틀린 것은?",
    "options": [
      "관제사 및 차장에게 통보",
      "관제사에게 퇴행 운전 승인 요청",
      "교직 절환 스위치(ADS)를 절환 전 위치로 전환(MCB 양 소등 상태)",
      "그대로 전도 운전하여 통과"
    ],
    "answer": 3,
    "explanation": "전부 Pan이 절연 구간 내 정차 시에는 퇴행 운전을 해야 하며, 그대로 전도 운전할 수 없다. 차장과 협의 후 인출 가능한 적당한 지점까지 15km/h 이하로 퇴행 운전한다. [22]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.3.6"
  },

  // 3.3.4 동력 운전 및 주요 장치 고장 (4문제)
  {
    "id": "fault_ch3_026",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "기관사 안전장치(DSD) 불량으로 비상제동이 체결될 때, 이를 무효화하기 위해 취급하는 스위치는?",
    "options": [
      "EBCOS",
      "VCOS",
      "ASCOS",
      "ATCCOS"
    ],
    "answer": 0,
    "explanation": "DSD 불량으로 비상제동 완해 불능 시 관제사에게 보고 후 비상제동 개방 스위치(EBCOS)를 취급한다. [23]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.4.1"
  },
  {
    "id": "fault_ch3_027",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "동력 운전 불능 시 확인해야 할 사항으로 틀린 것은?",
    "options": [
      "MCB 투입 확인",
      "출입문등(DILP) 점등 확인",
      "주 공기압력 6.0~7.0kg/cm² 이상 확인",
      "객실등 점등 확인"
    ],
    "answer": 3,
    "explanation": "동력 운전 불능 시 확인 사항: 전후진 핸들 위치, MCB 투입, 출입문등(DILP), 제동 핸들 완해, 주 공기압력(PBPS), 비상제동 체결 여부 등. 객실등 점등 여부는 동력 운전 회로 구성의 직접적 조건이 아니다. [24]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.4.2"
  },
  {
    "id": "fault_ch3_028",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "자동열차정지장치(ATS) 고장 시 관제사의 승인을 받고 취급해야 하는 스위치는?",
    "options": [
      "ATSCOS",
      "ATCCOS",
      "EBS",
      "VCOS"
    ],
    "answer": 0,
    "explanation": "ATS 고장 시 관제사에게 차량 상태 보고 및 승인 후 ATS 차단 스위치(ATSCOS)를 취급한다. [25]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.4.3"
  },
  {
    "id": "fault_ch3_029",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "보조 전원 장치(SIV) 고장 시 AC 구간에서의 동작 시퀀스는?",
    "options": [
      "SIV 정지 → 송풍기 정지 → 20초 후 C/I 정지 → 60초 후 MCB 차단",
      "MCB 차단 → SIV 정지",
      "즉시 MCB 차단",
      "SIV 정지 후 재기동 시도"
    ],
    "answer": 0,
    "explanation": "AC 구간: SIV 정지 → 송풍기 정지 → 20초 후 주 변환 장치(C/I) 정지 → 60초 후 MCB 차단. [26]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.4.6"
  },

  // 3.3.5 출입문 및 객실 관련 고장 (4문제)
  {
    "id": "fault_ch3_030",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "출입문등(DILP) 점등 불능 시, 관제사의 승인을 받고 취급하여 동력 운전을 가능하게 하는 스위치는?",
    "options": [
      "DIRS (Door Interlock Release Switch)",
      "DOS (Door Operating Switch)",
      "DCS (Door Close Switch)",
      "CrS (Close Switch)"
    ],
    "answer": 0,
    "explanation": "출입문등 점등 불능 시 DS 접점 불량 등으로 판단 시, 관제사의 비연동 승인 후 DIRS 취급. [27]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.5.1"
  },
  {
    "id": "fault_ch3_031",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "전체 출입문이 열리지 않을 때 취급해 볼 수 있는 스위치는?",
    "options": [
      "전부 운전실 배전반 내 CrSN 확인",
      "출입문 스위치(DOS) 수회 개폐 취급",
      "DIRS 취급",
      "Pan 하강"
    ],
    "answer": 1,
    "explanation": "전체 출입문이 열리지 않을 경우: 1) 전부 운전실 배전반 내 CrSN 확인, 2) 출입문 스위치(DOS)를 취급해 볼 것. [28]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.5.1"
  },
  {
    "id": "fault_ch3_032",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "현재 DROS 취급 시 가압되는 선은?",
    "options": [
      "146(우측), 149(좌측)선",
      "100선, 103선",
      "27, 28, 29선",
      "33선"
    ],
    "answer": 0,
    "explanation": "현재 DROS 취급 시 가압되는 146(우측), 149(좌측)선은 단선 조치되어 있다. (참고: DROS 고착 시 조치 관련) [29]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.5.1"
  },
  {
    "id": "fault_ch3_033",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "객실 비상 통화 장치 동작 시 복귀 불능일 때, 해당 차량 배전반 내에서 차단해야 하는 NFB는?",
    "options": [
      "EBzN",
      "EAN",
      "CN",
      "MN"
    ],
    "answer": 0,
    "explanation": "비상 통화 장치 복귀 불능 시: 해당 차량 배전반 내 EBzN OFF. [30]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.5.2"
  },

  // 3.3.6 제동장치 및 주 공기압력 관련 고장 (4문제)
  {
    "id": "fault_ch3_034",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "비상제동 완해 불능 시 확인해야 할 차단기가 아닌 것은?",
    "options": [
      "BVN1",
      "BVN2",
      "HCRN",
      "L1N"
    ],
    "answer": 3,
    "explanation": "비상제동 완해 불능 시 조치: BVN1, BVN2 및 HCRN 확인(필요시 OFF 후 ON). [31]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.6.1"
  },
  {
    "id": "fault_ch3_035",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "제동 불완해 발생 시 강제로 완해하기 위해 취급하는 스위치는?",
    "options": [
      "CPRS",
      "RS",
      "VCOS",
      "ATSCOS"
    ],
    "answer": 0,
    "explanation": "제동 핸들 완해 위치에서 강제 완해 스위치(CPRS) 취급. [32]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.6.2"
  },
  {
    "id": "fault_ch3_036",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "보안제동 완해 불능 시 조치로 옳은 것은?",
    "options": [
      "전, 후부 운전실 제어대 ScBN 차단",
      "BVN1 차단",
      "Pan 하강",
      "비상제동 체결"
    ],
    "answer": 0,
    "explanation": "보안제동 완해 불능 시: 전, 후부 운전실 보안제동 스위치 동작 여부 확인, 전, 후부 운전실 제어대 ScBN 차단. [33]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.6.4"
  },
  {
    "id": "fault_ch3_037",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "TC차량 전면 2지변 이후 주 공기(MR) 누설 시 조치로 옳은 것은?",
    "options": [
      "전부 TC차와 인접 차량 사이 주 공기 Cock(MR Cock) 2개 차단",
      "후부 TC차 MR Cock 차단",
      "해당 차량 CMGN OFF",
      "운행 중지"
    ],
    "answer": 0,
    "explanation": "전부 TC차와 인접 차량 사이 주 공기 Cock(MR Cock) 2개 차단. [34]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.6.6"
  },

  // 3.4 구원 운전 및 기타 조치 (5문제)
  {
    "id": "fault_ch3_038",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "구원 열차 연결 시 12Jumper선으로 연결되지 않는 기능은?",
    "options": [
      "비상제동 LOOP선",
      "보안제동",
      "방송회로(차내방송)",
      "동력 운전 제어 회로"
    ],
    "answer": 3,
    "explanation": "12Jumper선 연결 시 인통선 종류: 10선(전기제동), 31/32선(비상제동 LOOP), 33선(보안제동), 100선(접지), 164선(승무원 연락용 버저), 27/28/29선(상용제동), 145선(출입문등), 175/176선(차내방송). 동력 운전 제어는 포함되지 않는다. [35]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.4.1.2"
  },
  {
    "id": "fault_ch3_039",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "구원 운전 시 고장 열차 기계 제동 불능으로 공기 제동만 사용할 때, 제동 핸들은 어느 위치에 유지해야 하는가?",
    "options": [
      "완해",
      "상용 7단",
      "비상",
      "1단"
    ],
    "answer": 1,
    "explanation": "고장 열차 및 구원 열차 공통 사항: 제동 핸들 7단 유지(안전 LOOP 구성). [36]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.4.1.1"
  },
  {
    "id": "fault_ch3_040",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "합병 운전(구원 운전) 시 관제 보고 후 운전 속도는?",
    "options": [
      "15km/h 이하",
      "25km/h 이하",
      "45km/h 이하",
      "60km/h 이하"
    ],
    "answer": 1,
    "explanation": "관제 보고 후 25km/h 이하 속도로 운전. [37]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.4.1.1"
  },
  {
    "id": "fault_ch3_041",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "구원 운전 스위치(RSOS)의 위치 중 '과천선(분당선)' 위치는?",
    "options": [
      "1시 방향",
      "3시 방향",
      "6시 방향",
      "9시 방향"
    ],
    "answer": 1,
    "explanation": "그림 3-93 참조, 과천선(분당선)은 우측(3시 방향)에 위치한다. (참고: 교재 그림 텍스트에는 명시적 방향 텍스트가 없으나 그림상 우측임, 텍스트로는 '과천선(분당선)' 항목이 있음) [35]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.4.1.2"
  },
  {
    "id": "fault_ch3_042",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "MCB-ON, MCB-OFF, Power등 점등 불능 시 조치는?",
    "options": [
      "후부 운전실 배전반내 PLPN 확인 복귀",
      "전부 운전실 HCRN 확인",
      "Pan 하강",
      "비상제동 체결"
    ],
    "answer": 0,
    "explanation": "원인 및 조치: 후부 운전실 배전반내 PLPN 확인 복귀. [38]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.4.2.1"
  },

  // 추가 보완 문제 (8문제)
  {
    "id": "fault_ch3_043",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "다음 중 '전기동차가 전체 출입문이 모두 닫히고 제어대 출입문등(DILP)이 점등된 상태에서 정상적인 동력 운전이 가능하나, 일부 출입문이 닫히지 않거나 출입문 장치 고장 등으로 출입문등이 점등되지 않아 관제사 승인 후 DIRS를 취급하고 운전하는 것'을 뜻하는 용어는?",
    "options": [
      "비연동 운전",
      "지령 운전",
      "모진",
      "단속 운전"
    ],
    "answer": 0,
    "explanation": "비연동 운전: 전기동차가 전체 출입문이 모두 닫히고 제어대 출입문등(DILP)이 점등된 상태에서... 관제사 승인 후 DIRS(비연동 스위치)를 취급하고 운전하는 것. [1]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.1.2"
  },
  {
    "id": "fault_ch3_044",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "전체 Pan을 하강하지 않는 완전 부동 취급 방법으로 옳은 것은?",
    "options": [
      "해당 M'차 ADAN, ADDN OFF 후 PanVN 차단",
      "해당 M'차 VCOS 취급",
      "해당 M'차 MCBN1 차단",
      "해당 M'차 MTOMN 차단"
    ],
    "answer": 0,
    "explanation": "참고: 전체 Pan을 하강하지 않는 완전 부동 취급 방법 - 1) 해당 M'차 ADAN, ADDN OFF 후, 2) 해당 M'차 PanVN 차단. [7]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.2.2.3"
  },
  {
    "id": "fault_ch3_045",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "주 공기압력 9.7kg/cm² 이상 상승 시 조치로 CM이 계속 구동될 때 취급해야 할 차단기는?",
    "options": [
      "CMCN",
      "CMGN",
      "CN",
      "MN"
    ],
    "answer": 0,
    "explanation": "CM 자체 고장으로 계속 구동하는 차량은 CMCN, CMGN을 OFF 하여 CM 정지. [39]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.6.10"
  },
  {
    "id": "fault_ch3_046",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "ATS 구간에서 ADU 무(無)현시 시 확인해야 할 차단기는?",
    "options": [
      "ATCN",
      "AMCN",
      "BVN1",
      "CrSN"
    ],
    "answer": 0,
    "explanation": "ATCN Trip 시 현상: ATC구간에서 ADU 무(無)현시, 비상제동 체결(동력 운전 불능). [40]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.4.2.3"
  },
  {
    "id": "fault_ch3_047",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "운행 중 축전지 전압 강하 시 TC차량 및 T1차 배전반 내에서 확인 및 복귀해야 할 차단기는?",
    "options": [
      "BCN",
      "BATN",
      "HSCB",
      "MCN"
    ],
    "answer": 0,
    "explanation": "운행 중 축전지 전압강하 시 조치: TC차량 및 T1차 배전반 내 BCN 확인 복귀. [38]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.4.2.2"
  },
  {
    "id": "fault_ch3_048",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "제동 비율에 따른 속도 제한 중 100% 미만 ~ 80% 이상일 때의 제한 속도는?",
    "options": [
      "110km/h 이하",
      "90km/h 이하",
      "70km/h 이하",
      "25km/h 이하"
    ],
    "answer": 0,
    "explanation": "100% 미만 ~ 80% 이상: 110km/h 이하. (80~60%: 90km/h, 60~40%: 70km/h, 40% 미만: 25km/h) [41]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.6.2"
  },
  {
    "id": "fault_ch3_049",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "주 변압기(MT) 과열 시 현상으로 옳은 것은?",
    "options": [
      "모니터에 '주 변압기 온도 이상 발생' 현시, 해당 Unit 동력 운전 및 회생제동 차단",
      "비상제동 체결",
      "SIV 정지",
      "출입문 개방"
    ],
    "answer": 0,
    "explanation": "MT 과열 시 현상: 1) 모니터에 '주 변압기 온도 이상 발생' 현시, 2) 해당 Unit 동력 운전 및 회생제동 차단. [42]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.2.5"
  },
  {
    "id": "fault_ch3_050",
    "subject": "emergency_ch3",
    "chapter": "3장 고장조치",
    "question": "2호선 M'차량(2호차)에서 ADAN, ADDN, PanVN을 차단하는 이유는?",
    "options": [
      "서행으로 절연 구간 경계에서 Arc 발생 및 MCB 차단 우려가 있어서",
      "SIV 보호를 위해서",
      "출입문 동작을 원활하게 하기 위해서",
      "제동력을 확보하기 위해서"
    ],
    "answer": 0,
    "explanation": "최후부 Unit(2호 차량) ADAN, ADDN, PanVN 차단하는 이유: 서행으로 절연 구간 경계에서 Arc 발생 및 MCB 차단 우려가 있어서. [43]",
    "source": "C_비상시조치_3장_고장조치.pdf 3.3.3.6"
  }
];
