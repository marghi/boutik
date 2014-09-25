package ma.ensa.boutik.dao;

import java.util.List;

/**
 * DaoBase
 * @param <E>
 * @param <PK>
 */
public interface DaoBase<E, PK> {
	/**
	 * count the number of E in database
	 * @return
	 */
	int count();

	/**
	 * find all elements E in database
	 * @return the list of Objects E
	 */
	List<E> findAll();
	/**
	 * find all value for a given table regarding a field name
	 * 
	 * @param fieldName
	 *            the name of the field to order by
	 * @return the list of values ordered
	 */
	List<E> findAllOrderBy(String pFieldName);

	/**
	 * findByPk
	 * @param pK
	 * @return
	 */
	E findByPk(PK pK);

	/**
	 * La methode flush
	 */
	//void flush();

	/**
	 * merge
	 * @param entity
	 */
	E merge(final E pEntity);

	/**
	 * remove
	 * @param arg0
	 * @see javax.persistence.EntityManager#remove(java.lang.Object)
	 */
	void remove(E pEntity);

}
