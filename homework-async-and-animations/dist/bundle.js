!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=10)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[t].concat(a).concat([o]).join("\n")}var i,c,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<n.length;i++){var c=n[i];null!=c[0]&&r[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),e.push(c))}},e}},function(n,e,t){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function c(n,e){for(var t=[],r={},o=0;o<n.length;o++){var a=n[o],i=e.base?a[0]+e.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):t.push(r[i]={id:i,parts:[c]})}return t}function l(n,e){for(var t=0;t<n.length;t++){var r=n[t],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(g(r.parts[i],e))}else{for(var c=[];i<r.parts.length;i++)c.push(g(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function s(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var r=t.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function f(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o&&n.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,b=0;function g(n,e){var t,r,o;if(e.singleton){var a=b++;t=h||(h=s(e)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=s(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=c(n,e);return l(t,e),function(n){for(var r=[],a=0;a<t.length;a++){var i=t[a],s=o[i.id];s&&(s.refs--,r.push(s))}n&&l(c(n,e),e);for(var d=0;d<r.length;d++){var u=r[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete o[u.id]}}}}},function(n,e,t){var r=t(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.wrapper {\r\n  width: 100%;\r\n  height: 100vh;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #eaf3fd;\r\n}\r\n\r\n.container {\r\n  min-width: 400px;\r\n  height: 600px;\r\n  border: 1px solid #4a76a8;\r\n  border-radius: 6px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n",""])},function(n,e,t){var r=t(5);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".chat__header {\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0px 30px;\r\n  background-color: #4a76a8;\r\n  color: #ffffff;\r\n}\r\n\r\n.chat__logo {\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n}\r\n",""])},function(n,e,t){var r=t(7);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".chat__mainContainer {\r\n  width: 400px;\r\n  height: 450px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  background-color: #ffffff;\r\n}\r\n",""])},function(n,e,t){var r=t(9);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".chat__inputContainer {\r\n  height: 90px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0px 30px;\r\n  background-color: #4a76a8;\r\n}\r\n.chat__input {\r\n  width: 200px;\r\n  height: 30px;\r\n  border: none;\r\n  background-color: #eaf3fd;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  padding: 0px 10px;\r\n}\r\n.chat__button {\r\n  padding: 6px 10px;\r\n  border-radius: 6px;\r\n  background-color: #4a76a8;\r\n  border: 1px solid #ffffff;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  transition: all ease 0.3s;\r\n  cursor: pointer;\r\n}\r\n.chat__button:hover {\r\n  border: 1px solid transparent;\r\n  background-color: #ffffff;\r\n  color: #4a76a8;\r\n}\r\n",""])},function(n,e,t){"use strict";t.r(e);var r=function(){const n=localStorage.getItem("chatUserName"),e=document.querySelector("#welcome"),t=document.querySelector("#chat");console.log(n),n||(e.style.display="flex",t.style.display="none"),n&&(e.style.display="none",t.style.display="flex")};var o=function(n,e){"string"==typeof n&&"string"==typeof e||console.log("tag and tagClass should be a string");const t=document.createElement(n);return t.classList.add(e),t};var a=function(){const n=document.querySelector("#welcomeInput"),e=document.querySelector("#welcomeBtn"),t=document.querySelector("#chat"),r=document.querySelector("#welcome");e.addEventListener("click",()=>{""===n.value&&alert("Для того чтобы зайти в чат, введите ваше Имя"),""!==n.value&&(console.log("Вы вошли в чат"),r.style.display="none",t.style.display="flex",localStorage.setItem("chatUserName",n.value))})};var i=function(){const n=o("div","welcome__container"),e=o("button","welcome__button"),t=o("input","welcome__input"),r=o("label","welcome__label"),i=document.createTextNode("Добро пожаловать в чат, для пользования данным чатом введите ваше Имя"),c=document.createTextNode("Войти"),l=document.querySelector("#app");r.appendChild(i),r.setAttribute("for","welcomeInput"),t.setAttribute("id","welcomeInput"),e.setAttribute("id","welcomeBtn"),e.appendChild(c),n.setAttribute("id","welcome"),n.appendChild(r),n.appendChild(t),n.appendChild(e),l.appendChild(n),a()};var c=function(){const n=o("main","wrapper"),e=o("div","container");e.setAttribute("id","chat"),n.setAttribute("id","app"),n.appendChild(e),document.body.appendChild(n)};var l=function(){const n=o("div","chat__header"),e=o("div","chat__logo"),t=o("div","chat__name"),r=document.querySelector("#chat"),a=document.createTextNode("CHAT"),i=localStorage.getItem("chatUserName"),c=i?document.createTextNode(i):document.createTextNode("DefaultName");e.appendChild(a),n.appendChild(e),n.appendChild(t),t.appendChild(c),r.appendChild(n)};var s=function(){const n=o("div","chat__mainContainer"),e=document.querySelector("#chat");n.setAttribute("id","chatWindow"),e.appendChild(n)};var d=function(){const n=o("div","chat__inputContainer"),e=o("button","chat__button"),t=o("input","chat__input"),r=document.querySelector("#chat"),a=document.createTextNode("Отправить");t.setAttribute("type","text"),e.setAttribute("id","addMessageBtn"),e.appendChild(a),n.appendChild(t),n.appendChild(e),r.appendChild(n)};t(11),t(2),t(4),t(6),t(8);c(),i(),r(),l(),s(),d()},function(n,e,t){var r=t(12);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".welcome__container {\r\n  width: 300px;\r\n  height: 250px;\r\n  border-radius: 6px;\r\n  padding: 20px 20px;\r\n  background-color: #4a76a8;\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: #ffffff;\r\n}\r\n\r\n.welcome__label {\r\n  margin-bottom: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\n.welcome__input {\r\n  height: 30px;\r\n  border: none;\r\n  background-color: #eaf3fd;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.welcome__button {\r\n  padding: 6px 10px;\r\n  margin-top: 20px;\r\n  border-radius: 6px;\r\n  background-color: #4a76a8;\r\n  border: 1px solid #ffffff;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  transition: all ease 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.welcome__button:hover {\r\n  border: 1px solid transparent;\r\n  background-color: #ffffff;\r\n  color: #4a76a8;\r\n}\r\n",""])}]);