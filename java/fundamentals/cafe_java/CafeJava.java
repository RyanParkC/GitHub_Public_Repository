package java.fundamentals.cafe_java;
// CafeJava 

public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double cappuccinoPrice = 3.5;
        int dripCoffeePrice = 3;
        int latteCoffeePrice = 5;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
            System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //

        // 1. Cindhuri ordered a coffee. Print order status.
            System.out.println(customer1 + pendingMessage); // Displays "Cindhuri, your order will be ready shortly"
        
        // 2. Noah ordered a cappuccino. Use an "if" statement to check status of order and print status message.
            // If ready, also print message to display total $
            if ( isReadyOrder4 ) {
                System.out.println(customer4 + readyMessage);
                System.out.println(displayTotalMessage + cappuccinoPrice);
            } else {
                System.out.println(customer4 + pendingMessage);
            };
        
        // 3. Sam ordered 2 lattes, print message to display total first.
            System.out.println( displayTotalMessage + (latteCoffeePrice * 2) );
            // Next, print appropriate order status message.
            if ( isReadyOrder2 ) {
                System.out.println( customer2 + readyMessage );
            } else {
                System.out.println( customer2 + pendingMessage );
            };
            // Change the isReady flag value from true to false or vice versa in order to test your control logic (If-statements)
        
        // 4. Jimmy just realized he was charged for a coffee but had ordered a latte.
            // Tell him his new total (what he owes) to make up the difference
            System.out.println( displayTotalMessage + ( latteCoffeePrice - dripCoffeePrice ));
        
        // 5. Try changing the price values for each drink and isReady flags (booleans), to test if all of your logic works,
            // even when prices and statuses are changed.

        // Extra
            System.out.println("The price of Mocha is : " + mochaPrice);

            if ( isReadyOrder1 ) {
                System.out.println( customer1 + readyMessage );
            } else {
                System.out.println( customer1 + pendingMessage );
            }

            if ( isReadyOrder3 ) {
                System.out.println( customer3 + readyMessage );
            } else {
                System.out.println( customer3 + pendingMessage );
            }
    }
};
