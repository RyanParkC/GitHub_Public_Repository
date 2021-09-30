

import java.util.ArrayList;

public class CafeUtil {

    // Reward system - 
    //      win 1 free drink per week (up to 10 weeks)
    //      customer must buy +1 more drink than they did previous week
    //      Week 1(1),2,3,4,5,6,7,8,9,10 = 55 purchases needed by week 10
    public Integer getStreakGoal(int numberOfWeeks) {
        int drinks = 0;
        for (int i = 1; i <= numberOfWeeks; i++) {
            drinks += i;
            System.out.println(drinks);
        }
        return drinks;
    }
    // PriceChart -
    //      
    public String printPriceChart(String productName, double productPrice, int maxNumProdPerCustomer) {
        double priceAccumulator = 0;
        double discount = 0;
        String printPriceChart = "";
        System.out.println(productName);
        for (int i = 1; i < maxNumProdPerCustomer; i++) {
            priceAccumulator += (productPrice - discount);
            printPriceChart += (i + " - " + String.format("$%.2f \r\n", priceAccumulator));
            discount += .50;
            
        } 
        System.out.println(printPriceChart);
        return printPriceChart;
    }
    // getOrderTotal - 
    public String getOrderTotal(double[] lineItemsArr) {
        double total = 0;
        for (int i = 0; i < lineItemsArr.length; i++) {
            total += lineItemsArr[i];
        }
        return String.format("Order Total: $%.2f \r\n", total);
    }
    // displayMenu
    public String displayMenu(ArrayList<String> menuItemNames, ArrayList<Double> menuItemPrices) {
        String displayMenuString = "";
        for (int i = 0; i < menuItemNames.size(); i++) {
            displayMenuString += "Option : " +
                    i + " " + menuItemNames.get(i) + " -- " + String.format("$%.2f\r\n", menuItemPrices.get(i));
        }
        System.out.println(displayMenuString);
        return displayMenuString;
    }

    public ArrayList<String> addCustomer(ArrayList<String> customerArray) {
        System.out.println("Please enter customer name: ");
        String userName = System.console().readLine();
        customerArray.add(userName);
        System.out.println("Hello "+ userName + " ,\r\n" +"There are "+ (customerArray.size() - 1)+" people ahead of you.");
        return customerArray;
    }
    // public ArrayList<String> addCustomer(ArrayList<String> customerArray) {
    //     while (true) {
    //         System.out.println("Please enter customer name or press 'q' to quit: ");
    //         String userName = System.console().readLine();
    //         if (userName.equals("q")){
    //             break;
    //         }

    //         customerArray.add(userName);

    //     }
    //     return customerArray;
    // }

}
