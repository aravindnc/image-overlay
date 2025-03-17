const CACHE_NAME = 'image-overlay-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './assets/fabric.min.js',
  './assets/font-awesome.min.css',
  './assets/icon-192x192.png',
  './assets/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});