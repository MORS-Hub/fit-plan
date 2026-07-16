const CACHE_NAME = 'fitplan-v1';
const urlsToCache = [
  '.',
  'index.html',
  'offline.html',
  'manifest.json',
  'css/style.css',
  'js/app.js',
  'js/calculator.js',
  'js/recipes.js',
  'js/mealplan.js',
  'js/calendar.js',
  'js/storage.js',
  'data/recipes.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('SW: кэширую файлы');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('SW: удаляю старый кэш', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request)
          .then(response => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, clone);
              });
            }
            return response;
          })
          .catch(() => {
            return caches.match('offline.html');
          });
      })
  );
});
