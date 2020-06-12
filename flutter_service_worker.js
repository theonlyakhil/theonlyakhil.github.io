'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "afa723452e92873322c3c753a68b7509",
".git/config": "6b0f2649153391fc3072dc7e026f1f90",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "5e37a7ed47811330601a33ffc4766a56",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3024e3010d42223b584549d28c7ec960",
".git/logs/refs/heads/master": "3024e3010d42223b584549d28c7ec960",
".git/logs/refs/remotes/landslideaei/master": "264a881140f85e0f44daef30e6ca4016",
".git/logs/refs/remotes/landslidepush/master": "c9176d7aa29d16445bc2ec799aff868c",
".git/logs/refs/remotes/orgin/master": "96d9ce171db7095c5a117ef235d72399",
".git/objects/03/aef5cc2b99875d3a5aaf7f4ead13416d40ec74": "d9dcd4b51f93f2c3f5b80c502adb0a2b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/ff52852ac37ac77003ac1e9955c1a5bc720f57": "7ddc262cd6d14624e0756e27ee9e6575",
".git/objects/0c/2197ba6e058faadc95f68b1b2a865ff8686457": "155aa867fc5d7ac9b0e6383649837f52",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/b03bb9d563e0856ac97dfaad9263ad65e27e01": "f344427877d17a14dd33034e6d3dcc31",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/18/f949d59494444e6a01ff8afab825bbaadca940": "4a7aaa1626fc4aff42c1a43420813714",
".git/objects/1a/f3cf41757b89ac0625774b62def66a913a2d24": "22d5c01500d7c4f0d834cf3fcb1f7287",
".git/objects/1e/2c1e97432ee08f1f9fb53bff969b839a3252f4": "49e4365821b7449959abf0eb2ecce98f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2b/6c56dcc5be46730673e30b20b65dfdbcb92de7": "cc32918568e397bf966c663a16aad96d",
".git/objects/3a/23083d4d88bb43c4a585999642df83b9932294": "6488f7352823d958629f662af166a1cb",
".git/objects/3f/4197512e8f5218c1756bdfa555b2f6604d1047": "c95fa3e5b69c548967f59b2f5ed046c2",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/48/4ba606945825bd30ab6f01e13ab6a1823e0583": "fba7099d84bc277e28c8eea9bdb84ef3",
".git/objects/49/cf667db7f58e9a82ca4f2e630e7871ee0dea94": "23c5ea52c29852d039487ed786e667cb",
".git/objects/52/0fc05176712a8286c916bc8803d2801ba45a24": "8a9ba7bbe149928c70aedac2b2f01705",
".git/objects/57/5643165cb1347d600577dd9238aa0f6b645a76": "94f6f160f69483ea92ee4d9e29cc77ea",
".git/objects/61/9c6ed1491a91b558a20c5ba2906a6dd0598e1b": "43564c1efe81432ec3a42790f09240ea",
".git/objects/6a/00dcae932dadf0b7fdb691195e3d9ba86f217b": "b7084cc4cbfac98fb9054dbee1c9c5c2",
".git/objects/71/7be77228dd3d8ef60d1410cef6f94353bf285e": "888d384aaffd3d3985860a7b89a8d6ff",
".git/objects/75/66ea0cbedf22ccc1a7d923be7198595f80a77a": "78ce868f7746ad476a1b9cb61093084a",
".git/objects/76/a7df579b6097cd56cdbeec1e94543ab208a64f": "98bce5743eb873d1b72b39c5b6d15742",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e20a429edc8cd6bffb82c8c00544d670ee04c2": "33f41fbd2a289b8a7a662417eb351de8",
".git/objects/91/e6a127a04c442e5e14538c702e25c52d200852": "4d328aedca97f7f2a7a6bf8eb01dfa06",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/1f02077a31395ade6177834a47a48172fdafa0": "3289da806668fa621a1a58abdad83421",
".git/objects/9e/332078dc8e778beba9f777404a8e56915f20bb": "c4a2e811cc9ba712b33081a84436ddf2",
".git/objects/9f/20191849833195bf979d5c85cfeb07708b1881": "9e5bcf4dc31cfeb7c7c9992ff7f9b19c",
".git/objects/a9/a30d197404b1a7a78b3fb2f5ae21a04d43aac4": "3712a5bca2706694ca9b08957a024b64",
".git/objects/b4/5d3ac46d229ec028493fd7d2a264f112445c91": "699aed78bee9fd67a8ffa7fd55dc980a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/27fcde9f7f716b54ebb6e8b5dcbd45ca1ab078": "fdc7f7e56ff8d08e582675641186c9fc",
".git/objects/bd/582186c80eee3a6dd7d9ff8a1e93a6c0f70ad0": "b6d9d15b2b87dfa8835da1b9a683d5d2",
".git/objects/bd/b1f28cabfcf94b62b77f0c378ef08851c830c1": "9756a96184ae2c67347d6adb07f95a50",
".git/objects/be/05ff55bdceab07db89120aadb37e0612bd926e": "4062976cee36836a9f8f1cb5880070cd",
".git/objects/c1/a1eefc07567679d302fddcd4910652ecdd8da7": "f200b466d43a92bbc5c79ef5e0fc377d",
".git/objects/d2/94da227e6deee78d63132b0bcd55cc528a8aa6": "99c49ec3881807743572e10cc60f7687",
".git/objects/d7/cab5ca12f3a63e899bd2bd9de56d81b6946ef3": "4fe7c0a9febdd9c7b9dfc96eb2f6605c",
".git/objects/d9/f2ba0919398edf572037d602d68db379656b9f": "e6c15bcd7d0c372a9d514cf461ddbbef",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/ea/73b3f4a60040ce182b5b6666b675e69f43fcdc": "8f9d9586227ee79222ad76af16c4a5eb",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "337bba736a6a7cc579efa33da3146633",
".git/refs/remotes/landslideaei/master": "337bba736a6a7cc579efa33da3146633",
".git/refs/remotes/landslidepush/master": "337bba736a6a7cc579efa33da3146633",
".git/refs/remotes/orgin/master": "337bba736a6a7cc579efa33da3146633",
"akhil.txt": "ae07abcd4658b88c1b6f0dde75d6bf32",
"assets/AssetManifest.json": "7824e4478b60a7fad5c88fc6b18fbbdc",
"assets/FontManifest.json": "534ef636ef839d0af05bbdf3d02dae44",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "8c35918262d96e2b05f147572a79e3f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/weather_icons/lib/fonts/weathericons-regular-webfont.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2def70cdfb9efbc99017bc85e0c5e804",
"/": "2def70cdfb9efbc99017bc85e0c5e804",
"main.dart.js": "2076286a3375e4a8761873135f7af5d2",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"README.md": "362e5ec2db56cb66dea9d1f793a652e3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
