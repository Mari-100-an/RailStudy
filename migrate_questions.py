#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
questions.js를 과목별로 분리하는 스크립트
"""

import re
import json
from pathlib import Path

# 파일 경로
QUESTIONS_FILE = Path('data/questions.js')
OUTPUT_DIR = Path('data/questions')

# 과목별 파일 매핑
SUBJECT_FILES = {
    'law': 'law.js',
    'urban': 'urban.js',
    'emu': 'emu.js',
    'theory': 'theory.js',
    'emergency': 'emergency.js'
}

def extract_questions():
    """questions.js에서 QUESTIONS 배열 추출"""
    content = QUESTIONS_FILE.read_text(encoding='utf-8')
    
    # QUESTIONS 배열 시작 찾기
    start = content.find('const QUESTIONS = [')
    if start == -1:
        raise ValueError('QUESTIONS 배열을 찾을 수 없습니다')
    
    # 배열 끝 찾기 (];)
    end = content.find('\n];', start)
    if end == -1:
        raise ValueError('QUESTIONS 배열 끝을 찾을 수 없습니다')
    
    # 배열 내용 추출 (const QUESTIONS = [ 제외)
    array_content = content[start + len('const QUESTIONS = ['):end]
    
    return array_content

def split_by_subject(questions_content):
    """과목별로 문제 분리"""
    subject_questions = {
        'law': [],
        'urban': [],
        'emu': [],
        'theory': [],
        'emergency': []
    }
    
    # 각 문제 객체 추출 (중괄호 기준)
    current_question = []
    brace_count = 0
    in_question = False
    current_subject = None
    
    lines = questions_content.split('\n')
    
    for line in lines:
        stripped = line.strip()
        
        # 주석이나 빈 줄 건너뛰기
        if stripped.startswith('//') or not stripped:
            if in_question:
                current_question.append(line)
            continue
        
        # 중괄호 카운트
        brace_count += stripped.count('{') - stripped.count('}')
        
        # 문제 시작
        if '{' in stripped and not in_question:
            in_question = True
            current_question = [line]
            
            # subject 찾기
            if 'subject:' in stripped:
                match = re.search(r"subject:\s*'(\w+)'", stripped)
                if match:
                    current_subject = match.group(1)
        elif in_question:
            current_question.append(line)
            
            # subject 찾기 (다음 줄에 있을 수 있음)
            if not current_subject and 'subject:' in stripped:
                match = re.search(r"subject:\s*'(\w+)'", stripped)
                if match:
                    current_subject = match.group(1)
        
        # 문제 끝
        if in_question and brace_count == 0 and stripped.endswith('},'):
            if current_subject and current_subject in subject_questions:
                subject_questions[current_subject].append('\n'.join(current_question))
            current_question = []
            in_question = False
            current_subject = None
    
    return subject_questions

def create_subject_file(subject, questions):
    """과목별 파일 생성"""
    output_file = OUTPUT_DIR / SUBJECT_FILES[subject]
    
    header = f"""/**
 * {subject.upper()} 과목 문제
 * 자동 생성됨 - 수동 편집 가능
 */

const QUESTIONS_{subject.upper()} = [
"""
    
    footer = """
];

console.log(`${SUBJECT_FILES[subject]} loaded:`, QUESTIONS_${subject.upper()}.length);
"""
    
    content = header + ',\n'.join(questions) + footer
    
    # ${...} 템플릿 리터럴 처리
    content = content.replace('${SUBJECT_FILES[subject]}', f"'{SUBJECT_FILES[subject]}'")
    content = content.replace('${subject.upper()}', subject.upper())
    
    output_file.write_text(content, encoding='utf-8')
    print(f'✓ {output_file} 생성 완료 ({len(questions)}문제)')

def main():
    print('Questions 마이그레이션 시작...\n')
    
    # 1. QUESTIONS 배열 추출
    print('1. questions.js에서 데이터 추출 중...')
    questions_content = extract_questions()
    
    # 2. 과목별로 분리
    print('2. 과목별로 분리 중...')
    subject_questions = split_by_subject(questions_content)
    
    # 3. 과목별 파일 생성
    print('3. 과목별 파일 생성 중...')
    for subject, questions in subject_questions.items():
        if questions:
            create_subject_file(subject, questions)
    
    print('\n✅ Questions 마이그레이션 완료!')
    
    # 통계
    print('\n📊 통계:')
    for subject, questions in subject_questions.items():
        print(f'  - {subject}: {len(questions)}문제')

if __name__ == '__main__':
    main()
