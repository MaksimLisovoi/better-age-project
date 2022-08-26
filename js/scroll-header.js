const $header = document.querySelector('[js-header]');

let prevScrollY = 0;
let minScrollY = 100;

window.addEventListener('scroll', function (e) {
  // console.log(window.scrollY);

  if (window.scrollY === 0) {
    $header.classList.add('header--transparent-bg');
  } else {
    $header.classList.remove('header--transparent-bg');
  }
  if (window.scrollY < prevScrollY) {
    $header.classList.add('header--visible');
  } else if (window.scrollY > prevScrollY) {
    if (window.scrollY < minScrollY) return;
    $header.classList.remove('header--visible');
  }

  prevScrollY = window.scrollY;
});
