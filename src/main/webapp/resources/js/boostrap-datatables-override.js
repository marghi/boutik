$(document).ready(function () {
$.extend($.fn.dataTableExt.oPagination, {
		"bootstrap" : {
			"fnInit" : function(oSettings, nPaging, fnDraw) {
				var oLang = oSettings.oLanguage.oPaginate;
				var fnClickHandler = function(e) {
					e.preventDefault();
					if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
						fnDraw(oSettings);
					}
				};
				$(nPaging).addClass('pagination pagination-small').append('<ul>'
						+ '<li class="bnav prev"><a href="#">< </a></li>'
						+ '<li class="bnav next"><a href="#"> > </a></li>');
				var els = $('a', nPaging);
				$(els[0]).bind('click.DT', {
					action : "previous"
				}, fnClickHandler);
				$(els[1]).bind('click.DT', {
					action : "next"
				}, fnClickHandler);
			},

			"fnUpdate" : function(oSettings, fnDraw) {
				var nbCaseAutourPage = 2;
				var oPaging = oSettings.oInstance.fnPagingInfo();
				var an = oSettings.aanFeatures.p;
				var i, j, sClass;

				var stylePagination = $('div', an[0]).context.style;
				if (oPaging.iTotal < 11) {
					$(".dataTables_length").hide();
				} else {
					$(".dataTables_length").show();
				}
				if (oPaging.iTotalPages == 1) {
					stylePagination.display = "none";
				}
				else {
					stylePagination.display = ""
				}
				
				function firstOuLast(indexCourant, indexFin) {
					return indexCourant == 1 | indexCourant == indexFin;
				}
				function dansLeScopeVoulu(indexCourant, pageCourante, nbScope) {
					return indexCourant >= pageCourante - nbScope & indexCourant <= pageCourante + nbScope;
				}
				
				for (i = 0, iLen = an.length; i < iLen; i++) {
					// Remove the middle elements
					$('li:gt(0)', an[i]).filter(':not(.bnav)').remove();
					// Add the new list items and their event
					// handlers
					for (j = 1; j <= oPaging.iTotalPages; j++) {
						if (firstOuLast(j, oPaging.iTotalPages) | dansLeScopeVoulu(j, oPaging.iPage+1, nbCaseAutourPage)) {
							sClass = (j == oPaging.iPage + 1) ? 'class="active"' : '';
							$('<li ' + sClass + '><a href="#">' + j + '</a></li>').insertBefore($('li.bnav.next', an[i])[0])
							.bind('click', function(e) {
								e.preventDefault();
								oSettings._iDisplayStart = (parseInt($('a', this).text(), 10) - 1) * oPaging.iLength;
								fnDraw(oSettings);
							});
						}
						else {
							if (j == oPaging.iPage+1 + nbCaseAutourPage + 1 ) {
								$('<li class="disabled"><a style="color:#666;">...</a></li>').insertBefore($('li.bnav.next:eq(0)', an[i])[0]);
							}
							if (j == oPaging.iPage+1 - nbCaseAutourPage - 1 ) {
								$('<li class="disabled"><a style="color:#666;">...</a></li>').insertAfter($('li:eq(1)', an[i])[0]);
							}
						}
					}
					// Add / remove disabled classes from the
					// static elements
					if (oPaging.iPage === 0) {
						$('li:eq(0)', an[i]).addClass('disabled');
					}
					else {
						$('li:eq(0)', an[i]).removeClass('disabled');
					}

					if (oPaging.iPage === oPaging.iTotalPages - 1 || oPaging.iTotalPages === 0) {
						$('li:eq(-1)', an[i]).addClass('disabled');
					}
					else {
						$('li:eq(-1)', an[i]).removeClass('disabled');
					}
				}
			}
		}
	});
});



function overrideDataTable(dataTable) {
	dataTable.fnSettings().fnServerData = function(sUrl, aoData, fnCallback, oSettings) {
		oSettings.jqXHR = $.ajax({
			"url" : sUrl,
			"data" : aoData,
			"success" : function(json) {
				if (json.sError) {
					oSettings.oApi._fnLog(oSettings, 0, json.sError);
				}
				$(oSettings.oInstance).trigger('xhr', [ oSettings, json ]);
				fnCallback(json);
				redrawTableServerSideFalse();
			},
			"dataType" : "json",
			"cache" : false,
			"type" : oSettings.sServerMethod,
			"error" : function(xhr, error, thrown) {
				// si ressources indisponibles.
				if (error == "error" & xhr.status == 503) {
					showConfirmPopup();
				}
				// si session timeout
				if (error == "parsererror") {
					// TODO
					document.location.href = "/";
				}
			}
		});
	}
}

function overriderBootstrapDatatables() {
	if (typeof oTable_operations != 'undefined') {
		overrideDataTable(oTable_operations);
	}
	if (typeof oTable_virements != 'undefined') {
		overrideDataTable(oTable_virements);
	}
	if (typeof oTable_virementsMono != 'undefined') {
		overrideDataTable(oTable_virementsMono);
	}
	if (typeof oTable_cartes != 'undefined') {
		overrideDataTable(oTable_cartes);
	}
	if (typeof oTable_recharges != 'undefined') {
		overrideDataTable(oTable_recharges);
	}
	if (typeof oTable_rechargesMono != 'undefined') {
		overrideDataTable(oTable_rechargesMono);
	}
	if (typeof oTable_tableCoursTitresActions != 'undefined') {
		overrideDataTable(oTable_tableCoursTitresActions);
	}
}