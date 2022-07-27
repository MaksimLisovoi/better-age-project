const className = 'inverted';
const scrollTrigger = 60;

const header = document.querySelector('.header');

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    header.classList.add(className);
  } else {
    header.classList.remove(className);
  }
};
