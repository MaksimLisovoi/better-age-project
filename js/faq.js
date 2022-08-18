const faqList = document.querySelector('[faq-list]');

faqList.addEventListener('click', onItemClick);

function onItemClick(e) {
  const parent = e.target.closest('.faq__item');
  const currentActiveItem = document.querySelector('.faq__item--is-active');

  if (e.target.nodeName == 'H3' || e.target.nodeName == 'SPAN') {
    parent.classList.toggle('faq__item--is-active');
  }

  if (currentActiveItem) {
    currentActiveItem.classList.remove('faq__item--is-active');
  }

  //   e.target.classList.toggle('faq__item--active');
}
