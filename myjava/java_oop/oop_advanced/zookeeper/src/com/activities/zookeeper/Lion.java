package com.activities.zookeeper;

// Lion subclass inherits all members from Mammal superclass
public class Lion extends Mammal {
	public Lion() {this.setEnergyLevel(100);}

	// Setting Data Type
	private String name; 
	
    // Change Name
    public Lion(String name) {
        this.name = name;
    }
    
	public void roar() {
		System.out.println(name + " roars, making his presence well known to all. Loses 10 energy!");
		this.setEnergyLevel(this.getEnergyLevel() - 10);
		System.out.println("Energy level : " + this.getEnergyLevel());
	}
	
	public void pounce() {
		System.out.println(name + " pounces on an unsuspecting prey. It's mealtime... Loses 10 energy, but gains 20 energy!");
		this.setEnergyLevel(this.getEnergyLevel() - 10);
		this.setEnergyLevel(this.getEnergyLevel() + 20);
		System.out.println("Energy level : " + this.getEnergyLevel());
	} 
	
	public void nap() {
		System.out.println(name + " curls up on the ground. It's nap time... but beware, he is a light sleeper. Gains 15 energy!");
		this.setEnergyLevel(this.getEnergyLevel() + 15);
		System.out.println("Energy level : " + this.getEnergyLevel());
	}
}
