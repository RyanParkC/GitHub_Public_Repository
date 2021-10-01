package com.activities.zookeeper;

// Bat subclass inherits all members from Mammal superclass
public class Bat extends Mammal{
	// Set Energy Level
    public Bat(){this.setEnergyLevel(300);}

    // Fly
    public void fly() {
    	// Print
        System.out.println("The bat takes off into the air, flapping its wings madly and screeching aloud! Loses 50 energy!");
        // Decrease(-) Energy
        this.setEnergyLevel(this.getEnergyLevel() - 50);
        // Print
        System.out.println("Energy level : " + this.getEnergyLevel());
    }

    // eatHuman
    public void eatHuman() {
    	// Print
        System.out.println("Eating human... yuck! Gains 25 energy!");
        // Increases(+) Energy
        this.setEnergyLevel(this.getEnergyLevel() + 25);
        // Print
        System.out.println(this.getEnergyLevel());
    }

    // attackTown
    public void attackTown() {
    	// Print
        System.out.println("The bat gathers its buddies and unleashes a supersonic attack on the town, shattering lightbulbs. The town quickly sets on fire! Loses 100 energy!");
        // Decrease(-) Energy
        this.setEnergyLevel(this.getEnergyLevel() - 100);
        // Print
        System.out.println(this.getEnergyLevel());
    }
}
