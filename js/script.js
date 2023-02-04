$(function(){

    // ページトップ
    let topBtn = $('#page_top');
    topBtn.hide();
    //スクロールが1000に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});