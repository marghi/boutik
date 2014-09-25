/*!
 * Librairie "maison" afin de faciliter le rafraichissement par partie
 *
 * 
 * Date: 25/07/2011
 */


// Variable mise en place pour eviter les bug de la double pop-up lors de l'upload d'un logo
uploadFileFinished = true;

/**
 * cette fonction permet de remplacer le contenu d'une division
 * (destinationDivId) par le résultat d'un appel serveur (url)
 * 
 * @param url,
 *            l'url de l'appel serveur qui fournira le code HMTL à afficher
 * @param destinationDivId,
 *            la division dont on va remplacer le contenu
 */
function AjaxRefresh(url, destinationDivId) {
	$(function() {
		$.post(url, function(data) {
			setInnerHTML(document.getElementById(destinationDivId), data);
		});
	});
}


/**
 * cette fonction permet de remplacer le contenu d'une division
 * (destinationDivId) par le résultat d'un appel serveur (url)
 * avec les parametres donnes.
 * 
 * Mis en place pour regler les problemes d'encodage lors du passage des 
 * parametres par url.
 * 
 * @param url,
 *            l'url de l'appel serveur qui fournira le code HMTL à afficher
 * @param parametres Les parametres.
 * @param destinationDivId,
 *            la division dont on va remplacer le contenu
 */
function AjaxRefreshWithParam(url, parametres ,destinationDivId) {
	$(function() {
		$.post(url, parametres, function(data) {
			setInnerHTML(document.getElementById(destinationDivId), data);
		});
	});
}

/**
 * cette fonction permet de remplacer le contenu d'une division
 * (destinationDivId) par le résultat d'un appel serveur (url) lors de la
 * soumission d'un formulaire
 * 
 * IMPORTANT : ne pas utiliser le "submit" du formulaire mais appeler
 * l'évènement "onClick" du bouton
 * 
 * @param url,
 *            l'url de l'appel serveur qui fournira le code HMTL à afficher
 * @param formName,
 *            le nom du formulaire à soumettre
 * @param destinationDivId,
 *            la division dont on va remplacer le contenu
 */
function FormAjaxRefresh(url, formName, destinationDivId) {
	$(function() {
		$.post(url, construireRequest(formName),function(data) {
			setInnerHTML(document.getElementById(destinationDivId), data);
		});
	});	
}

/**
 * cette fonction permet de remplacer le contenu d'une division
 * (destinationDivId) par le résultat d'un appel serveur (url) lors de la
 * soumission d'un formulaire avec un fichier a soumettre.
 * 
 * IMPORTANT : ne pas utiliser le "submit" du formulaire mais appeler
 * l'évènement "onClick" du bouton
 * 
 * @param url,
 *            l'url de l'appel serveur qui fournira le code HMTL à afficher
 * @param formName,
 *            le nom du formulaire à soumettre
 * @param fileId, 
 * 			  id du fichier a envoyer
 * @param destinationDivId,
 *            la division dont on va remplacer le contenu
 */
function UploadFileAjaxRefresh(url, formName, fileId ,destinationDivId) {
	uploadFileFinished = false;
	 $.ajaxFileUpload({
         url: url,
         secureuri: false,
         fileElementId: fileId,
         dataType: 'text',
         data: construireRequestTableau(formName),
         success: function (data, status){
        	 uploadFileFinished = true;
        	 setInnerHTML(document.getElementById(destinationDivId), data);
         }
     });
}


/**
 * cette fonction permet de faire un traitement et d'informer l'utilisateur par
 * un simpel message d'alerte
 * 
 * @param url,
 *            l'url de l'appel serveur qui fournira le code HMTL à afficher
 */
function AjaxSucessPopup(url) {
	$(function() {
		$.post(url, function(data) {
			var divScript = document.getElementById('refreshScript');
			divScript.innerHTML = data;
			 var AllScripts=divScript.getElementsByTagName("script")
			  for (var i=0; i<AllScripts.length; i++) {
			     var s=AllScripts[i];
			     if (s.src && s.src!="") {
			        // Précédement asynchrone, mis en synchrone pour éviter des
					// problèmes de dépendances de scripts
			        eval(getFileContent(s.src))
			     }
			     else {
			        eval(s.innerHTML)
			     }
			  }
		});
	});
}

