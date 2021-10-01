package com.activities.zookeeper;

// Gorilla subclass inherits all members from Mammal superclass
public class Gorilla extends Mammal {
	// Private - not visible outside of class. final by default and cannot be overridden.
	// Setting Data Type
    private String name;
    
    // Change Name
    public Gorilla(String name) {
        this.name = name;
    }

    // throwSomething()
    public int throwSomething(String item){
    	// Print
        System.out.println(name + " throws a " + item + " and laughs in amusement. Loses 10 energy!");
        // Decrease(-) Energy
        this.setEnergyLevel(this.getEnergyLevel() - 5);
        // Print
        System.out.println("Energy left : " + this.getEnergyLevel());
        // Return Energy Level
        return this.getEnergyLevel();
    }
    
    // eatBananas()
    public void eatBananas(){
    	// Print
        System.out.println(name + " starts to peel back and eat bananas. He looks very pleased. Gains 10 energy!");
        // Increase(+) Energy Level
        this.setEnergyLevel(this.getEnergyLevel() + 10);
        // Print
        System.out.println("Energy left : " + this.getEnergyLevel());
    }
    
    // climb
    public void climb(){
    	// Print
        System.out.println(name + " grabs and starts climbing a tree with ease. Loses 10 energy!");
        // Decrease(-) Energy Level
        this.setEnergyLevel(this.getEnergyLevel() - 10);
        // Print
        System.out.println("Energy left : " + this.getEnergyLevel());
    }
    
    // Convert to String Format
    public String toString(){
        return this.getClass().getSimpleName()+"\n"+this.getEnergyLevel();
    }
}