<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>


	
<div class="divForm">

<form:form id="formID" class="formular" method="POST" modelAttribute="article" action="actionAjouArticle">
	<table>
		<tr >
			<td>R�f�rence</td>
			<td><form:input type="text" path="idArticle" /></td>
		</tr>
		
		<tr >
			<td>Titre</td>
			<td><form:input type="text" path="titre" /></td>
		</tr>
		
		<tr >
			<td>Auteur</td>
			<td><form:input type="text" path="auteur" /></td>
		</tr>
		
		<tr >
			<td>Description</td>
			<td><form:input type="text" path="description" /></td>
		</tr>
		
		<tr >
			<td>Prix</td>
			<td><form:input type="text" path="prix" /></td>
		</tr>
		
		<tr >
			<td>Th�me</td>
			<td>
				<form:select path="rubrique.id">
					<form:options items="${rubriques}" itemLabel="theme" itemValue="id" />
				</form:select>
			</td>
		</tr>		
					
	</table>
	
	<input type="submit" value="Ajouter">
</form:form>

</div>