// inside of Heater.java

// Whereas a class can only inherit (extend) from one other class, 
//                                      it may implement many interfaces.
public class Heater extends ElectricalAppliance implements ACPowerable {

    // Setting Data Types
    public Integer fanSpeedPercent = 0;
    public Integer heatSettingPercent = 0;
    public Boolean isPluggedIn = false;
    public Integer maxWattage;
    
    // Heater properties
    public Heater(Integer maxWattage) {
        this.maxWattage = maxWattage;
    }
    
    // Settings
    public void applySettings(Integer fanSpeedPercent, Integer heatSettingPercent) {
        this.fanSpeedPercent = fanSpeedPercent;
        this.heatSettingPercent = heatSettingPercent;
    }
    
    // State #1
    public void plugIn() {
        isPluggedIn = true;
    }
    
    // State #2
    public void unPlug() {
        isPluggedIn = false;
    }
    
    // State #3
    public boolean checkPluggedIn() {
        return isPluggedIn;
    }
    
    // Conditional
    public void checkPowerConsumption() {
        // If plugged in, then
        if(isPluggedIn) {
            // Power consumption (initial value)
            Double power = 0.0;
            // Power consumption:
            // assuming both fan and heater contribute evenly to power consumption
            power += maxWattage * 0.5 * fanSpeedPercent * 0.01;
            power += maxWattage * 0.5 * heatSettingPercent * 0.01;
            System.out.println("The heater is consuming " + power + " Watts!");
        } else {
            System.out.println("The heater isn't plugged in!");
        }
    }
}

