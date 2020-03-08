$('.btn').on('click', function () {
	var top = $('.books').offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});

$('.menu__item_book').on('click', function () {
	var top = $('.books').offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});

$('.menu__item_about').on('click', function () {
	var top = $('.about').offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});
