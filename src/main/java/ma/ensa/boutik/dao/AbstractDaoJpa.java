package ma.ensa.boutik.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * implementer la classe DaoBase
 * 
 * @param <E>
 * @param <PK>
 */

public class AbstractDaoJpa<E, PK> implements DaoBase<E, PK> {

	/**
	 * EntityManager
	 */
	@PersistenceContext
	private EntityManager entityManager;

	/**
	 * L'utilisation pour la persistance d'un mapping O/R
	 */
	private final Class<? extends E> entityClass;

	/**
	 * AbstractDaoJpa
	 * 
	 * @param aEntityClass
	 */
	public AbstractDaoJpa(final Class<? extends E> pAEntityClass) {
		super();
		this.entityClass = pAEntityClass;
	}

	@Override
	public int count() {
		StringBuffer queryBuffuer = new StringBuffer("SELECT count(*) FROM ");
		queryBuffuer.append(this.entityClass.getName());
		return ((Long) this.getEntityManager()
				.createQuery(queryBuffuer.toString()).getResultList().get(0))
				.intValue();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<E> findAll() {
		StringBuffer queryBuffuer = new StringBuffer("FROM ");
		queryBuffuer.append(this.entityClass.getName());
		return this.getEntityManager().createQuery(queryBuffuer.toString())
				.getResultList();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<E> findAllOrderBy(String pOrderByFieldName) {
		return this.getEntityManager()
				.createQuery(this.generateFindAllQuery(pOrderByFieldName))
				.getResultList();
	}

	@Override
	public E findByPk(final PK pK) {
		return this.getEntityManager().find(this.entityClass, pK);
	}

	// @Override
	// public void flush() {
	// this.entityManager.flush();
	// }

	/**
	 * creer une query generique pour le find all
	 * 
	 * @param orderByFieldName
	 * @return la query
	 */
	private String generateFindAllQuery(String pOrderByFieldName) {
		// create the query
		StringBuffer queryBuffuer = new StringBuffer("select E from ");
		queryBuffuer.append(this.entityClass.getName());
		queryBuffuer.append(" E ");
		if ((pOrderByFieldName != null) && !pOrderByFieldName.isEmpty()) {
			queryBuffuer.append(" order by ");
			queryBuffuer.append(pOrderByFieldName);
		}
		return queryBuffuer.toString();
	}

	/**
	 * getter
	 * 
	 * @return
	 */
	protected EntityManager getEntityManager() {
		return this.entityManager;
	}

	@Override
	public E merge(final E pEntity) {
		return this.getEntityManager().merge(pEntity);
	}

	@Override
	public void remove(final E pEntity) {
		this.getEntityManager().remove(pEntity);
	}
}
