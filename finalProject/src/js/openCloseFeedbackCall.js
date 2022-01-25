let feedbackCallItem = document.querySelector('.burger-menu__btn--call');
let feedbackCallAnotherItem = document.querySelector('.header__feedback-call');
let feedbackCall = document.querySelector('.feedback-call');
let feedbackCallClose = document.querySelector('.feedback-call__btn');
let bodyOpacity = document.querySelector('main');

feedbackCallItem.addEventListener('click', function () {
  feedbackCall.classList.add('feedback-call--show');
  bodyOpacity.classList.add('body-opacity');
});
feedbackCallAnotherItem.addEventListener('click', function () {
  feedbackCall.classList.add('feedback-call--show');
  bodyOpacity.classList.add('body-opacity');
});
feedbackCallClose.addEventListener('click', function () {
  feedbackCall.classList.remove('feedback-call--show');
  bodyOpacity.classList.remove('body-opacity');
});
