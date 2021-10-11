package com.rparkc.allbooks.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity					// represents an entity model for our application
@Table(name="books")	// sets this as a table in the database
public class Book {
	
	// Member Variable(s) --------------------------------------------------
	
    @Id														// sets this as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)		// sets this as an auto-incrementing value
    private Long id;
    
    @NotNull								// @NotNull - adds validation that the column must be null
    @Size(min = 5, max = 200)				// @Size - adds validation that the column must be in the specified range
    private String title;
    
    @NotNull
    @Size(min = 5, max = 200)
    private String description;
    
    @NotNull
    @Size(min = 3, max = 40)
    private String language;
    
    @NotNull
    @Min(100)								// @Min - adds validation that the column must be at least the specified value
    private Integer numberOfPages;
    
    // This will not allow the createdAt column to be updated after creation
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    // Constructor(s) ------------------------------------------------------
    
    public Book() {
    	
    }

	public Book(String title, String description, String language, int numberOfPages) {
        this.title = title;
        this.description = description;
        this.language = language;
        this.numberOfPages = numberOfPages;
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
	
	// Title --------------------------
	// Set -
	public void setTitle(String title) {
		this.title = title;
	}
	// Get -
		public String getTitle() {
		return title;
	}
	
	// Description --------------------
	// Set -
	public void setDescription(String description) {
		this.description = description;
	}
	// Get -
	public String getDescription() {
		return description;
	}
	
	// Language -----------------------
	// Set -
	public void setLanguage(String language) {
		this.language = language;
	}
	// Get -
	public String getLanguage() {
		return language;
	}
	
	// Number of Pages ----------------
	// Set - 
	public void setNumberOfPages(Integer numberOfPages) {
		this.numberOfPages = numberOfPages;
	}
	// Get -
	public Integer getNumberOfPages() {
		return numberOfPages;
	}
    
	// Created At ---------------------
	// Set -
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	// Get -
	public Date getCreatedAt() {
		return createdAt;
	}
	
	// Updated At ---------------------
	// Set -
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	// Get -
	public Date getUpdatedAt() {
		return updatedAt;
	}
	
	// Protected Methods --------------
	
    @PrePersist							// @PrePersist - runs the method right before the object is created
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate							// @PreUpdate - runs a method when the object is modified
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
}

