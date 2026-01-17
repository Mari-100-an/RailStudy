/**
 * Service Worker - PWA 오프라인 지원 및 캐싱
 */

const CACHE_NAME = 'railway-study-v1.6';
const APP_VERSION = 'v1.6.2'; // 앱 버전

// 필수 리소스 (실패 시 설치 중단)
const CORE_ASSETS = [
    '/',
    '/index.html',
    '/css/style.css',
    '/css/game-mode.css',
    '/js/app.js',
    '/js/quiz.js',
    '/js/dashboard.js',
    '/js/gamification.js',
    '/js/storage.js',
    '/js/theme.js',
    '/js/sound.js'
];

// 오디오 파일 (실패해도 설치 계속)
const AUDIO_ASSETS = [
    '/audio/sfx/correct.mp3',
    '/audio/sfx/wrong.mp3',
    '/audio/sfx/levelup.mp3',
    '/audio/sfx/badge.mp3',
    '/audio/sfx/combo.mp3',
    '/audio/sfx/select.mp3',
    '/audio/bgm/lofi-study.mp3'
];

// 메시지 이벤트 - SKIP_WAITING 처리
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// 설치 이벤트 - 캐시에 리소스 저장
self.addEventListener('install', (event) => {
    console.log('[SW] Installing service worker v' + APP_VERSION);
    
    // 즉시 활성화 (대기 상태 건너뛰기)
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(async (cache) => {
                // 필수 리소스 먼저 캐시
                console.log('[SW] Caching core assets...');
                await cache.addAll(CORE_ASSETS);
                console.log('[SW] Core assets cached');
                
                // 오디오 파일 개별 캐시 (실패해도 계속)
                console.log('[SW] Caching audio assets...');
                for (const audioUrl of AUDIO_ASSETS) {
                    try {
                        const response = await fetch(audioUrl);
                        if (response.ok) {
                            await cache.put(audioUrl, response);
                            console.log('[SW] Audio cached:', audioUrl);
                        } else {
                            console.warn('[SW] Audio fetch failed:', audioUrl, response.status);
                        }
                    } catch (e) {
                        console.warn('[SW] Audio cache error:', audioUrl, e.message);
                    }
                }
                console.log('[SW] Installation complete');
            })
    );
});

// 활성화 이벤트 - 오래된 캐시 삭제
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating service worker...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch 이벤트 - 오디오/정적 파일은 캐시 우선, 나머지는 네트워크 우선
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // 오디오 파일은 캐시 우선 전략
    if (url.pathname.includes('/audio/')) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    console.log('[SW] Audio from cache:', url.pathname);
                    return cachedResponse;
                }
                
                console.log('[SW] Audio not in cache, fetching:', url.pathname);
                return fetch(event.request).then((response) => {
                    if (response && response.status === 200) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                            console.log('[SW] Audio cached:', url.pathname);
                        });
                    }
                    return response;
                }).catch((error) => {
                    console.error('[SW] Audio fetch failed:', url.pathname, error);
                    return new Response(null, { status: 404, statusText: 'Audio not found' });
                });
            })
        );
        return;
    }
    
    // 나머지 리소스는 네트워크 우선
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // 성공적인 응답이면 캐시에 복사 저장
                if (response && response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                // 네트워크 실패 시 캐시에서 반환
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    
                    // 캐시도 없으면 오프라인 페이지 반환
                    if (event.request.mode === 'navigate') {
                        return caches.match('/index.html');
                    }
                });
            })
    );
});

// 백그라운드 동기화 (선택사항)
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-study-progress') {
        console.log('[SW] Background sync triggered');
        // 학습 진행도 동기화 로직 추가 가능
    }
});

// 푸시 알림 (선택사항)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : '새로운 학습 콘텐츠가 추가되었습니다!',
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            { action: 'explore', title: '확인하기', icon: '/icon-192.png' },
            { action: 'close', title: '닫기', icon: '/icon-192.png' }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('철도운전면허 학습', options)
    );
});

// 알림 클릭 이벤트
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});
