package myjava.fundamentals.javafun.methods;


public class Methods {
        // static = when the function itself won't be impacted by the object.
        // static = will not be changed no matter what. so just executes regardless of differences in object.
        // exclude static = if want a function to be specific for a certain object
        public static void main (String[] args){
            String greeting = basicGreeting();
            System.out.println(greeting);
            System.out.println(guestGreeting("Boba", "on Monday"));
            System.out.println(guestGreeting1("Boba"));
            System.out.println(guestGreeting1("Boba", "Monday"));
        }
    // JavaScript example method:
        /* function getGreeting() {
            return "Hello from your old friend JS!";
        } */
    // Java example method:
        // String = return type
        // basicGreeting = function name
        // () = parameters
        public static String basicGreeting(){
        // You do not need to code here.. this is an example method
            return "Hello, lovely to see you. How are you?";
        }

    // Method Signatures
        // every method has a "signature". allows us to "overload" methods
        // guestGreeting = method name
        // () = parameters
        public static String guestGreeting(String name, String dayPeriod) {
            // Example
            return name + " " + dayPeriod;
        }
        // Signature example
        public static void fooBar(int someNumber, String someString) {
            // fooBar(int, String) = signature
        }
    // Overloading Methods
        // Here, we have 2 methods in the SAME class
        // Which code would be invoked when we call the guestGreeting1 method?
            // Depends on:
            // 1. Argument type
            // 2. Method signature ( e.g. fxn (str) vs. fxn (str, str) )
        public static String guestGreeting1(String name) {
            return "Hi, " + name;    // invoke this method by calling guestGreeting1(String)
        }
        public static String guestGreeting1(String name, String dayPeriod) {
            return "Hello, " + name + " it is " + dayPeriod; // invoke this method by calling guestGreeting1(String, String)
        }
}