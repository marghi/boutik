<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<!-- <div id="confirmPopup"> -->
<div class="ui-state-highlight ui-corner-tl ui-corner-tr ui-corner-bl ui-corner-br">
		<span class="ui-icon ui-icon-info"></span><h3><spring:message code="labelQuestion"/></h3>
		<div id="confirmPopupDiv">
			<!-- Ici viendra le message. -->
		</div>
		<input id="confirmPopupNon" class="confirmPopup-close" type="button" value="<spring:message code="labelNon"/>" />
		<input id="confirmPopupOui" type="button" value="<spring:message code="labelOui"/>" />
	</div>
<!-- </div> -->
