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
      "revision": "1b9eada38f425524876e00f51ee0987e"
    },
    {
      "url": "about.html",
      "revision": "f2b8106ec3e6f514bb95305a77120101"
    },
    {
      "url": "assets/fonts/casper-icons.eot",
      "revision": "dd96d59cfa813cb940aee7448669f302"
    },
    {
      "url": "assets/fonts/casper-icons.svg",
      "revision": "240264149a475160ef8115aeda3cbafd"
    },
    {
      "url": "assets/fonts/casper-icons.ttf",
      "revision": "3f94815a98a3e70e7884b856f51a8303"
    },
    {
      "url": "assets/fonts/casper-icons.woff",
      "revision": "74c17872f744013b1d4d3990e3eb0a83"
    },
    {
      "url": "assets/webfonts/fa-brands-400.eot",
      "revision": "03783c5172ee1ad128c576bf88fac168"
    },
    {
      "url": "assets/webfonts/fa-brands-400.svg",
      "revision": "073c2f3ce60eaf69cc2767ef3d989078"
    },
    {
      "url": "assets/webfonts/fa-brands-400.ttf",
      "revision": "ed2b8bf117160466ba6220a8f1da54a4"
    },
    {
      "url": "assets/webfonts/fa-brands-400.woff",
      "revision": "fe9d62e0d16a333a20e63c3e7595f82e"
    },
    {
      "url": "assets/webfonts/fa-regular-400.eot",
      "revision": "fc9c63c8224fb341fc933641cbdd12ef"
    },
    {
      "url": "assets/webfonts/fa-regular-400.svg",
      "revision": "8fdea4e89ac405d9f8db327adb331d8d"
    },
    {
      "url": "assets/webfonts/fa-regular-400.ttf",
      "revision": "59215032a4397507b80e5625dc323de3"
    },
    {
      "url": "assets/webfonts/fa-regular-400.woff",
      "revision": "e5770f9863963fb576942e25214a226d"
    },
    {
      "url": "assets/webfonts/fa-solid-900.eot",
      "revision": "ef3df98419d143d9617fe163bf4edc0b"
    },
    {
      "url": "assets/webfonts/fa-solid-900.svg",
      "revision": "b557f56e367e59344ca95f9d1fb44352"
    },
    {
      "url": "assets/webfonts/fa-solid-900.ttf",
      "revision": "acf50f59802f20d8b45220eaae532a1c"
    },
    {
      "url": "assets/webfonts/fa-solid-900.woff",
      "revision": "4bced7c4c0d61d4f988629bb8ae80b8b"
    },
    {
      "url": "balancing-a-chemical-equation/index.html",
      "revision": "acf74b57e455552f2d5b14122ddad20c"
    },
    {
      "url": "balancing-of-chemical-equations-of-redox-reaction-using-oxidation-number/index.html",
      "revision": "6d56396107725d8602a2637ddddec43f"
    },
    {
      "url": "categories.html",
      "revision": "b9bb000da3c202eb5f63c872eb2a074d"
    },
    {
      "url": "comment_policy.html",
      "revision": "88b38bbbbecfee4ec9031794121d8bd5"
    },
    {
      "url": "depression-the-disease-of-era/index.html",
      "revision": "a9dc6b3728b3e77cdb5267abab507731"
    },
    {
      "url": "how-bioluminescence-work/index.html",
      "revision": "9e50ccd1a235250b5275542ac657c868"
    },
    {
      "url": "index.html",
      "revision": "1dd0eed9a6cf756ba448a43c006ac714"
    },
    {
      "url": "mywot3ade9a91aa2f31eb5238.html",
      "revision": "fa96aa687dbbd849f33e3deaf8e54cf2"
    },
    {
      "url": "one-person-company/index.html",
      "revision": "8ca7e1dde6c9967a08c7bb71b892f9dc"
    },
    {
      "url": "organisms-that-light-up/index.html",
      "revision": "6159594db4adf46229645572fb41723b"
    },
    {
      "url": "oxidation-number/index.html",
      "revision": "f5e87cd61058879a000fb48c0578ca8d"
    },
    {
      "url": "page2/index.html",
      "revision": "8b3c92d07c4cdd2d7f8d6a1fc2e632f4"
    },
    {
      "url": "privacy_policy.html",
      "revision": "cbd2502f1b6f28400f87261eb45b4190"
    },
    {
      "url": "repairing-cardiac-damage/index.html",
      "revision": "1a0ac3c6a61b78099e36ea1889b60d10"
    },
    {
      "url": "symptom-cause-of-hypothyroidism/index.html",
      "revision": "5d180a4e4fc3351d8a24be26f5e2bc60"
    },
    {
      "url": "tags.html",
      "revision": "6deafb003cf51b5ca8d123c843b59803"
    },
    {
      "url": "tos.html",
      "revision": "4f5aeb0201c070d1d4c830111ac4adc3"
    }
  ]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}