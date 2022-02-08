//nav bar.......................................

const nav = document.getElementsByClassName('nav')[0]
const toggle = document.getElementsByClassName('toggle-icons')[0]

toggle.onclick = function () {
  'use strict'

  nav.classList.toggle('collapse')
}

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
})
