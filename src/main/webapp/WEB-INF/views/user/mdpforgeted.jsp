<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="LabelForgotedPasswordTitle" /></title>
<link rel="stylesheet" href="css/validationEngine.jquery.css"
	type="text/css" media="screen" title="no title" charset="utf-8" />
<link rel="stylesheet" href="css/template.css" type="text/css"
	media="screen" title="no title" charset="utf-8" />
<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/jquery.validationEngine-fr.js" type="text/javascript"></script>
<script src="js/jquery.validationEngine.js" type="text/javascript"></script>
</head>
<body>
	<form method="POST" id="formID" class="formular" action="user/mdpoublie">
	<fieldset>
			<legend><spring:message code="LabelForgotedPasswordFormLegend" /></legend>

			
	   <span><spring:message code="LabelAdresseElectronique" /> :</span> <input
				class="validate[required,custom[email]] text-input" type="text"
				name="email" id="email" />
			</label>
			</fieldset>  
		<p>
			<input class="submit" type="submit" value="<spring:message code="ButtonApply" />" />
		</p>
	</form>
</body>
</html>