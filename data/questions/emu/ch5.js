/**
 * 전기동차 구조 및 기능 - 5단원 문제
 */
var QUESTIONS_EMU_CH5 = [
    {
    "id": "train_5_001",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "저압보조 장치에서 사용하는 전원의 종류로 표준교재에 명시되지 않은 것은?",
    "options": [
      "DC 100V",
      "AC 100V",
      "AC 220V",
      "DC 24V"
    ],
    "answer": 3,
    "explanation": "저압보조 장치는 일반적으로 DC 100V와 AC 100V를 사용하는 기기 장치와 AC 220V를 사용하는 객실등을 포함하여 정의한다. (DC 24V는 언급되지 않음)",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_002",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "보조변압기(AT)의 입력 전압과 출력 전압의 구성으로 옳은 것은?",
    "options": [
      "입력 AC 440V → 출력 AC 220V, AC 100V",
      "입력 DC 1,500V → 출력 AC 440V",
      "입력 AC 440V → 출력 DC 100V",
      "입력 AC 220V → 출력 AC 100V"
    ],
    "answer": 0,
    "explanation": "보조변압기(AT)는 SIV의 AC 440V를 공급받아 AC 220V(객실등)와 AC 100V(냉방제어, Heater 등)로 강압한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_003",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "충전장치의 충전용 변압기(BCT) 2차 측 출력 전압은?",
    "options": [
      "AC 24V",
      "AC 76V",
      "AC 100V",
      "AC 220V"
    ],
    "answer": 1,
    "explanation": "충전용 변압기(BCT)는 SIV의 AC 440V 출력전원을 1차 측에서 공급받아, 2차 측에서 AC 76V로 강압하여 정류장치(RF)로 보낸다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_004",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "신형 전기동차에 사용되는 리튬-폴리머(Li-Po) 축전지의 정격 전압은?",
    "options": [
      "DC 24V",
      "DC 84V",
      "DC 92.5V",
      "DC 110V"
    ],
    "answer": 2,
    "explanation": "신형 Li-Po 축전지는 3.7V × 25 Cell로 구성되어 DC 92.5V의 전압을 가진다. (기존 Ni-Cd는 DC 84V)",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_005",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "출입문이 닫힐 때 기계적인 충격을 방지하기 위해 도어엔진 내부에 설치된 장치는?",
    "options": [
      "피니언 기어",
      "쿠션 실린더",
      "랙 기어",
      "도어 스위치"
    ],
    "answer": 1,
    "explanation": "도어엔진 내부 실린더에 쿠션 실린더를 내장하고 있어, 열리고 닫힐 때 쿠션 작용을 함으로써 충격을 방지한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_006",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "정거장에 정차 시 출입문 열림 조건이 되는 정지 속도 계전기(ZVR)의 동작 속도 기준은?",
    "options": [
      "3km/h 이하",
      "5km/h 이하",
      "10km/h 이하",
      "15km/h 이하"
    ],
    "answer": 1,
    "explanation": "ATC 장치에서 열차 정지(5km/h 이하) 시 여자 되는 ZVR(a) 조건으로 출입문 열림 취급을 할 수 있다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_007",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "출입문등(DILP) 점등 및 동력 운전 회로가 구성되기 위한 전체 출입문의 닫힘 조건(간격)은?",
    "options": [
      "5.0mm 미만",
      "7.5mm 미만",
      "10.0mm 미만",
      "12.5mm 미만"
    ],
    "answer": 1,
    "explanation": "전체 출입문의 간격이 7.5mm 미만으로 닫히면 DILP DS 회로가 연결되어 DIR1, DIR2 계전기를 여자 시킨다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_008",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "출입문 차측등(DLP)이 점등되는 출입문의 열림 간격 기준은?",
    "options": [
      "5.0mm 이상",
      "7.5mm 이상",
      "10.0mm 이상",
      "12.5mm 이상"
    ],
    "answer": 3,
    "explanation": "출입문이 12.5mm 이상 열리면 DLP DS 회로가 구성되어 출입문 차측등(적색)이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_009",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "출입문 반감 스위치(DHS)를 취급했을 때 열리지 않는 출입문의 개수(1량 기준)는?",
    "options": [
      "중앙 2개",
      "중앙 4개",
      "양 끝 2개",
      "양 끝 4개"
    ],
    "answer": 1,
    "explanation": "DHS 취급 시 1량당 8개의 출입문 중 중앙의 4개(한쪽 편 2개씩) 출입문이 열리지 않도록 한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_010",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "ATC 장치 고장 등으로 ZVR이 여자 되지 않아 출입문을 열 수 없을 때 취급하는 스위치는?",
    "options": [
      "DIRS",
      "LSBS",
      "DHS",
      "EGS"
    ],
    "answer": 1,
    "explanation": "LSBS(저속도 바이패스 스위치)는 ATC 장치 고장이나 ZVR 불량으로 출입문을 열 수 없을 때 ON 위치로 취급하여 출입문을 연다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_011",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "전조등(HLP)의 우측 등과 좌측 등의 사용 전원으로 옳은 것은?",
    "options": [
      "우측: AC 100V, 좌측: DC 100V",
      "우측: DC 100V, 좌측: AC 100V",
      "양쪽 모두 AC 100V",
      "양쪽 모두 DC 100V"
    ],
    "answer": 1,
    "explanation": "전조등 우측 등은 직류 전원인 DC 100V를 사용하며, 좌측 등은 교류 전원인 AC 100V 전원을 사용한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_012",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "객실등 제어회로에서 연장급전 시 부하를 반감하기 위해 동작하여 LPK2를 차단하는 계전기는?",
    "options": [
      "LRR2",
      "LPK1",
      "SIVFR",
      "EOR2"
    ],
    "answer": 0,
    "explanation": "LRR2(b) 연동은 SIV 고장 등으로 연장급전 시 여자 하여 LPK2를 무여자 시키므로 객실등의 절반이 소등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_013",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "방공등(ADLP)과 차내 방송장치를 비상 전원(축전지)으로 사용하기 위해 취급하는 스위치는?",
    "options": [
      "LPCS",
      "EOCN",
      "ESPS",
      "EmS"
    ],
    "answer": 1,
    "explanation": "전차선 단전 등 비상상황 시 EOCN(ON)을 취급하면 EOR2가 여자 되어 축전지 전원으로 방공등과 차내 방송장치를 사용할 수 있다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_014",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "운전실 표시등 중 MCB ON등이 점등되기 위한 조건은?",
    "options": [
      "1개 이상의 MCB가 투입되었을 때",
      "3개 Unit의 M'차 MCB가 모두 투입되었을 때",
      "SIV가 구동될 때",
      "전차선 전압이 정상일 때"
    ],
    "answer": 1,
    "explanation": "3개 Unit의 M'차 MCB가 모두 투입되면 후부 PLPN으로 전원을 공급받아 MCB ON등이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_015",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "AC 구간에서 전차선 전원이 공급되고 있음을 나타내는 운전실 표시등과 관련 계전기는?",
    "options": [
      "ACV등 - ACVRTR",
      "DCV등 - DCVRTR",
      "Power등 - CTR",
      "MCB ON등 - MCBR3"
    ],
    "answer": 0,
    "explanation": "교류 25,000V 구간에서는 ACVR이 여자 되고 그 연동으로 ACVR-TR이 여자 하므로 ACV등이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_016",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "고장 표시등 중 'ACOCRR'이 여자 되었을 때 점등되는 등은?",
    "options": [
      "FAULT등 및 해당 차 ASilp(차측등)",
      "UCO등",
      "VCO등",
      "HSCB등"
    ],
    "answer": 0,
    "explanation": "ACOCR이나 ArrOCR이 동작하여 ACOCRR(유지 계전기)이 여자 되면 Fault등과 ASilp등이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_017",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "주변압기(MT) 냉각 계통 고장으로 MTAR이 여자 되어 복귀되지 않을 때 VCOS를 취급하면 점등되는 등은?",
    "options": [
      "VCO등",
      "UCO등",
      "Fault등",
      "MCB OFF등"
    ],
    "answer": 1,
    "explanation": "MTAR 고장으로 VCOS를 취급하면 UCOR, UCORR이 여자 되어 UCO등이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_018",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "운전실 SqLp등(TEST 스위치등)이 점등되었다면 어떤 상태인가?",
    "options": [
      "MCB가 정상 투입된 상태",
      "TEST 스위치가 취급되어 MCB 투입 회로가 차단된 상태",
      "SIV가 테스트 모드인 상태",
      "출입문이 열려 있는 상태"
    ],
    "answer": 1,
    "explanation": "TEST 스위치를 취급하면 SqR1, SqR2가 여자 되어 MCB 투입 회로를 차단하고 SqLp등이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_019",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "TGIS 모니터 장치의 입력 전압 변동 범위(DC 기준)는?",
    "options": [
      "DC 50V ~ 90V",
      "DC 70V ~ 110V",
      "DC 80V ~ 120V",
      "DC 90V ~ 130V"
    ],
    "answer": 1,
    "explanation": "TGIS 모니터 장치의 DC 입력 전압 변동 범위는 DC 70V ~ 110V이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_020",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "TGIS 모니터의 고장 화면 우선순위가 가장 높은 것은?",
    "options": [
      "ATC/ATS 관련 고장",
      "제동 관련 고장",
      "SIV 관련 고장",
      "CM 관련 고장"
    ],
    "answer": 0,
    "explanation": "고장 화면 우선순위 1순위는 ATC/ATS 관련 고장이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_021",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "TGIS 모니터에서 '압력'을 선택했을 때 표시되는 정보가 아닌 것은?",
    "options": [
      "BC 압력 (제동통 압력)",
      "AS 압력 (공기스프링 압력)",
      "MR 압력 (주공기 압력)",
      "Pan 상승 압력"
    ],
    "answer": 3,
    "explanation": "TGIS 압력 화면에서는 각 차량의 BC 압력과 AS 압력을 표시한다. Pan 상승 압력은 표시 항목으로 명시되지 않았다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_022",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "열차무선 장치(TRCP)에서 비상 통화를 위해 사용하는 채널은?",
    "options": [
      "CH 1번",
      "CH 2번",
      "CH 3번",
      "CH 4번"
    ],
    "answer": 1,
    "explanation": "이례 상황 시 비상 통화는 TRCP의 CH 2번을 눌러 사용한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_023",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "전부 운전실 무전기 고장 시 후부 운전실 무전기를 원격으로 사용하기 위해 누르는 스위치는?",
    "options": [
      "RTT",
      "REMOTE",
      "YARD",
      "SMSC"
    ],
    "answer": 1,
    "explanation": "REMOTE 스위치를 선택하면 후부 운전실 무전기를 이용하여 통화가 가능하다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_024",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "출입문 재개폐 스위치(DROS)를 취급했을 때 재개방되는 출입문의 조건은?",
    "options": [
      "모든 출입문",
      "완전히 닫힌 출입문",
      "12.5mm 이상 열려 있는(덜 닫힌) 출입문",
      "고장 난 출입문"
    ],
    "answer": 2,
    "explanation": "DROS 취급 시 DRO DS(a)가 12.5mm 이상 열린 조건에서 회로가 구성되어 해당 출입문만 재개방된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_025",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "출입문 기계장치(Door Engine)에서 출입문이 닫힐 때 공기가 공급되는 실린더 방향은?",
    "options": [
      "우측 실린더",
      "좌측 실린더",
      "쿠션 실린더",
      "양쪽 모두"
    ],
    "answer": 1,
    "explanation": "출입문 전자밸브가 무여자 되면 좌측 실린더에 압축공기가 공급되어 출입문이 닫힌다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_026",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "전동차 운행 중 축전지 전압이 약 74V 이하로 방전되었을 때 예상되는 문제점은?",
    "options": [
      "출입문이 열리지 않는다.",
      "전기동차 재기동이 어려워진다.",
      "비상 제동이 체결되지 않는다.",
      "방송 장치가 고장 난다."
    ],
    "answer": 1,
    "explanation": "전차선 정전 등으로 약 74V 이하로 방전될 때는 전기동차 재기동이 어려워지므로 주의해야 한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_027",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "출입문등(DILP) 점등 회로에서 동력 운전 회로를 구성하는(11선 가압) 계전기는?",
    "options": [
      "DIR1",
      "DIR2",
      "DILP",
      "DrR"
    ],
    "answer": 0,
    "explanation": "DIR1의 여자로 2선과 11선을 연결하여 동력운전 회로가 구성된다. (DIR2는 램프 점등용)",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_028",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "1개 이상의 출입문이 닫히지 않아 동력 운전이 불가능할 때 사용하는 비연동 스위치는?",
    "options": [
      "DROS",
      "DIRS",
      "DHS",
      "LSBS"
    ],
    "answer": 1,
    "explanation": "DIRS(출입문 비연동 스위치)를 취급하면 출입문 연동 계전기와 관계없이 동력운전 회로를 구성할 수 있다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_029",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "다음 중 TC차 배전반에 있는 출입문 제어용 차단기(NFB)는?",
    "options": [
      "DMVN",
      "CrSN",
      "ATN",
      "BCN"
    ],
    "answer": 1,
    "explanation": "CrSN(승무원 스위치 차단기)은 전부 및 후부 TC차 배전반에 있으며 전체 출입문 제어 전원을 공급/차단한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_030",
    "subject": "emu",
    "chapter": "5장 저압보조 장치",
    "question": "운전실 열차 시간표등(TTLp)의 사용 전원은?",
    "options": [
      "DC 100V",
      "AC 100V",
      "AC 220V",
      "DC 24V"
    ],
    "answer": 2,
    "explanation": "열차 시간표등(TTLp)은 AC 220V 전원을 사용한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
     {
    "id": "train_5_1_001",
    "subject": "emu",
    "chapter": "5.1 저압보조 장치 개요",
    "question": "각 차량에 설치된 보조변압기(AT)의 역할로 옳은 것은?",
    "options": [
      "SIV 출력 AC 440V를 AC 220V(객실등)와 AC 100V(냉방제어 등)로 강압한다.",
      "DC 1,500V를 AC 440V로 변환한다.",
      "SIV 출력 AC 440V를 DC 100V로 정류한다.",
      "축전지 전압을 승압한다."
    ],
    "answer": 0,
    "explanation": "보조변압기(AT)는 SIV의 AC 440V를 공급받아 AC 220V(객실등)와 AC 100V(냉방제어 및 Heater)로 강압하여 공급한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_1_002",
    "subject": "emu",
    "chapter": "5.1 저압보조 장치 개요",
    "question": "운행 중 ATN(보조변압기 차단기)이 차단되었을 때 해당 차량에서 발생하는 현상은?",
    "options": [
      "비상등만 점등되고 출입문이 열리지 않는다.",
      "객실 AC등이 소등되고 냉방장치도 가동되지 않는다.",
      "SIV가 정지한다.",
      "동력 운전이 불가능하다."
    ],
    "answer": 1,
    "explanation": "ATN이 차단되면 AT에서 공급하는 AC 220V와 AC 100V가 차단되므로, 해당 차량은 객실 AC등이 소등되고 냉방장치 제어 전원이 없어 가동되지 않는다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_2_001",
    "subject": "emu",
    "chapter": "5.2 충전장치",
    "question": "충전장치 회로의 흐름 순서로 옳은 것은?",
    "options": [
      "SIV(AC 440V) → NFB1 → BCT(AC 76V) → RF(DC 100V) → BCN → 103선",
      "SIV(AC 440V) → RF → BCT → BCN → 103선",
      "Bat → BCN → RF → BCT → 103선",
      "SIV(AC 440V) → AT → BCN → 103선"
    ],
    "answer": 0,
    "explanation": "충전회로: SIV AC 440V → NFB1 → BCT(AC 76V) → RF(DC 100V) → 191선 → BCN → 103선 가압 순서로 구성된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_2_002",
    "subject": "emu",
    "chapter": "5.2 충전장치",
    "question": "BCN(충전용 NFB)이 차단되었을 때의 현상과 조치에 대한 설명으로 옳은 것은?",
    "options": [
      "SIV가 즉시 정지한다.",
      "SIV가 정상 구동하여도 해당 Unit은 배터리 전원만 소모하므로 전압계를 수시로 확인해야 한다.",
      "객실등 전체가 즉시 소등된다.",
      "연장 급전 회로가 자동으로 구성된다."
    ],
    "answer": 1,
    "explanation": "BCN이 차단되면 정류된 DC 100V가 103선에 공급되지 않으므로, SIV가 구동 중이라도 배터리가 충전되지 않고 방전만 되어 SIV 정지와 같은 효과를 낸다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_2_003",
    "subject": "emu",
    "chapter": "5.2 충전장치",
    "question": "신형 전기동차에 적용된 리튬-폴리머(Li-Po) 축전지의 정격 전압 구성은?",
    "options": [
      "1.2V × 70 Cell = DC 84V",
      "2.0V × 50 Cell = DC 100V",
      "3.7V × 25 Cell = DC 92.5V",
      "1.5V × 60 Cell = DC 90V"
    ],
    "answer": 2,
    "explanation": "신형 Li-Po 축전지는 3.7V × 25 Cell로 구성되어 DC 92.5V이며, 용량은 100Ah이다. (기존 Ni-Cd는 1.2V×70Cell=84V)",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_001",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "출입문 도어엔진(Door Engine)에서 출입문이 닫힐 때 쿠션 작용이 일어나는 원리는?",
    "options": [
      "전기적 신호로 모터 속도를 줄인다.",
      "배기구 2개가 막히면서 중앙 한 곳으로만 배기되어 속도가 줄어든다.",
      "쿠션 스프링이 압축된다.",
      "오일 댐퍼가 작동한다."
    ],
    "answer": 1,
    "explanation": "출입문이 닫힐 때(또는 열릴 때) 피스톤이 끝부분에 도달하면 배기구 2개가 막히고 중앙 한 곳으로만 배기되면서 쿠션 작용이 일어난다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_002",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "정상 운행 시 출입문 열림 회로를 구성하기 위한 필수 조건(계전기)은?",
    "options": [
      "ZVR 여자 (속도 5km/h 이하)",
      "LSBS ON 취급",
      "DIRS ON 취급",
      "DrR 소자"
    ],
    "answer": 0,
    "explanation": "정상적으로 정거장에 정차(5km/h 이하)하면 ATC 장치에서 ZVR이 여자 되어 출입문 열림 회로(DOS 취급 가능)가 구성된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_003",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "출입문 열림 스위치(DOS) 취급 시 자기유지 회로를 구성하여 손을 떼도 열림 상태를 유지하게 하는 계전기는?",
    "options": [
      "DrR1, DrR2",
      "DrK1, DrK2",
      "DIR1, DIR2",
      "ZVR"
    ],
    "answer": 1,
    "explanation": "DOS를 누르면 DrK1, DrK2가 여자 되고, 이들의 a접점을 통해 자기유지 회로가 구성되어 DCS를 누르기 전까지 열림 상태를 유지한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_004",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "출입문등(DILP)이 점등되고 동력 운전이 가능해지는 출입문 닫힘 간격 기준은?",
    "options": [
      "5.0mm 이하",
      "7.5mm 이하",
      "10.0mm 이하",
      "12.5mm 이하"
    ],
    "answer": 1,
    "explanation": "전체 출입문이 7.5mm 이하(미만)로 닫히면 DILP DS 회로가 구성되어 DIR1, DIR2가 여자 되고 DILP가 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_005",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "출입문 차측등(DLP)이 점등되는 조건(출입문 간격)은?",
    "options": [
      "5.0mm 이상",
      "7.5mm 이상",
      "10.0mm 이상",
      "12.5mm 이상"
    ],
    "answer": 3,
    "explanation": "출입문이 12.5mm 이상 열리면 DLP DS 회로가 구성되어 차측등(적색)이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_006",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "출입문 재개폐 스위치(DROS)를 취급했을 때 모든 출입문이 아닌 특정 출입문만 다시 열리는 이유는?",
    "options": [
      "DROS 회로가 선택적으로 배선되어 있어서",
      "DRO DS 접점이 12.5mm 이상 열려 있는 출입문만 회로를 구성하기 때문에",
      "기관사가 선택해서 열 수 있기 때문에",
      "고장 난 출입문만 감지하기 때문에"
    ],
    "answer": 1,
    "explanation": "DROS 취급 시 DRO DS(a) 접점이 12.5mm 이상 열려 있는(이물질 등으로 덜 닫힌) 출입문에만 전원을 공급하여 재개방시킨다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_007",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "출입문 반감 스위치(DHS)를 취급했을 때 열리지 않게 되는 출입문은?",
    "options": [
      "각 차량의 양 끝 2개 출입문",
      "각 차량의 중앙 4개(한쪽 2개) 출입문",
      "홀수 호차의 모든 출입문",
      "진행 방향 좌측 출입문 전체"
    ],
    "answer": 1,
    "explanation": "DHS 취급 시 DHR이 여자 되어 각 차량의 중앙 출입문(3,4,5,6번) 회로를 차단하므로 4개(한쪽 2개)의 출입문이 열리지 않는다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_008",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "전체 출입문 닫힘 불능 시, DOS 고장과 DCS 고장을 구분하는 방법으로 CrSN을 OFF 했을 때 닫히고 다시 ON 했을 때 열린다면 원인은?",
    "options": [
      "DCS 고장",
      "DOS 고장",
      "ZVR 고장",
      "DROS 고장"
    ],
    "answer": 1,
    "explanation": "CrSN을 다시 ON 했을 때 출입문이 저절로 열린다면, 열림 스위치(DOS)가 눌린 상태로 고착(고장)되었다고 판단할 수 있다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_009",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "이례 상황에서 제동핸들을 취거했을 때 출입문 열림 회로를 구성해 주는 접점은?",
    "options": [
      "ZVR(a)",
      "HCR(b)와 TCR(b)",
      "MCOR(b)",
      "LSBS(a)"
    ],
    "answer": 1,
    "explanation": "제동핸들 취거 시 전부 및 후부 운전실에서 HCR(b)와 TCR(b) 연동으로 출입문 열림 회로가 구성된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_010",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "후부 TC차의 DILPN(출입문등 차단기)이 차단되었을 때 나타나는 현상은?",
    "options": [
      "출입문등(DILP)은 소등되지만 동력 운전은 가능하다.",
      "출입문등 소등 및 동력 운전 불능",
      "출입문이 열리지 않는다.",
      "비상제동이 체결된다."
    ],
    "answer": 1,
    "explanation": "후부 TC차의 DILPN이 차단되면 전체 회로 전원이 차단되어 DIR1(동력운전), DIR2(점등)가 모두 여자 되지 않으므로 동력 운전도 불가능하다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_011",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "ATC 장치 고장으로 ZVR이 여자 되지 않아 출입문을 열 수 없을 때 조치 방법은?",
    "options": [
      "DIRS를 ON 한다.",
      "LSBS(저속도 바이패스 스위치)를 ON 한다.",
      "DHS를 ON 한다.",
      "EGS를 취급한다."
    ],
    "answer": 1,
    "explanation": "ZVR 불량 시 LSBS를 ON 위치로 취급하면 ZVR 접점을 바이패스하여 출입문 열림 회로를 구성할 수 있다. (출발 시는 OFF 복귀)",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_012",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "출입문 비연동 스위치(DIRS)를 취급해야 하는 상황은?",
    "options": [
      "출입문이 안 열릴 때",
      "1개 이상의 출입문이 닫히지 않아 동력 운전 회로가 구성되지 않을 때",
      "출입문 반감 운전이 필요할 때",
      "재개폐가 필요할 때"
    ],
    "answer": 1,
    "explanation": "DIRS는 출입문 연동(모든 문 닫힘 확인)을 무시하고 동력 운전 회로를 구성할 때 사용하는 비연동 스위치이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_013",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "1량의 DMVN(출입문 전자밸브 차단기)이 차단되었을 때 해당 차량의 출입문 상태는?",
    "options": [
      "열림 불능 (닫힘 상태 유지)",
      "저절로 열림",
      "반감(DHS) 상태가 됨",
      "수동으로도 열 수 없음"
    ],
    "answer": 0,
    "explanation": "DMVN이 차단되면 전자밸브(DMV)에 전원이 공급되지 않아 공기 공급이 차단(좌측 실린더 가압 상태 유지)되므로 출입문은 열리지 않는다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_014",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "출입문이 열려 있는 상태에서 DHS(반감 스위치)를 취급하면 반감 작용이 되지 않는 이유는?",
    "options": [
      "DHR 계전기가 여자 되지 않아서",
      "DRO DS 접점에 의해 DMV 여자 회로가 계속 구성되기 때문",
      "ZVR이 소자 되어서",
      "압축공기가 부족해서"
    ],
    "answer": 1,
    "explanation": "출입문이 열려 있으면 DRO DS 접점이 연결되어 있어, DHR(b) 접점이 차단되더라도 우회 회로를 통해 DMV가 계속 여자 되므로 닫히지 않는다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_015",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "TC차의 DLPN(출입문 차측등 차단기)이 차단되었을 때 TGIS 모니터의 표시 상태는?",
    "options": [
      "해당 TC차 출입문이 항상 열림으로 표시된다.",
      "해당 TC차 출입문이 실제로는 열려 있어도 닫힘으로 표시된다.",
      "전체 차량 출입문 상태를 알 수 없다.",
      "출입문등(DILP)이 점등되지 않는다."
    ],
    "answer": 1,
    "explanation": "DLPN이 차단되면 TGIS로 입력되는 개별 출입문 열림 신호(DLP DS 전원)가 차단되므로, 모니터상에는 출입문이 닫혀 있는 것으로 잘못 표시된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_016",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "승무원 출입문 개폐 스위치 차단기(CrSN)의 위치는?",
    "options": [
      "M'차 배전반",
      "각 차량 배전반",
      "전부 및 후부 TC차 운전실 배전반",
      "객실 내 비상기기함"
    ],
    "answer": 2,
    "explanation": "CrSN은 승무원이 출입문을 제어하는 전원 차단기로, 전부 및 후부 TC차 운전실 배전반에 있다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_017",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "출입문 닫힘 회로에서 141선이 차단되면 DrR(출입문 계전기)이 소자 되어 발생하는 동작은?",
    "options": [
      "DMV 무여자로 출입문 닫힘",
      "DMV 여자로 출입문 열림",
      "비상제동 체결",
      "DILP 소등"
    ],
    "answer": 0,
    "explanation": "DCS를 눌러 141선이 차단되면 DrR이 소자 되고, 이에 따라 DMV가 무여자 되어 좌측 실린더에 공기가 공급되면서 출입문이 닫힌다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_018",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "전차선 정전으로 축전지 전압이 약 74V 이하로 방전되었을 때 가장 우려되는 사항은?",
    "options": [
      "출입문이 저절로 열린다.",
      "전기동차 재기동(기동 회로 구성)이 어려워진다.",
      "비상등이 켜지지 않는다.",
      "공기 제동이 풀린다."
    ],
    "answer": 1,
    "explanation": "축전지 전압이 74V 이하로 떨어지면 제어 전원 부족으로 전기동차 재기동이 어려워지므로 주의해야 한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_019",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "출입문 비연동 운전 시 DIR1 계전기의 상태는?",
    "options": [
      "출입문 상태와 관계없이 DIRS를 통해 11선을 가압한다.",
      "DIR1이 여자 되어야만 동력이 공급된다.",
      "DIR1은 소자 상태이며, DIRS 접점으로 우회한다.",
      "DIR1이 고장 난 상태이다."
    ],
    "answer": 2,
    "explanation": "DIRS를 취급(ON)하면 DIR1 계전기 a접점과 병렬로 연결된 DIRS 접점을 통해 회로가 구성되므로, DIR1이 소자 상태라도 동력 운전이 가능하다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_3_020",
    "subject": "emu",
    "chapter": "5.3 출입문 장치",
    "question": "출입문 기계장치에 압축공기를 공급하는 감압밸브(PRV)의 조정 압력은?",
    "options": [
      "3.5 kg/cm²",
      "5.0 kg/cm²",
      "8.0 kg/cm²",
      "9.0 kg/cm²"
    ],
    "answer": 1,
    "explanation": "주 공기관(MR)의 8~9kg/cm² 압력을 PRV에서 5kg/cm²로 감압하여 출입문 작동용으로 사용한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_4_001",
    "subject": "emu",
    "chapter": "5.4 점등 장치",
    "question": "전조등(HLP)의 우측 등과 좌측 등의 전원 구성으로 옳은 것은?",
    "options": [
      "우측: DC 100V, 좌측: AC 100V",
      "우측: AC 100V, 좌측: DC 100V",
      "양쪽 모두 DC 100V",
      "양쪽 모두 AC 100V"
    ],
    "answer": 0,
    "explanation": "우측 등은 비상시 사용을 위해 DC 100V(축전지 가능), 좌측 등은 AC 100V 전원을 사용한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_4_002",
    "subject": "emu",
    "chapter": "5.4 점등 장치",
    "question": "객실등 제어회로에서 LPCS를 ON 취급했을 때 여자 되는 접촉기는?",
    "options": [
      "LPK1, LPK2",
      "LRR1, LRR2",
      "ADLPR",
      "EOR2"
    ],
    "answer": 0,
    "explanation": "LPCS를 ON 하면 166선이 가압되어 각 차량의 LPK1, LPK2(객실등 접촉기)가 여자 되어 객실등이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_4_003",
    "subject": "emu",
    "chapter": "5.4 점등 장치",
    "question": "SIV 고장으로 연장 급전 시 객실등의 상태는?",
    "options": [
      "전체 소등",
      "전체 점등",
      "절반(약 1/2) 소등 (LPK2 차단)",
      "비상등만 점등"
    ],
    "answer": 2,
    "explanation": "연장 급전 시 LRR2가 여자 되어 LPK2 회로를 차단(b접점)하므로, 객실등의 절반(LPK2 부하)이 소등되어 부하를 반감한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_4_004",
    "subject": "emu",
    "chapter": "5.4 점등 장치",
    "question": "방공등(ADLP)을 비상 전원(축전지)으로 점등하기 위해 취급하는 스위치와 관련 계전기는?",
    "options": [
      "EOCN ON → EOR2 여자",
      "ADLPS ON → ADLPR 여자",
      "LPCS ON → LPK1 여자",
      "ESPS ON → ESK 여자"
    ],
    "answer": 0,
    "explanation": "전차선 단전 등 비상시 EOCN을 ON 하면 EOR2가 여자 되어 축전지 전원(102선)으로 방공등을 점등시킬 수 있다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_4_005",
    "subject": "emu",
    "chapter": "5.4 점등 장치",
    "question": "운전실 MCB OFF등이 점등되는 조건은?",
    "options": [
      "전체 M'차의 MCB가 차단되었을 때",
      "1개라도 MCB가 차단되었을 때",
      "SIV가 정지했을 때",
      "전차선 전압이 없을 때"
    ],
    "answer": 0,
    "explanation": "3개 Unit의 M'차 MCB가 '모두' 차단되면 MCBR3 여자 조건을 통해 MCB OFF등이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_4_006",
    "subject": "emu",
    "chapter": "5.4 점등 장치",
    "question": "Power CRT등(Power등)이 점등되기 위한 조건은?",
    "options": [
      "5개 구동차(M, M')의 전동기 전류가 설정치 이상일 때 (CTR 여자)",
      "MCB가 투입되었을 때",
      "전차선 전압이 인가되었을 때",
      "SIV가 동작 중일 때"
    ],
    "answer": 0,
    "explanation": "동력 운전 및 회생 제동 시 5개 구동차의 CTR(전류 감지 계전기)이 모두 여자 되어야 Power등이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_4_007",
    "subject": "emu",
    "chapter": "5.4 점등 장치",
    "question": "M'차에서 ACOCRR이 여자 되어 Fault등이 점등되는 원인은?",
    "options": [
      "ACOCR 또는 ArrOCR 동작 시",
      "SIVFR 동작 시",
      "CIFR 동작 시",
      "L1FR 동작 시"
    ],
    "answer": 0,
    "explanation": "ACOCR(교류 과전류)이나 ArrOCR(피뢰기 동작)이 여자 되면 유지 계전기인 ACOCRR이 여자 되어 고장 표시등(Fault)을 계속 점등시킨다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_4_008",
    "subject": "emu",
    "chapter": "5.4 점등 장치",
    "question": "주변압기 냉각 고장으로 MTAR이 여자 되어 VCOS를 취급했을 때 점등되는 등은?",
    "options": [
      "UCO등 (Unit Cut-Out)",
      "VCO등 (Vehicle Cut-Out)",
      "Fault등",
      "HSCB등"
    ],
    "answer": 0,
    "explanation": "MTAR 고장은 Unit 전체(M, M')에 영향을 주므로, VCOS 취급 시 UCORR이 여자 되어 UCO등이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_4_009",
    "subject": "emu",
    "chapter": "5.4 점등 장치",
    "question": "운전실 SqLp등(TEST 스위치등)이 점등되었을 때 MCB가 투입되지 않는 이유는?",
    "options": [
      "SqR1, SqR2가 여자 되어 MCB 투입 회로를 차단하기 때문",
      "배터리 전압이 낮아지기 때문",
      "Pan이 상승하지 않기 때문",
      "SIV가 동작하지 않기 때문"
    ],
    "answer": 0,
    "explanation": "TEST 스위치를 취급하면 SqR1, SqR2가 여자 되며, 이들이 MCB 투입 코일 회로를 차단하여 오동작을 방지한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_4_010",
    "subject": "emu",
    "chapter": "5.4 점등 장치",
    "question": "C/I 고장(CIFR 여자)으로 VCOS를 취급했을 때 점등되는 등과 동작하는 계전기는?",
    "options": [
      "VCO등 점등, VCORR 여자",
      "UCO등 점등, UCORR 여자",
      "Fault등 점등, ACOCRR 여자",
      "MCB OFF등 점등"
    ],
    "answer": 0,
    "explanation": "C/I 고장은 해당 차량(Vehicle)만의 문제이므로 VCOS 취급 시 VCORR이 여자 되고 VCO등이 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_5_001",
    "subject": "emu",
    "chapter": "5.5 TGIS",
    "question": "TGIS 모니터 장치의 입력 전압 변동 허용 범위(DC)는?",
    "options": [
      "DC 70V ~ 110V",
      "DC 50V ~ 90V",
      "DC 90V ~ 130V",
      "DC 12V ~ 36V"
    ],
    "answer": 0,
    "explanation": "TGIS 모니터의 입력 전압 변동 범위는 DC 70V ~ 110V이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_5_002",
    "subject": "emu",
    "chapter": "5.5 TGIS",
    "question": "TGIS 고장 화면 표시의 최우선 순위는?",
    "options": [
      "ATC/ATS 관련 고장",
      "제동 관련 고장",
      "SIV 관련 고장",
      "C/I 관련 고장"
    ],
    "answer": 0,
    "explanation": "열차 보안과 직결된 ATC/ATS 관련 고장이 고장 화면 표시 우선순위 1위이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_5_003",
    "subject": "emu",
    "chapter": "5.5 TGIS",
    "question": "TGIS '압력' 화면에서 확인할 수 있는 정보는?",
    "options": [
      "BC 압력과 AS 압력",
      "MR 압력과 BP 압력",
      "Pan 압력",
      "출입문 압력"
    ],
    "answer": 0,
    "explanation": "TGIS 압력 화면에서는 각 차량의 BC(제동통) 압력과 AS(공기스프링) 압력을 표시한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_5_004",
    "subject": "emu",
    "chapter": "5.5 TGIS",
    "question": "TGIS 모니터의 데이터 전송 속도는?",
    "options": [
      "1,000bps",
      "9,600bps",
      "10Mbps",
      "100Mbps"
    ],
    "answer": 0,
    "explanation": "TGIS 모니터 장치의 전송 속도는 1,000bps이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_6_001",
    "subject": "emu",
    "chapter": "5.6 기타 저압장치",
    "question": "이례 상황 시 열차무선 장치(TRCP)에서 비상 통화를 위해 사용하는 채널은?",
    "options": [
      "CH 1",
      "CH 2",
      "CH 3",
      "CH 4"
    ],
    "answer": 1,
    "explanation": "비상 통화는 TRCP의 CH 2번을 눌러 사용하며, '비상'을 3번 이상 통보한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_6_002",
    "subject": "emu",
    "chapter": "5.6 기타 저압장치",
    "question": "비상 상황 시 EOCN(비상 운전 스위치)을 ON 취급했을 때 사용할 수 있는 기기는?",
    "options": [
      "열차 무선, 방공등, 차내 방송장치",
      "전조등, 객실등 전체",
      "출입문, 에어컨",
      "SIV, CM"
    ],
    "answer": 0,
    "explanation": "EOCN ON 시 축전지 전원으로 최소한의 통신(무선, 방송)과 조명(방공등)을 사용할 수 있게 한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_6_003",
    "subject": "emu",
    "chapter": "5.6 기타 저압장치",
    "question": "전부 운전실 무전기 고장 시 후부 운전실 무전기를 원격으로 사용하기 위한 스위치는?",
    "options": [
      "REMOTE",
      "RTT",
      "YARD",
      "KNR"
    ],
    "answer": 0,
    "explanation": "REMOTE 스위치를 선택하면 후부 운전실 무전기를 이용하여 통화가 가능하다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_6_004",
    "subject": "emu",
    "chapter": "5.6 기타 저압장치",
    "question": "행선표시 장치(TrIFLp)와 열차번호 표시 장치(TrNLp)의 사용 전원은?",
    "options": [
      "AC 220V",
      "AC 100V",
      "DC 100V",
      "DC 24V"
    ],
    "answer": 0,
    "explanation": "열차 행선 표시등과 열차 번호 표시등은 AC 220V 전원을 사용한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_6_005",
    "subject": "emu",
    "chapter": "5.6 기타 저압장치",
    "question": "운전실 제상장치(Def)의 사용 전원은?",
    "options": [
      "AC 100V",
      "AC 220V",
      "DC 100V",
      "DC 24V"
    ],
    "answer": 0,
    "explanation": "전면 유리창의 성애 및 습기를 제거하는 제상장치는 AC 100V 전원을 사용한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "train_5_6_006",
    "subject": "emu",
    "chapter": "5.6 기타 저압장치",
    "question": "방송장치(PA)의 주요 구성품이 아닌 것은?",
    "options": [
      "중앙방송 제어기",
      "IC 음성합성 재생기",
      "출력 증폭기",
      "영상 기록 장치"
    ],
    "answer": 3,
    "explanation": "방송장치는 제어기, 증폭기, 음성합성 재생기(자동방송), 스피커 등으로 구성된다. 영상 기록 장치는 CCTV 관련 설비이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_129",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 보조변압기(AT)에 대한 설명으로 틀린 것은?",
    "options": [
      "각 차량에 1대씩 설치되어 있다.",
      "AC 220V는 객실등 전원으로 공급한다.",
      "AC 100V는 냉방장치 제어 및 압축공기를 사용하는 보온히터장치에 사용된다.",
      "운행 중 ATN이 차단되면 해당차량은 객실 AC등이 소등되나 냉방장치는 가동된다."
    ],
    "answer": 3,
    "explanation": "운행 중 ATN이 차단되면 해당 차량은 객실 AC등이 소등되고 냉방장치도 가동되지 않는다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_130",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 충전장치의 기기 구성에 적합하지 않은 것은?",
    "options": [
      "축전지",
      "충전용 스위치",
      "충전용 차단기",
      "충전용 변압기"
    ],
    "answer": 1,
    "explanation": "충전장치의 주요 기기 구성은 충전용 변압기(BCT), 정류장치(RF), 충전용 회로 차단기(BCN), 축전지(Battery)이다. 충전용 스위치는 주요 구성품 명칭에 포함되지 않는다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_131",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 신형 축전지의 사양으로 적절하지 않은 것은?",
    "options": [
      "형식 : Li-Po",
      "전압 : DC 84V(1.2V×70Cell)",
      "용량 : 100Ah",
      "충전방식 : 상시 부동충전"
    ],
    "answer": 1,
    "explanation": "신형 리튬-폴리머(Li-Po) 축전지의 전압은 DC 92.5V(3.7V×25Cell)이다. (DC 84V는 기존 니켈-카드뮴 축전지 사양)",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_132",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 출입문 기계장치에 대한 설명으로 틀린 것은?",
    "options": [
      "공기 조정나사는 상부 측의 것은 쿠션 조정나사이다.",
      "공기 조정나사는 하부 측의 것은 속도 조정나사이다.",
      "도어엔진은 구조가 간단하지만 중량이 무겁다.",
      "출입문 전기적 접점이 3개씩 설치되어있다."
    ],
    "answer": 2,
    "explanation": "도어엔진(Door Engine)은 구조가 간단하면서, 중량 또한 가볍다는 특징이 있다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_133",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 출입문스위치에 대한 설명으로 틀린 것은?",
    "options": [
      "DILP DS는 전체 출입문이 12.5mm 이상 열리면 회로가 차단된다.",
      "DILP DS는 전체 출입문의 간격이 7.5mm이하로 닫히면 회로가 연결된다.",
      "DLP DS는 출입문이 12.5mm 이상 열리면 회로가 구성된다.",
      "DRO DS는 출입문이 닫힘상태에서 12.5mm 이상 열려 있을 때 DROS를 취급하면 그 출입문만 열릴 수 있도록 회로를 구성시켜 준다."
    ],
    "answer": 0,
    "explanation": "DILP DS는 1개의 출입문이라도 7.5mm 이상 열리게 되면 회로가 차단된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_134",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 CrS(DOS)로 출입문을 개방할 수 있는 조건으로 틀린 것은?",
    "options": [
      "ZVR 여자 시(5Km/h 이하)",
      "DIRS 취급 시",
      "BC핸들 취거 시",
      "전·후진제어기 OFF시"
    ],
    "answer": 1,
    "explanation": "출입문 열림 회로 구성 조건은 ZVR(a) 여자(정차), LSBS(ON), 제동핸들 취거(HCR b, TCR b), 전·후진핸들 OFF 등이다. DIRS는 동력운전 회로 구성을 위한 비연동 스위치로 출입문 개방 조건이 아니다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_135",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "전체 출입문 닫힘불능 시 DOS와 DROS 고장 구분하는 방법으로 틀린 설명은?",
    "options": [
      "전체 출입문이 닫히지 않을때 DCS를 눌러도 전체 출입문이 닫히지 않는다.",
      "CrSN을 차단 후 다시 ON 취급 시 출입문이 열리면 DOS 고장으로 판단한다.",
      "CrSN을 차단 후 다시 ON 취급 시 출입문이 안 열리면 DROS 고장으로 판단한다.",
      "DROS 고장 시 즉시 승객 하차조치하여 회송조치를 한다."
    ],
    "answer": 3,
    "explanation": "DCS나 DROS 고장 시에는 정거장에서 DOS(ON)하여 승객을 취급한 후 CrSN을 OFF 취급하여 출입문을 닫고 다시 CrSN을 ON 하는 방식으로 차량 교환역까지 운전한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_136",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "전동열차가 승강장에서 장시간 정차 시 객실 내의 동절기 보온 및 냉방유지를 위해 취급하는 기기로 맞는 것은?",
    "options": [
      "DMVN",
      "DIRS",
      "DHS",
      "LSBS"
    ],
    "answer": 2,
    "explanation": "DHS(출입문 반감 스위치)는 동절기 및 하절기 객실 보온 및 냉방 유지를 위하여 중앙의 4개 출입문이 열리지 않도록 취급하는 스위치이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_137",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "전동열차가 운행 중 출입문 고장 등으로 1개 이상의 출입문이 닫히지 않을 때 사용하는 기기는?",
    "options": [
      "DHS",
      "DIRS",
      "LSBS",
      "DROS"
    ],
    "answer": 1,
    "explanation": "DIRS(출입문 비연동 스위치)는 1개 이상의 출입문이 닫히지 않을 때 출입문 연동을 무시하고 동력운전 회로를 구성하기 위해 사용한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_138",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 출입문 관련 차단기 및 스위치로 틀린 설명은?",
    "options": [
      "DLPN 차단 시 해당 차 출입문 차측등 점등 불능된다.",
      "후부에서 출입문을 취급해야 하는 경우 후부 LSBS를 취급한다.",
      "운행 중 후부 CrSN 차단 시 아무런 현상이 없다.",
      "후부 DILPN 차단 시 출입문등은 소등되나 동력운전은 가능하다."
    ],
    "answer": 3,
    "explanation": "후부 TC차의 DILPN이 차단되면 전체 회로 전원이 차단되어 DIR1, DIR2가 여자 되지 않으므로 동력운전도 불가능하다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_139",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 전조등에 대한 설명으로 틀린 것은?",
    "options": [
      "TC차 전면 좌우의 백열등은 165W/55W인 2개의 필라멘트를 내장하고 있다.",
      "우측 등은 직류 전원인 DC 100V를 사용한다.",
      "좌측 등은 교류 전원인 AC 100V를 사용한다.",
      "좌측 등은 비상상황 발생 시에도 사용이 가능하다."
    ],
    "answer": 3,
    "explanation": "비상 상황 발생 시(전차선 단전 등) 사용 가능한 것은 축전지 전원을 사용하는 우측 등(DC 100V)이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_140",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 운전실등에 대한 설명으로 틀린 것은?",
    "options": [
      "전차선 단전 시 AC 형광등 1개만 점등된다.",
      "운전실등은 20W용 형광등 2개가 설치되어 있다.",
      "직류전원인 DC 100V를 사용하는 CabLP2이 설치되어 있다.",
      "교류전원인 AC 220V를 사용하는 CabLP1이 설치되어 있다."
    ],
    "answer": 0,
    "explanation": "전차선 단전 시에는 축전지 전원을 사용하는 DC 형광등(CabLP2) 1개만 점등된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_141",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 후부 PLPN 차단 시 현상으로 틀린 것은?",
    "options": [
      "MCB OFF등이 점등되지 않는다.",
      "MCB ON등이 점등되지 않는다.",
      "ACV등, DCV등이 점등되지 않는다.",
      "Power CRT등이 점등되지 않는다."
    ],
    "answer": 2,
    "explanation": "후부 PLPN은 MCB ON/OFF등, Power등의 전원을 공급한다. ACV/DCV등은 해당 M'차량의 PLPN을 통해 전원을 공급받으므로 후부 PLPN 차단과 직접적인 관계가 없다(단, 회로 구성에 따라 다를 수 있으나 교재 상 MCB, Power등이 후부 PLPN으로 명시됨).",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_142",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 VCOS 취급해야 하는 경우로 틀린 것은?",
    "options": [
      "CIFR 여자 후 복귀불능 시",
      "BMFR 여자 후 복귀불능 시",
      "MTAR 여자 후 복귀불능 시",
      "SIVFR 여자 후 복귀불능 시"
    ],
    "answer": 3,
    "explanation": "SIVFR(SIV 고장) 발생 시에는 VCOS가 아닌 ESPS(연장급전 스위치)를 취급하거나 해당 SIV를 차단하고 연장급전한다. VCOS는 동력 운전 불능 시 해당 차량/유닛을 차단하는 스위치이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_143",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 Test 스위치 취급 후 현상으로 틀린 것은?",
    "options": [
      "최초 기동 시 MCB 투입 불능의 원인 중의 하나이다.",
      "전체 MCB 투입 불능의 원인중의 하나이다.",
      "MCB를 투입하기 전에 Test를 취급하면 MCB가 투입되지 않는다.",
      "MCB를 투입하고 난 후 Test를 취급하면 MCB가 차단된다."
    ],
    "answer": 3,
    "explanation": "MCB를 투입하고 난 후 TEST 스위치를 취급할 경우, MCB 차단 현상은 발생하지 않는다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_144",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 TC차 TGIS 중앙장치에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "각 차량의 주요기기 동작 및 이상상태의 데이터를 수집하고 기억한다.",
      "표시장치와 제어장치로 모니터와 데이터를 전부 TC차로 전송한다.",
      "전부 TC차의 TGIS 모니터 장치가 고장일 경우 M, M'차가 중앙국으로 변경된다.",
      "열차 전체의 정보전송 제어를 위해 TGIS 전송시스템의 중앙국 역할을 한다."
    ],
    "answer": 2,
    "explanation": "전부 TC차의 TGIS 모니터 장치가 고장일 경우, 자동으로 전환되어 '후부 TC차'가 중앙국으로 변경된다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_145",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 TGIS 모니터장치 제원에 대한 설명으로 틀린 것은?",
    "options": [
      "보존보증온도 : -10℃~40℃",
      "모니터 소비전력 : 100W",
      "차륜경 : 780~860mm",
      "적산거리 : 0~90,000km/h(1km 단위)"
    ],
    "answer": 0,
    "explanation": "TGIS 모니터 장치의 성능 보증 온도는 -10℃~40℃이고, 보존 보증 온도는 -25℃~70℃이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_146",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "TGIS 모니터 화면별 기능으로 틀린 것은?",
    "options": [
      "차장화면 : 차장에게 필요한 정보표시",
      "설정화면 : 시계, 지점보정, 차량번호등 설정",
      "검수화면 : 검수시험, 차륜경 보정 등",
      "기록출력화면 : LSI Card 판독(검수 지원) 각종 기록 Data"
    ],
    "answer": 1,
    "explanation": "표준 교재 이미지 설명에 따르면 '지점보정' 등은 '보정화면'이나 별도의 기능으로 분류되는 경우가 있으며, 설정화면은 시계, 차량번호 등을 설정한다. (문제집 정답 기준: 2번이 틀린 것으로 되어있음. 교재 그림상 '보정화면'에 차륜경 보정 등이 명시됨)",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_147",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 운전상태 화면에 대한 설명으로 틀린 것은?",
    "options": [
      "화면 우측의 압력을 누르면, 각 차량의 압력상태를 표시한다.",
      "화면 우측의 PWM을 누르면, 각 주변환장치의 출력전압, 전류를 표시한다.",
      "화면 우측의 Inverter를 누르면, 각 주변환장치의 출력 변조율을 표시한다.",
      "화면 우측의 SIV을 누르면, 각 SIV 장치의 출력전압, 전류를 표시한다."
    ],
    "answer": 2,
    "explanation": "화면 우측의 'VVVF' 버튼을 누르면 각 주변환장치의 출력 변조율을 표시한다. (버튼 명칭이 Inverter가 아님)",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_148",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 고장화면의 우선순위로 틀린 것은?",
    "options": [
      "1순위 – ATC/ATS관련 고장",
      "2순위 – 특고압, 주회로 및 C/I 관련 고장",
      "4순위 – SIV 관련 고장",
      "5순위 – CM 관련 고장"
    ],
    "answer": 1,
    "explanation": "고장화면 우선순위는 1순위: ATC/ATS, 2순위: 제동 관련, 3순위: 특고압, 주회로 및 C/I 관련이다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_149",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "방송장치의 취급에 대한 설명으로 틀린 것은?",
    "options": [
      "객실내 방송은 운전실의 중앙방송 제어기의 MIC SW를 BROAD 위치로 하고 음량을 조정하면서 방송을 한다.",
      "운전실 양쪽의 측면으로 방송할 경우 Hand MIC를 Hanger에서 빼내어 키를 누르면서 방송을 한다.",
      "객실외 방송은 스피커 위치를 ROOM에서 SIDE1 또는 SIDE2 위치로 하고, 방송이 끝나면 ROOM 위치로 복귀한다.",
      "중앙방송 제어기의 MIC SW를 올리면 승무원 통화가 가능하다."
    ],
    "answer": 3,
    "explanation": "중앙방송 제어기의 MIC SW를 'ORDER' 위치로 '내리면' 승무원 통화가 가능하다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_150",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "열차무선장치(TRCP)에 대한 설명으로 틀린 것은?",
    "options": [
      "PWR : 차량전원 연결시 점등",
      "TX : 통화전송 시 소등",
      "CALL : 열차호출 수신 시 점등",
      "VOLUME : 통화음량 조정"
    ],
    "answer": 1,
    "explanation": "TX 램프는 통화 전송 시 반짝임(점등/점멸)한다.",
    "source": "A_전기동차_5장_저압보조장치"
  },
  {
    "id": "license_core_3_5_151",
    "subject": "emu",
    "chapter": "5장 저압보조장치",
    "question": "다음 중 AC 220V전원으로 사용되는 장치로 틀린 것은?",
    "options": [
      "창닦이 장치",
      "열차 시간표등",
      "열차번호 표시장치",
      "전자기적"
    ],
    "answer": 3,
    "explanation": "전자기적(Melody Horn)은 직류 전원인 DC 100V를 사용한다.",
    "source": "A_전기동차_5장_저압보조장치"
  }
];
