#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
concepts.js를 과목/단원별로 분리하는 스크립트
"""

import re
from pathlib import Path

# 파일 경로
CONCEPTS_FILE = Path('data/concepts.js')
OUTPUT_DIR = Path('data/concepts')

def extract_concepts():
    """concepts.js에서 CONCEPTS 객체 추출"""
    content = CONCEPTS_FILE.read_text(encoding='utf-8')
    
    # CONCEPTS 객체 시작
    start = content.find('const CONCEPTS = {')
    if start == -1:
        raise ValueError('CONCEPTS 객체를 찾을 수 없습니다')
    
    # 헬퍼 함수 시작 위치 (CONCEPTS 객체 끝)
    helper_start = content.find('// 헬퍼 함수들', start)
    if helper_start == -1:
        helper_start = content.find('function getConceptsBySubject', start)
    
    # CONCEPTS 객체 내용 추출
    concepts_content = content[start:helper_start]
    
    return concepts_content, content[helper_start:]

def extract_subject_data(concepts_content, subject_id):
    """특정 과목의 데이터 추출"""
    # subject 블록 찾기 (예: law: { ... })
    pattern = rf'{subject_id}:\s*{{'
    match = re.search(pattern, concepts_content)
    
    if not match:
        return None
    
    start_pos = match.start()
    
    # 중괄호 매칭으로 끝 위치 찾기
    brace_count = 0
    in_subject = False
    end_pos = start_pos
    
    for i in range(start_pos, len(concepts_content)):
        char = concepts_content[i]
        
        if char == '{':
            brace_count += 1
            in_subject = True
        elif char == '}':
            brace_count -= 1
            
        if in_subject and brace_count == 0:
            end_pos = i + 1
            break
    
    subject_data = concepts_content[start_pos:end_pos]
    
    # chapters 배열 추출
    chapters_match = re.search(r'chapters:\s*\[(.*)\]', subject_data, re.DOTALL)
    if not chapters_match:
        return None
    
    chapters_content = chapters_match.group(1)
    
    return chapters_content

def split_chapters(chapters_content):
    """chapters 배열을 개별 chapter로 분리"""
    chapters = []
    current_chapter = []
    brace_count = 0
    in_chapter = False
    
    lines = chapters_content.split('\n')
    
    for line in lines:
        stripped = line.strip()
        
        # 빈 줄이나 주석
        if not stripped or stripped.startswith('//'):
            if in_chapter:
                current_chapter.append(line)
            continue
        
        # 중괄호 카운트
        brace_count += stripped.count('{') - stripped.count('}')
        
        # chapter 시작
        if '{' in stripped and not in_chapter:
            in_chapter = True
            current_chapter = [line]
        elif in_chapter:
            current_chapter.append(line)
        
        # chapter 끝
        if in_chapter and brace_count == 0 and stripped.endswith('}'):
            chapters.append('\n'.join(current_chapter))
            current_chapter = []
            in_chapter = False
    
    return chapters

def create_chapter_file(subject_dir, chapter_data):
    """단원별 파일 생성"""
    # chapter id 추출
    id_match = re.search(r"id:\s*'([^']+)'", chapter_data)
    chapter_name_match = re.search(r"name:\s*'([^']+)'", chapter_data)
    
    if not id_match or not chapter_name_match:
        print(f'⚠️  Chapter ID/Name을 찾을 수 없습니다')
        return None
    
    chapter_id = id_match.group(1)
    chapter_name = chapter_name_match.group(1)
    
    # 파일명 생성 (예: law_ch1.js, emu_ch2.js)
    filename = f'{chapter_id}.js'
    filepath = subject_dir / filename
    
    # 파일 내용 생성
    content = f"""/**
 * {chapter_name}
 * 자동 생성됨 - 수동 편집 가능
 */

const CHAPTER_{chapter_id.upper()} = {chapter_data};

console.log('Chapter {chapter_id} loaded');
"""
    
    filepath.write_text(content, encoding='utf-8')
    print(f'  ✓ {filepath.name} ({chapter_name})')
    
    return chapter_id

def create_subject_index(subject_id, chapter_ids):
    """과목별 index.js 생성"""
    subject_dir = OUTPUT_DIR / subject_id
    
    # 메타데이터
    subject_meta = {
        'law': ("'철도관련법'", "'⚖️'"),
        'urban': ("'도시철도시스템'", "'🚇'"),
        'emu': ("'전기동차 구조'", "'🚃'"),
        'theory': ("'운전이론'", "'📐'"),
        'emergency': ("'비상시 조치'", "'🚨'")
    }
    
    name, icon = subject_meta.get(subject_id, ("''", "''"))
    
    # chapters 배열 생성
    chapters_array = ',\n        '.join([f'CHAPTER_{ch_id.upper()}' for ch_id in chapter_ids])
    
    content = f"""/**
 * {subject_id.upper()} 과목 통합
 */

const SUBJECT_{subject_id.upper()} = {{
    id: '{subject_id}',
    name: {name},
    icon: {icon},
    chapters: [
        {chapters_array}
    ]
}};

console.log('{subject_id.upper()} loaded:', SUBJECT_{subject_id.upper()}.chapters.length, 'chapters');
"""
    
    index_file = subject_dir / 'index.js'
    index_file.write_text(content, encoding='utf-8')
    print(f'  ✓ {index_file.name} (통합 파일)')

def main():
    print('Concepts 마이그레이션 시작...\n')
    
    # 1. CONCEPTS 객체 추출
    print('1. concepts.js에서 데이터 추출 중...')
    concepts_content, helpers = extract_concepts()
    
    # 2. 과목별로 분리
    print('2. 과목별로 분리 및 파일 생성 중...\n')
    
    subjects = ['law', 'urban', 'emu', 'theory', 'emergency']
    
    for subject_id in subjects:
        print(f'📁 {subject_id.upper()}:')
        
        subject_data = extract_subject_data(concepts_content, subject_id)
        
        if not subject_data:
            print(f'  ⚠️  데이터 없음\n')
            continue
        
        # chapters 분리
        chapters = split_chapters(subject_data)
        
        if not chapters:
            print(f'  ⚠️  Chapter 없음\n')
            continue
        
        # 과목 디렉토리
        subject_dir = OUTPUT_DIR / subject_id
        
        # chapter 파일들 생성
        chapter_ids = []
        for chapter_data in chapters:
            chapter_id = create_chapter_file(subject_dir, chapter_data)
            if chapter_id:
                chapter_ids.append(chapter_id)
        
        # 과목별 index.js 생성
        if chapter_ids:
            create_subject_index(subject_id, chapter_ids)
        
        print()
    
    print('\n✅ Concepts 마이그레이션 완료!')

if __name__ == '__main__':
    main()
