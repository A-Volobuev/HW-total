var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var d={id:e,exports:{}};return t[e]=d,n.call(d.exports,d,d.exports),d.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);const d={headers:{"X-Api-Key":"live_7ad8upyX21GZXAiarpBVFKI96kSct8KgO5N7x1ungdbJekziVwWJNouLsXsd0P7L"}};var i=n("2flVd"),a=n("eZ5kQ"),s=n("i37YJ");const c=document.querySelector(".breed-select"),o=document.querySelector(".cat-info"),l=document.querySelector(".decorative-option"),u=document.querySelector(".container-loader"),f=new class{constructor(){this.breedId=""}async fetchBreeds(){const e=await fetch("https://api.thecatapi.com/v1/breeds",d);return await e.json()}async fetchCatByBreed(){const e=`https://api.thecatapi.com/v1/images/search?breed_ids=${this.breedId}`,t=await fetch(e,d);return await t.json()}get idBreed(){return this.breedId}set idBreed(e){this.breedId=e}};function h(e){c.insertAdjacentHTML("beforeend",(0,i.default)(e))}c.addEventListener("change",(function(e){f.breedId=e.currentTarget.value,u.classList.remove("is-hiden"),f.fetchCatByBreed().then((e=>{o.innerHTML="",function(e){o.insertAdjacentHTML("beforeend",(0,a.default)(e))}(e),u.classList.add("is-hiden")})).catch((e=>{s.Report.failure("Ошибка",`${e}`,"Okay")}))})),c.addEventListener("click",(function(){l.classList.add("is-hiden")})),c.classList.add("is-hiden"),f.fetchBreeds().then(h).catch((e=>{s.Report.failure("Ошибка",`${e}`,"Okay")})),u.classList.add("is-hiden"),c.classList.remove("is-hiden");
//# sourceMappingURL=19-async-api.2245e221.js.map
