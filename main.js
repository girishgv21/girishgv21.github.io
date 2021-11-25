$(function() {
    // $('#how-you-doin').on('hover', function() {
    //     $(this).text('Hope you are doin good!');
    // })

    $('#how-you-doin').mouseout(function() {
        $(this).text('How you doin?');
        })
        .mouseover(function() {
        $(this).text('Hope you are doin good!');
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.header-row').addClass('active')
        } else {
            $('.header-row').removeClass('active')
        }
    })

    $('.trigger-click').on('click', function() {
        $(this).toggleClass('active')
        $('.menu-col').slideToggle()
        $('header').toggleClass('transparent')
    })
})