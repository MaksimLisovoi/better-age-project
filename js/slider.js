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
  onChange: () => {},
});

document.querySelector('.prev').addEventListener('click', () => descrSlider.prev());
document.querySelector('.next').addEventListener('click', () => descrSlider.next());

const dotsBlock = document.querySelector('.descr-ctrl__dots');

console.dir(dotsBlock.children[0]);

Siema.prototype.addPagination = function () {
  for (let i = 0; i < this.innerElements.length; i++) {
    const btn = document.createElement('span');
    btn.textContent = i;
    dotsBlock.appendChild(btn);

    btn.addEventListener('click', () => this.goTo(i));
  }
};

// Trigger pagination creator
descrSlider.addPagination();
