if ( $('body').hasClass('page-main') ) {
	window.history.pushState('', '', '/');

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
	window.history.pushState('', '', '/about');

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

window.history.pushState('object or string', 'Title', '/new-url');