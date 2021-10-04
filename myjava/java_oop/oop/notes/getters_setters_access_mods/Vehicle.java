// Getters and Setters

class Vehicle {

    // Member variables (aka field, attribute) - should amost always be declared as "private"
    //      to prevent direct access to the field from other parts of the app
    //      Also set data types of them.
    private int numberOfWheels;
    private String color;

    // Constructor - (All arguments Constructor)
    public Vehicle (int number, String color) {
        this.numberOfWheels = number;
        this.color = color;
    }

    // Constructor - (No arguments Constructor)
    public Vehicle () {
        this.numberOfWheels = 4;
        this.color = white;
    }

    // Getters and Setters - used to access the member variables (above)

    // getter - get a value
    // name the method = "get" + memberVariable (e.g. numberOfWheels)
    public int getNumberOfWheels() {
        // return memberVariable
        return numberOfWheels;
    }
    
    // setter - set a value
    // name the method = "set" + memberVariable (e.g. numberOfWheels)
    public void setNumberOfWheels(int number) {
        // memberVariable = parameter (e.g. number)
        numberOfWheels = number;
    }
    // getter
    public String getColor() {
        return color;
    }
    // setter
    public void setColor(String color) {
        // this - used to access memberVariables from the class directly
        // e.g. this.color, this.numberOfWheels
        this.color = color;        // 1
    }
}