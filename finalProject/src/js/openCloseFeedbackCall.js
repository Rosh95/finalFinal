let feedbackCallItem = document.querySelector(".burger-menu__btn--call");
let feedbackCallAnotherItem = document.querySelector(".header__feedback-call");
let feedbackCall = document.querySelector(".feedback-call");
let feedbackCallClose = document.querySelector(".feedback-call__btn");
let wrapperMain = document.querySelector(".wrapper__main-content");
let burgerMenu = document.querySelector(".burger-menu ");
let feedbackCallContainer = document.querySelector(".feedback-call__container");

const toggleMenu = function () {
  feedbackCall.classList.toggle("feedback-call--show");
  wrapperMain.classList.toggle("wrapper__main-content--height");
};

feedbackCallItem.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});
feedbackCallAnotherItem.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

feedbackCall.addEventListener("click", function (e) {
  const its_menu =
    e.target == feedbackCallContainer ||
    feedbackCallContainer.contains(e.target);
  if (!its_menu) {
    toggleMenu();
  }
});

feedbackCallClose.addEventListener("click", function (e) {
  toggleMenu();
});
