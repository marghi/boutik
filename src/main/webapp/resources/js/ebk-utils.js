jQuery.extend(jQuery.fn.dataTableExt.oSort, {
	"numeric-comma-pre" : function(a) {
		var x = String(a).replace(/<[\s\S]*?>/g, "").replace(/ /g, "").replace(/,/, ".");

		if (isNaN(x))
			return x;

		return parseFloat(x);
	},

	"numeric-comma-asc" : function(a, b) {
		var aN = isNaN(a);
		var bN = isNaN(b);

		if (aN & !bN)
			return 1;
		if (bN & !aN)
			return -1;

		return a < b ? -1 : (a > b ? 1 : 0);
	},

	"numeric-comma-desc" : function(a, b) {
		var aN = isNaN(a);
		var bN = isNaN(b);

		if (aN & !bN)
			return 1;
		if (bN & !aN)
			return -1;

		return a < b ? 1 : (a > b ? -1 : 0);
	}
});

jQuery.fn.dataTableExt.oSort['ma-date-asc']  = function(a,b) {
    var datea = a.split('.');
    var dateb = b.split('.');

    var x = (datea[2] + datea[1] + datea[0]) * 1;
    var y = (dateb[2] + dateb[1] + dateb[0]) * 1;

    return ((x < y) ? -1 : ((x > y) ?  1 : 0));
};

jQuery.fn.dataTableExt.oSort['ma-date-desc'] = function(a,b) {
    var datea = a.split('.');
    var dateb = b.split('.');

    var x = (datea[2] + datea[1] + datea[0]) * 1;
    var y = (dateb[2] + dateb[1] + dateb[0]) * 1;

    return ((x < y) ? 1 : ((x > y) ?  -1 : 0));
};

/* <![CDATA[ */
function truncate(data, type, full) {
	if (!data) {
		return '';
	}
	return '<span class="ellipsis" data-toggle="tooltip" style="width: 80px" title="" data-original-title="'+data+'">' + data + '</span>';
}

function moneytise(data, type, full) {
	if (!data) {
		return '';
	}
	return '<span class="solde">' + format("# ##0,00", data) + '</span>';
}

function moneytiseWithLink(data, type, full, baseUrl) {
	if (!data) {
		return '';
	}
	var url;
	if(full['referenceOperation'] != undefined){
		url = "details/" + full['referenceOperation'];
	}else{
		url = "details/" + full[0];
	}
	return "<a class='link pull-right' href='" + url + "'>" + format("# ##0,00", data) + "</a>";
}
function idWithLink(data, type, full, baseUrl) {
	if (!data) {
		return '';
	}
	var url;
	if(full['referenceOperation'] != undefined){
		url = "details/" + full['referenceOperation'];
	}else{
		url = "details/" + data;
	}
	return "<a class='link' href='" + url + "'>" + data + "</a>";
}

function datify(data, type, full) {
	if(data == null || data == undefined) {
		return '';
	} else if (typeof data == "number") {
		var date = new Date(data)
	}
	else {
		var date = new Date(data.replace(/-/g, '/'))
	}

	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();

	return '' + (d <= 9 ? '0' + d : d) + '.' + (m <= 9 ? '0' + m : m) + '.' + y;
}

function renderCanal(data, type, full) {
	
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
}

function actionVirement(data, type, full) {
	var urlDetail = $("#virements").data("url-details");
	var actions = "<div><a href='"+ urlDetail + "/" + data + "'><i class='icon-search'></i></a><a href='#'><i class='icon-ok'></i></a><a href='javascript: reject(" + data + ")' class='reject'><i class='icon-remove'></i></a><a href='#'><i class='icon-trash'></i></a></div>";
	return actions;
}

function stripTags(str) {
	return String(str).replace(/<[\s\S]*?>/g, "");
}

function formatDate(date) {
	var date = new Date();
	
	var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    return day + "/" + month + "/" + year + " à " + hours + "h" + minutes;
}
/* ]]> */