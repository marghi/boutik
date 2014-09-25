<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
	
<div class="divForm">

<form:form id="formID" class="formular" method="POST" modelAttribute="article" action="actionModifArticle" >
	<table>
		<tr >
			<td>Référence</td>
			<td><input type="text" name="reference" value="${article.idArticle}"></td>
		</tr>
		
		<tr >
			<td>Titre</td>
			<td><input type="text" name="titre" value="${article.titre }"></td>
		</tr>
		
		<tr >
			<td>Auteur</td>
			<td><input type="text" name="auteur" value="${article.auteur }"></td>
		</tr>
		
		<tr >
			<td>Description</td>
			<td><input type="text" name="description" value="${article.description }"></td>
		</tr>
		
		<tr >
			<td>Prix</td>
			<td><input type="text" name="prix" value="${article.prix }"></td>
		</tr>
		
		<tr >
			<td>Thème</td>
			<td>
			
				<select name="idRubrique">
				<option selected="selected">${article.rubrique.theme}</option>
<%-- 						<option value="<c:out value="${article.rubrique.id}" />"> --%>
<%-- 							<c:out value="${article.rubrique.theme}" /> --%>
<!-- 						</option> -->
					<c:forEach items="${rubriques }" var="rubrique">
<%--  						<c:if test="${article.rubrique.theme != rubrique.theme }">  --%>
							<option>${rubrique.theme}</option>
<%-- 						</c:if>  --%>
					</c:forEach>
				</select>

			</td>
		</tr>		
					
	</table>
	
	<input type="submit" value="Modifier">
</form:form>

</div>
