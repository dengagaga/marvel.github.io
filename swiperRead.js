
var swiper = new Swiper(".mySwiper", {
  keyboard: {
    enabled: true,
  },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    navigation: {
      nextEl: ".swiper-butt-next",
      prevEl: ".swiper-butt-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
    
   














// TRANSITIONS

const headerReadLeft = document.querySelector('.header_read-left')
const headerReadLeft2 = document.querySelector('.header_read-left-2')
const swipers = document.querySelector('.swiper-active')
const containerRead2 = document.querySelector('.container_read-2')
headerReadLeft.addEventListener('click', () => {
  swipers.classList.add('none')
  containerRead2.classList.remove('none')
})
headerReadLeft2.addEventListener('click', () => {
  swipers.classList.remove('none')
  containerRead2.classList.add('none')
})

// /TRANSITIONS
// /CLICK
const headerReadTheOne = document.querySelector('.header_read-theOne')
const swiperButtonsTheOne = document.querySelector('.swiper-buttons-theOne')
const swiperScrollbarTheOne = document.querySelector('.swiper-scrollbar-theOne')
window.addEventListener('click', (event) => {
  if (event.target.parentElement.dataset.active == 'act') {
    return
  }
  if (event.target.dataset.active == 'act') {
    return
  }
  containerReadSvg.classList.toggle('opacity')
  headerReadTheOne.classList.toggle('opacity')
  swiperScrollbarTheOne.classList.toggle('opacity')
  swiperButtonsTheOne.classList.toggle('opacity')
})

// /CLICK
  
// MODAL
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const containerReadSvg = document.querySelector('.container_read-svg-abs')
containerReadSvg.addEventListener('click', () => {
  modal.classList.add('open')
  headerReadTheOne.classList.add('opacity')
  swiperScrollbarTheOne.classList.add('opacity')
  swiperButtonsTheOne.classList.add('opacity')
})
close.addEventListener('click', () => {
  modal.classList.remove('open')
  headerReadTheOne.classList.remove('opacity')
  swiperScrollbarTheOne.classList.remove('opacity')
  swiperButtonsTheOne.classList.remove('opacity')
})
// /MODAL
const swiperButtNext = document.querySelector('.swiper-butt-next')
swiperButtNext.addEventListener('click', () => {
  if(swiperButtNext.classList.contains('swiper-button-disabled')) {
    document.location.href = "ReadTwo.html"
  }
})



const sw2 = document.querySelector('.sw2')

sw2.addEventListener('click', () => {
  swipers.classList.remove('none')
  containerRead2.classList.add('none')
  
})
