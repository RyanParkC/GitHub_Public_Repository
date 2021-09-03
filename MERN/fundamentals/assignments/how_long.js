// Calculating Prime Numbers

Number.prototype.isPrime = function() {
        for( let i=2; i<this; i++ ) {
            if( this % i === 0 ) {
                return false;
            }
        }
        return true;
    }
    
const { strict } = require('assert/strict');
// Time to find the 10,000th prime number
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// Takes 50 seconds

// 1. Rewrite isPrime() to calculate primes faster

    Number.prototype.isPrime = function() {
        if (this % 2 === 0) { // 'this' = input #
            return false;
        }
        for( let i=3; i<Math.sqrt(this); i+=2 ) { // square root
            if( this % i === 0 ) {
                return false; 
            }
        }
        return true;
    }

    const { performance } = require('perf_hooks');
    const start = performance.now();
    let primeCount = 0;
    let num = 2; // for math reasons, 1 is considered prime
    while( primeCount < 1e4 ) {
        if( num.isPrime() ) {
            primeCount++;
        }
        num++;
    }
    console.log(`The 10,000th prime number is ${num-1}`);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
    // Takes 140.56 milliseconds


// 2. Try calculating the 100,000th and 1,000,000th prime numbers

// 100,000th prime number
    Number.prototype.isPrime = function() {
            if (this % 2 === 0) {
                return false;
            }
            for( let i=3; i<Math.sqrt(this); i+=2 ) { // 'this' = input #
                if( this % i === 0 ) {
                    return false; 
                }
            }
            return true;
        }

        const { performance } = require('perf_hooks');
        const start = performance.now();
        let primeCount = 0;
        let num = 2; // for math reasons, 1 is considered prime
        while( primeCount < 1e5 ) {
            if( num.isPrime() ) {
                primeCount++;
            }
            num++;
        }
        console.log(`The 100,000th prime number is ${num-1}`);
        console.log(`This took ${performance.now() - start} milliseconds to run`);
        // Takes 4.349 seconds

// 1,000,000th prime number
    Number.prototype.isPrime = function() {
            if (this % 2 === 0) {
                return false;
            }
            for( let i=3; i<Math.sqrt(this); i+=2 ) { // 'this' = input #
                if( this % i === 0 ) {
                    return false; 
                }
            }
            return true;
        }

        const { performance } = require('perf_hooks');
        const start = performance.now();
        let primeCount = 0;
        let num = 2; // for math reasons, 1 is considered prime
        while( primeCount < 1e6 ) {
            if( num.isPrime() ) {
                primeCount++;
            }
            num++;
        }
        console.log(`The 1,000,000th prime number is ${num-1}`);
        console.log(`This took ${performance.now() - start} milliseconds to run`);
        // Takes 144.031 seconds


// 3. Determine if the iterative or recursive Fibonacci function is faster

// index -------------- 0  1  2  3  4  5  6   7   8   9
// Fibonacci sequence = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// iterative is a bit faster

    // recursive
    const { performance } = require('perf_hooks');
    const start = performance.now();
    function rFib(n) { // r Fib for recursive Fibonacci
        if (n < 2) {
            return n;
        }
        return rFib(n - 1) + rFib(n - 2);
    }
    console.log(`This took ${performance.now() - start} milliseconds to run ${rFib(30)} rfib`);
    // This took 0.056 seconds

    // iterative
    const { performance } = require('perf_hooks');
    const start = performance.now();
    function iFib(n) {                              // index n 
        const arr = [0, 1];                         // start with 0, 1 
        while (arr.length - 1 < n) {                // 
            let len = arr.length;
            arr.push(arr[len - 1] + arr[len - 2]);
        }
        return arr[n];
    }
    console.log(`This took ${performance.now() - start} milliseconds to run ${iFib(50)} ifib`);
    // This took 0.048 seconds

    // another iterative
    const { performance } = require('perf_hooks');
    const start = performance.now();
    function iFib(n){
        let arr = [0,1];
        for (let i = 2; i < n + 1; i++) {
            arr.push(arr[i - 2] + arr[i - 1])
        }
        return arr[n]
    }
    console.log(`This took ${performance.now() - start} milliseconds to run ${iFib(50)} ifib`);
    // This took 0.048 seconds


// 4. Write a more efficient function to reverse a string
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
// Takes 0.047 seconds

    // Rewritten using Reduce:
    const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
    function reverseString(str) {
        return [...str].reduce((accumulator, current) => {
            return current + accumulator;
        });
    }
    console.log(story);
    // Takes 0.041 seconds

    // Rewritten using For Loop:
    const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
    function reverseString(str) {
        let result = '';
        
        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i];
        }
        return result;
    }
    console.log(story);
    // Takes 0.047 seconds

    // Rewritten using Recursion:
    const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
    function reverseString(str = '') {
        const[head = '', ...tail] = str;
        if (tail.length) {
            return reverseString(tail) + head;
        }
        return head;
    }
    console.log(story);
    // Takes 0.043 seconds

    // Rewritten using Sort:
