<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<div id="headerContent">

	<div id="userTools">
		<span><label><spring:message code="LabelMsgWelcome"/></label></span>
		<a href="?lang=en">en</a> | <a href="?lang=fr">fr</a>
		<a href="<c:url value="/j_spring_security_logout"/>"><spring:message code="LabelLogout"/></a>
	</div>	
</div>