
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


  // ハンバーガーアイコンをクリックすると、ドロワーメニューが開閉する
  $('.js-hamburger').on('click', function () {
    $(this).toggleClass('is-open');
    $('.js-drawer-nav').toggleClass('is-open');
  });

  // ドロワーメニュー内のリンクをクリックすると、ドロワーメニューが閉じる
  $('.js-drawer-nav a').on('click', function () {
    $('.js-drawer-nav').toggleClass('is-open');
  });



});
