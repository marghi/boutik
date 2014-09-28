<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
	
	
	<link rel="SHORTCUT ICON" href="/resources/img/icone.ico">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/bootstrap.min.css" />" media="all" />
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/style.css" />" media="all" />
   <link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/wizard.css" />" media="all" />
   <link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/datepicker.css" />" media="all" />
   <link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/select2.css" />" media="all" />
   <link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/introjs.css" />" media="all" />
   <link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/listeTables.css" />" media="all" />

   <link rel="stylesheet" type="text/css" href="<c:url value="/resources/img/flags/flags.css" />" media="all" />
   <link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/pines/jquery.pnotify.default.css" />" media="all" />
   <link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/nprogress.css" />" media="all" />
   <link rel="stylesheet" type="text/css" href="<c:url value="/resources/js/lib/browser-detection/browser-detection.css" />" media="all" />   
	<!--[if IE 8]>
		 <link href="/entreprise/resources/css/ie7.css" rel="stylesheet" />
	<![endif]-->
	
	

    <script async="" src="../../www.google-analytics.com/analytics.js"></script>
    <script type="text/javascript" src="<c:url value="/resources/js/lib/jquery.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/lib/select2.min.js" />"></script>	
	<script type="text/javascript" src="<c:url value="/resources/js/lib/jquery.dataTables.min.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/boostrap-datatables-override.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/ebk-utils.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/datagrid-manager.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/lib/workinprogress.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/errorCodeHandler.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/moduleDataTables.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/lib/nprogress.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/lib/browser-detection/browser-detection.js" />"></script>




	</head>
	<body>
		<div id="wrap">
			<div id="header">
				<tiles:insertAttribute name="header" />
			</div>
			<div >
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