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
      "url": "assets/css/all.min.css",
      "revision": "dbf9d822cefe851ba6f66e1ad57e8987"
    },
    {
      "url": "assets/css/bootstrap.min.css",
      "revision": "a15c2ac3234aa8f6064ef9c1f7383c37"
    },
    {
      "url": "assets/css/main.css",
      "revision": "cd1f192afaa3b4b75f50a6f8803d661f"
    },
    {
      "url": "assets/css/RighteousCMerriweather.css",
      "revision": "143a079d4bd27dde6d84b7fd408f56f3"
    },
    {
      "url": "assets/css/screen.css",
      "revision": "3e8cae674298ea0bda56d1dc8dac106d"
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
      "url": "assets/images/1.jpg",
      "revision": "1f1152fce5d6a5dc8eeb32eaefb2bef2"
    },
    {
      "url": "assets/images/10.jpg",
      "revision": "7606f8a5631640ffee266eee39ee70ce"
    },
    {
      "url": "assets/images/11.jpg",
      "revision": "0d1b62464a6974c16d7c9c5068d86949"
    },
    {
      "url": "assets/images/12.jpg",
      "revision": "e156589c38f3f36a1cb25d1c89030cf5"
    },
    {
      "url": "assets/images/13.jpg",
      "revision": "78f3e5178b61ceb9eb42b2ca69450ade"
    },
    {
      "url": "assets/images/14.jpg",
      "revision": "54413bb6eb9b140151e66a93a401d143"
    },
    {
      "url": "assets/images/15.jpg",
      "revision": "acc8b78ec0f4127b04b5d17b4bcdefa8"
    },
    {
      "url": "assets/images/16.jpg",
      "revision": "49213a47adef80dad26c0b9c1dc6660d"
    },
    {
      "url": "assets/images/17.jpg",
      "revision": "b6887b7ed5ff72279b98604231e9ec1d"
    },
    {
      "url": "assets/images/2.jpg",
      "revision": "291393b3633302dcf7edaa89aec91191"
    },
    {
      "url": "assets/images/3.jpg",
      "revision": "83da9481fffb70b078e8a105aede9cf4"
    },
    {
      "url": "assets/images/4.jpg",
      "revision": "922df7499e04271efda2031ab7dce49c"
    },
    {
      "url": "assets/images/5.jpg",
      "revision": "f1df8175000045e6b9d7c942b20bf9fc"
    },
    {
      "url": "assets/images/6.jpg",
      "revision": "047f7a8ee09d95ffa1c75e043c14766c"
    },
    {
      "url": "assets/images/7.jpg",
      "revision": "84e796cd65b27d8920a5bccb0dc87124"
    },
    {
      "url": "assets/images/8.jpg",
      "revision": "fa38674e89a251b6bbe19ad3ba6c7fa2"
    },
    {
      "url": "assets/images/9.jpg",
      "revision": "9961db62b93f8aae97d75b7e6c7310b7"
    },
    {
      "url": "assets/images/Aequoreavictoria.jpg",
      "revision": "6f2577ed68e1d296ac732d22e10a65e9"
    },
    {
      "url": "assets/images/angler_fish.jpg",
      "revision": "56d7679bb280cb3ca0675fcd0a07256e"
    },
    {
      "url": "assets/images/Anterior_thyroid.jpg",
      "revision": "5f640bdbed25ab917df4f7d56df4b358"
    },
    {
      "url": "assets/images/avatar.png",
      "revision": "9a20632a58585414c49dac927111da47"
    },
    {
      "url": "assets/images/balance_equation.png",
      "revision": "9ae2e78e8e656b91be7ff96829e56431"
    },
    {
      "url": "assets/images/bipolar_depression.png",
      "revision": "5aaaf4e5b669ffc5db6677da8df3edd4"
    },
    {
      "url": "assets/images/dataclips_cvklyuzfcjguezzdgpotthefpckj.json",
      "revision": "4eb629c5d80bfb6b26a6962dec6f6bd9"
    },
    {
      "url": "assets/images/depression_feature.jpg",
      "revision": "d75219555f8977dc2689a8fb99a94959"
    },
    {
      "url": "assets/images/depression_infograph.jpg",
      "revision": "22cfdd579a0a27f07367ea1256c76d01"
    },
    {
      "url": "assets/images/eating_healthy.jpg",
      "revision": "6d35b13db0c48117f15da67c29d33c7a"
    },
    {
      "url": "assets/images/Enzyme-substrate_binding.png",
      "revision": "442483363f36064ae418d118b0e0d32a"
    },
    {
      "url": "assets/images/exercise.jpg",
      "revision": "29a67089351d4f08e3e62aa5e91d7735"
    },
    {
      "url": "assets/images/favicon.ico",
      "revision": "6e044e17667811120b235e90b612c42c"
    },
    {
      "url": "assets/images/Filament_incandecent.jpg",
      "revision": "9077c727ecf2fdc40e7d9c08c3791d4a"
    },
    {
      "url": "assets/images/firefly_squid.jpg",
      "revision": "b88fb701d3e7cf9b0c2fa41fb0553674"
    },
    {
      "url": "assets/images/firefly.jpg",
      "revision": "4a1e0cb8e404c4087c1b3a84d1e8372a"
    },
    {
      "url": "assets/images/heart_attack_infographics.jpg",
      "revision": "0a81e97e21d2ed117861d4cd760097f5"
    },
    {
      "url": "assets/images/heart_image.jpg",
      "revision": "09cd5f60d525db787f0aa9029a034125"
    },
    {
      "url": "assets/images/heart_refrence.jpg",
      "revision": "fdfb0d9421ddba09ad8cc9b7bd243683"
    },
    {
      "url": "assets/images/heartattack.jpg",
      "revision": "5df96cbef46248c8db5514ec53b3fe26"
    },
    {
      "url": "assets/images/icons/icon-128x128.png",
      "revision": "b0404e0df4aafb68c59a081470b16274"
    },
    {
      "url": "assets/images/icons/icon-144x144.png",
      "revision": "bf91c023715eb1caa8c68752704635fa"
    },
    {
      "url": "assets/images/icons/icon-152x152.png",
      "revision": "ca35adc68a70f6987311f5676e828da1"
    },
    {
      "url": "assets/images/icons/icon-192x192.png",
      "revision": "60470e102cca26f76afa3ee5d1cd0caa"
    },
    {
      "url": "assets/images/icons/icon-384x384.png",
      "revision": "ae5b59e9c4a8b9d0ce54e12abed1cdff"
    },
    {
      "url": "assets/images/icons/icon-512x512.png",
      "revision": "78b9531dc2fe6d5ab878529bc4eb60ee"
    },
    {
      "url": "assets/images/icons/icon-72x72.png",
      "revision": "33acef20d278e800848572058e137a8f"
    },
    {
      "url": "assets/images/icons/icon-96x96.png",
      "revision": "9c55ef37356b41aaff83e9349e532984"
    },
    {
      "url": "assets/images/jumbotron.jpg",
      "revision": "ff71833b12009cb60e0691b95e812d53"
    },
    {
      "url": "assets/images/log.png",
      "revision": "6f57be2020c9d417d075672f257a1816"
    },
    {
      "url": "assets/images/logo.png",
      "revision": "e7479ce4b6787d62bc2f68087f2f5251"
    },
    {
      "url": "assets/images/logo50x50.ico.jpg",
      "revision": "97a0dd45545bdcf260cac0f13764f700"
    },
    {
      "url": "assets/images/Luciferin+and+luciferase+work.jpg",
      "revision": "147224eaebe7f6d55ac0190c1dc8cc4c"
    },
    {
      "url": "assets/images/mediumish-jekyll-template.png",
      "revision": "1fa8997871aa3da81e84d15d948cab07"
    },
    {
      "url": "assets/images/neck_ref.jpg",
      "revision": "10c548dc37abd7831e6e237d0342197b"
    },
    {
      "url": "assets/images/nicotine.png",
      "revision": "e4f7a9738f5f10039dc8a8c6810526ee"
    },
    {
      "url": "assets/images/one-person-company-ref.jpg",
      "revision": "75e6924d87f972df55bc9db079a62570"
    },
    {
      "url": "assets/images/organism_light_up_refrence.jpg",
      "revision": "15324d92e000b3fffc4900985ee55d8d"
    },
    {
      "url": "assets/images/psycotherapy.jpg",
      "revision": "fb97388136b1f4caffc98c8127cfda5a"
    },
    {
      "url": "assets/images/redox.gif",
      "revision": "2ddc12f9b95075a93fed0386fa4fc921"
    },
    {
      "url": "assets/images/refrence_jellyfish.jpg",
      "revision": "23966d0531b2c6514faf1e086bb030b3"
    },
    {
      "url": "assets/images/sea-sparkle.jpg",
      "revision": "186be8184dbad2e9ae0ccb930f0c7db7"
    },
    {
      "url": "assets/images/sleep_babby.jpg",
      "revision": "d324273f8dfdf0b57037380966038abc"
    },
    {
      "url": "assets/images/social.jpg",
      "revision": "96b2359db31b1b4df3d052ab6e46a24d"
    },
    {
      "url": "assets/images/TMS.jpg",
      "revision": "b2e76d0b980fa8fd4814455154f3a750"
    },
    {
      "url": "assets/js/background3d.js",
      "revision": "a4ea170a98c90a34a786ed0071ef767f"
    },
    {
      "url": "assets/js/background3d.min.js",
      "revision": "0462172d223ec6395b5246bd6ccd8d83"
    },
    {
      "url": "assets/js/chemWidget.min.js",
      "revision": "3f597b38d1e864b7a40ff12c46d0ee44"
    },
    {
      "url": "assets/js/ie10-viewport-bug-workaround.js",
      "revision": "56e8a7b0282409fd020be51b4995a79c"
    },
    {
      "url": "assets/js/jquery.min.js",
      "revision": "a09e13ee94d51c524b7e2a728c7d4039"
    },
    {
      "url": "assets/js/kekule.min.js",
      "revision": "015bf3f8277d14ffcac8dfeb229fb89c"
    },
    {
      "url": "assets/js/lazyload.js",
      "revision": "fcb81341047b2eded5adc7cedd67ea5a"
    },
    {
      "url": "assets/js/lunr.js",
      "revision": "a5802d96e7726edf965526075d62e86e"
    },
    {
      "url": "assets/js/lunr.min.js",
      "revision": "d9b4a17d52c540b8e993727b1de43204"
    },
    {
      "url": "assets/js/lunrsearchengine.js",
      "revision": "5c119dbcc15fc337bac83be550a308c5"
    },
    {
      "url": "assets/js/mediumish.js",
      "revision": "bcc190264da6d659c1a140eb6a42b1a7"
    },
    {
      "url": "assets/js/raphael.min.js",
      "revision": "334f1f87a34c59a498b7d7b74d00a07d"
    },
    {
      "url": "assets/js/three.min.js",
      "revision": "98e007e0879611d9b6153d205ca5c06f"
    },
    {
      "url": "assets/js/three.module.js",
      "revision": "9214bf0d65a9fdd5dae73c2dcd43b224"
    },
    {
      "url": "assets/themes/default/chemEditorColor.css",
      "revision": "35b9900127f1ca808b54c8d528761826"
    },
    {
      "url": "assets/themes/default/chemWidget.css",
      "revision": "7ac1c4eae0742aad3da222e2bc94c9cd"
    },
    {
      "url": "assets/themes/default/chemWidgetColor.css",
      "revision": "d5dd4028341560f9911841c9b0797c57"
    },
    {
      "url": "assets/themes/default/default.css",
      "revision": "c3f62c6f02fedac4ea8db0fc4835bac5"
    },
    {
      "url": "assets/themes/default/defaultColor.css",
      "revision": "fb2f80030b8547603584d1c53d38ab0c"
    },
    {
      "url": "assets/themes/default/images/cursors/rotate.cur",
      "revision": "918a6532a8ba4868eacd14167af9abaa"
    },
    {
      "url": "assets/themes/default/images/cursors/rotate.png",
      "revision": "da8f777139872cb100dd04bd8490e11d"
    },
    {
      "url": "assets/themes/default/images/cursors/rotateNE.cur",
      "revision": "3d433e6c28af5122fae3516dbf3aa1ff"
    },
    {
      "url": "assets/themes/default/images/cursors/rotateNE.png",
      "revision": "71e68d7f18c964c680d9fc5b5e514646"
    },
    {
      "url": "assets/themes/default/images/cursors/rotateNW.cur",
      "revision": "0c706e9e11d1682ce5a7bb6b73020e88"
    },
    {
      "url": "assets/themes/default/images/cursors/rotateNW.png",
      "revision": "201bf6dd937cafdabc652d0ef909b6fc"
    },
    {
      "url": "assets/themes/default/images/cursors/rotateSE.cur",
      "revision": "1ff1a4414d636bf5c38891b24970e836"
    },
    {
      "url": "assets/themes/default/images/cursors/rotateSE.png",
      "revision": "0fdfcf79b7c56b7ddb85e04cc138c0e2"
    },
    {
      "url": "assets/themes/default/images/cursors/rotateSW.cur",
      "revision": "d563582f09b11079669fe963599e83e2"
    },
    {
      "url": "assets/themes/default/images/cursors/rotateSW.png",
      "revision": "5f119b088aaf82069aacffd7691e95ca"
    },
    {
      "url": "assets/themes/default/kekule.css",
      "revision": "de79c15e43b0455bd01e7f8cef76e586"
    },
    {
      "url": "assets/themes/default/sprite/chemEditorColor.png",
      "revision": "b00ad8c5cf18b76d2308c86ef4af511c"
    },
    {
      "url": "assets/themes/default/sprite/chemWidgetColor.png",
      "revision": "fba1566a75cb04204e9b0cae9c111f73"
    },
    {
      "url": "assets/themes/default/sprite/defaultColor.png",
      "revision": "533614add502e852329e5fe6cc7ed23c"
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
      "url": "assets/webfonts/fa-brands-400.woff2",
      "revision": "7559b3774a0625e8ca6c0160f8f6cfd8"
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
      "url": "assets/webfonts/fa-regular-400.woff2",
      "revision": "e07d9e40b26048d9abe2ef966cd6e263"
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
      "url": "assets/webfonts/fa-solid-900.woff2",
      "revision": "b5cf8ae26748570d8fb95a47f46b69e1"
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
      "url": "category/biology/index.html",
      "revision": "feac9a678b83efdc4baa73fb6e43e20b"
    },
    {
      "url": "category/business/index.html",
      "revision": "b6edf50156936645a6fc824bf9f3b530"
    },
    {
      "url": "category/chemistry/index.html",
      "revision": "d678fff520a81a8cdd7b4a77d203e7be"
    },
    {
      "url": "category/medicine/index.html",
      "revision": "061a60e633ddfdba2d376de6066b0cd7"
    },
    {
      "url": "category/research/index.html",
      "revision": "1d6980087dafd44d78e658f8d14fdbfd"
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
      "url": "manifest.json",
      "revision": "ccd34871d1c184c4d0c285e5184a4433"
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
      "url": "service-worker.js",
      "revision": "40cf36794a421dbced565cd5280a9d1c"
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
    },
    {
      "url": "workbox-config.js",
      "revision": "a9e33b42becfb2ae8e16916094dce749"
    }
  ]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}