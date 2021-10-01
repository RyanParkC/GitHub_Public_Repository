package com.inheritance.projectone;

class Mammal {
	// private variable - only visible to Mammal class
    private boolean sleeping = false;
    // public methods - visible to all classes
    public void regulateTemperature() {
        System.out.println("My temperature is just right now.");
    }
    public void startSleeping() {
        sleeping = true;
        System.out.println("ZzZz");
    }
    public boolean isSleeping(){
        return sleeping;
    }
}