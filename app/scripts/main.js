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

});