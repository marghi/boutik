var ModuleCoursTitres = (function () { 
	
    var ModuleCoursTitres = function (oTableId) 
    {
    	this.oTableId = oTableId;
    	
    	this.extendConfigDataTable = function() {
    		this.configDataTables["aoColumnDefs"] = [ { 'bSortable': false, 'aTargets': [0,8] } ];
    		this.configDataTables["oLanguage"] = {
            	"sProcessing":     "Traitement en cours...",
                "sSearch":         "Rechercher&nbsp;:",
                "sLengthMenu":     "Afficher _MENU_ Cours Titre",
                "sInfo":           "Cours Titre _START_ à _END_ sur _TOTAL_ Cours Titre(s)",
                "sInfoEmpty":      "Cours Titre 0 à 0 sur 0 Cours Titre(s)",
                "sInfoFiltered":   "(filtré de _MAX_ Cours Titre(s) au total)",
                "sInfoPostFix":    "",
                "sLoadingRecords": "Chargement en cours...",
                "sZeroRecords":    "Aucun  Cours Titre à afficher",
                "sEmptyTable":     "Aucun  Cours Titre à afficher",
                "oPaginate": {
                    "sFirst":      "Premier",
                    "sPrevious":   "",
                    "sNext":       "",
                    "sLast":       "Dernier"
                },
                "oAria": {
                    "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
                    "sSortDescending": ": activer pour trier la colonne par ordre décroissant"
                }
            };
    	};
	};

	ModuleCoursTitres.prototype = new ModuleDataTables(this.oTableId);
	ModuleCoursTitres.prototype.constructor = ModuleCoursTitres;
	ModuleCoursTitres.constructor = ModuleDataTables.prototype.constructor;

    return ModuleCoursTitres;

})();
