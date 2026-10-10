const CACHE_NAME = "sabry-v1";
const CORE_ASSETS = [
  "/",
  "/offline",
  "/manifest.json",
];

// Install event - cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.log("Cache addAll failed:", err);
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") return;

  // Skip external resources (CDNs, external APIs)
  if (url.origin !== location.origin) return;

  // Skip API routes
  if (url.pathname.startsWith("/api")) return;

  // Skip service worker requests
  if (url.pathname === "/service-worker.js") return;

  // Handle navigation requests
  if (request.mode === "navigate") {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;

        return fetch(request).then((response) => {
          // Cache successful navigation responses
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        }).catch(() => {
          // Offline fallback for navigation
          return caches.match("/offline");
        });
      })
    );
    return;
  }

  // Handle static assets (images, CSS, JS)
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        // Return cached version, but fetch in background for updates
        const fetchPromise = fetch(request).then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        }).catch(() => {
          // If fetch fails, return cached version
          return cached;
        });

        return fetchPromise.catch(() => cached);
      }

      // Not in cache, fetch from network
      return fetch(request).then((response) => {
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      }).catch(() => {
        // Offline and not in cache
        return new Response("Offline - resource not cached", {
          status: 503,
          statusText: "Service Unavailable",
        });
      });
    })
  );
});
