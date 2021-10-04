package com.caresoft.clinicapp;

import java.util.ArrayList;

public class PatientRecord {
	
	// Member variables
    private ArrayList<String> charts;
    
    // Constructor
    public PatientRecord(ArrayList<String> charts) {
        this.charts = charts;
    }
    
    // Get Charts
    public ArrayList<String> getCharts() {
        return charts;
    }
    
    // Set Charts
    public void setCharts(ArrayList<String> charts) {
        this.charts = charts;
    }
}