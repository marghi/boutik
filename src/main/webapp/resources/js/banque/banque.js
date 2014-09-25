function spinnerPlus(idInput){
	var  val=document.getElementById(idInput).value;
	val=Number(val)+1;
	document.getElementById(idInput).value=val;
}

function spinnerMoin(idInput){
	var val=document.getElementById(idInput).value;
	val=Number(val)-1;
	document.getElementById(idInput).value=val;
}
/**
 * permet d'afficher le formulaire de la modification d'une banque
 */
function actionUpdateBanque(){
	var banqueVar = document.getElementById('idComboBanque').value;
	AjaxRefresh('./afficherFormulaireModificationBanque?idBanque='+banqueVar, 'idParmetreBanqueDiv');
}

function actionNouvelleBanque(){
	AjaxRefresh('./afficherFormulaireCreationBanque', 'idParmetreBanqueDiv');
}

function actionEnregistrerNouvelleBanque(){
	FormAjaxRefresh('./actionEnregistrerNouvelleBanque', 'creationBanqueForm', 'AjaxContent');
}

function actionSupprimerBanque(){
	FormAjaxRefresh('./actionSupprimerBanque', 'modificationBanqueForm', 'AjaxContent');
}

function actionModificationBanque(){
		
	FormAjaxRefresh('./actionModificationBanque', 'modificationBanqueForm', 'AjaxContent');
}