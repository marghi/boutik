var AWBRestErrorHandling = (function () {
	var AWBRestErrorHandling = function (home, error404, error500) 
    {
		this.home = home;
		this.error404 = error404;
		this.error500 = error500;
		
		this.getForwardError = function(jqXHR) {
			if (jqXHR.status == 419) {
				window.location.href = this.home;
			} if (jqXHR.status == 417) {
				window.location.href = this.home;
			} else if (jqXHR.status == 404) {
				window.location.href = this.error404;
			} else if (jqXHR.status == 500) {
				window.location.href = this.error500;
			} else if (jqXHR.status == 302) {
				window.location.href = this.home;
			}
		};
    };

	return AWBRestErrorHandling;
    
})();
