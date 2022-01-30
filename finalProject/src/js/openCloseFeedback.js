let feedbackItem = document.querySelector(".burger-menu__btn--message");
let feedbackAnotherItem = document.querySelector(".header__feedback");
let feedback = document.querySelector(".feedback ");
let feedbackClose = document.querySelector(".feedback__btn");
let bodyOpacity = document.querySelector(".wrapper__main-content");
let burgerMenu = document.querySelector(".burger-menu ");

const toggleMenu = function () {
  feedback.classList.toggle("feedback--show");
  bodyOpacity.classList.toggle("body-opacity");
  burgerMenu.classList.toggle("body-opacity");
};

feedbackItem.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});
feedbackAnotherItem.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == feedback || feedback.contains(target);
  const its_btnMenu = target == feedbackItem;
  const menu_is_active = feedback.classList.contains("feedback--show");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});

/* feedbackItem.addEventListener("click", function () {
  feedback.classList.add("feedback--show");
  bodyOpacity.classList.add("body-opacity");
});*/
/* feedbackAnotherItem.addEventListener("click", function () {
  feedback.classList.add("feedback--show");
  bodyOpacity.classList.add("body-opacity");
});
*/
feedbackClose.addEventListener("click", function () {
  feedback.classList.remove("feedback--show");
  bodyOpacity.classList.remove("body-opacity");
  burgerMenu.classList.remove("body-opacity");
});
