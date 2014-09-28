<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>


<div class="page-header">
		<h1><span>Liste</span> des valeurs liquidatives</h1>
		<p>Consultez la liste des valeurs liquidatives.</p>
</div>


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
	<a href="ajouArticle">Ajouter un Article</a>
</form>

</div>






<div class="block" style="" id="">
	<div class="block-header">
		<span>
			<i class="icon-list icon-header" style="margin:0 4px 0 0" title="Liste des valeurs liquidatives"></i> 
				<span>Liste des <b>valeurs liquidatives</b></span>	à la date du : <b>	<span>19-09-2014</span>
				</b> 
		</span>
		</div>
		<div id="" class="block-body " style="">
			<div class="cont">
			<div id="val_wrapper" class="dataTables_wrapper form-inline"
				role="grid">
				<table class="table datagrid1 dataTable" id="val">
					<thead>
						<tr role="row">
							<th class="sorting_disabled" role="columnheader" rowspan="1"
								colspan="1" aria-label="" style="width: 15px;"></th>
							<th dt:sortinit="asc" style="display: none; width: 0px;"
								class="sorting" role="columnheader" tabindex="0"
								aria-controls="val" rowspan="1" colspan="1"
								aria-label=": activer pour trier la colonne par ordre croissant">
							</th>
							<th width="180" class="sorting_desc" role="columnheader"
								tabindex="0" aria-controls="val" rowspan="1" colspan="1"
								aria-sort="descending"
								aria-label="OPCVM: activer pour trier la colonne par ordre croissant"
								style="width: 180px;">OPCVM</th>
							<th width="70" class="sorting" role="columnheader" tabindex="0"
								aria-controls="val" rowspan="1" colspan="1"
								aria-label="Classe: activer pour trier la colonne par ordre croissant"
								style="width: 70px;">Classe</th>
							<th width="70" class="sorting" role="columnheader" tabindex="0"
								aria-controls="val" rowspan="1" colspan="1"
								aria-label="Date: activer pour trier la colonne par ordre croissant"
								style="width: 70px;">Date</th>
							<th width="90" class="sorting" role="columnheader" tabindex="0"
								aria-controls="val" rowspan="1" colspan="1"
								aria-label="Valeur liquidative: activer pour trier la colonne par ordre croissant"
								style="width: 90px;">Valeur liquidative</th>
							<th width="90" class="sorting" role="columnheader" tabindex="0"
								aria-controls="val" rowspan="1" colspan="1"
								aria-label="Vl précécente: activer pour trier la colonne par ordre croissant"
								style="width: 90px;">Vl précécente</th>
							<th width="30" class="sorting" role="columnheader" tabindex="0"
								aria-controls="val" rowspan="1" colspan="1"
								aria-label="Variation: activer pour trier la colonne par ordre croissant"
								style="width: 44px;">Variation</th>
							<th class="sorting" role="columnheader" tabindex="0"
								aria-controls="val" rowspan="1" colspan="1"
								aria-label="+ haut de l'année: activer pour trier la colonne par ordre croissant"
								style="width: 112px;">+ haut de l'année</th>
							<th class="sorting" role="columnheader" tabindex="0"
								aria-controls="val" rowspan="1" colspan="1"
								aria-label="+ bas de l'année: activer pour trier la colonne par ordre croissant"
								style="width: 107px;">+ bas de l'année</th>
						</tr>
					</thead>

					<tbody role="alert" aria-live="polite" aria-relevant="all">

						<c:forEach items="${listArticles }" var="articles">
							<tr>
								<td><c:out value="${articles.auteur }" /></td>
								<td><c:out value="${articles.description }" /></td>
								<td><c:out value="${articles.prix }" /></td>
								<td><c:out value="${articles.rubrique.theme }" /></td>
								<td><a href="articles/supp?idArticle=${articles.idArticle}">supprimer</a>
									<a href="articles/modif?idArticle=${articles.idArticle}">moddifier</a>
								</td>
							</tr>
						</c:forEach>

						<!-- 							<tr > -->
						<!-- 								<td class=" "><i class="icon-arrow-green"></i></td> -->
						<!-- 								<td style="display:none" class=" ">750800</td> -->
						<!-- 								<td class=" sorting_1"><span>Attijari Trésorerie</span></td> -->
						<!-- 								<td class=" "><span>MONETAIRES</span></td> -->
						<!-- 								<td class=" "><span>25/09/14</span></td>	 -->
						<!-- 								<td class="money "><span>4503,42</span>&nbsp;</td> -->
						<!-- 								<td class="money "><span>4503,08</span></td> -->
						<!-- 								<td class="money "><span class="positive"><b>0,00</b>%</span></td> -->
						<!-- 								<td class="max "><span>4503,42</span></td> -->
						<!-- 								<td class="min "><span>4388,72</span></td> -->
						<!-- 						 	</tr> -->

					</tbody>
				</table>
				<div class="row-fluid">
					<div class="span4">
						<div id="val_length" class="dataTables_length">
							<label>Afficher <select size="1" name="val_length"
								aria-controls="val"><option value="10"
										selected="selected">10</option>
									<option value="25">25</option>
									<option value="50">50</option>
									<option value="100">100</option></select> Valeur Liquidative
							</label>

						</div>
					</div>
					<div class="span8">
						<div
							class="dataTables_paginate paging_bootstrap pagination pagination-small">
							
						</div>
					</div>
				</div>
			</div>
			<p style="color: #999; margin: 15px 8px; font-size: 11px">
				Pour plus d'informations, consultez le site: <a target="_blank"
					class="link" href="http://www.wafabourse.com/">www.wafabourse.com
				</a>
			</p>
		</div>
            </div>
                	
	</div>