// Get the modal
var sliderModal = document.getElementById('mySliderModal')

// When the user clicks the button, open the modal
function openSliderModal() {
  sliderModal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
function closeSliderModal() {
  sliderModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == sliderModal) {
    sliderModal.style.display = 'none'
  }
}

var galleryTop = new Swiper('.gallery-top', {
  slidesPerView: 1,
  spaceBetween: 10,

  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 5,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
})

galleryTop.controller.control = galleryThumbs
galleryThumbs.controller.control = galleryTop