/**
 * cree une datatable (JQuery)
 * 
 * @param tableId
 *            la division du tableau
 * @param urlForData
 *            l'url pour aller rechercher les données
 */
function CreateDataTable(tableId, urlForData){
	tab = tableId;
	tableId = '#'+tableId;
	$(document).ready(function() {
		$(tableId).dataTable({
			"bFilter": false,
			"bProcessing": true,
			"bServerSide": true,
			"bScrollCollapse": true,
			"bJQueryUI": true, 
			"sPaginationType" : "two_button",
			"sAjaxSource": urlForData,
			"oLanguage": {
				"sUrl": "../js/dataTables.french.txt"
			},
			"fnServerData": function ( sSource, aoData, fnCallback ) {
				$.ajax( {
					"dataType": 'json', 
					"type": "GET", 
					"url": sSource,
					"data": aoData, 
					"success": fnCallback
				} );
			},
			"fnDrawCallback": function() {
				datatableClick();
			}
		});
	});
}


function datatableClick() {
	
	$("#tableEntreprise tbody").delegate("tr", "click", function() {
		$('html,body').scrollTop(0);
		  var idEntreprise = $(".idEntreprise", this).text();
		  
		recupListBanque(idEntreprise);
	});
	$("#tableEntreprise tbody").delegate("tr", "dblclick", function() {
		$('html,body').scrollTop(0);
		  var idEntreprise = $(".idEntreprise", this).text();
		  AjaxRefresh('./entreprise/editeEntreprise.html?idEntreprise='+idEntreprise, 'AjaxContent');
	});
	$("#tableBanqueEntreprise tbody").delegate("tr", "dblclick", function() {
		$('html,body').scrollTop(0);
		  var idCompteBanqueEntreprise = $(".compteBanqueEntrepriseId", this).text();
		  AjaxRefresh('./entreprise/editCompteEntreprise.html?compteBanqueEntrepriseId='+idCompteBanqueEntreprise, 'AjaxContent');

	});
}


/**
 * insert le HTML généré dans la div et exécute le JS
 * 
 * @param divContent
 * @param HTML
 */
function setInnerHTML(divContent, HTML) {
//  divContent.innerHTML=HTML; 
//
//  var AllScripts=divContent.getElementsByTagName("script");
//  for (var i=0; i<AllScripts.length; i++) {
//     var s=AllScripts[i];
//     if (s.src && s.src!="") {
//        // Précédement asynchrone, mis en synchrone pour éviter des problèmes de
//		// dépendances de scripts
//        eval(getFileContent(s.src));
//     }
//     else {
//        eval(s.innerHTML);
//     }
//  }

divContent.innerHTML=HTML; 
var All=divContent.getElementsByTagName("*");
for (var i=0; i<All.length; i++) {
  All[i].id=All[i].getAttribute("id")
  All[i].name=All[i].getAttribute("name")
  All[i].className=All[i].getAttribute("class")
}
var AllScripts=divContent.getElementsByTagName("script")
for (var i=0; i<AllScripts.length; i++) {
   var s=AllScripts[i];
   if (s.src && s.src!="") {
      // Précédement asynchrone, mis en synchrone pour éviter des problèmes de
		// dépendances de scripts
      eval(getFileContent(s.src))
   }
   else {
      eval(s.innerHTML)
   }
}

}

/**
 * reconstruit la requete à partir des element du formulaires
 * 
 * @param formName
 *            le nom du formulaire
 * @returns {String} la requête
 */
