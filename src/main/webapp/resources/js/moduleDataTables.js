var ModuleDataTables = (function () { 

    var ModuleDataTables = function (oTableId) 
    {
    	var that = this;
    	
    	this.oTableId = oTableId;
    	this.oTable = null;;

    	this.grid = '.datagrid1';
    	this.classOfSelectedLine = 'row_selected';
    	this.$gridRow = $(this.grid + ' tr');

		this.collapserIconClass = 'icon-minus';
		this.expanderIconClass = 'icon-plus';
		this.actionsIconClass = 'actionsCog';
    	this.$rowDetails = $(this.grid + ' td .' + this.expanderIconClass);
    	this.$rowActions = $(this.grid + ' td .' + this.actionsIconClass);
    	
    	this.configDataTables = {
			"bSort": true,
            "bAutoWidth": true,
            "sDom": "t<'row-fluid'<'span4'l><'span8'p>>",
            "bDestroy": true,
		    "bLengthChange": true,
		    "bFilter": true,
		    "bInfo": true,
            "sPaginationType": "bootstrap"
    	};

    	this.stripTags = function(str) {
    		return String(str).replace(/<[\s\S]*?>/g, "");
    	};
    	
    	this.percentage = function(data, type, full) {
			if(data == null || data == undefined) {
				return '-';
			} else {
				return numeral(data).format('0,0.00');
			}
		};

		this.datify = function(data, type, full) {
			var date;
			if(data == null || data == undefined) {
				return '';
			} else if (typeof data == "number") {
				date = new Date(data);
			}
			else {
				
				date = new Date(data.split(' ')[0].replace(/-/g, '/'));
			}

			var d = date.getDate();
			var m = date.getMonth() + 1;
			var y = date.getFullYear();

			return '' + (d <= 9 ? '0' + d : d) + '.' + (m <= 9 ? '0' + m : m) + '.' + y;
		};
		
		this.renderCanal = function(data, type, full) {
			if(data == null || data == undefined) {
				return '';
			}
			
			if(data == 'EBK') {
				return 'Web';
			}
			
			if(data == 'MOBILE_BANKING') {
				return 'Mobile Banking';
			}
			
			if(data == 'CENTRE_APPEL') {
				return 'Centre d\'appel';
			}
			
			if(data == 'AGENCE') {
				return 'Agence';
			}
			
			return data; 
		};
		
		this.moneytise = function(data, type, full) {
			data = that.stripTags(data);
			if (!data || data === 'null') {
				return '';
			}
			return '<span class="solde">' + format("# ##0,00", data) + '</span>';
		};

		this.prepareMoneyForSort = function(a) {
			var x = String(a).replace(/<[\s\S]*?>/g, "").replace(/\(\*\)$/, "").replace(/ /g, "").replace(/,/, ".");
			if (isNaN(x)) {
				return x;
			} else {
				return parseFloat(x);
			}
		};

		this.preparePercentageForSort = function(a) {
			var x = String(a).replace(/<[\s\S]*?>/g, "").replace(/\(\*\)$/, "").replace(/ /g, "").replace(/,/, ".").replace(/%/, "");
			if (isNaN(x)) {
				return x;
			} else {
				return parseFloat(x);
			}
		};

		this.sortMoney = function(a, b) {
			var aN = isNaN(a), bN = isNaN(b);

			if (aN & !bN) {
				return 1;
			} else if (bN & !aN) {
				return -1;
			}

			return a < b ? -1 : (a > b ? 1 : 0);
		};

		this.sortDate = function(a, b) {
			var datea = this.stripTags(a).split('.');
			var dateb = this.stripTags(b).split('.');

			var x = (datea[2] + datea[1] + datea[0]) * 1;
			var y = (dateb[2] + dateb[1] + dateb[0]) * 1;

			return ((x < y) ? -1 : ((x > y) ?  1 : 0));
		};
		
		this.reloadDataTable = function(url) {
			this.oTable.fnFilter('');
			this.oTable.fnSettings().iDraw = 0;
			
			// "hacking" paging cursors
			if(this.oTable.fnSettings().oFeatures.bServerSide) {
				this.oTable.fnSettings()._iDisplayStart = 0;
			}
			
			this.oTable.fnClearTable();
			
			// in server-side mode, fnClearTable rappelle le web service
			// il faut donc ne pas lancer un reload ajax
			if(!this.oTable.fnSettings().oFeatures.bServerSide) {
				this.oTable.fnReloadAjax(url);
			}
		};

		this.configureTableReloading = function() {
			$.fn.dataTableExt.oApi.fnReloadAjax = function ( oSettings, sNewSource, fnCallback, bStandingRedraw )
			{
			    if ( $.fn.dataTable.versionCheck ) {
			        var api = new $.fn.dataTable.Api( oSettings );
			 
			        if ( sNewSource ) {
			            api.ajax.url( sNewSource ).load( fnCallback, !bStandingRedraw );
			        }
			        else {
			            api.ajax.reload( fnCallback, !bStandingRedraw );
			        }
			        return;
			    }
			 
			    if ( sNewSource !== undefined && sNewSource !== null ) {
			        oSettings.sAjaxSource = sNewSource;
			    }
			 
			    // Server-side processing should just call fnDraw
			    if ( oSettings.oFeatures.bServerSide ) {
			        this.fnDraw();
			        return;
			    }
			 
			    this.oApi._fnProcessingDisplay( oSettings, true );
			    var that = this;
			    var iStart = oSettings._iDisplayStart;
			    var aData = [];
			 
			    this.oApi._fnServerParams( oSettings, aData );
			 
			    oSettings.fnServerData.call( oSettings.oInstance, oSettings.sAjaxSource, aData, function(json) {
			        /* Clear the old information from the table */
			        that.oApi._fnClearTable( oSettings );
			 
			        /* Got the data - add it to the table */
			        var aData =  (oSettings.sAjaxDataProp !== "") ?
			            that.oApi._fnGetObjectDataFn( oSettings.sAjaxDataProp )( json ) : json;
			 
			        for ( var i=0 ; i<aData.length ; i++ )
			        {
			            that.oApi._fnAddData( oSettings, aData[i] );
			        }
			         
			        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			 
			        that.fnDraw();
			 
			        if ( bStandingRedraw === true )
			        {
			            oSettings._iDisplayStart = iStart;
			            that.oApi._fnCalculateEnd( oSettings );
			            that.fnDraw( false );
			        }
			 
			        that.oApi._fnProcessingDisplay( oSettings, false );
			 
			        /* Callback user function - for event handlers etc */
			        if ( typeof fnCallback == 'function' && fnCallback !== null )
			        {
			            fnCallback( oSettings );
			        }
			    }, oSettings );
			};
		};

	    this.configureSorting = function() {
	    	var that = this;

	    	jQuery.extend(jQuery.fn.dataTableExt.oSort, {
				"numeric-comma-pre" : function(a) {
					return that.prepareMoneyForSort(a);
				},
				"numeric-comma-asc" : function(a, b) {
					return that.sortMoney(a, b);
				},
				"numeric-comma-desc" : function(a, b) {
					return that.sortMoney(b, a);
				},

				"percentage-comma-pre" : function(a) {
					return that.preparePercentageForSort(a);
				},
				"percentage-comma-asc" : function(a, b) {
					return that.sortMoney(a, b);
				},
				"percentage-comma-desc" : function(a, b) {
					return that.sortMoney(b, a);
				},
				
				"ma-date-asc" : function(a, b) {
					return that.sortDate(a, b);
				},
				"ma-date-desc" : function(a, b) {
					return that.sortDate(b, a);
				}
			});
	    };

	    this.configureDataTablePagination = function() {
    		$.extend( $.fn.dataTableExt.oStdClasses, {
                "sWrapper": "dataTables_wrapper form-inline"
            });
            
            $.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
            {
                return {
                    "iStart":         oSettings._iDisplayStart,
                    "iEnd":           oSettings.fnDisplayEnd(),
                    "iLength":        oSettings._iDisplayLength,
                    "iTotal":         oSettings.fnRecordsTotal(),
                    "iFilteredTotal": oSettings.fnRecordsDisplay(),
                    "iPage":          oSettings._iDisplayLength === -1 ?
                        0 : Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
                    "iTotalPages":    oSettings._iDisplayLength === -1 ?
                        0 : Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
                };
            };
            
            $.extend($.fn.dataTableExt.oPagination, {
                "bootstrap" : {
                    "fnInit" : function(oSettings, nPaging, fnDraw) {
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
                        $(els[0]).bind('click.DT', { action : "previous" }, fnClickHandler);
                        $(els[1]).bind('click.DT', { action : "next" }, fnClickHandler);
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
                        } else {
                            stylePagination.display = "";
                        }
                            
                        function firstOuLast(indexCourant, indexFin) {
                            return indexCourant == 1 | indexCourant == indexFin;
                        };
                        function dansLeScopeVoulu(indexCourant, pageCourante, nbScope) {
                            return indexCourant >= pageCourante - nbScope & indexCourant <= pageCourante + nbScope;
                        };
                            
                        for (i = 0, iLen = an.length; i < iLen; i++) {
                            // Remove the middle elements
                            $('li:gt(0)', an[i]).filter(':not(.bnav)').remove();
                            
                            // Add the new list items and their event handlers
                            for (j = 1; j <= oPaging.iTotalPages; j++) {
                                if (firstOuLast(j, oPaging.iTotalPages) | dansLeScopeVoulu(j, oPaging.iPage+1, nbCaseAutourPage)) {
                                    sClass = (j == oPaging.iPage + 1) ? 'class="active"' : '';
                                    $('<li ' + sClass + '><a href="#">' + j + '</a></li>').insertBefore($('li.bnav.next', an[i])[0])
                                    .bind('click', function(e) {
                                        e.preventDefault();
                                        oSettings._iDisplayStart = (parseInt($('a', this).text(), 10) - 1) * oPaging.iLength;
                                        fnDraw(oSettings);
                                    });
                                } else {
                                    if (j == oPaging.iPage+1 + nbCaseAutourPage + 1 ) {
                                        $('<li class="disabled"><a style="color:#666;">...</a></li>').insertBefore($('li.bnav.next:eq(0)', an[i])[0]);
                                    }
                                    if (j == oPaging.iPage+1 - nbCaseAutourPage - 1 ) {
                                        $('<li class="disabled"><a style="color:#666;">...</a></li>').insertAfter($('li:eq(1)', an[i])[0]);
                                    }
                                }
                            }
                                
                            // Add / remove disabled classes from the static elements
                            if (oPaging.iPage === 0) {
                                $('li:eq(0)', an[i]).addClass('disabled');
                            } else {
                                    $('li:eq(0)', an[i]).removeClass('disabled');
                            }

                            if (oPaging.iPage === oPaging.iTotalPages - 1 || oPaging.iTotalPages === 0) {
                                $('li:eq(-1)', an[i]).addClass('disabled');
                            } else {
                                $('li:eq(-1)', an[i]).removeClass('disabled');
                            }
                        }
                    }
                }
            });
		};

		this.clearSelection = function() {
			var classOfSelectedLine = this.classOfSelectedLine;
			
			$gridRowSelected = $(this.grid + ' tr.' + this.classOfSelectedLine);
			$gridRowSelected.removeClass(classOfSelectedLine);
		};

		this.enableDataGridRowSelection = function() {
			var that = this;
			this.$gridRow.on('click', function() {
				that.clearSelection();
				$(this).addClass(that.classOfSelectedLine);
			});
		};

		this.isRowDetailsOpen = function (ligneCourante) {
			var collapserIconClass = '.' + this.collapserIconClass;
			return this.oTable.fnIsOpen(ligneCourante) && $(ligneCourante).has(collapserIconClass).length;
		};

		this.enableRowDetails = function() {
			var that = this;
			this.$rowDetails.on('click', function() {
				var ligneCourante = $(this).parents('tr')[0];

				if (that.isRowDetailsOpen(ligneCourante)) {
					$(".expander i").not(this).addClass(that.expanderIconClass).removeClass(that.collapserIconClass);
					$(this).removeClass(that.collapserIconClass);
					$(this).addClass(that.expIconander);
					$(ligneCourante).removeClass("expanded");

					that.oTable.fnClose(ligneCourante);
				} else {
					that.closeAllDetails(that.oTable);

					$(".expander i").not(this).addClass(that.expanderIconClass).removeClass(that.collapserIconClass);
					$(this).removeClass(that.expIconander);
					$(this).addClass(that.collapserIconClass);
					$(ligneCourante).addClass("expanded");

					var contenu = that.creerDetails(ligneCourante);
					that.oTable.fnOpen(ligneCourante, contenu, 'details');
				}
			});
		};
		
		this.enableRowActions = function() {
			var that = this;
			this.$rowActions.on('click', function() {
				var $this = $(this);
				var ligneCourante = $this.parents('tr')[0];
				var actions = that.creerBarreActions(ligneCourante);
				$this.next().empty().append(actions);
			});
		};

		this.closeAllDetails = function() {
			var that = this;
			this.$rowDetails.each(function() {
				var ligneCourante = $(this).parents('tr')[0];

				$(this).removeClass(that.collapserIconClass);

				if (that.oTable.fnIsOpen(ligneCourante)) {
					$(this).addClass(that.expanderIconClass);
					$(ligneCourante).removeClass("expanded");
					
					that.oTable.fnClose(ligneCourante);
				}
			});
		};
		
		this.clearForm = function (elem) {
        	$(elem).find(":input").each(function() {
        		switch(this.type) {
        		case 'password' :
        		case 'select-multiple' :
        		case 'select-one' :
        		case 'text' :
        		case 'textarea' :
        			$(this).val('');
        			break;
        		case 'checkbox' :
        		case 'radio' :
        			this.checked = false;
        		}
        	});
        };
		
		this.initTable = function() {
			var that = this;
			this.configureDataTablePagination();
    		this.configureTableReloading();
    		this.extendConfigDataTable();
    		
			this.oTable = $('#' + this.oTableId).dataTable(that.configDataTables);
			
			this.configureSorting();
			
			this.enableDataGridRowSelection();
			this.enableRowDetails();
			this.enableRowActions();
			
			return this.oTable;
		};
		
		this.creerDetails = function(ligneCourante) {};
		
		this.creerBarreActions = function(ligneCourante) {};

		this.extendConfigDataTable = function() {};
    };

    return ModuleDataTables;

})();
