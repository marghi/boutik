package ma.ensa.boutik.dao.impl;

import ma.ensa.boutik.dao.AbstractDaoJpa;
import ma.ensa.boutik.dao.ArticleDao;
import ma.ensa.boutik.domain.Article;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public class ArticleDaoImp extends AbstractDaoJpa<Article, String> implements ArticleDao {
	
	public ArticleDaoImp(){
		super(Article.class);
	}

}
