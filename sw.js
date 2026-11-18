const CACHE_NAME = 'tmeic-alarm-v1';
const ASSETS = [
  './',
  './index.html',
  './Tmeic_alarms.json',
  './Fuji_alarms.json',
  './Fuji_vm4_alarms.json',
  './Hitachi_hivectol_vsi_8_200_alarms.json',
  './Hitachi_hivectol_vsi_400_2400_alarms.json',
  './Yaskawa_g7_alarms.json',
  './manifest.json',
  './icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});