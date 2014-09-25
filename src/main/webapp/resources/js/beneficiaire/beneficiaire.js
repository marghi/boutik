function actionUpdateBeneficiaire(){
	var beneficiaireVar = document.getElementById('idComboBeneficiaire').value;
	AjaxRefresh('./afficherFormulaireModificationBeneficiaire?idBeneficiaire='+beneficiaireVar, 'idParametreBeneficiaireDiv');
}

function actionNouveauBeneficiaire(){
	AjaxRefresh('./afficherFormulaireCreationBeneficiaire', 'idParametreBeneficiaireDiv');
}

function actionEnregistrerNouveauBeneficiaire(){
	FormAjaxRefresh('./actionEnregistrerNouveauBeneficiaire', 'creationBeneficiaireForm', 'AjaxContent');
}

function actionSupprimerBeneficiaire(){
	
	FormAjaxRefresh('./actionSupprimerBeneficiaire', 'creationBeneficiaireForm', 'AjaxContent');
}

function actionModificationBeneficiaire(){
		FormAjaxRefresh('./actionModificationBeneficiaire', 'creationBeneficiaireForm', 'AjaxContent');

}

