package ma.ensa.boutik.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "rubrique")
public class Rubrique implements Serializable {

	@Id
	@GeneratedValue
	@Column(name = "idRubrique")
	private Long id;

	@Column(name = "theme")
	private String theme;

	@OneToMany(mappedBy = "rubrique", fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
	private  Set<Article> articles = new HashSet<Article>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public Set<Article> getArticles() {
		return articles;
	}
	
	

}
