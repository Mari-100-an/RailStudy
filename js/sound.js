/**
 * 사운드 모듈 - 깔끔하고 절제된 피드백 사운드
 * Web Audio API를 사용한 간단한 비프음 생성
 */
const Sound = {
    audioContext: null,
    enabled: true,
    volume: 0.3, // 적당한 볼륨으로 설정
    bgmVolume: 0.2, // BGM 볼륨
    bgmEnabled: false, // BGM 기본 꺼짐
    hapticEnabled: true, // 햅틱 피드백 기본 켜짐
    
    // 오디오 파일 경로
    audioFiles: {
        correct: '/audio/sfx/correct.mp3',
        wrong: '/audio/sfx/wrong.mp3',
        levelup: '/audio/sfx/levelup.mp3',
        badge: '/audio/sfx/badge.mp3',
        badgeBronze: '/audio/sfx/badge-bronze.mp3',
        badgeSilver: '/audio/sfx/badge-silver.mp3',
        badgeGold: '/audio/sfx/badge-gold.mp3',
        badgePlatinum: '/audio/sfx/badge-platinum.mp3',
        badgeDiamond: '/audio/sfx/badge-diamond.mp3',
        combo: '/audio/sfx/combo.mp3',
        select: '/audio/sfx/select.mp3',
        bgmLofi: '/audio/bgm/lofi-study.mp3'
    },
    
    // 로드된 오디오 객체들
    audioObjects: {},
    
    // BGM 오디오 객체
    bgmAudio: null,

    // 오디오 컨텍스트 초기화
    init() {
        try {
            console.log('🔊 Sound module initializing...');
            
            // Safari 호환성: AudioContext 생성 (선택적)
            try {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (AudioContextClass) {
                    this.audioContext = new AudioContextClass();
                    console.log('AudioContext created:', this.audioContext.state);
                } else {
                    console.warn('AudioContext not supported');
                }
            } catch (e) {
                console.warn('AudioContext creation failed, continuing without it:', e);
            }
            
            // 기본적으로 사운드 활성화
            if (typeof Storage !== 'undefined' && Storage.get && typeof Storage.get === 'function') {
                try {
                    const settings = Storage.get(Storage.KEYS.SETTINGS);
                    this.enabled = settings?.soundEnabled !== false;
                    this.volume = settings?.soundVolume ?? 0.3;
                    this.bgmVolume = settings?.bgmVolume ?? 0.2;
                    this.bgmEnabled = settings?.bgmEnabled ?? false;
                    this.hapticEnabled = settings?.hapticEnabled !== false;
                } catch (e) {
                    console.warn('Storage not ready, using default sound settings');
                    this.enabled = true;
                }
            }
            
            // 오디오 파일 미리 로드 (선택적)
            try {
                this.preloadAudio();
            } catch (e) {
                console.warn('Audio preload failed:', e);
            }
            
            console.log('✅ Sound module initialized', {
                enabled: this.enabled,
                contextState: this.audioContext?.state,
                volume: this.volume,
                audioFilesMode: true
            });
            
            // AudioContext는 사용자 제스처 후에 resume 필요 (브라우저 자동재생 정책)
            if (this.audioContext && this.audioContext.state === 'suspended') {
                // 첫 클릭 시 활성화
                const activateAudio = () => {
                    if (this.audioContext && this.audioContext.state === 'suspended') {
                        this.audioContext.resume().then(() => {
                            console.log('🔊 AudioContext resumed');
                        }).catch(e => {
                            console.warn('AudioContext resume failed:', e);
                        });
                    }
                };
                document.addEventListener('click', activateAudio, { once: true });
                document.addEventListener('touchstart', activateAudio, { once: true });
            }
        } catch (e) {
            console.error('❌ Sound module initialization failed (non-critical):', e);
            this.enabled = false;
        }
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

    // 오디오 파일 재생
    playAudio(key, volumeMultiplier = 1) {
        if (!this.enabled) return;

        const path = this.audioFiles[key];
        if (!path) {
            console.warn(`Audio file not found: ${key}`);
            return;
        }

        try {
            // 기존 로드된 객체 사용 또는 새로 생성
            let audio = this.audioObjects[key];
            
            if (!audio || audio.ended) {
                audio = new Audio(path);
                this.audioObjects[key] = audio;
            }

            audio.volume = Math.min(1, this.volume * volumeMultiplier);
            
            // 재생 중이면 처음부터 다시
            audio.currentTime = 0;
            
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => {
                    // 자동재생 정책으로 인한 에러는 무시
                    if (e.name !== 'NotAllowedError') {
                        console.warn('Audio play failed:', key, e);
                    }
                });
            }
        } catch (e) {
            console.warn('Audio playback failed:', key, e);
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
        const settings = Storage.get(Storage.KEYS.SETTINGS) || {};
        settings.soundEnabled = this.enabled;
        Storage.set(Storage.KEYS.SETTINGS, settings);
        return this.enabled;
    },

    // 볼륨 설정 (0.0 ~ 1.0)
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        const settings = Storage.get(Storage.KEYS.SETTINGS) || {};
        settings.soundVolume = this.volume;
        Storage.set(Storage.KEYS.SETTINGS, settings);
    },

    // BGM 볼륨 설정
    setBgmVolume(volume) {
        this.bgmVolume = Math.max(0, Math.min(1, volume));
        const settings = Storage.get(Storage.KEYS.SETTINGS) || {};
        settings.bgmVolume = this.bgmVolume;
        Storage.set(Storage.KEYS.SETTINGS, settings);
        
        // 실시간 볼륨 업데이트
        this.updateBGMVolume();
    },

    // 햅틱 피드백 토글
    toggleHaptic() {
        this.hapticEnabled = !this.hapticEnabled;
        const settings = Storage.load(Storage.KEYS.SETTINGS) || {};
        settings.hapticEnabled = this.hapticEnabled;
        Storage.save(Storage.KEYS.SETTINGS, settings);
        return this.hapticEnabled;
    },

    // 햅틱 진동 실행
    vibrate(pattern) {
        if (!this.hapticEnabled) return;
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
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
        this.vibrate([50, 30, 50]); // 정답 진동 패턴
        this.playAudio('correct');
    },

    // 오답 사운드 - 낮은 단음
    wrong() {
        this.vibrate(100); // 오답 진동 (조금 길게)
        this.playAudio('wrong');
    },

    // 선택 사운드 - 짧고 미묘한 클릭음
    select() {
        this.playAudio('select', 0.8); // 살짝 낮은 볼륨
    },

    // 레벨업 사운드 - 상승하는 아르페지오
    levelUp() {
        this.vibrate([100, 50, 100, 50, 200]); // 축하 진동 패턴
        this.playAudio('levelup');
    },

    // 배지 획득 - 단일 사운드로 통일
    badge(tier = 'bronze') {
        // 기본 진동 패턴
        this.vibrate([100, 50, 100, 50, 100]);
        
        // 단일 badge.mp3 사용
        this.playAudio('badge');
    },

    // 콤보 사운드 - 콤보 수에 따라 음계 상승
    combo(comboCount = 1) {
        this.vibrate(30); // 짧은 틱 진동
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
        if (!this.bgmEnabled) {
            console.log('BGM disabled, skipping');
            return;
        }
        
        // 기존 BGM 완전히 정지
        this.stopBGM();
        
        // 약간의 지연을 두고 새 BGM 시작 (이전 정리 완료 대기)
        await new Promise(resolve => setTimeout(resolve, 100));

        // AudioContext resume (자동재생 정책 우회)
        if (this.audioContext && this.audioContext.state === 'suspended') {
            try {
                await this.audioContext.resume();
                console.log('✅ AudioContext resumed');
            } catch (e) {
                console.warn('AudioContext resume failed:', e);
            }
        }

        try {
            // 오디오 파일 사용
            if (this.audioFiles.bgmLofi) {
                console.log('🎵 BGM 파일 경로:', this.audioFiles.bgmLofi);
                console.log('🎵 현재 위치:', window.location.href);
                console.log('🎵 베이스 경로:', window.location.origin);
                
                this.bgmAudio = new Audio(this.audioFiles.bgmLofi);
                this.bgmAudio.volume = this.bgmVolume;
                this.bgmAudio.loop = true; // 무한 반복
                
                // 로딩 이벤트 리스너
                this.bgmAudio.addEventListener('loadstart', () => {
                    console.log('🎵 BGM 로딩 시작...');
                });
                
                this.bgmAudio.addEventListener('loadedmetadata', () => {
                    console.log('✅ BGM 메타데이터 로드됨, 길이:', this.bgmAudio.duration);
                });
                
                this.bgmAudio.addEventListener('canplay', () => {
                    console.log('✅ BGM 재생 준비 완료');
                });
                
                this.bgmAudio.addEventListener('error', (e) => {
                    if (!this.bgmAudio) return; // null 체크
                    const errorCode = this.bgmAudio.error?.code;
                    const errorMessages = {
                        1: 'ABORTED - 로딩 중단',
                        2: 'NETWORK - 네트워크 오류',
                        3: 'DECODE - 디코딩 오류',
                        4: 'NOT_SUPPORTED - 지원하지 않는 형식'
                    };
                    const errorMsg = errorMessages[errorCode] || '알 수 없는 오류';
                    
                    console.error('❌ BGM 로드 에러:', {
                        error: e,
                        code: errorCode,
                        message: errorMsg,
                        networkState: this.bgmAudio?.networkState,
                        readyState: this.bgmAudio?.readyState,
                        src: this.bgmAudio?.src,
                        currentSrc: this.bgmAudio?.currentSrc
                    });
                    if (typeof showToast === 'function') {
                        showToast(`배경음악 오류: ${errorMsg} (code: ${errorCode})`, 'error');
                    }
                });
                
                const playPromise = this.bgmAudio.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            console.log('✅ BGM 재생 성공');
                        })
                        .catch(e => {
                            console.warn('⚠️ BGM autoplay blocked:', e.message);
                            // autoplay 차단 시 재시도 안내 (fallback 제거)
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
                console.log('❌ No BGM file found');
                if (typeof showToast === 'function') {
                    showToast('배경음악 파일이 없습니다', 'error');
                }
            }
        } catch (e) {
            console.warn('BGM start failed:', e);
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
                this.bgmAudio.removeEventListener('loadstart', null);
                this.bgmAudio.removeEventListener('loadedmetadata', null);
                this.bgmAudio.removeEventListener('canplay', null);
                this.bgmAudio.removeEventListener('error', null);
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

// 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Sound.init());
} else {
    Sound.init();
}
