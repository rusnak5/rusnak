if ( $('body').hasClass('page-main') ) {
	$('.btn').on('click', function () {
		var top = $('.books').offset().top;
		$('html').animate({scrollTop: top}, 1000);
	});

	$('.menu__item_book').on('click', function () {
		var top = $('.books').offset().top;
		$('html').animate({scrollTop: top}, 1000);
	});
}

if ( $('body').hasClass('page-about') ) {
	$('.btn_about').on('click', function () {
		var top = $('.about').offset().top;
		$('html').animate({scrollTop: top}, 1000);
	});

	$('.menu__item_about').on('click', function () {
		var top = $('.about').offset().top;
		$('html').animate({scrollTop: top}, 1000);
	});
}

$('.menu__item_resp').click(function() {
    $('.resp').fadeToggle(500);
});

$('.resp__popup').click(function() {
    $('.resp').fadeToggle(500);
});

$('.resp__close, .resp__wrapper').click(function() {
    $('.resp').fadeOut(0);
});