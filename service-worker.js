self.addEventListener("install", (e) => {
    console.log("Service Worker installed");
    e.waitUntil(
      caches.open("static").then((cache) =>
        cache.addAll(["./", "./index.html", "./app.js", "./manifest.json"])
      )
    );
  });
  
  self.addEventListener("fetch", (e) => {
    e.respondWith(
      caches.match(e.request).then((res) => res || fetch(e.request))
    );
  });
  