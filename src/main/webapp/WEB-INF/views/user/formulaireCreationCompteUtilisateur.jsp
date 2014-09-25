<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<div id="idParametreCompteUtilisateurDiv" class="divForm">
	<form:form name="creationCompteUtilisateurForm" class="formular" action="actionEnregistrerNouveauCompteUtilisateur" method="post"
		enctype="multipart/form-data" modelAttribute="client">
	
		<table>
			<tr>
				<td>Nom</td>
				<td><input type="text" name="nom"></td>
			</tr>
			<tr>
				<td>Prénom</td>
				<td><input type="text" name="prenom"></td>
			</tr>
			<tr>
				<td>Adresse</td>
				<td><input type="text" name="adresse"></td>
			</tr>
			<tr>
				<td>Ville</td>
				<td><input type="text" name="ville"></td>
			</tr>
			<tr>
				<td>Code Postale</td>
				<td><input type="text" name="cp"></td>
			</tr>
			<tr>
				<td>Télephone</td>
				<td><input type="text" name="tel"></td>
			</tr>
			<tr>
				<td>Email</td>
				<td><input type="text" name="email"></td>
			</tr>
			<tr>
				<td>Mot de passe</td>
				<td><input type="password" name="password"></td>
			</tr>
		</table>
		
			<input class="submit" type="submit"  value="<spring:message code="LabelCreerCompteUtilisateur"/>" />
	</form:form>
</div>