/* JavaScript Hoisting */

/* 2 Takeaways:
        1. Functions act like a CAGE, preventing declarations from being hoisted out of them
        2. Stand-alone functions also get hoisted */
/* Key Rules of Hoisting 
        1. Variable declarations (var) rise to the TOP of their scope like hot air balloons
        2. Functions create their own SCOPE and act like CAGES, preventing declarations from rising out
        3. Assignments, or '=' signs act like ANCHORS. They stay put, no matter how the code is rearranged
        4. 'let' and 'const' do NOT get hoisted, and will throw an ERROR if called before they are declared.
            'const' will even throw a SYNTAX ERROR if it is called before it is assigned. */

/* Practice reading JavaScript the same way as the interpreter reads it */
// Rewrite the code the way it would be seen by the interpreter and predict the output

// Example:
// GIVEN
    console.log(example);
    var example = "I'm the example!";
        AFTER HOISTING BY THE INTERPRETER
// Rewritten
        var example;
        console.log(example); // logs undefined
        example = "I'm the example!";

// 1. ----------------------------------------------------------------------------------------------------------------------------
console.log(hello);                                  
var hello = 'world'; // '=' act like ANCHORS. They stay put, no matter how code is rearranged

    var hello; -----> undefined because doesn't '=' anything
    console.log(hello); // logs --> 'undefined'
    hello = 'world'    
    
    // undefined

// 2. ----------------------------------------------------------------------------------------------------------------------------
var needle = 'haystack';    // var rise to top of their scope like hot air balloons
test();                     // calls fxn test()
function test(){            // standalone fxns get hoisted up. creates own scope and cages declarations from being hoisted out
    var needle = 'magnet';  // var rise to top of their scope like hot air balloons
    console.log(needle);
}
// Rewritten:
    var needle = 'haystack'; // --- '=' act like ANCHORS. They stay put, no matter how code is rearranged
    function test();         // --- standalone fxn gets hoisted. creates own scope and cages declarations from being hoisted out
        var needle = 'magnet';
        console.log(needle); // --- logs --> 'magnet'
    test();                  // --- calls function test();
// Output:
    // magnet

// 3. ----------------------------------------------------------------------------------------------------------------------------
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// Rewritten:
    var brendan = 'super cool';     
    function print()           // <---- this fxn is never called, thus ignore this scope
        brendan = 'only okay';       
        console.log(brendan);
    console.log(brendan);
// Output:
    // super cool

// 4. ----------------------------------------------------------------------------------------------------------------------------
var food = 'chicken';       // var hoisted
console.log(food);
eat();                      
function eat(){             // standalone fxn gets hoisted
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';      // var hoisted
}
// Rewritten:
    var food = 'chicken';
    function eat()               // --- standalone fxn gets hoisted. cages declarations from being hoisted out
        var food = 'gone';       // --- hot air balloons to top of function cage
        food = 'half-chicken';   
        console.log(food);       
    console.log(food);           
    eat();                       // --- calls fxn eat();
// Output:
    // chicken
    // half-chicken

// 5. ----------------------------------------------------------------------------------------------------------------------------
mean();                 
console.log(food);
var mean = function() {     // var hoisted, standalone fxn hoisted
    food = "chicken";
    console.log(food);
    var food = "fish";      // var hoisted
    console.log(food);
}
console.log(food);
// Rewritten:
    var mean = function()
        var food;
        food = "chicken";
        console.log(food);
        food = "fish";
        console.log(food);
    mean();                  // --- TypeError: mean() is NOT a fxn!
    console.log(food);
    console.log(food);
// Output:
    // TypeError: mean() is NOT a fxn!

// 6. ----------------------------------------------------------------------------------------------------------------------------
console.log(genre);
var genre = "disco";        // var hoisted to top of scope. '=' acts as an ANCHOR, staying put no matter what (same priority as console.log)
rewind();
function rewind() {         // standalone fxn hoisted to top
    genre = "rock";         // '=' acts as an ANCHOR, staying put no matter what
    console.log(genre);
    var genre = "r&b";      // var hoisted. '=' acts as an ANCHOR, staying put no matter what
    console.log(genre);
}
console.log(genre);
// Rewritten:
    var genre;
    function rewind()
        var genre;
        genre = "rock";
        console.log(genre);
        genre = "r&b";
        console.log(genre);
    console.log(genre);
    genre = "disco";
    rewind();
    console.log(genre);

// Output:
    // undefined
    // rock
    // r&b
    // disco

// 7. ----------------------------------------------------------------------------------------------------------------------------
dojo = "san jose";          // = Anchor
console.log(dojo);
learn();
function learn() {          // standalone fxn hoisted to top of scope
    dojo = "seattle";       // = Anchor
    console.log(dojo);
    var dojo = "burbank";   // var hoisted to top of scope. = Anchor
    console.log(dojo);
}
console.log(dojo);
// Rewritten:
    function learn()
        var dojo;
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    dojo = "san jose";
    console.log(dojo);
    learn();
    console.log(dojo);

// Output:
    // san jose
    // seattle
    // burbank
    // san jose

// 8. Bonus ES6: const ------------------------------------------------------------------------------------------------------------
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){      // standalone fxn is hoisted
    const dojo = {};                    // const, let are NOT hoisted
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// Rewritten:
    function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));

// Prediction:
    // { name: 'Chicago', students: 65, hiring: true }
    // { name: 'Berkeley', students: 0, "closed for now" }

// Real Output:
    // { name: 'Chicago', students: 65, hiring: true }
    // TypeError: Assignment to constant variable.

/* 2 Takeaways:
        1. Functions act like a CAGE, preventing declarations from being hoisted out of them
        2. Stand-alone functions also get hoisted */
/* Key Rules of Hoisting 
        1. Variable declarations (var) rise to the TOP of their scope like hot air balloons
        2. Functions create their own SCOPE and act like CAGES, preventing declarations from rising out
        3. Assignments, or '=' signs act like ANCHORS. They stay put, no matter how the code is rearranged
        4. 'let' and 'const' do NOT get hoisted, and will throw an ERROR if called before they are declared.
            'const' will even throw a SYNTAX ERROR if it is called before it is assigned. */