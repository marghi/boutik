package ma.ensa.boutik.dao;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.util.List;

import ma.ensa.boutik.AbstractDbUnitEnabledTest;
import ma.ensa.boutik.domain.Article;
import ma.ensa.boutik.domain.Rubrique;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * 
 * @author dmarghi
 *
 */
public class ArticleDaoTest extends AbstractDbUnitEnabledTest {

	@Override
	protected String getXmlDataSetResourceName() {
		return "/data.xml";
	}
	
	
	@Autowired
	private ArticleDao articleDao;
	@Autowired
	private RubriqueDao rubriqueDao;
	/**
	 *Afficher tous les articles
	 * @throws Exception
	 */
	@Test
	public void testFindAll()throws Exception{
		List<Article> lisArticles =articleDao.findAll();
		assertTrue(lisArticles.size()>0);
	}
	
	@Test
	public void testFindByPk() throws Exception{
		Article article=articleDao.findByPk("aa");
		assertNotNull(article);
	}
	
	@Test
	public void testMergeArticle() throws Exception{
		Article article=new Article();
		article.setIdArticle("aa");
		article.setTitre("tit");
		article.setAuteur("aut");
		article.setDescription("des");
		article.setPrix(Double.valueOf(12.3));
		Rubrique rubrique=rubriqueDao.findByPk(Long.valueOf(4));
		article.setRubrique(rubrique);
		articleDao.merge(article);
		assertNotNull(article);
		assertEquals("aut", article.getAuteur());
	}
}
