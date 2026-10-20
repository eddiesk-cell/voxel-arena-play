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

const VERSION = '0.4.1-d11e367138';
/** Files relative to the worker (hashed by Vite, so a cached copy can never be stale). */
const PRECACHE = ["assets/CopyShader-BEEDdIKK.js","assets/GTAOPass-D_Zq6hRP.js","assets/account-kit-Ct63Q3E5.js","assets/account-ui-B68jZtOK.js","assets/aim-B3Z6gkpx.js","assets/animation-Cpp9miNz.js","assets/app-C0MYPEaR.css","assets/app-Cvsa3f8u.js","assets/art-CcJOpGcW.js","assets/art-nPF206si.css","assets/atlas-BsMh1oAP.js","assets/attack-button-Dq3ghwpu.js","assets/audio-pWEIKCKy.js","assets/cache-Dh3X_Xig.js","assets/camera-DnsxRMeu.js","assets/classic-verdant-C1ceTgFw.js","assets/client-D4lBuTAt.js","assets/codex-3rA4Bz9C.css","assets/codex-DXQJCCfb.js","assets/collection-3FUdAeb_.js","assets/combat-Dp2sqW4P.js","assets/combo-tips-X2g9pxL0.js","assets/common-CYelmCri.css","assets/common-DgIBcN3F.js","assets/crest-De3SJTk8.js","assets/desktop-bar-Ble4YflO.js","assets/dom-CJAFp_yd.js","assets/gallery-CzoJAA9P.js","assets/gallery-DJyzFOK5.js","assets/gallery-DUEkBJ9T.js","assets/gallery-D_PppD4w.js","assets/gallery-DkEUDxBJ.js","assets/gallery-pB6_AFJf.js","assets/gallery-vfx2-Di4llFHL.js","assets/game-BvJ-4TKk.js","assets/game-Db1zs_Ie.css","assets/haptics-D8iTxJBb.js","assets/hello-CRH-V97p.js","assets/heroes-CVsvZ4hn.js","assets/index-C2M3Hpl6.css","assets/index-TDdP4K60.js","assets/launch-BXk7AStf.js","assets/launch-D3W3Gk6_.js","assets/launch-DMVG1vij.css","assets/launch-Deiu2mSq.js","assets/launch-EKU_zufY.css","assets/leaderboards-CaTKdIRA.js","assets/library-D9MOdY_j.js","assets/library-pPPAT8fX.css","assets/loading-cards-jV7t9CWW.js","assets/loadout-3cgSPPwX.css","assets/loadout-BUxxhFzc.js","assets/loadout-PIkmR_EP.js","assets/loadout-Zmrb31ii.js","assets/lobby-Bjc5wnCO.js","assets/map-picker-DNkUTTJa.js","assets/maps-DLQzFwtK.js","assets/match-Ck1Od4-C.js","assets/math-C2DYnAfD.js","assets/minimap-CifV-oOv.js","assets/model-Bsin-J5A.js","assets/mvp-c4XQNCgm.css","assets/mvp-yC5CoBn0.js","assets/portraits-RsfmKaAB.js","assets/preload-helper-CRzLMJPS.js","assets/profile-tab-BZRZpBio.css","assets/profile-tab-BdyEJd_K.js","assets/protocol-Bw4YY9Dw.js","assets/qr-CawAR3Y1.js","assets/quality-B3lZnszi.js","assets/rating-DvDC0udA.js","assets/renderer-CjXby1rQ.js","assets/result-BwHH8DuX.css","assets/result-C8fh3MsL.js","assets/review-RPIx-8n-.js","assets/rim-C9JWkLGl.js","assets/rng-Bajq1aa5.js","assets/role-icons-ClbJPdZG.js","assets/roles-jaFwKRmq.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/session-B_ReMOrm.js","assets/settings-CdyXPIQE.js","assets/settings-panel-9eobOEsE.css","assets/settings-panel-Czp2fA8-.js","assets/sim-DqsfkCpD.js","assets/skin-fx-DDsTHapv.js","assets/skin-gallery-B0KrdCQF.js","assets/start-CVzhw0Pu.js","assets/start-Dm7cRYld.css","assets/store-BsT67p40.js","assets/tape-vBWtpH4c.js","assets/team-DZ2-Pl8D.js","assets/three.core-CWs1dV2C.js","assets/transports-Cz90TtnN.js","assets/vfx-system-gpTiubZP.js","assets/watch-driver-hnW8yGL1.js","assets/wire-CLjI0-vH.js","icons/favicon-32.png","index.html","manifest.webmanifest"];

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
