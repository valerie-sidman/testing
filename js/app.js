(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var a=r.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"})();const e=document.querySelector(".entry-field"),r=document.querySelector(".button"),a=document.querySelector(".container");function s(){a.classList.remove("visa-theme"),a.classList.remove("master-card-theme"),a.classList.remove("mir-theme")}function n(t){if(null!==t&&t.match("\\d")){let t="";const r=e.value.replaceAll(" ","");for(let e=0;e<r.length;e+=1)0===e||e%4!=0?t+=r[e]:t=`${t} ${r[e]}`;e.value=t}else e.value=e.value.replaceAll(t,"");try{s();const t=class{static check(t){if(t.startsWith("4"))return"visa";if(t.startsWith("51")||t.startsWith("52")||t.startsWith("53")||t.startsWith("54")||t.startsWith("55"))return"master-card";if(t.startsWith("2"))return"mir";throw new Error("Unsupported card type")}}.check(e.value);a.classList.add(`${t}-theme`)}catch(t){console.warn(t.message)}}e.addEventListener("input",(t=>{"insertText"===t.inputType&&n(t.data),""===e.value&&s()})),e.addEventListener("paste",(t=>{t.preventDefault();const r=t.clipboardData.getData("text");e.value=r;for(let t=0;t<r.length;t+=1)n(r[t])})),r.addEventListener("click",(t=>{t.preventDefault();const r=e.value.replaceAll(" ","");(class{static validation(t){let e=0;if(0===t.length)return!1;for(let r=0;r<t.length;r+=1){let a=parseInt(t[r],10);(t.length-r)%2==0&&(a*=2,a>9&&(a-=9)),e+=a}return e%10==0}}).validation(r)?alert("Номер карты валидный"):alert("Невалидный номер карты")}));t.p,t.p,t.p})();