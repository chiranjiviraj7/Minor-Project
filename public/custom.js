$(document).ready(function () {
	$('.about').click(function () {
		if ($('.feedback').hasClass('active')) {
			$('.active').removeClass('active');
		}
		if ($('.feedback_box').hasClass('active')) {
			$('feedback_box.active').removeClass('active');
		}
		$('.about').toggleClass('active'),
			$('.text_about').hide(),
			$('.about_box').toggleClass('active'),

			$('.text_about').show(1000);
		aboutbox();
	});
	$('.feedback').click(function () {

		if ($('.about').hasClass('active')) {
			$('.active').removeClass('active');
		}
		if ($('.about_box').hasClass('active')) {
			$('about_box.active').removeClass('active');
		}
		$('.feedback').toggleClass('active'),
			$('.text_about').hide(),
			$('.feedback_box').toggleClass('active');
		$('.text_about').show(1000);
		feedbackbox();
	}); 

	function aboutbox() {
		var myElement = $('.about_box');

		if (myElement.hasClass('active')) {
			myElement.animate({
				left: '800px'
			}, 'slow');
		} else {
			myElement.stop().animate({
				left: '940px'
			}, 'slow');
		}
	}
	function feedbackbox() {
		var myelement = $('.feedback_box');

		if (myelement.hasClass('active')) {

			myelement.animate({
				left: '670px'
			}, 'slow');
		} else {
			myelement.stop().animate({
				left: '810px'
			}, 'slow');
		}
	}
});

