function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("1GAPJ");function l(n,t){const o=Math.random()>.3;return new Promise(((r,l)=>{setTimeout((()=>{o?e(u).Notify.success(`Промис✅: ${n} Задержка: ${t}ms`):e(u).Notify.warning(`Промис❌: ${n} Задержка: ${t}ms`)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const n=e.currentTarget.elements,t=Number(n.delay.value),o=Number(n.step.value),r=Number(n.amount.value);for(let e=0;e<r;e++){l(e+1,t+e*o).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}}));
//# sourceMappingURL=18-promises.87326da9.js.map