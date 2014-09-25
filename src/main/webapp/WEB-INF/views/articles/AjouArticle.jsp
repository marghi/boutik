<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>


	
<div class="divForm">

<form id="formID" class="formular" method="POST" action="actionAjouArticle">
	<table>
		<tr >
			<td>Référence</td>
			<td><input type="text" name="reference"></td>
		</tr>
		
		<tr >
			<td>Titre</td>
			<td><input type="text" name="titre"></td>
		</tr>
		
		<tr >
			<td>Auteur</td>
			<td><input type="text" name="auteur"></td>
		</tr>
		
		<tr >
			<td>Description</td>
			<td><input type="text" name="description"></td>
		</tr>
		
		<tr >
			<td>Prix</td>
			<td><input type="text" name="prix"></td>
		</tr>
		
		<tr >
			<td>Thème</td>
			<td>
				<select name="idRubrique">
					<c:forEach items="${rubriques }" var="rubrique">
						<option value="${rubrique.id }">${rubrique.theme }</option>
					</c:forEach>
				</select>
			</td>
		</tr>		
					
	</table>
	
	<input type="submit" value="Ajouter">
</form>

</div>