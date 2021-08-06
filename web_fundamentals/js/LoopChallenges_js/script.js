// Print Odds 1-20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// Decreasing Multiples of 3
for (let i = 100; i >= 1; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Print the Sequence
let array = [4, 2.5, 1, -0.5, -2, -3.5];
let length = array.length;
let i = 0
while (i < length) {
    console.log(array[i]);
    i++;
}

// Sigma
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Factorial
let multiplied = 1;
for (let i = 1; i <= 12; i++) {
    multiplied *= i;
}
console.log(multiplied);