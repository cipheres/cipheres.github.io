importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.core.setCacheNameDetails({
    prefix: 'texoviva',
    suffix: 'v1',
    precache: 'texoviva-precache',
    runtime: 'texoviva-runtime'
  });
  workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'js-cache',
    })
  );

  workbox.routing.registerRoute(
    // Cache CSS files.
    /\.css$/,
    // Use cache but update in the background.
    new workbox.strategies.CacheFirst({
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
    {
      "url": "404.html",
      "revision": "016d529fc6c5fde3e260f494d18064f8"
    },
    {
      "url": "about.html",
      "revision": "f03622592e6f90adcb0f3b120c161399"
    },
    {
      "url": "assets/images/favicon.ico",
      "revision": "6e044e17667811120b235e90b612c42c"
    },
    {
      "url": "balancing-a-chemical-equation/index.html",
      "revision": "1620a616130894139c57103b037653b1"
    },
    {
      "url": "balancing-of-chemical-equations-of-redox-reaction-using-oxidation-number/index.html",
      "revision": "f4d3ef78eecc1fc60dfbedbdfab8fe63"
    },
    {
      "url": "categories.html",
      "revision": "2d97a6d9bc93ef397b0c53a38eb7c0a8"
    },
    {
      "url": "comment_policy.html",
      "revision": "6e3787a1758548f660254419e2c920b8"
    },
    {
      "url": "depression-the-disease-of-era/index.html",
      "revision": "947c91345f2d36d7e8b83d4a56e39b4b"
    },
    {
      "url": "favicon.ico",
      "revision": "c66a0fcd6276b57ef6ff576beba26027"
    },
    {
      "url": "how-bioluminescence-work/index.html",
      "revision": "41623c3e3c2d05e803e6b4c675191413"
    },
    {
      "url": "index.html",
      "revision": "bfee630760bb9f62524754a98d71ebc9"
    },
    {
      "url": "mywot3ade9a91aa2f31eb5238.html",
      "revision": "fa96aa687dbbd849f33e3deaf8e54cf2"
    },
    {
      "url": "one-person-company/index.html",
      "revision": "da35b091fb086f5658929a901e3b7936"
    },
    {
      "url": "organisms-that-light-up/index.html",
      "revision": "f0391a65917769a3c884984cd7af8a59"
    },
    {
      "url": "oxidation-number/index.html",
      "revision": "e53026e1470b2d06707be0284a4d3444"
    },
    {
      "url": "page2/index.html",
      "revision": "12296c1e376c6eb8d0c8ed4532b93dd7"
    },
    {
      "url": "privacy_policy.html",
      "revision": "cae1437bfbfbc8095430cd2c510ce0fe"
    },
    {
      "url": "repairing-cardiac-damage/index.html",
      "revision": "6f34eb6593e2f53ca16973eefdbc1cf1"
    },
    {
      "url": "symptom-cause-of-hypothyroidism/index.html",
      "revision": "51c3ad2ea923f7adc5749efc36e4e2cb"
    },
    {
      "url": "tags.html",
      "revision": "2f84a4c88d3725d64742d714d7db03fe"
    },
    {
      "url": "tos.html",
      "revision": "29b8983c776eaddcf808af99bf100342"
    }
  ]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}