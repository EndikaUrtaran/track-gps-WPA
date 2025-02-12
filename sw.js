const CACHE_NAME = 'gps-tracker-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.webmanifest'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
);