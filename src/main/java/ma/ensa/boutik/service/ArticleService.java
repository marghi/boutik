package ma.ensa.boutik.service;

import java.util.List;

import ma.ensa.boutik.domain.Article;

public interface ArticleService {
	
	/**
	 * Lister tous les articles
	 * @return liste d'articles
	 */
	public List<Article> findAll();
	
	/**
	 * Supprission d'un article.
	 * @param article
	 */
	public void supprimer(String idArticle);
	
	/**
	 * Enregistrer un article
	 * @param article
	 * @return Article
	 */
	public Article merge(Article article);
	
	/**
	 * Trouber l'article par son identifiant.
	 * @param idArticle
	 * @return
	 */
	public Article findByPk(String idArticle);

}
