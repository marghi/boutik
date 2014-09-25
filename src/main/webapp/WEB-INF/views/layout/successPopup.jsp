<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<div id="successPopup">
	<div class="ui-state-highlight ui-corner-tl ui-corner-tr ui-corner-bl ui-corner-br">
		<span class="ui-icon ui-icon-info"></span><h3><spring:message code="labelInformation"/></h3>
		<div id="successPopupDiv">
			<!-- Ici viendra le message. -->
		</div>
		<input class="successPopup-close" type="button" value="<spring:message code="labelFermer"/>" />
	</div>
</div>
