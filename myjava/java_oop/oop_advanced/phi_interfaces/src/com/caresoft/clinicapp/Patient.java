package com.caresoft.clinicapp;

import java.util.*;

public class Patient extends User implements PHICompliantUser {
    
	// Member variables (private)
    private String firstName;
    private String lastName;
    // .. other personal identifying information .. //
    
    // using Classes to call Methods 
    Physician primaryCarePhysician;
    PatientRecord medicalHistory;
    
    // Member variables (public)
    ArrayList<Integer> currentPrescriptionsByRX;
    int providerCode;
    int memberNumber;
    
    // TO DO: Constructor -----------------------------------------------------------------------------
    // Constructor - for constructing a Patient Object
    public Patient (String firstName, String lastName, Physician primaryCarePhysician, 
    				ArrayList<Integer> currentPrescriptionsByRx, int providerCode, int memberNumber,
    				PatientRecord medicalHistory) {
    	// super() refers to parent class objects
    	super();
    	// this - used to access member variables
    	// Object's member variable is set to equal input argument value
    	this.firstName = firstName;
    	this.lastName = lastName;
    	this.primaryCarePhysician = primaryCarePhysician;
    	this.currentPrescriptionsByRX = currentPrescriptionsByRx;
    	this.providerCode = providerCode;
    	this.memberNumber = memberNumber;
    	this.medicalHistory = medicalHistory;
    }
    
    // Methods ---------------------------------------------------------------------------------------
    
    public boolean requestAppointment (Date date, Physician doctor) {
        boolean successfullyAdded = false;
        // you see existing code to find and schedule an appointment
    	// (Leave as is for the assignment, no need to implement anything here.)
        return successfullyAdded;
    }
    
    void addChartNotes(String notes) {
        this.medicalHistory.getCharts().add(notes);
    }
    
    // Implementing Interface Methods (PHICompliantUser) ---------------------------------------------
    // 		Implement all "abstract" methods
    
    // Assign Pin 
    public boolean assignPin (int pin) {
    	this.setPin(memberNumber);;
    	return true;
    }
    // ID Checker 
    public boolean isAuthorized (Integer pin) {
    	return true;
    }
    
    // TO DO: Setters & Getters ----------------------------------------------------------------------
    // First Name --------------------------------
    // Get - First Name
    public String getFirstName() {
    	return firstName;
    }
    // Set - First Name
    public void setFirstName (String firstName) {
    	this.firstName = firstName;
    }
    
    // Last Name --------------------------------
    // Get - Last Name
    public String getLastName() {
    	return lastName;
    }
    // Set - Last Name
    public void setLastName (String lastName) {
    	this.lastName = lastName;
    }
    
    // Primary Care Physician (PCP) --------------
    // Get - PCP
    public Physician getPrimaryCarePhysician() {
    	return primaryCarePhysician;
    }
    // Set - PCP
    public void setPrimaryCarePhysician (Physician primaryCarePhysician) {
    	this.primaryCarePhysician = primaryCarePhysician;
    }
    
    // Current Prescriptions By RX ---------------
    // Get - Prescriptions by RX
	public ArrayList<Integer> getCurrentPrescriptionsByRX() {
		return currentPrescriptionsByRX;
	}
	// Set - Prescriptions by RX
	public void setCurrentPrescriptionsByRX(ArrayList<Integer> currentPrescriptionsByRX) {
		this.currentPrescriptionsByRX = currentPrescriptionsByRX;
	}
	
	// Provider Code -----------------------------
	// Get - Provider Code
	public int getProviderCode() {
		return providerCode;
	}
	// Set - Provider Code
	public void setProviderCode(int providerCode) {
		this.providerCode = providerCode;
	}
	
	// Member Number -----------------------------
	// Get - Member Number
	public int getMemberNumber() {
		return memberNumber;
	}
	// Set - Member Number
	public void setMemberNumber(int memberNumber) {
		this.memberNumber = memberNumber;
	}
	
	// Patient Record ----------------------------
	// Get - Patient Record
	public PatientRecord getMedicalHistory() {
		return medicalHistory;
	}
	// Set - Patient Record
	public void setMedicalHistory(PatientRecord medicalHistory) {
		this.medicalHistory = medicalHistory;
	}
}
