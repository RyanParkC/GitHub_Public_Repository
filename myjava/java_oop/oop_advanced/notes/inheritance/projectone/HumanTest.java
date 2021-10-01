package com.inheritance.projectone;

class HumanTest {
    public static void main(String[] args) {
        Human h = new Human();
        h.regulateTemperature();
        h.startSleeping();
        h.goToWork();
        boolean sleeping = h.isSleeping();
        
        if (sleeping){
            System.out.println("The human is sleeping!");
        }
    }
}

// Results:
//		My temperature is just right now.
//		ZzZz
//		I'm going to work, something only humans can do.
//		The human is sleeping!

