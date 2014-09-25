<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<div id="menuContent">
	<a href="<c:url value="/articles" />"><spring:message code="MenuArticles"/></a>
	&nbsp;|&nbsp;&nbsp;<a href="<c:url value="/clients/" />"><spring:message code="MenuClients"/></a>
	&nbsp;|&nbsp;&nbsp;<a href="<c:url value="/commandes/" />"><spring:message code="MenuCommandes"/></a>
	&nbsp;|&nbsp;&nbsp;<a href="<c:url value="/beneficiaire/" />"><spring:message code="MenuBeneficiareParameters"/></a>
	&nbsp;|&nbsp;&nbsp;<a href="<c:url value="/archive/" />"><spring:message code="MenuArchives"/></a>
</div>