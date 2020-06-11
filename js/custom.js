$(function () {

    var $dis = $(".full-header").offset().top;

    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        if ($scrolling >= $dis) {
            $(".full-header").addClass("sticky-menu");
        } else {
            $(".full-header").removeClass("sticky-menu");
        }

        if ($scrolling >= 250) {
            $(".back-to-top a i").fadeIn();
        } else {
            $(".back-to-top a i").fadeOut();
        }
    }); //end of sticky menu

    $(".back-to-top a i").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    }); //end of back top menu

    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.banner-carsoual a .fa-chevron-left '),
        nextArrow: $('.banner-carsoual a .fa-chevron-right '),
        fade: true,
        cssEase: 'linear'

    });


    $('.lastes-products-bottom').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.latest-carsoual a .fa-chevron-left '),
        nextArrow: $('.latest-carsoual a .fa-chevron-right '),

    });


    $('.testimonial-bottom').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.testimonial-carsoual a .fa-chevron-left '),
        nextArrow: $('.testimonial-carsoual a .fa-chevron-right '),

    });
    
    $('.venobox').venobox(); 




});
