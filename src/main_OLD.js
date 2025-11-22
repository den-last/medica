import './style.css';
import './style.scss';
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

const swiper = new Swiper('.testimonialSwiper', {

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
const swiper2 = new Swiper('.partnersSwiper', {

  // pagination: {
  //   el: '.testimonial-pagination',
  // },
  // navigation: {
  //   nextEl: '.testimonial-button-next',
  //   prevEl: '.testimonial-button-prev',
  // },



  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // centeredSlides: true,
  // virtual: {
  //   slides: (function () {
  //     const slides = [];
  //     for (var i = 0; i < 5; i += 1) {
  //       slides.push('Slide ' + (i + 1));
  //     }
  //     return slides;
  //   })(),
  // },
  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 1,
      initialSlide: 3,
      loop: true,
      loopAdditionalSlides: 3,
    },
    993: {
      spaceBetween: 30,
      slidesPerView: 3,
      initialSlide: 2,
      loop: true,
      loopAdditionalSlides: 3,
    },
  },

});
let newsSwiperClass = '';
function detectPaginClass() {
  if (window.matchMedia("(max-width: 992px)").matches) {
    newsSwiperClass = '.mobile';
  } else {
    newsSwiperClass = '.desktop';
  }
}
detectPaginClass();
// $(window).on("resize", function () {
//   detectPaginClass();
// });
const swiper3 = new Swiper('.newsSwiper', {

  pagination: {
    el: '.news-pagination' + newsSwiperClass,
  },
  navigation: {
    nextEl: '.news-button-next',
    prevEl: '.news-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
  },

});

const swiper4 = new Swiper('.priceSwiper', {

  pagination: {
    el: '.price-pagination',
  },
  navigation: {
    nextEl: '.price-button-next',
    prevEl: '.price-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
      initialSlide: 1,
    },
    768: {
      spaceBetween: 30,
      initialSlide: 1,

    },
    1235: {
      allowTouchMove: false,
      spaceBetween: 30,
      initialSlide: 1,
    }
  },

});
const swiperTabSwitch = new Swiper('.step-swiper', {
  freeMode: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  breakpoints: {
    320: {
      // spaceBetween: 15,
      // initialSlide: 1,
    },
    768: {
      // spaceBetween: 30,
      // initialSlide: 1,

    },
    1235: {
      // allowTouchMove: false,
      // spaceBetween: 30,
      // initialSlide: 1,
    }
  },
});


