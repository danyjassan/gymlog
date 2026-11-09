// Service worker: guarda la app en el celular para que abra SIN internet.
// Estrategia: abre al instante desde el celular y, si hay internet,
// descarga en segundo plano la versión nueva (se ve la próxima vez que abras).
const CACHE = 'gymlog-v1';
const FILES = ['./', './index.html', './manifest.json', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // En tu computadora (vista previa) no guardamos nada: así siempre ves el último cambio.
  if (['localhost', '127.0.0.1'].includes(self.location.hostname)) return;
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request, {ignoreSearch: true}).then(cached => {
        const fresh = fetch(e.request).then(res => {
          if (res && res.ok) cache.put(e.request, res.clone());
          return res;
        }).catch(() => cached);
        return cached || fresh;
      })
    )
  );
});
