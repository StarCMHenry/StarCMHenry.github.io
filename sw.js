const CACHE = "sb-v1";
const FILES = ["salary_calculator.html","manifest.json","index.png","icon-180.png","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting();});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