// console.log(newsSwiperClass);
scrollCue.init();
$(document).ready(function () {
  // scrollCue.init();
  scrollCue.update();
  var m = document.querySelectorAll(".image-small");
  document.documentElement.style.setProperty("--app-height", "".concat(window.innerHeight, "px")),
    document.querySelectorAll('[type="tel1"]').forEach(function (t) {
      var e = cl(t, { mask: "+{38}(000)000-00-00" });
      t.addEventListener("blur", function () {
        17 !== e.value.length && (e.value = "");
      });
    });

  document.addEventListener("mousemove", function (t) {
    m.forEach(function (e) {
      var i = e.getAttribute("data-speed"),
        r = (window.innerWidth - t.pageX * i) / 100,
        n = (window.innerHeight - t.pageY * i) / 100;
      e.style.transform = "translateX(".concat(r, "px) translateY(").concat(n, "px)");
    });
  });
  // console.log($('.menu-item-has-children a'));
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

  // $('.tabs-switch-elem').on('click', function () {
  //   const index = $(this).index();

  //   // Обновляем заголовки табов
  //   $('.tabs-switch-elem').removeClass('active');
  //   $(this).addClass('active');

  //   // Плавная смена контента
  //   $('.tabs-content-elem:visible').fadeOut(200, function () {
  //     $('.tabs-content-elem').eq(index).fadeIn(200);
  //   });
  // });

  $('.homeTab').on('click', function () {
    const index = $(this).index();

    // Обновляем заголовки табов
    $('.homeTab').removeClass('active');
    $(this).addClass('active');

    // Плавная смена контента
    $('.tabs-content-elem:visible').fadeOut(200, function () {
      $('.tabs-content-elem').eq(index).fadeIn(200);
    });
  });


  // Инициализация: показываем первый таб 
  $('.homeTab').first().addClass('active');
  $('.tabs-content-elem').hide().eq(0).show(); // Начальное состояние

  $('.priceTab').on('click', function () {
    const index = $(this).index(); // 0 — первая вкладка, 1 — вторая

    $('.priceTab').removeClass('active');
    $(this).addClass('active');

    $('.price-wrap').each(function () {
      const $wrap = $(this);
      const $mon = $wrap.find('.mon');
      const $year = $wrap.find('.year');

      if (index === 0) {
        $year.fadeOut(200, function () {
          $mon.fadeIn(200);
        });
      } else {
        $mon.fadeOut(200, function () {
          $year.fadeIn(200);
        });
      }
    });
  });

  $('.stepTab').on('click', function () {
    const index = $(this).index(); // 0 — первая вкладка, 1 — вторая

    $('.stepTab').removeClass('active');
    $(this).addClass('active');

    // Плавная смена контента
    $('.steps-content-elem:visible').fadeOut(200, function () {
      $('.steps-content-elem').eq(index).fadeIn(200);
    });

  });
  // counters

  // Следим за появлением на экране .counters-elem
  const elements = document.querySelectorAll('.counters-elem ._txt-l');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCountUpIn(entry.target);
        obs.unobserve(entry.target); // отключаем повторный запуск
      }
    });
  }, { threshold: 0.6 });

  elements.forEach(el => observer.observe(el));

  // Твоя функция — адаптированная для одного контейнера
  function startCountUpIn(container) {
    $(container).prev('.head').find('.num').each(function () {
      let $this = $(this);
      let finalText = $this.text().replace(/\s/g, '');
      let finalNumber = parseInt(finalText, 10);
      let duration = 2000;
      let stepTime = 20;
      let steps = Math.ceil(duration / stepTime);
      let current = 0;
      let increment = finalNumber / steps;

      $this.text('0');

      let counter = setInterval(function () {
        current += increment;
        if (current >= finalNumber) {
          current = finalNumber;
          clearInterval(counter);
        }
        $this.text(formatNumber(Math.floor(current)));
      }, stepTime);
    });
  }

  // Твоя функция форматирования
  function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  // function startCountUp(){
  // $('.counters-elem .num').each(function () {
  //   let $this = $(this);
  //   let finalText = $this.text().replace(/\s/g, '');
  //   let finalNumber = parseInt(finalText, 10);
  //   let duration = 2000; // общая длительность анимации
  //   let stepTime = 20;   // шаг обновления (мс)
  //   let steps = Math.ceil(duration / stepTime);
  //   let current = 0;
  //   let increment = finalNumber / steps;

  //   $this.text('0');

  //   let counter = setInterval(function () {
  //     current += increment;
  //     if (current >= finalNumber) {
  //       current = finalNumber;
  //       clearInterval(counter);
  //     }
  //     $this.text(formatNumber(Math.floor(current)));
  //   }, stepTime);
  // });

  // }

  // // Функция для форматирования числа с пробелами
  // function formatNumber(n) {
  //   return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  // }
  $('.accordeon-head').on('click', function () {
    let $this = $(this);
    let $body = $this.next('.accordeon-body');

    if ($this.hasClass('active')) {
      // Если уже открыт — свернуть
      $this.removeClass('active');
      $body.slideUp();
    } else {
      // Иначе — закрыть все, открыть текущий
      $('.accordeon-head').removeClass('active');
      $('.accordeon-body').slideUp();

      $this.addClass('active');
      $body.slideDown();
    }
  });
  $('.anchor-menu a').on('click', function (e) {
    $('.anchor-menu a').removeClass('active');
    $(this).addClass('active');
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
  // if(countersSec){
  //   console.log(1234);
  //   if ($(document).scrollTop() >= 300) {
  //     $('.counters-elem .num').each(function () {
  //       let $this = $(this);
  //       let finalText = $this.text().replace(/\s/g, '');
  //       let finalNumber = parseInt(finalText, 10);
  //       let duration = 2000; // общая длительность анимации
  //       let stepTime = 20;   // шаг обновления (мс)
  //       let steps = Math.ceil(duration / stepTime);
  //       let current = 0;
  //       let increment = finalNumber / steps;

  //       $this.text('0');

  //       let counter = setInterval(function () {
  //         current += increment;
  //         if (current >= finalNumber) {
  //           current = finalNumber;
  //           clearInterval(counter);
  //         }
  //         $this.text(formatNumber(Math.floor(current)));
  //       }, stepTime);
  //     });
  //   }
  // }

  // if ($("body").hasClass("home")) {
  //   if ($(document).scrollTop() >= 100) {
  //     $(".header")
  //       .removeClass("header-transparent")
  //       .addClass("header-default");
  //   } else {
  //     $(".header")
  //       .removeClass("header-default")
  //       .addClass("header-transparent");
  //   }
  // }
});
function BCWidth() {
  let windowWidth = $(window).width();
  let arrow = $(".backTo").outerWidth();
  let linkWidth = 0;
  $("#breadcrumbs a").each(function () {
    linkWidth += $(this).outerWidth() + 3; // true включает margin
  });
  // console.log("Суммарная ширина: " + totalWidth);
  // $(".bg-decor").height(headHeight + swipercatalog.height);
  let BCElem = windowWidth - arrow - linkWidth - 85;
  $(".breadcrumb_last").outerWidth(BCElem);
  // console.log(link);
}
if (window.matchMedia("(max-width: 479px)").matches) {
  BCWidth();
  $(window).on("resize", function () {
    BCWidth();
  });
}

