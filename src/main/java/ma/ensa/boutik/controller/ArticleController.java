package ma.ensa.boutik.controller;

import java.security.Principal;
import java.util.List;

import ma.ensa.boutik.domain.Article;
import ma.ensa.boutik.domain.Client;
import ma.ensa.boutik.domain.Rubrique;
import ma.ensa.boutik.service.ArticleService;
import ma.ensa.boutik.service.ClientService;
import ma.ensa.boutik.service.RubriqueService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller("ArticleController")
@RequestMapping("/articles")
public class ArticleController {

	// Logger
	private static final Logger logger = LoggerFactory
			.getLogger(ArticleController.class);
	ModelAndView modelAndView = new ModelAndView();

	@Autowired
	private ArticleService articleService;
	@Autowired
	private RubriqueService rubriqueService;
	@Autowired
	private ClientService clientService;
	/**
	 * acces la page des sessions de test
	 * 
	 * @return .sessionTest redirection vers tiles correspondant
	 */
	@RequestMapping(value = "")
	public ModelAndView gestionArticle(Principal p) {
		List<Article> listArticles = articleService.findAll();
		modelAndView.addObject("listArticles", listArticles);
		modelAndView.addObject("message","L'ajout d'article effectuer avec succes ! ");
		modelAndView.setViewName(".articles");
		Client client=clientService.findByPk(p.getName());
		modelAndView.addObject("user", client);
		return modelAndView;
	}

	@RequestMapping(value = "supp", method = RequestMethod.GET)
	public String supprimerArticle(@RequestParam String idArticle) {
		articleService.supprimer(idArticle);
		modelAndView.addObject("message",
				"Suppression effectuer avec succes ! ");
		return "redirect:/articles";
	}

	@RequestMapping(value = "ajouArticle", method = RequestMethod.GET)
	public ModelAndView ajouterArticle() {
		modelAndView.addObject("rubriques", rubriqueService.findAll());
		modelAndView.setViewName(".ajouArticle");
		return modelAndView;
	}
	
	@RequestMapping(value = "actionAjouArticle", method = RequestMethod.POST)
	public String actionAjouterArticle(
			 @RequestParam("reference") String reference,
			 @RequestParam("titre") String titre,
			 @RequestParam("auteur") String auteur,
			 @RequestParam("description") String description,
			 @RequestParam("prix") Double prix,
			 @RequestParam("idRubrique") Long idRubrique
			) {
		Article article=new Article();
		article.setIdArticle(reference);
		article.setTitre(titre);
		article.setAuteur(auteur);
		article.setDescription(description);
		article.setPrix(prix);
		Rubrique rubrique=rubriqueService.findByPk(idRubrique);
		article.setRubrique(rubrique);
		articleService.merge(article);
		logger.debug("Ok !");
		return "redirect:/articles";
	}
	
	@RequestMapping(value = "modif", method = RequestMethod.GET)
	public ModelAndView moddifierArticle(@RequestParam String idArticle) {
		Article article=new Article();
		article=articleService.findByPk(idArticle);
		modelAndView.addObject("article", article);
		modelAndView.addObject("rubriques", rubriqueService.findAllOrderBy("theme"));
		modelAndView.addObject("message",
				"Modification effectuer avec succes ! ");
		modelAndView.setViewName(".modifierArticle");
		return modelAndView;
	}

	@RequestMapping(value = "actionModifArticle", method = RequestMethod.POST)
	public String actionModdifierArticle(@ModelAttribute("article") Article article){
		
		final Article articleModif =articleService.findByPk(article.getIdArticle());
		articleModif.setAuteur(article.getAuteur());
		articleModif.setDescription(article.getDescription());
		articleModif.setPrix(article.getPrix());
		articleModif.setTitre(article.getTitre());
		
		final Rubrique rubrique = rubriqueService.findByPk(article.getRubrique().getId());
		articleModif.setRubrique(rubrique);
	
		articleService.merge(articleModif); 
		
		modelAndView.addObject("message",
				"Modification effectuer avec succes ! ");
		return "redirect:/articles";
	}

}
