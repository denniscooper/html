$(document).ready(function() {

	$('ul li:first-child').addClass('first');
	$('ul li:last-child').addClass('last');

	
	$('.menubtn').click(function(){
	
	 
	  $('#nav').toggleClass('opened');	
		$('body').toggleClass('ss');
	  return false;
		
	});
	
	
	$('#nav ul li:has(">ul")').prepend('<span class="arrow"></span>');
	
	
	$('#nav ul li .arrow').click(function () {
	
		$(this).siblings('ul').slideToggle();	
		 return false;
								
	});
	
	

});

	

function wResize() {
	$('.equalize').each(function() {
		var currentTallest = 0;
		$(this).children().each(function(i){
			if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
		});

		$(this).children().css({'height': currentTallest}); 
		
	
	});
	}
	
	$(window).resize(function() {
        wResize();
    });
	
	$(window).load(function() {
        wResize();
    });



    
	


