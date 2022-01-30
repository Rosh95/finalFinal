//import Swiper from "swiper";
//import "swiper/css";

export const swiper = new Swiper(".services-swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1.3,
  spaceBetween: 16,

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
