<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<div class="divForm">
	<form id="formID" class="formular" method="post"
		action="j_spring_security_check">
		<i>${message }</i>
		<fieldset>
			<legend><spring:message code="LabelAuthentification"/></legend>

			<label> <span><spring:message code="LabelLogin"/> :</span> <input
				class="validate[required,custom[email]] text-input" type="text"
				name="j_username" id="email" />
			</label> <label> <span><spring:message code="LabelPassword"/> : </span> <input
				class="validate[required,length[1,10]] text-input" type="password"
				name="j_password" id="password" />
			</label> <label> <input class="checkbox" type="checkbox" id="cb"
				name="cb" /> <span class="checkbox"><spring:message code="LabelSeRappeler"/> </span>
			</label>

		</fieldset>
		<p>
			<input class="submit" type="submit" value="<spring:message code="ButtonApply"/>" />
		</p>
		<label> <a href="afficherFormulaireCreationCompteUtilisateur"><spring:message code="LabelCreateUserAcount"/></a></label>
		<br> <label> <a href="frwdmdpforgoted"><spring:message code="LabelPasswordForgoted"/></a>
		</label>
			<hr />
	</form>
</div>
			
