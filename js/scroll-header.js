const $header = document.querySelector('[js-header]');

var prevScrollY = 0;
var minScrollY = 100;

window.addEventListener('scroll', function (e) {
  // console.log(window.scrollY);
  if (window.scrollY < prevScrollY) {
    $header.classList.add('header--visible');
  } else if (window.scrollY > prevScrollY) {
    if (window.scrollY < minScrollY) return;
    $header.classList.remove('header--visible');
  }
  if (window.scrollY === 0) {
    $header.classList.add('header--transparent-bg');
  } else {
    $header.classList.remove('header--transparent-bg');
  }

  prevScrollY = window.scrollY;
});
