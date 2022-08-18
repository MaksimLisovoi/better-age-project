const faqList = document.querySelector('[faq-list]');

faqList.addEventListener('click', onItemClick);

function onItemClick(e) {
  const parent = e.target.closest('.faq__item');
  const currentActiveItem = document.querySelector('.faq__item--is-active');

  console.log(e.target.nodeName);

  if (e.target.nodeName === 'P') {
    return;
  }

  if (parent) {
    parent.classList.toggle('faq__item--is-active');
  }

  if (currentActiveItem) {
    currentActiveItem.classList.remove('faq__item--is-active');
  }

  //   e.target.classList.toggle('faq__item--active');
}
