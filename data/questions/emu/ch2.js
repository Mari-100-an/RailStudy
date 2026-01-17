/**
 * 전기동차 구조 및 기능 - 2단원 문제
 */
var QUESTIONS_EMU_CH2 = [
    {
    "id": "train_2_001",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "전기동차의 저압 제어 전원인 축전지(Battery)의 사양으로 옳은 것은?",
    "options": [
      "Ni-Cd 축전지는 DC 100V이다.",
      "Li-Po 축전지는 DC 84V이다.",
      "Ni-Cd 축전지는 DC 84V, Li-Po 축전지는 DC 92.5V이다.",
      "모든 축전지는 DC 24V를 사용한다."
    ],
    "answer": 2,
    "explanation": "전기동차의 Bat 전압은 Ni-Cd(니켈-카드뮴)의 경우 DC 1.2V × 70 Cell로 DC 84V이며, Li-Po(리튬 폴리머) Bat 전압은 DC 3.7V × 25 Cell로 DC 92.5V이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_002",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "전기동차 회로 구분 중 '특고압 회로'의 정의로 옳은 것은?",
    "options": [
      "SIV 및 SIV 출력 전원으로 구동되는 고압 보조 장치 회로",
      "Pan에서 C/I 전까지의 회로",
      "C/I에서 TM까지의 회로",
      "축전지 전원과 SIV 출력 DC 100V를 사용하는 회로"
    ],
    "answer": 1,
    "explanation": "Pan에서 C/I 전까지를 특고압 회로라 하며, 회로 내 있는 각종 장치들을 특고압 장치라 하고, 특고압 장치를 제어하는 저압 제어회로를 특고압 제어회로라 한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_003",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 아크(Arc)에 의해 접점이 용접되어 정상적인 동작을 할 수 없는 상태를 일컫는 용어는?",
    "options": [
      "용단",
      "용착",
      "소호",
      "단락"
    ],
    "answer": 1,
    "explanation": "용착이란 Arc에 의해 발생하는 높은 열과 불꽃에 의해 입력 측과 부하 측을 연결하는 접점이 용접되어 정상적인 동작을 할 수 없는 상태를 말한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_004",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "계전기(Relay)의 접점 중, 코일에 전류가 흐를 때(여자 시) 회로를 연결하는 접점은?",
    "options": [
      "a접점",
      "b접점",
      "c접점",
      "d접점"
    ],
    "answer": 0,
    "explanation": "계전기가 여자 되었을 때 접촉되어 전기회로를 구성할 수 있도록 하는 연동을 a연동, 접점을 a접점이라 한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_005",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "보조공기압축기(ACM) 구동을 제어하는 조압기(ACMG)의 작동 범위는?",
    "options": [
      "5.5 ~ 6.5 kg/㎠",
      "6.5 ~ 7.5 kg/㎠",
      "7.5 ~ 8.5 kg/㎠",
      "8.0 ~ 9.0 kg/㎠"
    ],
    "answer": 1,
    "explanation": "ACMG는 ACM의 압력이 6.5㎏/㎠ 이하에서 구동 회로를 연결하여 압축 작용을 하고 7.5㎏/㎠ 이상일 경우 구동 회로를 차단하여 압축 작용을 중지하도록 작동한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_006",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "기동 준비 시 제동 핸들을 투입하면 103선에 가장 먼저 공급되는 전원은?",
    "options": [
      "SIV 출력 DC 100V",
      "AC 25,000V",
      "Bat DC 84V 또는 92.5V",
      "DC 1,500V"
    ],
    "answer": 2,
    "explanation": "기동 준비를 위하여 운전실에서 제동 핸들을 투입하면, 전·후부 TC차와 T1차의 BatK가 여자 되어 Bat DC 84V 또는 92.5V가 103선에 가압된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_007",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "운전실 선택 회로에서 제동 핸들을 투입한 쪽(전부 운전실)에서 여자 되는 계전기는?",
    "options": [
      "TCR (Tail Control Relay)",
      "HCR (Head Control Relay)",
      "PanR (Pantograph Relay)",
      "MCBHR (MCB Holding Relay)"
    ],
    "answer": 1,
    "explanation": "운전실 선택은 제동 핸들을 투입한 운전실 쪽은 HCR(Head Control Relay), 후부 운전실 쪽은 TCR(Tail Control Relay)이 여자 되는 것으로 위치 선택이 이루어진다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_008",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "ACM(보조공기압축기)이 구동되지 않는 조건은?",
    "options": [
      "ACMCS 스위치를 눌렀을 때",
      "MCB가 투입되었을 때",
      "공기 압력이 6.0kg/㎠ 일 때",
      "배터리 전압이 정상일 때"
    ],
    "answer": 1,
    "explanation": "ACM은 MCB 투입 전까지만 구동 회로가 유지되며, MCB 투입 이후에는 ACMCS를 취급하여도 ACM은 구동되지 않는다 (MCBR2 b접점에 의해 차단됨).",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_009",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "ACM 구동으로 생성된 압축공기가 공급되는 기기가 아닌 것은?",
    "options": [
      "Pan (팬터그래프)",
      "MCB (주차단기)",
      "ADCg (교직절환기)",
      "출입문 (Door)"
    ],
    "answer": 3,
    "explanation": "ACM 공기는 M'차 Pan, MCB, ADCg, EGS, L1, L2, L3에 공급된다. 출입문은 주 공기압축기(CM)에 의해 공급되는 공기를 사용한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_010",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "팬터그래프(Pan)의 표준 압상력(Contact Force)은?",
    "options": [
      "4.5 kgf",
      "5.5 kgf",
      "6.0 kgf",
      "7.5 kgf"
    ],
    "answer": 2,
    "explanation": "압상력(Contact Force)은 6.0kgf으로 팬터그래프 작용 높이가 변화하더라도 지하 및 지상구간에서 각각 일정한 값을 유지하도록 되어 있다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_011",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "팬터그래프(Pan) 상승 시간의 표준 조정 값은?",
    "options": [
      "4 ~ 6초",
      "6 ~ 8초",
      "8 ~ 10초",
      "10 ~ 14초"
    ],
    "answer": 3,
    "explanation": "Pan 상승 시간은 보통 10~14초로 조정되어 있다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_012",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "EPanDS(비상 팬터그래프 하강 스위치)를 취급했을 때의 동작으로 옳은 것은?",
    "options": [
      "MCB가 투입된 상태에서 Pan만 하강한다.",
      "MCB 제어 회로를 직접 차단함과 동시에 Pan을 하강시킨다.",
      "비상제동만 체결된다.",
      "자동으로 복귀된다."
    ],
    "answer": 1,
    "explanation": "EPanDS를 취급하면 MCB 제어 회로를 직접 차단할 수 있도록 하며, Pan 하강 회로를 구성하여 Pan을 하강시킨다. 또한 취급 후에는 반드시 수동으로 복귀 취급을 하여야 한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_013",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "계기용 변압기(PT)의 역할로 옳은 것은?",
    "options": [
      "전차선 전압을 승압하여 모터에 공급한다.",
      "전차선 전원을 감지하여 ACVR 또는 DCVR을 동작시킨다.",
      "보조전원장치(SIV)의 기동 신호를 준다.",
      "축전지를 충전한다."
    ],
    "answer": 1,
    "explanation": "PT는 1차 코일이 Pan에 접속되어 전차선 전원을 감지하며, 교류일 경우 ACVR, 직류일 경우 DCVR을 작동시켜 전기동차의 회로를 절환할 수 있도록 하는 신호를 준다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_014",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "운전실 AC등 또는 DC등이 점등되는 신호 흐름에서 시한계전기(Timer Relay)를 사용하는 이유는?",
    "options": [
      "절연 구간 통과 시 MCB 차단을 방지하기 위해",
      "램프의 수명을 연장하기 위해",
      "운전실 선택을 지연시키기 위해",
      "SIV 기동을 돕기 위해"
    ],
    "answer": 0,
    "explanation": "ACVRTR과 DCVRTR은 시한계전기로서, 교-교 절연 구간이나 순간적인 단전 시 MCB가 차단되지 않도록 일정 시간 동안 여자 상태를 유지하기 위해 사용된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_015",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "ADCg(교직 절환기)가 절환되기 위한 필수 조건은?",
    "options": [
      "Pan이 하강되어 있어야 한다.",
      "MCB가 투입되어 있어야 한다.",
      "MCB가 차단되어 있어야 한다.",
      "SIV가 정지해 있어야 한다."
    ],
    "answer": 2,
    "explanation": "전기동차의 회로를 교류 또는 직류로 바꿔주는 역할을 하는 ADCg는 운전실에서 ADS를 취급하는 경우 반드시 MCB가 차단된 조건에서만 ADCg가 절환된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_016",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "MCB(주차단기) 투입 회로에서 PanPS(팬터그래프 압력 스위치)가 동작하여 회로를 구성하는 최소 공기압력은?",
    "options": [
      "3.5 kg/㎠",
      "4.2 kg/㎠",
      "5.0 kg/㎠",
      "6.0 kg/㎠"
    ],
    "answer": 1,
    "explanation": "PanPS1,2는 2개의 Pan 중 어느 하나라도 Pan 실린더에 공급하는 공기압력이 4.2㎏/㎠ 이하가 되면 MCBR1 회로를 차단하여 MCB가 투입되지 않도록 하였다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_017",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "MCB 투입 동작 과정에서 MCB-C(투입 코일)가 여자 된 후, 투입 상태를 유지하고 MCB-C를 무여자 시키는 계전기는?",
    "options": [
      "MCBR1",
      "MCBR2",
      "MCBHR",
      "MCBOR"
    ],
    "answer": 1,
    "explanation": "MCB 투입이 완료되면 MCBR2가 여자 되며, MCBR2(b) 연동이 회로를 차단하여 MCB-C 코일은 무여자 된다. MCB는 기계적으로 투입 상태를 유지한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_018",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "AC 구간에서 MCB 사고 차단 원인에 해당하지 않는 것은?",
    "options": [
      "ACOCR 여자 (교류 과전류)",
      "ArrOCR 여자 (피뢰기 과전류)",
      "MCBOR 무여자 (주변환장치 중고장 등)",
      "L1 Trip (직류 고속도 차단기 트립)"
    ],
    "answer": 3,
    "explanation": "AC 구간의 사고 차단은 ACOCR 여자, ArrOCR 여자, MCBOR 무여자에 의해 발생한다. L1 Trip은 DC 구간에서의 차단 작용과 관련이 있다 (DC 구간은 MCB 사고 차단 기능 없음).",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_019",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "주변압기(MT)의 1차 측 입력 전압과 2차 측 출력 전압으로 옳은 것은?",
    "options": [
      "입력 AC 25kV -> 출력 AC 440V",
      "입력 AC 25kV -> 출력 AC 840V",
      "입력 DC 1500V -> 출력 AC 840V",
      "입력 AC 25kV -> 출력 DC 1500V"
    ],
    "answer": 1,
    "explanation": "주변압기(MT)는 Pan에서 집전된 1차 측의 AC 25KV를 2차 측에서 AC 840V로 전압을 낮춰 C/I Converter에 공급한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_020",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "EGCS(비상 접지 제어 스위치)를 취급했을 때 동작하는 기기와 현상으로 옳은 것은?",
    "options": [
      "EGS가 동작하여 전차선을 접지시키고 변전소 차단기를 트립 시킨다.",
      "MCB가 즉시 투입된다.",
      "Pan이 하강하고 배터리 전원이 차단된다.",
      "SIV가 기동된다."
    ],
    "answer": 0,
    "explanation": "EGCS를 취급하면 EGS가 동작하여 Pan 회로를 접지시킨다. 이로 인해 변전소 급전 측 차단기가 차단되어 전차선 전원 공급이 중단된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_021",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "교류 구간에서 직류 모진(DC 1,500V 유입)이 발생했을 때 주변압기(MT)를 보호하기 위해 용단되는 것은?",
    "options": [
      "ACArr (교류 피뢰기)",
      "DCArr (직류 피뢰기)",
      "MFs (주 퓨즈)",
      "MCB (주차단기)"
    ],
    "answer": 2,
    "explanation": "MFs(주 퓨즈)는 전차선의 DC 1,500V가 전기동차의 교류회로에 흘러 직류 모진이 발생하였을 때 용단되어 회로를 차단함으로써 MT를 보호한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_022",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "교류 모진(AC 25kV가 직류 회로로 유입) 발생 시 동작하는 보호 기기는?",
    "options": [
      "MFs",
      "DCArr",
      "ACArr",
      "HSCB"
    ],
    "answer": 1,
    "explanation": "교류 모진이 발생하면 DCArr(직류 피뢰기)이 방전 지연 없이 동작하여 접지시키고, ArrOCR을 여자 시켜 MCB를 사고 차단한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_023",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "축전지 방전 방지 회로는 SIV 정지 후 몇 분 뒤에 동작하는가?",
    "options": [
      "1분",
      "3분",
      "5분",
      "10분"
    ],
    "answer": 1,
    "explanation": "축전지 방전 방지 회로는 차량 유치 중 전차선 단전 등으로 SIV가 정지하고 PDARTR이 무여자 된 3분 후에 동작하여 Pan을 하강시킨다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_024",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "운전실 교환 시 신(新) 운전실에서 전·후진 핸들을 전진 위치로 했을 때 일어나는 현상은?",
    "options": [
      "신 운전실의 MCB가 투입된다.",
      "도착 운전실 쪽의 MCB 투입 회로가 차단된다.",
      "전체 출입문이 개방된다.",
      "비상제동이 체결된다."
    ],
    "answer": 1,
    "explanation": "신 운전실에서 전·후진 핸들을 전진 위치로 하면 2선에 의하여 도착 운전실의 MCB 투입 회로(MCBHR 유지 회로)는 차단된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_025",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "교-직 절연 구간의 길이는?",
    "options": [
      "22m",
      "45m",
      "50m",
      "66m"
    ],
    "answer": 3,
    "explanation": "교직 절연 구간은 전차선의 전기방식 차이로 66m 거리를 서로 전기가 흐르지 않도록 절연체로 구분한 구간이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_026",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "직류 절환(AC → DC) 시 ADS를 전환하면 가장 먼저 일어나는 현상은?",
    "options": [
      "ADCg가 DC 측으로 절환된다.",
      "전체 M'차 MCB가 차단된다.",
      "Pan이 하강한다.",
      "ACVR이 무여자 된다."
    ],
    "answer": 1,
    "explanation": "ADS를 AC에서 DC로 전환하면 7선 차단, 8선 가압으로 전체 M'차 MCBR1, MCBR2가 무여자 되어 MCB가 일제히 차단된다. 그 후 MCB 차단 조건으로 ADCg가 절환된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_027",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "절연 구간 예고 방송을 송출하기 위한 지상자의 주파수는?",
    "options": [
      "24 KHz",
      "40 KHz",
      "68 KHz",
      "80 KHz"
    ],
    "answer": 2,
    "explanation": "교-직 및 교-교 절연 구간 전방에서 절연 구간 검지용 지상자를 통과하면서 68KHz의 절연 구간 검지 주파수를 수신하면 50초간 예고 방송을 한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_028",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "ATC 구간에서 ATS 구간으로 진입 시 차상 장치에서 수신하는 절환 신호에 의해 여자 되는 계전기는?",
    "options": [
      "CNSR",
      "CgSR",
      "DSSR",
      "SC"
    ],
    "answer": 1,
    "explanation": "ATC 구간을 운행 중 ATS 구간에 접근하면, ATS 지상자의 절환 신호를 수신하여 차상장치에서 CgSR(절환신호 계전기)을 여자 시킨다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_029",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "주퓨즈(MFs) 용단 시 확인할 수 있는 현상은?",
    "options": [
      "운전실 Fault등 점등",
      "운전실 MCB OFF등 점등",
      "MFs 적색 단추가 30mm 탈출",
      "전차선 단전"
    ],
    "answer": 2,
    "explanation": "MFs가 용단되면 고장 표시등이나 MCB 차단은 발생하지 않으나, MFs 본체 우측 끝의 적색 단추가 30mm 탈출한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_030",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "AC 구간에서 C/I 고장 등으로 MCBOR이 무여자 되었을 때 MCB가 차단되는 회로 구성 요소는?",
    "options": [
      "ACOCR 여자",
      "ArrOCR 여자",
      "MCBOR(b) 접점 및 COR2(b) 접점",
      "PanPS 접점 개방"
    ],
    "answer": 2,
    "explanation": "MT 2차 측 고장이나 C/I 고장으로 MCBOR이 무여자 되면, MCBOR(b) - COR2(b) - MCB-T 여자 순서로 MCB가 차단된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_001",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "전기동차의 제어 방식에 대한 설명으로 표준교재의 내용과 일치하는 것은?",
    "options": [
      "모든 제어는 고압 전원을 직접 개폐하여 이루어진다.",
      "운전실에서 제동 핸들을 투입하면 103선에 DC 1,500V가 공급된다.",
      "TC차 및 T1차에 배치된 저압 전원(Bat)을 이용하여 간접 제어한다.",
      "특고압 장치인 피뢰기(Arr)는 103선 전원으로 간접 제어된다."
    ],
    "answer": 2,
    "explanation": "운전실에서 각 차량의 특고압, 고압, 저압 기기를 제어하는 방법으로는 저압 전원에 의한 간접 제어 방식이 있다. 피뢰기나 MFs는 간접 제어 방식이 아닌 보호기기이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_002",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "전기동차 회로 구분 중 '고압 보조 회로'에 속하는 장치는?",
    "options": [
      "주변환장치(C/I)",
      "견인전동기(TM)",
      "공기압축기(CM)",
      "주차단기(MCB)"
    ],
    "answer": 2,
    "explanation": "SIV 및 SIV 출력 전원으로 구동되는 CM, 송풍기, 냉난방을 고압 보조 장치라 하며, 이를 제어하는 회로를 고압 보조 회로라 한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_003",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "다음 용어 정의 중 '소호(消弧) 작용'이란?",
    "options": [
      "전류가 흐를 수 있는 통로를 개방하는 것",
      "Arc에 의해 발생하는 높은 열과 불꽃을 끄는 작용",
      "접점이 용접되어 동작할 수 없는 상태",
      "퓨즈가 끊어지는 것"
    ],
    "answer": 1,
    "explanation": "소호(消弧) 작용이란 Arc에 의해 발생하는 높은 열과 불꽃을 끄는 작용을 말한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_004",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "Li-Po(Lithium polymer) 축전지의 정격 전압 구성으로 옳은 것은?",
    "options": [
      "1.2V × 70 Cell = DC 84V",
      "3.7V × 25 Cell = DC 92.5V",
      "2.0V × 50 Cell = DC 100V",
      "1.5V × 60 Cell = DC 90V"
    ],
    "answer": 1,
    "explanation": "Li-Po(Lithium polymer) Bat 전압은 DC 3.7V(1 Cell) × 25 Cell로 DC 92.5V이다. (Ni-Cd는 DC 1.2V × 70 Cell = DC 84V)",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_005",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "다음 중 전기동차의 '부하 측'에 해당하지 않는 것은?",
    "options": [
      "전차선",
      "견인전동기(TM)",
      "객실 냉난방 장치",
      "제어용 계전기"
    ],
    "answer": 0,
    "explanation": "전기동차의 전원 측은 전기를 공급하는 전차선, Bat 등을 말하며, 부하 측은 전기를 사용하는 TM, CM, 계전기 등을 말한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_006",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "지하 구간에서 사용하는 '강체 가선 방식'의 구조적 특징은?",
    "options": [
      "조가선과 행거를 사용하여 전차선을 매단다.",
      "알루미늄제 T-Bar를 애자에 고정시키고 그 아래 전차선을 고정한다.",
      "전차선의 높이가 일정하지 않다.",
      "주로 지상 구간에서 사용한다."
    ],
    "answer": 1,
    "explanation": "강체 가선 방식은 터널 천장에 애자를 설치한 후, 알루미늄제의 T-Bar를 애자에 고정시키고 아랫부분에 이어(Ear)로 전차선을 고정하여 설치한 방식이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_007",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "회로 차단기(NFB)가 일반 스위치와 다른 점은?",
    "options": [
      "수동으로 조작할 수 없다.",
      "과전류 시 내부 코일의 전자력으로 잠금장치가 풀려 자동으로 차단된다.",
      "누르고 있는 동안만 회로가 연결된다.",
      "주로 고압 회로에만 사용된다."
    ],
    "answer": 1,
    "explanation": "NFB는 내부에 과전류를 검지하는 코일이 있어, 용량을 초과하는 전류가 흐를 경우 코일의 전자력에 의하여 자동으로 차단(Trip)되는 기능이 있다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_008",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "계전기(Relay)가 '여자(Excitation)' 되었다는 것의 의미는?",
    "options": [
      "코일에 전류가 흘러 전자석이 되어 가동 편이 고정 철심에 접촉된 상태",
      "스프링의 장력에 의해 가동 편이 고정 철심에서 분리된 상태",
      "접점이 용착되어 떨어지지 않는 상태",
      "회로 차단기가 트립된 상태"
    ],
    "answer": 0,
    "explanation": "코일에 전류가 흘러 전자석이 될 때를 여자라 하며, 이때 스프링의 힘보다 큰 전자력에 의하여 가동 편이 고정 철심에 접촉된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_009",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "계전기의 연동(접점) 중 'b접점'의 동작 특성은?",
    "options": [
      "계전기가 여자 되었을 때 회로를 연결한다.",
      "계전기가 무여자 되었을 때 회로를 연결한다.",
      "항상 회로를 차단하고 있다.",
      "과전류가 흐를 때만 연결된다."
    ],
    "answer": 1,
    "explanation": "계전기가 무여자 되었을 때 회로를 연결하는 연동을 'b연동', 접점을 'b접점'이라 하고, 여자 되었을 때 회로를 차단한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_010",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "접촉기(Contactor)에서 보조 접점의 역할은?",
    "options": [
      "고압의 대전류를 차단한다.",
      "주 접점과 같이 동작하여 저압 회로를 구성한다.",
      "아크를 소호시킨다.",
      "전압을 변환한다."
    ],
    "answer": 1,
    "explanation": "접촉기는 큰 전류가 흘러도 안전한 고압 접점(주 접점)과 저압 회로에 사용하는 보조 접점이 같이 동작하는 구조로 되어 있다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_011",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "전자밸브(Magnetic Valve)의 동작 원리로 옳은 것은?",
    "options": [
      "코일이 여자 되면 상부 밸브가 열려 배기된다.",
      "코일이 여자 되면 하부 밸브가 열려 제어 공기를 실린더에 공급한다.",
      "코일이 무여자 될 때 실린더로 공기가 공급된다.",
      "전기 신호 없이 공기 압력만으로 동작한다."
    ],
    "answer": 1,
    "explanation": "전자밸브 코일에 전류가 흐르면(여자) 전기자가 철심과 접촉하며 하부 밸브를 눌러 제어 공기를 실린더에 공급하고, 상부 밸브는 배기 통로를 막는다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_012",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "공기압축기 조압기(CMG)의 동작 압력 범위는?",
    "options": [
      "6.5 ~ 7.5 kg/㎠",
      "7.0 ~ 8.0 kg/㎠",
      "8.0 ~ 9.0 kg/㎠",
      "9.0 ~ 10.0 kg/㎠"
    ],
    "answer": 2,
    "explanation": "CMG는 CM이 8kg/㎠ 이하에서 압축 작용을 하고 9kg/㎠ 이상일 경우 압축 작용을 중지하도록 작동한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_013",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "회로도 기호 중 다이오드(Diode)의 기능은?",
    "options": [
      "전압을 승압한다.",
      "전류를 한 방향으로 흐르게 한다.",
      "과전류를 차단한다.",
      "회로를 개폐한다."
    ],
    "answer": 1,
    "explanation": "다이오드는 전류를 한 방향으로 흐르게 하는 역할을 한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_014",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "다음 중 '기계적인 보조 접점'을 사용하여 회로를 구성하는 기기는?",
    "options": [
      "SIV",
      "CM",
      "MCB",
      "Pan"
    ],
    "answer": 2,
    "explanation": "MCB, ADCg, EGS, L1 등의 고압 기기는 전자 접촉기의 보조 접점과 동일하게 부하 개폐와 같이 동작하는 기계적인 보조 접점을 사용한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_015",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "푸시버튼 스위치(Push Button Switch)의 특징은?",
    "options": [
      "한 번 누르면 손을 떼도 상태가 유지된다.",
      "버튼을 누르고 있는 동안만 회로를 연결한다.",
      "좌우로 레버를 움직여 조작한다.",
      "과전류 시 자동으로 차단된다."
    ],
    "answer": 1,
    "explanation": "푸시버튼 스위치는 버튼을 누르고 있는 동안만 동작되며, 손을 떼면 스프링의 힘에 의해 복귀되어 회로를 차단한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_016",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "회로도에서 계전기 코일과 연동을 분리하여 표시할 때, 상호 동작 관계를 이해하기 위해 사용하는 표기법은?",
    "options": [
      "실선 연결",
      "점선 연결 및 동일 명칭 사용",
      "색상 구분",
      "화살표 표시"
    ],
    "answer": 1,
    "explanation": "회로도에서는 계전기의 코일과 연동을 분리하여 표시하며, 이해를 돕기 위해 점선으로 연결하거나 같은 명칭(기호)을 사용하여 동일 기기임을 나타낸다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_017",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "전기동차의 103선은 어떤 전원이 공급되는 선인가?",
    "options": [
      "AC 25,000V",
      "DC 1,500V",
      "AC 440V",
      "저압 제어 전원 (Bat 및 DC 100V)"
    ],
    "answer": 3,
    "explanation": "103선은 편성 내 모든 차량과 Jump선으로 연결되어 축전지 전원(DC 84V/92.5V) 또는 SIV 출력 DC 100V가 공급되는 제어 전원선이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_018",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "TC차 배전반의 HCRN의 명칭은?",
    "options": [
      "전부차 제어계전기 회로차단기",
      "후부차 제어계전기 회로차단기",
      "축전지 회로차단기",
      "객실등 제어 스위치"
    ],
    "answer": 0,
    "explanation": "HCRN은 Head Control Relay NFB의 약어로, 전부차 제어계전기 회로차단기이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_019",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "특고압 회로의 범위로 옳은 것은?",
    "options": [
      "Pan에서 TM까지",
      "Pan에서 C/I 전까지",
      "C/I에서 TM까지",
      "SIV에서 부하까지"
    ],
    "answer": 1,
    "explanation": "Pan에서 C/I 전까지를 특고압 회로라 하며, 회로 내 있는 각종 장치들을 특고압 장치라 한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_1_020",
    "subject": "emu",
    "chapter": "2.1 저압 제어 일반",
    "question": "다음 중 제어 공기압력이 일정 압력 이하로 될 경우 제어회로를 차단하는 압력 스위치(PS)의 종류가 아닌 것은?",
    "options": [
      "MRPS",
      "PBPS",
      "PanPS",
      "BCPS"
    ],
    "answer": 3,
    "explanation": "제어회로를 차단하는 압력 스위치로는 MRPS(주 공기압력), PBPS(주차제동 압력), PanPS(팬터그래프 압력) 등이 있다. BCPS는 교재에 명시되지 않았다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_001",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "103선 가압을 위해 제동 핸들을 투입하면 가장 먼저 여자 되는 접촉기는?",
    "options": [
      "PanK",
      "SIVK",
      "BatK",
      "MCBK"
    ],
    "answer": 2,
    "explanation": "기동 준비를 위하여 운전실에서 제동 핸들을 투입하면, 전·후부 TC차와 T1차의 BatK(Battery Contactor)가 여자 되어 Bat 전압이 103선에 가압된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_002",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "Pan이 상승한 후 제동 핸들을 취거(Key Off)하여도 103선 가압이 유지되는 이유는?",
    "options": [
      "SIV가 계속 작동하기 때문에",
      "M'차 PanR(a) 연동에 의해 BatK가 계속 여자 되기 때문에",
      "비상제동이 체결되어 있기 때문에",
      "축전지가 직결되기 때문에"
    ],
    "answer": 1,
    "explanation": "Pan이 상승하면 M'차 PanR(a) 연동에 의하여 BatK가 여자 되며, 이로 인해 제동 핸들을 취거하더라도 103선은 가압 상태를 유지한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_003",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "운전실 선택 회로에서 전부 운전실을 선택하게 하는 계전기는?",
    "options": [
      "TCR",
      "HCR",
      "PanR",
      "MCBHR"
    ],
    "answer": 1,
    "explanation": "제동 핸들을 투입한 운전실 쪽은 HCR(Head Control Relay)이 여자 되어 전부 운전실로 선택된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_004",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "전부 운전실 HCR 회로가 직렬로 4개의 계전기(HCR1~4)를 사용하는 주된 이유는?",
    "options": [
      "전압 강하를 막기 위해",
      "1개의 계전기 고장 시 모든 제어를 차단하여 안전을 확보하기 위해",
      "전류 용량을 늘리기 위해",
      "후부 운전실과 통신하기 위해"
    ],
    "answer": 1,
    "explanation": "HCR1,2,3,4가 병렬일 경우 하나가 고장 나면 일부 기능만 작동하여 혼란을 줄 수 있다. 따라서 직렬로 연결하여 1개 고장 시 모든 계전기가 동작하지 않도록 한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_005",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "ACM(보조공기압축기)의 정격 구동 시간은?",
    "options": [
      "5분",
      "10분",
      "15분",
      "30분"
    ],
    "answer": 1,
    "explanation": "ACM의 정상적인 구동 시간은 5~6분이며, 정격 구동 시간은 10분이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_006",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "ACM 구동 회로에서 ACMK가 MCB 투입 전까지만 여자 되도록 하는 연동 접점은?",
    "options": [
      "ACMG",
      "MCBR1(a)",
      "MCBR2(b)",
      "PanR(a)"
    ],
    "answer": 2,
    "explanation": "MCB가 투입되면 MCBR2가 여자 되며, ACM 구동 회로에 있는 MCBR2(b) 접점이 회로를 차단하여 ACM 구동을 정지시킨다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_007",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "ACM 구동 시 ACMLp(구동지시등)가 소등되는 조건은?",
    "options": [
      "ACM이 구동을 시작할 때",
      "전체 M'차 ACM 압력이 7.5kg/㎠ 이상 되어 ACMG가 동작할 때",
      "운전실에서 손을 뗄 때",
      "MCB가 차단될 때"
    ],
    "answer": 1,
    "explanation": "전체 M'차의 ACM 압력이 7.5kg/㎠ 이상 되면 ACMG가 동작하여 회로를 차단하므로 ACMLp는 소등된다. 1대라도 구동 중이면 점등된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_008",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "ACM 안전밸브의 역할은?",
    "options": [
      "공기 압력을 5kg/㎠로 감압한다.",
      "ACMG 고장 등으로 과도한 압축 시 공기를 배출한다.",
      "역류를 방지한다.",
      "수분을 제거한다."
    ],
    "answer": 1,
    "explanation": "안전밸브는 ACMG 고장 발생으로 인해 ACM이 공기 압축을 계속하는 경우, 일정 이상의 공기압력을 대기로 배출하는 작용을 한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_009",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "ACM에서 생성된 압축공기는 감압밸브를 거쳐 몇 kg/㎠로 변환되는가?",
    "options": [
      "3.5 kg/㎠",
      "5.0 kg/㎠",
      "7.5 kg/㎠",
      "9.0 kg/㎠"
    ],
    "answer": 1,
    "explanation": "ACM 공기는 감압밸브를 통해 5kg/㎠로 압력이 변환되어 제2공기통에 저장되고 각 기기에 공급된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_010",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "기동 완료(MCB 투입) 후, M'차의 특고압 기기(Pan, MCB 등) 동작용 공기는 어디서 공급되는가?",
    "options": [
      "계속 ACM에서 공급된다.",
      "TC차 및 T1차의 주 공기압축기(CM)에서 MR관을 통해 공급된다.",
      "외부에서 별도로 주입해야 한다.",
      "비상 공기통에서 공급된다."
    ],
    "answer": 1,
    "explanation": "MCB 투입 후 ACM은 정지하며, 이후에는 TC차, T1차의 CM에서 생성된 압축공기가 MR관을 통해 감압변을 거쳐 공급된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_011",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "후부 운전실에서 제동 핸들을 투입해도 운전실 선택이 안 되는 이유는?",
    "options": [
      "배터리 전압이 약해서",
      "도착 운전실(전부)의 HCR이 여자 되어 후부 운전실 회로를 차단하기 때문",
      "도착 운전실 쪽 TCR1(b) 접점이 회로를 차단하고 있기 때문",
      "SIV가 가동 중이라서"
    ],
    "answer": 2,
    "explanation": "전부 운전실 선택 완료 시 후부 운전실의 TCR이 여자 된다. TCR1(b) 연동이 후부 운전실의 제동 핸들 회로를 차단하므로 후부에서 선택할 수 없다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_012",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "기동 전 축전지 전압계가 현시하는 전압은?",
    "options": [
      "0V",
      "DC 24V",
      "DC 84V 또는 92.5V",
      "DC 100V"
    ],
    "answer": 2,
    "explanation": "기동 전 103선 가압 시 축전지 전압계는 Bat 전압인 DC 84V(Ni-Cd) 또는 92.5V(Li-Po)를 현시한다. (기동 후에는 DC 100V)",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_013",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "전부 운전실 HCR2 계전기가 고장 나서 여자 되지 않을 때 나타나는 현상은?",
    "options": [
      "비상제동이 체결된다.",
      "운전실 표시등이 모두 소등된다.",
      "ATS(운전보안장치) 전원이 공급되지 않는다.",
      "Pan이 상승하지 않는다."
    ],
    "answer": 2,
    "explanation": "HCR2(a) 연동은 ATS(또는 ATC) 전원을 공급하는 회로에 있다. 따라서 HCR2 불량 시 운전 보안장치를 사용할 수 없다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_014",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "Pan 상승, MCB 투입, ADCg 절환 등에 필요한 제어 공기 압력은?",
    "options": [
      "3 kg/㎠",
      "5 kg/㎠",
      "7 kg/㎠",
      "9 kg/㎠"
    ],
    "answer": 1,
    "explanation": "기동에 필요한 압축공기는 5kg/㎠이며, ACM 구동 또는 MR 압력을 감압하여 사용한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_015",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "제동 핸들을 투입했을 때 동작하는 제동 제어기 접점(S2)의 역할은?",
    "options": [
      "운전실 선택 회로를 구성한다.",
      "103선 가압 회로를 연결한다.",
      "비상제동 회로를 구성한다.",
      "Pan 상승 신호를 보낸다."
    ],
    "answer": 1,
    "explanation": "제동 핸들 투입 시 S2 접점은 103선 가압 회로를 연결하고, S9 접점은 운전실 선택 회로를 연결한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_016",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "103선 가압 회로에서 104선에 전원이 공급되면 여자 되는 것은?",
    "options": [
      "BatK (축전지 접촉기)",
      "SIVK (SIV 접촉기)",
      "PanR (팬터그래프 계전기)",
      "HCR (전부차 제어계전기)"
    ],
    "answer": 0,
    "explanation": "104선 전원은 BatKN2를 거쳐 BatK를 여자 시킨다. BatK가 여자 되면 Bat 전원이 103선에 공급된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_017",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "ACM 구동 중 운전실에서 손을 떼어도 ACMK가 계속 여자 상태를 유지하는 이유는?",
    "options": [
      "ACMG 접점 때문",
      "ACMK 자기 유지 접점 때문",
      "SIV 전원이 공급되기 때문",
      "배터리 직결 회로 때문"
    ],
    "answer": 1,
    "explanation": "ACMCS(푸시버튼)에서 손을 떼면 전원이 차단되지만, ACMK는 자신의 접점(자기 유지)에 의해 MCB 투입 전까지 여자 상태를 유지한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_018",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "ACMCS를 눌렀을 때 ACM이 구동되지 않는 원인으로 가장 적절한 것은?",
    "options": [
      "제동 핸들이 비상 위치에 있을 때",
      "MCB가 이미 투입되어 있을 때",
      "공기 압력이 5.0kg/㎠ 일 때",
      "출입문이 열려 있을 때"
    ],
    "answer": 1,
    "explanation": "MCB가 투입되면 MCBR2(b) 접점이 개방되어 ACM 구동 회로를 차단하므로 ACMCS를 눌러도 구동되지 않는다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_019",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "기동 완료 후 SIV에서 출력되는 DC 100V가 공급되는 회로 차단기는?",
    "options": [
      "BCN (Battery Charge NFB)",
      "MCN (Master Controller NFB)",
      "PanDN",
      "ACMN"
    ],
    "answer": 0,
    "explanation": "SIV 출력 DC 100V는 BCN(축전지 충전 회로차단기)을 거쳐 103선에 공급되어 제어 전원으로 사용되고 축전지를 충전한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "train_2_2_020",
    "subject": "emu",
    "chapter": "2.2 기동 준비",
    "question": "ACMG 고장으로 공기 압력이 계속 상승할 때 기기를 보호하는 장치는?",
    "options": [
      "역지밸브",
      "감압밸브",
      "안전밸브",
      "공기 건조기"
    ],
    "answer": 2,
    "explanation": "ACMG 고장으로 ACM이 멈추지 않아 압력이 과도하게 상승하면 안전밸브가 작동하여 공기를 대기로 배출시킨다.",
    "source": "A_전기동차_2장_특고압회로"
  },
   {
    "id": "license_core_3_2_029",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 설명 중 틀린 것은?",
    "options": [
      "Pan에서 C/I 전까지를 특고압회로라 한다.",
      "C/I에서 TM까지를 견인회로라 한다.",
      "SIV 및 SIV 출력전원으로 구동되는 CM, 송풍기, 냉난방을 저압보조장치라 한다.",
      "전기동차의 Bat 전압은 DC 84V이다."
    ],
    "answer": 2,
    "explanation": "SIV 및 SIV 출력 전원으로 구동되는 CM, 송풍기, 냉난방을 '고압 보조 장치'라 하며, 이를 제어하는 회로를 고압 보조 회로라 한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_030",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 설명 중 틀린 것은?",
    "options": [
      "개폐작용이란 단순히 전류가 흐를 수 있는 통로를 연결하거나 개방하는 작용이다.",
      "용착이란 정격전류보다 높은 대전류의 유입으로 퓨즈가 끊어지는 것을 말한다.",
      "전원 측이란 전기를 공급하는 쪽을 말한다.",
      "EGS, ACArr, DCArr 등이 작동하면 전차선이 단전된다."
    ],
    "answer": 1,
    "explanation": "용착이란 Arc에 의해 접점이 용접되어 동작할 수 없는 상태를 말하며, 퓨즈가 끊어지는 것은 '용단'이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_031",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 회로차단기 및 스위치 중 TC차에 설치된 것으로 아닌 것은?",
    "options": [
      "HCRN",
      "LPCS",
      "WTS",
      "PanVN"
    ],
    "answer": 3,
    "explanation": "HCRN, LPCS, WTS는 TC차 배전반에 위치하며, PanVN(Pan 전자밸브 회로차단기)은 M'차에 위치한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_032",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "손가락 끝으로 레버를 직선으로 왕복운동을 시켜 전기회로의 개폐조작을 하는 제어용 스위치는?",
    "options": [
      "토글스위치",
      "버튼스위치",
      "푸시버튼스위치",
      "압력스위치"
    ],
    "answer": 0,
    "explanation": "토글 스위치(Toggle Switch)는 손가락 끝으로 레버를 직선으로 왕복 운동시켜 회로를 개폐하는 스위치이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_033",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "전자력을 이용하여 제어공기를 실린더에 공급하거나 실린더에 공급한 공기를 배출시키는 작용을 하는 기기로 맞는 것은?",
    "options": [
      "계전기",
      "접촉기",
      "조압기",
      "전자밸브"
    ],
    "answer": 3,
    "explanation": "전자밸브(Magnetic Valve)는 전자력을 이용하여 제어 공기를 실린더에 공급하거나 배출시키는 작용을 한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_034",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "보조공기압축기의 조압기(ACM-G)는 보조공기압축기가 몇 ㎏/㎠ 이하에서 구동회로를 연결하여 압축 작용을 하는가?",
    "options": [
      "4.5㎏/㎠",
      "5.5㎏/㎠",
      "6.5㎏/㎠",
      "7.5㎏/㎠"
    ],
    "answer": 2,
    "explanation": "ACMG는 ACM의 압력이 6.5㎏/㎠ 이하에서 구동 회로를 연결하여 압축 작용을 하고 7.5㎏/㎠ 이상일 경우 차단한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_035",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "공기압축기의 조압기(CM-G)가 CM이 몇 ㎏/㎠ 이하에서 압축작용을 하는가?",
    "options": [
      "8㎏/㎠",
      "7㎏/㎠",
      "6㎏/㎠",
      "5㎏/㎠"
    ],
    "answer": 0,
    "explanation": "CMG는 CM이 8㎏/㎠ 이하에서 압축 작용을 하고 9㎏/㎠ 이상일 경우 압축 작용을 중지하도록 작동한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_036",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "결선도 작성 기준에 대한 설명으로 틀린 것은?",
    "options": [
      "같은 기기는 동일 차량에서만 동작한다.",
      "103선에는 축전지 전압이 가압되어 있다.",
      "모든 계전기 및 연동은 동작하지 않고 있다.",
      "결선도는 각종 기기를 기호로 표시한다."
    ],
    "answer": 1,
    "explanation": "결선도는 전기가 흐르지 않는 상태를 기준으로 작성되므로, 103선에는 축전지 전압이 가압되지 않은 상태이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_037",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 103선 가압에 대한 설명으로 틀린 것은?",
    "options": [
      "Pan이 상승하면 PanR 연동에 의하여 103선은 가압상태를 유지한다.",
      "제동제어기 내의 전기접점 중 S2는 103선 가압회로를 연결한다.",
      "제동제어기 내의 전기접점 중 S9는 운전실 선택회로를 연결한다.",
      "BatK의 여자로 제동핸들을 취거하면 103선은 무가압상태가 된다."
    ],
    "answer": 3,
    "explanation": "Pan이 상승하면 M'차 PanR(a) 연동에 의하여 BatK가 여자 되므로, 제동 핸들을 취거하더라도 103선은 가압 상태를 유지한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_038",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 운전실 선택에 대한 설명으로 틀린 것은?",
    "options": [
      "운전실 선택이 완료된 후 후부운전실에서 운전실을 선택하는 것도 가능하다.",
      "HCR은 전부운전실 제어가 많아 4개를 사용하고 있다.",
      "제동핸들을 투입한 운전실 쪽은 HCR이 여자된다.",
      "출입문 개폐 연동회로, 표시등 회로 등 일부제어는 후부운전실에서 가능하다."
    ],
    "answer": 0,
    "explanation": "운전실 선택이 완료되면 후부 운전실 쪽 TCR(b) 연동이 회로를 차단하므로 후부 운전실에서 운전실을 선택하는 것은 불가능하다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_039",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "제동핸들 투입으로 103선 가압과 운전실 선택완료 후 현상으로 틀린 것은?",
    "options": [
      "축전지 전압계는 DC 84V 또는 92.5V를 표시한다.",
      "전부운전실 MCB OFF등 및 DOOR등이 소등된다.",
      "전부운전실 운전보안장치 전원이 공급된다.",
      "ATCCgS 위치에 따라 ATS 알람벨이 울리거나 ADU가 점등된다."
    ],
    "answer": 1,
    "explanation": "운전실 선택이 완료되면 103선 전원이 공급되어 MCB OFF등 및 DOOR등(전체 출입문 닫힘 시)이 점등된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_040",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 ACM에 대한 설명으로 틀린 것은?",
    "options": [
      "정격 구동시간은 10분이다.",
      "ACM은 구동되는 동안 ACMLp가 점등된다.",
      "ACM에서 압축되는 공급압력은 5.5㎏/㎠~6.5㎏/㎠이다.",
      "각종 기기들의 기동에 필요한 5㎏/㎠의 압축공기를 만들기 위해 ACM을 구동한다."
    ],
    "answer": 2,
    "explanation": "ACM의 작동 범위는 ACMG 설정치인 6.5㎏/㎠(구동) ~ 7.5㎏/㎠(정지)이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_041",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "ACM구동회로에 대한 설명으로 틀린 것은?",
    "options": [
      "전부운전실에서 ACMCS를 누르면 각 M'차의 ACMK가 여자된다.",
      "ACM은 MCB 투입 전까지 구동된다.",
      "ACM의 공기압력이 6.5㎏/㎠ 이상인 M'차의 ACM은 ACMG 동작으로 구동되지 않는다.",
      "ACMG는 6.5㎏/㎠ 이상이 되면 ACM 구동을 중지시킨다."
    ],
    "answer": 3,
    "explanation": "ACMG는 7.5㎏/㎠ 이상이 되면 회로를 차단하여 ACM 구동을 중지시킨다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_042",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "ACM 공기가 충기되면 동작되는 기기로 틀린 것은?",
    "options": [
      "SIV",
      "L1, L2, L3",
      "EGS",
      "ADCg"
    ],
    "answer": 0,
    "explanation": "Pan, MCB, ADCg, EGS, L1, L2, L3 등은 제어 공기를 사용하지만, SIV는 고전압을 사용하는 전력변환장치로 공기 압력으로 직접 동작하는 기기가 아니다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_043",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 팬터그래프에 대한 설명으로 틀린 것은?",
    "options": [
      "압상력은 5.0kgf이다.",
      "실린더에는 고무 다이어프램 방식을 채용하고 있다.",
      "1개 Pan에 습판체 2개를 설치하였다.",
      "상부틀 위쪽에는 습판체와 습판체 지지장치가 있다."
    ],
    "answer": 0,
    "explanation": "팬터그래프의 압상력(Contact Force)은 6.0kgf이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_044",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 팬터그래프(Pan)의 제원으로 틀린 것은?",
    "options": [
      "해방 시의 높이는 1,480mm이다.",
      "표준작용 높이는 1,000mm이다.",
      "조작 공기압력은 4~6㎏/㎠이다.",
      "접은 높이는 530mm 이하이다."
    ],
    "answer": 3,
    "explanation": "Pan의 접은 높이는 280mm 이하이며, 최저 작용 높이가 530mm 이하이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_045",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 Pan상승 조건으로 틀린 것은?",
    "options": [
      "103선이 가압되어야 한다.",
      "전부운전실의 MCN, HCRN이 ON 위치에 있어야 한다.",
      "일부 M'차의 MCB가 차단된 조건에서만 전체 Pan이 상승한다.",
      "EGCS를 취급하지 않은 조건에서 Pan이 상승한다."
    ],
    "answer": 2,
    "explanation": "전체 M'차의 MCB가 차단된 조건에서만 전체 Pan이 상승한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_046",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 EPanDS에 대한 설명으로 틀린 것은?",
    "options": [
      "전부운전실에서만 EPanDS 취급을 할 수 있다.",
      "EPanDS를 취급한 경우 MCB 제어회로를 직접 차단한다.",
      "EPanDS를 취급한 경우 Pan 하강시간이나 조건은 PanDS 취급과 같다.",
      "EPanDS를 취급한 경우 반드시 수동으로 복귀 취급을 하여야 한다."
    ],
    "answer": 0,
    "explanation": "EPanDS는 전·후부 운전실 모두에서 취급할 수 있다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_047",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 계기용 변압기(PT)에 대한 설명으로 틀린 것은?",
    "options": [
      "1차 코일은 Pan에 접속된다.",
      "2차 코일은 MCB에 접속된다.",
      "1차 측의 접지 측은 저항기를 통하여 접지된다.",
      "ACVR이 여자되면 ACVRTR이 여자된다."
    ],
    "answer": 1,
    "explanation": "PT의 2차 코일은 ACVR, DCVR 등의 전원 검지 회로에 접속되며, MCB(주회로)에 직접 접속되지 않는다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_048",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 ADCg에 대한 설명으로 틀린 것은?",
    "options": [
      "MCB가 차단되지 않아도 ADS를 취급하면 ADCg가 절환된다.",
      "ADCg는 5㎏/㎠의 압축공기를 이용하여 동작하는 단로기이다.",
      "본체에는 AC 및 DC 고정접촉부, 가동접촉부와 블레이드가 있다.",
      "조작부에는 AC 측과 DC 측의 전자밸브 2개, 실린더, 링크, 토글스프링, 조작레버가 있다."
    ],
    "answer": 0,
    "explanation": "ADCg는 반드시 MCB가 차단된 조건에서만 절환된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_049",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 주차단기(MCB)에 대한 설명으로 틀린 것은?",
    "options": [
      "진공차단기라고도 부른다.",
      "AC구간에는 개폐기 역할만 한다.",
      "조작압력은 5㎏/㎠이다.",
      "조작기구부에는 전자밸브, 실린더 등 조작기구와 신속차단 스프링, 보조스위치 등이 있다."
    ],
    "answer": 1,
    "explanation": "MCB는 AC 구간에서 개폐기 역할뿐만 아니라 사고 차단기의 역할도 수행한다. (DC 구간에서는 개폐기 역할만 함)",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_050",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 주차단기(MCB) 투입 전 확인사항으로 틀린 것은?",
    "options": [
      "DC구간은 MCBN2, ADAN, ADDN과 M차 및 M'차의 CIN이 정상위치에 있어야 한다.",
      "ADS 위치가 전차선 전기방식과 같아야 한다.",
      "전, 후부운전실의 TEST SW가 동작되지 않아야 한다.",
      "전부운전실 NFB MCN, HCRN이 정상 위치에 있어야 한다."
    ],
    "answer": 0,
    "explanation": "DC 구간에서는 MCBN2, ADDN이 정상 위치에 있어야 하며, AC용 차단기인 ADAN은 필수 조건이 아니다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_051",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 MCB 투입순서로 가장 옳은 것은?",
    "options": [
      "MCBHR 무여자 – MCBR1 여자 – MCB-C 여자 – MCBR2 여자 – MCB-C 무여자",
      "MCBHR 무여자 – MCBR1 여자 – MCB-C 무여자 – MCBR2 여자 – MCB-C 여자",
      "MCBHR 여자 – MCBR1 여자 – MCB-C 무여자 – MCBR2 여자 – MCB-C 여자",
      "MCBHR 여자 – MCBR1 여자 – MCB-C 여자 – MCBR2 여자 – MCB-C 무여자"
    ],
    "answer": 3,
    "explanation": "MCB 투입 순서: MCBHR 여자 → MCBR1 여자 → MCB-C 여자(투입) → MCBR2 여자 → MCB-C 무여자.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_052",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "MCBOS 취급을 제외하고 전체 M'차량의 MCBR1, MCBR2를 무여자 시켜, 전체 MCB를 차단하는 방법으로 틀린 것은?",
    "options": [
      "PanDS 취급으로 109선에 의한 MCBHR(O) 코일 여자",
      "PanDS 취급으로 1d –1e 간 회로차단",
      "EPanDS 취급으로 109선에 의한 MCBHR(O) 코일 여자",
      "ADS 취급으로 7선 또는 8선 회로차단으로 MCBR1, MCBR2 무여자"
    ],
    "answer": 1,
    "explanation": "PanDS는 109선을 가압하여 MCBHR(O)를 여자시키지만, 1d-1e 선을 직접 차단하는 기능은 EPanDS에 있다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_053",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 AC구간에서 MCB 사고차단의 조건으로 틀린 것은?",
    "options": [
      "ACOCR 여자 시",
      "MCBOR 무여자 시",
      "GR 여자 시",
      "ArrOCR 여자 시"
    ],
    "answer": 2,
    "explanation": "AC 구간 MCB 사고 차단 조건은 ACOCR 여자, MCBOR 무여자, ArrOCR 여자이다. GR(접지계전기) 동작은 표준교재의 AC 구간 사고차단 목록에 명시되지 않았다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_054",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "MCBTR이 0.5초 동안 차단회로를 개방하는 시기로 틀린 것은?",
    "options": [
      "교직절연구간을 통과할 때",
      "순간 단전 후 급전될 때",
      "MCB를 투입할 때",
      "돌입전류에 의하여 ACOCR이 여자될 때"
    ],
    "answer": 0,
    "explanation": "MCBTR은 MCB 투입 시, 교-교 절연 구간 통과 시, 순간 단전 후 급전 시 등 '돌입 전류' 발생 상황에서 동작한다. 교-직 절연 구간은 ADS 취급으로 MCB를 차단해야 하는 구간이므로 해당되지 않는다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_055",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 주변압기(MT)의 정격으로 틀린 설명은?",
    "options": [
      "1차권선의 용량은 1,790KVA이다.",
      "2차권선(M'차)의 정격은 840V×2이다.",
      "2차권선(M'차)의 전류는 476A이다.",
      "2차권선(M차)의 용량은 800KVA이다."
    ],
    "answer": 2,
    "explanation": "MT 2차 권선 전류는 M'차용이 589A, M차용이 476A이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_056",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 주변압기(MT)에 대한 설명으로 틀린 것은?",
    "options": [
      "M'차 하부에 배치되어 있다.",
      "MTBM은 공기를 흡입하여 주 변압기 냉각용 오일을 냉각시킨다.",
      "냉각계통을 강화한 구조로 되어있다.",
      "온도계전기는 오일온도가 110℃가 되면 접점을 닫고 이상을 알린다."
    ],
    "answer": 3,
    "explanation": "온도계전기는 오일 온도가 100℃가 되면 동작한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_057",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 필터리액터(FL)에 대한 설명으로 틀린 것은?",
    "options": [
      "M, M'차 차체 하부에 각각 1대씩 배치되어 있다.",
      "AC구간의 전용 기기이다.",
      "FL은 후단에 연결된 FC와 L-C필터를 구성하여 고조파 성분을 제거하기 위해 사용된다.",
      "FL은 강제통풍 냉각방식의 공심 원통형 리액터이다."
    ],
    "answer": 1,
    "explanation": "필터 리액터(FL)는 DC 구간의 전용 기기이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_058",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 보조제어함(AC Control Box)에 있는 계전기로 틀린 것은?",
    "options": [
      "MTTHR",
      "DCVR",
      "MCBHR",
      "MTAR"
    ],
    "answer": 2,
    "explanation": "MCBHR(MCB Holding Relay)은 TC차(운전실)에 위치하며, 보조제어함(M'차 하부)에는 ACVR, DCVR, MCBR, ArrOCR 등이 있다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_059",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 AC구간 전차선 전원 공급순서로 맞는 것은?",
    "options": [
      "Pan → MCB → ADCg → MT → Converter(DC 1,650V) → L2 → ADd1 → BF2 → SIV",
      "Pan → MCB → ADCg → MT → Converter(DC 1,800V) → L2 → ADd1 → BF2 → SIV",
      "Pan → MCB → ADCg → MT → Converter(DC 1,650V) → L3 → ADd2 → BF2 → SIV",
      "Pan → MCB → ADCg → MT → Converter(DC 1,800V) → L3 → ADd2 → BF2 → SIV"
    ],
    "answer": 3,
    "explanation": "AC 구간 전원 공급: Pan → MCB → ADCg → MT → Converter(DC 1,800V) → L3 → ADd2 → BF2 → SIV.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_060",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음은 전차선 전원 공급 순서 이해에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "AC 구간 M'차 C/I는 MCB가 투입된 후 기동되어 DC 1,800V를 해당 Unit SIV에 공급한다.",
      "SIV 고장이 발생하면 해당 Unit의 모든 고압 보조기기가 정지된다.",
      "M'차 송풍기가 정지되면 송풍기 고장신호로 C/I가 정지된다.",
      "M차의 C/I, 송풍기, 전체 Unit SIV 중 1개의 장치라도 고장이 발생하면 MCB는 차단된다."
    ],
    "answer": 3,
    "explanation": "AC 구간에서 M차의 C/I나 송풍기 고장 시에는 해당 차량의 동력 운전 및 회생제동만 불능이 되며, MCB는 차단되지 않는다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_061",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 비상접지스위치(EGS)에 대한 설명으로 틀린 것은?",
    "options": [
      "EGS 전자밸브는 TC차 객실의자 밑에 설치되어 있다.",
      "급히 전차선을 단전시켜야 할 경우 사용된다.",
      "EGS는 M'차 옥상에 배치되어 있다.",
      "EGS가 용착되면 완전부동 취급과 연장급전 조치를 한다."
    ],
    "answer": 0,
    "explanation": "EGS 전자밸브는 M'차 객실 의자 밑에 설치되어 있다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_062",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 교류피뢰기(AC Arrester)에 대한 설명으로 틀린 것은?",
    "options": [
      "외부 Surge가 전기동차 내로 들어올 경우, 방전접지 회로를 통하여 접지가 되는 보호기기이다.",
      "피뢰기 상단에는 선로단자, 피압막이 설치되어 있다.",
      "피뢰기 하단에는 접지단자가 설치되어 있다.",
      "투입 순간 단전되는 차량을 완전부동 취급 후 연장급전 조치하여 운행한다."
    ],
    "answer": 1,
    "explanation": "피뢰기의 피압막(Pressure Relief Diaphragm)은 하단에 설치되어 있다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_063",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 직류피뢰기(DC Arrester)와 CT2(Current Transformer)에 대한 설명으로 틀린 것은?",
    "options": [
      "CT2는 교·직류 전기동차 M'차 옥상 DCArr 접지회로 측에 설치되어 있다.",
      "교류모진이 발생하면 즉시 EPanDS를 취급해야 한다.",
      "접지측 회로에는 변류기 CT2가 피뢰기의 방전전류를 검지하여 변류기 2차측의 ArrOCR을 여자시킨다.",
      "DCArr은 직류모진이 발생되었을 경우 동작한다."
    ],
    "answer": 3,
    "explanation": "DCArr은 '교류 모진'(AC 전원이 DC 회로로 유입) 또는 직류 구간 외부 서지 유입 시 동작한다. (직류 모진은 MFs가 보호함)",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_064",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 ArrOCR이 여자될 경우 현상으로 틀린 것은?",
    "options": [
      "ArrOCR의 여자로 MCB가 사고차단이 된다.",
      "운전실 제어대 Fault등 및 고장차량 차측등(백색)이 점등된다.",
      "운전실 모니터에 해당 차량 “AC 1차 과전류”가 표시된다.",
      "전차선 단전으로 AC등이 소등되며 해당 유니트의 MCB만 차단된다."
    ],
    "answer": 3,
    "explanation": "ArrOCR 동작 시 전차선 단전으로 인해 모든 차량의 MCB가 차단된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_065",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 주퓨즈(MFs)에 대한 설명으로 틀린 것은?",
    "options": [
      "MFs가 용단되면 우측 끝의 적색단추가 20mm 돌출된다.",
      "Arc의 불꽃과 높은 열로 붕산 → 물 → 수증기 순서로 변하여 수증기가 소호작용을 한다.",
      "MFs는 M'차 옥상에 배치되어 있다.",
      "과대 전류에 의한 MT소손을 방지하기 위하여 전기동차 AC측 회로 ADCg와 MT 사이에 있다."
    ],
    "answer": 0,
    "explanation": "MFs 용단 시 적색 단추는 30mm 돌출된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_066",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 축전지 방전 방지회로에 대한 설명으로 틀린 것은?",
    "options": [
      "차량유치 중 전차선 단전이 발생할 경우에 3분 후 Pan을 하강시켜 103선 가압회로를 차단함으로 축전지 방전을 방지하기 위한 회로를 말한다.",
      "SIVK가 무여자가 되면 PDARTR이 무여자 된다.",
      "PDARTR은 SIV가 전체 기동되면 여자된다.",
      "장시간 단전이 발생되어 EOCN을 투입시키면 객실 방공등이 점등된다."
    ],
    "answer": 2,
    "explanation": "PDARTR은 SIV가 1대만 기동되어도 여자 된다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_067",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "ADS를 AC위치로 취급 시 어느 선이 가압되는가?",
    "options": [
      "1선",
      "2선",
      "7선",
      "8선"
    ],
    "answer": 2,
    "explanation": "ADS를 AC 위치로 하면 7선이 가압된다. (DC는 8선)",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_068",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 교직절연구간의 길이로 맞는 것은?",
    "options": [
      "7m",
      "13m",
      "22m",
      "66m"
    ],
    "answer": 3,
    "explanation": "교직 절연 구간의 길이는 66m이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_069",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "전기동차가 교직절연구간을 통과할 때 기본적인 운전취급으로 틀린 설명은?",
    "options": [
      "절연구간 예고방송은 절연구간 예고표지 지나서 시작된다.",
      "절연구간 예고표지 전방에서 회생제동을 수동으로 차단한다.",
      "교직절환 취급 후 MCB 차단 및 투입은 일체차단, 순차투입의 순서로 된다.",
      "절연구간은 무동력 운전으로 통과한다."
    ],
    "answer": 0,
    "explanation": "절연 구간 예고 방송은 절연 구간 예고 표지 전방에서 시작한다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_071",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 절연구간 검지주파수로 옳은 것은?",
    "options": [
      "62KHz",
      "68KHz",
      "74KHz",
      "80KHz"
    ],
    "answer": 1,
    "explanation": "절연 구간 검지 주파수는 68KHz이다.",
    "source": "A_전기동차_2장_특고압회로"
  },
  {
    "id": "license_core_3_2_072",
    "subject": "emu",
    "chapter": "2장 특고압 회로",
    "question": "다음 중 ATC/ATS 절환에 대한 설명으로 틀린 것은?",
    "options": [
      "ATC구간을 운행하는 중 ATS구간에 접근하면, ATS 지상자의 절환신호(Ro)를 수신하여 차상장치 에서 CgSR을 여자시킨다.",
      "ATC 위치에서는 ATCCgS가 잠금상태로 된다.",
      "CgSRR 여자로 ATS 절환방송이 출력되면 제동 2단이상 위치에서 잠금상태가 풀린다.",
      "CNSR의 여자로 ATC 절환방송이 출력된다."
    ],
    "answer": 2,
    "explanation": "절환 방송 후 제동 2단 이상에서 잠금 상태가 풀린다는 구체적인 내용은 표준 교재 2장의 텍스트에 명시되지 않았거나, 절환 스위치 조작 조건(정차 등)과 다를 수 있다. (일반적으로 정차 후 절환)",
    "source": "A_전기동차_2장_특고압회로"
  }
];
