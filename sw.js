/* Service worker Opleverinspectie — maakt de app beschikbaar zonder netwerk (QA-bevinding K3).
   Strategie: network-first voor de pagina zelf, zodat een nieuwe versie op GitHub direct doorkomt;
   zonder (bruikbaar) netwerk komt de laatst geladen versie uit de cache. Gegevens en foto's staan
   in IndexedDB en worden door dit bestand niet geraakt. */
const CACHE = 'opleverinspectie-v1';
const PAGINA = './index.html';
const WACHT_MS = 4000; // bouwplaats met één streepje bereik: niet eindeloos wachten op het netwerk

self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE)
    .then(c => c.add(new Request(PAGINA, { cache: 'reload' })))
    .then(() => self.skipWaiting())));

self.addEventListener('activate', e => e.waitUntil(
  caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE && k.indexOf('opleverinspectie-') === 0).map(k => caches.delete(k))))
    .then(() => self.clients.claim())));

self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const uitCache = () => cache.match(PAGINA);
    try {
      const antwoord = await Promise.race([
        fetch(e.request),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), WACHT_MS))
      ]);
      if (antwoord && antwoord.ok) { cache.put(PAGINA, antwoord.clone()); return antwoord; }
      return (await uitCache()) || antwoord;   // 404/500 van de server: liever de werkende versie
    } catch (err) {
      const c = await uitCache();
      if (c) return c;
      throw err;
    }
  })());
});
