package ma.ensa.boutik.service;

import java.util.List;

import ma.ensa.boutik.domain.Rubrique;

public interface RubriqueService {
	
	/**
	 * Lister toutes les rubriques (themes)
	 * @return listeRubriques
	 */
	public List<Rubrique> findAll();
	
	/**
	 * trouver Rubrique par son id
	 * @param id
	 * @return Rubrique
	 */
	public Rubrique findByPk(Long id);

	/**
	 * Trouver les rubriques par leur themes
	 * @param theme
	 * @return listRubriques
	 */
	List<Rubrique> findAllOrderBy(String theme);

}
