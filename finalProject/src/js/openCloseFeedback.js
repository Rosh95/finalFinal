let feedbackItem = document.querySelector('.burger-menu__btn--message');
let feedbackAnotherItem = document.querySelector('.header__feedback');
let feedback = document.querySelector('.feedback ');
let feedbackClose = document.querySelector('.feedback__btn');

feedbackItem.addEventListener('click', function () {
  feedback.classList.add('feedback--show');
});
feedbackAnotherItem.addEventListener('click', function () {
  feedback.classList.add('feedback--show');
});
feedbackClose.addEventListener('click', function () {
  feedback.classList.remove('feedback--show');
});
