package ma.ensa.boutik.service;

import ma.ensa.boutik.domain.Client;

public interface ClientService {
	
	/**
	 * l'ajout d'un client.
	 * @param client
	 * @return Client
	 */
	public Client merge(Client client);
	
	/**
	 * afficher l'utilisateur par son email
	 * @param email
	 * @return Client courant
	 */
	public Client findByPk(String email);
}
