package ma.ensa.boutik.dao.impl;

import ma.ensa.boutik.dao.AbstractDaoJpa;
import ma.ensa.boutik.dao.RubriqueDao;
import ma.ensa.boutik.domain.Rubrique;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public class RubriqueDaoImp extends AbstractDaoJpa<Rubrique, Long> implements RubriqueDao {

	public RubriqueDaoImp() {
		super(Rubrique.class);
	}

}
