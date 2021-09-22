const nombreCache = 'apv-v3';
const offlinePage = '/47-ServiceWorkers-PWA/error.html'
const archivos = [
    '/47-ServiceWorkers-PWA',
    '/47-ServiceWorkers-PWA/index.html',
    '/47-ServiceWorkers-PWA/css/bootstrap.css',
    '/47-ServiceWorkers-PWA/css/styles.css',
    '/47-ServiceWorkers-PWA/js/app.js',
    '/47-ServiceWorkers-PWA/js/apv.js',
    '/47-ServiceWorkers-PWA/error.html'
];


// Cuando se instala el service worker
self.addEventListener('install', evento => {
    console.log('Instalado el Service Worker');

    evento.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('cacheando');
                cache.addAll(archivos);
            })
    )
});

// Activar el Service Worker
self.addEventListener('activate', evento => {
    console.log('Service Worker Activado');

    console.log(evento);

    evento.waitUntil(
        caches.keys()
            .then(keys => {
                // console.log(keys);
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        .map(key => caches.delete(key)) //Borra las versiones anteriores
                )
            })
    )
});

// Evento fetch para descargar archivos estatico
self.addEventListener('fetch', evento => {
    console.log('Fetch...', evento);

    evento.respondWith(
        caches.match(evento.request)
            .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match(offlinePage)))
    )
})