package com.caresoft.clinicapp;

import java.util.ArrayList;

import java.util.Date;

public class AdminUser extends User implements PHIAdminCompliant {
	
	// Member variables (private) 
    private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;
    
    // Constructor (with all arguments) ------------------------------------------------
    public AdminUser (Integer employeeID, String role, ArrayList<String> securityIncidents) {
    	// super() - refers to parent class objects
    	super();
    	// this - to access member variables
    	this.employeeID = employeeID;
    	this.role = role;
    	this.securityIncidents = securityIncidents;
    }
    // Implementing Interface abstract methods (PHICompliantUser) ----------------------
    // New Incident report
    public void newIncident(String notes) {
        String report = String.format(
        	// %s = string, \n = next line
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes // inputs
        );
        securityIncidents.add(report);
    }
    // Return as Array
	public ArrayList<String> reportSecurityIncidents() {
		return securityIncidents;
	}
    
    // Authorization Incident report
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }
    
    // Getters and Setters ------------------------------------------------------------
	// EmployeeID ------------------------------------
    // Get - 
    public Integer getEmployeeID() {
		return employeeID;
	}
    // Set - 
	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}
	
	// Role ------------------------------------------
	// Get - 
	public String getRole() {
		return role;
	}
	// Set - 
	public void setRole(String role) {
		this.role = role;
	}
	
	// Security Incidents -------------------------------------------------------------
	// Get - 
	public ArrayList<String> getSecurityIncidents() {
		return securityIncidents;
	}
	// Set - 
	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
		this.securityIncidents = securityIncidents;
	}
}

