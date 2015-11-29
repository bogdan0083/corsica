$(document).ready(function() {
    $('.js-mega-slider').slick({
        dots: true,
        autoplay: false,
        stopOnHover: true
    });
    $('.testimonials__slider').slick({
        dots: false,
        autoplay: false,
        stopOnHover: true
    });

    $('.testimonials__slider').on('click', '.testimonials__arrow_left', function(e) {
        $('.testimonials__slider').slick('slickPrev');

        e.preventDefault();
    });

    $('.testimonials__slider').on('click', '.testimonials__arrow_right', function(e) {
        $('.testimonials__slider').slick('slickNext');

        e.preventDefault();
    });

    $('.mega-slide__left').on('click', function(e) {
        $('.js-mega-slider').slick('slickPrev');

        e.preventDefault();
    });

    $('.mega-slide__right').on('click', function(e) {
        $('.js-mega-slider').slick('slickNext');

        e.preventDefault();
    });

    $('.adventures__image').fancybox();

    $('.adventures__left').on('click', '.adventures__info', function(e) {
        $('.adventures__popup').addClass('adventures__popup_active');

        $('.adventures__popup-close').on('click', function(e) {
            $('.adventures__popup').removeClass('adventures__popup_active');

            e.preventDefault();
        });

        e.preventDefault();
    });

    $('.adventures__nav').on('click', 'a', function(e) {

        var index = $('.adventures__nav li a').index($(this));

        var adventures = $('.adventures__left');

        if ($(this).hasClass('active')) {
            return false;
        }
        $('.adventures__left_active').removeClass('adventures__left_active');
        $('.adventures__nav li a.active').removeClass('active');

        $(this).addClass('active');
        adventures[index].classList.add('adventures__left_active');

        $('.adventures__left_active img').each(function(index, elem) {
            elem.src = elem.getAttribute("data-href");
        })

        e.preventDefault();
    });

    // CUSTOM SELECT

    $('.custom-select__selected').on('click', function() {
        $('.custom-select__options').toggleClass('custom-select__options_hidden');
    });

    $('.custom-select__option').on('click', function() {

        var selected = $('.custom-select__selected');


        $('.custom-select__option_hidden').removeClass('custom-select__option_hidden');

        $(this).addClass('custom-select__option_hidden');

        selected.text($(this).text());

        $('.custom-select__options').toggleClass('custom-select__options_hidden');


    });


    // STICKY NAV


    setTimeout(onScroll, 100);

    $(document).ready(function() {
        $(document).on("scroll", onScroll);

        $('.topline__link').on('click', function(e) {
            e.preventDefault();
            $(document).off("scroll");

            $('.topline__link').each(function() {
                $(this).removeClass('topline__link_active');
            })

            $(this).addClass('topline__link_active');

            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 120
            }, 500, 'swing', function() {
                $(document).on("scroll", function() {
                    onScroll(e);
                });
            });

        });
    });

    function onScroll(event) {

        if ($(document).scrollTop() <= $('#safari').offset().top) {
            $('.topline').css({
                'position': 'absolute',
                'background-color': 'transparent',
                'padding': '20px 0 0'
            });

        }
        if ($(document).scrollTop() >= $('#safari').offset().top) {
            $('.sticky-nav').slideDown();
            $('.topline').css({
                'position': 'fixed',
                'background-color': 'rgba(0,0,0, 0.8',
                'padding': '20px 0 10px'
            });
            $('.topline .topline__logo').css({
                'margin-top': '0'
            });

            $('.topline .topline__right').css({
                'margin-top': '0'
            });

            $('.topline .topline__nav').css({
                'margin-top': '10px'
            });
        }
        var scrollPosition = $(document).scrollTop();
        $('.topline__link').each(function() {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (scrollPosition + $(window).height() >= $('#footer').position().top) {
            		console.log('end');
            		$('.topline__link').removeClass("topline__link_active");
               		$('.topline__link_last').addClass("topline__link_active");
               		return;
            	}
            if (refElement.position().top <= scrollPosition + 250 && refElement.position().top + refElement.outerHeight() > scrollPosition) {
                $('.topline__link').removeClass("topline__link_active");
                currentLink.addClass("topline__link_active");
            } else {
                currentLink.removeClass("topline__link_active");
            }
        });
    }
});
