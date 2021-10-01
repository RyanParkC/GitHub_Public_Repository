package com.activities.zookeeper;

// Class Mammal
public class Mammal {
	
	// Set Data Type
    private int energyLevel;
    
    // Set starting value for class Mammal
    public Mammal() {
        this.energyLevel = 10;
    }

    // Get
    public int getEnergyLevel() {
        return energyLevel;
    }

    // Set
    public void setEnergyLevel(int energyLevel) {
        this.energyLevel = energyLevel;
    }
    
    // Display
    public int displayEnergyLevel(){
    	// Print
		//        System.out.println("Energy Level : " + energyLevel);
        return energyLevel;
    }
    
    // Convert to String Format
    public String toString(){
        return this.getClass().getSimpleName()+"\n" + this.getEnergyLevel();
    }
}