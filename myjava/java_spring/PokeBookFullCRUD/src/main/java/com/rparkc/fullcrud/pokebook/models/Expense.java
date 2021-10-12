package com.rparkc.fullcrud.pokebook.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity						// represents an entity model for our application
@Table(name="expenses")		// sets this as a table in the database
public class Expense {
	
	// Member Variable(s) and Validations ----------------------------------
	
	@Id														// sets this as the primary key
	@GeneratedValue( strategy = GenerationType.IDENTITY )	// sets this as an auto-incrementing value
	private Long id;
	
	@NotBlank( message = "Expense name cannot be empty." )
	@Size( min = 2, max = 20, message = "Expense name must be between 2 and 20 characters " )
	private String name;
	
	@NotBlank( message = "Vendor must not be empty." )
	@Size( min = 2, max = 15, message = "Vendor must be between 2 and 15 characters." )
	private String vendor;
	
	@NotNull( message = "Amount must not be empty." )
	@Positive( message = "Amount must be greater than zero." )
	private double amount;
	
	@NotBlank( message="Description must not be empty." )
	@Size( min = 8, max = 200, message = "Description must be between 8 and 200 characters." )
	private String description;
	
	// This will not allow the createdAt column to be updated after creation
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
	
    // Constructor(s) ------------------------------------------------------
	
	public Expense() {
		
	}
	
	public Expense(
			@NotNull @Size( min = 2, max = 20 ) String name,
			@NotNull @Size( min = 2, max = 15) String vendor,
			@NotNull @Positive Double amount,
			@NotNull @Size( min = 8, max = 200 ) String description
			) {
		
			this.name = name;
			this.vendor = vendor;
			this.amount = amount;
			this.description = description;
	}
	
	// Getters and Setters ------------------------------------------------
	
	// ID ----------------------------
	// Set -
	public void setId(Long id) {
		this.id = id;
	}
	// Get -
	public Long getId() {
		return id;
	}

	// Name --------------------------
	// Set -
	public void setName(String name) {
		this.name = name;
	}
	// Get -
	public String getName() {
		return name;
	}

	// Amount ------------------------
	// Set -
	public void setAmount(double amount) {
		this.amount = amount;
	}
	// Get -
	public double getAmount() {
		return amount;
	}
	
	// Vendor ------------------------
	// Set -
	public void setVendor(String vendor) {
		this.vendor = vendor;
	}
	// Get -
	public String getVendor() {
		return vendor;
	}
	
	// Description -------------------
	// Set -
	public void setDescription(String description) {
		this.description = description;
	}
	// Get -
	public String getDescription() {
		return description;
	}

	// Created At --------------------
	// Set -
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	// Get -
	public Date getCreatedAt() {
		return createdAt;
	}

	// Updated At --------------------
	// Set -
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	// Get -
	public Date getUpdatedAt() {
		return updatedAt;
	}
	
	// Protected Methods -------------
	
	// @PrePersist - runs the method right before the object is created
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	// @PreUpdate - runs a method when the object is modified
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	

	
	
}