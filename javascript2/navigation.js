jQuery.noConflict();

(function($)
{
	$.fn.aetherNavigation = function(){

		var navigationButton = jQuery('.nav-button'),
			navigation = jQuery('.navigation'),
			navigationHeight = jQuery('.logo').height();
			windowWidth = jQuery(window).width();

		jQuery('#main-content section:first-child').css({
			"margin-top" : navigationHeight + 30 + "px"
		});

		if ( windowWidth > 960 ) {
	  		navigation.addClass('desktop');
	  		navigation.removeClass('mobile');
	  	}

	  	if ( windowWidth < 960 ) {
	  		navigation.addClass('mobile');
	  		navigation.removeClass('desktop');
	  	}


	  	jQuery(window).resize(function() {
			var ww = jQuery(window).width(),
				nav = jQuery('.navigation');

		  	if ( ww > 960 ) {
		  		nav.addClass('desktop');
		  		nav.removeClass('mobile');
		  	}

		  	if ( ww < 960 ) {
		  		nav.addClass('mobile');
		  		nav.removeClass('desktop');
		  	}
		});
	};

})(jQuery);