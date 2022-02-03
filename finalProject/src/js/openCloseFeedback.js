let feedbackItem = document.querySelector(".burger-menu__btn--message");
let feedbackAnotherItem = document.querySelector(".header__feedback");
let feedback = document.querySelector(".feedback ");
let feedbackClose = document.querySelector(".feedback__btn");
let wrapperMain = document.querySelector(".wrapper__main-content");
let burgerMenu = document.querySelector(".burger-menu__container");
let burgerMenuContainer = document.querySelector(".burger-menu");
let feedbackContainer = document.querySelector(".feedback__container");

const toggleMenu = function () {
  feedback.classList.toggle("feedback--show");
  wrapperMain.classList.toggle("wrapper__main-content--height");
};

feedbackItem.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});
feedbackAnotherItem.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});
feedback.addEventListener("click", function (e) {
  const its_menu =
    e.target == feedbackContainer || feedbackContainer.contains(e.target);
  if (!its_menu) {
    toggleMenu();
  }
});
feedbackClose.addEventListener("click", function () {
  toggleMenu();
});
