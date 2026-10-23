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

const VERSION = '0.7.0-6aadb11c44';
/** Files relative to the worker (hashed by Vite, so a cached copy can never be stale). */
const PRECACHE = ["assets/CopyShader-BEEDdIKK.js","assets/GTAOPass-D_Zq6hRP.js","assets/account-kit-Ct63Q3E5.js","assets/account-ui-Qaxe-OyD.js","assets/animation-PNFDEiyR.js","assets/app-B4_moPZt.css","assets/app-FZIP8TCf.js","assets/art-CQYyhQI3.js","assets/art-DIDEp8Na.css","assets/atlas-BsMh1oAP.js","assets/attack-VgjmVPhh.js","assets/attack-button-BCqBWPGZ.js","assets/audio-DYWP0Y7P.js","assets/cache-Dh3X_Xig.js","assets/classic-verdant-Lkv1JLes.js","assets/client-D4lBuTAt.js","assets/codex-Bsiv4zK6.js","assets/codex-CxUdfSaJ.css","assets/collection-CBRO332j.js","assets/combat-ClufnJ6u.js","assets/combo-tips-DAmAdJCt.js","assets/common-DKw-e93H.js","assets/common-SXfAAzGX.css","assets/crest-BBhseugY.js","assets/desktop-bar-DwBUCL8J.js","assets/dom-CJAFp_yd.js","assets/gallery-8aLV_kPF.js","assets/gallery-A-QoUCOm.js","assets/gallery-BKhmi7Oa.js","assets/gallery-Cu9rF4uq.js","assets/gallery-DETplyU3.js","assets/gallery-DruJf6f9.js","assets/gallery-vfx2-C9yoV8QO.js","assets/game-DM_hzrOU.js","assets/game-X6CBmigV.css","assets/haptics-D8iTxJBb.js","assets/hello-CRH-V97p.js","assets/hero-gate-DuNSRCHa.js","assets/heroes-B09Oz1yi.js","assets/index-0RCRRpw1.css","assets/index-J0NicwR1.js","assets/launch-BHxgK8_T.js","assets/launch-Cc__InPa.js","assets/launch-DMVG1vij.css","assets/launch-DUhXfBt7.js","assets/launch-EKU_zufY.css","assets/leaderboards-DPu2MDIe.js","assets/library-CIb_gxNy.js","assets/library-pPPAT8fX.css","assets/loading-cards-CWUwX4O2.js","assets/loading-cards-CaAIleab.css","assets/loadout-3cgSPPwX.css","assets/loadout-7Sjo2etQ.js","assets/loadout-DygDV_9B.js","assets/loadout-FxkCb26h.js","assets/lobby-Dh1IA5L4.js","assets/map-picker-CAwam2m-.js","assets/maps--PBv0gJZ.js","assets/match-C2YEF1tv.js","assets/math-C2DYnAfD.js","assets/minimap-BQ1z8bf9.js","assets/model-Bsin-J5A.js","assets/mvp-BYBXcgdb.css","assets/mvp-Cgu2vMCt.js","assets/portraits-V2pog5R4.js","assets/preload-helper-CRzLMJPS.js","assets/profile-tab-B_2_PUOv.css","assets/profile-tab-Bq1p5_nR.js","assets/promo-anim-B6NsdDsM.js","assets/protocol-Bw4YY9Dw.js","assets/qr-CawAR3Y1.js","assets/quality-B_KARPno.js","assets/ranked-view-CR-3sS2D.js","assets/rating-DvDC0udA.js","assets/renderer-DprDmgLJ.js","assets/result-BwHH8DuX.css","assets/result-fIuJvjdM.js","assets/review-dsPShiCS.js","assets/rim-C9JWkLGl.js","assets/rng-Bajq1aa5.js","assets/role-icons-ClbJPdZG.js","assets/roles-jaFwKRmq.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/season-DoD83WHL.js","assets/season-skin-DyANkr8w.js","assets/session-Iblgtnmu.js","assets/settings-Da1NqLeg.js","assets/settings-panel-9eobOEsE.css","assets/settings-panel-Beq0v7d9.js","assets/sim-D_vRxFlF.js","assets/skin-fx-Ct5H9lUt.js","assets/skin-gallery-DwlXlDnJ.js","assets/skins-C7ypQNHh.js","assets/snapshot-B8tgAmzB.js","assets/start-Dm7cRYld.css","assets/start-Dmc2Z1li.js","assets/store-Cg5cDlz8.js","assets/store-WHYRIuyn.js","assets/tape-g1-oLvZq.js","assets/team-Cecpep8z.js","assets/three.core-CWs1dV2C.js","assets/transports-Cz90TtnN.js","assets/trial-BfviirBc.js","assets/trial-setup-FiAFbknh.js","assets/vfx-system-BTS_YGv9.js","assets/vision-Cdrs9GyC.js","assets/watch-driver-BukM-Ag8.js","assets/wire-CLjI0-vH.js","icons/favicon-32.png","index.html","manifest.webmanifest"];

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
