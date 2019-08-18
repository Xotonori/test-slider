$(document).ready(function () {

    resizeBrowser();

    $(window).resize(function() {
        resizeBrowser();
    });

    $('.navbar-001 #begin button').on('click', function () {

        $('.navbar-001 #begin').css({
            opacity: 0,
            'z-index': -1
        });

        $('.navbar-001 .carousel').carousel(0);
    });
});

function resizeBrowser () {

    let widthBrowser = $(window).width();

    if (widthBrowser < 800) {
        $('.navbar-001 .carousel-inner .heading-wrapper p').text('Тест на внимательность');

    } else {
        $('.navbar-001 .carousel-inner .heading-wrapper p').text('Акция действует с 01.07.18 по 31.07.18');
    }
}




