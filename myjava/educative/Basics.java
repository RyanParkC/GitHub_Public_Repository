// // Java Basics

// /* Static Methods ------------------------------------------------------------------------ */

/* public static void -
    public = method is visible and can be called from other objects of other types
    static = method is associated with the 'class', not a specific instance (object) of that class.
            this means you can call a static method without creating an object of the class.
    void = method has no return value. 
            IF method returned an 'int' (integer), then you would write 'int' instead of 'void' */

import com.educative.graphics.*;

class SmileyFactored {
    static Canvas c;    // variable 'c' will be available to all 3 fxns since it is declared in the class, outside of any fxn
    
    public static int drawOutline() 
    public static String drawOutline() 
    public void drawOutline() 
    private static void drawOutline()
    protected void drawOutline()

    // deleteCar --> static method (doesn't matter what brand car)
    // getCar --> non-static method (matters what brand car)

    public static void drawOutline() { // Static method #1
    // Draw the outline of the face
        c.fill("yellow");
        c.stroke("black");
        c.circle(100, 100, 50);
    }
    public static void drawMouth() {    // Static method #2
        // draw the mouth
        c.stroke("black");
        c.fill("yellow");
        c.circle(100, 100, 30);
        c.stroke("yellow");
        c.rect(68, 68, 62, 40);
    }
    
    public static void drawEyes() {     // Static method #3
        // draw the eyes
        c.stroke("black");
        c.fill("black");
        c.circle(100 - 20, 100 - 10, 5);
        c.circle(100 + 20, 100 - 10, 5);
    }

    // method is declared using keywords "public static void", the function name, 
    // parentheses containing parameters for the function (String[] args), an open curly brace, and a closing curly brace

    public static void main(String[] args) {    // declare method with "public static void", function name "main", parameters
    
        c = new Canvas(200, 200);   // variable 'c' will be available to all 3 fxns since it is declared in the class, outside of any fxn
        
        drawOutline();  // calls Static method #1
        drawMouth();    // calls Static method #2
        drawEyes();     // calls Static method #3
        
        c.draw(); 
    };
}

/* Print */
class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}


