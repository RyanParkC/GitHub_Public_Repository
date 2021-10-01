package com.activities.zookeeper;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	    	// write your code here
		Mammal mammal = new Mammal();
		Gorilla gorilla = new Gorilla("Curious George");
		Bat bat = new Bat();
		Lion lion = new Lion("Simba Jr.");
		
		// Gorilla class
		System.out.println(gorilla);
		// eatBananas
		gorilla.eatBananas();
		gorilla.eatBananas();
		// throwSomething
		System.out.println(gorilla.throwSomething("banana peel"));
		System.out.println(gorilla.throwSomething("marshmallow"));
		System.out.println(gorilla.throwSomething("shoe"));
		// climb
		gorilla.climb();

		// Bat class
		bat.attackTown();
		bat.attackTown();
		bat.attackTown();
		bat.eatHuman();
		bat.eatHuman();
		bat.fly();
		bat.fly();
		
		
		// Lion class
		lion.roar();
		lion.pounce();
		lion.nap();


	}

}