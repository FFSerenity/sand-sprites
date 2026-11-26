// Offline support: always try the network first (so updates arrive), fall back to the cached copy.
const CACHE = 'sand-sprites-v14';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png', './beach/day.jpg', './beach/night.jpg', './beach/props.webp', './beach/props_e.png', './beach/fireworks.jpg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // videos stream with range requests: let the browser fetch them directly
  if (e.request.headers.has('range') || /\.mp4(\?|$)/.test(e.request.url)) return;
  e.respondWith(
    // ask the server whether the file changed (cheap when it hasn't) instead of trusting the browser's short-term cache
    fetch(e.request.mode === 'navigate' ? e.request : new Request(e.request, { cache: 'no-cache' })).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
  );
});
