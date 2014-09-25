function actionUpdateCompteUtilisateur(){
	var CompteUtilisateurVar = document.getElementById('idComboCompteUtilisateur').value;
	AjaxRefresh('./afficherFormulaireModificationCompteUtilisateur?idCompteUtilisateur='+CompteUtilisateurVar, 'idParametreCompteUtilisateurDiv');
}

function actionNouveauCompteUtilisateur(){
	AjaxRefresh('./afficherFormulaireCreationCompteUtilisateur', 'idParametreCompteUtilisateurDiv');
}

function actionEnregistrerNouveauCompteUtilisateur(){
	FormAjaxRefresh('./actionEnregistrerNouveauCompteUtilisateur', 'creationCompteUtilisateurForm', 'AjaxContent');
}

function actionSupprimerCompteUtilisateur(){
	
	FormAjaxRefresh('./actionSupprimerCompteUtilisateur', 'creationCompteUtilisateurForm', 'AjaxContent');
}

function actionModificationCompteUtilisateur(){
		FormAjaxRefresh('./actionModificationCompteUtilisateur', 'creationCompteUtilisateurForm', 'AjaxContent');

}

function actionModificationCompteUtilisateur(){
	FormAjaxRefresh('./actionModificationCompteUtilisateur', 'creationCompteUtilisateurForm', 'AjaxContent');

}