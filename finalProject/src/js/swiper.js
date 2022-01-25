//import Swiper from 'swiper';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
// import Swiper and modules styles

/*import 'swiper/css/navigation';
import 'swiper/css/pagination';*/

//import { Swiper, Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper/dist/js/swiper.esm.js';
Swiper.use();

export const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1.3,
  spaceBetween: 16,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
