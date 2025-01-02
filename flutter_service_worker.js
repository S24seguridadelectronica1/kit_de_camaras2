'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7411cf02cacc02f53f5f3c79497f2cea",
"assets/AssetManifest.bin.json": "748886d2bd23768ada33b24f7c73965c",
"assets/AssetManifest.json": "1beb409c612e12879f3db698530f6eaa",
"assets/assets/images/1.webp": "bbd7396081d9e2ca40a033598a04e172",
"assets/assets/images/10.webp": "b45540b1e842215b323a1fec2421d458",
"assets/assets/images/11.webp": "f38b52bc71558eb8f36c6e835823ec82",
"assets/assets/images/12.webp": "cc2349a154768b1b9f8497f73d3de10d",
"assets/assets/images/13.webp": "9c714c38f83787aa83091f1ca57d9a99",
"assets/assets/images/14.webp": "2db316335676f357b4231491d200fd9c",
"assets/assets/images/15.webp": "47ef1a9238c7abd88e78669c1884401a",
"assets/assets/images/16.webp": "00156fca903ce0cf0ea2168dc8e59c6f",
"assets/assets/images/17.webp": "832012f17c6759a8147e7a30742b1736",
"assets/assets/images/18.webp": "1914b277b1338329895070d5058472b1",
"assets/assets/images/19.webp": "c252bc4df6d556c90e30052d4ee072ee",
"assets/assets/images/2.webp": "4e06506361fce2182e3dae4d20343f34",
"assets/assets/images/20.webp": "6a7e50de456a213cb2ac1951cc2e120b",
"assets/assets/images/21.webp": "1c66b331df2ed48d35f1fd6ddeaa23fa",
"assets/assets/images/22.webp": "a62f81b64d25647207ccdb84aa0afbc7",
"assets/assets/images/23.webp": "06c5f00ca0638c8e2a9600ee37c0892e",
"assets/assets/images/24.webp": "a59d33cbfac071a6849efa3afff3c148",
"assets/assets/images/25.webp": "3fbe130a0e4544fa3fd6502941af45a4",
"assets/assets/images/26.webp": "0735e8d84026c2f3063d6e6908c71ef3",
"assets/assets/images/3.webp": "66c5ba7f1efc62c38a656da4dd82e3fc",
"assets/assets/images/4.webp": "42ca7a62a8452433230a48ee675fd45f",
"assets/assets/images/5.webp": "5eb7526dc3c9be43350f02c324832197",
"assets/assets/images/6.webp": "e7ee67947eca5cc892e81f31a633d208",
"assets/assets/images/7.webp": "d383d87f9f513c68f499a9bca329a1da",
"assets/assets/images/8.webp": "90cf4ca9681781c23a8d2ec2a1ed0c86",
"assets/assets/images/9.webp": "2c6d0556852dc44952a210ede6c91b76",
"assets/assets/images/DS-2CE56D0T-IRPF(C).webp": "1965bea56840ce82d401c100d55dce7e",
"assets/assets/images/IDS7104HQHIM1S(2).webp": "654b52ecb89f1bc49a9e178352a26756",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "2fe1f9c5156386813e5b589d68e0b240",
"assets/NOTICES": "df1e06e5afe9e8fa117f5a6daa316c82",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "de27f912e40a372c22a069c1c7244d9b",
"canvaskit/canvaskit.js.symbols": "ff204c6b77c9e5969d85d9bfbaa0c843",
"canvaskit/canvaskit.wasm": "2e9895626fe95683569ed951214f1eb8",
"canvaskit/chromium/canvaskit.js": "73343b0c5d471d1114d7f02e06c1fdb2",
"canvaskit/chromium/canvaskit.js.symbols": "85275e659470daa080e014ffe17a1a59",
"canvaskit/chromium/canvaskit.wasm": "86233631b867ce8f74c2020077650d11",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "c7cf698f802bc5e9e8e791f762ebdfe9",
"canvaskit/skwasm.wasm": "c528f7ba97a317e25e547ea47c8a66d8",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "a564f5dfbd90292f0f45611470170fe1",
"canvaskit/skwasm_st.wasm": "3179a61ea4768a679dbbe30750d75214",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "33b2b99d4053684f174bec01596649a0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b0c7bfccf1d133f15684521a0cc20542",
"/": "b0c7bfccf1d133f15684521a0cc20542",
"main.dart.js": "0cbca76a40290a9610e742a523a5a737",
"manifest.json": "ce2badc2c61625c9fe0a4bfca2a770fc",
"version.json": "db3e3f7cad7aa28615f2a61ab9eb6ed3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
