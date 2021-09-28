package myjava.fundamentals.javafun.strings;

public class Strings {
    public static void main(String[] args) {

        // Length
        String ninja = "Coding Dojo is Awesome!";
        int length = ninja.length();    // length (int) = ninja (string) calls length (int)
        System.out.println( "String Length is : " + length );   // ==> String length is 23

            // String samurai = "Samurai were masters of the sword";
            // int length = samurai.length();
            // System.out.println("String length is : " + length);

        // Concatenate
        String string1 = "My name is ";
        String string2 = "Michael";
        String string3 = string1.concat(string2);
        System.out.println(string3); // will output ==> My name is Michael

        String string4 = "Coding is ";
        String string5 = "so fun!";
        String stringCombined = string4.concat(string5);
        // using concat
        System.out.println(stringCombined); // ==> "Coding is so fun!"
        // Or just use "+" -- has faster runtime than using concat
        System.out.println( string4 + string5 ); // ==> "Coding is so fun!"

        // Format - another way of concatenating strings
        String samurai = String.format("Hi %s, you owe me $%.2f !", "Jack", 25.0);  // %s = string,    %.2f = float (with 2 values to right of decimal point .)
        System.out.println(samurai);  // ==> Hi Jack, you owe me $25.00 !

        // IndexOf - searches left-to-right inside given string for a "target" string
        // returns index number where target string is first found or "-1" if target is not found
        String dojo = "Welcome to Coding Dojo!";
        int a = dojo.indexOf("Coding"); // a = 11
        int b = dojo.indexOf("co"); // b = 3
        int c = dojo.indexOf("pizza"); // c = -1, "pizza" is not found
        System.out.println( a + b + c ); // ==> 13

        // Trim - removes any excess white spaces from string
        String sentence = "    spaces everywhere!    ";
        System.out.println(sentence.trim());

        // Uppercase and Lowercase conversion
        String d = "HELLO";
        String e = "world";
        System.out.println(d.toLowerCase()); // hello
        System.out.println(e.toUpperCase()); // WORLD

        // Equality - exact same Object vs. sequence of Characters
        String f = new String("word");
        String g = new String("word");
        System.out.println(f == g); // false. not exact same object.
        System.out.println(f.equals(g)); // true. same exact characters
    }
}
