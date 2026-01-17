/**
 * Service Worker - PWA 오프라인 지원 및 캐싱
 */

const CACHE_NAME = 'railway-study-v4.1';
const ASSETS_TO_CACHE = [
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
    '/js/sound.js',
    '/js/heatmap.js',
    // 오디오 파일 (존재하는 경우만 캐시)
    '/audio/sfx/correct.mp3',
    '/audio/sfx/wrong.mp3',
    '/audio/sfx/levelup.mp3',
    '/audio/sfx/badge.mp3',
    '/audio/sfx/combo.mp3',
    '/audio/sfx/select.mp3',
    '/audio/bgm/lofi-study.mp3'  // BGM 추가
];

// 메시지 이벤트 - SKIP_WAITING 처리
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// 설치 이벤트 - 캐시에 리소스 저장
self.addEventListener('install', (event) => {
    console.log('[SW] Installing service worker...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching app shell');
                return cache.addAll(ASSETS_TO_CACHE);
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

// Fetch 이벤트 - 네트워크 우선, 실패 시 캐시 사용
self.addEventListener('fetch', (event) => {
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
