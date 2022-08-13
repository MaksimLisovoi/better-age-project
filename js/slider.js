const descrSlider = new Siema({
  selector: '.siema',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {
    console.log(dotsBlock.children[descrSlider.currentSlide]);

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('descr-ctrl__dot--active');
    }

    dots[descrSlider.currentSlide].classList.add('descr-ctrl__dot--active');
  },
});

document.querySelector('.prev').addEventListener('click', () => descrSlider.prev());
document.querySelector('.next').addEventListener('click', () => descrSlider.next());

const dotsBlock = document.querySelector('.descr-ctrl__dots');
const dots = dotsBlock.children;

Siema.prototype.addPagination = function () {
  for (let i = 0; i < this.innerElements.length; i++) {
    const btn = document.createElement('btn');
    btn.classList.add('descr-ctrl__dot');
    dotsBlock.appendChild(btn);

    dots[0].classList.add('descr-ctrl__dot--active');

    btn.addEventListener('click', () => this.goTo(i));
  }
};

// Trigger pagination creator
descrSlider.addPagination();
