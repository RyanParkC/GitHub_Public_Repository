// Home management app (an Internet of Things (IoT))
//      - to keep track of the statuses of many electrical appliances in a home.

// public = globally accessible
// interface = 
public interface ACPowerable {

    // Setting Data Types
    Integer voltage = 120;
    Integer frequency = 60;
    
    // Calling functions from class Heater
    abstract void unPlug();
    abstract boolean checkPluggedIn();
    
    // Conditional
    public default void hasPower() {
        String message = "The device is ";
        // ! = not 
        if (!checkPluggedIn()) {    // if NOT plugged in
            message += "not ";      // add "not" to message
        }
        System.out.println(message + "plugged in.");    // The device is (not) plugged in
    }
    
}
