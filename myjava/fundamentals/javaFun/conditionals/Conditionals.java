package myjava.fundamentals.javafun.conditionals;
// Conditionals

    // If
    // If-Else
    // If-Else-If-Else

public class Conditionals {

    public static void main(String[] args) {

    boolean defenderIsGuarding = true;
    int distanceToBasket = 15;
        
    if( defenderIsGuarding ) {                      // if
        System.out.println("Pass The Ball");
    } else if( distanceToBasket < 10 ) {            // else-if (can keep adding more of these statements!)
        System.out.println("Shoot The Ball");
    } else {                                        // else
        System.out.println("Dribble The Ball");
    }

    // When to use == and when to use .equals()
    // We use "==" when we compare if both variables point to the SAME object in memory

    // == 
    String a = new String( "Dojo" );
    System.out.println( a == "Dojo" );
    // surprisingly this will print out `false`

    // .equals()
    // To check if two variables have the SAME value, we just need to use .equals() instead
    String b = new String( "Dojo" );
    System.out.println( b.equals("Dojo") );
    // this actually will print out `true`

    }
};

