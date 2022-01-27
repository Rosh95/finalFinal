let feedbackCallItem = document.querySelector(".burger-menu__btn--call");
let feedbackCallAnotherItem = document.querySelector(".header__feedback-call");
let feedbackCall = document.querySelector(".feedback-call");
let feedbackCallClose = document.querySelector(".feedback-call__btn");
let bodyOpacity = document.querySelector(".wrapper__main-content");

const toggleMenu = function () {
  feedbackCall.classList.toggle("feedback-call--show");
  bodyOpacity.classList.toggle("body-opacity");
};

feedbackCallItem.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
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

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
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

feedbackCallClose.addEventListener("click", function () {
  feedbackCall.classList.remove("feedback-call--show");
  bodyOpacity.classList.remove("body-opacity");
});
