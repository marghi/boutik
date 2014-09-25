/**
 * permet d'afficher la list des compte bancaire de l'entreprise selectionnee
 * @param idEntreprise
 */
function recupListBanque(idEntreprise){
	document.getElementById('idEntrepriseHiddente').value=idEntreprise
	AjaxRefresh('./entreprise/afficheCompteBanqueEntreprise?idEntreprise='+idEntreprise, 'tableCompteDiv')
	
} 
/**
 * permet d'aller dans le controller saveNewEntreprise
 * @param isNew
 */
function saveEntreprise() {
	var comboBanqueval=document.getElementById('idComboBanque').value;
	document.getElementById('idBanqueHidden').value=comboBanqueval;
	UploadFileAjaxRefresh('./entreprise/saveNewEntreprise',
			'enrepriseForm', 'idSignature', 'AjaxContent');
}
/**
 * permet d'aller dans le controller modifierEntreprise
 * @param isNew
 */	
function modifEntreprise(){
	UploadFileAjaxRefresh('./entreprise/modifierEntreprise',
			'enrepriseForm', 'idSignature', 'AjaxContent');
}

/**
 * permet d'afficher la formulaire de la création d'une nouvelle entreprise
 * 
 */
function actionNouvelleEntreprise(){	
	AjaxRefresh('./entreprise/afficherFormulaireCreationEntreprise', 'AjaxContent');
}

/**
 * permet d'appler le controleur responsable d'ajout d'une nouvelle entreprise
 */
function actionEnregistrerNouvelleEntreprise(){
	var entrepriseVar = document.getElementById('idSignature').value;	
	UploadFileAjaxRefresh('./entreprise/actionEnregistrerNouvelleEntreprise',
			'creationEntrepriseForm', 'idSignature', 'AjaxContent');
}

/**
 * permet d'afficher le formulaire de la creation d'un nouveau compte bancaire
 */
function actionNouveauxCompte(){	
	var entrepriseVar = document.getElementById('idComboEntreprise').value;
	document.getElementById('idEntrepriseHidden').value=entrepriseVar ;	
	AjaxRefresh('./entreprise/afficherFormulaireNouveauCompteBancaire?idEntreprise='+entrepriseVar, 'AjaxContent');
}
/**
 * permet d'appeler le controlleur du sauvegarde du nouveau compte bancaire 
 * 
 */
function actionSaveNouveauCompteBancaire(){
	var banqueVar = document.getElementById('idComboBanque').value;
	document.getElementById('idBanqueHidden').value=banqueVar ;
	var entrepriseVar = document.getElementById('idEntrepriseHidden').value;
	//document.getElementById('idBanqueHidden').value=banqueVar ;		
	FormAjaxRefresh('./entreprise/actionSaveNouveauCompteBancaire?idBanque='+banqueVar+ '&idEntreprise=' + entrepriseVar, 'nouveauxCompteBanqueForm', 'AjaxContent');
}
/**
 * permet d'afficher le formulaire de la modification de l'entreprise
 */
function actionUpdateEntreprise(){	
	var entrepriseVar = document.getElementById('idComboEntreprise').value;	
	AjaxRefresh('./entreprise/afficherFormulaireModificationEntreprise?idEntreprise='+entrepriseVar, 'AjaxContent');
}
/**
 * permet d'appeler le controleur de la modification d'une entreprise
 */
function actionModifierEntreprise(){
	UploadFileAjaxRefresh('./entreprise/actionModifierEntreprise',
			'modificationEntrepriseForm', 'logoFile', 'AjaxContent');
}
/**
 * permet d'appeler le controleur de la supression d'une entreprise
 */
function actionSupprimerEntreprise(){
	UploadFileAjaxRefresh('./entreprise/actionSupprimerEntreprise',
			'modificationEntrepriseForm', 'idSignature', 'AjaxContent');

}
/**
 * permet d'afficher le formulaire de la modification d'un compte bancaire
 */
function actionUpdateLcompteBancaire(){	
	AjaxRefresh('./entreprise/actionUpdateLcompteBancaire', 'AjaxContent');
}

/**
 * recuperer data form
 */
function recuperationData() {
	var entrepriseVar = document.getElementById('idComboEntreprise').value;
	document.getElementById('entrepriseHidden').value = entrepriseVar;
	var banqueVar = document.getElementById('idComboBanque').value;
	document.getElementById('banqueHidden').value = banqueVar;
	var compteVar = document.getElementById('idComboCompteBanque').value;
	document.getElementById('compteHidden').value = compteVar;


}
/**
 * afficher les banques de l'Entreprise selectionnée
 */
function afficherLesBanqueDentreprise() {
	recuperationData();
	FormAjaxRefresh('./entreprise/afficherBanqueDUneEntrepriseSlelectionnee',
			'modifierCompteForm', 'AjaxContent');

}
/**
 * permet d'afficher les comptes bancaire d'une entreprise
 */
function afficherLesComptesBancaire() {
	recuperationData();
	FormAjaxRefresh('./entreprise/afficherCompteBanqueDUneEntrepriseSlelectionnee',
			'modifierCompteForm', 'AjaxContent');

}
/**
 * permet d'afficher les champs nom Banque et num compte
 */
function editerDonneeCompte(){	
	jQuery('#banquetext').show();
	
	jQuery('#actionBarr').show();
	jQuery('#actionBar').hide();
	
	document.getElementById('banquetext').focus;
	document.getElementById('numCompte').value=document.getElementById('idComboCompteBanque').value;
	//document.getElementById('nomBanque').value=document.getElementById('idComboBanque').value;
	//document.getElementById('nomEntreprise').value=document.getElementById('idComboEntreprise').value;
}

function actionModificationCompteBancaire(){
	var entrepriseVar = document.getElementById('idComboEntreprise').value;
	var banqueVar = document.getElementById('idComboBanque').value;
	var compteAncienVar= document.getElementById('idComboCompteBanque').value;
	var compteVar = document.getElementById('numCompte').value;


	
	AjaxRefresh('./entreprise/actionModificationCompteBancaire?idEntreprise=' +entrepriseVar
			+'&idBanque=' +banqueVar 
			+'&numCompteancien=' +compteAncienVar 
			+'&numCompte=' +compteVar, 'AjaxContent');
}

function actionSuppressionCompteBancaire(){
	var entrepriseVar = document.getElementById('idComboEntreprise').value;
	var banqueVar = document.getElementById('idComboBanque').value;
	var compteAncienVar= document.getElementById('idComboCompteBanque').value;
	
	AjaxRefresh('./entreprise/actionSuppressionCompteBancaire?idEntreprise=' +entrepriseVar
			+'&idBanque=' +banqueVar 
			+'&numCompteancien=' +compteAncienVar , 'AjaxContent');
}

function chargerImageEntreprise() {
	var val = document.getElementsByName('logoFile');
	UploadFileAjaxRefresh('./entreprise/chargerImageEntreprise',
			'modificationEntrepriseForm', 'logoFile', 'divChargerSignature');
}