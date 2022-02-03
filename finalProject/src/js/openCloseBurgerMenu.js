let burgerMenuItem = document.querySelector(".header__btn");
let burgerMenu = document.querySelector(".burger-menu");
let burgerMenuClose = document.querySelector(".burger-menu__btn");
let wrapperMain = document.querySelector(".wrapper__main-content");
let burgerMenuContainer = document.querySelector(".burger-menu__container");

const toggleMenu = function () {
  burgerMenu.classList.toggle("burger-menu--show");
  wrapperMain.classList.toggle("wrapper__main-content--height");
  // bodyOpacity.classList.toggle("body-opacity");
};

burgerMenuItem.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});
burgerMenu.addEventListener("click", function (e) {
  const its_menu =
    e.target == burgerMenuContainer || burgerMenuContainer.contains(e.target);
  if (!its_menu) {
    toggleMenu();
  }

  /* 
  if (e.target !== document.querySelector(".burger-menu__container")) {
    // e.stopPropagation();
    toggleMenu();
  } */
});
burgerMenuClose.addEventListener("click", function () {
  /* burgerMenu.classList.remove("burger-menu--show");
  bodyOpacity.classList.remove("body-opacity"); */
  //e.stopPropagation();
  toggleMenu();
});

/* document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == burgerMenu || burgerMenu.contains(target);
  const its_btnMenu = target == burgerMenuItem;
  const menu_is_active = burgerMenu.classList.contains("burger-menu--show");
  const feedbackCall = document.querySelector(".feedback-call");
  const its_feedback_call =
    target == feedbackCall || feedbackCall.contains(target);
  if (!its_menu && !its_btnMenu && menu_is_active && !its_feedback_call) {
    toggleMenu();
  }
}); */
/* 
burgerMenuItem.addEventListener("click", function () {
  burgerMenu.classList.add("burger-menu--show");
  //bodyOpacity.classList.add("body-opacity");
});
*/

/* btnText.addEventListener('click', function () {
  if (btnText.textContent === 'Скрыть') {
    brandBoxHeight.classList.remove('brands__list--height');
    arrowDirection.src = 'img/icon.svg';
    return (btnText.textContent = 'Показать все');
  }
  if (btnText.textContent === 'Показать все') {
    brandBoxHeight.classList.add('brands__list--height');
    btnText.textContent = 'Скрыть';
    arrowDirection.src = 'img/icon2.svg';
  }
});
 */
