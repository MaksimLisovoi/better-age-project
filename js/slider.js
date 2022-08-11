const descrSlider = new Siema({
  selector: '.siema',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

document.querySelector('.prev').addEventListener('click', () => descrSlider.prev());
document.querySelector('.next').addEventListener('click', () => descrSlider.next());

const body = document.querySelector('body');
const whatElseList = document.querySelector('.w-e-list');

console.log(body.offsetWidth);

if (body.offsetWidth < 768) {
  whatElseList.classList.add('siema-slider');
} else {
  whatElseList.classList.remove('siema-slider');
}

const whatElseSlider = new Siema({
  selector: '.siema-slider',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});
