$(document).ready(function() {

	setInterval(function() { 
	
		if ($(document).scrollTop() > 100) { $('header.fixed').show('fast'); }
		else { $('header.fixed').hide(); }

		$('.slide .topBracket').each(function() {
			if ($(this).offset().top < $(document).scrollTop()) {
				$(this).parent().find('.slider')
					.css('position', 'fixed')
					.css('width', $(this).width())
					.css('top', 80);
			} else {
				$(this).parent().find('.slider')
					.css('position', 'relative')
					.css('width', '100%')
					.css('top', 0);
			}
		})

	}, 200 );

});






