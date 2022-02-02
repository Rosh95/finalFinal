let burgerMenuItem = document.querySelector(".header__btn");
let burgerMenu = document.querySelector(".burger-menu ");
let burgerMenuClose = document.querySelector(".burger-menu__btn");
let bodyOpacity = document.querySelector(".wrapper__main-content");

const toggleMenu = function () {
  burgerMenu.classList.toggle("burger-menu--show");
  bodyOpacity.classList.toggle("body-opacity");
};

burgerMenuItem.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
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
});
/* 
burgerMenuItem.addEventListener("click", function () {
  burgerMenu.classList.add("burger-menu--show");
  //bodyOpacity.classList.add("body-opacity");
});
*/
burgerMenuClose.addEventListener("click", function () {
  burgerMenu.classList.remove("burger-menu--show");
  bodyOpacity.classList.remove("body-opacity");
});

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
