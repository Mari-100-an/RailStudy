#!/usr/bin/env python3
"""
모든 문제 파일의 const 선언을 var로 변경하는 스크립트
"""
import os
import re
from pathlib import Path

def convert_const_to_var(directory):
    """data/questions 디렉토리의 모든 .js 파일에서 const를 var로 변경"""
    pattern = re.compile(r'^const (QUESTIONS_|CHAPTER_|SUBJECT)', re.MULTILINE)
    
    js_files = list(Path(directory).rglob('*.js'))
    total_files = len(js_files)
    changed_files = 0
    
    for file_path in js_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = pattern.sub(r'var \1', content)
            
            if content != new_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                changed_files += 1
                print(f"✓ {file_path.relative_to(directory)}")
                
        except Exception as e:
            print(f"✗ {file_path}: {e}")
    
    print(f"\n완료: {changed_files}/{total_files} 파일 변경됨")

if __name__ == "__main__":
    questions_dir = Path(__file__).parent / "data" / "questions"
    convert_const_to_var(questions_dir)
