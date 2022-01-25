let feedbackItem = document.querySelector(".burger-menu__btn--message");
let feedbackAnotherItem = document.querySelector(".header__feedback");
let feedback = document.querySelector(".feedback ");
let feedbackClose = document.querySelector(".feedback__btn");
let bodyOpacity = document.querySelector(".wrapper");

feedbackItem.addEventListener("click", function () {
  feedback.classList.add("feedback--show");
  bodyOpacity.classList.add("body-opacity");
});
feedbackAnotherItem.addEventListener("click", function () {
  feedback.classList.add("feedback--show");
  bodyOpacity.classList.add("body-opacity");
});
feedbackClose.addEventListener("click", function () {
  feedback.classList.remove("feedback--show");
  bodyOpacity.classList.remove("body-opacity");
});
