(this["webpackJsonpreact-pwa-app"]=this["webpackJsonpreact-pwa-app"]||[]).push([[0],[,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.25bf045c.svg"},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(2),r=t.n(i);t(8),t(9),t(10);window.BroadcastChannel&&new BroadcastChannel("sw-messages").addEventListener("message",(function(e){1===e.type&&alert(e.message)}));var s=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"Welcome to the react world. Used for testing pwa.")))},c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){if("installed"===t.state)if(navigator.serviceWorker.controller){if(window.BroadcastChannel)new BroadcastChannel("sw-messages").postMessage({type:1,message:"New content available. Click to update"});console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)}else console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement(s,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-pwa-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-pwa-app","/service-worker.js");c?(!function(e,n){fetch(e).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(n,e)}))}}()}],[[3,1,2]]]);
//# sourceMappingURL=main.8fc2a68d.chunk.js.map