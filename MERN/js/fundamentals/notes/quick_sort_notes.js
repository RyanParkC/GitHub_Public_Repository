/* Quick Sort Notes */

// Given an unsorted array with NO duplicate values, how does the QuickSort algo sort the values in place?
    // Left Index starting at 0
    // Right Index starting at end
    // Pivot can be any number from the given array

// Partition
    // Dividing an array into 2 portions (small and large values)
        // Pivot = the dividing point between the two portions

        /* e.g. For this array, the pivot is the value 8.
                Notice that the values are not sorted, but everything to the left of 8 is smaller than 8. 
                Everything to the right is larger than 8.
                [1, 4, 2, 7, 6, 3,   8   , 20, 9, 15, 12, 10, 30 ] */

        /* e.g. For this array, the pivot is the value 3.
                Notice that the pivot may be placed anywhere in the array, not necessarily in the center.
                [1,   3   , 5, 4, 8, 30, 20, 17, 7] */

// Hoare's Partitioning Algorithm
    // Note: We are assuming NO duplicate values in array
        // 1. Choose a pivot value.
            // a. Any value in the array
                // Some ppl always pick the LEFT-most value, but this can cause significant PROBLEMS with increased RUNTIME
            // b. Best to pick a RANDOM value
        // 2. Scan values in array from the LEFT and from the RIGHT
            // a. Initialize 2 pointers (i and j) at the LEFT-most and RIGHT-most values
            // b. Starting with 'i' -- iterate over the values to the LEFT of the pivot (these values should be SMALLER than the pivot)
            //    thus, STOP when we encounter anything that is NOT LESS than the pivot (this includes stopping at the pivot itself)
            // c. When 'i' stops, move to 'j' -- now we check that the value at 'j' is LARGER than the pivot.
            //    Iterate to the LEFT until we encounter anything that is NOT GREATER than the pivot (this includes stopping at pivot itself)
        // 3. Swap the values at 'i' and 'j'
            // a. When BOTH 'i' and 'j' are STOPPED, that means 'i' is pointing at something TOO LARGE and 'j' is pointing at something TOO SMALL.
            //    thus, we may swap these values and repeat step 2
        // 4. Break when i = j
            // a. When 'i' and 'j' arrive at the SAME Index, we know that we have successfully PARTITIONED. 
            //    Everything to the LEFT of 'i' is smaller than that value, and everything to the RIGHT of 'j' is GREATER.
            //    Therefore, wherever 'i' and 'j' are, we know this is the pivot. 
        // 5. Return j
            // a. To CONTINUE with the QuickSort algo, we need to know where the array had been PARTITIONED.
            //    Since partitioning may have moved the pivot value from where it started, we need to return the position of the pivot.
            //    We could return either 'i' or 'j' since they are the SAME.
            //    Conventionally, we return 'j'.

// QuickSort continually calls PARTITION on BOTH sides of the Pivot
    // Once we have a partition algo working for us, we may use it to implement QuickSort.
    // The plan is to continually call partition on the portions of the array to the LEFT and RIGHT of the returned pivot.

// Practice Below --------------------------------------------------------------------------------------------------------------------------------

/* 
Params: nums, left, right
- left and right are indexes, for now, left will be 0, and right will be
    the last idx.
- later these params will be used to specify a sub section of the array to
    partition.
Steps:
1. Pick an number out of the arr to be your pivot value
- usually the middle idx but can be any.
2. Partition the array IN PLACE such that all values less than the pivot
    value are to the left of it and all values greater than the pivot value
    are to the right (not perfectly sorted).
3. return: the index where the left section of smaller items ends.
"Choosing a random pivot minimizes the chance that you will encounter
worst-case O(n^2) performance (always choosing first or last would cause
worst-case performance for nearly-sorted or nearly-reverse-sorted data).
Choosing the middle element would also be acceptable in the majority of
cases."
https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */

function partition() {}

module.exports = { partition };

// Solution 1 - Partition + Recursion
// 1. Partition
    function partition(arr, start, end){                                // const = immutable (unchangeable)
        const pivotValue = arr[end];                                    // taking the last element as the pivot value
        let pivotIndex = start;                                         //     
        for (let i = start; i < end; i++) {                             // i = pivotIndex; i < end
            if (arr[i] < pivotValue) {
                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                pivotIndex++;
            }
        }
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
        return pivotIndex;
    }
// 2. Recursion
    function quickSortRecursive(arr, start, end) {
        if (start >= end) {
            return;
        }
        let index = partition(arr, start, end);

        quickSortRecursive(arr, start, index-1);
        quickSortRecursive(arr, index+1, end);
    }

    const arr1 = [11, 8, 14, 3, 6, 2, 7];
    quickSortRecursive(arr1, 0, arr1.length-1)
    console.log(arr1);

    const arr2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
    quickSortRecursive(arr2, 0, arr2.length-1)
    console.log(arr2);

    const arr3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
    quickSortRecursive(arr3, 0, arr3.length-1)
    console.log(arr3);



// Can also be written like:
    const arr1 = [11, 8, 14, 3, 6, 2, 7];
    const arr2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
    const arr3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
    const partition = () => { 
        arr = []                                // array []
        leftIndex = 0                           // left index = 0
        rightIndex = arr.length - 1             // right index = arr.length - 1 (end index)
        let pivot = Math.floor(arr.length /2);  // median value = Math.floor(rounding to nearest int) arr.length /2 ---- could use randNum instead too
        let i = leftIndex                      // i = leftIndex
        let j = rightIndex                     // j = rightIndex

    }


    partition(arr2);

    console.log(arr2);
    module.exports = { partition };






//

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 6, 7, 8, 11, 14];

function partition(nums, left, right){                                // const = immutable (unchangeable)
    const pivotValue = nums[right];                                   // taking the last element as the pivot value
    let pivotIndex = left;                                            // 
    for (let i = left; i < right; i++) {                              // i = pivotIndex; i < end
        if (nums[i] < pivotValue) {
            [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
            pivotIndex++;
        }
    }
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]]
    return pivotIndex;
}

function quickSortRecursive(nums, left, right) {
    if (left >= right) {
        return;
    }
    let index = partition(nums, left, right);

    quickSortRecursive(nums, left, index-1);
    quickSortRecursive(nums, index+1, right)
}

const nums1 = [11, 8, 14, 3, 6, 2, 7];
quickSortRecursive(nums1, 0, nums1.length-1)
console.log(nums1);

//


// doesn't match
        function partition(nums = [], left = 0, right = nums.length - 1) {
            var pivot = left; // leave as this for now since partition looks wild otherwise.
            var i = left - 1;
            var j = right + 1;
            while (true) {
                do {
                    i++;
                } while (nums[i] < nums[pivot]);
                do {
                    j--;
                } while (nums[j] > nums[pivot]);
                if (i >= j) {
                    return j;
                }
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

function quickSortRecursive(nums, left, right) {
    if (left >= right) {
        return;
    }
    let index = partition(nums, left, right);

    quickSortRecursive(nums, left, index-1);
    quickSortRecursive(nums, index+1, right)
}

const nums1 = [11, 8, 14, 3, 6, 2, 7];
quickSortRecursive(nums1, 0, nums1.length-1)
console.log(nums1);