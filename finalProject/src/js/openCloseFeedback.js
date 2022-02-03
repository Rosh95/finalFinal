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
  //burgerMenu.classList.toggle('.wrapper__main-content--height');
  wrapperMain.classList.toggle("wrapper__main-content--height");
  /*   bodyOpacity.classList.toggle("body-opacity");
  burgerMenu.classList.toggle("body-opacity"); */
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
  /*   feedback.classList.remove("feedback--show");
  bodyOpacity.classList.remove("body-opacity");
  burgerMenu.classList.remove("body-opacity"); */
});

/* document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == feedback || feedback.contains(target);
  const its_btnMenu = target == feedbackItem;
  const menu_is_active = feedback.classList.contains("feedback--show");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});
 */
/* feedbackItem.addEventListener("click", function () {
  feedback.classList.add("feedback--show");
  bodyOpacity.classList.add("body-opacity");
});*/
/* feedbackAnotherItem.addEventListener("click", function () {
  feedback.classList.add("feedback--show");
  bodyOpacity.classList.add("body-opacity");
});
*/
/* feedbackClose.addEventListener("click", function () {
  feedback.classList.remove("feedback--show");
  bodyOpacity.classList.remove("body-opacity");
  burgerMenu.classList.remove("body-opacity");
});
 */
