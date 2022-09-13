const whatElseSlider = new Swiper('.what-else__slider', {
  direction: 'horizontal',
  loop: false,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },

  // autoHeight: true,

  initialSlide: 1,
  mousewheel: {
    sensitivity: 1,
  },
});
