package myjava.fundamentals.notes.variables;
// Variables

    // Declare a variable using:
        // type variableName;
        // e.g. int ourInt

    // Assign a value to a variable using:
        // variableName = value;

public class Variables {
    public static void main(String[] args){
        
        // Integer class = wraps a value of the primitive type "int" into an object
        int ourInt; // we can declare a variable without setting its value
        ourInt = 400; // we can assign a value to the variable later in our code
        System.out.println(ourInt);

        // Double class = floating point numbers like 3.14159, more precise than float
        double pi = 3.14159265; // we can also declare and assign on the same line
        System.out.println(pi);

        // Boolean class = true or false
        boolean bool = true;
        System.out.println(bool);

        // Character class = used to store a single character like "$" or "A"
        char singleCharacter = 'A';
        System.out.println(singleCharacter);

        // String
        String multipleCharacters = "ABC";
        System.out.println(multipleCharacters);
    }
}

// Data Types

    // 1. Primitive Types
        // int
        // long ---- larger integers like 2 quintillion
        // boolean
        // double ---- for floating point numbers like 3.14159, far more precise than float
        // char

    // 2. Object Types
        // Integer
        // Long
        // Boolean
        // Double
        // Character
        // String
        // BigInteger