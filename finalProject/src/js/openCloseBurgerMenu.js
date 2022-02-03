let burgerMenuItem = document.querySelector(".header__btn");
let burgerMenu = document.querySelector(".burger-menu");
let burgerMenuClose = document.querySelector(".burger-menu__btn");
let wrapperMain = document.querySelector(".wrapper__main-content");
let burgerMenuContainer = document.querySelector(".burger-menu__container");

const toggleMenu = function () {
  burgerMenu.classList.toggle("burger-menu--show");
  wrapperMain.classList.toggle("wrapper__main-content--height");
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
});
burgerMenuClose.addEventListener("click", function () {
  toggleMenu();
});
