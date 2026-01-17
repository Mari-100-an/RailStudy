# 🎵 오디오 파일 추가 완벽 가이드

## 📋 체크리스트

- [ ] 1단계: 오디오 파일 다운로드
- [ ] 2단계: 파일을 프로젝트에 추가
- [ ] 3단계: 테스트
- [ ] 4단계: GitHub Pages 배포

---

## 1️⃣ 오디오 파일 다운로드

### 추천 사이트

**🎮 효과음 (Pixabay)**
1. https://pixabay.com/sound-effects/ 접속
2. 검색어로 다운로드:
   - "correct" 또는 "success" → `correct.mp3`
   - "wrong" 또는 "error" → `wrong.mp3`
   - "level up" → `levelup.mp3`
   - "achievement" 또는 "badge" → `badge.mp3`
   - "click" → `combo.mp3`, `select.mp3`

**🎵 배경음악 (Pixabay Music)**
1. https://pixabay.com/music/ 접속
2. 검색: "lofi" 또는 "study music"
3. 2-3분 길이, 루프 가능한 곡 선택
4. `lofi-study.mp3`로 저장

### 다운로드 팁
- **파일 형식**: MP3 (권장)
- **효과음 길이**: 0.3초 ~ 2초
- **효과음 크기**: 50KB ~ 500KB
- **BGM 길이**: 2 ~ 3분
- **BGM 크기**: 3MB ~ 5MB
- **라이선스**: 상업적 이용 가능 확인

---

## 2️⃣ 프로젝트에 파일 추가

### 폴더 구조
```
RailStudy/
└── audio/
    ├── README.md           ← 가이드 (이미 있음)
    ├── sfx/               ← 효과음
    │   ├── correct.mp3    ← 정답
    │   ├── wrong.mp3      ← 오답
    │   ├── levelup.mp3    ← 레벨업
    │   ├── badge.mp3      ← 배지
    │   ├── combo.mp3      ← 콤보
    │   └── select.mp3     ← 선택
    └── bgm/               ← 배경음악
        └── lofi-study.mp3 ← 로파이 비트
```

### 파일 넣는 방법

**Windows:**
1. 다운로드한 파일을 각각의 폴더로 드래그
2. `audio/sfx/` 폴더에 효과음 6개
3. `audio/bgm/` 폴더에 BGM 1개

**터미널 (선택사항):**
```bash
# 다운로드 폴더에서 프로젝트로 복사
cd RailStudy
cp ~/Downloads/correct.mp3 audio/sfx/
cp ~/Downloads/wrong.mp3 audio/sfx/
cp ~/Downloads/levelup.mp3 audio/sfx/
cp ~/Downloads/badge.mp3 audio/sfx/
cp ~/Downloads/combo.mp3 audio/sfx/
cp ~/Downloads/select.mp3 audio/sfx/
cp ~/Downloads/lofi-study.mp3 audio/bgm/
```

---

## 3️⃣ 테스트

### 로컬 테스트
1. `index.html` 열기
2. 설정 페이지 (⚙️) 이동
3. "사운드 테스트" 버튼 클릭
4. 효과음이 들리는지 확인
5. BGM 토글 켜기 → 음악 재생 확인

### 브라우저 콘솔 확인
- `F12` → Console 탭
- 오류 메시지 확인:
  - `404 Not Found` → 파일 경로 확인
  - `autoplay blocked` → 정상 (클릭 후 재생됨)

### 문제 해결

**소리가 안 들릴 때:**
1. 파일 이름 확인 (소문자, 하이픈 정확히)
2. 파일 경로 확인 (`audio/sfx/correct.mp3`)
3. 브라우저 볼륨 확인
4. 설정에서 효과음 볼륨 확인

**일부 효과음만 없을 때:**
- 해당 파일이 없어도 Web Audio API 폴백 사용
- 필수 파일: `correct.mp3`, `wrong.mp3`
- 선택 파일: 나머지 (폴백 작동)

---

## 4️⃣ GitHub Pages 배포

### 파일 크기 고려사항

**Git에 포함할지 선택:**

**A. 포함 (간단, 초보자 추천)**
```bash
git add audio/
git commit -m "Add audio files"
git push
```
- 장점: 자동 배포, 관리 쉬움
- 단점: 저장소 크기 증가 (약 10MB)

**B. 제외 (고급)**
`.gitignore`에 이미 설정됨:
```
audio/sfx/*.mp3
audio/bgm/*.mp3
```
- 장점: 저장소 가벼움
- 단점: 배포 시 수동으로 업로드 필요

### GitHub에 올리기 (A 방식)

```bash
# 1. 현재 상태 확인
git status

# 2. 오디오 파일 추가
git add audio/sfx/*.mp3
git add audio/bgm/*.mp3

# 3. 커밋
git commit -m "🎵 Add sound effects and BGM"

# 4. 푸시
git push origin main
```

### 배포 확인
1. GitHub Pages URL 접속
2. 설정 → 사운드 테스트
3. 실제 기기(모바일)에서도 테스트

---

## 🎯 빠른 시작 (5분)

### 최소 구성 (BGM 없이)
1. Pixabay에서 다운로드:
   - ✅ correct.mp3
   - ✅ wrong.mp3
2. `audio/sfx/` 폴더에 넣기
3. 테스트

### 완전 구성 (15분)
1. 효과음 6개 + BGM 1개 다운로드
2. 각각의 폴더에 넣기
3. 테스트 후 Git 푸시

---

## 💡 프로 팁

### 파일 최적화
- **Audacity** (무료): MP3 크기 줄이기
- 비트레이트: 128kbps (효과음), 192kbps (BGM)
- 모노 vs 스테레오: 효과음은 모노로 충분

### 티어별 배지 사운드 (선택)
더 풍부한 경험을 원한다면:
```
audio/sfx/
├── badge-bronze.mp3   ← 낮은 톤
├── badge-silver.mp3   ← 중간 톤
├── badge-gold.mp3     ← 밝은 톤
├── badge-platinum.mp3 ← 화려한 톤
└── badge-diamond.mp3  ← 최고급 톤
```

### BGM 자동 페이드
코드에 이미 구현됨 - BGM 켜면 자동 재생!

---

## ❓ FAQ

**Q: 오디오 파일이 없으면 어떻게 되나요?**  
A: Web Audio API로 비프음 생성 (폴백). 기본 동작은 보장됩니다.

**Q: 다른 형식(WAV, OGG)도 되나요?**  
A: MP3 권장. WAV는 크기가 크고, OGG는 Safari 지원 제한.

**Q: 저작권 문제는요?**  
A: Pixabay는 상업적 이용 가능. 다른 사이트는 라이선스 확인 필수.

**Q: BGM 용량이 너무 큰데요?**  
A: Service Worker 캐시에서 제외됨. 스트리밍 방식으로 재생.

---

## 📞 도움이 필요하면

1. 브라우저 콘솔 (F12) 확인
2. 파일 경로 재확인
3. audio/README.md 다시 읽기
4. GitHub Issues에 질문

---

**완성되면 친구들과 공유하세요!** 🎉
