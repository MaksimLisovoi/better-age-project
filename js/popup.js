const btnOpen = document.querySelector('.test__btn');
const btnClose = document.querySelector('.popup__btn-close');
const popup = document.querySelector('#popup');
const body = document.querySelector('body');

btnOpen.addEventListener('click', openPopup);
btnClose.addEventListener('click', closePopup);

function openPopup() {
  popup.classList.add('popup--is-open');
  body.classList.add('lock');
}
function closePopup() {
  popup.classList.remove('popup--is-open');
  body.classList.remove('lock');
}

const swiper = new Swiper('.popup__slider', {
  // Optional parameters
  direction: 'horizontal',
  speed: 600,

  navigation: {
    nextEl: '.popup-controls__btn-next',
    prevEl: '.popup-controls__btn-back',
  },
  spaceBetween: 50,

  autoHeigth: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
});
