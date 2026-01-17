/**
 * 도시철도시스템 - 10단원 문제
 */
var QUESTIONS_URBAN_CH10 = [
    
// 10.1 ~ 10.2 관제 일반 개요 및 업무
{
  id: 'control_10_001',
  subject: 'urban',
  chapter: '관제일반',
  question: '우리나라에서 도시철도가 처음으로 서울역에서 청량리역까지 개통된 날짜는?',
  options: ['1970년 8월 15일', '1972년 8월 15일', '1974년 8월 15일', '1976년 8월 15일'],
  answer: 2,
  explanation: '우리나라에서는 1974년 8월 15일 처음으로 서울역에서 청량리역까지 도시철도가 개통되었다.',
  source: '도시철도 10장 10.1'
},
{
  id: 'control_10_002',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제 업무의 정의에 포함되지 않는 것은?',
  options: [
    '철도차량 운행의 제어·통제·감시',
    '철도차량 등의 적법 운행 여부에 대한 지도·감독',
    '철도 사고 등 발생 시 사고 복구 지시',
    '철도차량의 제작 및 판매 계획 수립'
  ],
  answer: 3,
  explanation: '관제 업무는 철도차량의 운행 제어/감시, 적법 운행 지도/감독, 사고 복구 지시, 관제 시설 관리 등을 포함하며 차량 제작/판매는 포함되지 않는다.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_003',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제 기관 또는 종사자가 철도차량의 안전 운행을 위하여 관계자에게 지시 또는 조치를 하는 것을 무엇이라 하는가?',
  options: ['관제 승인', '관제 지시', '운전 정리', '열차 통제'],
  answer: 1,
  explanation: '‘관제 지시’란 관제 기관 또는 관제 업무 종사자가 철도차량의 안전 운행을 위하여... 지시 또는 필요한 조치를 하는 것을 말한다.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_004',
  subject: 'urban',
  chapter: '관제일반',
  question: '운전 정리의 종류 중 "지연 열차의 도착을 기다리지 아니하고 따로 열차를 조성하여 출발시키는 것"은?',
  options: ['운전 휴지', '특발', '합병', '타절'],
  answer: 1,
  explanation: '특발 : 지연 열차의 도착을 기다리지 아니하고 따로 열차를 조성하여 출발시키는 것.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_005',
  subject: 'urban',
  chapter: '관제일반',
  question: '운전 정리의 종류 중 "운행 중 둘 이상의 열차를 1개 열차로 편성하여 운행하는 것"은?',
  options: ['특발', '합병(열차 합병)', '교행 변경', '편성 차량 변경'],
  answer: 1,
  explanation: '열차 합병 : 운행 중 둘 이상의 열차를 1개 열차로 편성하여 운행하는 것.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_006',
  subject: 'urban',
  chapter: '관제일반',
  question: '복선 구간에서 사고 등으로 한쪽 방향 선로를 사용할 수 없을 때 다른 방향 선로로 상·하행 열차를 운행하는 것은?',
  options: ['대피 변경', '단선 운행', '운행 선로 변경', '교행 변경'],
  answer: 1,
  explanation: '단선 운행 : 복선 구간에서 사고 등 기타로 한쪽 방향의 선로를 사용할 수 없는 경우, 다른 방향의 선로를 사용하여 상·하행 열차를 운행하는 것.',
  source: '도시철도 10장 10.2.1'
},

// 10.3 열차 통제
{
  id: 'control_10_007',
  subject: 'urban',
  chapter: '관제일반',
  question: '열차 번호 부여 원칙에 대한 설명으로 옳은 것은?',
  options: [
    '상행 열차는 홀수, 하행 열차는 짝수',
    '하행 열차는 홀수, 상행 열차는 짝수',
    '모든 열차는 순서대로 짝수 부여',
    '모든 열차는 순서대로 홀수 부여'
  ],
  answer: 1,
  explanation: '하행 열차는 홀수로 표시하고 상행 열차는 짝수로 표시하는 것을 원칙으로 한다.',
  source: '도시철도 10장 10.3.2'
},
{
  id: 'control_10_008',
  subject: 'urban',
  chapter: '관제일반',
  question: '운영 기관을 달리하는 전동 열차의 열차 번호 표기법으로 옳은 것은?',
  options: [
    '한국철도공사 K, 서울교통공사 S',
    '한국철도공사 S, 서울교통공사 K',
    '한국철도공사 A, 서울교통공사 B',
    '모두 영문 없이 숫자만 표기'
  ],
  answer: 0,
  explanation: '열차 번호 앞에 한국철도공사의 경우 K를, 서울교통공사의 경우 S를 붙여 표기한다.',
  source: '도시철도 10장 10.3.2'
},
{
  id: 'control_10_009',
  subject: 'urban',
  chapter: '관제일반',
  question: '알파벳 열차 종별 중 "특발 열차"를 나타내는 기호는?',
  options: ['M', 'F', 'T', 'G'],
  answer: 2,
  explanation: 'T : 특발 열차 (이례 사항 발생 시 지연 열차에 대한 중간 역에서 특발).',
  source: '도시철도 10장 10.3.3'
},
{
  id: 'control_10_010',
  subject: 'urban',
  chapter: '관제일반',
  question: '알파벳 열차 종별 중 "사업 시작 전 출고되는 전동 열차 회송"을 나타내는 기호는?',
  options: ['H', 'D', 'F', 'G'],
  answer: 2,
  explanation: 'F : 전동 열차 회송 (사업 시작 전 출고 열차). 참고로 H는 여객열차 회송(출고)이다.',
  source: '도시철도 10장 10.3.3'
},
{
  id: 'control_10_011',
  subject: 'urban',
  chapter: '관제일반',
  question: '알파벳 열차 종별 중 "사업 종료 후 차량 기지로 입고되는 단행 열차"는?',
  options: ['M', 'L', 'Y', 'R'],
  answer: 0,
  explanation: 'M : 단행 열차 회송 (사업 종료 후 차량 기지로 입고되는 단행 열차).',
  source: '도시철도 10장 10.3.3'
},
{
  id: 'control_10_012',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제 업무 종사자가 운전 정리를 시행할 때 가장 우선순위가 높은 기준은?',
  options: [
    '열차 등급에 따른 상위 열차',
    '속도가 빠른 열차',
    '운전 구간이 긴 열차',
    '먼저 도착한 열차'
  ],
  answer: 0,
  explanation: '운전 정리 순서 1순위: 열차 등급에 따른 상위 열차.',
  source: '도시철도 10장 10.3.5'
},
{
  id: 'control_10_013',
  subject: 'urban',
  chapter: '관제일반',
  question: '동일한 철도 운영자의 동급 열차 간 운전 정리 시 우선순위 기준은?',
  options: [
    '열차 번호가 빠른 열차',
    '속도가 빠르거나 운전 구간이 긴 열차',
    '승객이 적은 열차',
    '나중에 출발한 열차'
  ],
  answer: 1,
  explanation: '2순위: 동일한 철도 운영자의 동급 열차는 속도가 빠르거나 운전 구간이 긴 열차.',
  source: '도시철도 10장 10.3.5'
},
{
  id: 'control_10_014',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제사가 근무 중 승인 사항을 입력하는 시스템 명칭은?',
  options: ['XROIS', 'SCADA', 'CBS', 'ERP'],
  answer: 0,
  explanation: '관제사는 근무 중 특별한 사유로 승인한 사항을 철도 운행 정보 시스템(XROIS)에 입력한다.',
  source: '도시철도 10장 10.3.6'
},
{
  id: 'control_10_015',
  subject: 'urban',
  chapter: '관제일반',
  question: '사전 계획되지 않은 긴급 열차 운행 승인 또는 조정은 열차 출발 최소 몇 시간 이내에 시행하는가?',
  options: ['12시간', '24시간', '48시간', '72시간'],
  answer: 3,
  explanation: '열차 출발 또는 작업 개시 72시간 이내에 시행하여야 하는 사전 계획되지 아니한 긴급·임시 철도차량의 운행 설정·승인...',
  source: '도시철도 10장 10.3.6.1'
},

// 10.4 사고 장애 조치
{
  id: 'control_10_016',
  subject: 'urban',
  chapter: '관제일반',
  question: '철도안전법상 "철도 사고"의 정의에 해당하지 않는 것은?',
  options: [
    '사람이 죽은 경우',
    '사람이 다친 경우',
    '물건이 파손된 경우',
    '단순 지연 운행'
  ],
  answer: 3,
  explanation: '철도 사고란 철도 운영과 관련하여 사람이 죽거나 다치거나 물건이 파손되는 사고를 말한다. 단순 지연은 운행 장애에 해당할 수 있다.',
  source: '도시철도 10장 10.4.1'
},
{
  id: 'control_10_017',
  subject: 'urban',
  chapter: '관제일반',
  question: '철도 사고 유형 중 "열차 충돌 사고"의 정의는?',
  options: [
    '열차 바퀴가 궤도를 이탈한 사고',
    '열차에서 화재가 발생한 사고',
    '열차가 다른 열차 또는 장애물과 충돌/접촉하여 운행을 중지한 사고',
    '건널목에서 자동차와 충돌한 사고'
  ],
  answer: 2,
  explanation: '열차 충돌 사고: 열차가 다른 열차(철도차량) 또는 장애물과 충돌하거나 접촉하여 운행을 중지한 사고.',
  source: '도시철도 10장 10.4.2.1'
},
{
  id: 'control_10_018',
  subject: 'urban',
  chapter: '관제일반',
  question: '철도 사고 보고 지침상 "사망자"의 기준은?',
  options: [
    '즉시 사망 또는 7일 이내 사망',
    '즉시 사망 또는 30일 이내 사망',
    '즉시 사망 또는 24시간 이내 사망',
    '현장에서 사망한 경우만 해당'
  ],
  answer: 1,
  explanation: '사망자: 사고로 즉시 사망하거나 30일 이내에 사망한 사람.',
  source: '도시철도 10장 10.4.2.1'
},
{
  id: 'control_10_019',
  subject: 'urban',
  chapter: '관제일반',
  question: '고속 열차 및 전동 열차의 "지연 운행" 기준 시간은?',
  options: ['10분 이상', '20분 이상', '30분 이상', '60분 이상'],
  answer: 1,
  explanation: '고속 열차 및 전동 열차는 20분 이상 지연된 경우를 지연 운행(운행 장애)이라 한다.',
  source: '도시철도 10장 10.4.2.1'
},
{
  id: 'control_10_020',
  subject: 'urban',
  chapter: '관제일반',
  question: '일반 여객열차의 "지연 운행" 기준 시간은?',
  options: ['20분 이상', '30분 이상', '40분 이상', '60분 이상'],
  answer: 1,
  explanation: '일반 여객열차는 30분 이상 지연된 경우 지연 운행이라 한다.',
  source: '도시철도 10장 10.4.2.1'
},
{
  id: 'control_10_021',
  subject: 'urban',
  chapter: '관제일반',
  question: '화물열차의 "지연 운행" 기준 시간은?',
  options: ['20분 이상', '30분 이상', '40분 이상', '60분 이상'],
  answer: 3,
  explanation: '화물열차 및 기타 열차는 60분 이상 지연된 경우 지연 운행이라 한다.',
  source: '도시철도 10장 10.4.2.1'
},
{
  id: 'control_10_022',
  subject: 'urban',
  chapter: '관제일반',
  question: '철도 사고 발생 시 사고 복구 기본 원칙 중 첫 번째 우선순위는?',
  options: ['본선 개통', '민간 재산 보호', '철도 재산 보호', '인명 구조 및 안전 조치'],
  answer: 3,
  explanation: '사고 복구 기본 원칙: 첫째 인명 구조 및 안전 조치, 둘째 본선 개통, 셋째 민간 및 철도 재산의 보호.',
  source: '도시철도 10장 10.4.4'
},
{
  id: 'control_10_023',
  subject: 'urban',
  chapter: '관제일반',
  question: '국토교통부 장관에게 "즉시 보고"하여야 하는 사고 기준이 아닌 것은?',
  options: [
    '열차의 충돌이나 탈선 사고',
    '화재가 발생하여 운행을 중지시킨 사고',
    '3명 이상의 사상자가 발생한 사고',
    '1천만 원 이상의 재산 피해가 발생한 사고'
  ],
  answer: 3,
  explanation: '재산 피해 기준은 5천만 원 이상일 때 즉시 보고 대상이다.',
  source: '도시철도 10장 10.4.4'
},
{
  id: 'control_10_024',
  subject: 'urban',
  chapter: '관제일반',
  question: '철도 사고 발생 시 "후속 조치" 사항으로 여객 안전을 위해 개방할 수 있는 것은?',
  options: ['운전실 문', '비상문', '수동 제동기', '연결기'],
  answer: 1,
  explanation: '여객의 안전을 확보하기 위하여 필요한 경우 철도차량의 비상문을 개방할 것.',
  source: '도시철도 10장 10.4.4'
},
{
  id: 'control_10_025',
  subject: 'urban',
  chapter: '관제일반',
  question: '열차 화재 발생 시 관제사가 지시해야 할 조치로 가장 올바른 것은?',
  options: [
    '무조건 현 위치에 즉시 정차시킨다',
    '가급적 최근 역 또는 지하 구간 밖으로 운행하도록 지시한다',
    '승객을 차내에 대기시킨다',
    '출입문을 폐쇄한다'
  ],
  answer: 1,
  explanation: '화재가 발생한 열차는 가급적 최근 역 또는 지하 구간 밖으로 운행하여 신속한 승객 대피가 이루어지도록 해야 한다.',
  source: '도시철도 10장 10.4.4.1'
},
{
  id: 'control_10_026',
  subject: 'urban',
  chapter: '관제일반',
  question: '열차 화재로 정차 시 출입문과 승강장 안전문(PSD)의 상태는?',
  options: ['폐쇄 상태 유지', '개방 상태 유지', '기관사 재량', '반만 개방'],
  answer: 1,
  explanation: '정차 시에는 출입문과 PSD를 개방 상태로 유지하도록 지시하여야 한다.',
  source: '도시철도 10장 10.4.4.1'
},
{
  id: 'control_10_027',
  subject: 'urban',
  chapter: '관제일반',
  question: '열차 충돌 시 기관사가 시행해야 할 무선 방호 채널은?',
  options: ['1번', '2번', '3번', '4번'],
  answer: 1,
  explanation: '무선 방호(채널 2번 전환) → 제00열차 OO~▽▽역 간 무선 방호 (3~5회 반복).',
  source: '도시철도 10장 10.4.4.1'
},
{
  id: 'control_10_028',
  subject: 'urban',
  chapter: '관제일반',
  question: '정거장 내에서 사고 발생 시 급보 책임자는?',
  options: ['기관사', '역장', '승무원', '목격자'],
  answer: 1,
  explanation: '정거장 내(전용선 내 입환 포함) 사고의 급보 책임자는 역장이다.',
  source: '도시철도 10장 10.4.4.1'
},
{
  id: 'control_10_029',
  subject: 'urban',
  chapter: '관제일반',
  question: '사고 보고 공통 사항인 육하원칙에 해당하지 않는 것은?',
  options: ['언제', '어디서', '누가', '얼마나(비용)'],
  answer: 3,
  explanation: '공통 사항(육하원칙): 언제, 어디서, 누가, 왜, 어떻게, 무엇을. 비용은 초기 급보 사항의 육하원칙 요소가 아니다.',
  source: '도시철도 10장 10.4.4.1'
},
{
  id: 'control_10_030',
  subject: 'urban',
  chapter: '관제일반',
  question: '도시철도 터널 내 사고 복구 시 기중기 대신 주로 사용하는 장비는?',
  options: ['헬리콥터', '유니목이나 재크키트(Jack Kit)', '대형 트럭', '굴삭기'],
  answer: 1,
  explanation: '터널 내 구조적인 문제로 기중기 출동이 어려워 유니목이나 재크키트(Jack Kit)로 복구하는 경우가 대부분이다.',
  source: '도시철도 10장 10.4.4.2'
},

// 10.5 관제 설비
{
  id: 'control_10_031',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CTC(열차집중제어장치)의 제어 방식 중 컴퓨터 시스템에 따라 자동으로 제어하는 방식은?',
  options: ['AUTO', 'CCM', 'LOCAL', 'MANUAL'],
  answer: 0,
  explanation: '자동 제어 방식(AUTO) : CTC Computer System에 따라 자동으로 제어하는 방식.',
  source: '도시철도 10장 10.5.1'
},
{
  id: 'control_10_032',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CTC 콘솔에서 키보드 및 마우스를 사용하여 수동으로 제어하는 방식은?',
  options: ['AUTO', 'CCM', 'LOCAL', 'REMOTE'],
  answer: 1,
  explanation: '콘솔 제어 방식(C.C.M : Console Control Mode) : CTC 콘솔에서 수동으로 제어하는 방식.',
  source: '도시철도 10장 10.5.1'
},
{
  id: 'control_10_033',
  subject: 'urban',
  chapter: '관제일반',
  question: '피제어 역 자체적으로 신호 및 진로를 제어할 수 있는 제어 방식은?',
  options: ['AUTO', 'CCM', 'LOCAL', 'CENTRAL'],
  answer: 2,
  explanation: '로컬(LOCAL) 제어 : 피제어 역 자체적으로 신호 및 진로를 제어할 수 있는 방식.',
  source: '도시철도 10장 10.5.1'
},
{
  id: 'control_10_034',
  subject: 'urban',
  chapter: '관제일반',
  question: '열차 운행 스케줄을 입력하고 실적을 저장 관리하는 "운행 관리 컴퓨터"의 약어는?',
  options: ['TCC', 'MSC', 'DTS', 'LDP'],
  answer: 1,
  explanation: 'MSC(Management Support Computer) : 열차 운행 계획 작성 및 실적 저장 관리 컴퓨터.',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_035',
  subject: 'urban',
  chapter: '관제일반',
  question: '각 역의 선로 전환기와 신호를 제어하여 열차 운행 제어를 하는 "주 컴퓨터"의 약어는?',
  options: ['TCC', 'MSC', 'LDP', 'CTC'],
  answer: 0,
  explanation: 'TCC(Traffic Control Computer) : 주 컴퓨터, 각 역의 선로 전환기와 신호를 제어.',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_036',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제실에서 열차 운행 상태를 감시할 수 있는 "대형 표시반"의 약어는?',
  options: ['CTC', 'LDP', 'MSC', 'TCC'],
  answer: 1,
  explanation: 'LDP(Large Display Panel) : 대형 표시반.',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_037',
  subject: 'urban',
  chapter: '관제일반',
  question: 'LDP의 주요 표시 사항에 해당하지 않는 것은?',
  options: [
    '궤도회로 개통/점유 표시',
    '선로 전환기 동작 상태 표시',
    '열차 내 승객 수 표시',
    '도착/출발 열차 번호 표시'
  ],
  answer: 2,
  explanation: 'LDP는 궤도회로, 진로, 선로 전환기, 신호기, 열차 번호 등을 표시하지만, 열차 내 실시간 승객 수는 표시하지 않는다.',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_038',
  subject: 'urban',
  chapter: '관제일반',
  question: '도시철도(수도권 전동 열차) 등 운행 밀도가 높은 구간에서 주로 사용하는 열차 다이어그램 종류는?',
  options: ['10분목', '2분목', '1분목', '1시간목'],
  answer: 2,
  explanation: '도시철도(수도권 전동 열차) 등 열차의 운행 밀도가 높은 선로 구간에서는 1분목 다이아가 사용된다.',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_039',
  subject: 'urban',
  chapter: '관제일반',
  question: '1분목 다이어그램에서 시각 표시는 몇 초 단위까지 기호화하여 기입하는가?',
  options: ['10초, 20초, 30초', '15초, 30초, 45초', '5초 단위', '1분 단위만 표시'],
  answer: 1,
  explanation: '시각의 기입, 표시는 15초, 30초, 45초 단위까지 기호화하여 기입할 수 있다.',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_040',
  subject: 'urban',
  chapter: '관제일반',
  question: '통신을 기반으로 열차 위치를 파악하고 제어하는 신호 방식(CBTC)의 약어는?',
  options: ['ATP', 'ATS', 'CBTC', 'CTC'],
  answer: 2,
  explanation: 'CBTC : Communication Based Train Control (통신 기반 열차 제어).',
  source: '도시철도 10장 10.5.3'
},
{
  id: 'control_10_041',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CBTC 운전 모드 중 "ATO 출발 버튼을 누르면 다음 역까지 자동 운전"되는 모드는?',
  options: ['AM', 'SM', 'RM', 'Bypass'],
  answer: 0,
  explanation: '자동 열차 운행 모드(AM) : ATO 출발 버튼을 누르면 다음 정차 역까지 열차의 운전이 자동으로 이루어지는 모드.',
  source: '도시철도 10장 10.5.3.1'
},
{
  id: 'control_10_042',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CBTC 운전 모드 중 "ATP 장치에 의해 제공되는 신호 정보에 의해 수동으로 운전하는 모드"는?',
  options: ['AM', 'SM', 'RM', 'Bypass'],
  answer: 1,
  explanation: 'SM 모드(Supervised Manual) : 감시-수동 열차 운전 모드.',
  source: '도시철도 10장 10.5.3.1'
},
{
  id: 'control_10_043',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CBTC 운전 모드 중 시스템 장애 등으로 제한속도(25km/h) 이하로 수동 운전하는 모드는?',
  options: ['AM', 'SM', 'RM', 'Bypass'],
  answer: 2,
  explanation: 'RM 모드(Restricted Manual) : 제한속도(25km/h) 이하로 수동 운전하는 모드.',
  source: '도시철도 10장 10.5.3.1'
},
{
  id: 'control_10_044',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CBTC 운전 모드 중 차단 위치로 취급하여 수동 운전하는 "비상 운전 모드"는?',
  options: ['AM', 'SM', 'RM', 'Bypass'],
  answer: 3,
  explanation: '비상(Bypass) 운전 모드 : CBTCCOS를 차단 위치로 취급하여 수동 운전하는 모드.',
  source: '도시철도 10장 10.5.3.1'
},
{
  id: 'control_10_045',
  subject: 'urban',
  chapter: '관제일반',
  question: '자동 열차 운행(ATO) 시스템의 기능에 포함되지 않는 것은?',
  options: ['속도 제어', '정 정차(Programmed Stop)', '출입문 제어', '열차 운행 스케줄 작성'],
  answer: 3,
  explanation: 'ATO는 속도 제어, 정 정차, 출입문 제어 등을 수행하며, 스케줄 작성은 ATS/CTC 레벨의 기능이다.',
  source: '도시철도 10장 10.5.3.2 [표 10-5]'
},

// 추가 보충 문제
{
  id: 'control_10_046',
  subject: 'urban',
  chapter: '관제일반',
  question: '열차 다이어그램의 시분선 중앙에 "반원" 또는 "점" 등을 찍어 표시하는 시간 단위는?',
  options: ['1분', '30초', '15초, 45초', '10초'],
  answer: 2,
  explanation: '15초, 45초는 시분선 중앙에 기재(기호화)한다. (30초는 중앙에 짧은 가로선 등, 1분목 다이아 기준)',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_047',
  subject: 'urban',
  chapter: '관제일반',
  question: '전동 열차 구원 운전 시 응급조치 시간이 몇 분을 경과하면 구원 조치를 우선 시행해야 하는가?',
  options: ['5분', '10분', '20분', '30분'],
  answer: 1,
  explanation: '응급조치 시간이 10분을 경과한 경우 관제 운영실장과 협의 후 구원 조치를 우선 시행한다.',
  source: '도시철도 10장 10.4.4.1'
},
{
  id: 'control_10_048',
  subject: 'urban',
  chapter: '관제일반',
  question: '대구 지하철 1호선 중앙로역 화재 사고가 발생한 연도는?',
  options: ['2001년', '2002년', '2003년', '2004년'],
  answer: 2,
  explanation: '2003년 2월 18일 대구 지하철 1호선 중앙로역 구내에서 화재 사고가 발생했다.',
  source: '도시철도 10장 10.4.3'
},
{
  id: 'control_10_049',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제 업무 승인 기록부에서 승인 번호 부여 방식은?',
  options: ['월간 일련번호', '연간 일련번호', '일간 일련번호', '주간 일련번호'],
  answer: 1,
  explanation: '승인 번호는 연간 일련번호에 의하여 부여한다(예: 2020-1).',
  source: '도시철도 10장 10.3.6.1'
},
{
  id: 'control_10_050',
  subject: 'urban',
  chapter: '관제일반',
  question: '신호 제어 시스템 중 "개별적인 열차들의 성능을 조절하여 스케줄을 유지"하는 서브 시스템은?',
  options: ['ATC', 'ATP', 'ATS (Automatic Train Supervision)', 'ATO'],
  answer: 2,
  explanation: 'ATS(열차 자동 감시) : 개별적인 열차들의 성능을 조절하여 스케줄을 유지하고 데이터를 제공한다.',
  source: '도시철도 10장 10.5.3.2 [표 10-5]'
},
// ==========================================
// 10.1 관제 일반 개요 & 10.2 관제 업무 (심화)
// ==========================================

{
  id: 'control_10_1_001',
  subject: 'urban',
  chapter: '관제일반',
  question: '도시철도의 정의에 포함되는 교통수단으로 교재에 명시되지 않은 것은?',
  options: ['모노레일', '노면전차', '자기부상열차', '항공기'],
  answer: 3,
  explanation: '도시철도란 철도·모노레일·노면전차·선형 유도전동기·자기부상열차 등 궤도에 의한 교통 시설 및 교통수단을 말한다.',
  source: '도시철도 10장 10.1'
},
{
  id: 'control_10_1_002',
  subject: 'urban',
  chapter: '관제일반',
  question: '우리나라 도시철도가 최초로 개통된 구간과 날짜는?',
  options: ['서울역~청량리역 (1974.8.15)', '서울역~부산역 (1970.8.15)', '신도림~까치산 (1980.5.22)', '강남~신사 (1985.10.18)'],
  answer: 0,
  explanation: '우리나라에서는 1974년 8월 15일 처음으로 서울역에서 청량리역까지 도시철도가 개통되었다.',
  source: '도시철도 10장 10.1'
},
{
  id: 'control_10_1_003',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제 업무의 법적 정의(철도안전법 등)에 해당하지 않는 것은?',
  options: [
    '선로 사용 계획에 따른 철도차량 운행의 제어·통제·감시',
    '철도 시설 운용 상태 관련 조언과 정보 제공',
    '철도차량 등의 적법 운행 여부에 대한 지도·감독',
    '철도차량의 설계 및 제작 승인'
  ],
  answer: 3,
  explanation: '관제 업무에는 운행 제어·통제·감시, 정보 제공, 적법 운행 지도·감독, 사고 복구 지시 등이 포함되나 차량 설계/제작 승인은 포함되지 않는다.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_1_004',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제 기관 또는 종사자가 철도차량의 안전 운행을 위하여 관계자에게 지시 또는 필요한 조치를 하는 행위의 정확한 용어는?',
  options: ['운전 정리', '관제 지시', '관제 승인', '비상 발령'],
  answer: 1,
  explanation: '‘관제 지시’란 관제 기관 또는 관제 업무 종사자가... 지시 또는 필요한 조치를 하는 것을 말한다.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_1_005',
  subject: 'urban',
  chapter: '관제일반',
  question: '철도 사고 등으로 열차 운행에 혼란이 발생할 경우 열차의 운행 조건 및 일정 등을 변경하는 수단을 무엇이라 하는가?',
  options: ['운전 정리', '운전 명령', '임시 운전', '비상 운전'],
  answer: 0,
  explanation: '‘운전 정리’란 철도 사고 등으로 열차 운행에 혼란이 발생하거나... 열차가 정상적으로 운행할 수 있도록 행하는 수단이다.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_1_006',
  subject: 'urban',
  chapter: '관제일반',
  question: '운전 정리의 종류 중 "지연 열차의 도착을 기다리지 아니하고 따로 열차를 조성하여 출발시키는 것"은?',
  options: ['특발', '운전 휴지', '타절', '임시 열차 운전'],
  answer: 0,
  explanation: '특발 : 지연 열차의 도착을 기다리지 아니하고 따로 열차를 조성하여 출발시키는 것.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_1_007',
  subject: 'urban',
  chapter: '관제일반',
  question: '운전 정리의 종류 중 "운행 중 둘 이상의 열차를 1개 열차로 편성하여 운행하는 것"은?',
  options: ['열차 합병', '편성 차량 변경', '복합 열차 운전', '중련 운전'],
  answer: 0,
  explanation: '열차 합병 : 운행 중 둘 이상의 열차를 1개 열차로 편성하여 운행하는 것.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_1_008',
  subject: 'urban',
  chapter: '관제일반',
  question: '운전 정리의 종류 중 "복선 구간에서 한쪽 방향 선로를 사용할 수 없을 때 다른 방향 선로로 상·하행 열차를 운행하는 것"은?',
  options: ['단선 운행', '반복 운전', '퇴행 운전', '대피 변경'],
  answer: 0,
  explanation: '단선 운행 : 복선 구간에서 사고 등 기타로 한쪽 방향의 선로를 사용할 수 없는 경우, 다른 방향의 선로를 사용하여 상·하행 열차를 운행하는 것.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_1_009',
  subject: 'urban',
  chapter: '관제일반',
  question: '운전 정리의 종류 중 "소정의 열차 운행 방향을 변경하지 않고 운행 선로를 변경하는 것"은?',
  options: ['운행 선로 변경', '교행 변경', '대피 변경', '운행 순서 변경'],
  answer: 0,
  explanation: '운행 선로 변경 : 소정의 열차 운행 방향을 변경하지 않고 운행 선로를 변경하는 것.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_1_010',
  subject: 'urban',
  chapter: '관제일반',
  question: '운전 정리 종류 중 "단선 구간에서 열차의 교행 정거장을 변경하는 것"은?',
  options: ['교행 변경', '대피 변경', '순서 변경', '합병'],
  answer: 0,
  explanation: '교행 변경 : 단선 구간에서 열차의 교행 정거장을 변경하는 것.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_1_011',
  subject: 'urban',
  chapter: '관제일반',
  question: '운전 정리 종류 중 "복선 구간에서 열차의 대피 정거장을 변경하는 것"은?',
  options: ['대피 변경', '교행 변경', '특발', '운전 휴지'],
  answer: 0,
  explanation: '대피 변경 : 복선 구간에서 열차의 대피 정거장을 변경하는 것.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_1_012',
  subject: 'urban',
  chapter: '관제일반',
  question: '운전 정리 종류 중 "먼저 운행할 열차의 운행 시각을 변경하지 않고 운행 순서를 변경하는 것"은?',
  options: ['운행 순서 변경', '운행 시각 변경', '교행 변경', '특발'],
  answer: 0,
  explanation: '운행 순서 변경 : 먼저 운행할 열차의 운행 시각을 변경하지 않고 운행 순서를 변경하는 것.',
  source: '도시철도 10장 10.2.1'
},
{
  id: 'control_10_1_013',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제 업무 수행자의 직원으로 관제 기관에서 관제 업무를 수행하는 사람의 정의는?',
  options: ['관제 업무 종사자', '관제 업무 수행자', '철도 운영자', '철도 시설 관리자'],
  answer: 0,
  explanation: '“관제 업무 종사자”란 관제 업무 수행자의 직원으로 관제 기관에서 관제 업무를 수행하는 사람을 말한다.',
  source: '도시철도 10장 10.2.1'
},

// ==========================================
// 10.3 열차 통제 (심화)
// ==========================================

{
  id: 'control_10_3_001',
  subject: 'urban',
  chapter: '관제일반',
  question: '열차 번호 부여 시 하행 열차와 상행 열차의 번호 구분 원칙은?',
  options: ['하행 짝수, 상행 홀수', '하행 홀수, 상행 짝수', '구분 없이 순차 부여', '노선별로 다름'],
  answer: 1,
  explanation: '하행 열차는 홀수로 표시하고 상행 열차는 짝수로 표시하는 것을 원칙으로 한다.',
  source: '도시철도 10장 10.3.2'
},
{
  id: 'control_10_3_002',
  subject: 'urban',
  chapter: '관제일반',
  question: '운영 기관이 다른 전동 열차의 열차 번호 표기 시 한국철도공사(KORAIL) 소속 차량의 식별 문자는?',
  options: ['S', 'K', 'M', 'R'],
  answer: 1,
  explanation: '한국철도공사의 경우 K를, 서울교통공사의 경우 S를 붙여 표기한다.',
  source: '도시철도 10장 10.3.2'
},
{
  id: 'control_10_3_003',
  subject: 'urban',
  chapter: '관제일반',
  question: '2개 이상 선구에 걸쳐 운전하는 경우 열차 번호 기준이 되는 선구는?',
  options: ['중요 선구', '지선 선구', '최초 출발 선구', '최종 도착 선구'],
  answer: 0,
  explanation: '2개 이상 선구에 걸쳐 운전하는 경우에는 중요 선구를 기준으로 한다.',
  source: '도시철도 10장 10.3.2'
},
{
  id: 'control_10_3_004',
  subject: 'urban',
  chapter: '관제일반',
  question: '알파벳 열차 종별 중 "사업 종료 후 차량 기지로 입고되는 여객열차"를 의미하는 코드는?',
  options: ['H', 'D', 'F', 'G'],
  answer: 1,
  explanation: 'D : 여객열차 회송 (사업 종료 후 차량 기지로 입고되는 여객열차).',
  source: '도시철도 10장 10.3.3'
},
{
  id: 'control_10_3_005',
  subject: 'urban',
  chapter: '관제일반',
  question: '알파벳 열차 종별 중 "사업 시작 전 출고되는 전동 열차 회송"을 의미하는 코드는?',
  options: ['F', 'G', 'H', 'D'],
  answer: 0,
  explanation: 'F : 전동 열차 회송 (사업 시작 전 출고 열차). (G는 입고 열차)',
  source: '도시철도 10장 10.3.3'
},
{
  id: 'control_10_3_006',
  subject: 'urban',
  chapter: '관제일반',
  question: '알파벳 열차 종별 중 "단행 열차 회송(사업 시작 전 출고)"을 의미하는 코드는?',
  options: ['L', 'M', 'Y', 'R'],
  answer: 0,
  explanation: 'L : 단행 열차 회송 (사업 시작 전 차량 기지로부터 출고되는 단행 열차).',
  source: '도시철도 10장 10.3.3'
},
{
  id: 'control_10_3_007',
  subject: 'urban',
  chapter: '관제일반',
  question: '알파벳 열차 종별 중 "특발 열차"를 의미하는 코드는?',
  options: ['T', 'S', 'K', 'P'],
  answer: 0,
  explanation: 'T : 특발 열차 (이례 사항 발생 시 지연 열차에 대한 중간 역에서 특발).',
  source: '도시철도 10장 10.3.3'
},
{
  id: 'control_10_3_008',
  subject: 'urban',
  chapter: '관제일반',
  question: '운전 정리 시행 시 1순위 기준은 무엇인가?',
  options: [
    '속도가 빠른 열차',
    '열차 등급에 따른 상위 열차',
    '운전 구간이 긴 열차',
    '승객이 많은 열차'
  ],
  answer: 1,
  explanation: '1. 열차 등급에 따른 상위 열차.',
  source: '도시철도 10장 10.3.5'
},
{
  id: 'control_10_3_009',
  subject: 'urban',
  chapter: '관제일반',
  question: '동일한 철도 운영자의 동급 열차 간 운전 정리 시 2순위 기준은?',
  options: [
    '속도가 빠르거나 운전 구간이 긴 열차',
    '먼저 도착한 열차',
    '열차 번호 순서',
    '차량 상태가 양호한 열차'
  ],
  answer: 0,
  explanation: '2. 동일한 철도 운영자의 동급 열차는 속도가 빠르거나 운전 구간이 긴 열차.',
  source: '도시철도 10장 10.3.5'
},
{
  id: 'control_10_3_010',
  subject: 'urban',
  chapter: '관제일반',
  question: '서로 다른 철도 운영자 간의 동급 열차 운전 정리 원칙은?',
  options: [
    '무조건 먼저 진입한 열차 우선',
    '열차 운행 계획에 따라 운행함이 원칙',
    '속도가 빠른 열차 우선',
    '승객 수가 많은 열차 우선'
  ],
  answer: 1,
  explanation: '3. 서로 다른 철도 운영자 간의 동급 열차는 열차 운행 계획에 따라 운행함을 원칙으로 하되...',
  source: '도시철도 10장 10.3.5'
},
{
  id: 'control_10_3_011',
  subject: 'urban',
  chapter: '관제일반',
  question: '사전 계획되지 않은 긴급·임시 철도차량의 운행 승인은 열차 출발 최소 몇 시간 이내에 시행해야 하는가?',
  options: ['24시간', '36시간', '48시간', '72시간'],
  answer: 3,
  explanation: '열차 출발 또는 작업 개시 72시간 이내에 시행하여야 하는 사전 계획되지 아니한 긴급·임시 철도차량의 운행 설정·승인...',
  source: '도시철도 10장 10.3.6.1'
},
{
  id: 'control_10_3_012',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제 업무 승인 기록부에서 승인 번호는 어떤 방식으로 부여하는가?',
  options: ['월간 일련번호', '연간 일련번호', '일간 일련번호', '무작위 번호'],
  answer: 1,
  explanation: '승인 번호는 연간 일련번호에 의하여 부여한다(예: 2020-1).',
  source: '도시철도 10장 10.3.6.1'
},
{
  id: 'control_10_3_013',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제 업무 승인 기록부에 기록해야 할 내용이 아닌 것은?',
  options: ['승인 번호', '승인 내용 및 지시 사항', '승인 요구자 소속/성명', '열차 내 승객 수'],
  answer: 3,
  explanation: '승인 기록부 양식에는 승인 번호, 일시, 내용, 요구자 및 승인자 정보가 포함되며 승객 수는 포함되지 않는다.',
  source: '도시철도 10장 [표 10-1]'
},
{
  id: 'control_10_3_014',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제사가 근무 중 특별한 사유로 승인한 사항을 입력하는 전산 시스템 명칭은?',
  options: ['XROIS', 'KROIS', 'TROIS', 'CROIS'],
  answer: 0,
  explanation: '철도 운행 정보 시스템(XROIS)에 입력한다.',
  source: '도시철도 10장 10.3.6'
},

// ==========================================
// 10.4 사고 장애 발생 시 조치 (심화)
// ==========================================

{
  id: 'control_10_4_001',
  subject: 'urban',
  chapter: '관제일반',
  question: '철도 사고 보고 지침상 "사망자"의 정의는 사고로 즉시 사망하거나 며칠 이내에 사망한 사람인가?',
  options: ['7일 이내', '15일 이내', '30일 이내', '60일 이내'],
  answer: 2,
  explanation: '사망자 : 사고로 즉시 사망하거나 30일 이내에 사망한 사람.',
  source: '도시철도 10장 10.4.2.1'
},
{
  id: 'control_10_4_002',
  subject: 'urban',
  chapter: '관제일반',
  question: '철도 사고 보고 지침상 "부상자"의 정의는 사고로 며칠 이상 입원 치료한 사람인가?',
  options: ['12시간 이상', '24시간 이상', '48시간 이상', '3일 이상'],
  answer: 1,
  explanation: '부상자 : 사고로 24시간 이상 입원 치료한 사람.',
  source: '도시철도 10장 10.4.2.1'
},
{
  id: 'control_10_4_003',
  subject: 'urban',
  chapter: '관제일반',
  question: '고속 열차 및 전동 열차의 "지연 운행" 기준 시간은?',
  options: ['10분 이상', '20분 이상', '30분 이상', '40분 이상'],
  answer: 1,
  explanation: '고속 열차 및 전동 열차는 20분 이상 지연된 경우 지연 운행으로 본다.',
  source: '도시철도 10장 10.4.2.1'
},
{
  id: 'control_10_4_004',
  subject: 'urban',
  chapter: '관제일반',
  question: '일반 여객열차의 "지연 운행" 기준 시간은?',
  options: ['20분 이상', '30분 이상', '40분 이상', '60분 이상'],
  answer: 1,
  explanation: '일반 여객열차는 30분 이상 지연된 경우 지연 운행으로 본다.',
  source: '도시철도 10장 10.4.2.1'
},
{
  id: 'control_10_4_005',
  subject: 'urban',
  chapter: '관제일반',
  question: '화물열차의 "지연 운행" 기준 시간은?',
  options: ['30분 이상', '40분 이상', '60분 이상', '120분 이상'],
  answer: 2,
  explanation: '화물열차 및 기타 열차는 60분 이상 지연된 경우 지연 운행으로 본다.',
  source: '도시철도 10장 10.4.2.1'
},
{
  id: 'control_10_4_006',
  subject: 'urban',
  chapter: '관제일반',
  question: '국토교통부 장관에게 즉시 보고하여야 하는 사고 기준 중 재산 피해액 기준은?',
  options: ['1천만 원 이상', '3천만 원 이상', '5천만 원 이상', '1억 원 이상'],
  answer: 2,
  explanation: '철도차량 또는 열차의 운행과 관련하여 5천만 원 이상의 재산 피해가 발생한 사고.',
  source: '도시철도 10장 10.4.4'
},
{
  id: 'control_10_4_007',
  subject: 'urban',
  chapter: '관제일반',
  question: '철도 사고 복구 기본 원칙 3가지를 순서대로 나열한 것은?',
  options: [
    '본선 개통 - 인명 구조 - 재산 보호',
    '인명 구조 및 안전 조치 - 본선 개통 - 민간 및 철도 재산 보호',
    '재산 보호 - 인명 구조 - 본선 개통',
    '인명 구조 - 재산 보호 - 본선 개통'
  ],
  answer: 1,
  explanation: '첫째 인명 구조 및 안전 조치, 둘째 본선 개통, 셋째 민간 및 철도 재산의 보호.',
  source: '도시철도 10장 10.4.4 [그림 10-7]'
},
{
  id: 'control_10_4_008',
  subject: 'urban',
  chapter: '관제일반',
  question: '열차 화재 발생 시 관제사의 조치로 가장 올바른 것은?',
  options: [
    '무조건 현 위치에 정차시킨다',
    '가급적 최근 역 또는 지하 구간 밖으로 운행하도록 한다',
    '출입문을 폐쇄하고 대기시킨다',
    '후속 열차를 접근시킨다'
  ],
  answer: 1,
  explanation: '화재가 발생한 열차는 가급적 최근 역 또는 지하 구간 밖으로 운행하여 신속한 승객 대피가 이루어지도록...',
  source: '도시철도 10장 10.4.4.1'
},
{
  id: 'control_10_4_009',
  subject: 'urban',
  chapter: '관제일반',
  question: '열차 충돌 시 기관사가 시행해야 하는 무선 방호 채널은?',
  options: ['1번', '2번', '3번', '4번'],
  answer: 1,
  explanation: '무선 방호(채널 2번 전환) → 제00열차 OO~▽▽역 간 무선 방호 (3~5회 반복).',
  source: '도시철도 10장 10.4.4.1'
},
{
  id: 'control_10_4_010',
  subject: 'urban',
  chapter: '관제일반',
  question: '정거장 내 사고 발생 시 급보 책임자는 누구인가?',
  options: ['기관사', '역장', '관제사', '최초 목격자'],
  answer: 1,
  explanation: '정거장 내(전용선 내 입환 포함) 사고 급보 책임자는 역장이다.',
  source: '도시철도 10장 [표 10-2]'
},
{
  id: 'control_10_4_011',
  subject: 'urban',
  chapter: '관제일반',
  question: '전동 열차 구원 운전 시 응급조치 시간이 몇 분을 경과하면 구원 조치를 우선 시행해야 하는가?',
  options: ['5분', '10분', '15분', '20분'],
  answer: 1,
  explanation: '응급조치 시간이 10분을 경과한 경우... 구원 조치를 우선 시행한다.',
  source: '도시철도 10장 10.4.4.1'
},
{
  id: 'control_10_4_012',
  subject: 'urban',
  chapter: '관제일반',
  question: '도시철도 터널 내 사고 복구 시 기중기 대신 주로 사용하는 장비는?',
  options: ['헬리콥터', '유니목 또는 재크키트(Jack Kit)', '굴삭기', '트랙터'],
  answer: 1,
  explanation: '터널 내 구조적인 문제로 기중기 출동이 어려워 유니목이나 재크키트(Jack Kit)로 복구하는 경우가 대부분이다.',
  source: '도시철도 10장 10.4.4.2'
},
{
  id: 'control_10_4_013',
  subject: 'urban',
  chapter: '관제일반',
  question: '열차 화재로 정차 시 출입문과 승강장 안전문(PSD)은 어떤 상태를 유지해야 하는가?',
  options: ['개방 상태 유지', '폐쇄 상태 유지', '반만 개방', '기관사 재량'],
  answer: 0,
  explanation: '정차 시에는 출입문과 PSD를 개방 상태로 유지하도록 지시하여야 한다.',
  source: '도시철도 10장 10.4.4.1'
},
{
  id: 'control_10_4_014',
  subject: 'urban',
  chapter: '관제일반',
  question: '철도 사고 보고 공통 사항(육하원칙)에 포함되지 않는 것은?',
  options: ['언제', '어디서', '누가', '얼마나(비용)'],
  answer: 3,
  explanation: '공통 사항: 언제, 어디서, 누가, 왜, 어떻게, 무엇을. 비용은 초기 급보 사항의 육하원칙에 명시되어 있지 않음.',
  source: '도시철도 10장 [표 10-3]'
},
{
  id: 'control_10_4_015',
  subject: 'urban',
  chapter: '관제일반',
  question: '사고 발생 시 기관사가 인접 역에 통보해야 할 내용으로 교재 예시에 없는 것은?',
  options: ['일시 및 장소', '열차 번호', '사상자 발생 여부', '승객 명단'],
  answer: 3,
  explanation: '일시, 장소, 열차, 개황, 사상자 발생 여부, 인접 선로 지장 여부 등을 보고하며 승객 명단은 포함되지 않는다.',
  source: '도시철도 10장 10.4.4.1'
},

// ==========================================
// 10.5 관제 설비 (심화)
// ==========================================

{
  id: 'control_10_5_001',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CTC 제어 방식 중 "CTC Computer System에 따라 자동으로 제어하는 방식"은?',
  options: ['AUTO', 'CCM', 'LOCAL', 'MANUAL'],
  answer: 0,
  explanation: '자동 제어 방식(AUTO) : CTC Computer System에 따라 자동으로 제어하는 방식.',
  source: '도시철도 10장 10.5.1'
},
{
  id: 'control_10_5_002',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CTC 제어 방식 중 "CTC 콘솔에서 키보드 및 마우스를 사용하여 수동으로 제어하는 방식"은?',
  options: ['AUTO', 'CCM', 'LOCAL', 'REMOTE'],
  answer: 1,
  explanation: '콘솔 제어 방식(C.C.M : Console Control Mode).',
  source: '도시철도 10장 10.5.1'
},
{
  id: 'control_10_5_003',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CTC 제어 방식 중 "피제어 역 자체적으로 신호 및 진로를 제어하는 방식"은?',
  options: ['AUTO', 'CCM', 'LOCAL', 'STATION'],
  answer: 2,
  explanation: '로컬(LOCAL) 제어 : 피제어 역 자체적으로 신호 및 진로를 제어할 수 있는 제어 방식.',
  source: '도시철도 10장 10.5.1'
},
{
  id: 'control_10_5_004',
  subject: 'urban',
  chapter: '관제일반',
  question: '열차 운행 계획(DIA)을 작성하고 실적을 저장 관리하는 컴퓨터의 약어는?',
  options: ['MSC', 'TCC', 'DTS', 'LDP'],
  answer: 0,
  explanation: '운행 관리 컴퓨터 : MSC(Management Support Computer).',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_5_005',
  subject: 'urban',
  chapter: '관제일반',
  question: '각 역의 선로 전환기와 신호를 제어하여 열차 운행 제어를 하는 주 컴퓨터는?',
  options: ['TCC', 'MSC', 'CTC', 'ATP'],
  answer: 0,
  explanation: '주 컴퓨터 : TCC(Traffic Control Computer).',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_5_006',
  subject: 'urban',
  chapter: '관제일반',
  question: '관제실에서 선로 전환기, 신호 현시, 열차 위치 등을 감시할 수 있는 대형 표시반의 약어는?',
  options: ['LDP', 'GDP', 'TDP', 'SDP'],
  answer: 0,
  explanation: '대형 표시반 : LDP(Large Display Panel).',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_5_007',
  subject: 'urban',
  chapter: '관제일반',
  question: 'LDP의 주요 표시 사항에 해당하지 않는 것은?',
  options: [
    '궤도회로 개통·점유 표시',
    '선로 전환기 동작 상태 표시',
    '열차 내 온도 표시',
    '도착·출발 열차 표시'
  ],
  answer: 2,
  explanation: 'LDP는 궤도, 진로, 선로 전환기, 신호기, 열차 번호 등을 표시하지만 열차 내 온도는 표시하지 않는다.',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_5_008',
  subject: 'urban',
  chapter: '관제일반',
  question: '도시철도와 같이 운행 밀도가 높은 구간에서 사용하는 열차 다이어그램의 종류는?',
  options: ['1시간목', '10분목', '2분목', '1분목'],
  answer: 3,
  explanation: '도시철도(수도권 전동 열차) 등 열차의 운행 밀도가 높은 선로 구간에서는 1분목 다이아가 사용된다.',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_5_009',
  subject: 'urban',
  chapter: '관제일반',
  question: '1분목 다이어그램에서 시각 표시는 몇 초 단위까지 기호화하여 기입하는가?',
  options: ['10초, 20초, 30초', '15초, 30초, 45초', '5초 단위', '단위 없음'],
  answer: 1,
  explanation: '시각의 기입, 표시는 15초, 30초, 45초 단위까지 기호화하여 기입할 수 있다.',
  source: '도시철도 10장 10.5.2'
},
{
  id: 'control_10_5_010',
  subject: 'urban',
  chapter: '관제일반',
  question: '통신을 기반으로 열차 위치를 파악하고 제어하는 신호 방식(CBTC)의 약어는?',
  options: ['CBTC', 'ATC', 'ATS', 'ATP'],
  answer: 0,
  explanation: 'CBTC : Communication Based Train Control.',
  source: '도시철도 10장 10.5.3'
},
{
  id: 'control_10_5_011',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CBTC 운전 모드 중 "ATO 출발 버튼을 누르면 다음 역까지 자동 운전"되는 모드는?',
  options: ['AM', 'SM', 'RM', 'Bypass'],
  answer: 0,
  explanation: '자동 열차 운행 모드(AM) : ATO 출발 버튼을 누르면 다음 정차 역까지 열차의 운전이 자동으로 이루어지는 모드.',
  source: '도시철도 10장 10.5.3.1'
},
{
  id: 'control_10_5_012',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CBTC 운전 모드 중 "지상 ATP 장치에 의해 제공되는 신호 정보에 의해 수동으로 운전하는 모드"는?',
  options: ['AM', 'SM', 'RM', 'Bypass'],
  answer: 1,
  explanation: 'SM 모드(Supervised Manual) : 감시-수동 열차 운전 모드.',
  source: '도시철도 10장 10.5.3.1'
},
{
  id: 'control_10_5_013',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CBTC 운전 모드 중 시스템 장애 시 제한속도(25km/h) 이하로 수동 운전하는 모드는?',
  options: ['AM', 'SM', 'RM', 'Bypass'],
  answer: 2,
  explanation: 'RM 모드(Restricted Manual) : 제한속도(25km/h) 이하로 수동 운전하는 모드.',
  source: '도시철도 10장 10.5.3.1'
},
{
  id: 'control_10_5_014',
  subject: 'urban',
  chapter: '관제일반',
  question: 'CBTC 운전 모드 중 "차단 위치로 취급하여 수동 운전하는 비상 운전 모드"는?',
  options: ['AM', 'SM', 'RM', 'Bypass'],
  answer: 3,
  explanation: '비상(Bypass) 운전 모드 : CBTCCOS를 차단 위치로 취급하여 수동 운전하는 모드.',
  source: '도시철도 10장 10.5.3.1'
},
{
  id: 'control_10_5_015',
  subject: 'urban',
  chapter: '관제일반',
  question: '신호 제어 시스템 서브시스템 중 "개별적인 열차들의 성능을 조절하여 스케줄을 유지"하는 기능은?',
  options: ['ATC', 'ATP', 'ATS', 'ATO'],
  answer: 2,
  explanation: '열차 자동 감시(ATS) : 개별적인 열차들의 성능을 조절하여 스케줄을 유지하고 데이터를 제공한다.',
  source: '도시철도 10장 [표 10-5]'
},
{
  id: 'control_10_5_016',
  subject: 'urban',
  chapter: '관제일반',
  question: '자동 열차 운행(ATO) 시스템의 기능에 포함되지 않는 것은?',
  options: ['속도 제어', '정 정차(Programmed Stop)', '출입문 제어', '열차 간격 유지(ATP 기능)'],
  answer: 3,
  explanation: '열차 간격 유지 및 충돌 방지는 ATP(열차 자동 보호)의 기능이다. ATO는 속도 제어, 정 정차, 출입문 제어 등을 수행한다.',
  source: '도시철도 10장 [표 10-5]'
}

];