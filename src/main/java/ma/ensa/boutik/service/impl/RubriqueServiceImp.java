package ma.ensa.boutik.service.impl;

import java.util.List;

import ma.ensa.boutik.dao.RubriqueDao;
import ma.ensa.boutik.domain.Rubrique;
import ma.ensa.boutik.service.RubriqueService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RubriqueServiceImp implements RubriqueService {

	@Autowired
	private RubriqueDao rubriqueDao;
	
	@Override
	public List<Rubrique> findAll() {
		return rubriqueDao.findAll();
	}

	@Override
	public Rubrique findByPk(Long id) {
		return rubriqueDao.findByPk(id);
	}
	@Override
	public List<Rubrique> findAllOrderBy(String theme){
		return rubriqueDao.findAllOrderBy(theme);
	}
}
