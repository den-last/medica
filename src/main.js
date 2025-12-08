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
  // about us page
  $('.side-menu-elem').click(function () {
   $('.side-menu-elem').removeClass('active');
   $(this).addClass('active');
   const index = $(this).index(); // ← индекс нажатого элемента
     // Сначала плавно скрываем всё
    $('.tab-section:visible').fadeOut(200, function () {
        // После скрытия показываем нужную вкладку
        $('.tab-section').eq(index).fadeIn(200);
    });
  });
  $('.tab-head').click(function () {
  //  $('.side-menu-elem').removeClass('active');
     $('.tab-head').removeClass('active');
   $(this).addClass('active');

   $(this).next('.tab-content').slideToggle();
   
  });
  $(".tab-content:not(:first)").hide(); // скрыть все, кроме первой
  $(".tab-content").first().show();     // на всякий случай явно показать первую

});
$(window).on("resize", function () {
  footerAccordion(); // запуск при изменении размера
  aboutUsAccordions();
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
function aboutUsAccordions() {
  if (window.matchMedia("(max-width: 992px)").matches) {
     $('.tab-head').removeClass('active');
   $('.tab-head').first().addClass('active');

    $(".tab-section").show();
    $(".tab-content:not(:first)").hide(); // скрыть все, кроме первой
    $(".tab-content").first().show();     // на всякий случай явно показать первую


  } else {
    $(".tab-content").show();
    $('.side-menu-elem').removeClass('active');
   $('.side-menu-elem').first().addClass('active');
    $(".tab-section:not(:first)").hide(); // скрыть все, кроме первой
    $(".tab-section").first().show();     // на всякий случай явно показать первую
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