<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>


<i>${message}</i>	
<div class="divForm">

<form id="formID" class="formular" method="post" action="">
Nom user : ${user.email }
	<table border="1">
		<tr bgcolor="green">
			<td>Auteur</td>
			<td>Description</td>
			<td>Prix</td>
			<td>theme</td>
		</tr>
		<c:forEach items="${listArticles }" var="articles">
		<tr>
			<td><c:out value="${articles.auteur }"/> </td>
			<td><c:out value="${articles.description }"/></td>
			<td><c:out value="${articles.prix }"/></td>	
			<td><c:out value="${articles.rubrique.theme }"/></td>	
			<td>
				<a href="articles/supp?idArticle=${articles.idArticle}">supprimer</a>
				<a href="articles/modif?idArticle=${articles.idArticle}">moddifier</a>
			</td>		
		</tr>
		</c:forEach>			
	</table>
	<a href="articles/ajouArticle">Ajouter un Article</a>
</form>

</div>