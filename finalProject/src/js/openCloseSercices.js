let btnText = document.querySelector('.services__btn');
let serviceBoxHeight = document.querySelector('.services__list');
let arrowDirection = document.querySelector('.services__arrow');

btnText.addEventListener('click', function () {
  if (btnText.textContent === 'Скрыть') {
    serviceBoxHeight.classList.remove('services__list--height');
    arrowDirection.src = 'img/icon.svg';
    return (btnText.textContent = 'Показать все');
  }
  if (btnText.textContent === 'Показать все') {
    serviceBoxHeight.classList.add('services__list--height');
    btnText.textContent = 'Скрыть';
    arrowDirection.src = 'img/icon2.svg';
  }
});
