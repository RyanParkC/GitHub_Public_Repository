/* Ternary Operator Notes */

/* Ternary (Conditional) Operator - the only JS operator that takes 3 operands:
    1. A condition followed by a question mark (?)
    2. An expression to execute if the condition is 'truthy' followed by a colon (:)
    3. An expression to execute if the condition is 'falsy' */

    // This operator is frequently used as a SHORTCUT for the 'IF' statement
    // It is essentially a short version of an 'IF' statement

// Difference between: Ternary (Conditional) Operator vs. IF Statement 
    // -----> Ternary statement is SHORTER
// Example - create a function to determine if you can or cannot afford an item
    // Basic IF statement:
        let canAfford = (itemPrice, accountBalance) => {
            if (itemPrice > accountBalance) {
                return 'Cannot afford! You are $${itemPrice - accountBalance} short';
            } else {
                return "Can afford!";
            }
        };
    // Ternary statement:
        let canAfford = (itemPrice, accountBalance) => {
            return itemPrice > accountBalance
            ? 'Cannot afford! You are $${itemPrice - accountBalance} short'
            : "Can afford";
            // is the itemPrice > accountBalance
            //     yes? then return "Cannot afford"
            //     no: then return "Can afford"
        };
        // If we invoke EITHER of these functions, they will return the SAME EXACT result.
        // The only difference is the Ternary (Conditional) statement is SHORTER

// Special note:
//     Take care when NESTING Ternary statements, as they can tend to become unwieldy and unreadable
// Example:
    const myVar = 10 < 20
        ? 5 < 10
            ? true  // nested
            : false // nested
        : false
    // Imagine coming back to reading this code after 6 months... 

