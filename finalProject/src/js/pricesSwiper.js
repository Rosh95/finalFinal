//import Swiper from "swiper";
//import "swiper/css";

export const swiper = new Swiper(".prices-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
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

  slidesPerView: 1.2,
  spaceBetween: 16,
  initialSlide: 0,

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
