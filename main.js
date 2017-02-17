jQuery(document).ready(function() {
	//
});

jQuery(window).scroll(function() {
	var s;
	s = jQuery(document).scrollTop();
	jQuery('.wd-header').removeClass('active');
	clearTimeout(jQuery.data(this, 'scrollTimer'));
	if(s > 60) {
	    jQuery.data(this, 'scrollTimer', setTimeout(function() {
	        jQuery('.wd-header').addClass('active');
	    }, 500));
	}
	else if (s < 60) {
		jQuery('.wd-header').removeClass('active');
	}

});