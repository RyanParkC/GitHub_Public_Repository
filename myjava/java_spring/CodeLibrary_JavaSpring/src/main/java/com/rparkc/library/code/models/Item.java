package com.rparkc.library.code.models;

public class Item {

	// Member Variables -------------------------
	private String name;
	private double price;

	// Constructor ------------------------------
	// Object - Item
	public Item (String name, double price) {
		this.name = name;
		this.price = price;
	}

	// Getters & Setters ------------------------
	
	// Name ------------------
	// Get - 
	public String getName() {
		return name;
	}
	// Set - 
	public void setName(String name) {
		this.name = name;
	}
	
	// Price -----------------
	// Get -
	public double getPrice() {
		return price;
	}
	// Set -
	public void setPrice(double price) {
		this.price = price;
	}
}
