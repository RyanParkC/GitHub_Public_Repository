package com.caresoft.clinicapp;

import java.util.Date;
import java.util.ArrayList;
import java.util.HashSet;

public class Physician extends User  implements PHICompliantUser {
    
    private HashSet<Patient> patients;
    private ArrayList<String> securityIncidents;
    
    // ... you see other existing member variables. ...
    
    // TO DO: Constructor
    // Constructor - constructing object Physician ---------------------------------------------
    public Physician(HashSet<Patient> patients, ArrayList<String> securityIncidents) {
		super();
		this.patients = patients;
		this.securityIncidents = securityIncidents;
	}
    
    public void prescribeRXTo(Patient patient, Integer rxNumber) {
        patient.currentPrescriptionsByRX.add(rxNumber);
    }
    
    // Implementing Interface methods (PHICompliantUser ----------------------------------------
    // Abstract methods
    public boolean assignPin(int pin) {
  	   this.setPin(pin);
  	   return true;
     }
     public boolean isAuthorized(Integer pin) {
  	   return true;
     }
    
    // Incident Reports -----------------------------------------------------------------------
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }
    
    // TO DO: Setters & Getters
    // Patients -------------------------------------------------------------------------------
    // Get - 
	public HashSet<Patient> getPatients() {
		return patients;
	}
	// Set - 
	public void setPatients(HashSet<Patient> patients) {
		this.patients = patients;
	}
	
	// Security Incidents ---------------------------------------------------------------------
	// Get - 
	public ArrayList<String> getSecurityIncidents() {
		return securityIncidents;
	}
	// Set - 
	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
		this.securityIncidents = securityIncidents;
	}
}