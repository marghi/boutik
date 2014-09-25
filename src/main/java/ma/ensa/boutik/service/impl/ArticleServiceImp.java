package ma.ensa.boutik.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ma.ensa.boutik.dao.ArticleDao;
import ma.ensa.boutik.domain.Article;
import ma.ensa.boutik.service.ArticleService;

@Service
@Transactional
public class ArticleServiceImp implements ArticleService {
	
	@Autowired
	private ArticleDao articleDao;
	
	/**
	 * Implementation de lister tous les articles
	 */
	@Override
	public List<Article> findAll() {
		return articleDao.findAll();
	}

	@Override
	public void supprimer(String idArticle) {
		Article article=articleDao.findByPk(idArticle);
			articleDao.remove(article);
	}

	@Override
	public Article merge(Article article) {
		return articleDao.merge(article);
	}

	@Override
	public Article findByPk(String idArticle) {
		return articleDao.findByPk(idArticle);
	}
	
}