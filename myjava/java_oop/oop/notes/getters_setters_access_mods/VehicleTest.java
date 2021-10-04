// Run this Test file

class VehicleTest {

    // main function (to call methods)
    public static void main(String[] args) {

        // class Vehicle - create object "bike" as a new Vehicle
        Vehicle bike = new Vehicle();
        Vehicle car = new Vehicle();

        // bike -------------------------------------------------------------------------
        // for object "bike" - use setter to set member variable value to chosen value
        bike.setNumberOfWheels(2);
        bike.setColor("red");

        // new variable "bikeWheels" (with data type) - use getter to get member variable 
        int bikeWheels = bike.getNumberOfWheels();
        // new variable "bikeColor" (with data type) - use getter to get member variable
        String bikeColor = bike.getColor();

        // car --------------------------------------------------------------------------
        // for object "car" - use setter to set member variable value to chosen value
        car.setNumberOfWheels(4);
        car.setColor("green");

        // new variables (with data types) - use getter to get member variable values
        int carWheels = car.getNumberOfWheels();
        String carColor = car.getColor();

        // print ------------------------------------------------------------------------
        System.out.println("Bike object - Wheels: " + bikeWheels + ", Color: " + bikeColor);
        System.out.println("Car object - Wheels: " + carWheels + ", Color: " + carColor);
    }
}

