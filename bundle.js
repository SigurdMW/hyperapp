!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";var r=n(1);app({state:"Hi.",view:function(t){return(0,r.h)("h1",{},t)}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);n.d(e,"h",function(){return r.a});var a=n(3);n.d(e,"app",function(){return a.a})},function(t,e,n){"use strict";function r(t,e){for(var n,r=[],a=[],o=arguments.length;o-- >2;)r[r.length]=arguments[o];for(;r.length;)if(Array.isArray(n=r.pop()))for(var o=n.length;o--;)r[r.length]=n[o];else null!=n&&!0!==n&&!1!==n&&("number"==typeof n&&(n+=""),a[a.length]=n);return"string"==typeof t?{tag:t,data:e||{},children:a}:t(e,a)}e.a=r},function(t,e,n){"use strict";function r(t){function e(){x||requestAnimationFrame(r,x=!x)}function n(t,e){return null==t?t:{tag:t.tagName,data:{},children:e.call(t.childNodes,function(t){n(t,e)})}}function r(){h=s(w,h,v,v=o("render",b)(p,g)),x=!x,j||o("loaded",j=!0)}function a(t,n,r){Object.keys(n||[]).map(function(u){var c=n[u],l=r?r+"."+u:u;"function"==typeof c?t[u]=function(t){var n=c(p,g,o("action",{name:l,data:t}).data);return null!=n&&null==n.then&&e(p=i(p,o("update",n))),n}:a(t[u]||(t[u]={}),c,l)})}function o(t,e){return(m[t]||[]).map(function(t){var n=t(p,g,e);null!=n&&(e=n)}),e}function i(t,e){if("object"!=typeof e)return e;var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n}function u(t,e){if("string"==typeof t)var n=document.createTextNode(t);else{for(var n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag),r=0;r<t.children.length;)n.appendChild(u(t.children[r++],e));for(var r in t.data)"oncreate"===r?t.data[r](n):"oninsert"===r?setTimeout(t.data[r],0,n):c(n,r,t.data[r])}return n}function c(t,e,n,r){if("key"===e);else if("style"===e)for(var a in i(r,n=n||{}))t.style[a]=n[a]||"";else{try{t[e]=n}catch(t){}"function"!=typeof n&&(n?t.setAttribute(e,n):t.removeAttribute(e))}}function l(t,e,n){for(var r in i(e,n)){var a=n[r],o="value"===r||"checked"===r?t[r]:e[r];"onupdate"===r&&a?a(t):a!==o&&c(t,r,a,o)}}function f(t){if(t&&(t=t.data))return t.key}function d(t,e,n){function r(){t.removeChild(e)}(n.data&&n.data.onremove||r)(e,r)}function s(t,e,n,r){if(null==n)e=t.insertBefore(u(r),e);else if(r.tag&&r.tag===n.tag){l(e,n.data,r.data);for(var a=r.children.length,o=n.children.length,i={},c=[],v={},h=0;h<o;h++){var p=e.childNodes[h];c[h]=p;var g=n.children[h],m=f(g);null!=m&&(i[m]=[p,g])}for(var h=0,y=0;y<a;){var p=c[h],g=n.children[h],b=r.children[y],m=f(g);if(v[m])h++;else{var w=f(b),x=i[w]||[];null==w?(null==m&&(s(e,p,g,b),y++),h++):(m===w?(s(e,x[0],x[1],b),h++):x[0]?(e.insertBefore(x[0],p),s(e,x[0],x[1],b)):s(e,p,null,b),y++,v[w]=b)}}for(;h<o;){var g=n.children[h],m=f(g);null==m&&d(e,c[h],g),h++}for(var h in i){var x=i[h],j=x[1];v[j.data.key]||d(e,x[0],j)}}else if(r!==n){var h=e;t.replaceChild(e=u(r),h)}return e}for(var v,h,p={},g={},m={},y=[],b=t.view,w=t.root||document.body,x=!1,j=!1,k=-1;k<y.length;k++){var O=y[k]?y[k](o):t;Object.keys(O.events||[]).map(function(t){m[t]=(m[t]||[]).concat(O.events[t])}),null!=O.state&&(p=i(p,O.state)),y=y.concat(O.mixins||[]),a(g,O.actions)}return v=n(h=w.querySelector("[data-ssr]"),[].map),e(o("init")),o}e.a=r}]);