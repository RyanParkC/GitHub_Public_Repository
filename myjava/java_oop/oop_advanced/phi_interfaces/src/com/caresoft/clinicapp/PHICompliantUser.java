package com.caresoft.clinicapp;

public interface PHICompliantUser {
    
	// Abstract - does not have an implementation by default
	//				thus, abstract methods need to be implemented
	
	// Assign Pin
    // Expected to assign the pin to the user (as a member variable)
    abstract boolean assignPin(int pin);
    
    // ID checker
    // Expected to compare instance id with id passed in. Returns true or false.
    abstract boolean isAuthorized(Integer confirmedAuthID);
}