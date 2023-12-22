var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* swiper */

  var swiper = new Swiper(".p-swiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
    },
  });

  /* ajout defilement positive*/

  var swiper = new Swiper(".mySwiper-cool", {
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next-cool",
      prevEl: ".swiper-button-prev-cool",
    },
  });