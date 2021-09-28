package myjava.fundamentals.notes.type_casting;

// Primitive vs Object types

// 1. Performance - 
//      Object types are an instance of a class. They usually hold data and methods.
//      Therefore, their memory capacity is much bigger than their primitive counterpart.
public class TestSum {
    public static void main(String[] args) {

        long start = System.currentTimeMillis();
        int sum = 0;
        for (int i = 0; i < Integer.MAX_VALUE; i++) {
            sum += i;
        }
        System.out.println("Sum: " + sum);
        long end = System.currentTimeMillis();
        double total = (double) (end - start) / 1000;                   // Sum: 1073741825
        System.out.println("Time of execution: " + total + " seconds"); // Time of execution: 0.763 seconds
    }
}