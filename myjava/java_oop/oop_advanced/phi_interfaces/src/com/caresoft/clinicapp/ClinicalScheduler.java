package com.caresoft.clinicapp;

import java.util.*;

public class ClinicalScheduler implements PHIAdminCompliant {
    
	// Member variables (private)
    private ArrayList<AdminUser> adminUsers; 
    private HashSet<Physician> doctors;
    private ArrayList<Appointment> appointments;
    private ArrayList<String> ePHIBreaches; // this class's version of security incidents
    
    // TO DO: Constructor ------------------------------------------------------------------------------
    // Constructor - for constructing ClinicalScheduler object
    public ClinicalScheduler (ArrayList<AdminUser> adminUsers, HashSet<Physician> doctors,
							ArrayList<Appointment> appointments, ArrayList<String> ePHIBreaches) {
			super();
			this.adminUsers = adminUsers;
			this.doctors = doctors;
			this.appointments = appointments;
			this.ePHIBreaches = ePHIBreaches;
	}
    
    // Implementing Interface methods (PHIAdminCompliant) ----------------------------------------------
    // 		Implement all "abstract" methods
    
    // Report Security Incidents
    public ArrayList<String> reportSecurityIncidents() {
    	return ePHIBreaches;
    }
    
    
    // Methods -----------------------------------------------------------------------------------------
    
    // New Incident Report
    public void newIncident(Date incidentDate, Integer userID, String notes) {
        String report = String.format(
            "Datetime: %s \n,  Reported By Clinical Scheduler, User ID: %s\n %s \n", 
            incidentDate, userID, notes
        );
        ePHIBreaches.add(report);
    }
    
    // Book Appointment
    public boolean bookAppointmentFor(Patient patient, Physician doctor, Date apptDate) {
        boolean success = false;
        // You see other code here 
    	// (no need to implement anything here for this assignment)
        return success;
    }
    
    // Show Open Appointments
    public ArrayList<Appointment> openAppointmentsByPCP(Physician doctor, Date startRange, Date endRange){
        ArrayList<Appointment> openAppointments = new ArrayList<Appointment>();
        // .. you see existing code to get appointment list.
    	// (Leave as is for the assignment, no need to implement anything here.)
        return openAppointments;
    }
    
    // TO-DO: add Setters and Getters ------------------------------------------------------------------
    
    // AdminUsers -------------------------------------------------
    // Get - 
	public ArrayList<AdminUser> getAdminUsers() {
		return adminUsers;
	}
	// Set -
	public void setAdminUsers(ArrayList<AdminUser> adminUsers) {
		this.adminUsers = adminUsers;
	}

	// Doctors -----------------------------------------------------
	// Get - 
	public HashSet<Physician> getDoctors() {
		return doctors;
	}
	// Set - 
	public void setDoctors(HashSet<Physician> doctors) {
		this.doctors = doctors;
	}

	// Appointments ------------------------------------------------
	// Get - 
	public ArrayList<Appointment> getAppointments() {
		return appointments;
	}
	// Set - 
	public void setAppointments(ArrayList<Appointment> appointments) {
		this.appointments = appointments;
	}

	// PHI Breaches ------------------------------------------------
	// Get - 
	public ArrayList<String> getePHIBreaches() {
		return ePHIBreaches;
	}
	// Set - 
	public void setePHIBreaches(ArrayList<String> ePHIBreaches) {
		this.ePHIBreaches = ePHIBreaches;
	}
}