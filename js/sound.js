/**
 * 사운드 모듈 - 깔끔하고 절제된 피드백 사운드
 * Web Audio API를 사용한 간단한 비프음 생성
 */

// 디버그 모드 (프로덕션에서는 false로 설정)
const SOUND_DEBUG = false;

const Sound = {
    audioContext: null,
    enabled: true,
    volume: 0.3, // 적당한 볼륨으로 설정
    bgmVolume: 0.2, // BGM 볼륨
    bgmEnabled: false, // BGM 기본 꺼짐
    
    // 조건부 로깅
    log(...args) {
        if (SOUND_DEBUG) console.log(...args);
    },
    warn(...args) {
        if (SOUND_DEBUG) console.warn(...args);
    },    
    // 오디오 파일 경로 (상대 경로로 변경 - PWA 호환성)
    audioFiles: {
        correct: './audio/sfx/correct.mp3',
        wrong: './audio/sfx/wrong.mp3',
        levelup: './audio/sfx/levelup.mp3',
        badge: './audio/sfx/badge.mp3',
        combo: './audio/sfx/combo.mp3',
        select: './audio/sfx/select.mp3',
        bgmLofi: './audio/bgm/lofi-study.mp3'
    },
    
    // 로드된 오디오 객체들
    audioObjects: {},
    
    // BGM 오디오 객체
    bgmAudio: null,

    // 오디오 컨텍스트 초기화
    init() {
        try {
            // Safari 호환성: AudioContext 생성 (선택적)
            try {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (AudioContextClass) {
                    this.audioContext = new AudioContextClass();
                }
            } catch (e) {
                // AudioContext 생성 실패 - 무시하고 계속
            }
            
            // 기본적으로 사운드 활성화
            if (typeof Storage !== 'undefined' && Storage.load && typeof Storage.load === 'function') {
                try {
                    const settings = Storage.load(Storage.KEYS.SETTINGS);
                    this.enabled = settings?.soundEnabled !== false;
                    // 볼륨은 고정값 사용 (슬라이더 제거됨)
                    this.volume = 0.3;
                    this.bgmVolume = 0.2;
                    this.bgmEnabled = settings?.bgmEnabled ?? false;
                } catch (e) {
                    this.enabled = true;
                }
            }
            
            // 오디오 파일 미리 로드 (선택적)
            try {
                this.preloadAudio();
            } catch (e) {
                // preload 실패 - 무시
            }
            
            // AudioContext는 사용자 제스처 후에 resume 필요 (브라우저 자동재생 정책)
            if (this.audioContext && this.audioContext.state === 'suspended') {
                // 첫 클릭 시 활성화
                const activateAudio = () => {
                    if (this.audioContext && this.audioContext.state === 'suspended') {
                        this.audioContext.resume().catch(() => {});
                    }
                    // 모바일: HTML5 Audio unlock (iOS/Android 모두)
                    if (this.isIOS || this.isAndroid) {
                        this.unlockAudioForMobile();
                    }
                };
                document.addEventListener('click', activateAudio, { once: true });
                document.addEventListener('touchstart', activateAudio, { once: true, passive: true });
            }
        } catch (e) {
            console.error('Sound module initialization failed:', e);
            this.enabled = false;
        }
    },

    // 플랫폼 감지
    isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    isAndroid: /Android/.test(navigator.userAgent),
    isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    
    // 모바일 오디오 unlock (첫 터치 시 호출)
    mobileAudioUnlocked: false,
    unlockAudioForMobile() {
        if (this.mobileAudioUnlocked) return;
        
        // 무음 오디오로 AudioContext만 활성화 (실제 SFX 재생 안 함)
        const silentAudio = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAABhgC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAAYYoRwmHAAAAAAD/+9DEAAAIAANIAAAAgAAA0gAAABBsyZ0/4IAAAMJ7////+7u7u7v//xiYn/+sG7//8QnE4n/+7u4hMTif/6wNDP//wiETif/7u7iExOJ//rANDP/8RCIn/+7u7//////u7u5MTCY=');
        silentAudio.volume = 0;
        silentAudio.play().then(() => silentAudio.pause()).catch(() => {});
        
        // SFX 파일들은 preload만 (소리 재생 없이)
        const sfxKeys = ['correct', 'wrong', 'levelup', 'badge', 'combo', 'select'];
        sfxKeys.forEach(key => {
            try {
                const audio = new Audio();
                audio.preload = 'auto';
                audio.src = this.audioFiles[key];
                audio.volume = this.volume;
                this.audioObjects[key] = audio;
            } catch (e) {
                // preload 실패 - 무시
            }
        });
        
        this.mobileAudioUnlocked = true;
    },

    // 오디오 파일 미리 로드 (선택적 - 더 빠른 재생을 위해)
    preloadAudio() {
        const keysToPreload = ['correct', 'wrong', 'combo', 'select'];
        keysToPreload.forEach(key => {
            if (this.audioFiles[key]) {
                const audio = new Audio();
                audio.src = this.audioFiles[key];
                audio.preload = 'auto';
                this.audioObjects[key] = audio;
            }
        });
    },

    // 오디오 파일 재생 (파일 없으면 Web Audio API fallback)
    playAudio(key, volumeMultiplier = 1) {
        if (!this.enabled) return;

        const path = this.audioFiles[key];
        if (!path) {
            this.playBeepFallback(key);
            return;
        }

        try {
            // 기존 로드된 객체 사용 또는 새로 생성
            let audio = this.audioObjects[key];
            
            // 오디오 객체가 없거나 에러 상태일 때만 새로 생성
            if (!audio || audio.error) {
                audio = new Audio(path);
                this.audioObjects[key] = audio;
                
                // 에러 핸들러 추가
                audio.addEventListener('error', () => {
                    this.playBeepFallback(key);
                }, { once: true });
            }

            audio.volume = Math.min(1, this.volume * volumeMultiplier);
            
            // 재생 중이면 처음부터 다시
            audio.currentTime = 0;
            
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // 재생 실패 시 Web Audio API fallback
                    this.playBeepFallback(key);
                });
            }
        } catch (e) {
            // 오디오 파일이 없으면 기존 비프음 사용
            this.playBeepFallback(key);
        }
    },

    // 오디오 파일이 없을 때 폴백 (기존 Web Audio API)
    playBeepFallback(type) {
        const beepMap = {
            correct: () => this.playBeep(659.25, 0.15, 'sine'),
            wrong: () => this.playBeep(200, 0.15, 'sine'),
            combo: () => this.playBeep(1200, 0.05, 'square'),
            select: () => this.playBeep(800, 0.08, 'sine')
        };
        
        if (beepMap[type]) {
            beepMap[type]();
        }
    },

    // 사운드 켜기/끄기
    toggle() {
        this.enabled = !this.enabled;
        const settings = Storage.load(Storage.KEYS.SETTINGS) || {};
        settings.soundEnabled = this.enabled;
        Storage.save(Storage.KEYS.SETTINGS, settings);
        return this.enabled;
    },

    // 볼륨 설정 (0.0 ~ 1.0)
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        const settings = Storage.load(Storage.KEYS.SETTINGS) || {};
        settings.soundVolume = this.volume;
        Storage.save(Storage.KEYS.SETTINGS, settings);
        
        // 캐시된 오디오 객체들에 볼륨 즉시 적용
        Object.values(this.audioObjects).forEach(audio => {
            if (audio && audio !== this.bgmAudio) {
                audio.volume = this.volume;
            }
        });
    },

    // BGM 볼륨 설정
    setBgmVolume(volume) {
        this.bgmVolume = Math.max(0, Math.min(1, volume));
        const settings = Storage.load(Storage.KEYS.SETTINGS) || {};
        settings.bgmVolume = this.bgmVolume;
        Storage.save(Storage.KEYS.SETTINGS, settings);
        
        // 실시간 볼륨 업데이트
        this.updateBGMVolume();
    },



    // 기본 비프음 생성
    playBeep(frequency, duration, type = 'sine') {
        if (!this.enabled || !this.audioContext) return;

        // AudioContext가 suspended 상태면 resume
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.frequency.value = frequency;
            oscillator.type = type;

            // 부드러운 페이드 인/아웃
            const now = this.audioContext.currentTime;
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(this.volume, now + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

            oscillator.start(now);
            oscillator.stop(now + duration);
        } catch (e) {
            console.warn('Sound playback failed', e);
        }
    },

    // 정답 사운드 - 부드러운 상승음
    correct() {
        this.playAudio('correct');
    },

    // 오답 사운드 - 낮은 단음
    wrong() {
        this.playAudio('wrong');
    },

    // 선택 사운드 - 짧고 미묘한 클릭음
    select() {
        this.playAudio('select', 0.8); // 살짝 낮은 볼륨
    },

    // 레벨업 사운드 - 상승하는 아르페지오
    levelUp() {
        this.playAudio('levelup');
    },

    // 배지 획득 - 단일 사운드로 통일
    badge(tier = 'bronze') {
        this.playAudio('badge');
    },

    // 콤보 사운드 - 콤보 수에 따라 음계 상승
    combo(comboCount = 1) {
        this.playAudio('combo', 0.7 + (comboCount * 0.03)); // 콤보 증가 시 살짝 볼륨 증가
    },

    // 퀴즈 완료 - 완료감 있는 화음
    complete() {
        if (!this.enabled || !this.audioContext) return;

        const now = this.audioContext.currentTime;
        const oscillator1 = this.audioContext.createOscillator();
        const oscillator2 = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        // C 메이저 코드
        oscillator1.frequency.value = 523.25; // C5
        oscillator2.frequency.value = 659.25; // E5
        oscillator1.type = 'sine';
        oscillator2.type = 'sine';

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(this.volume * 0.8, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

        oscillator1.start(now);
        oscillator2.start(now);
        oscillator1.stop(now + 0.4);
        oscillator2.stop(now + 0.4);
    },

    // BGM 관련 함수들
    bgmOscillators: [],
    bgmGainNode: null,

    // BGM 재생 (실제 오디오 파일 사용)
    async startBGM() {
        if (!this.bgmEnabled) return;
        
        // 기존 BGM 완전히 정지
        this.stopBGM();
        
        // 약간의 지연을 두고 새 BGM 시작 (이전 정리 완료 대기)
        await new Promise(resolve => setTimeout(resolve, 100));

        // AudioContext resume (자동재생 정책 우회)
        if (this.audioContext && this.audioContext.state === 'suspended') {
            try {
                await this.audioContext.resume();
            } catch (e) {
                // resume 실패 - 무시
            }
        }

        try {
            // 오디오 파일 사용
            if (this.audioFiles.bgmLofi) {
                // 파일 존재 확인 (fetch로 먼저 체크)
                try {
                    const response = await fetch(this.audioFiles.bgmLofi, { method: 'HEAD' });
                    if (!response.ok) {
                        if (typeof showToast === 'function') {
                            showToast('배경음악 파일을 찾을 수 없습니다', 'error');
                        }
                        return;
                    }
                } catch (fetchError) {
                    if (typeof showToast === 'function') {
                        showToast('배경음악 파일에 접근할 수 없습니다', 'error');
                    }
                    return;
                }
                
                this.bgmAudio = new Audio(this.audioFiles.bgmLofi);
                this.bgmAudio.volume = this.bgmVolume;
                this.bgmAudio.loop = true; // 무한 반복
                
                this.bgmAudio.addEventListener('error', () => {
                    if (!this.bgmAudio) return;
                    if (typeof showToast === 'function') {
                        showToast('배경음악 로드 오류', 'error');
                    }
                });
                
                const playPromise = this.bgmAudio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // autoplay 차단 시
                        if (typeof showToast === 'function') {
                            showToast('배경음악을 재생할 수 없습니다. 퀴즈를 시작한 후 다시 시도해주세요.', 'info');
                        }
                        // BGM 토글 끄기
                        this.bgmEnabled = false;
                        const bgmToggle = document.getElementById('setting-bgm-enabled');
                        if (bgmToggle) bgmToggle.checked = false;
                    });
                }
            } else {
                if (typeof showToast === 'function') {
                    showToast('배경음악 파일이 없습니다', 'error');
                }
            }
        } catch (e) {
            if (typeof showToast === 'function') {
                showToast('배경음악 재생 중 오류가 발생했습니다', 'error');
            }
        }
    },

    // Web Audio API로 BGM 생성 (폴백)
    startBGMSynthesized() {
        if (!this.bgmEnabled || !this.audioContext) return;

        try {
            // BGM 게인 노드 생성
            this.bgmGainNode = this.audioContext.createGain();
            this.bgmGainNode.gain.value = this.bgmVolume * 0.5; // BGM은 더 낮게
            this.bgmGainNode.connect(this.audioContext.destination);

            // 간단한 코드 진행 (C - Am - F - G)
            const bassNotes = [130.81, 110, 87.31, 98]; // C2, A2, F2, G2
            const melodyNotes = [523.25, 440, 349.23, 392]; // C5, A4, F4, G4
            
            const playLoop = () => {
                if (!this.bgmEnabled) return;

                bassNotes.forEach((freq, i) => {
                    setTimeout(() => {
                        if (!this.bgmEnabled) return;
                        this.playBGMNote(freq, 1.8, 'sine'); // 베이스
                        this.playBGMNote(melodyNotes[i], 0.4, 'triangle'); // 멜로디
                    }, i * 2000);
                });

                // 8초 후 반복
                setTimeout(playLoop, 8000);
            };

            playLoop();
            console.log('🎵 Synthesized BGM started');
        } catch (e) {
            console.warn('Synthesized BGM failed', e);
        }
    },

    // BGM 음표 재생 (Web Audio API)
    playBGMNote(frequency, duration, type = 'sine') {
        if (!this.bgmEnabled || !this.audioContext || !this.bgmGainNode) return;

        try {
            const oscillator = this.audioContext.createOscillator();
            oscillator.connect(this.bgmGainNode);
            oscillator.frequency.value = frequency;
            oscillator.type = type;

            const now = this.audioContext.currentTime;
            oscillator.start(now);
            oscillator.stop(now + duration);

            this.bgmOscillators.push(oscillator);
        } catch (e) {
            console.warn('BGM note play failed', e);
        }
    },

    // BGM 정지
    stopBGM() {
        console.log('🔇 BGM 정지 중...');
        
        // HTML5 Audio 정지 및 이벤트 리스너 제거
        if (this.bgmAudio) {
            try {
                this.bgmAudio.pause();
                this.bgmAudio.currentTime = 0;
                this.bgmAudio.src = ''; // src 제거하여 완전 해제
                this.bgmAudio.load(); // 리소스 해제
                this.bgmAudio = null;
                console.log('✅ HTML5 Audio 정지됨');
            } catch (e) {
                console.warn('HTML5 Audio 정지 실패:', e);
            }
        }

        // Web Audio API 정지
        if (this.bgmOscillators && this.bgmOscillators.length > 0) {
            this.bgmOscillators.forEach(osc => {
                try {
                    osc.stop();
                } catch (e) {}
            });
        }
        this.bgmOscillators = [];
        if (this.bgmGainNode) {
            this.bgmGainNode.disconnect();
            this.bgmGainNode = null;
        }
        
        console.log('🔇 BGM stopped');
    },

    // BGM 볼륨 업데이트 (실시간)
    updateBGMVolume() {
        if (this.bgmAudio) {
            this.bgmAudio.volume = this.bgmVolume;
        }
        if (this.bgmGainNode) {
            this.bgmGainNode.gain.value = this.bgmVolume * 0.5;
        }
    }
};

