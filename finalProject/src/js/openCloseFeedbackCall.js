let feedbackCallItem = document.querySelector(".burger-menu__btn--call");
let feedbackCallAnotherItem = document.querySelector(".header__feedback-call");
let feedbackCall = document.querySelector(".feedback-call");
let feedbackCallClose = document.querySelector(".feedback-call__btn");
let bodyOpacity = document.querySelector(".wrapper__main-content");
let burgerMenu = document.querySelector(".burger-menu ");

const toggleMenu = function () {
  feedbackCall.classList.toggle("feedback-call--show");
  bodyOpacity.classList.toggle("body-opacity");
  burgerMenu.classList.toggle("body-opacity");
};

feedbackCallItem.addEventListener("click", function (e) {
  const main_menu = burgerMenu.classList.contains("burger-menu--show");
  if (main_menu) {
    e.stopPropagation();
    feedbackCall.classList.toggle("feedback-call--show");
    // bodyOpacity.classList.toggle("body-opacity");
    burgerMenu.classList.toggle("body-opacity");
  } else {
    e.stopPropagation();
    toggleMenu();
  }
});
feedbackCallAnotherItem.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == feedbackCall || feedbackCall.contains(target);
  const its_btnMenu = target == feedbackCallItem;
  const menu_is_active = feedbackCall.classList.contains("feedback-call--show");
  const main_menu = burgerMenu.classList.contains("burger-menu--show");

  if (!its_menu && !its_btnMenu && menu_is_active && main_menu) {
    e.stopPropagation();
    burgerMenu.classList.add("burger-menu--show");
    feedbackCall.classList.toggle("feedback-call--show");
    // bodyOpacity.classList.toggle("body-opacity");
    burgerMenu.classList.remove("body-opacity");
  }
  if (!its_menu && !its_btnMenu && menu_is_active && !main_menu) {
    feedbackCall.classList.toggle("feedback-call--show");
    bodyOpacity.classList.toggle("body-opacity");
    burgerMenu.classList.toggle("body-opacity");
  }
});
feedbackCallClose.addEventListener("click", function (e) {
  const main_menu = burgerMenu.classList.contains("burger-menu--show");
  if (main_menu) {
    e.stopPropagation();
    feedbackCall.classList.toggle("feedback-call--show");
    //bodyOpacity.classList.toggle("body-opacity");
    burgerMenu.classList.toggle("body-opacity");
  } else {
    feedbackCall.classList.toggle("feedback-call--show");
    bodyOpacity.classList.toggle("body-opacity");
    burgerMenu.classList.toggle("body-opacity");
  }
});

/* 
feedbackCallItem.addEventListener("click", function () {
  feedbackCall.classList.add("feedback-call--show");
  bodyOpacity.classList.add("body-opacity");
});
feedbackCallAnotherItem.addEventListener("click", function () {
  feedbackCall.classList.add("feedback-call--show");
  bodyOpacity.classList.add("body-opacity");
});
/* 
bodyOpacity.addEventListener("click", function () {
  feedbackCall.classList.remove("feedback-call--show");
  bodyOpacity.classList.remove("body-opacity");
}); */
