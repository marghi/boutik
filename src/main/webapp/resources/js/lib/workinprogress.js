
$(document).ready(function(){
	$('#header').append('<div class="magic-button"/>');
	/*$('#header').append('<div style="position:absolute;right:40px;"><style id="magic-style" '
			+'style="display:block;opacity:0.5;background-color:#888;color:#000;width:300px;">'
			+'h1{color:#eee;\nsdfsdfs;}'			
			+'</style></div>');*/
	
	$('.magic-button').dblclick(function(){
		$('.zone-marketing').attr("contenteditable","true");
		$('html').attr("style","cursor:text !important;");
	});
	
	$('.magic-button').click(function(){
		$('.zone-marketing').attr("contenteditable","false");
		$('html').removeAttr("style");
	});
	
	
});
