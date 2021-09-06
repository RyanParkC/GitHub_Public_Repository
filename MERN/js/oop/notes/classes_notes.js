/* Classes Notes */

/* Intro
    With the intro of ES6, JS devs now can use the 'Class' keyword */

/* Class and Constructor 
    All ES6 classes have a constructor.
    The constructor always runs whenever we create a new instance. */

class Vehicle {                                 // define our class using 'class'
    constructor(manufacturer, model, color) {   // method 'constructor' with 3 arguments to create new instance of class 'Vehicle
        this.miles = 0;                         // property1 of class 'Vehicle'
        this.manufacturer = manufacturer;       // property2
        this.model = model;                     // property3
        this.color = color;                     // property4
    }

    drive() {                                   // method 'drive' = function inside of class 'Vehicle'
        this.miles += 10;
    }
}

// Creating and using a new instance of Vehicle would look like this:

const car = new Vehicle("BMW", "M5", "blue");
car.drive();
console.log(car.miles);

/* Note:
    Classes are NOT hoisted.
    No matter what, the 'class' keyword will STAY where it was written and NOT move during interpretation. */