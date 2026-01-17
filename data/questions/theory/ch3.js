/**
 * 운전이론 - 3단원 문제
 */
var QUESTIONS_THEORY_CH3 = [
    {
    "id": "theory_3_001",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "전기기기의 분류 중 '정지기'에 해당하는 것은?",
    "options": [
      "직류전동기",
      "유도전동기",
      "직류발전기",
      "변압기"
    ],
    "answer": 3,
    "explanation": "전기기기는 회전기와 정지기로 구분할 수 있으며, 변압기는 정지기에 해당하고 직류기(전동기, 발전기)와 교류기(유도전동기)는 회전기에 해당한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_002",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기의 특징에 대한 설명으로 틀린 것은?",
    "options": [
      "속도 제어가 쉽다.",
      "회전 방향을 쉽게 제어할 수 있다.",
      "역기전력은 단자전압보다 크다.",
      "급격한 부하가 작용하여도 큰 힘을 낼 수 있다."
    ],
    "answer": 2,
    "explanation": "직류전동기의 역기전력은 단자전압보다 작다. (반면 직류발전기의 유도기전력은 단자전압보다 크다.)",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_003",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "자기장 속에서 전류가 흐르는 도체가 받는 힘(전자력)의 방향을 설명하는 법칙은?",
    "options": [
      "플레밍의 오른손 법칙",
      "플레밍의 왼손 법칙",
      "앙페르의 오른나사 법칙",
      "렌츠의 법칙"
    ],
    "answer": 1,
    "explanation": "전류와 자기장 사이에 작용하는 힘(전자력)은 플레밍의 왼손 법칙으로 설명할 수 있다. (엄지: 힘, 검지: 자기장, 중지: 전류)",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_004",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기의 회전자에서 발생되는 힘(F)을 구하는 식은? (B:자기장, I:전류, L:도체의 유효 길이)",
    "options": [
      "F = B / (I · L)",
      "F = B · I · L",
      "F = B · I / L",
      "F = I · L / B"
    ],
    "answer": 1,
    "explanation": "회전자에서 발생되는 힘 F는 자기장(B), 전류(I), 도체의 유효 길이(L)의 곱인 F = B•I•L (N)으로 정의된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_005",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기의 역기전력(Ec)을 구하는 식으로 옳은 것은? (Vt:단자전압, Ir:회전자전류, Rr:회전자저항)",
    "options": [
      "Ec = Vt + Ir Rr",
      "Ec = Vt - Ir Rr",
      "Ec = Vt × Ir Rr",
      "Ec = Ir Rr - Vt"
    ],
    "answer": 1,
    "explanation": "역기전력은 단자전압과 반대 방향으로 작용하므로 Ec = Vt - Ir Rr (V)로 정의된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_006",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기에서 전류의 방향을 바꾸어 한쪽 방향으로 계속 회전하게 하는 작용은?",
    "options": [
      "유도 작용",
      "변압 작용",
      "정류 작용",
      "증폭 작용"
    ],
    "answer": 2,
    "explanation": "회전자가 일정한 위치를 지날 때마다 전류의 방향을 바꾸어 한쪽 방향으로 흐르게 하는 것을 정류작용이라고 한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_007",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기의 구조 중 계자(field magnet)의 역할은?",
    "options": [
      "기전력을 외부로 인출한다.",
      "교류 기전력을 직류로 바꾼다.",
      "자기력선속(자속)을 발생시킨다.",
      "회전력을 발생시킨다."
    ],
    "answer": 2,
    "explanation": "계자는 계자 철심, 계자권선 등으로 구성되어 N, S의 자극과 같이 자기력선속을 발생하는 부분이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_008",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기의 브러시 재질로 일반적으로 사용되며, 양호한 정류를 위해 저항이 큰 것은?",
    "options": [
      "금속 브러시",
      "탄소 브러시",
      "구리 브러시",
      "알루미늄 브러시"
    ],
    "answer": 1,
    "explanation": "일반적으로 양호한 정류를 하기 위하여 접촉 시 저항이 큰 탄소브러시를 사용한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_009",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "계자권선과 회전자 권선이 전원에 '직렬'로 연결된 직류전동기는?",
    "options": [
      "타여자 전동기",
      "직권 전동기",
      "분권 전동기",
      "복권 전동기"
    ],
    "answer": 1,
    "explanation": "직권전동기는 계자권선과 회전자 권선이 전원에 직렬로 연결된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_010",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류직권전동기의 토크(T)는 회전자 전류(Ir)가 작을 때 전류와 어떤 관계인가?",
    "options": [
      "전류에 비례한다 (T ∝ Ir)",
      "전류의 제곱에 비례한다 (T ∝ Ir²)",
      "전류에 반비례한다 (T ∝ 1/Ir)",
      "전류와 무관하다"
    ],
    "answer": 1,
    "explanation": "직권전동기는 자속(Φ)이 전류(Ir)에 비례하므로, 토크 T = kt Φ Ir = kt (Ir)²가 되어 전류의 제곱에 비례한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_011",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류직권전동기가 무부하 상태가 지속될 때 발생하는 현상은?",
    "options": [
      "속도가 0이 되어 정지한다.",
      "속도가 일정하게 유지된다.",
      "속도가 급격히 높아져 위험해진다.",
      "토크가 최대가 된다."
    ],
    "answer": 2,
    "explanation": "직권전동기는 부하 전류가 감소하면 급격하게 속도가 상승하므로, 무부하 상태가 지속되면 속도가 높아져서 위험한 상황이 발생한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_012",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류직권전동기의 속도 제어 방식 중 '정 토크' 특성을 가지나 효율이 좋지 않은 방식은?",
    "options": [
      "전압 제어 방식",
      "계자 제어 방식",
      "주파수 제어 방식",
      "저항 제어 방식"
    ],
    "answer": 3,
    "explanation": "저항제어 방식은 회전자 권선의 저항을 변화시키는 방법으로 정 토크 특성을 나타내지만, 효율이 좋지 않다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_013",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "변압기의 원리를 설명하는 법칙으로 옳은 것은?",
    "options": [
      "옴의 법칙과 키르히호프 법칙",
      "렌츠의 법칙과 패러데이 전자기유도 법칙",
      "플레밍의 왼손 법칙과 오른손 법칙",
      "보일-샤를의 법칙"
    ],
    "answer": 1,
    "explanation": "변압기는 렌츠의 법칙과 패러데이 전자기유도의 법칙으로 설명할 수 있다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_014",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "변압기의 변압비(V1/V2)와 같은 값을 갖는 것은?",
    "options": [
      "2차 권선수 / 1차 권선수 (N2/N1)",
      "1차 권선수 / 2차 권선수 (N1/N2)",
      "1차 전류 / 2차 전류 (I1/I2)",
      "2차 전압 / 1차 전압 (V2/V1)"
    ],
    "answer": 1,
    "explanation": "변압비(V1/V2) = 권수비(N1/N2) = 변류비(I2/I1) 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_015",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "변압기의 '정격 용량'에 대한 정의로 옳은 것은?",
    "options": [
      "무부하 운전 시 출력되는 전압",
      "정격 전압, 주파수에서 온도 상승 한도를 넘지 않고 얻어지는 출력 단자 사이의 값",
      "1차 측에 인가된 최대 전압",
      "변압기 내부의 절연유 용량"
    ],
    "answer": 1,
    "explanation": "정격 용량은 정격전압, 정격 주파수, 정격 역률에서 지정된 온도 상승 한도를 넘지 않고 출력 단자 사이에서 얻어지는 값을 말한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_016",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "유도전동기에서 도체가 자기장과 직각 방향으로 운동할 때 유도기전력(E)의 크기는? (B:자기력선속 밀도, l:도체 유효 길이, v:회전속도)",
    "options": [
      "E = B / (l · v)",
      "E = B · l · v",
      "E = v / (B · l)",
      "E = B · l / v"
    ],
    "answer": 1,
    "explanation": "유도기전력 E의 크기는 E = B•l•v (V)로 정의된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_017",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "3상 유도전동기의 고정자에 3상 전류를 공급했을 때 발생하는 것은?",
    "options": [
      "정지 자기장",
      "교번 자기장",
      "회전 자기장",
      "직류 자기장"
    ],
    "answer": 2,
    "explanation": "고정자 철심에 코일을 120도 간격으로 배치하고 3상 전류를 공급하면 고정자에 회전자기장이 발생된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_018",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "유도전동기 동력 운전 시 회전자의 회전속도와 회전자계 속도의 차이를 나타내는 용어는?",
    "options": [
      "토크",
      "슬립",
      "공극",
      "효율"
    ],
    "answer": 1,
    "explanation": "회전자의 회전속도가 고정자 회전 자속의 속도와 일치하지 않는 부분을 슬립(Slip)이라고 한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_019",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "유도전동기의 슬립(s)이 1일 때의 상태는?",
    "options": [
      "동기 속도로 회전 중",
      "정지 상태",
      "무부하 운전 상태",
      "발전기 운전 상태"
    ],
    "answer": 1,
    "explanation": "슬립 s = (Nn - Nr)/Nn 식에서 회전수 Nr이 0이면 s=1이 되므로, 슬립이 1일 때는 정지 상태이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_020",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "유도전동기의 동기속도(Nn)를 구하는 공식은? (fivn: 전원 주파수, p: 극수)",
    "options": [
      "Nn = 120 fivn / p",
      "Nn = 60 fivn / p",
      "Nn = 120 p / fivn",
      "Nn = p / 120 fivn"
    ],
    "answer": 0,
    "explanation": "동기속도 Nn = 120 fivn / p (rpm)으로 정의된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_021",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "유도전동기가 회생제동 상태가 될 때 슬립(s)의 부호는?",
    "options": [
      "양(+)",
      "음(-)",
      "0",
      "무한대"
    ],
    "answer": 1,
    "explanation": "회생제동 상태가 되면 회전자계의 회전 주파수가 회전자의 회전 주파수보다 작기 때문에 슬립률 s는 0보다 작은 음(-)의 값을 갖는다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_022",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "유도전동기의 토크(T)는 전원 전압(Vm)과 주파수(fivn)의 비와 어떤 관계인가?",
    "options": [
      "(Vm / fivn)에 비례한다.",
      "(Vm / fivn)의 제곱에 비례한다.",
      "(Vm / fivn)에 반비례한다.",
      "관계없다."
    ],
    "answer": 1,
    "explanation": "유도전동기의 토크 T는 (Vm / fivn)^2 • frs 에 비례하므로, 전압/주파수 비의 제곱에 비례한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_023",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "인버터 전기동차의 '정 토크 영역(저속)' 제어 방식은?",
    "options": [
      "전압 일정 제어",
      "주파수 고정 제어",
      "전압(Vm)과 주파수(fivn)의 비를 일정하게 유지(VVVF)",
      "슬립 주파수 최대 제어"
    ],
    "answer": 2,
    "explanation": "정 토크 영역에서는 전동기에 공급되는 전압(Vm)과 인버터 주파수(fivn)의 비를 일정하게 유지하는(Vm/fivn 일정) 제어를 한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_024",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "인버터 전기동차의 '정 전력 영역(중속)'에서는 어떤 값을 조절하여 토크 감소를 억제하는가?",
    "options": [
      "전압을 계속 상승시킨다.",
      "슬립 주파수를 인버터 주파수에 비례해서 증대시킨다.",
      "극 수를 변경한다.",
      "주파수를 고정한다."
    ],
    "answer": 1,
    "explanation": "정 전력 영역에서는 전압이 최대가 된 상태이므로, 전력을 일정하게 유지하도록 인버터 주파수에 비례해서 슬립 주파수를 증대시킨다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_025",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "유도전동기의 회전자 종류 두 가지는?",
    "options": [
      "직권형, 분권형",
      "계자형, 전기자형",
      "농형, 권선형",
      "동기형, 비동기형"
    ],
    "answer": 2,
    "explanation": "유도전동기의 회전자는 농형 회전자와 권선형 회전자로 분류한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_026",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "변압기 구조 중 자기회로를 구성하며 맴돌이전류 손실을 줄이기 위해 성층하는 부분은?",
    "options": [
      "권선",
      "철심",
      "절연유",
      "외함"
    ],
    "answer": 1,
    "explanation": "철심은 자기회로를 구성하며, 맴돌이전류에 의한 철 손실을 고려해야 하는 부분이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_027",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기의 회전 방향을 제어하기 쉬운 특성과 직선적인 시동 회전력을 이용하는 대표적인 전동기는?",
    "options": [
      "단상 유도전동기",
      "직류 직권전동기",
      "동기 전동기",
      "스텝 모터"
    ],
    "answer": 1,
    "explanation": "큰 기동 토크와 부하 변동에 적응하고 속도 제어와 회전 방향 변환이 쉬운 직류직권전동기를 전기동차의 전동기로 활용한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_028",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "유도전동기에서 '슬립 주파수(frs)'를 구하는 식은?",
    "options": [
      "frs = fnr + frr",
      "frs = fnr - frr",
      "frs = fnr / frr",
      "frs = fnr * frr"
    ],
    "answer": 1,
    "explanation": "슬립 주파수 frs = fnr(회전자계 주파수) - frr(회전자 주파수) 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_029",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "단상 유도전동기의 종류에 해당하지 않는 것은?",
    "options": [
      "분상 기동형",
      "콘덴서형",
      "셰이딩 코일형",
      "가동 복권형"
    ],
    "answer": 3,
    "explanation": "단상 유도전동기에는 분상 기동형, 콘덴서형, 셰이딩 코일형, 반발 기동형이 있다. 가동 복권형은 직류전동기의 종류이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_030",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기에서 전동기의 내부 회로와 외부 회로를 전기적으로 연결해 주는 부분은?",
    "options": [
      "정류자",
      "브러시",
      "계자",
      "공극"
    ],
    "answer": 1,
    "explanation": "브러시는 전동기의 내부 회로와 외부 회로를 전기적으로 연결시켜 주며, 기전력을 외부로 인출하는 부분이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_001",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "다음 중 전기에너지를 기계에너지로 변환시키는 장치는?",
    "options": [
      "직류발전기",
      "직류전동기",
      "변압기",
      "정류기"
    ],
    "answer": 1,
    "explanation": "직류전동기는 직류 전기에너지를 이용하여 회전력을 얻는 기계로서, 전기에너지를 기계에너지로 변환시키는 시스템이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_002",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류발전기에 대한 설명으로 틀린 것은?",
    "options": [
      "기계에너지를 전기에너지로 변환한다.",
      "전자기유도 현상을 이용한다.",
      "발전기 내의 코일에 발생된 전압은 직류전압이다.",
      "정류 과정을 통해 교류를 직류로 바꾼다."
    ],
    "answer": 2,
    "explanation": "직류발전기의 출력전압이 직류라고 하더라도 발전기 내의 코일에 발생된 전압은 교류전압이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_003",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류전동기의 단자전압(Vt)과 역기전력(Ec)의 크기 관계는?",
    "options": [
      "역기전력이 단자전압보다 작다.",
      "역기전력이 단자전압보다 크다.",
      "역기전력과 단자전압은 같다.",
      "관계없다."
    ],
    "answer": 0,
    "explanation": "직류전동기의 역기전력은 전원 전압(단자전압)보다 작다. (반대로 직류발전기의 유도기전력은 단자전압보다 크다.)",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_004",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "플레밍의 왼손 법칙에서 '엄지손가락'이 가리키는 방향은?",
    "options": [
      "전류의 방향",
      "자기장의 방향",
      "힘(전자력)의 방향",
      "유도기전력의 방향"
    ],
    "answer": 2,
    "explanation": "플레밍의 왼손 법칙에서 중지는 전류, 검지는 자기장, 엄지는 힘의 방향을 가리킨다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_005",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "회전자에서 발생하는 힘 F를 구하는 공식은? (B:자기장, I:전류, L:도체의 유효 길이)",
    "options": [
      "F = B / (I · L)",
      "F = B · I · L",
      "F = B² · I · L",
      "F = I · L / B"
    ],
    "answer": 1,
    "explanation": "회전자에서 발생되는 힘 F = B · I · L (N) 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_006",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류전동기의 역기전력(Ec) 공식으로 옳은 것은?",
    "options": [
      "Ec = Vt + IrRr",
      "Ec = Vt - IrRr",
      "Ec = Vt × IrRr",
      "Ec = IrRr / Vt"
    ],
    "answer": 1,
    "explanation": "역기전력 Ec = Vt(단자전압) - Ir(회전자 전류) × Rr(회전자 저항) 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_007",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류전동기의 역기전력은 회전속도(n)와 어떤 관계인가?",
    "options": [
      "비례한다",
      "반비례한다",
      "제곱에 비례한다",
      "무관하다"
    ],
    "answer": 0,
    "explanation": "역기전력 Ec = k1 · Φ · n 이므로, 역기전력은 회전속도 n에 비례한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_008",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "대형 직류전동기의 공극(Air gap)은 대략 어느 정도인가?",
    "options": [
      "1-2mm",
      "6-8mm",
      "10-15mm",
      "20mm 이상"
    ],
    "answer": 1,
    "explanation": "대형 직류전동기의 공극은 6-8mm 정도 된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_009",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "유도된 교류 기전력을 직류로 바꾸어 주는 직류기의 핵심 부품은?",
    "options": [
      "계자",
      "회전자 철심",
      "정류자",
      "베어링"
    ],
    "answer": 2,
    "explanation": "정류자(commutator)는 브러시와 접촉하며 유도된 교류 기전력을 직류로 바꾸어 주는 부분이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_010",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류전동기 브러시의 재질로 가장 일반적으로 사용되는 것은?",
    "options": [
      "탄소 브러시",
      "구리 브러시",
      "철 브러시",
      "알루미늄 브러시"
    ],
    "answer": 0,
    "explanation": "일반적으로 양호한 정류를 하기 위하여 접촉 시 저항이 큰 탄소브러시를 사용한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_011",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "계자권선과 회전자 권선이 전원에 '병렬'로 연결된 전동기는?",
    "options": [
      "직권전동기",
      "분권전동기",
      "타여자 전동기",
      "유도전동기"
    ],
    "answer": 1,
    "explanation": "분권전동기는 계자권선과 회전자 권선이 전원에 병렬로 연결된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_012",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류직권전동기의 토크(T)는 전류(Ir)가 작을 때 전류와 어떤 관계인가?",
    "options": [
      "전류에 비례한다",
      "전류의 제곱에 비례한다",
      "전류에 반비례한다",
      "전류의 제곱에 반비례한다"
    ],
    "answer": 1,
    "explanation": "직권전동기는 자속(Φ)이 전류(Ir)에 비례하므로 토크 T는 전류의 제곱(Ir²)에 비례한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_013",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류전동기의 회전속도(n)는 한 극당 자기력선속(Φ)과 어떤 관계인가?",
    "options": [
      "비례한다",
      "반비례한다",
      "제곱에 비례한다",
      "관계없다"
    ],
    "answer": 1,
    "explanation": "직류전동기 회전속도 n = k(Vt - IrRr) / Φ 이므로, 자기력선속(자속)에 반비례한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_014",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류직권전동기의 부하 전류가 감소할 때 나타나는 현상은?",
    "options": [
      "속도가 급격하게 상승한다.",
      "속도가 급격하게 감소한다.",
      "토크가 급격하게 증가한다.",
      "역기전력이 0이 된다."
    ],
    "answer": 0,
    "explanation": "직권전동기는 부하 전류가 감소하면 급격하게 속도가 상승하며, 무부하 상태가 되면 위험하다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_015",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류직권전동기의 속도 제어 방식 중 '정 토크' 특성을 가지나 효율이 좋지 않은 것은?",
    "options": [
      "계자 제어 방식",
      "전압 제어 방식",
      "저항 제어 방식",
      "주파수 제어 방식"
    ],
    "answer": 2,
    "explanation": "저항제어 방식은 회전자 권선의 저항을 변화시키는 방법으로 정 토크 특성을 나타내지만, 효율이 좋지 않다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_016",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류직권전동기 속도 제어 방식 중 '정 출력' 특성을 가지는 것은?",
    "options": [
      "저항 제어 방식",
      "계자 제어 방식",
      "전압 제어 방식",
      "전류 제어 방식"
    ],
    "answer": 1,
    "explanation": "계자 제어 방식은 자속을 변화시켜 속도를 제어하며 정 출력의 특성을 가진다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_017",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "전압 제어 방식의 특징으로 옳은 것은?",
    "options": [
      "속응성이 양호하다.",
      "효율이 매우 나쁘다.",
      "주로 직권전동기에 사용한다.",
      "정 출력 특성을 가진다."
    ],
    "answer": 0,
    "explanation": "전압 제어 방식은 정 토크, 정 속도 특성을 가지며 속응성이 양호하다. 주로 타여자 전동기에 사용된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_018",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류기에서 자극(N, S)을 만드는 부분인 계자 철심은 무엇으로 자극을 형성하는가?",
    "options": [
      "영구자석",
      "계자권선",
      "정류자",
      "브러시"
    ],
    "answer": 1,
    "explanation": "계자 철심은 계자권선으로 자극을 만드는 부분이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_019",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "복권전동기를 분류하는 두 가지 방식은?",
    "options": [
      "가동복권, 차동복권",
      "직권복권, 분권복권",
      "타여자복권, 자여자복권",
      "내권, 외권"
    ],
    "answer": 0,
    "explanation": "복권전동기는 가동복권전동기와 차동복권전동기로 분류한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_1_020",
    "subject": "theory",
    "chapter": "3.1 직류기",
    "question": "직류직권전동기가 전기동차의 전동기로 활용되는 이유로 적절한 것은?",
    "options": [
      "일정한 속도로 회전하기 때문에",
      "큰 기동 토크와 부하 변동에 잘 적응하기 때문에",
      "역기전력이 발생하지 않기 때문에",
      "교류 전원을 직접 사용할 수 있기 때문에"
    ],
    "answer": 1,
    "explanation": "직류직권전동기는 큰 기동 토크와 부하의 변동에 적응하고 속도 제어와 회전 방향의 변환이 쉬운 우수한 특성이 있어 전기동차에 사용된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },

  {
    "id": "theory_3_2_001",
    "subject": "theory",
    "chapter": "3.2 변압기",
    "question": "변압기를 설명하는 기본 법칙 두 가지는?",
    "options": [
      "옴의 법칙, 키르히호프 법칙",
      "렌츠의 법칙, 패러데이 전자기유도 법칙",
      "플레밍의 왼손 법칙, 오른손 법칙",
      "앙페르의 법칙, 쿨롱의 법칙"
    ],
    "answer": 1,
    "explanation": "변압기는 렌츠의 법칙과 패러데이 전자기유도의 법칙으로 설명할 수 있다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_2_002",
    "subject": "theory",
    "chapter": "3.2 변압기",
    "question": "변압기의 1차 권선 수가 2차 권선 수보다 많을 때(N1 > N2) 전압의 변화는?",
    "options": [
      "승압된다 (V2 > V1)",
      "강압된다 (V2 < V1)",
      "변화 없다",
      "직류로 변환된다"
    ],
    "answer": 1,
    "explanation": "1차 권선 수가 2차 권선 수보다 많이 감게 되면 2차 전압이 1차 전압보다 낮아진다(강압).",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_2_003",
    "subject": "theory",
    "chapter": "3.2 변압기",
    "question": "변압기의 1차, 2차 권선비(N1/N2), 전압비(V1/V2), 전류비(I2/I1)의 관계로 옳은 것은?",
    "options": [
      "V1/V2 = N1/N2 = I2/I1",
      "V1/V2 = N2/N1 = I1/I2",
      "V1/V2 = N1/N2 = I1/I2",
      "V1/V2 = I2/I1 = N2/N1"
    ],
    "answer": 0,
    "explanation": "변압비(V1/V2) = 권수비(N1/N2) = 변류비(I2/I1) 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_2_004",
    "subject": "theory",
    "chapter": "3.2 변압기",
    "question": "변압기의 구조 중 맴돌이전류(Eddy Current)에 의한 철 손실이 발생하는 부분은?",
    "options": [
      "권선",
      "철심",
      "절연유",
      "커버"
    ],
    "answer": 1,
    "explanation": "철심은 자기회로를 구성하며 맴돌이전류에 의한 철 손실이 중요한 요소가 된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_2_005",
    "subject": "theory",
    "chapter": "3.2 변압기",
    "question": "변압기의 정격 용량 정의에 포함되지 않는 조건은?",
    "options": [
      "정격 전압",
      "정격 주파수",
      "정격 역률",
      "최대 부하"
    ],
    "answer": 3,
    "explanation": "정격 용량은 정격 전압, 정격 주파수, 정격 역률에서 지정된 온도 상승 한도를 넘지 않고 얻어지는 값을 말한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_001",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "유도전동기에서 유도기전력(E)의 크기를 구하는 식은? (B:자속밀도, l:유효길이, v:회전속도)",
    "options": [
      "E = B / l / v",
      "E = B · l · v",
      "E = v / (B · l)",
      "E = B · l / v"
    ],
    "answer": 1,
    "explanation": "유도기전력 E = B · l · v (V) 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_002",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "3상 유도전동기의 고정자 코일을 몇 도 간격으로 배치하여 3상 전류를 공급하는가?",
    "options": [
      "60도",
      "90도",
      "120도",
      "180도"
    ],
    "answer": 2,
    "explanation": "고정자 철심에 코일을 120도 간격으로 배치하고 대칭인 3상 전류를 공급하면 회전자기장이 발생된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_003",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "유도전동기의 회전자 종류 두 가지는?",
    "options": [
      "농형, 권선형",
      "직권형, 분권형",
      "동기형, 비동기형",
      "영구자석형, 전자석형"
    ],
    "answer": 0,
    "explanation": "유도전동기의 회전자는 농형 회전자와 권선형 회전자로 분류한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_004",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "유도전동기의 동기속도(Nn)를 구하는 공식은? (f:주파수, p:극수)",
    "options": [
      "120 f / p",
      "60 f / p",
      "120 p / f",
      "p / 120 f"
    ],
    "answer": 0,
    "explanation": "동기속도 Nn = 120 f / p (rpm) 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_005",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "유도전동기의 슬립(s)을 구하는 식은? (Nn:동기속도, Nr:회전자속도)",
    "options": [
      "s = (Nn - Nr) / Nn",
      "s = (Nr - Nn) / Nr",
      "s = Nn / Nr",
      "s = Nr / Nn"
    ],
    "answer": 0,
    "explanation": "슬립 s = (Nn - Nr) / Nn = 1 - (Nr / Nn) 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_006",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "유도전동기가 정지 상태일 때의 슬립(s) 값은?",
    "options": [
      "0",
      "0.5",
      "1",
      "무한대"
    ],
    "answer": 2,
    "explanation": "회전자의 회전수(Nr)가 0이 되면 슬립 s는 1이 된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_007",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "유도전동기가 회생제동 상태일 때 슬립(s)의 범위는?",
    "options": [
      "s > 1",
      "1 > s > 0",
      "s = 0",
      "s < 0"
    ],
    "answer": 3,
    "explanation": "회생제동 상태가 되면 회전자계 주파수보다 회전자 주파수가 커져서 슬립은 음(-)의 값(s < 0)을 갖는다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_008",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "국내 과천선이나 분당선에서 사용되는 전동기의 극 수는?",
    "options": [
      "2극",
      "4극",
      "6극",
      "8극"
    ],
    "answer": 1,
    "explanation": "현재 국내에서 과천선이나 분당선에서 사용되는 전동기의 극수는 4극을 사용하고 있다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_009",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "유도전동기에서 전동기의 자속(Φm)은 무엇에 비례하고 무엇에 반비례하는가?",
    "options": [
      "주파수에 비례, 전압에 반비례",
      "전압에 비례, 주파수에 반비례",
      "전류에 비례, 전압에 반비례",
      "회전수에 비례, 극수에 반비례"
    ],
    "answer": 1,
    "explanation": "전동기의 자속은 인버터 출력전압(Vm)에 비례하고 인버터 주파수(fivn)에 반비례한다. (Φm ∝ Vm/fivn)",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_010",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "유도전동기 토크(T)는 (전압 Vm / 주파수 fivn)의 값과 어떤 관계인가?",
    "options": [
      "비례한다",
      "반비례한다",
      "제곱에 비례한다",
      "제곱에 반비례한다"
    ],
    "answer": 2,
    "explanation": "유도전동기의 토크 T는 (Vm/fivn)²에 비례한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_011",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "인버터 전기동차의 '정 토크 영역(저속)' 제어 방식은?",
    "options": [
      "전압 일정 제어",
      "주파수 고정 제어",
      "전압(Vm)과 주파수(fivn)의 비를 일정하게 유지 (VVVF)",
      "슬립 주파수 최대 제어"
    ],
    "answer": 2,
    "explanation": "정 토크 영역에서는 전동기에 공급되는 전압과 인버터 주파수의 비(Vm/fivn)를 일정하게 유지하는 제어를 한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_012",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "인버터 전기동차의 '정 전력 영역(중속)'에서의 제어 특성은?",
    "options": [
      "전압과 주파수가 비례하여 증가한다.",
      "전압은 최대로 고정되고 슬립 주파수를 증대시킨다.",
      "전압과 슬립 주파수가 모두 일정하다.",
      "주파수를 고정하고 전압만 낮춘다."
    ],
    "answer": 1,
    "explanation": "정 전력 영역에서는 전압이 최대가 되며, 전력을 일정하게 유지하도록 인버터 주파수에 비례해서 슬립 주파수를 증대시킨다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_013",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "인버터 전기동차의 '일정 영역(고속)'에서 토크는 주파수와 어떤 관계를 가지는가?",
    "options": [
      "주파수에 비례한다.",
      "주파수에 반비례한다.",
      "주파수의 제곱에 반비례한다.",
      "주파수와 무관하게 일정하다."
    ],
    "answer": 2,
    "explanation": "고속 영역(특성 영역)에서는 전압이 일정하므로, 토크는 전원 주파수(fivn)의 제곱에 반비례하여 감소한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_014",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "회생제동 영역에서 슬립 주파수(frs)를 음(-)으로 만들기 위한 인버터 주파수(fivn) 계산식은?",
    "options": [
      "fivn = frr + frs",
      "fivn = frr - frs",
      "fivn = frr × frs",
      "fivn = frr / frs"
    ],
    "answer": 0,
    "explanation": "회생제동 시 슬립 주파수 frs를 음(-)으로 하기 위해 fivn = frr + frs로 계산한다. (여기서 frs 자체가 음수 값이므로 결과적으로 주파수를 낮춤)",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "theory_3_3_015",
    "subject": "theory",
    "chapter": "3.3 유도전동기",
    "question": "단상 유도전동기의 종류에 해당하지 않는 것은?",
    "options": [
      "분상 기동형",
      "콘덴서형",
      "셰이딩 코일형",
      "농형"
    ],
    "answer": 3,
    "explanation": "농형은 3상 유도전동기의 회전자 종류 중 하나이며, 단상 유도전동기의 종류(기동 방식에 따른 분류)에는 분상 기동형, 콘덴서형, 셰이딩 코일형, 반발 기동형이 있다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_052",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음 중 직류전동기의 특징으로 틀린 설명은?",
    "options": [
      "회전방향을 쉽게 제어할 수 있다.",
      "역기전력은 단자전압보다 크다.",
      "급격한 부하가 전동기에 작용하여도 큰 힘을 낼 수 있다.",
      "속도제어가 쉽다."
    ],
    "answer": 1,
    "explanation": "표준교재에 따르면 직류전동기의 역기전력은 단자전압보다 작다. (반대로 직류발전기의 유도기전력은 단자전압보다 크다.)",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_053",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음 중 직류발전기에 대한 설명으로 가장 맞는 것은?",
    "options": [
      "고정자 코일 속에서 회전자를 움직여도 회전자에 자기장이 형성되지 않는다.",
      "직류발전기의 유도기전력은 단자전압보다 크다.",
      "직류발전기는 정류과정을 통해서 코일에 발생된 직류전압을 교류전압으로 정류시킨다.",
      "직류발전기 내의 코일에 발생된 전압은 직류전압이다."
    ],
    "answer": 1,
    "explanation": "직류발전기의 유도기전력은 단자전압보다 크다. 또한 발전기 내의 코일에 발생된 전압은 교류전압이며, 정류 과정을 통해 직류로 변환한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_054",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기와 관련된 역기전력에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "역기전력은 회전속도에 비례한다.",
      "역기전력은 자속에 비례한다.",
      "역기전력과 비례관계인 기계상수는 자극 수에 비례한다.",
      "역기전력에 비례관계인 기계상수는 도체 수에 반비례한다."
    ],
    "answer": 3,
    "explanation": "역기전력 식 Ec = (pZ/60a)·Φ·n 에서 기계상수 k1 = pZ/60a 이다. 따라서 기계상수는 도체 수(Z)에 비례한다. (반비례한다는 설명은 틀림)",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_055",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기의 구조로 적절하지 않은 것은?",
    "options": [
      "계자",
      "회전자",
      "고정자",
      "정류자"
    ],
    "answer": 2,
    "explanation": "표준교재에서 직류전동기의 구조는 계자(field magnet), 회전자(armature), 정류자(commutator), 브러시(brush)로 분류하여 설명하고 있다. '고정자'라는 명칭은 주로 유도전동기에서 사용된다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_056",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기의 브러시에 대한 설명으로 틀린 것은?",
    "options": [
      "전동기의 내부회로와 외부회로를 전기적으로 연결시켜 준다.",
      "일반적으로 양호한 정류를 하기 위하여 접촉 시 저항이 큰 금속브러시를 사용한다.",
      "탄소브러시, 전기흑연브러시, 금속브러시가 있다.",
      "기전력을 외부로 인출하는 부분이다."
    ],
    "answer": 1,
    "explanation": "일반적으로 양호한 정류를 하기 위하여 접촉 시 저항이 큰 '탄소브러시'를 사용한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_057",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기의 자여자 전동기에 해당하지 않은 것은?",
    "options": [
      "직권전동기",
      "분권전동기",
      "복권전동기",
      "단권전동기"
    ],
    "answer": 3,
    "explanation": "자여자 전동기는 직권전동기, 분권전동기, 복권전동기로 나누어진다. 단권전동기는 분류에 없다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_058",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류전동기의 토크에 대한 설명으로 틀린 것은?",
    "options": [
      "자극수에 반비례한다.",
      "도체수에 비례한다.",
      "원주율에 반비례한다.",
      "병렬회로 수에 반비례한다."
    ],
    "answer": 0,
    "explanation": "토크 T = (p Z Φ Ir) / (2 a π) 이므로, 토크는 자극 수(p)에 비례한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_059",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음 중 직류직권전동기의 회전수제어 공식으로 가장 맞는 것은?",
    "options": [
      "n = k Ir / (Φ - VtRr)",
      "n = k Φ / (Rr - IrVt)",
      "n = k (Vt - IrRr) / Φ",
      "n = k Rr / (Vt - IrΦ)"
    ],
    "answer": 2,
    "explanation": "직류전동기의 회전속도 n = k (Vt - Ir Rr) / Φ 이다. (직권전동기의 경우 자속 Φ가 전류 I에 비례하므로 Φ 대신 I를 대입하여 표현하기도 함)",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_060",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음 중 직류직권전동기 속도제어로 틀린 것은?",
    "options": [
      "계자제어",
      "저항제어",
      "극수제어",
      "전압제어"
    ],
    "answer": 2,
    "explanation": "직류직권전동기의 속도 제어 방식에는 저항제어, 계자제어, 전압제어 방식이 있다. 극수 제어는 주로 유도전동기의 속도 제어 방식이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_061",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "직류직권전동기 속도제어 중 응답성이 좋지 않아 주로 분권 및 복권전동기에 사용되는 방식은?",
    "options": [
      "계자제어",
      "저항제어",
      "극수제어",
      "전압제어"
    ],
    "answer": 0,
    "explanation": "계자제어 방식은 정 출력 특성을 가지지만 응답성이 좋지 않아 주로 분권 및 복권전동기에서 사용한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_062",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음 변압기의 식으로 가장 적절한 것은?",
    "options": [
      "V2/V1 = N2/N1 = I2/I1",
      "V1/V2 = N1/N2 = I1/I2",
      "V1/V2 = N1/N2 = I2/I1",
      "V1/V2 = N1/N2 = I2/I1"
    ],
    "answer": 2,
    "explanation": "변압비(V1/V2) = 권수비(N1/N2) = 변류비(I2/I1) 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_063",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음 중 변압기의 정격으로 틀린 것은?",
    "options": [
      "정격전압",
      "정격시간",
      "정격용량",
      "정격전류"
    ],
    "answer": 1,
    "explanation": "표준교재에 명시된 변압기 정격 항목은 정격전압, 정격용량, 정격전류이다. 정격시간은 포함되지 않는다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_064",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음은 유도전동기의 그림으로 네모칸에 들어갈 명칭은?",
    "options": [
      "고정자",
      "회전자",
      "회전자도체",
      "정류자"
    ],
    "answer": 1,
    "explanation": "유도전동기는 고정자와 회전자로 구성되며, 그림 상 내부에서 회전하는 부분은 회전자이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_065",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음 중 유도전동기의 슬립률 식으로 가장 맞는 것은? (fnr: 회전자계 회전주파수, frr: 회전자 회전주파수)",
    "options": [
      "(fnr - frr) / fnr",
      "(frr - fnr) / fnr",
      "(fnr - frr) / frr",
      "(frr - fnr) / frr"
    ],
    "answer": 0,
    "explanation": "슬립(s) = (회전자계 회전주파수 - 회전자 회전주파수) / 회전자계 회전주파수 = (fnr - frr) / fnr 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_066",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음 중 유도전동기 슬립의 범위로 맞는 것은?",
    "options": [
      "1 < S < 0",
      "1 < S ≤ 0",
      "1 > S ≥ 0",
      "1 > S > 0"
    ],
    "answer": 3,
    "explanation": "일반적인 전동기 운전 상태에서 슬립의 범위는 1 > s > 0 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_067",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "전동열차에 장착된 유도전동기의 전원 주파수가 60Hz라면, 극수가 4일 때 동기속도는?",
    "options": [
      "1,800rpm",
      "1,600rpm",
      "1,400rpm",
      "1,200rpm"
    ],
    "answer": 0,
    "explanation": "동기속도 Nn = 120f / p = 120 * 60 / 4 = 1,800 rpm 이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_068",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "전동열차에 장착된 유도전동기의 분당 회전수가 1,368rpm이라면 슬립은 5%, 회전자계의 회전주파수는 100Hz, 슬립주파수는 40Hz인 이 유도전동기의 극수는?",
    "options": [
      "4.5",
      "5",
      "5.5",
      "6"
    ],
    "answer": 1,
    "explanation": "회전수 Nr = 1368rpm이고 슬립 s = 0.05일 때 동기속도 Nn = Nr / (1-s) = 1368 / 0.95 = 1440rpm이다. 교재 공식 Nn = 120f / p에 따라, 1440 = 120 * 60 / p (일반적인 전원주파수 60Hz 가정 시) 계산하면 p = 5가 된다. (문제의 '회전자계 주파수 100Hz' 등의 조건은 일반적인 60Hz 시스템과 상충되나, 계산상 5극이 도출된다.)",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_069",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음 중 유도전동기의 회전수 제어로 적절하지 않은 것은?",
    "options": [
      "주파수제어",
      "극수제어",
      "전압제어",
      "슬립제어"
    ],
    "answer": 2,
    "explanation": "유도전동기의 속도 제어 방식으로는 주파수 제어, 슬립 제어, 극 수 제어가 있다. 전압 제어는 직류전동기의 속도 제어 방식에 해당한다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_070",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음 유도전동기의 토크에 대한 설명으로 틀린 것은?",
    "options": [
      "기계상수에 비례한다.",
      "전동기의 자속은 인버터 출력전압에 비례한다.",
      "전동기의 자속은 인버터 주파수에 반비례 한다.",
      "회전자 2차 전류에 반비례 한다."
    ],
    "answer": 3,
    "explanation": "유도전동기 토크 식 T = K1·Φm·Ir 이므로, 토크는 회전자 2차 전류(Ir)에 비례한다. 반비례한다는 설명은 틀렸다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_071",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "인버터 전기동차의 운전모드 중 전동기에 공급되는 전압과 슬립주파수가 최대로 된 후 인버터 주파수만 높여서 속도를 올리는 영역으로 전동기에 공급되는 전압과 슬립주파수가 일정한 영역은?",
    "options": [
      "정전력제어",
      "저속",
      "중속",
      "고속"
    ],
    "answer": 3,
    "explanation": "전동기 전압과 슬립 주파수가 최대로 된 후 인버터 주파수만 높여서 속도를 올리는 영역은 '일정 영역(고속)'이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_072",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "다음 중 단상유도전동기로만 구성된 것은?",
    "options": [
      "분산 기동형, 콘덴서형, 권선형",
      "셰이딩 코일형, 콘덴서형, 농형",
      "농형, 권선형",
      "반발 기동형, 셰이딩 코일형, 콘덴서형"
    ],
    "answer": 3,
    "explanation": "단상 유도전동기의 종류에는 분상 기동형, 콘덴서형, 셰이딩 코일형, 반발 기동형이 있다. 농형과 권선형은 3상 유도전동기의 분류이다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  },
  {
    "id": "driving_theory_exam_3_073",
    "subject": "theory",
    "chapter": "3장 전기기기",
    "question": "회생제동 시 제어영역 그래프에서 점선으로 표시되어 정토크 영역에서 상승하다가 정전력 영역 이후 일정해지는 요소는?",
    "options": [
      "Im",
      "Vm",
      "T",
      "Fs"
    ],
    "answer": 1,
    "explanation": "정토크 영역에서는 전압(Vm)과 주파수의 비를 일정하게 유지(V/f 일정)하므로 전압이 상승하고, 정전력 영역 이후에는 전압이 최대로 일정하게 유지된다. 따라서 해당 그래프는 전압(Vm)을 나타낸다.",
    "source": "D_운전이론_3장_전기기기.pdf"
  }

];
