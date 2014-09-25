function recupArchiveData() {
	var entrepriseVar = document.getElementById('idComboEntreprise').value;
	document.getElementById('entrepriseHidden').value = entrepriseVar;
	var banqueVar = document.getElementById('idComboBanque').value;
	document.getElementById('banqueHidden').value = banqueVar;

	var compteVar = document.getElementById('idComboCompteBanque').value;
	document.getElementById('compteHidden').value = compteVar;

	var beneficiaireVar = document.getElementById('idComboBeneficiaire').value;
	document.getElementById('beneficiaireHidden').value = beneficiaireVar;
}
function afficherBanquedEntrepriseArchive() {
	recupArchiveData();
	FormAjaxRefresh('./rechercheAvanceArchive',
			'archiveForm', 'AjaxContent');

}

function afficherLesComptesBancaireArchive() {
	recupArchiveData();
	FormAjaxRefresh('./rechercheAvanceArchive',
			'archiveForm', 'AjaxContent');

}

function actionChercherArchive(){
	recupArchiveData();
	FormAjaxRefresh('./actionChercherArchive',
			'archiveForm', 'divTableauArchive');
}


