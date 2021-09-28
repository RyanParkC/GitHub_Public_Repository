package myjava.fundamentals.notes.arrays;

import java.util.ArrayList; // we need to include this line at the top of the file


// Array - fixed-size sequential collection of elements of the same type with a zero-based index [0]
//          This means that accessing and setting elements is done by an integer where 0 represents the first item, and so on.
//          You cannot add/remove items from an array, you can only re-assign (change) values.

public class Arrays {

    public static void main (String[] args) {
        // Call functions here
    }

    // Declaration, initialization, and adding in separate steps:
    
    int[] numbers; {             // Variable Declaration
        numbers = new int[5];    // Initialization
        numbers[0] = 4;          // Setting the value at index 0 to 4 (the default value was 0)
        numbers[1] = 8;
        numbers[2] = 8;
        numbers[3] = 5;
        numbers[4] = 9;
    }           


    String[] snacks = {
        "Almonds",
        "Carrots",
        "Pretzels",
        "Yogurt"
    };
    // System.out.println( snacks );
        // this should print something like 
        // [Ljava.lang.String;@6ff3c5b5

        // If we want to see the contents of the array, we need to make use of some extra methods like:
        // String.join( separator, array )
    // System.out.println( String.join(", ", snacks) );
        // this should print out something like
        // Almonds, Carrots, Pretzels, Yogurt

    // 
    // ArrayList
    // Can add/get elements in the following manner:
    ArrayList<Integer> myArray = new ArrayList<Integer>();
    // myArray.add(10);
    int num = myArray.get(0);

    // Adding elements that are of different types
    // All objects are inherited from the Object class
    ArrayList<Object> list = new ArrayList<Object>();
    // list.add(10);
    // list.add("Hello");
    // list.add(new ArrayList<Integer>());
    // list.add(new Double(12.0)); // adding a Double of value 12.0
            
    // System.out.println(list); // [10, "Hello", [], 12.0]

}

// Most used methods for ArrayList class are:
//      add, clear, clone, contains, get, indexOf, isEmpty, remove, size

// Note: The <> are informally referred to as the "diamond."