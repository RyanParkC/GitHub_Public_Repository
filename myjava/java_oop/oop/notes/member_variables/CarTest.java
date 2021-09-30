

public class CarTest {
    public static void main(String[] args) {
    
        // Create a new car, and assign it some values
        Car client1Car = new Car();
        client1Car.year = 2001;
        client1Car.make = "Honda";
        client1Car.model = "Civic";
        client1Car.color = "white";
    
        // Create another new car, and assign it some values
        Car client2Car = new Car();
        client2Car.year = 2018;
        client2Car.make = "Mazda";
        client2Car.model = "CX-3";
        client2Car.color = "navy";
    
        // Now they have their own individual data stored together.
        System.out.println("Car 1 make: " + client1Car.make);           // Car 1 make: Honda
        System.out.println("Car 1 model: " + client1Car.model);         // Car 1 model: Civic
    
        System.out.println("Car 2 make: " + client2Car.make);           // Car 2 make: Mazda
        System.out.println("Car 2 model: " + client2Car.model);         // Car 2 model: CX-3
    }
}