function construireRequest(formName) {

  var form = document.forms[formName];
  var qstr = "";
  // fonction interne permettant de construire la requete
  function GetElemValue(name, value) {
	    qstr += (qstr.length > 0 ? "&" : "")
	    		+ encodeURIComponent(name) + "="
	    		+ encodeURIComponent(value ? value : "");
				// + escape(value ? value : "").replace(/\n/g, "%0D");
	}

  
  // elements du formulaire
  var elemArray = form.elements;

  for (var i = 0; i < elemArray.length; i++) {
      var element = elemArray[i];
      var elemType = element.type.toLowerCase();
      var elemName = element.name;

      if (elemName) {
    	  switch(elemType){
			case "text":
			case "image":
			case "hidden":
			case "password":
			case "button":
			case "reset":
			case "submit":
			case "file":
			case "textarea":
				GetElemValue(elemName, element.value);
				break;
	
			case "checkbox":
				if(element.checked){
					 GetElemValue(elemName, element.value ? element.value : "On");
				}
				break;	
			case "radio":
				if(element.checked){
					 GetElemValue(elemName, element.value);
				}
				break;			
			case "select":
				for (var j = 0; j < element.options.length; j++) {
	                  var option = element.options[j];
	                  if (option.selected){
	                      GetElemValue(elemName, option.value ? option.value : option.text);
	                  }

	             }
				break;	
    	  }
      }	
  }
  return qstr;
}

/**
 * reconstruit la requete à partir des element du formulaires
 * sous la forme d'un tableau associatif : [name => value]
 * 
 * @param formName
 *            le nom du formulaire
 * @returns {Array} la requête
 */
function construireRequestTableau(formName) {

  var form = document.forms[formName];
  var tab = new Array();
  // fonction interne permettant de construire la requete
  function GetElemValue(name, value) {
	    tab[name] =  value ? value : "";
  }

  
  // elements du formulaire
  var elemArray = form.elements;

  for (var i = 0; i < elemArray.length; i++) {
      var element = elemArray[i];
      var elemType = element.type.toLowerCase();
      var elemName = element.name;

      if (elemName) {
    	  switch(elemType){
			case "text":
			case "image":
			case "hidden":
			case "password":
			case "button":
			case "reset":
			case "submit":
			case "textarea":
	            GetElemValue(elemName, element.value);
				break;
	
			case "checkbox":
				if(element.checked){
					 GetElemValue(elemName, element.value ? element.value : "On");
				}
				break;	
			case "radio":
				if(element.checked){
					 GetElemValue(elemName, element.value);
				}
				break;			
			case "select":
				for (var j = 0; j < element.options.length; j++) {
	                  var option = element.options[j];
	                  if (option.selected){
	                      GetElemValue(elemName, option.value ? option.value : option.text);
	                  }

	             }
				break;	
    	  }
      }	
  }
  return tab;
}

/**
 * function permet de cacher le div d'un button
 */
function cacheButon(idDiv){
	idDiv = '#'+idDiv;
    $(idDiv).hide();
}
/**
 * fonction qui return Milliseconds de timesStim  
 * @returns
 */
function timesStim(){
	var d = new Date();
	return  d.getMilliseconds();
	
	
}

/**
 * Désactive tous les champs d'un formulaire.
 * Sauf les boutons.
 * @param form
 */
function freeze(formName){
	var form = document.forms[formName];
	for(var i = 0; i < form.length; i++){
		if(form.elements[i].type != "button"){
			form.elements[i].disabled = true;
		}
	}
}

/**
 * Affiche une popup avec un message.
 * @param Le message a afficher.
 */
function afficherSuccesPopup(message){
	setInnerHTML(document.getElementById('successPopupDiv'),message);
	
	$.modal($("#successPopup"),{
		closeClass: 'successPopup-close',
		overlayCss: {backgroundColor: "#FFFFFF"} 
	});
}

/**
 * Affiche une popup avec un message.
 * @param Le message a afficher.
 * @param La fonction a appelé lorsque l'utilisateur clique sur oui.
 */
function afficherConfirmPopup(message, callback) {
	$('#confirmPopup').modal({
		closeClass: 'confirmPopup-close',
		overlayCss: {backgroundColor: "#FFFFFF"},  
		onShow: function (dialog) {
			var modal = this;

			setInnerHTML(document.getElementById('confirmPopupDiv'),message);

			// if the user clicks "yes"
			$('#confirmPopupOui', dialog.data[0]).click(function () {
				// call the callback
				if ($.isFunction(callback)) {
					callback.apply();
				}
				// close the dialog
				modal.close(); // or $.modal.close();
			});
		}
	});
}