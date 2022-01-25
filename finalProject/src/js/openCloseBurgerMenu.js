let burgerMenuItem = document.querySelector('.header__btn');
let burgerMenu = document.querySelector('.burger-menu ');
let burgerMenuClose = document.querySelector('.burger-menu__btn');

burgerMenuItem.addEventListener('click', function () {
  burgerMenu.classList.add('burger-menu--show');
});
burgerMenuClose.addEventListener('click', function () {
  burgerMenu.classList.remove('burger-menu--show');
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
