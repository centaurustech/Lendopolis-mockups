$(document).ready(function() {

	setInterval(function() { 
	
		if ($(document).scrollTop() > 500) { $('header.fixed').show('fast'); }
		else { $('header.fixed').hide(); }

		// if ($(document).scrollTop() > $('.box.toFix').offset().top) {
		// 	$('.box.toFix').addClass('fixed').removeClass('toFix');
		// }
			// console.log($('.box.fixed').offset().top);
		if ($(document).scrollTop() > $('.slide .topBracket').offset().top) {
			

		}
		$('.slide .topBracket').each(function() {
			if ($(this).offset().top < $(document).scrollTop()) {
				$(this).parent().find('.slider')
					.css('position', 'fixed')
					.css('width', $(this).width())
					.css('top', 80);
			} else {
				$(this).parent().find('.slider').removeAttr('style');
			}
		})



	}, 100 );

});






