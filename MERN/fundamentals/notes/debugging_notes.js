/* Debugging Notes */

/* Main Takeaways:
    1. Check for Syntax Errors FIRST. Code will not run til these are fixed!
    2. Typically, the actual ERRORS occur BEFORE the line that errored. Work BACKWARDS from there! 
    3. Console.log EVERYTHING 
    4. Run your code EARLY and OFTEN */


/* Syntax Errors ----------------------------------------------------------------------------*/
/* Example code: */
    let x = 1;
    let y = 2;
    let z == 3; /* <-- Syntax Error here */
    console.log(x + x);
    console.log(y - z);
    console.log(z * x);

/* Syntax Errors occur when:
        1. Parser finds INVALID JavaScript 
    What happens:
        1. Code immediately terminates when an error is found
        2. Program ENDS without any code ever being run 
        3. Shows the line the parser errored on
            - THIS MEANS your issue happened somewhere BEFORE that line and NOT necessarily that specific line
            - You should trace your Syntax Errors backwards starting on the line it errored! */

/* Runtime Errors ----------------------------------------------------------------------------*/
/* aka "bugs" - errors that occur while program is running 
    Causes:
        1. Faulty logic
        2. Improperly written code
    To Solve them:
        1. Most recent line of code you added before program started to fail?
        2. How many lines of code did you write between tests?
        3. Go back to the start and ask basic questions, such as, "What are the steps NEEDED to do what I WANT to do?" 
    Note:
        - 100% of the bugs you encounter were created by a DEVELOPER
        - Creating bugs does NOT make you a BAD developer, it makes you a developer! */

