/* Arrow Functions Notes */

/* Takeaways:
    1. Concise - arrow fxns provide a SIMPLER syntax with IMPLICIT returns
    2. Context - inherit context from Parent scopes
        ** Note: there are instances when you want context to change, so be aware of how
                an arrow function might affect your code! */

/* Anonymous function - a function WITHOUT a NAME
    ES6 introduces a new shortened syntax for writing anonymous functions */

// Function Keyword --------------------------------------------------------------------------
// Example - one benefit of utilizing arrow functions - 'concise'
    var sayHello = function(name) {
        console.log('Hello ' + name);
    };
    // Rewritten using ES6 arrow functions, colloquially 'fat arrow' functions:
        const sayHello = (name) => {
            console.log(`Hello ${name}`);
        };
        /* Notice we've omitted the 'function' keyword and now have an arrow (=>)
            pointing to the function body */
    // We can further refine this function to:
        const sayHello = name => console.log(`Hello ${name}`);
        // Concise.

// Example - another benefit of utilizing arrow functions - for 'implicit returns'
    // Traditional functions require explicit returns, such as just below:
    var square = function(n) {
        return n * n;
    };
    // With arrow functions, the result of our expressions is implicitly returned to the caller:
        const square = n => n * n;

// Example - can also shorten the syntax of returning an object
// however, we need one piece of syntax in order to return an object:
    // longhand notation to return an object
    // NOTE: first set of brackets are defining the function body
    // and the second set of brackets are to create the object literal
        const returnObjLonghand = () => {
                return { 
                    firstName: 'John',
                    lastName: 'Wick'
                }
            }
    /**
     * The example below wouldn't work because the 
     * brackets are interpreted as opening the body of the 
     * function rather than brackets to create an object literal 
     */
        const returnObj = () => { firstName: 'John', lastName: 'Wick' }
    // Solution - surrounding the implicit return with parenthesis solves the problem
        const returnObj = () => ({ firstName: 'John', lastName: 'Wick' });


// Context -----------------------------------------------------------------------------------
// Example - Arrow Functions can also inherit 'context' from the Parent scope
    class Deck {
        constructor() {
            const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
            const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
            const deck = [];
            for (const suit of suits) {
                for (const face of faces) {
                    deck.push(this.createCard(suit, face));
                }
            }
            this.deck = deck;
        }
    }
    /* Here, we'll start refactoring for a more functional approach using 'forEach', 
    but continue using traditional anonymous functions */
        class Deck {
             constructor() {
                const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
                const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
                const deck = [];
                suits.forEach(function(suit) {
                    faces.forEach(function(face) {
                        deck.push(this.createCard(suit, face));
                    });
                });
                this.deck = deck;
            }
        }
    /* Assume we have a createCard method in our class. Creating a new Deck will now result in a 
    TypeError: TypeError: Cannot read property 'createCard' of undefined, because 'this' in our 
    anonymous functions doesn't have the same context as our loops. */
    // We can fix this issue with arrow functions like so:
        class Deck {
            constructor() {
                ... 
                suits.forEach(suit => {
                    faces.forEach(face => {
                        deck.push(this.createCard(suit, face));
                    });
                });
            }
        }
        /* Arrow functions don't create their own context, they look to their enclosing scope for that information. 
        Therefore, 'this' should now refer to the 'Deck' instance, which has a 'createCard' method */


// Other examples of how to convert to arrow function:
// 1. 
    document.getElementById("button").onclick = function() {
        setBackgroundColorById("paragraph", "blue");
    }
    // Converts to:
        document.getElementById("button").onclick = () => {
            setBackgroundColorById("paragraph", "blue");
        }
// 2.
    function getValueFromId(id) {
        return document.getElementById(id).value;
    }
    // Converts to:
        const getValueFromId = (id) => {
            return document.getElementById(id).value;
        }