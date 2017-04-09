$(document).ready(function(){
	
	$('.filtr-container').filterizr();
	
	$('a[data-rel^=lightcase]').lightcase({
		maxWidth: "1360",
		maxHeight: false
	});
	$("a[href*=#]").on("click", function(e){
		e.preventDefault();
	});
	
	
});