/* Big O Time complexity Notes */

/* Plot of the upper bound of:
    How LONG an algorithm should take to run vs. How BIG the problem is
        These values are referred to in powers of "N" (size) with constants and lower power terms left out */

// Example - Searching an array for its SMALLEST value
    function smallest( arr ) {
        let min = arr[0];
        for( let element of arr ) {
            if( element < min ) {
                min = element;
            }
        }
        return min;
    }
    smallest( [2, 5, 6, 12, 14, 28, 37, 41, 44, 45] ); // 10 items

    // In the above algo, we must look through all 10 items (array.length) to find the smallest value
    // It can be said that the algo took "N" number of operations
    // Thus, we would say this algo runs in O(N) time

// If we were told the array will always be sorted in ASCENDING order, this algo could be rewritten to:
    function smallest( sortedArr ) {
        return sortedArray[0];
    }
    smallest( [2, 5, 6, 12, 14, 28, 37, 41, 44, 45] );
    // This takes only ONE operation, as we do NOT need to loop through the array and can just 
    // return to the first value. This algo would run in O(1) time.

/* 
Big O     | Description                                               | Example                                         | How long to solve (1-shortest)
O( 1 )    | Algos that can be completed in a constant # of operations | Find the smallest value in a sorted array       | 1 - shortest
O( N )    | Algos that may have to run "N" number of times            | Find the smallest value in an unsorted array    | 3 - medium
O( N^2 )  | Algos that may have to go through "N" things "N" times    | Bubble Sort                                     | 4 - longest
O(log(N)) | Algos that can employ a divide and conquer approach       | Quick Sort                                      | 2 - short                     */

// Example of --- O( N^3 ) time --- super long --- 1000 results, run 1,000,000,000 times

for(let i=0; i<results.length; i++){
    for(let value of results) {
        for(let j=results.length-1; j>0; j--) {
            console.log(i, value, j);
        }
    }
}

// Note - We may naively think we can just COUNT how many LOOPS are nested within each other and that will be
// equal to the power of "N" for our Big O notation (which is true in MANY cases).
// However, this is only true if the loops could all run "N" times.