$(function () {
	$('button').click(function () {
		var btn = $(this).find('.fa');

		$('.content').hide(500);
		$('button').find('.fa').removeClass('fa-minus').addClass('fa-plus');
		$('.text').css('color', 'white');

		if (btn.hasClass('fa-plus')) {
			btn.removeClass('fa-plus').addClass('fa-minus');
			$(this).parent().next().show(500);
			$(this).next().css('color', '#BDE453');
		}
		else {
			btn.removeClass('fa-minus').addClass('fa-plus');
			$(this).parent().next().hide(500);
			$(this).next().css('color', 'white');
		}
	})
})