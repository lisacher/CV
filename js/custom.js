$(document).ready(function() {
	
	// bg navbar change
	$(window).on("scroll",function(){
		var scrolldistance = $(window).scrollTop()
		var $header = $(".js-header");
		if (scrolldistance > 80) {
			$header.addClass('header--colored');
		}
		else{
			$header.removeClass('header--colored')
		}
	});

	// wow plugin
	if(screen.width > 768){
		new WOW().init();
	}
	 

	 // fancybox option
	 $('[data-fancybox]').fancybox({
	 	loop: true

	 });

	 // stellar plugin
	 if(screen.width > 768){
	 	$(window).stellar();
	}
});