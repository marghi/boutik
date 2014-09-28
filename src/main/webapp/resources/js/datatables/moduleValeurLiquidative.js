var ModuleValeurLiquidative = (function () { 
	
    var ModuleValeurLiquidative = function (oTableId) 
    {
    	this.oTableId = oTableId;
    	
    	this.extendConfigDataTable = function() {
    		this.configDataTables["aaSorting"] = [[2, "desc"]];
    		this.configDataTables["aoColumnDefs"] = [
                 {'bSortable': false, 'aTargets': [0]},
                 {"aTargets": [5, 6, 8, 9], "sType": "numeric-comma"},
                 {"aTargets": [7], "sType": "percentage-comma"}];
    		this.configDataTables["oLanguage"] = {
				"sProcessing":     "Traitement en cours...",
                "sSearch":         "Rechercher&nbsp;:",
                "sLengthMenu":     "Afficher _MENU_ Valeur Liquidative",
                "sInfo":           "Valeur Liquidative _START_ à _END_ sur _TOTAL_ Valeur Liquidative(s)",
                "sInfoEmpty":      "Valeur Liquidative 0 à 0 sur 0 Valeur Liquidative(s)",
                "sInfoFiltered":   "(filtré de _MAX_ Valeur Liquidative(s) au total)",
                "sInfoPostFix":    "",
                "sLoadingRecords": "Chargement en cours...",
                "sZeroRecords":    "Aucun  Valeur Liquidative à afficher",
                "sEmptyTable":     "Aucun  Valeur Liquidative à afficher",
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

	ModuleValeurLiquidative.prototype = new ModuleDataTables(this.oTableId);
	ModuleValeurLiquidative.prototype.constructor = ModuleValeurLiquidative;
	ModuleValeurLiquidative.constructor = ModuleDataTables.prototype.constructor;

    return ModuleValeurLiquidative;

})();
