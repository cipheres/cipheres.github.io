importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.CacheFirst()
  );

  workbox.routing.registerRoute(
    // Cache CSS files.
    /\.css$/,
    // Use cache but update in the background.
    new workbox.strategies.StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: 'css-cache',
    })
  );

  workbox.routing.registerRoute(
    // Cache image files.
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    // Use the cache if it's available.
    new workbox.strategies.CacheFirst({
      // Use a custom cache name.
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 20 images.
          maxEntries: 20,
          // Cache for a maximum of a week.
          maxAgeSeconds: 24 * 60 * 60,
        })
      ],
    })
  );
  workbox.precaching.precacheAndRoute([
    { url: 'https://www.texoviva.com/', revision: '1' },
    { url: 'https://www.texoviva.com/balancing-a-chemical-equation/', revision: '1' },
    { url: 'https://www.texoviva.com/depression-the-disease-of-era/', revision: '1' },
    { url: 'https://www.texoviva.com/repairing-cardiac-damage/', revision: '1' },
    { url: 'https://www.texoviva.com/how-bioluminescence-work/', revision: '1' },
    { url: 'https://www.texoviva.com/organisms-that-light-up/', revision: '1' },
    { url: 'https://www.texoviva.com/about', revision: '1' },
    { url: 'https://www.texoviva.com/categories', revision: '1' },
]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}