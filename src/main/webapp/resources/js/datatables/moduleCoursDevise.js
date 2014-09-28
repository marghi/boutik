var ModuleCoursDevise = (function () { 
	
    var ModuleCoursDevise = function (oTableId) 
    {
    	this.oTableId = oTableId;
    	
    	this.extendConfigDataTable = function() {
    		this.configDataTables["aaSorting"] = [[2, "desc"]];
    		this.configDataTables["oLanguage"] = {
            	"sProcessing":     "Traitement en cours...",
                "sSearch":         "Rechercher&nbsp;:",
                "sLengthMenu":     "Afficher _MENU_ Devises",
                "sInfo":           "Devise _START_ à _END_ sur _TOTAL_ Devise(s)",
                "sInfoEmpty":      "Devise 0 à 0 sur 0 Devise(s)",
                "sInfoFiltered":   "(filtré de _MAX_ Devise(s) au total)",
                "sInfoPostFix":    "",
                "sLoadingRecords": "Chargement en cours...",
                "sZeroRecords":    "Aucun Cours Devise à afficher",
                "sEmptyTable":     "Aucun Cours Devise à afficher",
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

	ModuleCoursDevise.prototype = new ModuleDataTables(this.oTableId);
	ModuleCoursDevise.prototype.constructor = ModuleCoursDevise;
	ModuleCoursDevise.constructor = ModuleDataTables.prototype.constructor;

    return ModuleCoursDevise;

})();
