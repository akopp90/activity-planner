if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const r=e=>s(e,n),d={module:{uri:n},exports:t,require:r};a[n]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/LOGO.png",revision:"13c0392785db5a9ceb5c6286d35c8d35"},{url:"/LOGO_pwa.png",revision:"97a9d62acf7f7f1c7e3ad94e018ce15b"},{url:"/_next/static/PaR56eNr7kxVD4epn0IMd/_buildManifest.js",revision:"ae4f3ed77c17e8f7a78ea5ea72007fd3"},{url:"/_next/static/PaR56eNr7kxVD4epn0IMd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b7b90cd.1642917de219cff0.js",revision:"1642917de219cff0"},{url:"/_next/static/chunks/41155975-13dce562b1ccee93.js",revision:"13dce562b1ccee93"},{url:"/_next/static/chunks/589-fb668f620e8aed9c.js",revision:"fb668f620e8aed9c"},{url:"/_next/static/chunks/600.967f23131a7a6573.js",revision:"967f23131a7a6573"},{url:"/_next/static/chunks/710-686158fa34c9baff.js",revision:"686158fa34c9baff"},{url:"/_next/static/chunks/framework-06121e066c6696d9.js",revision:"06121e066c6696d9"},{url:"/_next/static/chunks/main-90eaa24f150758dd.js",revision:"90eaa24f150758dd"},{url:"/_next/static/chunks/pages/_app-92dc39c87f22cdfc.js",revision:"92dc39c87f22cdfc"},{url:"/_next/static/chunks/pages/_error-fde50cb7f1ab27e0.js",revision:"fde50cb7f1ab27e0"},{url:"/_next/static/chunks/pages/activity-9a647c0fb6f1975c.js",revision:"9a647c0fb6f1975c"},{url:"/_next/static/chunks/pages/activity/%5Bid%5D-e3c7b0899d5ca263.js",revision:"e3c7b0899d5ca263"},{url:"/_next/static/chunks/pages/auth/error-9924144577200e0c.js",revision:"9924144577200e0c"},{url:"/_next/static/chunks/pages/auth/register-e541ad144f3e2e83.js",revision:"e541ad144f3e2e83"},{url:"/_next/static/chunks/pages/auth/signin-f7cf8dd7131ba811.js",revision:"f7cf8dd7131ba811"},{url:"/_next/static/chunks/pages/index-ef23f247738fc932.js",revision:"ef23f247738fc932"},{url:"/_next/static/chunks/pages/my-favorites-6cc032408a457af1.js",revision:"6cc032408a457af1"},{url:"/_next/static/chunks/pages/seed-3007af6d9d7f81b6.js",revision:"3007af6d9d7f81b6"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-40c9654c517e5f6d.js",revision:"40c9654c517e5f6d"},{url:"/_next/static/css/29c5467a95e275b7.css",revision:"29c5467a95e275b7"},{url:"/_next/static/css/d3e383b9ef67ddcb.css",revision:"d3e383b9ef67ddcb"},{url:"/_next/static/media/30cd8f99d32fa6e8-s.woff2",revision:"e5c1b944d9e3380a062bf911e26728a3"},{url:"/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon-2x.93fdb12c.png",revision:"401d815dc206b8dc1b17cd0e37695975"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/_next/static/media/marker-shadow.612e3b52.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/images/arrow-down.svg",revision:"1c17e5651a72fe9ab09cfb5a2f8bae73"},{url:"/images/delete.svg",revision:"96af4202d5ab568522a515d5dd3a50c6"},{url:"/images/no-image.svg",revision:"aa1ced8abf31d6d77c58611a580888ef"},{url:"/logo.svg",revision:"33ee2b64ab49d8bdafd7261be6ccaee2"},{url:"/manifest.json",revision:"8c19307a213e249f89112de2b8666483"},{url:"/wireframes/activity-details_neu.png",revision:"7b32e283758653ea41e4e332fe2c27af"},{url:"/wireframes/activity-list.png",revision:"fcab82048b54394e8456eeedcec78c19"},{url:"/wireframes/activity-location.png",revision:"d92f764f80cebbcfecd5daf2688acb30"},{url:"/wireframes/bookmark-activity.png",revision:"a0965b82f8f7b21c6a391c1714048a28"},{url:"/wireframes/create-activity.png",revision:"195b88a5c86f4d53736abb86a397777e"},{url:"/wireframes/delete-activity.png",revision:"8ce8bac1c68f0cd162b64d1242d06530"},{url:"/wireframes/filter-activity.png",revision:"32e7803a7ec37aa4462488700339cc8b"},{url:"/wireframes/search-activites.png",revision:"31a6e569f987f7da7e0cbc85eec0edd9"},{url:"/wireframes/update-activity.png",revision:"7c39edaea4eb246b23881b2505dc8d9b"},{url:"/wireframes/weather-information.png",revision:"762a0d801776689d9af1804b589d75ba"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
