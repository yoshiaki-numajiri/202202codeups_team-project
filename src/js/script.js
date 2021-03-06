
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  $(function () {
    var imgHeight = $('.js-mv').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
  
    var header = $('.js-header'); //ヘッダーコンテンツ
  
    $(window).on('load scroll', function () {
      if ($(window).scrollTop() < imgHeight) {
        //メインビジュアル内にいるので、クラスを外す。
        header.removeClass('p-headerColor');
      } else {
        //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
        header.addClass('p-headerColor');
      }
    });
  });

  $(function(){
    var btn = $('.p-category__item');
    btn.click(function(){
      btn.removeClass('is-active');
      $(this).addClass('is-active');
    });
  });

  var topBtn = $('.js-page-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  $(window).on('scroll', function () {
    if ($('.slider1').height() < $(this).scrollTop()) {
      $('.header').css('background', 'rgba(17,17,17,1)');
    } else {
      $('.header').css('background', 'rgba(17,17,17,0.5)');
    }
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

    // ページ内リンクで移動するとき、ヘッダーの高さ分を調整
    $(function(){
      var headerHeight = $('header').outerHeight(); // ヘッダーについているID、クラス名など、余白を開けたい場合は + 10を追記する。
      var urlHash = location.hash; // ハッシュ値があればページ内スクロール
      if(urlHash) { // 外部リンクからのクリック時
        $('body,html').stop().scrollTop(0); // スクロールを0に戻す
        setTimeout(function(){ // ロード時の処理を待ち、時間差でスクロール実行
          var target = $(urlHash);
          var position = target.offset().top - headerHeight;
          $('body,html').stop().animate({scrollTop:position}, 100); // スクロール速度ミリ秒
        }, 100);
      }
      $('a[href^="#"]').click(function(){ // 通常のクリック時
        var href= $(this).attr("href"); // ページ内リンク先を取得
        var target = $(href);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 100); // スクロール速度ミリ秒
        return false; // #付与なし、付与したい場合は、true
      });
    });
  



});
