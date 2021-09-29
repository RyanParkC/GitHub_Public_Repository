package myjava.fundamentals.notes.loops;

// Two(2) main types of Loops:
//      1. While Loop -
//              useCases - when we don't know beforehand how many times an operation must repeat,
//                          but we know we have to repeat until a certain condition has turned false.
//      2. For Loop -
//              useCases - use if we know exactly how many times we have to iterate.
//                          It is simply a specialized while loop

//      Note: These are the same. Whatever we can do with the while loop we can do with a regular loop and vice versa

public class Loops {
    public static void main (String[] Args) {
        // Call functions here
    }
    // 1. While Loops -
    //       useCases - when we don't know beforehand how many times an operation must repeat,
    //                  but we know we have to repeat until a certain condition has turned false.
    public static void WhileLoop() {
    
        int i = 0;                      
        while(i < 7)
        {
            System.out.println("foo");      // output ==> "foo" for i = 0,1,2,3,4,5,6 thus 7 times
            i++;                            // i = i + 1
        }
    
    }
    

    // 2. For Loop -
    //       useCases - use if we know exactly how many times we have to iterate.
    //                  It is simply a specialized while loop
    public static void ForLoop() {
    
        for (int i = 0; i < 7; i++){
            System.out.println("bar");
        };
        }
        // for (initialization; termination; increment){
        //     body statements
        // }
        
        // above code translates into:
            // int i = 0;
            // while(i < 7)
            // {
            //     System.out.println("bar");
            //     i++;
            // }
        
        // Using the For Loop, we can easily iterate over an array, since we will always know its length:
            // ArrayList<String> dynamicArray = new ArrayList<String>();
            // dynamicArray.add("hello");
            // dynamicArray.add("world");
            // dynamicArray.add("etc");
            // for (int i = 0; i < dynamicArray.size(); i++){
            //     System.out.println(dynamicArray.get(i));
            // }
    
    // 3. Enhanced For Loop - 
    //          useCases - when you need to assign the array element to a variable and manipulate it some way,
    //                     but you don't care about the current index at all.
    public static void EnhancedForLoop() {
    
        // for(int i = 0; i < dynamicArray.size(); i++){
        //     String name = dynamicArray.get(i);
        //     System.out.println("hello " + name);
        //     // other operations using name
        // }

        // converting above code to Enhanced For Loop
        // for(String name : dynamicArray){
        //     System.out.println("hello " + name);
        //     // other operations using name
        // }

        // for(element container : collection){
        //     // body statements
        // }

    }

}
