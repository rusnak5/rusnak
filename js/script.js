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

$('.menu__item_feedback').click(function() {
	$('.feedback').fadeToggle(500);
});

$('.resp__close, .resp__wrapper, .feedback__close, .feedback__wrapper').click(function() {
    $('.resp, .feedback').fadeOut(0);
});

$('.feedback__form').on('submit', function(e){
    e.preventDefault();
    var subject = $('.feedback__subject').val();
    var text = $('.feedback__text').val();
    var url = 'http://rusnak5.000webhostapp.com' + '?subject=' + subject + '&text=' + text;
    // document.location.href = url;
	window.open(url,'policyWindow','height=300px,left=0,top=1,width=500px');
});
