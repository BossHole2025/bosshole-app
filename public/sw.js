
self.addEventListener('install', event => {
  console.log('[BossHole] Installed service worker.');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[BossHole] Activated service worker.');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
