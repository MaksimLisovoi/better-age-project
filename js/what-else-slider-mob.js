const whatElseSlider = new Siema({
  selector: '.siema-slider',
  duration: 200,
  easing: 'ease-out',
  perPage: {
    768: 3,
  },
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});
// whatElseSlider.sliderFrame = 'li';
if (screen.width > 768) {
  console.log(whatElseSlider.destroy());
}

document.querySelector('selector');
