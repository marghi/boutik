<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
	
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/theme/theme.css" />" media="all" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/jquery.fileupload-ui.css" />" media="all" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/style.css" />" media="all" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/layout/layout.css" />" media="all" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/datatable/datatable.css" />" media="all" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/calendar/calendar-win2k-cold-1.css" />" media="all" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/validationEngine.jquery.css" />" media="all" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/template.css" />" media="all" />
		
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.6.2.min.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery.dataTables.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery.validate.min.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/ajaxfileupload.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery.simplemodal.1.4.1.min.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/default.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-ui-1.8.16.custom.min.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery.validate.min.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery.simplemodal.1.4.1.min.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/refresh.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/date-jequery/calendar.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/date-jequery/calendar-setup.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/date-jequery/calendar-en.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/controlDate/jquery.validate.js" />"></script>
	
	<script type="text/javascript" src="<c:url value="/resources/js/devantCheque/devantCheque.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/devantCheque/scriptMoney.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/banque/banque.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/beneficiaire/beneficiaire.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/entreprise/entreprise.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/archive/archive.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/user/user.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery.validationEngine-fr.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery.validationEngine.js" />"></script>


	</head>
	<body>
		<div id="global">
			<div id="header">
				<tiles:insertAttribute name="header" />
			</div>
			<div id="menu">
				<tiles:insertAttribute name="menu" />
			</div>
			<div id="content">
				<tiles:insertAttribute name="content" />
			</div>
			<div id="footer">
				<tiles:insertAttribute name="footer" />
			</div>
		</div>
		<div id="refreshScript"></div>
	</body>
</html>