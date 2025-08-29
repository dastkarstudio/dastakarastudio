//swipe
/*var swiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });*/
    var swiper = new Swiper(".home", { 
  loop: true,
  spaceBetween: 0,
  
  /*autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },*/
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
