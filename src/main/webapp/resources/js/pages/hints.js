var h=0;
$(document).ready(function () {
	
	/* Hints */
	var num_hints=$(".ui-pnotify-text span").size();
	$("#hint .icon-remove").click(function() {
		$("#hint").hide();
	});
	$("#hint .icon-arrow-right").click(function() {
		if(h==0){
			h=1;
		}
		if(num_hints >h){
			$(".icon-arrow-left").css("opacity","15");
			$(".ui-pnotify-text span").hide();
			$(".ui-pnotify-text #hint-" + h).show();
			h++;
		}else if (h==num_hints) {
			$(".icon-arrow-right").css("opacity","0.5");
		}
	});
	
	$("#hint .icon-arrow-left").click(function() {
		if(h > 0){
			$(".icon-arrow-right").css("opacity","1");
			--h;
			$(".ui-pnotify-text span").hide();
			$(".ui-pnotify-text #hint-" + h).show();
		}else if(h==0) {
			$(".icon-arrow-left").css("opacity","0.5");
		}
	});
});