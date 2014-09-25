package ma.ensa.boutik.service.impl;

import ma.ensa.boutik.dao.ClientDao;
import ma.ensa.boutik.domain.Client;
import ma.ensa.boutik.service.ClientService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ClientServiceImp implements ClientService{

	@Autowired
	private ClientDao clientDao;
	
	@Override
	public Client merge(Client client) {
		return clientDao.merge(client);
	}

	@Override
	public Client findByPk(String email) {
		return clientDao.findByPk(email);
	}

}
