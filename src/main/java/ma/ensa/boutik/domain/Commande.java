package ma.ensa.boutik.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "commande")
public class Commande implements Serializable {
	@Id
	@GeneratedValue
	@Column(name = "idCommande")
	private Long id;

	@Column(name = "date")
	private Date date;

	@Column(name = "etat")
	private String etat;
	
	@ManyToOne
	@JoinColumn(name="client", nullable=false)
	private Client client;
	
    @OneToMany(mappedBy = "commande", fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
    private Set<Listes> listes = new HashSet<Listes>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Set<Listes> getListes() {
		return listes;
	}

	public void setListes(Set<Listes> listes) {
		this.listes = listes;
	}

    
    
}
