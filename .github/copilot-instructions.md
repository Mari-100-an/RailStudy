# Copilot Instructions - 제2종 전기차량운전면허 학습 플랫폼

## Architecture Overview

Static SPA (Single Page Application) for Korean railway driver license exam preparation. No backend - pure frontend with localStorage persistence.

### File Structure (Modular)
```
data/
├── questions/
│   ├── subjects.js        # 과목 메타데이터 (SUBJECTS)
│   ├── law.js             # 철도관련법 문제 (QUESTIONS_LAW)
│   ├── urban.js           # 도시철도시스템 문제 (QUESTIONS_URBAN)
│   ├── emu.js             # 전기동차 구조 문제 (QUESTIONS_EMU)
│   ├── theory.js          # 운전이론 문제 (QUESTIONS_THEORY)
│   ├── emergency.js       # 비상시 조치 문제 (QUESTIONS_EMERGENCY)
│   └── index.js           # 통합 (QUESTIONS 배열 + 헬퍼 함수)
├── concepts/
│   ├── law/
│   │   ├── law_ch1.js     # 철도안전법 (CHAPTER_LAW_CH1)
│   │   └── index.js       # law 과목 통합 (SUBJECT_LAW)
│   ├── urban/
│   │   ├── urban_ch1.js   # 도시철도 총론
│   │   └── index.js
│   ├── emu/
│   │   ├── emu_ch2.js     # 특고압회로
│   │   └── index.js
│   ├── theory/
│   │   └── index.js
│   ├── emergency/
│   │   └── index.js
│   └── index.js           # 통합 (CONCEPTS 객체 + 헬퍼 함수)
```

### Module Pattern
All modules are global singletons (IIFE-style objects). Initialization order matters:
```
subjects.js → [law.js, urban.js, emu.js, theory.js, emergency.js] → questions/index.js
[law_ch1.js → law/index.js, ...] → concepts/index.js
→ Storage → Theme → Quiz → Dashboard → Gamification → App (orchestrator)
```

### Script Loading Order (index.html)
```html
<!-- Questions -->
<script src="data/questions/subjects.js"></script>
<script src="data/questions/law.js"></script>
<script src="data/questions/urban.js"></script>
<script src="data/questions/emu.js"></script>
<script src="data/questions/theory.js"></script>
<script src="data/questions/emergency.js"></script>
<script src="data/questions/index.js"></script>

<!-- Concepts -->
<script src="data/concepts/law/law_ch1.js"></script>
<script src="data/concepts/law/index.js"></script>
<!-- ... other chapters ... -->
<script src="data/concepts/index.js"></script>

<!-- App Scripts -->
<script src="js/storage.js"></script>
<!-- ... rest of app ... -->
```

### Core Modules
| Module | File | Purpose |
|--------|------|---------|
| `App` | [js/app.js](js/app.js) | Navigation, page lifecycle, initialization orchestrator |
| `Quiz` | [js/quiz.js](js/quiz.js) | Quiz engine: start, render, submit, scoring |
| `Storage` | [js/storage.js](js/storage.js) | LocalStorage wrapper with typed keys (`KEYS.*`) |
| `Theme` | [js/theme.js](js/theme.js) | Focus/Game mode switching, CSS toggle |
| `Gamification` | [js/gamification.js](js/gamification.js) | XP, levels, combos, badges (Game Mode only) |
| `Dashboard` | [js/dashboard.js](js/dashboard.js) | Chart.js statistics rendering |

### Data Flow
1. Questions stored in `QUESTIONS` array and `SUBJECTS` object in [data/questions.js](data/questions.js)
2. User answers processed by `Quiz.submitAnswer()` → `Storage.updateUserStats()` → `Gamification.handleCorrectAnswer()`
3. Wrong answers tracked via `Storage.addWrongQuestion()` for review feature

## Key Conventions

### Question Data Structure
```javascript
{
    id: 'law_001',           // Format: {subject}_{number}
    subject: 'law',          // Must match SUBJECTS keys: law, urban, emu, theory, emergency
    chapter: '철도안전법',
    question: '...',
    options: ['A', 'B', 'C', 'D'],  // Always 4 options
    answer: 1,               // 0-indexed correct option
    explanation: '...',
    source: '철도안전법 제1조'      // Legal/textbook reference
}
```

### Storage Keys
All localStorage keys prefixed with `railway_`:
- `railway_user_data` - Stats, streaks, per-subject progress
- `railway_settings` - Mode (focus/game), question count, order preference
- `railway_wrong_answers` - Tracked wrong questions for review
- `railway_game_data` - XP, level, badges (Game Mode)

### UI Mode System
Two CSS themes loaded via `<link>` elements with `disabled` attribute toggle:
- **Focus Mode** (`focus-mode.css`): Minimal UI, large text, no animations
- **Game Mode** (`game-mode.css`): Dark navy theme, XP bar, particles, badges

Check mode: `Theme.isGameMode()` returns boolean

### Helper Functions (Global)
- `getRandomQuestions(count, subjectId)` - Shuffled subset from QUESTIONS
- `getQuestionsBySubject(subjectId)` - Filter by subject
- `showToast(message, type)` - UI notifications ('success', 'error', 'info')

## Development Notes

### Running Locally
Open [index.html](index.html) directly in browser - no build step required. Uses CDN dependencies:
- Tailwind CSS (CDN)
- Chart.js (CDN)
- Font Awesome (CDN)

### Adding New Questions
Add to appropriate subject file in `data/questions/[subject].js`. Ensure:
1. Unique `id` following `{subject}_{3-digit-number}` pattern
2. Valid `subject` matching SUBJECTS keys
3. `answer` is 0-indexed
4. Include `source` for educational credibility

Example:
```javascript
// data/questions/emu.js 
const QUESTIONS_EMU = [
    {
        id: 'emu_133',
        subject: 'emu',
        chapter: '특고압회로',
        question: '...',
        options: ['A', 'B', 'C', 'D'],
        answer: 1,  // 0-indexed
        explanation: '...',
        source: '전기동차 구조 및 기능 제2장'
    }
];
```

### Adding New Concepts
1. Create new chapter file: `data/concepts/{subject}/{subject}_ch{N}.js`
2. Update `data/concepts/{subject}/index.js` to include new chapter
3. Add script tag to index.html in proper order

Example:
```javascript
// data/concepts/emu/emu_ch3.js
const CHAPTER_EMU_CH3 = {
    id: 'emu_ch3',
    name: '견인장치',
    order: 3,
    sections: [
        {
            id: 'emu_ch3_s1',
            title: 'VVVF 제어',
            content: `## VVVF ...`,
            keyTerms: ['VVVF', '인버터'],
            relatedQuestions: ['emu_201']
        }
    ]
};
```

### Adding New Badges
Define in `Gamification.BADGES` array with:
```javascript
{ id: 'badge_id', name: '뱃지명', icon: '🎯', description: '설명', 
  condition: (userData) => userData.someValue >= threshold }
```

### Korean Language
All UI text is in Korean (한글). Use Korean for:
- Toast messages, button labels, explanations
- Comments can be in Korean or English
