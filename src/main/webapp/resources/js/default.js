(function($){
	
//DatePicker
	datePicker = function() {
		$( "#idDateProj" ).datepicker({
			changeMonth: true,
			changeYear: true,
			minDate: +1  
		});
		$("#idDateProj").datepicker( "option",$.datepicker.regional[ "fr" ] );		
	};
	
	//DatePicker pour la date des arrets
	datePickerArret = function() {
	
		$( "#idDateDebArret" ).datepicker({
			changeMonth: true,
			changeYear: true,
			minDate: "-150y" 
		});
		$("#idDateDebArret").datepicker( "option",$.datepicker.regional[ "fr" ] );	
		
		$( "#idDateTheoRepri" ).datepicker({
			changeMonth: true,
			changeYear: true,
			minDate: "-150y" 
		});
		$("#idDateTheoRepri").datepicker( "option",$.datepicker.regional[ "fr" ] );
	};
	
	//DatePicker pour les dates de reprise, de prolongation et de fin de prolongation
	datePickeCMSuivi = function() {
	
		$( "#idDateReprise" ).datepicker({
			changeMonth: true,
			changeYear: true,
			minDate: "-150y"
		});
		$("#idDateReprise").datepicker( "option",$.datepicker.regional[ "fr" ] );	
		
		$( "#idDateDebutProlongation" ).datepicker({
			changeMonth: true,
			changeYear: true,
			minDate: "-150y" 
		});
		$("#idDateDebutProlongation").datepicker( "option",$.datepicker.regional[ "fr" ] );
		
		$( "#idDateTheoriqueFinProlongation" ).datepicker({
			changeMonth: true,
			changeYear: true,
			minDate: "-150y" 
		});
		$("#idDateTheoriqueFinProlongation").datepicker( "option",$.datepicker.regional[ "fr" ] );	
	};
	
		//DatePicker pour la date théorique de reprise du travail
	datePickeTheorique = function() {		
		$( "#idDateTheoRepri" ).datepicker({
			changeMonth: true,
			changeYear: true
		});
		$("#idDateTheoRepri").datepicker( "option",$.datepicker.regional[ "fr" ] );		
	};
	//DatePicker
	datePickerProchaineEtape = function() {
	
		$( "#idDateProchaineEtapeSuiviSinistre" ).datepicker({
			changeMonth: true,
			changeYear: true
		});
		$("#idDateProchaineEtapeSuiviSinistre").datepicker( "option",$.datepicker.regional[ "fr" ] );		
	};
	
	//DatePicker création d'un dossier
	datePickeSalarieEtEmployeur = function() {
	
		$( "#idDateNaissanceSalarie" ).datepicker({
			changeMonth: true,
			changeYear: true
		});
		$("#idDateNaissanceSalarie").datepicker( "option",$.datepicker.regional[ "fr" ] );	
		
	};
	
	//DatePicker pour la date théorique de reprise dans l'analyse des compléments d'information
	datePickeranalyseRetourCI = function() {
	
		$( "#idDateTheoriqueReprise" ).datepicker({
			changeMonth: true,
			changeYear: true
		});
		$("#idDateTheoriqueReprise").datepicker( "option",$.datepicker.regional[ "fr" ] );	
		
	};
	
	//DatePicker pour l'analyse du CM de suivi
	datePickerAnalyseCMSuivi = function() {
	
		$( "#idDateTheoriqueReprise" ).datepicker({
			changeMonth: true,
			changeYear: true
		});
		$("#idDateTheoriqueReprise").datepicker( "option",$.datepicker.regional[ "fr" ] );	
		
	};
	
	// Button
	buttonAT = function() {
		$(".buttonAT").button();	
	};
	
	// Radio Button
	buttonRadio = function() {
		$(".buttonRadio").buttonset();
	};
	
	// Pop-up
	$.fx.speeds._default = 400;
	popUp = function() {
		$(".buttonDialog").dialog({
			autoOpen: false,
			show: "explode",
			hide: "explode",
				modal: true,
				buttons: {
					Fermer: function() {
						$( this ).dialog( "close" );
					}
				}
		});
	};
	
	//scrollTop
	scrollTop = function(){
	  $('.scrollTop').click(function() {
	    $('html,body').scrollTop(0);
	  });
	};
			
	//ActionBar
	actionBar = function(){
	  $('#actionAdd').click(function() {
		  $('html,body').scrollTop(0);
		  document.getElementById('actionAdd').style.display = 'none';
	  });
	};
	
})(jQuery);