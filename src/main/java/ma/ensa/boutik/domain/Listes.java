package ma.ensa.boutik.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name="listes")
public class Listes implements Serializable{
	
	@Id
	@GeneratedValue
	@Column(name="idListes")
	private Long id;
	
	@Column(name="quantite")
	private Double quantite;
	
	@Column(name="totalArticle")
	private Double totalArticle;
	
	@ManyToOne
	@JoinColumn(name="commande", nullable=false)
	private Commande commande;
	
	@ManyToOne
	@JoinColumn(name="article", nullable=false)
	private Article article;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getQuantite() {
		return quantite;
	}

	public void setQuantite(Double quantite) {
		this.quantite = quantite;
	}

	public Double getTotalArticle() {
		return totalArticle;
	}

	public void setTotalArticle(Double totalArticle) {
		this.totalArticle = totalArticle;
	}

	public Commande getCommande() {
		return commande;
	}

	public void setCommande(Commande commande) {
		this.commande = commande;
	}

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}
	

}
