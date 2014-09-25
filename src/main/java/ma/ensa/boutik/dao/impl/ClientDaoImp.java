package ma.ensa.boutik.dao.impl;

import ma.ensa.boutik.dao.AbstractDaoJpa;
import ma.ensa.boutik.dao.ClientDao;
import ma.ensa.boutik.domain.Client;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public class ClientDaoImp extends AbstractDaoJpa<Client, String> implements ClientDao {

	public ClientDaoImp() {
		super(Client.class);
	}



}
