var LoginHandler = function(baseHomeUrl, passwordResetStep1Url, passwordResetStep2Url) {
	
	this.baseHomeUrl = baseHomeUrl;
	this.passwordResetStep1Url = passwordResetStep1Url;
	this.passwordResetStep2Url = passwordResetStep2Url;
	
	var current = this;
	
	this.resetModal = function() {
		current.loadify();
		$('#pass_step1').validate().resetForm();
		$("#pass_username, #pass_numcompte").val("");
		$("#pass_step1").show();
		$("#pass_step2").hide();
		$("#pass_error_step2").hide();
		$("#pass_error_step1").hide();
		$("#step1Header").show();
	};

	this.togglePassDivs = function() {
		$("#pass_username, #pass_numcompte").val("");
		$("#pass_step1").hide();
		$("#pass_confirm").show();
	};

	this.toggleErrorDivs = function() {
		$("#pass_username, #pass_numcompte").val("");
		$("#pass_step1").hide();
		$("#pass_error").show();
	};

	this.serverRespondedStep1 = function(data, textStatus, xhr) {
		if (xhr.status == 200) {
			current.transitionStep1ToStep2();
		} else {
			current.transitionStep1ToError();
		}
	};

	this.serverRespondedStep2 = function(data, textStatus, xhr) {
		if (xhr.status == 200) {
			current.transitionStep2ToNextPage();
		} else {
			current.transitionStep2ToError();
		}
	};

	this.transitionStep1ToError = function() {
		current.loadify(1);
		window.setTimeout(function() {
				current.loadify();
				$("#pass_step1 input").val("");
				$("#step1Header").hide();
				$("#pass_error_step1").show();
			}, 1e3);

	};

	this.loadify = function (state) {
		if (state) {
			$("#btn-confirm_pop").attr('disabled', "disabled");
			$("#btn-confirm_pop i").hide();
			$("#loading-indicator").show();
		} else {
			$("#btn-confirm_pop").removeAttr('disabled');
			$("#btn-confirm_pop i").show();
			$("#loading-indicator").hide();
		}

	};
	
	this.transitionStep1ToStep2 = function() {
		$("#pass_step1").fadeOut(function() {

			$("#pass_step2").fadeIn();
			$('#pass_step2 input').val("");
			$('#showPassword').attr('checked', false);

			// $('#reNewPassword, #newPassword').attr("type","password");

			var input = document.getElementById('newPassword');
			var input2 = input.cloneNode(false);
			input2.type = 'password';
			input.parentNode.replaceChild(input2, input);

			var input = document.getElementById('reNewPassword');
			var input2 = input.cloneNode(false);
			input2.type = 'password';
			input.parentNode.replaceChild(input2, input);

			$("#legendtext").empty() ; 
			$("#legenderrors").hide();
		});
	};

	this.transitionStep2ToError = function(data, textStatus, xhr) {
		$("#legendtext").html(data.responseText);
		$("#legenderrors").show();
	};

	this.transitionStep2ToNextPage = function() {
		window.location = current.baseHomeUrl;
	};
	
	this.successReset = function(data, textStatus, xhr) {
		if (xhr.status == 200) {
			current.togglePassDivs();
		} else {
			current.toggleErrorDivs();
		}
	};
	
	this.errorReset = function (data, httpStatus) {
		current.toggleErrorDivs();
	};
	
	this.showAndHidePassword = function() {
		// * validation
		$('#showPassword').change(function() {
			var isChecked = $(this).prop('checked');
			if (isChecked) {
				// $('#reNewPassword, #newPassword').attr("type","text");

				var myInput = document.getElementById('newPassword');
				var oldHtml = myInput.outerHTML;
				var text = myInput.value;
				var newHtml = oldHtml.replace("password", "text");
				myInput.outerHTML = newHtml;
				myInput = document.getElementById('newPassword');
				myInput.value = text;

				var myInput = document.getElementById('reNewPassword');
				var oldHtml = myInput.outerHTML;
				var text = myInput.value;
				var newHtml = oldHtml.replace("password", "text");
				myInput.outerHTML = newHtml;
				myInput = document.getElementById('reNewPassword');
				myInput.value = text;
			} else {
				// $('#reNewPassword, #newPassword').attr("type","password");

				var myInput = document.getElementById('newPassword');
				var oldHtml = myInput.outerHTML;
				var text = myInput.value;
				var newHtml = oldHtml.replace("text", "password");
				myInput.outerHTML = newHtml;
				myInput = document.getElementById('newPassword');
				myInput.value = text;

				var myInput = document.getElementById('reNewPassword');
				var oldHtml = myInput.outerHTML;
				var text = myInput.value;
				var newHtml = oldHtml.replace("text", "password");
				myInput.outerHTML = newHtml;
				myInput = document.getElementById('reNewPassword');
				myInput.value = text;
			}
		});
	};
	
	this.initLoginFormValidation = function() {
		/** Validation login **/
		$('#login-form').validate({
			onkeyup : false,
			errorClass : 'error',
			validClass : 'valid',
			rules : {
				j_username : {
					required : true,
					minlength : 3
				},
				j_password : {
					required : true,
					minlength : 3
				}
			},
			highlight : function(element) {
				$(element).closest('div').addClass("f_error");
			},
			unhighlight : function(element) {
				$(element).closest('div').removeClass("f_error");
			},
			errorPlacement : function(error, element) {
				$(element).closest('div').append(error);
			}
		});
	};
	
	this.initStep1FormValidation = function() {
		$('#pass_step1').validate({
			onkeyup : false,
			errorClass : 'help-inline',
			validClass : 'valid',
			submitHandler : function(form) {
				current.loadify(1);
				$.ajax({
					type : "POST",
					url : current.passwordResetStep1Url,
					success : current.serverRespondedStep1,
					error : current.transitionStep1ToError,
					data : {
						identifiant : form.elements["pass_username"].value,
						numcompte : form.elements["pass_numcompte"].value
					}
				});
			},
			rules : {
				pass_username : {
					required : true,
					minlength : 3
				},
				pass_numcompte: {
					required : true,
					minlength : 16 ,
					maxlength : 16 
				}
			},
			messages: {
				pass_numcompte: {
					minlength: "Saisir le compte sur 16 positions."
	    		}
			},
			highlight : function(element) {
				$(element).closest('div').addClass("error");
			},
			unhighlight : function(element) {
				$(element).closest('div').removeClass("error");
			},
			errorPlacement : function(error, element) {
				$(element).closest('div').append(error);
			}
		});
	};
	
	this.initStep2FormValidation = function() {
		// Validation Step 2
		// ****** Step 2 validation du token (mot de passe oublié)
		$('#pass_step2').validate({
			onkeyup : false,
			errorClass : 'help-inline',
			validClass : 'valid',
			submitHandler : function(form) {
				current.loadify(1);
				$.ajax({
					type : "POST",
					url : current.passwordResetStep2Url,
					success : current.serverRespondedStep2,
					error : current.transitionStep2ToError,
					data : {
						token : form.elements["token"].value,
						newPassword : form.elements["newPassword"].value,
						reNewPassword : form.elements["reNewPassword"].value
					}
				});
			},
			rules : {
				token : {
					required : true,
					minlength : 9,
					maxlength : 9
				},
				newPassword : {
					required : true
				},
				reNewPassword : {
					required : true,
					equalTo : "#newPassword"
				}
			},
			highlight : function(element) {
				$(element).closest('div').addClass("error");
			},
			unhighlight : function(element) {
				$(element).closest('div').removeClass("error");
			},
			errorPlacement : function(error, element) {
				$(element).closest('div').append(error);
			}
		});
	};
	
	this.initModule = function() {
		/** Login focus onload **/
		$('#j_username').focus();
		
		// checkbox handler
		$('#showPassword').attr('checked', false);
		
		$("[data-hide]").on("click", function() {
			$("." + $(this).attr("data-hide")).hide();
		});
		
		$("#resetPassword").click(current.resetModal);
		
		this.initLoginFormValidation();
		this.initStep1FormValidation();
		this.initStep2FormValidation();
		
		this.showAndHidePassword();
		
		this.resetModal();
		
		//Analytics
		ga('set', 'dimension1', 'anonyme');
	};
};
