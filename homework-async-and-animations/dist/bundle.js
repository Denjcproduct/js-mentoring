!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  height: 100vh;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid #ffffff;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.welcome__container {\r\n  width: 300px;\r\n  height: 250px;\r\n  border-radius: 6px;\r\n  padding: 20px 20px;\r\n  background-color: #4a76a8;\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: #ffffff;\r\n}\r\n\r\n.welcome__label {\r\n  margin-bottom: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\n.welcome__input {\r\n  height: 30px;\r\n  border: none;\r\n  background-color: #eaf3fd;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.welcome__button {\r\n  padding: 6px 10px;\r\n  margin-top: 20px;\r\n  border-radius: 6px;\r\n  background-color: #4a76a8;\r\n  border: 1px solid #ffffff;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  transition: all ease 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.welcome__button:hover {\r\n  border: 1px solid transparent;\r\n  background-color: #ffffff;\r\n  color: #4a76a8;\r\n}\r\n\r\n.chat__header {\r\n  width: 100%;\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0px 30px;\r\n  background-color: #4a76a8;\r\n  color: #ffffff;\r\n}\r\n\r\n.chat__logoContainer {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.chat__logo {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.chat__mainContainer {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  background-color: #ffffff;\r\n  padding: 20px;\r\n}\r\n\r\n.chat__inputContainer {\r\n  width: 100%;\r\n  height: 50px;\r\n  border-top: 1px solid #a59c9c;\r\n}\r\n\r\n.chat__form {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.chat__input {\r\n  width: 95%;\r\n  height: 100%;\r\n  border: none;\r\n  font-size: 16px;\r\n  padding: 0px 10px;\r\n  background-color: #eaf3fd;\r\n  outline: none;\r\n}\r\n\r\n.chat__button {\r\n  width: 5%;\r\n  height: 100%;\r\n  border: none;\r\n  background-color: #eaf3fd;\r\n  transition: all ease 0.3s;\r\n  cursor: pointer;\r\n  padding: 5px;\r\n}\r\n\r\n.chat__buttonImage {\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: all ease 0.3s;\r\n}\r\n\r\n.chat__button:hover .chat__buttonImage {\r\n  transform: scale(0.8);\r\n}\r\n\r\n.message__container {\r\n  min-width: 150px;\r\n  width: 40%;\r\n  border: 1px solid transparent;\r\n  padding: 10px;\r\n  border-radius: 6px;\r\n  background-color: #fdeded;\r\n  margin-right: auto;\r\n  display: flex;\r\n  flex-flow: column;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.message__container + .message__container {\r\n  margin-top: 20px;\r\n}\r\n\r\n.message__name {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n.message__time {\r\n  font-size: 12px;\r\n  padding-top: 3px;\r\n  color: rgb(165, 165, 165);\r\n}\r\n\r\n.message__text {\r\n  font-size: 14px;\r\n  padding-top: 10px;\r\n}\r\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},function(e,n,t){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function s(e,n){for(var t=[],r={},o=0;o<e.length;o++){var a=e[o],i=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):t.push(r[i]={id:i,parts:[s]})}return t}function c(e,n){for(var t=0;t<e.length;t++){var r=e[t],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(g(r.parts[i],n))}else{for(var s=[];i<r.parts.length;i++)s.push(g(r.parts[i],n));o[r.id]={id:r.id,refs:1,parts:s}}}}function l(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var r=t.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(e,n){var t,r,o;if(n.singleton){var a=m++;t=h||(h=l(n)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=l(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=s(e,n);return c(t,n),function(e){for(var r=[],a=0;a<t.length;a++){var i=t[a],l=o[i.id];l&&(l.refs--,r.push(l))}e&&c(s(e,n),n);for(var d=0;d<r.length;d++){var u=r[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete o[u.id]}}}}},function(e,n,t){"use strict";t.r(n);var r=function(){const e=localStorage.getItem("chatUserName"),n=document.querySelector("#welcome"),t=document.querySelector("#chat");console.log(e),e||(n.style.display="flex",t.style.display="none"),e&&(n.style.display="none",t.style.display="flex")};var o=function(e,n){"string"==typeof e&&"string"==typeof n||console.log("tag and tagClass should be a string");const t=document.createElement(e);return t.classList.add(n),t};var a=function(){const e=o("div","chat__header"),n=o("div","chat__logoContainer"),t=o("img","chat__logo"),r=o("div","chat__name"),a=document.querySelector("#chat"),i=localStorage.getItem("chatUserName"),s=i?document.createTextNode(i):document.createTextNode("DefaultName");t.setAttribute("alt","Logo"),t.setAttribute("src","./assets/icons/logo.svg"),n.appendChild(t),e.appendChild(n),e.appendChild(r),r.appendChild(s),a.appendChild(e)};var i=function(){const e=o("div","chat__mainContainer"),n=document.querySelector("#chat");e.setAttribute("id","chatWindow"),n.appendChild(e)};var s=function(){const e=o("div","chat__inputContainer"),n=o("form","chat__form"),t=o("button","chat__button"),r=o("img","chat__buttonImage"),a=o("input","chat__input"),i=document.querySelector("#chat");r.setAttribute("alt","sendImage"),r.setAttribute("src","./assets/icons/send.svg"),n.setAttribute("name","chat"),a.setAttribute("type","text"),a.setAttribute("name","message"),t.setAttribute("id","addMessageBtn"),t.setAttribute("type","submit"),t.appendChild(r),n.appendChild(a),n.appendChild(t),e.setAttribute("id","chatFooter"),e.appendChild(n),i.appendChild(e)};var c=function(){a(),i(),s()};var l=function(){const e=document.querySelector("#welcomeInput"),n=document.querySelector("#welcomeBtn"),t=document.querySelector("#chat"),r=document.querySelector("#welcome");n.addEventListener("click",()=>{""===e.value&&alert("Для того чтобы зайти в чат, введите ваше Имя"),""!==e.value&&(console.log("Вы вошли в чат"),r.style.display="none",t.style.display="flex",localStorage.setItem("chatUserName",e.value))})};var d=function(){const e=o("div","welcome__container"),n=o("button","welcome__button"),t=o("input","welcome__input"),r=o("label","welcome__label"),a=document.createTextNode("Добро пожаловать в чат, для пользования данным чатом введите ваше Имя"),i=document.createTextNode("Войти"),s=document.querySelector("#app");r.appendChild(a),r.setAttribute("for","welcomeInput"),t.setAttribute("id","welcomeInput"),n.setAttribute("id","welcomeBtn"),n.appendChild(i),e.setAttribute("id","welcome"),e.appendChild(r),e.appendChild(t),e.appendChild(n),s.appendChild(e),l()};var u=function(){const e=o("main","wrapper"),n=o("div","container");n.setAttribute("id","chat"),e.setAttribute("id","app"),e.appendChild(n),document.body.appendChild(e)};var p=function(){u(),d()};var f=function(){const e=document.querySelector("#chatWindow");setTimeout(()=>{e.scrollTop=1e3},3e3)};var h=function(e){const n=new Date(e);return`${n.getDate()}.${n.getMonth()}.${n.getFullYear()} - ${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`};var m=function(e){const n=document.querySelector("#chatWindow"),t=o("div","message__container"),r=o("span","message__name"),a=o("span","message__text"),i=o("span","message__time"),s=document.createTextNode(e.from),c=document.createTextNode(e.message),l=document.createTextNode(h(e.time));r.appendChild(s),a.appendChild(c),i.appendChild(l),t.appendChild(r),t.appendChild(i),t.appendChild(a),n.appendChild(t)};var g=function(e){e.forEach(e=>{m(e)})};var b=class{constructor(e){this.messages=e}sortedMessages(){return this.messages.sort((e,n)=>new Date(e.time)-new Date(n.tiem)).reverse()}};window.onload=function(){const e=new WebSocket("ws://st-chat.shas.tel");e.onopen=function(){console.log("Соединение установлено")},e.onclose=function(e){e.wasClean?console.log("Соединение закрыто чисто"):console.log("Обрыв соединения"),console.log(`Код: ${e.code} причина ${e.reason}`)},e.onmessage=function(e){const n=new b(JSON.parse(e.data)).sortedMessages();g(n)},e.onerror=function(e){console.log(`Ошибка ${e.message}`)},document.forms.chat.onsubmit=function(){const n={from:localStorage.getItem("chatUserName"),message:this.message.value},t=JSON.stringify(n);return e.send(t),this.message.value="",!1}},t(0);p(),c(),r(),f()}]);