const CACHE_NAME = 'image-overlay-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './assets/fabric.min.js',
  './assets/font-awesome.min.css',
  './assets/icon-192x192.png',
  './assets/icon-512x512.png'
];

urlsToCache.push(
  './webfonts/fa-solid-900.ttf',
  './webfonts/fa-solid-900.woff2'
);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/group-images.html',
        '/viewer.html',
        '/manifest.json',
        '/assets/bootstrap.min.css',
        '/assets/fabric.min.js',
        '/assets/font-awesome.min.css',
        '/assets/masonry.pkgd.min.js',
        '/assets/rangeslider.css',
        '/assets/rangeslider.min.js',
        '/assets/icon-192x192.png',
        '/assets/icon-512x512.png',
        '/assets/screenshot1.png',
        '/assets/screenshot2.png',
        '/webfonts/fa-solid-900.ttf',
        '/webfonts/fa-solid-900.woff2'
      ]);
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