import '../styles/main.scss';
import './menu';
import SmoothScroll from '../../node_modules/smooth-scroll/dist/smooth-scroll.polyfills'
import './plugins';

"use strict";

const scroll = new SmoothScroll('a[href*="#"]');
window.scroll=scroll;

const menuToggleAction = () => {
  if (window.innerWidth <= 850) {
    const addButtonChange = document.getElementById('mobileButton');
    addButtonChange.classList.toggle('buttonChange');
    const menuActionSlide = document.getElementById("navigation");
    menuActionSlide.classList.toggle("menuAction");
  }
};
window.menuToggleAction = menuToggleAction;

const showMoreWorks = () => {
  let foo = document.getElementById('gallery-button');
  if (window.innerWidth >= 750) {
    if (foo.textContent === "load more work") {
      document.getElementById('gallery').style.height = '1200px';
      document.getElementById('gallery').style.transition = '1s';
      foo.textContent = "load less work";
    } else {
      document.getElementById('gallery').style.height = '600px';
      document.getElementById('gallery').style.transition = '1s';
      foo.textContent = "load more work";
    }
  } else if (750 <= window.innerWidth >= 510) {
    if (foo.textContent === "load more work") {
      document.getElementById('gallery').style.height = '2400px';
      document.getElementById('gallery').style.transition = '1s';
      foo.textContent = "load less work";
    } else {
      document.getElementById('gallery').style.height = '600px';
      document.getElementById('gallery').style.transition = '1s';
      foo.textContent = "load more work";
    }
  } else {
    if (foo.textContent === "load more work") {
      document.getElementById('gallery').style.height = '4800px';
      document.getElementById('gallery').style.transition = '1s';
      foo.textContent = "load less work";
    } else {
      document.getElementById('gallery').style.height = '600px';
      document.getElementById('gallery').style.transition = '1s';
      foo.textContent = "load more work";
    }
  }
};
window.showMoreWorks=showMoreWorks;

var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  //Autoplay
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
window.mySwiper=mySwiper;

