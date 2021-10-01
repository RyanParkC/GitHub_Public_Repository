package com.inheritance.projectone;

// Human is set as the subclass of Mammal, inheriting all members from superclass Mammal
class Human extends Mammal {
	// method for only Human class
	public void goToWork() {
		System.out.println("I'm going to work, something only humans can do.");
	}
	// method for if Human class starts sleeping
    public void startSleeping() {
    	// prints for Human class
        System.out.println("Toss and turn");	// "Toss and turn"	
        // prints from Mammal class method
        super.startSleeping();					// "ZzZz"
    }
}
