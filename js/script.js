if ( $('body').hasClass('page-main') ) {
	if (window.location.href.indexOf('rusnak.ml') != -1) {
		window.history.pushState('', '', '/');
	}

	$('.btn').on('click', function () {
		var top = $('.books').offset().top;
		$('body, html').stop().animate({scrollTop: top}, 1000);
	});

	function mediaSize() {
		if (window.matchMedia('(min-width: 768px)').matches) {
			$('body').css('overflow', 'auto');
			$('.menu__item_book').off();
			$('.menu__item_book').on('click', function () {
				var top = $('.books').offset().top;
				$('body, html').stop().animate({scrollTop: top}, 1000);
			});
		} else {
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
	if (window.location.href.indexOf('rusnak.ml') != -1) {
		window.history.pushState('', '', '/about');
	}

	$('.btn_about').on('click', function () {
		var top = $('.about').offset().top;
		$('body, html').stop().animate({scrollTop: top}, 1000);
	});

	function mediaSize() {
		if (window.matchMedia('(min-width: 768px)').matches) {
			$('body').css('overflow', 'auto');
			$('.menu__item_about').off();
			$('.menu__item_about').on('click', function () {
				var top = $('.about').offset().top;
				$('body, html').stop().animate({scrollTop: top}, 1000);
			});
		} else {
			$('.menu__item_about').on('click', function () {
				$('.menu_h').hide();
				var top = $('.about').offset().top;
				$('body, html').stop().animate({scrollTop: top}, 1000, function() {
					$('body').css('overflow', 'auto');
				});
			});
		}
	}

	mediaSize();

	window.addEventListener('resize', mediaSize, false);
}

$('.menu__item_resp').on('click', function() {
    $('.resp').fadeToggle(500);
	$('body').css('overflow', 'hidden');
});

$('.menu__item_feedback').on('click', function() {
	$('.feedback').fadeToggle(500);
	$('body').css('overflow', 'hidden');
});

$('.resp__close, .resp__wrapper, .feedback__close, .feedback__wrapper').on('click', function() {
    $('.resp, .feedback').fadeOut(0);
	$('body').css('overflow', 'auto');
});

$('.feedback__email-input').on('keyup', function() {
	if ($(this).val().length > 50) {
		$(this).val( $(this).val().slice(0, 50) );
	}

	$(this).removeClass('error');
	$(this).siblings('.feedback__email-error').hide();
});

$('.feedback__text-textarea').on('keyup', function() {
	// var regexText = /^[a-zA-Zа-яА-Я0-9\s]*$/;
	var regexText = /^[^#&]*$/;

	if ( regexText.test( $(this).val() ) ) {
		trueResultLength = $(this).val().length;
	}

	if ( !regexText.test( $(this).val() ) ) {
		$(this).val( $(this).val().slice(0,trueResultLength) );
	}

	$(this).removeClass('error');
	$(this).siblings('.feedback__textarea-error').hide();

	if ($(this).val().length > 750) {
		$(this).val( $(this).val().slice(0, 750) );
	}

	$('.feedback__counter').text( '' +
		'Cимволов осталось - ' +
		(750 - $(this).val().length));
});

$('.feedback__form').on('submit', function(e){
    e.preventDefault();

	var popupEmail = $('.feedback__email-input');
	var regexEmail = /\S+@\S+\.\S+/;
	var resultEmail = regexEmail.test( popupEmail.val() );
	var permissionEmail = false;

	if (resultEmail) {
		permissionEmail = true;
		$(popupEmail).removeClass('error');
		$(popupEmail).siblings('.feedback__email-error').hide();
	} else {
		$(popupEmail).addClass('error');
		$(popupEmail).siblings('.feedback__email-error').show();
	}

	var popupText = $('.feedback__text-textarea');
	var permissionText = false;

	if (popupText.val() != '') {
		permissionText = true;
		$(popupText).removeClass('error');
		$(popupText).siblings('.feedback__textarea-error').hide();
	} else {
		$(popupText).addClass('error');
		$(popupText).siblings('.feedback__textarea-error').show();
	}

	if (permissionEmail && permissionText) {
		var email = $('.feedback__email-input').val();
		var text = $('.feedback__text-textarea').val();
		var url = 'http://rusnak5.000webhostapp.com' + '?email=' + email + '&text=' + text;
		window.open(url,'policyWindow','height=300px,left=0,top=1,width=500px');
		$('.feedback').fadeOut(0);
		$('.feedback__email-input').val('');
		$('.feedback__text-textarea').val('');
		$('.feedback__counter').text('Cимволов осталось - 750');
	}
});

$('.hamb').on('click', function() {
	$('.menu_h').show();
	$('body').css('overflow', 'hidden');
});

$('.menu__close').on('click', function() {
	$('.menu_h').hide();
	$('body').css('overflow', 'auto');
});