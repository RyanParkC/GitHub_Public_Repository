package java.fundamentals.notes.type_casting;

// 2. Null values - 
//      Primitive data types (e.g. int, byte, short, long, float, double, boolean, char) can only hold data. 
//      However, Object types are pointers to where the data is stored.
//      This means that this pointer can point to nothing (null), while primitive types cannot.
public class TestNull {
    public static void main(String[] args) {
        // Integer a = 10;
        // int b = 10;
        // a = null;
        // b = null;
    }
}

// If you try to compile this file, you will get the following compiling error:
//      "incompatible types: <null> cannot be converted to int"