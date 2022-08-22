const clientsSlider = new Swiper('.clients__slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 100,
  navigation: {
    nextEl: '.clients-controls__btn--left',
    prevEl: '.clients-controls__btn--right',
  },
  pagination: {
    el: '.clients-controls__pagination',
    type: 'bullets',
  },
});
