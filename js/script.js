$('.header').on('click','.btn', function () {
	var top = $('.second').offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});

$('.header').on('click','.menu__item_book', function () {
	var top = $('.second').offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});