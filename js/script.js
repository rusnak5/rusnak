if ( $('body').hasClass('page-main') ) {
	$('.btn').on('click', function () {
		var top = $('.books').offset().top;
		$('body, html').stop().animate({scrollTop: top}, 1000);
	});

	function mediaSize() {
		if (window.matchMedia('(min-width: 768px)').matches) {
			$('.menu_h').show();
			$('body').css('overflow', 'auto');
			$('.menu__item_book').off();
			$('.menu__item_book').on('click', function () {
				var top = $('.books').offset().top;
				$('body, html').stop().animate({scrollTop: top}, 1000);
			});
		} else {
			$('.menu_h').hide();
			$('.menu__item_book').on('click', function () {
				$('.menu_h').hide();
				var top = $('.books').offset().top;
				$('body, html').stop().animate({scrollTop: top}, 1000, function() {
					$('body').css('overflow', 'auto');
				});
			});
		}
	}

	mediaSize();

	window.addEventListener('resize', mediaSize, false);
}

if ( $('body').hasClass('page-about') ) {
	$('.btn_about').on('click', function () {
		var top = $('.about').offset().top;
		$('body, html').stop().animate({scrollTop: top}, 1000);
	});

	function mediaSize1() {
		if (window.matchMedia('(min-width: 768px)').matches) {
			$('.menu_h').show();
			$('body').css('overflow', 'auto');
			$('.menu__item_about').off();
			$('.menu__item_about').on('click', function () {
				var top = $('.about').offset().top;
				$('body, html').stop().animate({scrollTop: top}, 1000);
			});
		} else {
			$('.menu_h').hide();
			$('.menu__item_about').on('click', function () {
				$('.menu_h').hide();
				var top = $('.about').offset().top;
				$('body, html').stop().animate({scrollTop: top}, 1000, function() {
					$('body').css('overflow', 'auto');
				});
			});
		}
	}

	mediaSize1();

	window.addEventListener('resize', mediaSize1, false);
}

$('.menu__item_resp').on('click', function() {
    $('.resp').fadeToggle(500);
	$('body').css('overflow', 'hidden');
});

$('.resp__close, .resp__wrapper').on('click', function() {
    $('.resp').fadeOut(0);
	$('body').css('overflow', 'auto');
});

$('.hamb').on('click', function() {
	$('.menu_h').addClass('active');
	$('body').css('overflow', 'hidden');
});

$('.menu__close').on('click', function() {
	$('.menu_h').removeClass('active');
	$('body').css('overflow', 'auto');
});