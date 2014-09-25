/**
 * fuction permer d'afficher une image selectionnéé
 */
function chargerImage() {
	var val = document.getElementsByName('logoFile');
	var entrepriseVar = document.getElementById('idComboEntreprise').value;
	UploadFileAjaxRefresh('./devantCheque/chargerImage?idEntreprise=' + entrepriseVar,
			'devantChequeForm', 'logoFile', 'divChargerSignature');
}
/**
 * fuction permer de redimentionne une image
 * 
 * @param photo
 */
function verifPoids_redimentionimage(photo) {
	var oImg = new Image();
	window.document.images["avatar"].src = photo;
	oImg.src = window.document.images["avatar"].src;
	var imageX = oImg.width;
	var imageY = oImg.height;
	imageX = 140;
	imageY = 40;

	document.images["avatar"].width = imageX;
	document.images["avatar"].height = imageY;

	var poidsImage = elemImage.fileSize;
	if (poidsImage > 300 * 1024) { // test si poids > 300 Ko
	// message d'alerte avec poids converti en Ko
		
		document.images["avatar"].width = 300;
		document.images["avatar"].height = 300;
		// remplacement par l'image d'origine
		elemImage.src = "nophoto.jpg";
	}
}
/**
 * fuction permer d'aller ou controller qui génére le pdf
 */
function actionImprimer() {
	recupData();
	var entrepriseVar = document.getElementById('entrepriseHidden').value;
	var banqueVar = document.getElementById('banqueHidden').value;
	var banqueImprVar = document.getElementById('banqueImpreHidden').value;
	var compteVar = document.getElementById('compteHidden').value;
	var numSerieVar = document.getElementById('numSerie').value;
	var sommeEnChiffreVar = document.getElementById('sommeEnChiffre').value;
	var sommeEnLettreVar = document.getElementById('idSommeEnLettre').value;
	var beneficiaireVar = document.getElementById('beneficiaireHidden').value;
	var faitAVar = document.getElementById('faitA').value;
	var dateVar = document.getElementById('date').value;
//	var isImprimerSignatureVar = document.getElementById('isImprimerSignature').value;
	var isArchiverVar = document.getElementById('isArchiverHiddent').value;
	
	window.open('./devantCheque/printPDF?entreprise=' + entrepriseVar
			+ '&banque='+ banqueVar + '&banqueImpre='+ banqueImprVar + '&numSerie=' + numSerieVar + '&sommeEnChiffre='
			+ sommeEnChiffreVar + '&sommeEnLettre='+sommeEnLettreVar+'&isArchiver=' + isArchiverVar
			+ '&beneficiaire=' + beneficiaireVar + '&faitA=' + faitAVar
			+ '&date=' + dateVar + '&compte='+compteVar, '_blank');
}
/**
 * fuction permer de convert un nombre à une lettre
 * 
 * @param nombre
 */
function converNumberToLettre(nombre) {
	var strLetrre = ConvNumberLetter_fr(nombre, true);
	
	
	document.getElementById('idSommeEnLettre').value = strLetrre;
}

function onchangeDecimale(){
	
	var nombre = document.getElementById('sommeEnChiffre').value;
	var strNombre = new String(nombre) ;
	
	var array = new Array() ;
	array = strNombre.split(".");
	
	if (array.length > 1){
	    var newNumber = array[1].substring(0,2);	
	    document.getElementById('sommeEnChiffre').value = array[0].concat(".").concat(newNumber);
	}else{
		document.getElementById('sommeEnChiffre').value = nombre;
	}
	converNumberToLettre(document.getElementById('sommeEnChiffre').value);
	
}

/**
 * 
 * action Imprimer la Signature
 */
function actionImprimerSignature(checked) {
	if (checked) {
		jQuery('#divChargerSignature').show();
		document.getElementById('isImprimerSignatureHiddent').value = true;
	} else {
		jQuery('#divChargerSignature').hide();
		document.getElementById('isImprimerSignatureHiddent').value = false;
	}
	
}

function actionArchive(checked2){
	
	if(checked2){
		jQuery('#idBanqueImpre').hide();
		jQuery('#idBnauqeDiv').show();
		jQuery('#idbanqueArchive').show();
		jQuery('#idCompteBnauqeDiv').show();
		document.getElementById('isArchiverHiddent').value=true;
		
		
		
		
	}else{
		jQuery('#idBanqueImpre').show();
		jQuery('#idBnauqeDiv').hide();
		jQuery('#idbanqueArchive').hide();
		jQuery('#idCompteBnauqeDiv').hide();
		document.getElementById('isArchiverHiddent').value=false;
		
	}
}

/**
 * recuperer data form
 */
function recupData() {
	var entrepriseVar = document.getElementById('idComboEntreprise').value;
	document.getElementById('entrepriseHidden').value = entrepriseVar;
	
	var banqueVar = document.getElementById('idComboBanque').value;
	document.getElementById('banqueHidden').value = banqueVar;
	
	var banqueImpVar = document.getElementById('idComboBanqueImpr').value;
	document.getElementById('banqueImpreHidden').value = banqueImpVar;

	var compteVar = document.getElementById('idComboCompteBanque').value;
	document.getElementById('compteHidden').value = compteVar;

	var beneficiaireVar = document.getElementById('idComboBeneficiaire').value;
	document.getElementById('beneficiaireHidden').value = beneficiaireVar;
}
/**
 * afficher les banques de l'Entreprise selectionnée
 */
function afficherBanqueEntreprise() {

	
	recupData();
	FormAjaxRefresh('./devantCheque/devantChequeBanque',
			'devantChequeForm', 'idBarr');
	
	
//	jQuery('#idCompteBnauqeDiv').hide();
//	jQuery('#idbanqueArchive').hide();

}
/**
 * 
 */
function afficherComptesBancaire() {

	recupData();
	FormAjaxRefresh('./devantCheque/devantChequeCompteBanque',
			'devantChequeForm', 'idBarr');

//	jQuery('#idCompteBnauqeDiv').hide();
//	jQuery('#idbanqueArchive').hide();


}


