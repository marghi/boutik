package ma.ensa.boutik.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name="article")
public class Article implements Serializable{

	@Id
	@Column(name="idArticle")
	private String idArticle;
	
	@Column(name="titre")
	private String titre;
	
	@Column(name="auteur")
	private String auteur;
	
	@Column(name="description")
	private String description;
	
	@Column(name="prix")
	private Double prix;
	
	@ManyToOne
	@JoinColumn(name="rubrique", nullable=false)
	private Rubrique rubrique;
	
    @OneToMany(mappedBy = "article", fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
    private  Set<Listes> listes = new HashSet<Listes>();

    /**
     * ------------------------------
     */
	public String getIdArticle() {
		return idArticle;
	}

	public void setIdArticle(String idArticle) {
		this.idArticle = idArticle;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getAuteur() {
		return auteur;
	}

	public void setAuteur(String auteur) {
		this.auteur = auteur;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPrix() {
		return prix;
	}

	public void setPrix(Double prix) {
		this.prix = prix;
	}

	public Rubrique getRubrique() {
		return rubrique;
	}

	public void setRubrique(Rubrique rubrique) {
		this.rubrique = rubrique;
	}

	public Set<Listes> getListes() {
		return listes;
	}

	public void setListes(Set<Listes> listes) {
		this.listes = listes;
	}
    
    
}
