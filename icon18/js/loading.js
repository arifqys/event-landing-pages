//Refresh back to top
$(window).on('beforeunload', function(){
	
  $(window).scrollTop(0);
	
});

$(document).ready(function() {
 
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1700);
 
});