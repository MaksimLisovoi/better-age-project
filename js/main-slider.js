if (window.innerWidth > 767) {
  const mainPage = document.querySelector('.main-block');

  const sliderMarkup = `
 <div class="swiper-slider">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->

              <div class="main-block__image _ibg swiper-slide">
                <picture>
                  <source media="(min-width: 1200px)" srcset="./images/imgs/hero-main-1900.jpg" />
                  <source media="(min-width: 768px)" srcset="./images/imgs/hero-main-1200.jpg" />
                  <source media="(min-width: 480px)" srcset="./images/imgs/hero-main-768.jpg" />
                  <source media="(min-width: 320px)" srcset="./images/imgs/hero-main-480-2.jpg" />
                  <img src="./images/imgs/hero-main-480.jpg" alt="" />
                </picture>

                <!-- <img src="./images/imgs/hero-main-1900.jpg" alt="" /> -->
              </div>

              <div class="main-block__image _ibg swiper-slide">
                <picture>
                  <source
                    media="(min-width: 1200px)"
                    srcset="./images/imgs-treatments/treatments-hero-1673.jpg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcset="./images/imgs-treatments/treatments-hero-1200-2.jpg"
                  />
                  <source
                    media="(min-width: 480px)"
                    srcset="./images/imgs-treatments/treatments-hero-768.jpg"
                  />
                  <source
                    media="(min-width: 320px)"
                    srcset="./images/imgs-treatments/treatments-hero-480.jpg"
                  />
                  <img src="./images/imgs-treatments/treatments-hero-480.jpg" alt="" />
                </picture>
                <!-- <img src="./images/imgs-treatments/treatments-hero-1673.jpg" alt="" /> -->
              </div>
            </div>
          </div>`;

  mainPage.insertAdjacentHTML('beforeend', sliderMarkup);

  const numberContainer = document.querySelector('.swiper-pagination-numbers');
  const sliderWrapper = document.querySelector('.swiper-wrapper');

  let firstNumber = numberContainer.children[0];
  let secondNumber = numberContainer.children[1];

  secondNumber.textContent = `0${sliderWrapper.children.length}`;

  const swiper = new Swiper('.swiper-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    on: {
      slideChange: function (swiper) {
        let activeIndex = `0${swiper.realIndex + 1}`;

        firstNumber.textContent = activeIndex;
      },
    },

    autoplay: {
      delay: 2500,
    },
  });
}
