const body = document.querySelector('body');
const whatElseList = document.querySelector('.w-e-list');
const sliderScript = document.querySelector('.js-slider');

window.addEventListener('resize', () => {
  if (screen.width > 768) {
    sliderScript.src = '';
  }
});
