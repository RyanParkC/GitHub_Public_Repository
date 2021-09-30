
import java.util.HashMap;
import java.util.Set;


public class HashMapFun {
    public static void main(String[] args) {
        HashMap<String, String> userMap = new HashMap<String, String>();
        userMap.put("nninja@codingdojo.com", "Nancy Ninja");        // key:value pairs being "put" into HashMap
        userMap.put("ssamurai@codingdojo.com", "Sam Samurai");
        userMap.put("wwizard@codingdojo.com", "Walter Wizard");

        // One way to iterate over a HashMap is using the keySet() method of the HashMap class
        // get the keys by using the keySet method
        //      "Set" is similar to HashMap, however, instead of key:value pairs, 
        //      it has only values. But,  "Set" values are UNIQUE values.
        //      Just as keys are unique in a HashMap, the values themselves are 
        //      unique in a Set.
        // "Set" is an interface.
        //      Set = a collection that contains no duplicates, thus
        //      keySet = returns a set of all the keys in our map
        Set<String> keys = userMap.keySet();
        // enhanced For Loop
        for(String key : keys) {                    // iterate over the set      
            System.out.println(key);                // print the keys
            System.out.println(userMap.get(key));   // get value in our map with said key
            // Prints the following:
            //      nninja@codingdojo.com
            //      Nancy Ninja
            //      ssamurai@codingdojo.com
            //      Sam Samurai
            //      wwizard@codingdojo.com
            //      Walter Wizard
        }
    }
}

// Most commonly used methods for HashMap:
//      clear, containsKey, containsValue, isEmpty, keySet, remove, replace, size, values
