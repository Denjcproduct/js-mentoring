!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t,e){var r=e(1);"string"==typeof r&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};e(3)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #dffdeb;\r\n}\r\n\r\n.wrapper {\r\n  max-width: 1280px;\r\n  padding: 0px 20px;\r\n  height: 100vh;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-flow: column;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  color: #414040;\r\n}\r\n\r\n.inputContainer {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n}\r\n\r\n.inputContainer__input {\r\n  line-height: 30px;\r\n  border-radius: 6px;\r\n  border: 1px solid #000000;\r\n  margin-top: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\n.resultContainer {\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: center;\r\n  margin-top: 30px;\r\n}\r\n\r\n.resultContainer__text {\r\n  height: 30px;\r\n  margin-top: 10px;\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n}\r\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),o=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[e].concat(o).concat([i]).join("\n")}var a,s,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e})).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}();function s(n,t){for(var e=[],r={},i=0;i<n.length;i++){var o=n[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function u(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{for(var s=[];a<r.parts.length;a++)s.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function c(n){var t=document.createElement("style");if(void 0===n.attributes.nonce){var r=e.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(e){t.setAttribute(e,n.attributes[e])})),"function"==typeof n.insert)n.insert(t);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function f(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}function p(n,t,e){var r=e.css,i=e.media,o=e.sourceMap;if(i&&n.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,v=0;function g(n,t){var e,r,i;if(t.singleton){var o=v++;e=h||(h=c(t)),r=f.bind(null,e,o,!1),i=f.bind(null,e,o,!0)}else e=c(t),r=p.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=s(n,t);return u(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var a=e[o],c=i[a.id];c&&(c.refs--,r.push(c))}n&&u(s(n,t),t);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete i[d.id]}}}}},function(n,t,e){"use strict";e.r(t);var r=function(n,t){"string"==typeof n&&"string"==typeof t||console.log("tag and tagClass should be a string");const e=document.createElement(n);return e.classList.add(t),e};var i=function(){const n=r("main","wrapper"),t=r("div","container"),e=r("div","inputContainer"),i=r("input","inputContainer__input"),o=r("label","inputContainer__label"),a=document.createTextNode("SEARCH");i.setAttribute("id","input"),i.setAttribute("type","text"),i.setAttribute("name","search"),o.setAttribute("for","input"),o.appendChild(a),e.appendChild(o),e.appendChild(i),t.appendChild(e),n.appendChild(t),document.body.appendChild(n)};var o=function(){const n=document.querySelector(".container"),t=r("div","resultContainer"),e=r("div","resultContainer__title"),i=r("div","resultContainer__text"),o=document.createTextNode("RESULT");e.appendChild(o),i.setAttribute("id","result"),t.appendChild(e),t.appendChild(i),n.appendChild(t)};var a=class{constructor(n){this.key=n,this.parent=null,this.children={},this.end=!1,this.count=null}};var s=function(n){const t=[];let e=n;for(;null!==e;)t.push(e.key),e=e.parent;return t.reverse(),t.join("")};var u=function n(t,e=[]){const r=e;if(t.end)for(let n=0;n<t.count;n++)r.push(s(t));for(const e in t.children)n(t.children[e],r);return r};var c=class{constructor(){this.root=new a(null)}insert(n,t){let e=this.root;for(let r=0;r<n.length;r++)e.children[n[r]]||(e.children[n[r]]=new a(n[r]),e.children[n[r]].parent=e),e=e.children[n[r]],r==n.length-1&&(e.end=!0,e.count=t)}find(n){let t=this.root;const e=[];for(let r=0;r<n.length;r++){if(!t.children[n[r]])return e;t=t.children[n[r]]}return u(t)}};var l=function(n,t=!0){return t?n.charAt(0).toUpperCase()+n.slice(1):n.charAt(0).toLowerCase()+n.slice(1)};var d=function(n){const t=new c,e=n.reduce((n,t)=>(n[t]||(n[t]=0),n[t]++,n),{});return[...new Set(n)].forEach(n=>{const r=e[n];t.insert(n,r)}),function(n){if(!n)return[];const e=l(n,!1),r=l(n),i=t.find(e),o=t.find(r);return i.concat(o)}};var f=function(n,t,e){const r=document.querySelector(n),i=document.querySelector(t),o=d(e);r.addEventListener("input",()=>{i.innerHTML=o(r.value)})};var p=["Anton","Andrey","Boris","Vlad","Denis","Diana","Alina","Avgust","Band","Minsk","Mogilev","Grodno","Gomel","Vitebsk","Pinsk","Polock","Vilnus"];var h=function(){i(),o(),f("#input","#result",p)};e(0);h()}]);