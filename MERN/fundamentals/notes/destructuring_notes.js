/* Destructuring Notes */

/* Destructuring - taking info from a data structure (array, object) 
    and storing it in its own variable (thus, de-structuring the data structure).

    Destructuring simplifies extracting info from objects/arrays, allowing for a 
    cleaner, more succinct codebase. */


// Example data structure
// Object
    const person = {                                    
        firstName: 'Bob', 
        lastName: 'Marley', 
        email: 'bob@marley.com', 
        password: 'sekureP@ssw0rd9', 
        username: 'barley', 
        createdAt: 1543945177623
    };
// Array
    const animals = ['horse', 'dog', 'fish', 'cat', 'bird']; 

// To get EMAIL from PERSON, and the FIRST ANIMAL:
// BEFORE ES6 ------------------------------------
    var email = person.email;
    var firstAnimal = animals[0];
// AFTER ES6 -------------------------------------
    const { email } = person;
    const [firstAnimal] = animals;
    console.log(email);
    // => bob@marley.com
    console.log(firstAnimal);
    // => horse

// To get EMAIL and PASSWORD from PERSON
// and the FIRST THREE strings from ANIMALS
// BEFORE ES6 ------------------------------------
    var email = person.email;
    var password = person.password;

    var firstAnimal = animals[0];
    var secondAnimal = animals[1];
    var thirdAnimal = animals[2];
// AFTER ES6 ------------------------------------- // Much more concise! 
    const { email, password } = person;
    const [firstAnimal, secondAnimal, thirdAnimal] = animals;


/* Name Conflicts */
// What if my current scope already has a variable of the SAME NAME as a PROPERTY that I am extracting from an OBJECT?
    const password = '12345';
    const { password } = person;
    // Leads to ---> SyntaxError: Identifier 'password' has already been declared

        // Do we need to fallback to one of these possibilities?
            // Neither is ideal because:
                // When destructuring from objects, the PROPERTY NAMES must be MATCHED EXACTLY
                    // In the following examples, 'hashedPassword' does not exist on our PERSON object, so it will be 'undefined'
            const hashedPassword = person.password; // ---> Works, but unnecessary

            const { hashedPassword } = person; // ---> No error, but won't have info you expect either

    // Solution:
        // Specifying the property name ('password') will access the value of that property on our object
        // The colon (:) after the property name followed by your new variable redirects the value of password to be held in 'hashedPassword' with no conflict
    const password = '12345';
    const { password: hashedPassword } = person;

/* Nested Destructuring */
// Example
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
        },
        {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};
// If we want the individual 'addresses' as variables
// FIRST, destructure 'addresses', THEN destructure each 'address'
    const { addresses: [whiteHouse, sherlock] } = person;
// What if we want to SKIP the FIRST address and only want the city of the SECOND, but using an alternate variable name?
    const { addresses: [ , { city: london }] } = person; // Leaving an 'empty' first position (using a comma) allows skipping that index and destructuring from the 2nd
    console.log(london);
    // => London
// Below will throw an ERROR because we skipped too many addresses and the final position does not have an address object (null or undefined)
    const { addresses: [ , , , , { city: london }] } = person;
    // => TypeError: Cannot destructure property 'city' of 'undefined' or 'null'.
