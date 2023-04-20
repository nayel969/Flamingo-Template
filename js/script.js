 
var swiper = new Swiper(".testimonial__content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        605: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 2,
        },
        995: {
            slidesPerView: 3,
        },
    },
  });
