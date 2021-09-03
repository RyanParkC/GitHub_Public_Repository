/* Hoisting notes */

/* Const and Let -----------------------------------------------------------------------------------------------*/

/* Try to avoid using 'var' whenever possible and use 'const' and let' instead */

/* Note: 'name' does not change during iteration so it needs to be a const */
/* Iteration - is a sequence of instructions that is continually repeated. You can think of iteration as a loop */
const name = names[index];

/* Proper example */
const beatles = ['Paul', 'George', 'John', 'Ringo']; /* Indexes = [0,1,2,3] */
function printNames(names) {
    function actuallyPrintingNames() {
        /* Starting from Index = 0 (beginning of array) */
        /* While Index [0,1,2,3] < names.length (4), index increases by +1 each loop */
        for (let index = 0; index < names.length; index++) { 
        /* names = input_data starting at Index = 0 for Indexes = [0,1,2,3] */
        const name = names[index];
        /* print 'name' was found at index # */
        console.log(name + ' was found at index ' + index);
        }
    }
    actuallyPrintingNames();
    /* Paul was found at index 0 */
    /* George was found at index 1 */
    /* John was found at index 2 */
    /* Ringo was found at index 3 */
}
/* ABSOLUTELY NEED THIS PART!!!!!!!!!! */
/* Sets 'names (input data)' = beatles, to use the array in the function! */
printNames(beatles);

            /* But why can't we also write it more simply like this? */

            const beatles = ['Paul', 'George', 'John', 'Ringo']; /* Indexes = [0,1,2,3] */
            function actuallyPrintingNames(names) {
                /* Starting from Index = 0 (beginning of array) */
                /* While Index [0,1,2,3] < names.length (4), index increases by +1 each loop */
                for (let index = 0; index < names.length; index++) { 
                /* names = input_data starting at Index = 0 for Indexes = [0,1,2,3] */
                const name = names[index];
                /* print 'name' was found at index # */
                console.log(name + ' was found at index ' + index);
                }
            }
            actuallyPrintingNames(beatles);

/* Hoisting ----------------------------------------------------------------------------------------------------*/

/* JS interpreter runs in 2 steps:
    1. It parses the code, and ensures it's all viable JS friendly syntax 
    2. It runs the code 
    Note: You might think your code is running line by linee, but with JS, this is NOT always the case! */

/* Variable Hoisting with var -----------------------------------*/
    /* Hoisting = JS mechanism where 'variables' and 'function declarations' are moved to the 
                  TOP of their SCOPE BEFORE code execution */
console.log(magicalUnicorns); /* Output --> 'undefined' */
var magicalUnicorns = "awesome"; /* var has been 'hoisted' */
        /* BELOW is how the JS node interpreter reads the code */
        var magicalUnicorns; // the declaration gets hoisted to the top of the scope by itself
        console.log(magicalUnicorns); // we log it as undefined
        magicalUnicorns = "awesome"; // the assignment stays exactly where it was

/* Hoisting does NOT WORK with 'let' or 'const' */
console.log(magicalUnicorns); 
let magicalUnicorns = "awesome!"; /* Output --> 'ReferenceError' */

/* Hoisting in Functions ----------------------------------------*/
/* 2 Takeaways:
        1. Functions act like a CAGE, preventing declarations from being hoisted out of them
        2. Stand-alone functions also get hoisted */
/* Key Rules of Hoisting 
        1. Variable declarations (var) rise to the TOP of their scope like hot air balloons
        2. Functions create their own SCOPE and act like CAGES, preventing declarations from rising out
        3. Assignments, or '=' signs act like ANCHORS. They stay put, no matter how the code is rearranged
        4. 'let' and 'const' do NOT get hoisted, and will throw an ERROR if called before they are declared.
            'const' will even throw a SYNTAX ERROR if it is called before it is assigned. */
var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic(){         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}                       
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs ------> Output = 'hello world'
console.log(foo);         // finally we log the global foo ------> Output = 'bar'


