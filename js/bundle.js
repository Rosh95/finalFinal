!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(6)},function(e,t,n){},function(e,t){var n=document.querySelector(".header__btn"),r=document.querySelector(".burger-menu "),o=document.querySelector(".burger-menu__btn"),c=document.querySelector(".wrapper__main-content"),i=function(){r.classList.toggle("burger-menu--show"),c.classList.toggle("body-opacity")};n.addEventListener("click",(function(e){e.stopPropagation(),i()})),document.addEventListener("click",(function(e){var t=e.target,o=t==r||r.contains(t),c=t==n,s=r.classList.contains("burger-menu--show");o||c||!s||i()})),o.addEventListener("click",(function(){r.classList.remove("burger-menu--show"),c.classList.remove("body-opacity")}))},function(e,t){var n=document.querySelector(".burger-menu__btn--message"),r=document.querySelector(".header__feedback"),o=document.querySelector(".feedback "),c=document.querySelector(".feedback__btn"),i=document.querySelector(".wrapper__main-content"),s=document.querySelector(".burger-menu "),a=function(){o.classList.toggle("feedback--show"),i.classList.toggle("body-opacity"),s.classList.toggle("body-opacity")};n.addEventListener("click",(function(e){e.stopPropagation(),a()})),r.addEventListener("click",(function(e){e.stopPropagation(),a()})),document.addEventListener("click",(function(e){var t=e.target,r=t==o||o.contains(t),c=t==n,i=o.classList.contains("feedback--show");r||c||!i||a()})),c.addEventListener("click",(function(){o.classList.remove("feedback--show"),i.classList.remove("body-opacity"),s.classList.remove("body-opacity")}))},function(e,t){var n=document.querySelector(".burger-menu__btn--call"),r=document.querySelector(".header__feedback-call"),o=document.querySelector(".feedback-call"),c=document.querySelector(".feedback-call__btn"),i=document.querySelector(".wrapper__main-content"),s=document.querySelector(".burger-menu "),a=function(){o.classList.toggle("feedback-call--show"),i.classList.toggle("body-opacity"),s.classList.toggle("body-opacity")};n.addEventListener("click",(function(e){e.stopPropagation(),a()})),r.addEventListener("click",(function(e){e.stopPropagation(),a()})),document.addEventListener("click",(function(e){var t=e.target,r=t==o||o.contains(t),c=t==n,i=o.classList.contains("feedback-call--show");r||c||!i||a()})),c.addEventListener("click",(function(){o.classList.remove("feedback-call--show"),i.classList.remove("body-opacity"),s.classList.remove("body-opacity")}))},function(e,t){var n=document.querySelector(".services__btn"),r=document.querySelector(".services__list"),o=document.querySelector(".services__arrow");n.addEventListener("click",(function(){if("Скрыть"===n.textContent)return r.classList.remove("services__list--height"),o.src="img/icon.svg",n.textContent="Показать все";"Показать все"===n.textContent&&(r.classList.add("services__list--height"),n.textContent="Скрыть",o.src="img/icon2.svg")}))},function(e,t,n){"use strict";n.r(t);var r;n(1);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}new Swiper(".prices-swiper",(o(r={direction:"horizontal",loop:!0},"loop",!0),o(r,"pagination",{el:".swiper-pagination",clickable:!0}),o(r,"navigation",{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),o(r,"slidesPerView",1.2),o(r,"spaceBetween",16),o(r,"initialSlide",0),o(r,"scrollbar",{el:".swiper-scrollbar"}),r)),new Swiper(".services-swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1.3,spaceBetween:16,scrollbar:{el:".swiper-scrollbar"}}),new Swiper(".brands-swiper",{loop:!0,autoheight:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1.3,spaceBetween:16,scrollbar:{el:".swiper-scrollbar"}});var c=document.querySelector(".brands__btn"),i=document.querySelector(".brands__list"),s=document.querySelector(".brands__arrow");c.addEventListener("click",(function(){if("Скрыть"===c.textContent)return i.classList.remove("brands__list--height"),s.src="img/icon.svg",c.textContent="Показать все";"Показать все"===c.textContent&&(i.classList.add("brands__list--height"),c.textContent="Скрыть",s.src="img/icon2.svg")}));n(2),n(3),n(4),n(5);console.log("Works!")}]);
//# sourceMappingURL=bundle.js.map