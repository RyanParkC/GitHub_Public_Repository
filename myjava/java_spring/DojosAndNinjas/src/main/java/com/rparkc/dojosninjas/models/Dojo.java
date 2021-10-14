package com.rparkc.dojosninjas.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Entity
@Table( name="dojos" )
public class Dojo {
	
	// ***** MEMBER VARIABLES / VALIDATIONS ************************* //
	
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY ) // db auto-generates ID #
	private Long id;
	
	@NotBlank
	@Size( min = 3, max = 15, message = "Dojo name must be between 3 and 15 characters." )
	private String name;
	
	@Column( updatable = false )
	private Date created_at;
	
	private Date updated_at;
	
	// ***** MySQL RELATIONSHIPS ************************************ //
	
	@OneToMany( mappedBy="dojo", fetch = FetchType.LAZY )
	private List<Ninja> ninjas;
	
	// ***** CONSTRUCTOR(S) ***************************************** //

	public Dojo() {
		
	}
	
	// ***** GETTERS / SETTERS ************************************** //
	
	// ----- ID (DOJO) ----------------------------- //

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	// ----- NAME (DOJO) --------------------------- //

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	// ----- CREATED AT ---------------------------- //

	public Date getCreatedAt() {
		return created_at;
	}

	public void setCreatedAt(Date created_at) {
		this.created_at = created_at;
	}

	// ----- UPDATED AT ---------------------------- //

	public Date getUpdatedAt() {
		return updated_at;
	}

	public void setUpdatedAt(Date updated_at) {
		this.updated_at = updated_at;
	}

	// ----- NINJA (MANY) ------------------------- //

	public List<Ninja> getNinjas() {
		return ninjas;
	}

	public void setNinjas(List<Ninja> ninjas) {
		this.ninjas = ninjas;
	}
	
	// ***** PROTECTED METHODS ************************************** //
	
	@PreUpdate
	public void onUpdate() {
		this.updated_at = new Date();
	}

	@PrePersist
	public void onCreate() {
		this.created_at = new Date();
	}
	
}