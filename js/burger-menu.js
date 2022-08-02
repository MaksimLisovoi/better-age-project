const burgerBtn = document.querySelector('.burger');
const header = document.querySelector('.header__body');

burgerBtn.addEventListener('click', () => {
  header.classList.toggle('open');
});
