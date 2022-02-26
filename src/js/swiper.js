//swiper mv

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  effect: 'fade',
  //ページネーション表示の設定
  pagination: { 
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
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
