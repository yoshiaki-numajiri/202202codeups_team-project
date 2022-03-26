//swiper mv & works

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

var swiper = new Swiper(".js-mySwiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  effect: 'fade',
  //ページネーション表示の設定
  pagination: { 
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true //クリックに反応させる
  },
});

let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
}
new Swiper('.mySwiper-lg', swipeOption);
});

//swiper works-detail

//メインスライド
var slider = new Swiper ('.js-gallery-slider', {
  // autoplay: {
  //   delay: 3000,
  // },
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 8, //スライドの枚数と同じ値を指定
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//サムネイルスライド
var thumbs = new Swiper ('.js-gallery-thumbs', {
  slidesPerView: 'auto',
  spaceBetween: 8,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  breakpoints: {
    // 768px以上の場合
    768: {
      centeredSlides: false,
    }
  }
});

//3系
//slider.params.control = thumbs;
//thumbs.params.control = slider;

//4系～
slider.controller.control = thumbs;
thumbs.controller.control = slider;
