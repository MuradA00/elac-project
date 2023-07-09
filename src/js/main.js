$(document).ready(function () {

 /*fixed header*/
 $(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 50) {
   $('.header').addClass('active');
  } else {
   $('.header').removeClass('active');
  }
 });

 /*header-burger*/
 $('.header-burger').click(function () {
  $(this).toggleClass('active');
  $('.wrapper-buttons').toggleClass('active');
  $('.header-nav').fadeToggle();
  return false;
 });

 /*header-sublist*/
 $('.header-menu_arrow').click(function () {
  $(this).toggleClass('active');
  $(this).next().slideToggle();
  return false;
 });

 /*header-points*/
 $('.wrapper-buttons_point').click(function () {
  $(this).toggleClass('active');
  $(this).siblings().removeClass('active');
  if (!$('.wrapper-buttons_log').hasClass('active')) {
   $('.modal-log').fadeOut();
  } else {
   $('.modal-log').fadeIn();
  }
  if (!$('.wrapper-buttons_contacts').hasClass('active')) {
   $('.modal-contacts').fadeOut();
  } else {
   $('.modal-contacts').fadeIn();
  }
  return false;
 });

 if (matchMedia('only screen and (min-width: 1200px)').matches) {
  gsap.to(".relevant-bgr", {
   scrollTrigger: {
    trigger: ".relevant",
    start: "120% bottom",
    end: "bottom top",
    scrub: 1,
   },
   yPercent: 120,
  });
  gsap.to(".plus-bgr", {
   scrollTrigger: {
    trigger: ".plus",
    start: "120% bottom",
    end: "bottom top",
    scrub: 1,
   },
   yPercent: 70,
  });
  gsap.to(".our-bgr", {
   scrollTrigger: {
    trigger: ".our",
    start: "120% bottom",
    end: "bottom top",
    scrub: 1,
   },
   yPercent: 188,
  });
 }

});


/*start-slider*/
var startSwiper = new Swiper('.start-slider', {
 loop: true,
 observer: true,
 observeParents: true,
 slidesPerView: 1,
 spaceBetween: 0,
 speed: 800,
 effect: 'fade',
 autoplay: {
  delay: 3000,
  disableOnInteraction: false,
 },
 keyboard: {
  enabled: true,
 },
 pagination: {
  el: '.start-pagination',
  clickable: true,
 },
});

/*relevant-slider*/
var relevantSwiper = new Swiper('.relevant-slider', {
 observer: true,
 observeParents: true,
 slidesPerView: 1,
 spaceBetween: 15,
 speed: 800,
 keyboard: {
  enabled: true,
 },
 pagination: {
  el: '.relevant-pagination',
  clickable: true,
 },
 breakpoints: {
  1200: {
   slidesPerView: 3,
   spaceBetween: 40,
  },
  800: {
   slidesPerView: 2,
   spaceBetween: 40,
  },
 },
});