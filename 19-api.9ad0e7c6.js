var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var d={id:e,exports:{}};return t[e]=d,n.call(d.exports,d,d.exports),d.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);const d={headers:{"X-Api-Key":"live_7ad8upyX21GZXAiarpBVFKI96kSct8KgO5N7x1ungdbJekziVwWJNouLsXsd0P7L"}};var i=n("2flVd"),o=n("eZ5kQ"),s=n("i37YJ");const c=document.querySelector(".breed-select"),a=document.querySelector(".cat-info"),l=document.querySelector(".decorative-option"),u=document.querySelector(".container-loader"),h=new class{constructor(){this.breedId=""}fetchBreeds(){return fetch("https://api.thecatapi.com/v1/breeds",d).then((e=>{if(!e.ok)throw new Error("Ошибка!");return e.json()})).then((e=>(console.log(e),e)))}fetchCatByBreed(){const e=`https://api.thecatapi.com/v1/images/search?breed_ids=${this.breedId}`;return fetch(e,d).then((e=>{if(!e.ok)throw new Error("Ошибка!");return e.json()})).then((e=>(console.log(e),e)))}get idBreed(){return this.breedId}set idBreed(e){this.breedId=e}};function f(e){c.insertAdjacentHTML("beforeend",(0,i.default)(e))}c.addEventListener("change",(function(e){h.breedId=e.currentTarget.value,u.classList.remove("is-hiden"),h.fetchCatByBreed().then((e=>{a.innerHTML="",function(e){a.insertAdjacentHTML("beforeend",(0,o.default)(e))}(e),u.classList.add("is-hiden")})).catch((e=>{s.Report.failure("Ошибка",`${e}`,"Okay")}))})),c.addEventListener("click",(function(){l.classList.add("is-hiden")})),c.classList.add("is-hiden"),h.fetchBreeds().then(f).catch((e=>{s.Report.failure("Ошибка",`${e}`,"Okay")})),u.classList.add("is-hiden"),c.classList.remove("is-hiden");
//# sourceMappingURL=19-api.9ad0e7c6.js.map
