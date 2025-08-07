// service-worker.js

const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/id.html",
  "/map.html",
  "/assistant.html",
  "/schedule.html",
  "/css/assistant.css",
  "/css/id.css",
  "/css/map.css",
  "/css/schedule.css",
  "/css/main.css",
  "/js/main.js",
  "/js/assistant.js",
  "/js/id.js",
  "/js/map.js",
  "/js/schedule.js",
  "/imgs/icon-192.png",
  "/imgs/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
