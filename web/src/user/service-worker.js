const version = `${NAME}-${VERSION}`

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(version)
      .then((cache) => cache.addAll(serviceWorkerOption.assets)) // eslint-disable-line
  )
})
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch((error) => {
        console.error(error)

        return caches.open(version).then((cache) => {
          return cache.match('offline.html')
        })
      }),
    )
  }
})
