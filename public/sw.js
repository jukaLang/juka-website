/* The previous jukalang.com (Docusaurus with the PWA plugin) installed a
 * service worker at /sw.js, and one per translation at /ru/sw.js, /zh/sw.js
 * and so on (_redirects serves this file at those paths too). A browser that
 * still has one keeps showing that old, cached site. This file takes its
 * place: when the browser checks for an update it installs this one, which
 * unregisters itself, deletes every cache and reloads the open tabs onto the
 * current site.
 *
 * The new site never registers a service worker, so this only ever runs for
 * visitors who had the old one.
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Each step on its own: one failing must not stop the others.
    try {
      await self.registration.unregister();
    } catch (err) {
      /* already gone */
    }
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    } catch (err) {
      /* storage unavailable */
    }
    try {
      const windows = await self.clients.matchAll({ type: 'window' });
      await Promise.all(windows.map((client) => (
        'navigate' in client ? client.navigate(client.url).catch(() => undefined) : undefined
      )));
    } catch (err) {
      /* nothing open */
    }
  })());
});
