(this["webpackJsonpreact-pwa-app"]=this["webpackJsonpreact-pwa-app"]||[]).push([[0],[,,,function(e,n,o){e.exports=o(11)},,,,,function(e,n,o){},function(e,n,o){e.exports=o.p+"static/media/logo.25bf045c.svg"},function(e,n,o){},function(e,n,o){"use strict";o.r(n);var t=o(0),a=o.n(t),r=o(2),s=o.n(r);o(8),o(9),o(10);if(window.BroadcastChannel){console.log("testing111");var i=new BroadcastChannel("sw-messages");window.BroadcastChannel&&(console.log("sending111"),i.postMessage({type:1,message:"New content available. Click to update"})),i.addEventListener("message",(function(e){console.log("tessst"),1===e.type&&alert(e.message)})),i.addEventListener("messageerror",(function(e){console.error(e)}))}var c=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"Welcome to the react world. Used for testing pwa.")))},l=Boolean(!1);function d(e,n){console.log(n),navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){if("installed"===o.state)if(navigator.serviceWorker.controller){if(window.BroadcastChannel)new BroadcastChannel("sw-messages").postMessage({type:1,message:"New content available. Click to update"});console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)}else console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(a.a.createElement(c,null),document.getElementById("root")),function(e){if(console.log("register"),"serviceWorker"in navigator){if(new URL("/react-pwa-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-pwa-app","/service-worker.js");l?(!function(e,n){fetch(e).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(n,e)}))}}({onUpdate:!0})}],[[3,1,2]]]);
//# sourceMappingURL=main.351a295d.chunk.js.map