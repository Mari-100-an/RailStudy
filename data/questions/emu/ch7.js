/**
 * 전기동차 구조 및 기능 - 7단원 문제
 */
var QUESTIONS_EMU_CH7 = [
    {
    "id": "train_7_001",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "RF-CBTC 신호 방식의 특징으로 옳은 것은?",
    "options": [
      "고정폐색 방식(Fixed Block)을 사용한다.",
      "지상 신호 설비를 갖춘 열차 자동 정지 장치이다.",
      "차상에서 직접 열차 간격을 조정하는 이동 폐색 방식(Moving Block)을 구현한다.",
      "궤도회로를 통해 열차 속도를 제어하는 방식이다."
    ],
    "answer": 2,
    "explanation": "RF-CBTC 신호 방식은 무선통신을 통해 열차 위치 정보를 주고받아 차상에서 직접 열차 간격을 조정하는 이동 폐색 방식(Moving Block)을 구현한 것이 특징이다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_002",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATS 장치의 용어 중 신호의 지시속도가 높을 때 여자 되어 정상 운행하게 하고, 열차 속도가 높을 때 무여자 되어 비상제동을 지시하는 계전기는?",
    "options": [
      "ATSEBR",
      "AESR",
      "FDR",
      "SDR"
    ],
    "answer": 1,
    "explanation": "AESR(ATS 초과속도 계전기)은 신호의 지시가 높을 때는 항상 여자 되어 정상 운행하고, 열차 속도가 높을 때는 무여자 하여 비상제동을 지시한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_003",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATO 시스템에서 정차 위치에 정밀 정차를 수행하기 위해 선로 위의 정지 코드를 검지하는 장치는?",
    "options": [
      "TWC",
      "HMI",
      "TRA",
      "TCMS"
    ],
    "answer": 2,
    "explanation": "TRA(Trigger Receiver Assembly) 장치는 정거장 정차 위치에 정밀 정차를 수행하기 위하여 정지 코드를 검지하여 ATO 장치에 전달한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_004",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATO 시스템의 정차 목표 정밀도는?",
    "options": [
      "±10cm 이내",
      "±25cm 이내",
      "±35cm 이내",
      "±50cm 이내"
    ],
    "answer": 2,
    "explanation": "ATO 시스템의 정차 목표는 ±35cm 이내의 범위에 열차를 자동으로 정차시키는 것이다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_005",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "무절연 궤도회로(AF)에 대한 설명으로 옳은 것은?",
    "options": [
      "레일과 레일 사이에 절연체를 두고 궤도회로를 차단한다.",
      "주파수를 달리하는 궤도주파수를 이용하여 폐색구간을 구분한다.",
      "주로 차량 기지 내에서만 사용한다.",
      "전차선 귀환 회로를 별도로 구성해야 한다."
    ],
    "answer": 1,
    "explanation": "무절연 궤도회로(AF) 방식은 각 폐색구간을 절연하지 않고 주파수를 달리하는 궤도주파수를 이용하여 폐색구간을 구분한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_006",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "신호장치에 고장이 발생할 경우 가장 안전한 측(정지신호 등)으로 작동하도록 하는 기능을 무엇이라 하는가?",
    "options": [
      "Feed Back",
      "Fail-Safe",
      "Interlock",
      "Moving Block"
    ],
    "answer": 1,
    "explanation": "Fail-Safe 기능은 고장 발생 시 가장 안전한 측으로 작동하도록 하는 기능(예: 진행 신호 대신 정지 신호 현시)을 말한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_007",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATS 지상자의 공진주파수와 지시속도의 연결이 틀린 것은?",
    "options": [
      "진행(G) - 98KHz",
      "주의(Y) - 106KHz",
      "경계(YY) - 114KHz",
      "정지(R0) - 122KHz"
    ],
    "answer": 3,
    "explanation": "정지(R0)의 공진주파수는 130KHz이다. (R1이 122KHz이다.)",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_008",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATS 수신기부의 발진기(OSC)가 상시 발진하는 주파수는?",
    "options": [
      "68KHz",
      "78KHz",
      "98KHz",
      "106KHz"
    ],
    "answer": 1,
    "explanation": "발진기(OSC)는 차상자와 조합되어 있고, 상시 78KHz를 발진한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_009",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATS 초기설정 시(제동핸들 투입 시) 설정되는 속도는?",
    "options": [
      "15km/h",
      "25km/h",
      "45km/h",
      "65km/h"
    ],
    "answer": 2,
    "explanation": "차량기지 등 지상자가 없는 곳에서 제동핸들을 투입하면 ATS는 45km/h로 초기설정이 된다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_010",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATS 주의(Y)신호 구간에서 지시속도 초과 시 비상제동이 동작하지 않도록 하기 위한 조치 시간은?",
    "options": [
      "1초 이내",
      "3초 이내",
      "5초 이내",
      "10초 이내"
    ],
    "answer": 1,
    "explanation": "속도 초과 시 3초 이내에 확인제동(제동핸들 4단 이상)을 취급하지 않으면 3초 후 즉시 비상제동이 체결된다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_011",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATS 정지신호(R1) 구간을 넘어서 운행해야 할 때 취급하는 스위치는?",
    "options": [
      "ASOS",
      "ATSCOS",
      "15km/h 스위치",
      "Reset 스위치"
    ],
    "answer": 2,
    "explanation": "R1 현시 구간을 넘어서 운행하여야 하는 경우 15km/h 이하로 주의 운전하기 위하여 15km/h 스위치를 취급한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_012",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATS 절대정지(R0) 구간을 위반 진입했을 때의 현상으로 옳은 것은?",
    "options": [
      "경보음만 울리고 제동은 걸리지 않는다.",
      "15km/h로 속도가 제한된다.",
      "Alarm Bell이 울리며 즉시 비상제동이 체결된다.",
      "ATSCOS가 자동으로 차단된다."
    ],
    "answer": 2,
    "explanation": "RO 구간 위반 진입 시에는 NSR1 무여자로 AEmR이 무여자 되고 ATSEBR이 여자 되어 즉시 비상제동이 체결되며 Alarm Bell이 울린다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_013",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATS 장치에서 ASOS(특수운전 스위치)를 취급해야 하는 경우가 아닌 것은?",
    "options": [
      "수신호 및 유도신호에 따라 운전할 경우",
      "정지신호(R0) 자동폐색신호기를 넘어서 운전할 필요 있을 경우",
      "지상 장치가 고장일 경우",
      "주의(Y) 신호 구간을 진입할 경우"
    ],
    "answer": 3,
    "explanation": "주의(Y) 신호 구간은 정상적인 운전 취급(속도 감속 및 확인제동)으로 통과하며, ASOS 취급 대상이 아니다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_014",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATS 장치 고장 등으로 ATSCOS를 차단 취급했을 때의 현상은?",
    "options": [
      "비상제동이 체결된다.",
      "ATS 비상제동을 완해하여 주지만 경보음은 계속 발생한다.",
      "모든 표시등이 소등된다.",
      "45km/h 설정이 자동으로 해제된다."
    ],
    "answer": 1,
    "explanation": "ATSCOS를 차단 위치로 취급하면 비상제동을 완해하여 주지만, ATS 수신 조건에 따른 경보음 등의 동작 현상은 계속 발생한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_015",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 장치의 지시속도 수신 주파수는?",
    "options": [
      "78KHz",
      "990Hz",
      "20.4Hz",
      "60Hz"
    ],
    "answer": 1,
    "explanation": "ATC 지시속도 수신 주파수는 990Hz이며, 이를 코드화하여 사용한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_016",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 장치에서 실제속도 1km/h당 발생하는 주파수는?",
    "options": [
      "10Hz",
      "20.4Hz",
      "48Hz",
      "60Hz"
    ],
    "answer": 2,
    "explanation": "실제속도 검지 주파수는 1km/h당 48Hz이다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_017",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 코드 주파수와 지시속도의 연결이 옳은 것은?",
    "options": [
      "3.2Hz - 40km/h",
      "5.0Hz - 25km/h(본선)",
      "8.6Hz - 80km/h",
      "13.6Hz - 70km/h"
    ],
    "answer": 1,
    "explanation": "3.2Hz는 25km/h(구내), 5.0Hz는 25km/h(본선), 8.6Hz는 60km/h, 13.6Hz는 80km/h이다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_018",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 장치에서 YCR(YARD Cancel Relay)에 해당하는 코드 주파수는?",
    "options": [
      "10.8Hz",
      "13.6Hz",
      "16.8Hz",
      "20.4Hz"
    ],
    "answer": 2,
    "explanation": "16.8Hz는 YCR(YARD Cancel Relay) 코드 주파수이다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_019",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 차상장치 중 레일에 공급되는 지시속도 주파수를 검지하는 안테나 역할을 하는 것은?",
    "options": [
      "Speed Generator",
      "ATC RACK",
      "Pick Up Coil",
      "ADU"
    ],
    "answer": 2,
    "explanation": "Pick Up Coil은 레일에 공급되고 있는 지시속도 주파수를 검지하는 일종의 안테나와 같은 역할을 한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_020",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 주요 계전기 중 지시속도가 실제속도보다 높을 때 여자 되어 동력운전 조건을 형성하는 계전기는?",
    "options": [
      "ACK",
      "VZ",
      "US",
      "BA"
    ],
    "answer": 2,
    "explanation": "US(Under Speed) 계전기는 지시속도가 높으면(Vp>Vt) 출력이 발생하여 여자 되고, 동력운전 조건을 형성한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_021",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 비상제동 계전기(ATCEBR)가 무여자 되어 비상제동이 체결되는 조건이 아닌 것은?",
    "options": [
      "ATC 전원 공급 차단 시",
      "신호 지시속도 초과 시 3초 이내에 감속도 2.4km/h/s 이상 확보되지 않을 때",
      "ATCN 차단 시",
      "확인제동을 취급하여 정상적으로 감속 중일 때"
    ],
    "answer": 3,
    "explanation": "확인제동을 취급하여 정상 감속 중(감속도 확보)일 때는 BA 계전기가 여자 되어 ATCEBR 하부 코일을 여자 시키므로 비상제동이 걸리지 않는다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_022",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 구내운전(YARD2) 계전기에 대한 설명으로 옳은 것은?",
    "options": [
      "전원이 차단되면 무여자 되는 일반 계전기이다.",
      "한 번 여자 되면 전원이 차단되어도 유지되는 유지 계전기이다.",
      "전부 TC차만 여자 된다.",
      "본선 운전 시에도 계속 여자 된다."
    ],
    "answer": 1,
    "explanation": "YARD2 계전기는 한 번 여자 되면 전원 공급이 차단되어도 계속 여자 상태를 유지하는 유지 계전기이며, 전·후부가 동시에 동작한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_023",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 정지 후 진행(SS) 계전기가 여자 되기 위한 조건은?",
    "options": [
      "ACK 여자(확인제동)와 VZ 여자(열차정지) 조건",
      "US 여자와 VZ 여자 조건",
      "SC 여자와 YARD2 여자 조건",
      "ATCEBR 무여자 조건"
    ],
    "answer": 0,
    "explanation": "SS 계전기는 ACK 여자(확인 제동)와 VZ 여자(열차 정지) 조건이 충족되어야 여자 된다(AND Gate).",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_024",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 구간에서 지시속도 초과(Overspeed) 시 발생하는 현상이 아닌 것은?",
    "options": [
      "“삐” 하는 ATC 경보음 발생",
      "자동으로 ATC 상용 7단 제동 체결",
      "동력운전 회로 차단",
      "즉시 비상제동 체결"
    ],
    "answer": 3,
    "explanation": "지시속도 초과 시에는 즉시 비상제동이 아니라 ATC 상용 7단 제동이 체결된다. (감속도 부족 시에만 비상제동)",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_025",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 정지신호인 '정지 후 진행' 모드에서 ADU에 현시되는 지시속도와 경보음은?",
    "options": [
      "0km/h, 연속 경보",
      "15km/h, 8초 Alarm",
      "25km/h, 경보 없음",
      "45km/h, 3초 Alarm"
    ],
    "answer": 1,
    "explanation": "정지 후 진행 운전 시 ADU에는 15km/h가 현시되고 8초마다 한 번씩 경보음(8초 Alarm)이 울린다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_026",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "운전취급역 Y선이나 인상선에서 ADU에 15km/h가 현시되고 8초 Alarm이 울린다면 이는 어떤 신호인가?",
    "options": [
      "진행 신호",
      "구내 운전 신호",
      "절대 정지 신호",
      "주의 신호"
    ],
    "answer": 2,
    "explanation": "운전취급역의 Y선, 인상선에서 ADU 15km/h 현시는 절대정지 신호이므로 진출하여서는 안 된다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_027",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATC 장치 보호를 위해 설치된 차단기 중 DC 100V를 공급하는 차단기는?",
    "options": [
      "ATCN",
      "ATCPSN",
      "ATCCOS",
      "MCN"
    ],
    "answer": 1,
    "explanation": "ATCPSN(ATC Power Supply N.F.B)은 ATC 장치 내 전원공급 장치(P.S.U)로 103선의 DC 100V를 공급하는 차단기이다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_028",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATCCOS(ATC 차단 스위치)를 차단 취급해야 하는 경우가 아닌 것은?",
    "options": [
      "ATC 차상 장치 고장 시",
      "대용 폐색 방식 시행 시",
      "구원열차 운전 시",
      "본선에서 정상 운행 중일 때"
    ],
    "answer": 3,
    "explanation": "정상 운행 중에는 ATCCOS를 차단하지 않는다. 고장, 대용폐색, 구원운전 등의 비상시에 관제 승인을 받아 차단한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_029",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATCCOS를 차단했을 때의 ADU 현시 상태와 운전 속도 제한은?",
    "options": [
      "ADU 무현시, 속도 무제한",
      "ADU 45km/h 현시, 45km/h 운전",
      "ADU 15km/h 현시, 지령운전(45km/h 이하)",
      "ADU 25km/h 현시, 25km/h 운전"
    ],
    "answer": 2,
    "explanation": "ATCCOS를 차단하면 수신기 전원이 차단되어 정지신호로 인식하므로 ADU에 15km/h가 현시되고, 지령운전으로 45km/h 이하로 운전해야 한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_030",
    "subject": "emu",
    "chapter": "7장 운전 보안장치",
    "question": "ATCCOS 차단 시 비상제동이 걸리지 않도록 구성되는 회로는?",
    "options": [
      "ATCEBR By-Pass 회로 (EMR1 여자)",
      "US By-Pass 회로",
      "SC By-Pass 회로",
      "ATCN By-Pass 회로"
    ],
    "answer": 0,
    "explanation": "ATCCOS 차단 취급 시 ATCEBR By-Pass 회로로 비상제동 회로 계전기인 EMR1 여자회로를 구성하기 때문에 비상제동은 걸리지 않는다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
   {
    "id": "train_7_1_001",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "RF-CBTC(무선통신 기반 열차제어) 시스템의 특징으로 교재에 명시된 내용은?",
    "options": [
      "고정폐색 방식(Fixed Block)을 사용하여 선로 효율을 높인다.",
      "지상 신호 설비에 의존하여 차상 신호를 구현한다.",
      "차상에서 직접 열차 간격을 조정하는 이동 폐색 방식(Moving Block)을 구현한다.",
      "궤도회로를 통해서만 열차 속도를 제어한다."
    ],
    "answer": 2,
    "explanation": "RF-CBTC 방식은 무선통신을 통해 열차 위치 정보를 주고받아 차상에서 직접 열차 간격을 조정하는 이동 폐색 방식(Moving Block)을 구현한 것이 특징이다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_002",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "ATO 시스템에서 정거장 정차 위치에 정밀 정차(±35cm 이내)를 수행하기 위해 지상의 정지 코드를 검지하는 장치는?",
    "options": [
      "TWC",
      "TRA",
      "HMI",
      "TCMS"
    ],
    "answer": 1,
    "explanation": "TRA(Trigger Receiver Assembly) 장치는 선로 위의 정지 코드를 검지하여 ATO 장치에 전달함으로써 정밀 정차를 지원한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_003",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "ATS 장치의 용어 중 '신호 지시가 높을 때는 여자 되어 정상 운행하고, 열차 속도가 높을 때는 무여자 하여 비상제동을 지시하는' 계전기는?",
    "options": [
      "ATSEBR",
      "AESR",
      "FDR",
      "BMR"
    ],
    "answer": 1,
    "explanation": "AESR(ATS 초과속도 계전기)은 지시속도가 높을 때 여자(정상) 되고, 열차 속도가 높을 때 무여자 되어 비상제동을 지시한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_004",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "무절연 궤도회로(AF) 방식의 특징으로 옳은 것은?",
    "options": [
      "레일과 레일 사이에 절연체를 두어 물리적으로 차단한다.",
      "차량 기지 내에서 단궤조 방식으로 주로 사용한다.",
      "주파수를 달리하는 궤도주파수를 이용하여 폐색구간을 구분한다.",
      "전차선 귀환 전류가 흐르지 않는다."
    ],
    "answer": 2,
    "explanation": "무절연 궤도회로(AF)는 물리적 절연 없이 주파수를 달리하는 궤도주파수(F1~F4 등)를 이용하여 폐색구간을 전기적으로 구분한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_005",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "신호 장치에 고장이 발생할 경우, 진행 신호 대신 정지 신호를 현시하는 등 가장 안전한 측으로 작동하도록 하는 기능은?",
    "options": [
      "Moving Block",
      "Feedback Control",
      "Fail-Safe",
      "System Integration"
    ],
    "answer": 2,
    "explanation": "Fail-Safe 기능은 장치 고장 시 '절대 안전' 또는 '고장 시에도 안전'이 보장되는 방향(예: 정지신호 현시)으로 작동하는 기능을 말한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_006",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "ATS 장치의 용어 중 'ATS에 의한 비상제동을 기억하는 계전기'는?",
    "options": [
      "NSR",
      "SDR",
      "BMR",
      "STR"
    ],
    "answer": 2,
    "explanation": "BMR(비상제동 기억 계전기)은 ATS 비상제동 동작 시 여자 되어 그 상태를 기억한다. (복귀 시 제동핸들 조작 필요)",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_007",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "ATC 장치의 2중계 구성에 대한 설명으로 옳은 것은?",
    "options": [
      "주 장치(ATC1)와 보조 장치(ATC2)가 직렬로 연결되어 있다.",
      "정상 운행 시 주 장치와 보조 장치가 동시에 제어 명령을 내린다.",
      "주 장치 고장 시 자동으로 보조 장치로 절체된다.",
      "보조 장치는 전원이 꺼진 상태로 대기한다."
    ],
    "answer": 2,
    "explanation": "ATC 시스템은 주 장치(ATC1)와 보조 장치(ATC2)가 병렬 모드로 구성되어, 주 장치 고장 시 자동으로 보조 장치로 절체된다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_008",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "ATS 용어 중 신호 현시가 없거나 절대 정지신호(R0) 수신 시 무여자 되어 비상제동을 동작시키는 계전기는?",
    "options": [
      "AESR",
      "NSR",
      "FDR",
      "SDR"
    ],
    "answer": 1,
    "explanation": "NSR(무신호 계전기)은 신호 현시(R1, 25, 45, Free)가 있으면 여자 하고, 신호가 없거나 R0 수신 시에는 무여자 되어 비상제동을 동작시킨다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_009",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "ATC/ATO 장치에서 지상 설비와 차상 설비 간의 정보 전송(양방향 통신)을 담당하는 장치는?",
    "options": [
      "TCMS",
      "HMI",
      "TWC",
      "ADU"
    ],
    "answer": 2,
    "explanation": "TWC(Train Wayside Communication) 장치는 ATC·ATO·TCMS와 지상 설비 장치 간의 정보 전송을 담당한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_010",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "ATS 용어 중 'FDR(고장 검지 계전기)'의 역할은?",
    "options": [
      "열차 속도 5km/h 이하를 검지한다.",
      "ATS 장치 고장을 검지하여 경고 및 비상제동을 동작시킨다.",
      "비상제동을 기억한다.",
      "초기 속도를 설정한다."
    ],
    "answer": 1,
    "explanation": "FDR은 ATS 장치 고장을 검지하는 계전기로, 고장 발생 시 경고 및 비상제동이 동작한다(진행신호 구간 제외).",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_011",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "ATC 장치의 용어 중 '신호 지시속도가 높을 때 여자 되어 정상 운행하고, 실제 속도가 높을 때 7단 제동을 동작시키는' 계전기는?",
    "options": [
      "ATCEBR",
      "US",
      "VZ",
      "ACK"
    ],
    "answer": 1,
    "explanation": "US(Under Speed, 저속도 계전기)는 지시속도가 실제속도보다 높을 때 여자 하여 정상 운행하고, 실제속도가 높을 때는 무여자 하여 7단 제동이 동작한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_012",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "궤도회로의 종류 중 '유절연 궤도회로(PF)'가 주로 사용되는 곳은?",
    "options": [
      "모든 본선 구간",
      "고속 철도 구간",
      "본선의 분기부와 차량 기지",
      "무선 통신 구간"
    ],
    "answer": 2,
    "explanation": "유절연 궤도회로(PF)는 현재 본선 선로에서는 많이 사용하지 않고, 본선의 분기부와 차량 기지 등에서 주로 사용한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_013",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "ATS 장치의 용어 중 'SDR(정지 검지 계전기)'이 검지하는 열차 속도 기준은?",
    "options": [
      "3km/h 이하",
      "5km/h 이하",
      "10km/h 이하",
      "15km/h 이하"
    ],
    "answer": 1,
    "explanation": "SDR은 열차 속도 5km/h 이하를 검지하는 계전기이다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_014",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "ATC 장치의 용어 중 'ATCEBR'의 상태에 대한 설명으로 옳은 것은?",
    "options": [
      "운행 중 항상 무여자 상태가 정상이다.",
      "운행 중 항상 여자 되어 있으며, 무여자 시 비상제동이 동작한다.",
      "속도 초과 시에만 여자 된다.",
      "정차 시에만 여자 된다."
    ],
    "answer": 1,
    "explanation": "ATCEBR(ATC 비상제동 계전기)은 운행 중 항상 여자 되어 있으며, 무여자 시 비상제동 회로를 차단하여 비상제동이 동작한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_1_015",
    "subject": "emu",
    "chapter": "7.1 운전 보안장치 개요",
    "question": "HMI(Human Machine Interface)의 역할로 가장 적절한 것은?",
    "options": [
      "지상 장치와 무선 통신을 수행한다.",
      "열차의 실제 속도를 발전시킨다.",
      "기관사와 제어 시스템을 연결하며 차내 신호 및 운전 정보를 화면에 표시한다.",
      "비상제동을 기계적으로 체결한다."
    ],
    "answer": 2,
    "explanation": "HMI는 기관사와 전기동차 제어 시스템의 연결 관계(Interface)를 담당하며, 차내신호 및 각종 운전 정보를 화면에 표시하고 터치로 제어할 수 있게 한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_001",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 지상자의 공진주파수 중 '절대정지(R0)' 신호의 주파수는?",
    "options": [
      "106KHz",
      "114KHz",
      "122KHz",
      "130KHz"
    ],
    "answer": 3,
    "explanation": "R0(절대정지) 신호의 공진주파수는 130KHz이다. (R1은 122KHz)",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_002",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 수신기부의 발진기(OSC)가 상시 발진하는 주파수는?",
    "options": [
      "68KHz",
      "78KHz",
      "98KHz",
      "106KHz"
    ],
    "answer": 1,
    "explanation": "발진기(OSC)는 차상자와 조합되어 상시 78KHz를 발진하며, BPF를 통해 출력 계전기(PR) 유지 전원으로 사용된다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_003",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 초기설정(제동핸들 투입) 시 설정되는 속도는?",
    "options": [
      "15km/h",
      "25km/h",
      "45km/h",
      "65km/h"
    ],
    "answer": 2,
    "explanation": "차량기지 등 지상자가 없는 곳에서 제동핸들을 투입하면 ATS는 45km/h로 초기설정 된다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_004",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 운전 논리부에서 파형 정형회로(Wave Sharping Circuit)의 역할은?",
    "options": [
      "지시속도 주파수를 생성한다.",
      "속도발전기의 교류 출력(정현파)을 구형파(Digital 신호)로 변환한다.",
      "비상제동 신호를 출력한다.",
      "경보음을 발생시킨다."
    ],
    "answer": 1,
    "explanation": "파형 정형회로는 속도발전기의 정현파 교류 출력을 속도비교기가 인식할 수 있는 구형파(Digital 신호)로 변환한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_005",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 주의(Y) 신호 구간에서 속도 초과 시 비상제동이 체결되지 않도록 하기 위한 조치(확인제동) 제한 시간은?",
    "options": [
      "1초 이내",
      "3초 이내",
      "5초 이내",
      "10초 이내"
    ],
    "answer": 1,
    "explanation": "속도 초과 시 3초 이내에 확인제동(제동핸들 4단 이상)을 취급하지 않으면 3초 후 즉시 비상제동이 체결된다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_006",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 허용정지(R1) 구간을 넘어서 운행해야 할 때 취급하는 스위치는?",
    "options": [
      "ASOS",
      "ATSCOS",
      "15km/h 스위치",
      "Reset 스위치"
    ],
    "answer": 2,
    "explanation": "R1 현시 구간을 넘어서 운행하거나 위반 진입한 경우, 15km/h 이하로 주의 운전하기 위해 15km/h 스위치를 취급한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_007",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 절대정지(R0) 구간을 ASOS 취급 없이 위반 진입했을 때의 현상은?",
    "options": [
      "경보음만 울린다.",
      "15km/h로 속도가 제한된다.",
      "Alarm Bell이 울리며 즉시 비상제동이 체결된다.",
      "ATS 전원이 차단된다."
    ],
    "answer": 2,
    "explanation": "R0 구간 위반 진입 시에는 NSR1 무여자로 인해 AEmR이 무여자 되고, 이에 따라 ATSEBR이 여자 되어 즉시 비상제동이 체결된다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_008",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATSN2(차단기)를 차단했을 때의 현상으로 옳은 것은?",
    "options": [
      "ATS 비상제동이 체결된다.",
      "ATS 비상제동이 완해 되고, 경보음과 표시등 전원이 차단된다.",
      "ATS 장치 전체 전원이 차단된다.",
      "45km/h 속도 제한이 설정된다."
    ],
    "answer": 1,
    "explanation": "ATSN2를 차단하면 AEmR(b) 조건으로 공급되던 ATSEBR 여자 전원이 차단되어 비상제동이 풀리고(완해), 경보음 및 표시등 전원도 차단된다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_009",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATSCOS(ATS 차단 스위치)를 차단 취급해야 하는 경우가 아닌 것은?",
    "options": [
      "ATSN1 차단 후 복귀 불능 시",
      "ATS 차상 장치 고장 시",
      "대용 폐색 방식 시행 시",
      "정지신호(R0) 구간을 정상적으로 통과할 때"
    ],
    "answer": 3,
    "explanation": "정지신호(R0) 구간을 관제 승인 후 통과할 때는 ASOS를 취급한다. ATSCOS는 고장이나 대용폐색 등 비상시에만 사용한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_010",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ASOS(특수운전 스위치)를 취급했을 때 설정되는 속도 패턴은?",
    "options": [
      "15km/h",
      "25km/h",
      "45km/h",
      "속도 무제한"
    ],
    "answer": 2,
    "explanation": "ASOS를 취급하면 '45등'이 점등되고 45km/h 패턴이 설정된다. (R0 구간을 45km/h 이하로 통과)",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_011",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 수신기부의 'MBR(기억차단 계전기)'의 역할은?",
    "options": [
      "초기 속도를 설정한다.",
      "15KS 또는 ASOS 취급 시 이전의 신호 기억을 차단한다.",
      "비상제동을 기억한다.",
      "3초 지연 시간을 제공한다."
    ],
    "answer": 1,
    "explanation": "MBR은 확인운전 스위치(15KS)나 특수운전 스위치(ASOS) 취급 시 이전의 신호 기억을 차단하여 새로운 설정을 가능하게 한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_012",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 비상제동 체결 후 이를 완해(복귀)하기 위한 제동핸들 취급 방법은?",
    "options": [
      "완해 위치로 이동",
      "비상 위치로 이동 후 즉시 완해",
      "비상 위치로 이동하여 정차 후 7단 위치로 이동",
      "1단 위치로 이동"
    ],
    "answer": 2,
    "explanation": "ATS 비상제동 시 BMR(기억계전기)이 여자 되어 있으므로, 열차 정차 후 제동핸들을 비상 위치로 하여 BMR을 무여자 시킨 뒤 7단 위치로 이동해야 완해된다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_013",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 15km/h 스위치를 취급하면 점등되는 표시등과 울리는 경보음은?",
    "options": [
      "R0등, Alarm Bell",
      "45등, Alarm Bell",
      "15등, Chime Bell",
      "ASO등, Chime Bell"
    ],
    "answer": 2,
    "explanation": "15km/h 스위치를 취급하여 설정되면 속도계 내 '15등'이 점등되고 'Chime Bell'이 울린다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_014",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 장치의 대역여과기(BPF)의 역할은?",
    "options": [
      "발진기 주파수를 생성한다.",
      "차상자에서 검지된 신호 주파수만 통과시켜 해당 출력계전기(PR)를 여자 시킨다.",
      "속도 주파수를 전압으로 변환한다.",
      "전원을 공급한다."
    ],
    "answer": 1,
    "explanation": "BPF(Band Pass Filter)는 차상자에서 검지된 특정 신호 주파수(예: 98, 106KHz 등)만 통과시켜 해당 PR을 여자 시킨다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_015",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 장치에서 'AESR(초과속도 계전기)'이 무여자 되는 조건은?",
    "options": [
      "지시속도(Vp) > 실제속도(Vt)",
      "지시속도(Vp) < 실제속도(Vt)",
      "제동핸들 완해 위치",
      "정차 중일 때"
    ],
    "answer": 1,
    "explanation": "속도비교기에서 지시속도(Vp)보다 실제속도(Vt)가 높으면(초과하면) 출력이 OFF 되어 AESR이 무여자 된다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_016",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 수신기부의 'STR(출발계전기)'의 기능은?",
    "options": [
      "열차 출발 시 경보를 울린다.",
      "제동핸들 투입 시 45PR을 여자 시켜 초기 속도(45km/h)를 설정한다.",
      "정지 신호를 검지한다.",
      "비상제동을 체결한다."
    ],
    "answer": 1,
    "explanation": "STR은 제동핸들 투입 시 일시적으로 여자 되어 45PR을 여자 시킴으로써 ATS 초기설정(45km/h)을 수행한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_017",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 지상자와 차상자의 설치 허용 오차 범위(상하 편차)는?",
    "options": [
      "50 ~ 100mm",
      "90 ~ 260mm",
      "150 ~ 300mm",
      "200 ~ 400mm"
    ],
    "answer": 1,
    "explanation": "차상자와 지상자의 상하 편차 허용 범위는 90mm ~ 260mm 이하이다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_018",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 신호 현시 중 '경계(YY)' 신호의 지시속도는?",
    "options": [
      "15km/h",
      "25km/h",
      "45km/h",
      "65km/h"
    ],
    "answer": 1,
    "explanation": "경계(YY) 신호의 지시속도는 25km/h이다. (주의 Y는 45km/h)",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_019",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 차상장치의 동작 보증 온도 범위는?",
    "options": [
      "0℃ ~ +40℃",
      "-10℃ ~ +50℃",
      "-25℃ ~ +40℃",
      "-40℃ ~ +60℃"
    ],
    "answer": 2,
    "explanation": "ATS 차상장치의 동작 보증 온도는 -25℃ ~ +40℃이다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_020",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 수신기부의 '3TR(3초 시한계전기)'의 역할은?",
    "options": [
      "3초마다 경보를 울린다.",
      "속도 초과 시 3초 동안 비상제동이 동작하지 않도록 지연시킨다.",
      "3초 후 전원을 차단한다.",
      "3초 간격으로 지상 신호를 스캔한다."
    ],
    "answer": 1,
    "explanation": "3TR은 속도 초과 시 즉시 비상제동이 걸리지 않도록 3초간의 여유(확인제동 시간)를 부여하여 AEmR 여자 회로를 유지한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_021",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 'ATSN1' 차단기가 차단되었을 때의 현상은?",
    "options": [
      "ATS 비상제동이 완해된다.",
      "Alarm Bell이 울리며 즉시 비상제동이 체결된다.",
      "아무런 변화가 없다.",
      "15km/h 제한 속도가 설정된다."
    ],
    "answer": 1,
    "explanation": "ATSN1(전원 공급 NFB)이 차단되면 수신기부 및 논리부 전원이 차단되어, R0등이 잠시 점등되고 경보와 함께 즉시 비상제동이 동작한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_022",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 45PR이 여자 되어 초기설정(45km/h)이 완료된 후, STR(출발계전기)이 무여자 되어도 45PR이 계속 여자 상태를 유지하는 이유는?",
    "options": [
      "STR이 기계적 유지형 계전기이므로",
      "발진기(OSC)의 78KHz 출력이 BPF(Ref)를 통해 45PR 자기 접점으로 공급되므로",
      "3TR이 전원을 공급하므로",
      "MBR이 여자 되므로"
    ],
    "answer": 1,
    "explanation": "45PR이 한번 여자 되면 발진기의 기본 주파수(78KHz)가 BPF(Ref)를 통해 45PR 자기 유지 접점으로 공급되어 여자 상태를 유지한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_023",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 진행(G) 신호 수신 시의 동작 과정으로 옳은 것은?",
    "options": [
      "98KHz 수신 → FPR 여자 → FSR 여자 → AESRR 여자",
      "106KHz 수신 → 45PR 여자 → 45SR 여자",
      "114KHz 수신 → 25PR 여자 → 25SR 여자",
      "122KHz 수신 → OPR 여자 → OSR 여자"
    ],
    "answer": 0,
    "explanation": "진행(G) 신호는 98KHz이며, 이를 수신하면 FPR이 여자 되고, FSR과 AESRR이 여자 되어 속도 제한 없이 운행 가능하다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_024",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATS 장치에서 'AEmR'이 무여자 될 때 발생하는 결과는?",
    "options": [
      "ATSEBR이 여자 되어 비상제동이 체결된다.",
      "경보음만 울린다.",
      "45km/h 패턴이 생성된다.",
      "ATS 전원이 차단된다."
    ],
    "answer": 0,
    "explanation": "AEmR(비상제동용 계전기)이 무여자 되면 그 b접점에 의해 ATSEBR이 여자 되고, ATSEBR은 비상제동 루프를 차단하여 비상제동을 체결한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "train_7_2_025",
    "subject": "emu",
    "chapter": "7.2 ATS 장치",
    "question": "ATSCOS를 차단 취급했을 때의 회로 동작으로 옳은 것은?",
    "options": [
      "비상제동 루프 회로를 차단한다.",
      "ATSEBR 여자 회로를 구성한다.",
      "ATS 비상 조건(AEmR 접점 등)을 By-Pass 하여 비상제동을 완해한다.",
      "경보음을 강제로 발생시킨다."
    ],
    "answer": 2,
    "explanation": "ATSCOS를 차단 위치로 하면 ATS 비상 조건(ATSEBR 여자 회로 등)을 우회(By-Pass)하는 병렬회로를 구성하여 비상제동이 걸리지 않게 한다.",
    "source": "A_전기동차_7장_운전보안장치"
  },
   {
    "id": "license_core_3_7_195",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATS 장치고장을 검지하는 계전기로 맞는 것은?",
    "options": [
      "NSR",
      "SDR",
      "ATSEBR",
      "FDR"
    ],
    "answer": 3,
    "explanation": "FDR(고장 검지 계전기)은 ATS 장치 고장을 검지하는 계전기로, ATS 제한속도 감시 구간을 운행할 때 ATS 고장이 발생하면 경고 및 비상제동이 동작한다.[1]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_196",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "ATC함 내의 비상제동 계전기로 운행 중 항상 여자되어 있는 기기는?",
    "options": [
      "ATCEBR",
      "AESR",
      "NSR",
      "BMR"
    ],
    "answer": 0,
    "explanation": "ATCEBR(ATC 비상제동 계전기)은 ATC 함 내의 비상제동 계전기로 운행 중 항상 여자 되어 있으며, 무여자 시 비상제동 회로를 차단하여 ATC 비상제동이 동작한다.[2]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_197",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATP/ATO 장치의 특징으로 틀린 설명은?",
    "options": [
      "거리중심 제어",
      "상호 안전거리 확보",
      "고밀도 운전 가능",
      "다단계 수동 감속"
    ],
    "answer": 3,
    "explanation": "ATP/ATO 장치는 거리중심 제어(Distance to go), 상호 안전거리 확보, 고밀도 운전 가능, 자동 연속 감속 등의 특징을 가진다. '다단계 수동 감속'은 ATS/ATC 장치의 제동 방식이다.[3]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_198",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATO 시스템의 정차 목표로 가장 맞는 것은?",
    "options": [
      "±30cm 이내의 범위",
      "±35cm 이내의 범위",
      "±40cm 이내의 범위",
      "±45cm 이내의 범위"
    ],
    "answer": 1,
    "explanation": "ATO 시스템의 정차 목표는 ±35cm 이내의 범위에 열차를 자동으로 정차시키는 것이다.[4]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_199",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 분기기가 설치된 선로이거나 운행량이 적은 선로에 설치하는 궤도회로로 맞는 것은?",
    "options": [
      "고전압 임펄스 궤도회로",
      "정류 궤도회로",
      "AF 궤도회로",
      "PF 궤도회로"
    ],
    "answer": 3,
    "explanation": "PF(유절연) 궤도회로는 현재 본선 선로에서는 많이 사용하지 않고, 본선의 분기부와 차량 기지 등에서 사용하고 있다.[5]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_200",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "“절대 안전” 또는 “장애 또는 고장 시에도 안전”이 보장되는 기능, 즉 제반 운전보안장치에 고장 이 발생할 경우 가장 안전한 측으로 작동하도록 하는 기능을 말하는 것은?",
    "options": [
      "Fail-Safe",
      "Fool-Safe",
      "Fool-Proof",
      "Fail-Proof"
    ],
    "answer": 0,
    "explanation": "신호 장치에 고장이 발생하는 경우에는 진행신호가 아닌 정지신호를 현시하는 등, 고장 시 가장 안전한 측으로 작동하도록 하는 기능을 Fail-Safe 기능이라고 한다.[6]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_201",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATS 차상장치의 구성요소로 틀린 것은?",
    "options": [
      "ATS Box",
      "지상자",
      "차상자",
      "속도발전기"
    ],
    "answer": 1,
    "explanation": "ATS 차상장치는 차상자, 수신기부, 운전논리부, 계전기논리부, 속도발전기 등으로 구성된다. 지상자는 선로 도상에 설비된 지상장치에 해당한다.[7]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_202",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATS 동작 시스템에 대한 내용이다. 빈칸에 들어갈 말로 맞는 것은? (신호지시에 의한 지시속도 주파수가 실제속도 주파수보다 클 때는 ... 실제속도 주파수가 클 경우에는 속도비교기의 출력이 [ ] 되어 AESR이 [ ] 하므로 ... 이때 [ ] 내에 확인제동 취급을 하지 않을 때는 비상제동을 체결하고...)",
    "options": [
      "OFF – 무여자 – 3초",
      "ON – 여자 – 5초",
      "OFF – 여자 – 5초",
      "ON – 여자 – 3초"
    ],
    "answer": 0,
    "explanation": "열차속도가 신호속도를 초과할 때는 속도비교기 출력이 OFF 되어 AESR은 무여자 하게 되므로 경보 및 표시등을 점등하고, 주의신호와 경계신호인 경우에는 3초 후에 비상제동이 동작하게 된다.[8]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_203",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATS장치의 정격으로 틀린 것은?",
    "options": [
      "최대열차 감응속도 : 130km/h",
      "자동 비상제동 작용시간 : 3초",
      "차상자와 지상자의 상하편차 : 90mm~260mm",
      "차상자와 지상자의 좌우편차 : 좌측 및 우측 60mm 이하"
    ],
    "answer": 3,
    "explanation": "차상자와 지상자의 좌우 편차는 좌측 및 우측 70mm 이하이다.[9]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_204",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATS장치의 동작보증온도로 맞는 것은?",
    "options": [
      "-25℃~+35℃",
      "-25℃~+40℃",
      "-35℃~+40℃",
      "-25℃~+45℃"
    ],
    "answer": 1,
    "explanation": "ATS 차상장치의 동작 보증 온도는 -25℃ ~ +40℃이다.[9]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_205",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 신호현시에 따라 공진주파수(KHz)로 틀린 것은?",
    "options": [
      "진행 – 98",
      "감속 – 106",
      "정지(R1) – 122",
      "절연구간 검지 – 68"
    ],
    "answer": 1,
    "explanation": "감속(YG) 또는 진행(G)은 98KHz이며, 106KHz는 주의(Y) 신호의 공진주파수이다.[10][11]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_206",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATS 차상장치 수신기부에 대한 설명으로 틀린 것은?",
    "options": [
      "발진기 : 차상자와 조합되어 있고 상시 68KHz를 발진한다.",
      "STR : 제동핸들 투입 시 45PR을 여자 시켜 45km/h를 설정하여 준다.",
      "MBR : 확인운전 스위치, 특수운전 스위치 취급 시 이전 기억을 차단하는 역할을 한다.",
      "3TR : 열차속도가 주의신호, 경계신호의 제한속도 초과 시, 3초 동안 비상제동이 동작하지 않도록 한다."
    ],
    "answer": 0,
    "explanation": "발진기(OSC)는 차상자와 조합되어 있고, 상시 78KHz를 발진한다.[9]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_207",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "차축 속도발전기와 ATC 장치의 단선 및 고장을 검지하는 기기로 맞는 것은?",
    "options": [
      "SDR",
      "NSR",
      "AESR",
      "FDR"
    ],
    "answer": 3,
    "explanation": "FDR(Fail Disconect Detector)은 차축 속도발전기와 ATS 장치의 단선 및 고장을 검지하는 기기이다.[12]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_208",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 속도발전기의 설치위치로 맞는 것은?",
    "options": [
      "M’차의 전 대차 제2차륜 또는 제4차륜의 차축",
      "M차의 전 대차 제2차륜 또는 제4차륜의 차축",
      "TC차의 전 대차 제2차륜 또는 제4차륜의 차축",
      "T1차의 전 대차 제2차륜 또는 제4차륜의 차축"
    ],
    "answer": 2,
    "explanation": "속도발전기는 전기동차 TC 차량의 전 대차 제2차륜 또는 제4차륜의 차축에 설치되어 있다.[12]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_209",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATS 전원공급회로에 대한 설명으로 맞는 것은?",
    "options": [
      "관련 차단기는 ATSN1, ATSN2, ATSN3로 구성되어 있다.",
      "ATS ON등은 전원공급의 이상 유무를 확인하는 등이다.",
      "ATS ON등은 402선에서 ATSN2와 ATSN3이 ON상태이면 점등된다.",
      "ATS OFF등은 ATSN3가 차단되면 연동에 의하여 ATSN2R이 여자 되므로 점등된다."
    ],
    "answer": 1,
    "explanation": "ATS ON등은 전원공급의 이상 유무를 확인하는 등으로, 402선에서 ATSN2와 ATSN1이 ON 상태이면 점등된다. (ATSN3는 교재에 명시되지 않음)[13]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_210",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "ATS 속도계 표시등 회로에 대한 설명으로 틀린 것은?",
    "options": [
      "절대정지신호 위반 진입 시는 R1등이 점등된다.",
      "제한속도 초과 시는 25, 45등이 점등되면서 경보를 울려 기관사가 인식하고 조치하도록 한다.",
      "15KS를 취급하면 15등이 점등된다.",
      "ASOS를 취급하면 45등이 점등된다."
    ],
    "answer": 0,
    "explanation": "절대정지신호(R0) 위반 진입 시는 R0등이 점등된다.[14]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_211",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "ATS 속도계 표시등 및 경보회로에 대한 설명으로 틀린 것은?",
    "options": [
      "ATS ON등은 402선에서 ATSN2와 ATSN1 차단기가 모두 ON 상태이면 ATS ON등에 점등된다.",
      "15km/h가 설정되면 15등이 점등되고 Chime Bell이 울린다.",
      "ASOS를 취급하면 ASO등이 점등된다.",
      "ATSN1이 차단되면 ATS OFF등이 점등된다."
    ],
    "answer": 3,
    "explanation": "ATSN2가 차단되면 ATS OFF등이 점등된다. (ATSN1 차단 시에는 비상제동 체결 및 경보 발생)[15][16]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_212",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "ATS 초기설정 회로에 대한 설명으로 틀린 것은?",
    "options": [
      "ATS는 45km/h로 설정이 완료되어 다음 신호를 수신할 때까지 유지된다.",
      "제동핸들 투입 시 순간적으로 속도계 내 45등이 점등된다.",
      "AESR이 여자 되면 P100B선의 계전기 논리부에서 AESRR1, 2와 AEmR이 여자된다.",
      "45PR 여자로 45SR 및 NSR1, NSRR1이 여자 한다."
    ],
    "answer": 1,
    "explanation": "제동핸들 투입 시 순간적으로 속도계 내 R0등이 점등되면서 Alarm Bell이 울린다.[16]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_213",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 주의신호 현시구간 운전에 대한 설명으로 틀린 것은?",
    "options": [
      "45km/h 이하로 운전해야 한다.",
      "주의신호 현시시 지상자에서 106KHz를 검지한다.",
      "속도초과 시 5초 이내에 제동핸들을 4단 이상 취급해야 한다.",
      "속도초과로 제동핸들을 4단 이상 취급하지 않으면 3초 후 즉시 비상제동이 체결된다."
    ],
    "answer": 2,
    "explanation": "속도 초과 시 3초 이내에 제동핸들을 4단 이상 취급해야 한다.[17]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_214",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "속도초과 시 ATS 회로의 구성에 대한 설명으로 틀린 것은?",
    "options": [
      "속도비교기에서 AESR이 무여자 하고, AESRR1, 2가 무여자 한다.",
      "AESRR1(b)에 의하여 Alarm Bell이 울린다.",
      "AESRR2(b)에 의하여 속도계 내에 45등 표시등이 점등된다.",
      "3TR이 3초 동안 여자하여 AEmR 여자회로를 차단한다."
    ],
    "answer": 3,
    "explanation": "3TR이 3초 동안 여자 하여 AEmR 여자회로를 '유지'한다.[18]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_215",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "허용정지 구간 위반 진입 시 회로 구성에 대한 설명으로 틀린 것은?",
    "options": [
      "122KHz를 수신하여 OPR 여자로 OSR, NSR1, NSRR1이 여자 한다.",
      "OSR은 여자 하나 운전논리부에 신호입력이 없으므로 Vp는 발생하지 않고 AESR은 강제로 무여자 된다.",
      "AESR 무여자 시 AESRR1, 2가 무여자 되고 AEmR이 무여자 하므로 ATSEBR 여자로 비상제동이 체결된다.",
      "Alarm Bell이 울리고 운전실 속도계 내의 “R0등”이 점등된다."
    ],
    "answer": 3,
    "explanation": "허용정지(R1) 구간 위반 진입 시 Alarm Bell이 울리고 운전실 속도계 내의 “R1등”이 점등된다.[19]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_216",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "절대정지 구간 위반 진입 시 회로구성에 대한 설명으로 틀린 것은?",
    "options": [
      "NSR1 무여자로 AEmR이 무여자 되고 ATSEBR이 여자되어 즉시 비상제동이 체결된다.",
      "Vp(기본패턴 주파수)가 발생하지 않아 AESR이 무여자 되고 AESRR1, 2도 무여자 된다.",
      "ALarm Bell이 울리며 속도계 내에 “RO등”이 점등된다.",
      "비상제동에 의하여 열차가 정지하면 경고벨은 안울린다."
    ],
    "answer": 3,
    "explanation": "비상제동에 의하여 열차가 정지하여도 경고 벨 및 표시등은 계속된다(R0 위반 시).[20]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_217",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ASOS를 취급해야하는 경우로 적절하지 않은 것은?",
    "options": [
      "본선 운행 중 허용정지 신호가 현시된 경우",
      "수신호 및 유도신호에 따라 운전할 경우",
      "입환신호기의 정지신호 현시구간을 넘어서 운전할 필요 있을 경우",
      "상치신호기 지상자가 설치된 입환표지(입환신호기 포함)의 개통구간을 운전할 경우"
    ],
    "answer": 0,
    "explanation": "허용정지 신호(R1)가 현시된 구간을 넘어서 운행해야 할 때는 15km/h 스위치를 취급한다. (ASOS는 절대정지 R0 등에서 사용)[18][21]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_218",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "관제의 승인을 받지 않은 상태에서 ASOS를 취급 후 운전방법으로 가장 적합한 것은?",
    "options": [
      "짧은 기적을 수시로 울리면서 15km/h 이하 주의운전",
      "기적을 길게 울리면서 15km/h 이하 주의운전",
      "짧은 기적을 수시로 울리면서 45km/h 이하 주의운전",
      "기적을 길게 울리면서 45km/h 이하 주의운전"
    ],
    "answer": 0,
    "explanation": "관제의 승인을 받을 수 없는 경우에는 ASOS를 취급한 후 짧은 기적을 수시로 울리면서, 일어서서 15km/h 이하의 속도로 주의 운전할 수 있다.[22]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_219",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATS 차단기에 대한 설명으로 틀린 것은?",
    "options": [
      "ATSN1 작용 : 전원 공급부, 계전기부",
      "ATSN1 차단 시 : ATS 비상제동 불능, ATS off등 점등",
      "ATSN2 작용 : ATS 비상제동 완해 기능, 표시부",
      "ATSN2 복귀불능 시 : 신호확인 하면서 주의운전"
    ],
    "answer": 1,
    "explanation": "ATSN1 차단 시는 Alarm Bell이 울리고, 속도계 내 R0등이 잠시 점등되었다가 소등되며 비상제동이 동작한다. (ATS OFF등 점등은 ATSN2 차단 시)[22]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_220",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATC 주요제원으로 틀린 것은?",
    "options": [
      "입력 전원 : DC100V(자체 사용 전원 : DC32V, DC15V)",
      "지시속도 수신 주파수 : 990Hz",
      "실제속도 검지 주파수(Hz) : 1km/h당 48Hz",
      "감속도 확인 : 3.5km/h/sec"
    ],
    "answer": 3,
    "explanation": "ATC 감속도 확인 기준은 2.4km/h/sec이다.[23]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_221",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATC 지시속도 별 코드주파수로 틀린 것은?",
    "options": [
      "YCR – 16.8Hz",
      "80 – 13.6Hz",
      "40 – 6.6Hz",
      "25(구내운전) - 5.0Hz"
    ],
    "answer": 3,
    "explanation": "25(구내 운전)의 지시속도 코드 주파수는 3.2Hz이다. (5.0Hz는 25 본선 운전)[23]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_222",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 궤도회로 주파수로 틀린 것은?",
    "options": [
      "F1 : 1,590Hz",
      "F2 : 2,780Hz",
      "F3 : 3,870Hz",
      "F4 : 5,190Hz"
    ],
    "answer": 1,
    "explanation": "궤도회로 주파수 F2는 2,670Hz이다.[24]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_223",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATC 전원공급 회로차단기로 맞는 것은?",
    "options": [
      "ATCN",
      "HCRN",
      "ATCPSN",
      "BatN"
    ],
    "answer": 2,
    "explanation": "ATCPSN(N.F.B for ATC Power Supply)은 ATC 전원 공급 회로 차단기이다.[24]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_224",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATC 차상장치 구성요소로 틀린 것은?",
    "options": [
      "Pick Up Coil",
      "속도비교기",
      "ATC Rack",
      "차내신호기"
    ],
    "answer": 1,
    "explanation": "ATC 차상장치의 주요 기기는 Pick Up Coil, 속도발전기, ATC RACK, ADU(차내신호기) 등이다. 속도비교기는 ATC Rack 내부에 포함되는 구성품이다.[25][26]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_225",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "ATC 차상장치 구성요소 중 Pick Up Coil이 AF 궤도회로 및 루프코일로부터 코드화된 일정한 주파수의 지시속도를 수신하여 ATC 장치의 수신기로 보내준다. 이때 주파수 값은?",
    "options": [
      "690Hz",
      "790Hz",
      "890Hz",
      "990Hz"
    ],
    "answer": 3,
    "explanation": "Pick Up Coil은 코드화된 990Hz의 지시속도를 수신한다.[27]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_226",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "ATC 전원공급장치는 직류 인통선인 103선에서 몇 V의 전압을 입력받는가?",
    "options": [
      "DC 100V",
      "DC 220V",
      "DC 380V",
      "DC 440V"
    ],
    "answer": 0,
    "explanation": "ATC 전원공급 장치는 직류 인통선인 103선에서 DC100V를 입력받는다.[28]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_227",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATC장치의 기능으로 볼 수 없는 것은?",
    "options": [
      "지시속도 수신 기능",
      "견인력 보장 기능",
      "초과속도 검지 기능",
      "구내운전 기능"
    ],
    "answer": 1,
    "explanation": "ATC 장치의 기능에는 제동력 보장 기능(감속도 확인)이 있으나, 견인력 보장 기능은 명시되어 있지 않다.[29]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_228",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "ATC 장치의 기능 중 실제속도 검지 기능에 관하여 열차가 시속 1km/h로 진행하면 발생하는 주 파수 값은?",
    "options": [
      "28Hz",
      "38Hz",
      "48Hz",
      "58Hz"
    ],
    "answer": 2,
    "explanation": "실제속도 검지 주파수는 열차 속도 1km/h당 48Hz 발생한다.[23]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_229",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "ATC 장치에서 열차가 지시된 속도를 초과하였을 경우 3초 이내 감속도가 최소 몇 km/h/s 이상 확보되어야 하는가?",
    "options": [
      "1.4km/h/s 이상",
      "1.8km/h/s 이상",
      "2.4km/h/s 이상",
      "3.5km/h/s 이상"
    ],
    "answer": 2,
    "explanation": "지시속도를 초과했을 경우 3초 이내에 감속도가 최소 2.4km/h/s 이상 확보되어야 한다.[29]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_230",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 차내신호기(ADU) 표시기능에 대한 설명으로 틀린 것은?",
    "options": [
      "YARD등 : 구내운전 구간임을 표시한다.",
      "STOP등 : 본선운행 중 정지신호를 수신하였을 때 정차해야 한다는 조건으로 점등되며 열차가 정차하여도 점등된다.",
      "Alarm 경보 : 지시속도 초과 시 즉시 경보음이 울리며 확인제동을 취급하면 멈춘다.",
      "8초 Alarm 경보 : 정지신호인 15km/h가 ADU에 현시되면 동작한다."
    ],
    "answer": 1,
    "explanation": "STOP등은 정차해야 한다는 조건으로 점등되며 열차가 정차하면 소등된다.[30]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_231",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "열차의 정지 상태를 검지하는 계전기로, 실제속도가 5km/h 이하 시 여자하며, 기동 시 ATCEBR 을 여자시켜 주고 “0”모드, 즉 정지신호 시 확인운전 회로를 구성하는 기기는?",
    "options": [
      "US",
      "ACK",
      "VZ",
      "BA"
    ],
    "answer": 2,
    "explanation": "VZ(Zero Velocity Relay) 계전기는 열차의 정지 상태(5km/h 이하)를 검지하고 ATCEBR을 여자 시켜 준다.[31]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_232",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "열차가 지시속도를 초과하여 ATC 상용 7단 제동이 동작하였을 때 초당 감속도를 측정하여 2.4km/h/s 이상 확보되면 감속측정기에 의해 여자되는 것은?",
    "options": [
      "BA",
      "VZ",
      "US",
      "ACK"
    ],
    "answer": 0,
    "explanation": "BA(Brake Assurance Relay)는 감속도가 2.4km/h/s 이상 확보되면 여자 되어 ATCEBR이 무여자 되는 것을 방지한다.[32]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_233",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "본선에서 운행 중 정지신호(지시속도 없음)인 경우는 속도초과로 ATC 상용 7단 제동이 작용하여 열차가 정차할 때 동작되는 기기는?",
    "options": [
      "SC",
      "SS",
      "US",
      "BA"
    ],
    "answer": 1,
    "explanation": "SS(Stop and Proceed) 계전기는 본선에서 정지신호로 정차하면 여자 되어 확인 운전 회로를 구성한다.[33]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_234",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "본선운전 시 속도코드 25, 40, 60, 70, 80, 100KPH Relay의 주파수에 따라 여자 시 틀린 것은?",
    "options": [
      "25KPH Relay – 5.0Hz 수신 시 여자",
      "60KPH Relay – 8.6Hz 수신 시 여자",
      "80KPH Relay – 10.8Hz 수신 시 여자",
      "100KPH Relay – 20.4Hz 수신 시 여자"
    ],
    "answer": 2,
    "explanation": "80KPH Relay는 13.6Hz 수신 시 여자 된다. (10.8Hz는 70KPH Relay)[24]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_235",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "운전취급역(정거장) Y선, 인상선의 운전취급 시 제한속도로 맞는 것은?",
    "options": [
      "45km/h 이하",
      "35km/h 이하",
      "25km/h 이하",
      "15km/h 이하"
    ],
    "answer": 2,
    "explanation": "정거장 구내나 차량기지 구내에서는 25km/h 이하로 저속 운전을 할 수 있도록 ATC 장치에 구내운전 속도를 강제 설정한다.[29]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_236",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATCN, ATCPSN에 대한 설명으로 틀린 것은?",
    "options": [
      "ATCN은 5A의 대용량이기 떄문에 차단의 염려는 적다.",
      "ATCN은 103선에서 ATC장치로 전원을 공급하는 Main NFB이다.",
      "ATCPSN은 ATC 장치 내 전원공급장치로 103선의 DC 100V를 공급하는 차단기이다.",
      "ATCPSN 차단 후 복귀불능 시 구원열차를 요구해야 한다."
    ],
    "answer": 3,
    "explanation": "ATCPSN 및 ATCN 차단 후 복귀 불능 시에는 ATCCOS를 차단하고 관제 승인을 받아 지령 운전한다. (즉시 구원열차 요구 아님)[34]",
    "source": "A_전기동차_7장_운전보안장치"
  },
  {
    "id": "license_core_3_7_237",
    "subject": "emu",
    "chapter": "7장 운전보안장치",
    "question": "다음 중 ATCCOS 차단하는 경우로 틀린 것은?",
    "options": [
      "ATCPSN 및 ATCN 차단 후 복귀불능 시",
      "ATC 차상장치 고장 시",
      "상용폐색방식 시행 시",
      "구원열차 운전 시"
    ],
    "answer": 2,
    "explanation": "ATCCOS는 대용 폐색 방식 시행 시 차단한다. (상용폐색방식은 정상적인 신호 운전 방식이므로 차단하지 않음)[34]",
    "source": "A_전기동차_7장_운전보안장치"
  }
];
