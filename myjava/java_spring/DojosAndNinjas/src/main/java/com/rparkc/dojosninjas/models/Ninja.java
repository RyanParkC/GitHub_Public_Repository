package com.rparkc.dojosninjas.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Entity
@Table( name = "ninjas" )
public class Ninja {

	// ***** MEMBER VARIABLES / VALIDATIONS ************************* //
	
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY ) 
	private Long id;
	
	@NotBlank
	@Size(min = 2, max = 15, message="First Name must be at least 2 characters.")
	private String first_name;
	
	@NotBlank
	@Size(min = 2, max = 15, message="First Name must be at least 2 characters.")
	private String last_name;
	
	@NotNull
	@Positive
	private int age;
	
	@Column( updatable = false )
	private Date created_at;
	
	private Date updated_at;
	
	// ***** MySQL RELATIONSHIPS ************************************ //
	
	@ManyToOne( fetch = FetchType.LAZY )
	@JoinColumn( name = "dojo_id" )
	private Dojo dojo;
	
	// ***** CONSTRUCTOR(S) ***************************************** //
	
	public Ninja() {
		
	}

	// ***** GETTERS / SETTERS ************************************** //

	// ----- ID (NINJA) ---------------------------- //
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	// ----- FIRST NAME ---------------------------- //
	public String getFirstName() {
		return first_name;
	}

	public void setFirstName(String first_name) {
		this.first_name = first_name;
	}

	// ----- LAST NAME ----------------------------- //
	public String getLastName() {
		return last_name;
	}

	public void setLastName(String last_name) {
		this.last_name = last_name;
	}

	// ----- AGE ----------------------------------- //
	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
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

	// ----- DOJO (ONE) --------------------------- //
	
	public Dojo getDojo() {
		return dojo;
	}

	public void setDojo(Dojo dojo) {
		this.dojo = dojo;
	}
	
	// ***** PROTECTED METHODS ************************************** //
	
	@PreUpdate
	protected void onUpdate() {
		this.updated_at = new Date();
	}

	@PrePersist
	protected void onCreate() {
		this.created_at = new Date();
	}
	
}