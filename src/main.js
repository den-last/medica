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
    el: '.promoPagination',
  },
  navigation: {
    nextEl: '.promoNext',
    prevEl: '.promoPrev',
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
    },
    768: {
      spaceBetween: 20,
    },
    993: {
      spaceBetween: 40,
    },
  },

});
const swiperDocs = new Swiper('.swiperDocs', {

  pagination: {
    el: '.docsPagination',
  },
  navigation: {
    nextEl: '.docsNext',
    prevEl: '.docsPrev',
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    993: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },

});
const swiperBlog = new Swiper('.swiperBlog', {

  pagination: {
    el: '.blogPagination',
  },
  navigation: {
    nextEl: '.blogNext',
    prevEl: '.blogPrev',
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
      slidesPerView: 1,
    },
    481: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    993: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
  },

});

const swiperTests = new Swiper('.swiperTests', {

  pagination: {
    el: '.testsPagination',
  },
  navigation: {
    nextEl: '.testsNext',
    prevEl: '.testsPrev',
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
      slidesPerView: 2.5,
    },
    481: {
      spaceBetween: 12,
      slidesPerView:3,
    },
    768: {
      spaceBetween: 12,
      slidesPerView:4,
    },
    993: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
  },

});