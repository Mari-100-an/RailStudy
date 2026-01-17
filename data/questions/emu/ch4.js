/**
 * 전기동차 구조 및 기능 - 4단원 문제
 */
var QUESTIONS_EMU_CH4 = [
     {
    "id": "train_4_001",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "고압보조 장치에 대한 설명으로 옳은 것은?",
    "options": [
      "AC 25,000V를 공급받아 구동하는 장치들을 말한다.",
      "DC 1,500V~1,800V를 공급받아 구동하는 보조전원장치(SIV)와 그 부하 기기들을 말한다.",
      "견인전동기(TM)를 포함하여 고전압을 사용하는 모든 장치를 말한다.",
      "주로 운전실 내의 저압 제어 기기들을 지칭한다."
    ],
    "answer": 1,
    "explanation": "전기동차의 고압보조 장치는 직류(DC) 1500V~1800V를 공급받아 구동하는 보조전원 장치(SIV)와 SIV의 출력 전원을 공급받아 작용하는 기기들을 말한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_002",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "보조전원장치(SIV)의 주요 역할로 옳은 것은?",
    "options": [
      "DC 1,500V를 AC 25,000V로 승압하여 견인전동기에 공급한다.",
      "DC 1,500V를 입력받아 AC 3상 440V 60Hz 전력을 만들어 각종 보조기기에 공급한다.",
      "AC 440V를 입력받아 DC 100V로 변환하여 전차선에 공급한다.",
      "공기압축기를 기계적으로 회전시키는 역할을 한다."
    ],
    "answer": 1,
    "explanation": "SIV는 DC1500V~1800V를 입력받아 AC3상 440V 60Hz의 전력을 만들어서 공기압축기, 냉·난방장치 등에 공급한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_003",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "다음 중 SIV의 출력 전원(AC 440V)으로 구동되는 기기가 아닌 것은?",
    "options": [
      "전동공기압축기 (CM)",
      "주변환기 송풍기 (CIBM)",
      "견인전동기 (TM)",
      "주변압기 오일펌프 (MTOM)"
    ],
    "answer": 2,
    "explanation": "견인전동기(TM)는 견인제어 장치(주 제어장치)에 의해 제어되며 SIV 전원을 사용하지 않는다. CM, CIBM, MTOM, FLBM 등은 SIV 전원으로 구동된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_004",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "보조전원장치(SIV)의 정격 용량(AC 출력)은?",
    "options": [
      "100KVA",
      "150KVA",
      "190KVA",
      "220KVA"
    ],
    "answer": 2,
    "explanation": "SIV의 AC 출력 정격용량은 190KVA(직류 출력 포함)이다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_005",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "SIV 주회로 방식과 제어 방식으로 옳은 조합은?",
    "options": [
      "6상 GTO 인버터 - VVVF 제어",
      "12상 IGBT 인버터 - PWM 제어",
      "4상 IGBT 인버터 - CVCF 제어",
      "12상 GTO 인버터 - PAM 제어"
    ],
    "answer": 1,
    "explanation": "SIV의 주회로 방식은 12상 IGBT Inverter이며, 제어 방식은 PWM 제어 방식이다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_006",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "SIV 구성 기기 중 'HK(방전 Contactor)'의 동작 설명으로 옳은 것은?",
    "options": [
      "SIV 정상 구동 시 투입되어 있다.",
      "Normal Open Type으로 동작 시 투입된다.",
      "SIV 정지 시 투입되어 FC에 충전된 전하를 방전한다.",
      "입력 전압을 평활하게 하는 리액터이다."
    ],
    "answer": 2,
    "explanation": "HK는 Normal Close Type(동작 시 차단)으로 SIV 정상 구동 시는 차단(동작)되어 있고, SIV 정지 시는 투입(복귀)되어 FC의 전하를 방전한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_007",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "AC 구간에서 SIV에 전원이 공급되는 경로는?",
    "options": [
      "전차선 → Pan → MCB → L1 → SIV",
      "전차선 → Pan → MCB → MT → 주변환기(Converter) → L3 → ADd2 → BF2 → SIV",
      "전차선 → Pan → L1 → MT → SIV",
      "축전지 → SIV Inverter → SIV"
    ],
    "answer": 1,
    "explanation": "교류(AC) 구간: 전차선 → Pan → MCB → ADCg(AC) → MFs → MT → 주변환기(Converter) → L3 → ADd2 → BF2 → 701선 → SIV 순서이다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_008",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "SIV 경고장(Minor Fault) 발생 시의 동작 특성은?",
    "options": [
      "SIVFR이 여자 되고 Fault등이 점등된다.",
      "즉시 MCB가 차단된다.",
      "3초 후 자동 Reset 신호로 재기동하며 60초간 감시한다.",
      "연장 급전 회로가 자동으로 구성된다."
    ],
    "answer": 2,
    "explanation": "경고장은 TGIS에 현시되지 않고 Fault등도 점등되지 않으며, SIV 정지 3초 후 자동 Reset 신호로 재기동하여 60초간 감시 시간을 갖는다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_009",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "SIV 중고장(Major Fault)이 발생하는 경우가 아닌 것은?",
    "options": [
      "경고장 발생 후 감시 시간(60초) 내 재고장이 발생한 경우",
      "IVF(퓨즈)가 용손된 경우",
      "BF2가 용손된 경우",
      "일시적인 입력 전압 변동의 경우"
    ],
    "answer": 3,
    "explanation": "일시적인 전압 변동 등은 경고장으로 처리되어 자동 복귀될 수 있다. 중고장은 경고장 재발생, IVF 용손, BF2 용손 등의 경우이다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_010",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "SIV 출력 회로 단락(ASOC) 발생 시 연장 급전 회로가 구성되지 않도록 하는 이유는?",
    "options": [
      "연장 급전 접촉기(ESK)가 고장 나기 때문에",
      "연장 급전 시 공급해 주는 정상 SIV도 동일 원인으로 고장 나게 되기 때문에",
      "배터리가 방전되기 때문에",
      "전차선 전압이 상승하기 때문에"
    ],
    "answer": 1,
    "explanation": "부하 측 단락으로 인한 고장 시 연장 급전을 하면, 전원을 공급해 주는 정상 SIV까지 과전류로 정지하게 되므로 ASOCR을 여자 시켜 연장 급전을 막는다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_011",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "연장 급전 취급을 위해 사용하는 'ESPS'는 무엇의 약자인가?",
    "options": [
      "Extension Supply Power Switch",
      "Electric SIV Power Switch",
      "Emergency Supply Power Switch",
      "Extension Supply Panel Switch"
    ],
    "answer": 0,
    "explanation": "ESPS는 연장급전 스위치(Extension Supply Power Switch)이다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_012",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "연장 급전이 구성되기 위해 반드시 차단되어야 하는 차단기는?",
    "options": [
      "MCB (주차단기)",
      "IVCN (SIV 제어 NFB)",
      "CMN (공기압축기 NFB)",
      "MTN (주변압기 NFB)"
    ],
    "answer": 1,
    "explanation": "연장 급전을 취급한다는 것은 IVCN이 차단되어야 연장 급전 회로가 구성된다는 것을 의미한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_013",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "중간 Unit(T1차) SIV 고장 시 ESS(연장급전 선택 스위치)를 '①' 위치로 설정하는 이유는?",
    "options": [
      "후부 Unit에서 전원을 받으면 7량의 부하를 담당하게 되어 과부하가 걸리기 때문에",
      "전부 Unit SIV는 용량이 더 크기 때문에",
      "자동으로 ① 위치로 복귀되기 때문에",
      "① 위치가 '자차' 위치이기 때문에"
    ],
    "answer": 0,
    "explanation": "중간 Unit 고장 시 ESS를 '①'로 하면 전부 Unit(6량 담당)에서 받고, '②'로 하면 후부 Unit(7량 담당)에서 받게 되는데, 후부 Unit의 부하 부담을 줄이기 위해 '①' 위치로 한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_014",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "연장 급전(IVCN 차단) 취급 후 나타나는 현상으로 틀린 것은?",
    "options": [
      "고장 Unit의 SIV는 구동 불능이 된다.",
      "전체 차량의 객실등이 반감된다.",
      "냉방 FULL 취급 시에도 HALF 냉방으로 가동된다.",
      "고장 Unit의 동력 운전 장치 출력은 50%로 감소한다."
    ],
    "answer": 3,
    "explanation": "연장 급전 시 고장 Unit의 고압 보조기기는 정상 가동되며, 동력 운전 장치 출력도 정상화된다 (감소하지 않음).",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_015",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "전동 공기압축기(CM)의 구동 전동기 사양으로 옳은 것은?",
    "options": [
      "DC 1,500V 직류 전동기",
      "AC 440V 60Hz 교류 유도전동기",
      "AC 220V 단상 유도전동기",
      "DC 100V 직류 전동기"
    ],
    "answer": 1,
    "explanation": "VVVF 전기동차의 CM은 SIV 전원인 AC 440V 60Hz 교류 유도전동기를 사용한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_016",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "CM의 안전밸브가 동작하는 설정 압력은?",
    "options": [
      "8.0 ± 0.1 kg/cm²",
      "9.0 ± 0.1 kg/cm²",
      "9.7 ± 0.1 kg/cm²",
      "10.5 ± 0.1 kg/cm²"
    ],
    "answer": 2,
    "explanation": "안전밸브는 설정된 압력인 9.7 ± 0.1 Kg/cm²를 초과했을 경우 자동으로 압축공기를 방출한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_017",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "공기압축기 조정 스위치(CM-G)의 작동 범위(ON/OFF)는?",
    "options": [
      "7.0 kg/cm² 이하 ON / 8.0 kg/cm² 이상 OFF",
      "8.0 kg/cm² 이하 ON / 9.0 kg/cm² 이상 OFF",
      "6.0 kg/cm² 이하 ON / 7.0 kg/cm² 이상 OFF",
      "9.0 kg/cm² 이하 ON / 10.0 kg/cm² 이상 OFF"
    ],
    "answer": 1,
    "explanation": "CM-G는 MR 압력이 8.0 Kg/cm² 이하로 떨어지면 ON, 9.0 Kg/cm² 이상 되면 OFF 된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_018",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "CM 인버터 고장 시 BY-PASS 구동의 순서는?",
    "options": [
      "즉시 직기동한다.",
      "3초 후 1단 구동 → 3초 후 2단 구동",
      "5초 후 1단 구동(CML 경유) → 5초 후 2단 구동(직기동)",
      "운전실에서 수동으로 스위치를 조작해야 한다."
    ],
    "answer": 2,
    "explanation": "인버터 고장 시 5초 후 CML을 거쳐 1단 구동(저속)하고, 다시 5초 후 CML을 거치지 않고 2단 구동(고속)한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_019",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "CM 동기구동 회로를 구성하는 점퍼선 번호와 차단기 명칭은?",
    "options": [
      "103선, IVCN",
      "112선, CMCN",
      "27선, HCRN",
      "169선, ESKN"
    ],
    "answer": 1,
    "explanation": "동기구동 회로는 CMCN을 통하여 112선으로 3대의 CM 구동 제어회로를 연결한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_020",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "CM-G가 용착되어 CM이 계속 구동할 때의 조치 방법은?",
    "options": [
      "해당 차량의 CMGN을 OFF 한다.",
      "해당 차량의 CMCN만 OFF 한다.",
      "전체 차량의 Pan을 하강한다.",
      "비상제동을 체결한다."
    ],
    "answer": 0,
    "explanation": "순차적으로 CMGN을 OFF 하여 전체 CM이 정지하면 해당 차량의 CMGN을 OFF 한 상태로 운행한다. (동기구동 회로에 의해 타 차량 신호로 구동 가능)",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_021",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "CM 보호장치인 EOCR(과전류계전기)이 동작하는 경우는?",
    "options": [
      "정상 인버터 구동 시",
      "BY-PASS 구동 시 출력 전류가 정격 전류를 초과할 때",
      "주공기 압력이 낮을 때",
      "SIV 전압이 높을 때"
    ],
    "answer": 1,
    "explanation": "EOCR은 CM 인버터 고장으로 바이패스(bypass) 회로가 구성되었을 때, 과전류가 흐르면 동작하여 CM을 정지시킨다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_022",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "주변환기 송풍기(CIBM)의 보호 동작 설명으로 옳은 것은?",
    "options": [
      "CIBMN이 차단되면 즉시 MCB가 차단된다.",
      "M차 CIBMN 차단 시 M차 동력만 불능이 된다.",
      "M'차 CIBMN 차단 시 SIV는 정상 작동한다.",
      "BMFR이 소자(무여자) 된다."
    ],
    "answer": 1,
    "explanation": "M차 CIBMN 차단 시 BMFR이 여자 되어 M차 TCU에 고장 신호를 보내 동력운전 및 회생제동만 불능이 된다. (M'차의 경우 SIV 정지 및 MCB 차단)",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_023",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "고압보조 장치 확인계전기(APR)가 무여자 될 때의 현상은?",
    "options": [
      "SIV가 기동된다.",
      "동력 운전 및 회생 제동이 불가능해진다.",
      "비상제동이 체결된다.",
      "출입문이 열린다."
    ],
    "answer": 1,
    "explanation": "APR이 무여자 되면 각 차량 TCU에 BMF 입력으로 C/I가 정지하고 동력 운전 및 회생제동이 동작하지 않게 된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_024",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "주변압기(MT) 냉각 계통 고장으로 MTAR이 여자 되면 발생하는 현상은?",
    "options": [
      "경보음만 울린다.",
      "SIV만 정지한다.",
      "MCB가 차단된다.",
      "연장 급전이 자동으로 된다."
    ],
    "answer": 2,
    "explanation": "MTAR(주변압기 보조계전기)이 여자 되면 MCBR1이 무여자 되어 MCB가 차단된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_025",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "객실 난방 350W 취급 시 연장 급전 상태라면 어떻게 동작하는가?",
    "options": [
      "정상적으로 350W 가동된다.",
      "700W로 가동된다.",
      "가동되지 않는다.",
      "1050W로 가동된다."
    ],
    "answer": 2,
    "explanation": "연장 급전 시 LRR1이 여자 되어 RHeR2의 여자 조건(LRR1-b접점)을 차단하므로 350W 난방은 가동되지 않는다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_026",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "객실 냉방 장치 제어에서 '반 냉방(HALF)' 위치 시 가동되는 기기는?",
    "options": [
      "송풍기(EF)만 가동",
      "압축기 1대(CP1)와 응축기 1대(CF1) 및 송풍기 가동",
      "압축기 2대(CP1, CP2)와 응축기 2대(CF1, CF2) 가동",
      "난방기와 냉방기가 동시에 가동"
    ],
    "answer": 1,
    "explanation": "HALF 위치에서는 MC1이 투입되어 CP1, CF1이 구동하여 반 냉방을 한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_027",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "냉방 장치에 사용되는 냉매제의 종류는?",
    "options": [
      "R12",
      "R22",
      "암모니아",
      "이산화탄소"
    ],
    "answer": 1,
    "explanation": "냉매제는 냉매 Gas(R22)를 사용한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_028",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "연장 급전 시 객실 냉방 'FULL' 위치 취급 시의 동작 상태는?",
    "options": [
      "FULL 냉방으로 정상 가동된다.",
      "HALF 냉방으로 가동된다.",
      "냉방이 정지된다.",
      "송풍(FAN)만 가동된다."
    ],
    "answer": 1,
    "explanation": "연장 급전 시 LRR1이 여자 되어 UCR3를 무여자 시키므로 CP2, CF2가 정지하여 HALF 냉방 상태가 된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_029",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "SIV 정지 시 FC(필터 커패시터)의 잔류 전하를 방전시키는 장치는?",
    "options": [
      "IVHB",
      "HK (방전 접촉기)",
      "CH1",
      "IVF"
    ],
    "answer": 1,
    "explanation": "SIV 정지 시에는 HK가 투입(닫힘)되어 FC에 충전된 전하를 안전하게 방전한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_030",
    "subject": "emu",
    "chapter": "4장 고압보조 장치",
    "question": "교-교 절연 구간 통과 시 SIV가 정지하지 않도록 돕는 전류 평형용 저항기의 약어는?",
    "options": [
      "EqRe",
      "ESK",
      "DCHRe",
      "CHR"
    ],
    "answer": 0,
    "explanation": "EqRe(전류 평형용 저항기)는 AC 전차선 구간의 교-교 절연 구간 통과 시 SIV가 정지되지 않고 통과할 수 있도록 한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_1_001",
    "subject": "emu",
    "chapter": "4.1 고압보조 장치 개요",
    "question": "다음 중 고압보조 장치의 정의에 부합하지 않는 것은?",
    "options": [
      "DC 1,500V~1,800V를 공급받아 구동하는 보조전원장치(SIV)",
      "SIV의 출력 전원(AC 440V)을 공급받아 작동하는 공기압축기(CM)",
      "DC 1,500V를 사용하여 전기동차를 견인하는 견인전동기(TM)",
      "AC 440V 연장급전 장치"
    ],
    "answer": 2,
    "explanation": "DC 1,500V를 사용하는 견인전동기(TM) 장치는 견인제어 장치(주 제어장치)로 정의하며, 고압보조 장치와는 구별된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_1_002",
    "subject": "emu",
    "chapter": "4.1 고압보조 장치 개요",
    "question": "10량 편성 전기동차의 고압보조 장치(SIV) 배치 및 전원 공급 구성으로 옳은 것은?",
    "options": [
      "TC1 SIV: 2량 공급, T1 SIV: 4량 공급, TC2 SIV: 4량 공급",
      "TC1 SIV: 3량(전부 Unit), T1 SIV: 3량(중간 Unit), TC2 SIV: 4량(후부 Unit) 공급",
      "모든 SIV가 병렬로 연결되어 전체 10량에 동시에 공급",
      "M'차마다 SIV가 설치되어 해당 Unit 2량에만 공급"
    ],
    "answer": 1,
    "explanation": "TC1 차량 SIV는 전부 Unit 3량, T1 차량 SIV는 중간 Unit 3량, TC2 차량 SIV는 나머지 4량에 전원을 공급하도록 구성되어 있다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_2_001",
    "subject": "emu",
    "chapter": "4.2 보조전원 장치(SIV)",
    "question": "SIV의 주요 구성 요소 중 입력 전원(DC 1,500V)의 Ripple 전류를 평활하게 하고 L-C 공진회로를 이용해 고조파를 제거하는 기기는?",
    "options": [
      "FC (Filter Capacitor)",
      "FL (Filter Reactor)",
      "SL (Smoothing Reactor)",
      "CH (Chopper)"
    ],
    "answer": 1,
    "explanation": "FL(Filter 리액터)은 입력전원(DC 1500V)의 Ripple 전류를 평활하게 하고 L-C 공진회로를 이용하여 고조파를 제거한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_2_002",
    "subject": "emu",
    "chapter": "4.2 보조전원 장치(SIV)",
    "question": "SIV 구성 중 '충전장치'의 변환 과정으로 옳은 것은?",
    "options": [
      "입력 DC 1,500V → DC 100V 변환",
      "SIV 출력 AC 440V → AC 76V(강압) → DC 100V(정류)",
      "배터리 DC 84V → DC 100V 승압",
      "AC 440V → DC 24V 변환"
    ],
    "answer": 1,
    "explanation": "충전장치는 SIV 출력 전원인 AC 440V를 BCT에서 AC 76V로 강압한 후 정류장치(RF)를 거쳐 DC 100V로 정류하여 공급한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_2_003",
    "subject": "emu",
    "chapter": "4.2 보조전원 장치(SIV)",
    "question": "SIV 기동 제어 회로에서 SIV 기동 명령 신호를 제어장치에 입력하기 위해 거치는 접점은? (직류 구간 기준)",
    "options": [
      "IVCN → AMCN → L1RR(a) → 114b선",
      "IVCN → SIVSR(a) → 115선",
      "MCBN → MCBR1(a) → 114b선",
      "ESKN → IVCN(b) → 114b선"
    ],
    "answer": 0,
    "explanation": "직류 구간에서는 M'차 103선 제어전원 → AMCN → L1RR(a) 접점을 거쳐 114b선으로 SIV 기동 명령이 입력된다. (교류 구간은 SIVSR(a))",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_2_004",
    "subject": "emu",
    "chapter": "4.2 보조전원 장치(SIV)",
    "question": "SIV 기동 시퀀스 중 IVHB 투입 후 쵸퍼 장치가 동작하기 위해 필요한 초기 조건은?",
    "options": [
      "FC1, FC2에 초기 충전이 2분압 되고 BT(보조 Thyristor)가 On 되어야 한다.",
      "SIVK가 먼저 투입되어 부하가 연결되어야 한다.",
      "HK가 개방되지 않아야 한다.",
      "출력 전압이 AC 440V에 도달해야 한다."
    ],
    "answer": 0,
    "explanation": "IVHB 투입 후 FC1, FC2에 초기 충전이 2분압 되고 BT(보조 Thyristor)에 Gate 점호로 ON 되면 DC 1,500V가 공급되고 쵸퍼 장치가 동작을 시작한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_2_005",
    "subject": "emu",
    "chapter": "4.2 보조전원 장치(SIV)",
    "question": "SIV 보호 동작 중 '경고장' 발생 시 자동 재기동(Reset) 시퀀스로 옳은 것은?",
    "options": [
      "즉시 재기동하며 감시 시간 없음",
      "SIV 정지 3초 후 자동 Reset 신호로 재기동하며, 60초간 감시",
      "운전실에서 RS 취급 시에만 재기동",
      "10초 후 재기동하며 재고장 시 무시함"
    ],
    "answer": 1,
    "explanation": "경고장은 SIV 정지 3초 후 자동 Reset 신호로 재기동하며, 이후 60초간 이상 상태를 감시한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_2_006",
    "subject": "emu",
    "chapter": "4.2 보조전원 장치(SIV)",
    "question": "SIV 중고장 발생 시 운전실 모니터 현시 및 표시등 상태는?",
    "options": [
      "아무런 표시가 없다.",
      "TGIS에 'SIV 통신 이상' 현시 및 Fault등 소등",
      "TGIS에 'SIV 고장' 현시, Fault등 및 해당 차 차측등 점등",
      "MCB OFF등만 점등"
    ],
    "answer": 2,
    "explanation": "중고장 시에는 SIVFR이 여자 되어 TGIS 모니터에 'SIV 고장'이 현시되고, Fault등과 고장 차량 차측등이 점등된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_2_007",
    "subject": "emu",
    "chapter": "4.2 보조전원 장치(SIV)",
    "question": "SIV 중고장 발생 후 고장 복귀(Reset)를 위한 운전실 조작 순서는?",
    "options": [
      "RS 버튼을 누른다. (MCB 투입 상태)",
      "MCBOS → RS → 3초 후 MCBCS 취급",
      "ESPS를 취급한다.",
      "PanDS 후 PanUS 취급"
    ],
    "answer": 1,
    "explanation": "중고장 발생 시 60초 후 MCB가 차단되므로, 운전실에서 MCBOS → RS → 3초 후 MCBCS 취급으로 복귀를 시도한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_2_008",
    "subject": "emu",
    "chapter": "4.2 보조전원 장치(SIV)",
    "question": "교-교 절연 구간 통과 시 SIV가 정지하지 않도록 정상 Unit에서 전원을 공급하여 평형을 맞추는 장치는?",
    "options": [
      "EqRe (전류 평형용 저항기)",
      "ESK (연장급전 접촉기)",
      "HK (방전 접촉기)",
      "IVS (나이프 스위치)"
    ],
    "answer": 0,
    "explanation": "EqRe(전류 평형용 저항기)는 AC 전차선 구간의 교-교 절연 구간 통과 시 SIV가 정지되지 않고 통과할 수 있도록 돕는다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_3_001",
    "subject": "emu",
    "chapter": "4.3 AC440V 연장급전",
    "question": "운전실 ESPS 취급으로 연장급전이 가능한 조건(고장 유형)은?",
    "options": [
      "Pan 파손으로 인한 SIV 정지 시",
      "SIV 자체 고장(중고장)으로 SIVFR이 여자 된 경우",
      "C/I 고장으로 SIV 전원이 차단된 경우",
      "주 퓨즈(MFs) 용단 시"
    ],
    "answer": 1,
    "explanation": "ESPS 취급으로 연장급전이 가능한 경우는 SIV 중고장 발생으로 SIVFR이 여자 된 경우에만 해당한다. 그 외는 직접 IVCN을 차단해야 한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_3_002",
    "subject": "emu",
    "chapter": "4.3 AC440V 연장급전",
    "question": "연장급전 시 T차(3호차, 6호차)에 설치된 ESK(연장급전 접촉기)를 투입시키는 선 번호는?",
    "options": [
      "168선",
      "169선",
      "103선",
      "115선"
    ],
    "answer": 0,
    "explanation": "ESS 선택 위치에 따라 가압된 168선이 T차의 ESKS(10량 위치)를 거쳐 ESK 투입 코일을 여자 시킨다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_3_003",
    "subject": "emu",
    "chapter": "4.3 AC440V 연장급전",
    "question": "연장급전 시 전체 차량의 부하를 감소시키기 위해 여자 되는 계전기는?",
    "options": [
      "LRR1, LRR2",
      "SIVK, IVHB",
      "ASOCR",
      "CMETR"
    ],
    "answer": 0,
    "explanation": "연장급전 시 169선 가압으로 전 차량의 LRRN을 거쳐 LRR1, LRR2(부하 감소 계전기)가 여자 되어 객실등 반감, 냉난방 부하 조절 등을 수행한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_3_004",
    "subject": "emu",
    "chapter": "4.3 AC440V 연장급전",
    "question": "전부 Unit SIV 고장 시 연장급전 회로 구성에서, 고장차량의 IVCN이 자동 차단되게 하는 계전기 동작 순서는?",
    "options": [
      "SIVFR(a) → ASOCR(b) → ESAR(a) → IVCN(Trip) Coil 여자",
      "ESAR(a) → SIVFR(b) → IVCN(Trip) Coil 여자",
      "ASOCR(a) → ESAR(a) → IVCN(Trip) Coil 여자",
      "SIVK(b) → ESAR(a) → IVCN(Trip) Coil 여자"
    ],
    "answer": 0,
    "explanation": "ESPS 취급 시 ESAR이 여자 되고, 고장으로 SIVFR이 여자 된 상태이므로 SIVFR(a)-ASOCR(b)-ESAR(a) 회로를 통해 IVCN Trip 코일이 여자 된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_3_005",
    "subject": "emu",
    "chapter": "4.3 AC440V 연장급전",
    "question": "중간 Unit(T1) SIV 고장 시 ESS를 '②' 위치로 선택했을 때 발생하는 문제점은?",
    "options": [
      "전부 Unit SIV에서 전원을 공급받게 된다.",
      "후부 Unit SIV에서 전원을 받으며 7량의 부하를 담당하게 되어 과부하 우려가 있다.",
      "연장급전 회로 자체가 구성되지 않는다.",
      "중간 Unit SIV가 재기동한다."
    ],
    "answer": 1,
    "explanation": "ESS를 '②' 위치로 하면 후부 Unit SIV에서 전원을 공급받는데, 이때는 7량의 전원을 담당하게 되어 부하가 많이 걸리므로 '①' 위치(전부 Unit 공급, 6량 담당)를 권장한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_3_006",
    "subject": "emu",
    "chapter": "4.3 AC440V 연장급전",
    "question": "AMCS(자동 연장급전 스위치)가 '자동' 위치일 때의 동작은?",
    "options": [
      "SIV 경고장 시에도 연장급전이 된다.",
      "SIV 고장으로 SIVFR 여자 시 자동으로 IVCN Trip 회로가 구성되어 연장급전된다.",
      "운전실 ESPS 취급을 차단한다.",
      "모든 고장에 대해 연장급전을 시행한다."
    ],
    "answer": 1,
    "explanation": "AMCS가 '자동' 위치에 있으면 SIVFR 여자 시 운전실 ESPS 취급 없이도 자동으로 IVCN Trip 계전기 여자 회로가 구성되어 연장급전이 이루어진다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_3_007",
    "subject": "emu",
    "chapter": "4.3 AC440V 연장급전",
    "question": "연장급전 취급 후 TGIS 모니터의 표시 상태로 옳은 것은?",
    "options": [
      "차량 상태: SIV 정상, 운전 상태: 정상",
      "차량 상태: 연장급전 표시, 운전 상태: SIV 통신 이상",
      "차량 상태: SIV 고장, 운전 상태: SIV 고장",
      "차량 상태: 연장급전 표시, 운전 상태: SIV 정상"
    ],
    "answer": 1,
    "explanation": "IVCN이 차단되어 연장급전이 구성되면 모니터의 '차량상태'에는 연장급전 상태가, '운전상태'에는 'SIV 통신 이상'이 표시된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_3_008",
    "subject": "emu",
    "chapter": "4.3 AC440V 연장급전",
    "question": "연장급전이 불가능하여 수동으로 조치해야 할 때 확인해야 할 스위치 위치가 아닌 것은?",
    "options": [
      "해당 SIV 차량의 ESS 위치 (자차 N 위치인지 확인)",
      "T차 배전반 내 ESKS 위치 (T 위치인지 확인)",
      "고장 차량 IVCN 차단 여부",
      "운전실 PanDS 스위치 위치"
    ],
    "answer": 3,
    "explanation": "연장급전 불능 시 ESS(자차 위치 확인), ESKS(T 위치 확인), IVCN(차단 확인) 등을 점검해야 한다. PanDS 위치는 연장급전 회로 구성과 직접 관계없다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_3_009",
    "subject": "emu",
    "chapter": "4.3 AC440V 연장급전",
    "question": "연장급전 시 SIV 보호를 위해 가동이 제한되는 난방 부하는?",
    "options": [
      "350W 난방",
      "700W 난방",
      "1,050W 난방 전체",
      "운전실 난방"
    ],
    "answer": 0,
    "explanation": "연장급전 시 169선 가압으로 LRR1이 여자 되어 350W 난방 회로를 차단하므로, 350W 난방(또는 1050W 중 350W 부분)은 가동되지 않는다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_3_010",
    "subject": "emu",
    "chapter": "4.3 AC440V 연장급전",
    "question": "SIV AC 출력 회로 단락(ASOC) 고장 시 연장급전 회로 구성을 차단하는 계전기는?",
    "options": [
      "SIVFR",
      "ASOCR",
      "ESAR",
      "LRR1"
    ],
    "answer": 1,
    "explanation": "ASOC 발생 시 ASOCR이 여자 되어 연장급전 회로(IVCN Trip 회로 및 169선 가압 회로)를 차단(b접점)하여 연장급전을 방지한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_4_001",
    "subject": "emu",
    "chapter": "4.4 전동 공기압축기(CM)",
    "question": "VVVF 전기동차의 전동 공기압축기(CM)에 사용되는 전동기의 종류는?",
    "options": [
      "DC 1,500V 직류 전동기",
      "AC 440V 3상 유도전동기",
      "DC 100V 직류 전동기",
      "AC 220V 단상 유도전동기"
    ],
    "answer": 1,
    "explanation": "VVVF 전기동차는 SIV 전원인 AC 440V 60Hz 교류 유도전동기를 사용한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_4_002",
    "subject": "emu",
    "chapter": "4.4 전동 공기압축기(CM)",
    "question": "스크루형(Screw Type) 공기압축기의 특징으로 옳은 것은?",
    "options": [
      "왕복 운동을 통해 공기를 압축한다.",
      "암수 로터가 맞물려 회전하며 연속적으로 압축한다.",
      "진동과 소음이 실린더형보다 크다.",
      "직류 전동기만 사용할 수 있다."
    ],
    "answer": 1,
    "explanation": "스크루형은 암수 로터가 서로 맞물려 회전하면서 공기를 연속적으로 압축하므로 진동 및 맥동이 적다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_4_003",
    "subject": "emu",
    "chapter": "4.4 전동 공기압축기(CM)",
    "question": "트윈 타워 공기건조기의 동작 주기는?",
    "options": [
      "30초 간격",
      "1분 간격",
      "2분 간격",
      "5분 간격"
    ],
    "answer": 2,
    "explanation": "트윈 타워 건조기는 타이머에 의하여 2분 간격으로 교호로 동작하면서 제습 작용을 한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_4_004",
    "subject": "emu",
    "chapter": "4.4 전동 공기압축기(CM)",
    "question": "CM 정상 구동 회로에서 CMAR이 여자 되기 위한 조건이 아닌 것은?",
    "options": [
      "CMGN ON",
      "CM-G ON (압력 8.0kg/cm² 이하)",
      "Oil Th 정상 (온도 110℃ 이하)",
      "SIVSTR 여자 (SIV 고장 신호)"
    ],
    "answer": 3,
    "explanation": "CMAR이 여자 되려면 SIVSTR(b) 접점을 통해야 하므로, SIVSTR은 무여자 상태(SIV 정상)여야 한다. SIVSTR이 여자 되면 CMAR은 소자 된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_4_005",
    "subject": "emu",
    "chapter": "4.4 전동 공기압축기(CM)",
    "question": "CM 인버터 고장 시 BY-PASS 1단 구동(저속)을 위해 투입되는 접촉기는?",
    "options": [
      "CMK",
      "BCMK",
      "BCMLK",
      "CMKTR"
    ],
    "answer": 1,
    "explanation": "인버터 고장 5초 후 BCMK가 투입되어 CML(리액터)을 거쳐 전원이 공급되므로 1단(저속) 구동을 한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_4_006",
    "subject": "emu",
    "chapter": "4.4 전동 공기압축기(CM)",
    "question": "CM BY-PASS 2단 구동 시 회로의 변화는?",
    "options": [
      "CML을 거쳐 구동한다.",
      "BCMK가 차단된다.",
      "BCMLK가 투입되어 CML을 거치지 않고 전원을 공급한다.",
      "인버터가 다시 동작한다."
    ],
    "answer": 2,
    "explanation": "1단 구동 5초 후 BCMLK가 투입되면 CML을 거치지 않고 전원이 공급되어 2단(고속) 구동을 한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_4_007",
    "subject": "emu",
    "chapter": "4.4 전동 공기압축기(CM)",
    "question": "CM 동기구동 회로를 구성하는 핵심 부품(차단기)은?",
    "options": [
      "CMGN",
      "CMCN",
      "IVCN",
      "MTN"
    ],
    "answer": 1,
    "explanation": "동기구동 회로는 CMCN을 통하여 112선으로 3대의 CM 구동 제어회로를 연결한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_4_008",
    "subject": "emu",
    "chapter": "4.4 전동 공기압축기(CM)",
    "question": "CM-G가 용착되어 CM이 계속 구동할 때, MR 압력이 설정치(9.7kg/cm²)를 초과하면 동작하는 안전장치는?",
    "options": [
      "EOCR",
      "안전밸브 (Safety Valve)",
      "Oil Th",
      "자동배수 밸브"
    ],
    "answer": 1,
    "explanation": "안전밸브는 9.7±0.1Kg/cm²를 초과했을 경우 자동으로 압축공기를 대기로 방출시킨다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_4_009",
    "subject": "emu",
    "chapter": "4.4 전동 공기압축기(CM)",
    "question": "SIV 고장으로 연장급전 시 CM이 재기동하는 시간 지연은?",
    "options": [
      "즉시 기동",
      "3초 후",
      "5초 후",
      "10초 후"
    ],
    "answer": 1,
    "explanation": "연장급전 시 168선 가압으로 3초 후 CMETR이 여자 되어 SIVSTR을 무여자 시키므로 CMAR이 다시 여자 하여 3초 후 CM이 재기동한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_4_010",
    "subject": "emu",
    "chapter": "4.4 전동 공기압축기(CM)",
    "question": "CM 보호장치 중 'EOCR'의 역할은?",
    "options": [
      "인버터 구동 시 과전류 보호",
      "BY-PASS 구동 시 과전류 보호",
      "공기 압력 과다 상승 보호",
      "오일 온도 과열 보호"
    ],
    "answer": 1,
    "explanation": "EOCR(CM 과전류계전기)은 CM 인버터 고장으로 바이패스(bypass) 회로가 구성되었을 때 과전류를 감지하여 차단한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_5_001",
    "subject": "emu",
    "chapter": "4.5 송풍전동기(BM) 장치",
    "question": "주변환기 송풍전동기(CIBM)가 설치되지 않은 차량은?",
    "options": [
      "M차",
      "M'차",
      "IGBT 소자를 사용하는 신형 전동차",
      "GTO 소자를 사용하는 초기형 전동차"
    ],
    "answer": 2,
    "explanation": "신형 전동차의 주 변환장치는 IGBT 소자를 사용하여 Heat Sink를 이용한 자연 냉각 방식을 채택하였으므로 송풍전동기(CIBM)를 설치하지 않는다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_5_002",
    "subject": "emu",
    "chapter": "4.5 송풍전동기(BM) 장치",
    "question": "M'차의 CIBMN이 차단되었을 때 발생하는 현상으로 옳은 것은?",
    "options": [
      "M'차 동력만 차단된다.",
      "M'차 C/I 정지, SIV 정지, 60초 후 MCB 차단",
      "아무런 영향이 없다.",
      "비상제동이 체결된다."
    ],
    "answer": 1,
    "explanation": "M'차 CIBMN 차단 시 BMFR 여자 → M'차 TCU에 BMF 입력 → C/I 정지 → SIV 정지 → MT 냉각 중지 → 60초 후 MCB 차단 순으로 진행된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_5_003",
    "subject": "emu",
    "chapter": "4.5 송풍전동기(BM) 장치",
    "question": "직류 구간 운행 중 M차의 FLBMN이 차단되었을 때의 현상은?",
    "options": [
      "M차 동력 운전 및 회생제동 불능",
      "M'차까지 동력 차단",
      "MCB 차단",
      "SIV 정지"
    ],
    "answer": 0,
    "explanation": "M차 FLBMN 차단 → BMFR 여자 → M차 TCU에 BMF 입력 → C/I 정지 및 M차 동력/회생제동 불능. (M차는 SIV와 무관하므로 MCB 차단 안 됨)",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_5_004",
    "subject": "emu",
    "chapter": "4.5 송풍전동기(BM) 장치",
    "question": "주변압기(MT) 냉각 보호 회로에서 MTAR이 여자 되어 MCB가 차단되는 조건이 아닌 것은?",
    "options": [
      "MTOMN 차단 시",
      "MTBMK 차단 시",
      "CIBMN 차단 시",
      "MTOFTR 여자 시 (60초 후)"
    ],
    "answer": 2,
    "explanation": "MTAR 여자는 MTOM, MTBM 관련 차단기/접촉기 차단 또는 오일 흐름 불량(MTOFTR) 시 발생한다. CIBMN 차단은 BMFR을 여자 시킨다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_5_005",
    "subject": "emu",
    "chapter": "4.5 송풍전동기(BM) 장치",
    "question": "고압보조 장치 확인계전기(APR)의 역할은?",
    "options": [
      "SIV가 정상 구동 중임을 확인하여 송풍기 가동 신호를 준다.",
      "공기압축기를 구동한다.",
      "출입문을 제어한다.",
      "MCB 투입을 확인한다."
    ],
    "answer": 0,
    "explanation": "APR은 SIV 정상 구동을 확인하는 계전기로, 여자 되어야 각 TCU가 정상 동작(송풍기 등)을 유지한다. 무여자 시 C/I가 정지한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_6_001",
    "subject": "emu",
    "chapter": "4.6 냉·난방장치",
    "question": "객실 난방 제어에서 350W 히터를 가동하기 위해 여자 되는 계전기와 접촉기는?",
    "options": [
      "RHeR1, RHeK1",
      "RHeR2, RHeK2",
      "SCR1, MC1",
      "UCR1, MC3"
    ],
    "answer": 1,
    "explanation": "350W 히터는 RHeR2가 여자 되고 RHeK2 접촉기가 투입되어 가동된다. (700W는 RHeR1, RHeK1)",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_6_002",
    "subject": "emu",
    "chapter": "4.6 냉·난방장치",
    "question": "객실 냉방 'HALF' 위치 선택 시 가동되는 압축기와 응축기는?",
    "options": [
      "CP1, CF1",
      "CP2, CF2",
      "CP1, CP2, CF1, CF2",
      "작동하지 않음"
    ],
    "answer": 0,
    "explanation": "HALF 위치에서는 MC1이 투입되어 1번 압축기(CP1)와 1번 응축기(CF1)가 가동된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_6_003",
    "subject": "emu",
    "chapter": "4.6 냉·난방장치",
    "question": "연장급전 시 냉방을 'FULL' 위치로 해도 'HALF' 냉방만 되는 이유는?",
    "options": [
      "SIV 용량이 부족해서 자동으로 차단된다.",
      "LRR1 계전기가 여자 되어 UCR3의 여자 회로를 차단하기 때문이다.",
      "운전실 스위치가 고장 났기 때문이다.",
      "냉매가 부족하기 때문이다."
    ],
    "answer": 1,
    "explanation": "연장급전 시 부하 감소 계전기 LRR1이 여자 되며, LRR1(b) 접점이 UCR3(FULL 냉방 제어 계전기) 회로를 차단하여 CP2, CF2 구동을 막는다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_6_004",
    "subject": "emu",
    "chapter": "4.6 냉·난방장치",
    "question": "객실 난방 1,050W 취급 시 연장급전 상태에서의 동작은?",
    "options": [
      "1,050W 모두 정상 가동",
      "350W만 가동",
      "700W만 가동",
      "모두 가동 중지"
    ],
    "answer": 2,
    "explanation": "연장급전 시 LRR1 여자로 350W 제어 계전기(RHeR2)가 차단되므로, 700W 히터(RHeR1)만 가동된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "train_4_6_005",
    "subject": "emu",
    "chapter": "4.6 냉·난방장치",
    "question": "냉방 장치의 동작 순서(냉매 순환)로 옳은 것은?",
    "options": [
      "압축기 → 응축기 → 팽창밸브 → 증발기",
      "증발기 → 팽창밸브 → 응축기 → 압축기",
      "압축기 → 증발기 → 팽창밸브 → 응축기",
      "응축기 → 압축기 → 증발기 → 팽창밸브"
    ],
    "answer": 0,
    "explanation": "냉매 사이클: 압축기(고온고압 기체) → 응축기(액화) → 팽창밸브(저온저압) → 증발기(기화, 열흡수) 순서이다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_101",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 고압보조장치 기기에 관한 용어로 틀린 것은?",
    "options": [
      "주변환기 송풍기 : SIV전원인 AC440V 60Hz로 구동하고, 구동차인 M차와 M'차에 설치되어 있다.",
      "주변압기 오일펌프 전동기 : SIV전원인 AC440V 60Hz로 구동하며 Oil Pump의 구동 작용으로 MT 내 절연 오일을 순환하여 냉각작용을 하며 M차와 M'차에 설치되어 있다.",
      "전동공기 압축기 : SIV전원인 AC 440V 60Hz로 유도전동기를 구동하여 전기동차의 제동장치, 출입문장치, 제어장치 등에 필요한 압축공기를 생산한다.",
      "필터리액터 송풍기 : 전기동차가 직류구간 운행 시 동작하여 필터리액터의 냉각작용을 하며 SIV전원인 AC440V 60Hz로 구동하고 M차와 M'차에 설치되어 있다."
    ],
    "answer": 1,
    "explanation": "주변압기 오일펌프 전동기(MTOM)는 주변압기(MT)가 있는 M'차에만 설치되어 있다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_102",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 SIV 주요제원으로 틀린 것은?",
    "options": [
      "주위온도 : -25℃ ~ +40℃",
      "정격용량 : 190KVA",
      "DC출력 정격전압 : 200V",
      "제어전원 정격전압 : DC 100V"
    ],
    "answer": 2,
    "explanation": "SIV의 DC 출력 정격전압은 100V이다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_103",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 SIV 특징으로 틀린 설명은?",
    "options": [
      "자기보호 및 차단 기능을 갖추고 있다.",
      "안전을 위해 전동차를 기동한 상태에서만 고압 장치들을 검사할 수 있다.",
      "부하 변동에도 적응률이 높고 고속화된 장치이다.",
      "안정성 및 신뢰성을 극대화하였다."
    ],
    "answer": 1,
    "explanation": "전동차를 기동하지 않아도 외부에서 3상 전원(AC440V)을 공급받아 고압 장치들을 시험하고 검사할 수 있다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_104",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 SIV 장치의 주요 구성으로 틀린 것은?",
    "options": [
      "차단부",
      "쵸퍼부",
      "인버터부",
      "입력부"
    ],
    "answer": 0,
    "explanation": "SIV 장치의 주요 구성은 입력부, 쵸퍼부, 인버터부, 출력부, 충전장치, 제어장치 등이며 '차단부'라는 명칭은 주요 구성으로 분류되지 않는다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_105",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "AC 전차선 구간의 교-교절연구간 통과 시 SIV가 정지되지 않고 통과할 수 있도록 정상인 Unit의 전원공급으로 평형을 맞춰주는 기기는?",
    "options": [
      "SSS",
      "EqRe",
      "HK",
      "IVS"
    ],
    "answer": 1,
    "explanation": "EqRe(전류 평형용 저항기)는 교-교 절연 구간 통과 시 SIV가 정지되지 않도록 정상인 Unit의 전원 공급으로 평형을 맞춘다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_106",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 SIV 전원공급 시 교류구간의 흐름순서로 맞는 것은?",
    "options": [
      "Pan – MCB – ADCg – L1 – ADd1 – BF2 – 701선 – SIV",
      "Pan – MCB – ADCg – L1 – ADd2 – BF2 – 701선 – SIV",
      "Pan – MCB – ADCg – MFs – MT – Converter – L3 – ADd1 – BF2 – 701선 – SIV",
      "Pan – MCB – ADCg – MFs – MT – Converter – L3 – ADd2 – BF2 – 701선 – SIV"
    ],
    "answer": 3,
    "explanation": "교류 구간: Pan → MCB → ADCg → MFs → MT → 주변환기(Converter) → L3 → ADd2 → BF2 → 701선 → SIV 순서이다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_107",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "SIV 주요기기 중 인버터부의 Chopper 작용 및 Switching 작용으로 발생할 수 있는 Ripple 전류 및 고조파를 제거하는 것은?",
    "options": [
      "FC",
      "SL",
      "BCT",
      "HK"
    ],
    "answer": 1,
    "explanation": "SL(Smoothing 리액터)은 인버터부의 Chopper 작용 및 Switching 작용으로 발생할 수 있는 Ripple 전류 및 고조파를 제거한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_108",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 SIV 기동제어에 대한 설명으로 틀린 것은?",
    "options": [
      "Pan상승 후 MCB가 투입되면 교류구간에서는 컨버터 장치가 기동된다.",
      "SIV 제어장치는 HK를 동작하여 방전회로를 차단하고 IVHB를 투입한다.",
      "FC1, FC2에 초기충전이 2분압 되고 BT에 Gate점호로 On되면 DC1,500V가 공급이 되고 쵸퍼장치가 동작을 시작한다.",
      "GTO Thyristor로 구성된 쵸퍼장치가 동작하면서 2대의 컨버터 장치가 30°의 위상차로 교호로 운전하고 그 출력을 변압기에서 합성한다."
    ],
    "answer": 3,
    "explanation": "쵸퍼 장치가 동작하면서 2대의 'Inverter(인버터)' 장치가 30°의 위상차로 교호로 운전한다. (컨버터 장치 아님)",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_109",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 SIV 정지가 되는 경우로 틀린 것은?",
    "options": [
      "제동핸들 취거 시",
      "AMCN 차단 시",
      "SIV 경고장 발생 시",
      "IVCN 차단 시"
    ],
    "answer": 0,
    "explanation": "SIV 정지 제어 조건은 Pan 하강 및 MCB OFF 신호, 제어전원 차단(IVCN, AMCN OFF), 보호장치 동작(경고장, 중고장) 등이며 제동핸들 취거는 직접적인 정지 조건에 명시되지 않았다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_110",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 SIV 중고장으로 적절하지 않은 것은?",
    "options": [
      "IVF 용손 시",
      "콘덴서분압 이상 시",
      "충전계통 이상 시",
      "SIV 과온 시"
    ],
    "answer": 1,
    "explanation": "콘덴서 분압 이상(CUVD)은 경고장(Minor Fault)에 해당한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_111",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 SIV 중고장 발생 시 현상에 대한 설명으로 틀린 것은?",
    "options": [
      "보호장치가 동작하면 IVHB가 차단되고 SIV는 정지된다.",
      "TGIS 모니터에 “SIV 고장” 현시되며, Fault등과 고장차량 차측등이 점등된다.",
      "SIV 중고장 발생하고 90초 후 고장 Unit의 MCB가 차단된다.",
      "고장복귀 불능 시 ESPS 취급하여 연장급전한다."
    ],
    "answer": 2,
    "explanation": "SIV 중고장 발생 시 60초 후 고장 Unit의 MCB가 차단된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_112",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 ESK가 설치된 차량으로 맞는 것은?",
    "options": [
      "M차",
      "TC차",
      "M'차",
      "T차"
    ],
    "answer": 3,
    "explanation": "연장급전 접촉기(ESK)는 T차(3호차, 6호차)에 설치되어 있다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_113",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 완전부동 취급시기로 틀린 것은?",
    "options": [
      "EGS 용착 시",
      "Pan파손 시",
      "MCB 투입불능 시",
      "전기기관차로 구원받을 시"
    ],
    "answer": 3,
    "explanation": "완전부동 취급은 디젤기관차(DL)로 구원을 받을 때 시행한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_114",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 연장급전 취급시기로 틀린 것은?",
    "options": [
      "완전부동 취급 시",
      "SIV 고장 시",
      "AC구간 운행 중 M'차 주변환기(C/l) 고장으로 복귀불능 시",
      "구원열차 운전 시"
    ],
    "answer": 3,
    "explanation": "구원열차 운전 시는 연장급전 취급 시기에 포함되지 않는다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_115",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 연장급전 취급 후 현상으로 틀린 것은?",
    "options": [
      "정상 Unit에서 AC 440V를 고장 Unit에 공급한다.",
      "전체 차량의 난방 1050W 취급 시 700W 난방이 가동되지 않는다.",
      "전체 차량의 냉방 FULL 취급 시 Half 냉방으로 가동된다.",
      "고장 Unit 동력운전 장치 출력이 정상화된다."
    ],
    "answer": 1,
    "explanation": "연장급전 시 난방 1050W를 취급하면 350W 난방이 가동되지 않고 700W는 가동된다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_116",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 연장급전 취급 시 동작되는 기기로 틀린 것은?",
    "options": [
      "해당 유니트 M'차 ESK가 투입되어 연장급전이 된다.",
      "해당 차량 SIV 구동불능 된다.",
      "전체 차량 LRR1이 여자된다.",
      "전체 차량 LRR2이 여자된다."
    ],
    "answer": 0,
    "explanation": "연장급전 시 ESK가 투입되는 차량은 해당 Unit의 T차이다. (M'차 아님)",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_117",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 CM 교류전동기의 제원으로 틀린 것은?",
    "options": [
      "정격전압 : AC 440V",
      "출력 : 25kW",
      "회전수 : 1,750rpm",
      "극수 : 4"
    ],
    "answer": 1,
    "explanation": "CM 전동기의 출력은 15kW이다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_118",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 CM Screw형 압축기의 제원으로 틀린 것은?",
    "options": [
      "주위사용온도 : -25℃ ~ +35℃",
      "오일 최대용량 : 8ℓ~ 10ℓ",
      "토출압력 : 9kgf/cm²",
      "소음 수준 : 77dBA 이하"
    ],
    "answer": 0,
    "explanation": "주위 사용 온도는 -25℃ ~ +40℃이다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_119",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "전동 공기압축기(CM) 및 관련 기기에 대한 설명으로 틀린 것은?",
    "options": [
      "AC 전동기는 AC 440V 60Hz로 구동하는 유도전동기이다.",
      "Screw형 공기압축기는 전동기에 의하여 구동된다.",
      "트윈타워 공기건조기는 공기제동장치 및 제어장치 기기에 항상 깨끗한 건조공기를 공급하게 한다.",
      "안전밸브는 8.7±0.1Kg/cm²를 초과했을 경우 자동적으로 압축공기를 대기로 방출시킨다."
    ],
    "answer": 3,
    "explanation": "안전밸브는 9.7±0.1Kg/cm²를 초과했을 경우 자동으로 압축공기를 방출한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_120",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 CM 동기구동 회로에 대한 설명으로 틀린 것은?",
    "options": [
      "1대의 CM이 고장나도 남은 2대로 차량 교환역까지 운행할 수 있다.",
      "3대의 CM을 순차적으로 구동하고 순차적으로 정지할 수 있도록 설치하였다.",
      "MR압력이 8.0Kg/cm² 이하로 CM-G가 ON 되면 CM 3대가 구동을 시작한다.",
      "MR압력이 9.0Kg/cm²에 도달하면 CM-G OFF 접점으로 구동정지한다."
    ],
    "answer": 1,
    "explanation": "동기구동 회로는 3대의 CM을 '동시에' 구동하고 '동시에' 정지할 수 있도록 한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_121",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "CM 보호장치 기기에 대한 설명으로 틀린 것은?",
    "options": [
      "CMN(5OA) : 정상구동 시, 바이패스 구동 시의 순간 과전류는 차단되지 않고 입력 과전류가 지속되는 경우에만 차단되어 인버터 및 전동기를 보호한다.",
      "관련 차단기는 CMGN, CMCN가 있다.",
      "CM 인버터 출력 AC 600V 이상 시 보호장치가 동작된다.",
      "Oil Th : 압축기 내 순환 Oil의 온도가 110℃ 이상 시 보호장치가 동작된다."
    ],
    "answer": 2,
    "explanation": "CM 인버터 출력 AC 800V 이상 시 보호장치가 동작한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_122",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 CM 2대 고장 시 조치법으로 맞는 것은?",
    "options": [
      "TGIS 모니터로 BY-PASS 구동이 확인되면 정상운전 한다.",
      "바이패스 회로구성 불능 시 고장차량 차단기 차단여부를 확인하고 차량교환 역까지 주의운전한다.",
      "주공기압력 충기상태를 수시로 확인하면서 운전관제와 협의하여 회송운전하도록 조치한다.",
      "동력운전이 불가하므로 구원요구를 하여야 한다."
    ],
    "answer": 2,
    "explanation": "CM 2대 고장 시에는 주공기압력(MR) 충기 상태를 수시로 확인하면서 운전관제와 협의하여 회송 운전하도록 조치한다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_123",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 송풍전동기의 기기로 보기 힘든 것은?",
    "options": [
      "주변환기 송풍전동기",
      "필터리액터 송풍전동기",
      "주변압기 송풍전동기",
      "주변환기 오일펌프 전동기"
    ],
    "answer": 3,
    "explanation": "주변환기 오일펌프 전동기라는 명칭은 없으며, 주변압기 오일펌프 전동기(MTOM)가 있다. 또한 MTOM은 펌프용 전동기이지 송풍용(Blower) 전동기는 아니다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_124",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 MTAR 여자로 MCB가 차단되는 경우로 틀린 것은?",
    "options": [
      "MT Oil 흐름불량으로 MTOFR(b) 차단 60초 후 MTOFTR 여자 시",
      "MTOMN 차단 시",
      "MTBMN 차단 시",
      "MTOMK 동작 시"
    ],
    "answer": 3,
    "explanation": "MTAR 여자 조건은 MTOMK 또는 MTBMK가 무여자(차단) 될 때이다. (동작 시는 정상)",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_125",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 냉난방장치의 사용전원으로 적절하지 않은 것은?",
    "options": [
      "AC 440V",
      "AC 220V",
      "AC 100V",
      "DC 100V"
    ],
    "answer": 1,
    "explanation": "냉·난방장치 사용 전원은 구동용 AC 440V, 제어용 DC 100V, AC 100V 등이며 AC 220V는 사용하지 않는다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_126",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 냉난방장치 사용전원 중 냉난방기기 제어전원에 해당되는 것은?",
    "options": [
      "AC 440V",
      "AC 220V",
      "AC 100V",
      "DC 100V"
    ],
    "answer": 3,
    "explanation": "냉난방 기기 제어 전원은 DC 100V이다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_127",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 객실 난방장치에 대한 설명으로 틀린 것은?",
    "options": [
      "운전실 난방장치는 1개만 있다.",
      "CHCgS를 1,050W 위치로 취급하면 350W히터와 700W히터가 동시에 작용한다.",
      "객실 난방장치 취급은 운행 중에는 후부운전실에서만 취급이 가능하다.",
      "난방장치 사용전원은 AC 440V 60Hz이다."
    ],
    "answer": 0,
    "explanation": "운전실 난방장치는 750W 용량 2개가 설치되어 있다.",
    "source": "A_전기동차_4장_고압보조장치"
  },
  {
    "id": "license_core_3_4_128",
    "subject": "emu",
    "chapter": "4장 고압보조장치",
    "question": "다음 중 객실 냉방장치에 대한 설명으로 틀린 것은?",
    "options": [
      "냉방기 1대당 용량은 20,000kcal/h이다.",
      "냉방기의 주요기능은 냉방기능, 제습기능, 환기기능, 공기청정기능을 갖추고 있다.",
      "제동핸들이 취거상태에서 전기동차가 기동되어있으면 후부운전실에서만 취급이 가능하다.",
      "냉매제는 냉매 Gas(R22)를 사용한다."
    ],
    "answer": 2,
    "explanation": "제동핸들이 취거된 상태라도 전기동차가 기동되어 있으면 전·후부 운전실 모두에서 취급이 가능하다.",
    "source": "A_전기동차_4장_고압보조장치"
  }
];
