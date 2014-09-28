<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>


<div id="headerTopBar">
	<div class="navbar">
		<div class="navbar-inner">				
			<div class="container-fluid" style="position: relative;">
				<div class="row-fluid">
					<div class="pull-right nav-collapse offset3 main-menu">
						<div>
							<ul class="nav gradient1" id="menuNotLogged">
								<li>
									<a style="padding-left: 15px" href="/clients/" title="Accueil">
										<i class="icon-home"></i> <spring:message code="MenuClients"/></a>
								</li>
								<li>
									<a href="/boutik/articles/"><spring:message code="MenuArticles"/></a>
								</li>
								
								<li>
									<a href="/commandes/"><spring:message code="MenuCommandes"/></a>
								</li>
								<li>
									<a href="/beneficiaire/"><spring:message code="MenuBeneficiareParameters"/></a>
								</li>
								<li>
									<a href="/archive/"><spring:message code="MenuArchives"/></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>