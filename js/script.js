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

    $(function () {
        $(window).scroll(function () {
            const windowHeight = $(window).height();
            const scroll = $(window).scrollTop();

            $('.js-fadein').each(function () {
                const targetPosition = $(this).offset().top;
                if (scroll > targetPosition - windowHeight + 100) {
                    $(this).addClass("is-fadein");
                }
            });
        });
    });
});