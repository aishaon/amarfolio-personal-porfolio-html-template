jQuery(document).ready(function() {
 
 //Script for client carousel
  jQuery("#clients").owlCarousel({
 
	  autoPlay: 3000, //Set AutoPlay to 3 seconds
	  items : 1,
	  itemsDesktop : [1199,3],
	  itemsDesktopSmall : [979,3],
	  autoPlay: true,
	  pagination: true,
	  paginationNumbers: true,
 
  });

});


  	//Script for showing tooltip
$(document).ready(function() {

	$('[data-toggle="tooltip"]').tooltip()

});


// Smooth scrolling anchor links
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// This adds an offset in case the header is fixed
$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			var top_offset = 0;
			if ( $('.site-header').css('position') == 'fixed' ) {
				top_offset = $('.site-header').height();
			}
			 $('html,body').animate({
				 scrollTop: target.offset().top - top_offset
			}, 1000);
			return false;
		}
	}
});