// 디버깅용 - 콘솔에서 Sound.test() 실행 가능
Sound.test = function() {
    console.log('🎵 Testing sound...');
    this.select();
    setTimeout(() => this.correct(), 500);
    setTimeout(() => this.wrong(), 1000);
};

// 백그라운드 전환 시 BGM 자동 정지/재개
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // 앱이 백그라운드로 가면 BGM 일시정지
        if (Sound.bgmAudio && !Sound.bgmAudio.paused) {
            Sound.bgmWasPlaying = true;
            Sound.bgmAudio.pause();
            console.log('🔇 BGM paused (app in background)');
        }
    } else {
        // 앱이 다시 포그라운드로 오면 BGM 재개
        if (Sound.bgmWasPlaying && Sound.bgmAudio && Sound.bgmEnabled) {
            Sound.bgmAudio.play().catch(e => {
                console.warn('BGM resume failed:', e.message);
            });
            Sound.bgmWasPlaying = false;
            console.log('🎵 BGM resumed (app in foreground)');
        }
    }
});

// 페이지 종료 시 완전 정지
window.addEventListener('beforeunload', () => {
    Sound.stopBGM();
});

// iOS Safari: pagehide 이벤트도 처리
window.addEventListener('pagehide', () => {
    Sound.stopBGM();
});

// 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Sound.init());
} else {
    Sound.init();
}
