package com.wolf.camp.model;

// Generated May 5, 2015 8:59:40 PM by Hibernate Tools 4.3.1

import static javax.persistence.GenerationType.IDENTITY;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Season generated by hbm2java
 */
@Entity
@Table(name = "season", catalog = "camp")
public class Season implements java.io.Serializable {

	private Integer id;
	private String name;
	private List<Item> items;

	public Season() {
	}

	

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "name")
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}


	@ManyToMany
	
	  @JoinTable(
		      name="SEASON_ITEM",
		      joinColumns={@JoinColumn(name="SEASON_ID", referencedColumnName="ID")},
		      inverseJoinColumns={@JoinColumn(name="ITEM_ID", referencedColumnName="ID")})
	public List<Item> getItems() {
		return items;
	}



	public void setItems(List<Item> items) {
		this.items = items;
	}




	

}
