const swiper = new Swiper('.descr-swiper-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 600,

  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

  autoHeigth: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
