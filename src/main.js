import './style.css';
import './style.scss';

// console.log(newsSwiperClass);
scrollCue.init();
$(document).ready(function () {
  // scrollCue.init();
  scrollCue.update();
  $('.menu-item-has-children').hover(
    function () {
      $(this).children('a').addClass('active');
      $(this).children('ul.sub-menu').removeClass('_hide');
    },
    function () {
      $(this).children('a').removeClass('active');
      $(this).children('ul.sub-menu').addClass('_hide');
    }
  );
  $('.mob-menu-start').click(function () {
    $('.window-overlay').toggleClass('open');
    $('.mobile-menu').toggleClass('open');
    $(this).children('img').toggle();
  });
  footerAccordion(); // запуск при загрузке
});
$(window).on("resize", function () {
  footerAccordion(); // запуск при изменении размера
});
function footerAccordion() {
  if (window.matchMedia("(max-width: 767px)").matches) {

    $(".footer-elem ._h5").removeClass("open");
    $(".acc-body").removeClass("open");

    $(".footer-elem ._h5").off("click").on("click", function () {
      $(this).toggleClass("open");
      $(this).next(".acc-body").toggleClass("open");
    });

  } else {

    $(".footer-elem ._h5").addClass("open");
    $(".acc-body").addClass("open");

    $(".footer-elem ._h5").off("click"); // чтобы не было дублей событий
  }
}
// let countersSec = $(".counters-section");
$(document).scroll(function () {
  if ($(document).scrollTop() >= 100) {
    $(".header")
      // .removeClass("header-transparent")
      .addClass("header-fixed");
  } else {
    $(".header")
      .removeClass("header-fixed")
    // .addClass("header-transparent");
  }
});
const swiperPromo = new Swiper('.swiperPromo', {
slidesPerView: 2,
  pagination: {
    el: '.testimonial-pagination',
  },
  navigation: {
    nextEl: '.testimonial-button-next',
    prevEl: '.testimonial-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
      initialSlide: 0,
    },
    768: {
      spaceBetween: 30,
      initialSlide: 1,
    },
  },

});
const swiperDocs = new Swiper('.swiperDocs', {

  pagination: {
    el: '.testimonial-pagination',
  },
  navigation: {
    nextEl: '.testimonial-button-next',
    prevEl: '.testimonial-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
      initialSlide: 0,
    },
    768: {
      spaceBetween: 30,
      initialSlide: 1,
      slidesPerView: 4,
    },
  },

});