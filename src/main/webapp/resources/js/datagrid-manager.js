function enableDataGridRowSelection() {
	$('.datagrid1 tr').on('click', function() {
		clearSelection();
		$(this).addClass("row_selected");
	});
}

function clearSelection() {
	$('.datagrid1 tr.row_selected').removeClass('row_selected');
}

function isRowOpenDetails(dataTable, ligneCourante) {
	return dataTable.fnIsOpen(ligneCourante) && $(ligneCourante).has(".icon-minus").length;
}

function isRowOpenActions(dataTable, ligneCourante) {
	return dataTable.fnIsOpen(ligneCourante) && $(ligneCourante).has(".icon-plus").length;
}

function enableRowDetails(dataTable, creerDetails) {
	$('.datagrid1 td .icon-plus').on('click', function() {
		var ligneCourante = $(this).parents('tr')[0];

		if (isRowOpenDetails(dataTable, ligneCourante)) {
			$(".expander i").not(this).addClass("icon-plus").removeClass("icon-minus");
			$(this).removeClass("icon-minus");
			$(this).addClass("icon-plus");
			$(ligneCourante).removeClass("expanded");

			dataTable.fnClose(ligneCourante);
		}
		else {
			closeAllDetails(dataTable);
			closeAllActions(dataTable);

			$(".expander i").not(this).addClass("icon-plus").removeClass("icon-minus");
			$(this).removeClass("icon-plus");
			$(this).addClass("icon-minus");
			$(ligneCourante).addClass("expanded");

			var contenu = creerDetails(ligneCourante);
			dataTable.fnOpen(ligneCourante, contenu, 'details');
		}
	});
}

function closeAllDetails(dataTable) {
	$('.datagrid1 td .icon-plus').each(function() {
		var ligneCourante = $(this).parents('tr')[0];

		$(this).removeClass("icon-minus");

		if (dataTable.fnIsOpen(ligneCourante)) {
			$(this).addClass("icon-plus");
			$(ligneCourante).removeClass("expanded");

			dataTable.fnClose(ligneCourante);
		}
	});
}

function enableRowActions(dataTable, creerDetails) {
	$('.datagrid1 td.actions .icon-cog').on('click', function() {
		var ligneCourante = $(this).parents('tr')[0];

		if (isRowOpenActions(dataTable, ligneCourante)) {
			dataTable.fnClose(ligneCourante);
		}
		else {
			closeAllDetails(dataTable);
			closeAllActions(dataTable);

			var contenu = creerDetails(ligneCourante);
			dataTable.fnOpen(ligneCourante, contenu, 'details');
		}
	});
}

function closeAllActions(dataTable) {
	$('.datagrid1 td').each(function() {
		var ligneCourante = $(this).parents('tr')[0];

		if (dataTable.fnIsOpen(ligneCourante)) {
			dataTable.fnClose(ligneCourante);
		}
	});
}



$(document).ready(function () {
	
	/* Add Tooltip to ellipsis colomns */
	$('.ellipsis').tooltip({
	    placement : 'top'
	});
	
	/* Row selection*/
	enableDataGridRowSelection();
});

/*
 * Add filer 
*/
function fnFilter ($tableObj){
	$('#filterInput').val("");
	
	$('#filterInput').keyup(function(){
		$tableObj.fnFilter($(this).val());
	});
	$('#filterSubmit').click(function(){
		$tableObj.fnFilter($('#filterInput').val());
	});
	
}

/*
 * Automate details row 
*/
function fnFormatDetails ($tableObj, nTr ){
	var aData = $tableObj.fnGetData( nTr );
	var aHeader=$tableObj.fnSettings().aoColumns;
	//alert(aHeader[1].toSource());
	
	var sOut = '<table class="detailsTable" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
	$.each( aHeader, function( key, value ) {
		if(! value.bVisible || aData[key].indexOf("ellipsis")>0 ){
			sOut += '<tr><td class="a-right">'+ value.sTitle +' </td><td> : </td><td>'+aData[key]+'</td></tr>';
		}
	});
	sOut += '</table>';
	return sOut;
}

function fnDetails($tableObj){
	$('.datagrid1 td.expander i').on( 'click', function () {
		var nTr = this.parentNode.parentNode;
		if ( $(this).hasClass("icon-minus") ){
			$(this).removeClass("icon-minus").addClass("icon-plus");
			$tableObj.fnClose( nTr );
		}
		else{
			fnCloseAll($tableObj);
			$(this).removeClass("icon-plus").addClass("icon-minus");
			$tableObj.fnOpen( nTr, fnFormatDetails($tableObj, nTr), 'details' );
		}
	});
}

function fnCloseAll($tableObj){
	$('.datagrid1 td.expander .icon-minus').each(function() {
		var ligneCourante = $(this).parents('tr')[0];

		$(this).removeClass("icon-minus");

		if ($tableObj.fnIsOpen(ligneCourante)) {
			$(this).addClass("icon-plus");
			$(ligneCourante).removeClass("expanded");

			$tableObj.fnClose(ligneCourante);
		}
	});
}
/*
 * change sorting type : add dt-stype="sorting-type" in header column 
*/
function fnChangeSortingType($tableObj) {
	$(".datagrid1 tr th").each(function( key, value ) {
		if($(this).attr("dt-stype")){
			$tableObj.fnSettings().aoColumns[key].sType = $(this).attr("dt-stype");
		}});
}