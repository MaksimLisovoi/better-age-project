const numberContainer = document.querySelector('.swiper-pagination-numbers');
const sliderWrapper = document.querySelector('.swiper-wrapper');

let firstNumber = numberContainer.children[0];
let secondNumber = numberContainer.children[1];

secondNumber.textContent = `0${sliderWrapper.children.length}`;

const swiper = new Swiper('.swiper-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    slideChange: function (swiper) {
      let activeIndex = `0${swiper.realIndex + 1}`;

      firstNumber.textContent = activeIndex;
    },
  },
  autoplay: {
    delay: 2500,
    stopOnLastSlide: true,
  },
});
console.dir(sliderWrapper);

const allImgs = document.querySelectorAll('.main-block__image');

// console.dir(numberContainer.children[0].textContent);

// console.log(swiper.realIndex);
