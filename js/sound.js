/**
 * 사운드 모듈 - 깔끔하고 절제된 피드백 사운드
 * Web Audio API를 사용한 간단한 비프음 생성
 */
const Sound = {
    audioContext: null,
    enabled: true,
    volume: 0.3, // 적당한 볼륨으로 설정

    // 오디오 컨텍스트 초기화
    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            // 기본적으로 사운드 활성화
            if (typeof Storage !== 'undefined' && Storage.get && typeof Storage.get === 'function') {
                try {
                    const settings = Storage.get(Storage.KEYS.SETTINGS);
                    this.enabled = settings?.soundEnabled !== false;
                } catch (e) {
                    console.warn('Storage not ready, using default sound settings');
                    this.enabled = true;
                }
            }
            
            console.log('🔊 Sound module initialized', {
                enabled: this.enabled,
                contextState: this.audioContext?.state,
                volume: this.volume
            });
            
            // AudioContext는 사용자 제스처 후에 resume 필요 (브라우저 자동재생 정책)
            if (this.audioContext.state === 'suspended') {
                // 첫 클릭 시 활성화
                const activateAudio = () => {
                    if (this.audioContext.state === 'suspended') {
                        this.audioContext.resume().then(() => {
                            console.log('🔊 AudioContext resumed');
                        });
                    }
                };
                document.addEventListener('click', activateAudio, { once: true });
                document.addEventListener('touchstart', activateAudio, { once: true });
            }
        } catch (e) {
            console.error('❌ Web Audio API initialization failed', e);
            this.enabled = false;
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
        if (!this.enabled || !this.audioContext) return;

        const now = this.audioContext.currentTime;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        // C5 -> E5 코드 (화음)
        oscillator.frequency.setValueAtTime(523.25, now);
        oscillator.frequency.linearRampToValueAtTime(659.25, now + 0.1);
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(this.volume, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        oscillator.start(now);
        oscillator.stop(now + 0.15);
    },

    // 오답 사운드 - 낮은 단음
    wrong() {
        if (!this.enabled || !this.audioContext) return;

        this.playBeep(200, 0.15, 'sine');
    },

    // 선택 사운드 - 짧고 미묘한 클릭음
    select() {
        if (!this.enabled || !this.audioContext) {
            console.log('🔇 Sound disabled or context not available');
            return;
        }

        console.log('🔊 Playing select sound');
        this.playBeep(800, 0.08, 'sine');
    },

    // 레벨업 사운드 - 상승하는 아르페지오
    levelUp() {
        if (!this.enabled || !this.audioContext) return;

        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
        notes.forEach((freq, i) => {
            setTimeout(() => this.playBeep(freq, 0.1, 'sine'), i * 80);
        });
    },

    // 배지 획득 - 반짝이는 느낌
    badge() {
        if (!this.enabled || !this.audioContext) return;

        const now = this.audioContext.currentTime;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.setValueAtTime(880, now); // A5
        oscillator.frequency.exponentialRampToValueAtTime(1760, now + 0.15); // A6
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(this.volume, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

        oscillator.start(now);
        oscillator.stop(now + 0.2);
    },

    // 콤보 사운드 - 빠른 틱음
    combo() {
        if (!this.enabled || !this.audioContext) return;

        this.playBeep(1200, 0.05, 'square');
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
