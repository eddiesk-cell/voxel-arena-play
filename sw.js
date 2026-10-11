/*
 * Voxel Arena service worker. TEMPLATE: scripts/pwa/vite-plugin.ts fills in VERSION and PRECACHE after
 * `vite build` and writes the result to dist/sw.js (the file you are reading is never served as is).
 *
 *  - install    precache the whole app shell (index.html, hashed JS / CSS, manifest) into the cache
 *               `va-shell-<VERSION>` in one go. If any file fails, the install fails and the previous worker
 *               (with its own complete cache) keeps serving. A missing file can never ship a half-offline app.
 *  - waiting    a new worker does NOT take over by itself. The page shows "New version - tap to reload" and
 *               posts { type: 'SKIP_WAITING' } when the player agrees (never in the middle of a match).
 *  - activate   delete the caches of older versions, claim the open pages.
 *  - fetch      same-origin GETs inside the scope: navigations to the app (any ?query) get the cached
 *               index.html, precached files come from the cache. Everything else (the server's /health and
 *               /rooms, other origins, WebSockets) goes straight to the network, untouched.
 *
 * Play vs AI therefore works offline after the first load; Play Online needs the network as before.
 */
'use strict';

const VERSION = '0.1.0-434f0f12fd';
/** Files relative to the worker (hashed by Vite, so a cached copy can never be stale). */
const PRECACHE = ["assets/GTAOPass-zNnV7dE2.js","assets/animation-CjEgprIR.js","assets/gallery-CpFlSIWG.js","assets/gallery-DPHP1JJg.js","assets/gallery-vfx2-CXHmhEaq.js","assets/index-BNWYeXHC.js","assets/index-CfAHZIm2.css","assets/skin-gallery-BmAyiTR2.js","assets/three.core-CR6xwVyd.js","icons/favicon-32.png","index.html","manifest.webmanifest"];

const CACHE_PREFIX = 'va-shell-';
const CACHE = CACHE_PREFIX + VERSION;
const SCOPE = self.registration.scope;
const SCOPE_PATH = new URL(SCOPE).pathname;
const INDEX_URL = new URL('index.html', SCOPE).href;
const KNOWN = new Set(PRECACHE);

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await Promise.all(
        PRECACHE.map(async (rel) => {
          const url = new URL(rel, SCOPE).href;
          // `reload` skips the HTTP cache: the cache must hold what the server has right now.
          const res = await fetch(new Request(url, { cache: 'reload' }));
          if (!res.ok) throw new Error('precache failed: ' + rel + ' (' + res.status + ')');
          await cache.put(url, res);
        }),
      );
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) {
        if (key.startsWith(CACHE_PREFIX) && key !== CACHE) await caches.delete(key);
      }
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('message', (event) => {
  const d = event.data;
  const type = d && typeof d === 'object' ? d.type : d;
  if (type === 'SKIP_WAITING') self.skipWaiting();
  else if (type === 'GET_VERSION' && event.source) event.source.postMessage({ type: 'VERSION', version: VERSION });
});

const OFFLINE_HTML =
  '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
  '<title>Voxel Arena</title><body style="margin:0;background:#0b0f1a;color:#e8ecf5;font:16px system-ui,sans-serif;' +
  'display:flex;align-items:center;justify-content:center;height:100vh;text-align:center;padding:24px">' +
  '<div><b style="font-size:22px">Voxel Arena</b><p>You are offline and the game has not been saved on this device yet.<br>' +
  'Connect once and reload: after that it plays without a network.</p></div>';

async function fromCache(url) {
  return caches.match(url, { cacheName: CACHE });
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(SCOPE_PATH)) return;
  const rel = url.pathname.slice(SCOPE_PATH.length);

  if (req.mode === 'navigate') {
    // The app itself (any ?hero= / ?online= / ?room= query). Other paths (/health, /rooms) are not ours.
    if (rel !== '' && rel !== 'index.html') return;
    event.respondWith(
      (async () => {
        const hit = await fromCache(INDEX_URL);
        if (hit) return hit;
        try {
          return await fetch(req);
        } catch {
          return new Response(OFFLINE_HTML, { status: 503, headers: { 'content-type': 'text/html; charset=utf-8' } });
        }
      })(),
    );
    return;
  }

  if (!KNOWN.has(rel)) return;
  event.respondWith(
    (async () => {
      const hit = await fromCache(url.origin + url.pathname);
      return hit || fetch(req);
    })(),
  );
});
