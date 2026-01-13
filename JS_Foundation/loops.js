// Loops in JavaScript include for, while, do...while, for...in loops, for...of loops and forEach method for arrays.

// 1. For Loop
// The for loop is used to run a block of code a specific number of times.
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration:", i);
}

let multipliedNumbers = [];
let numbers = [2, 4, 6];
for (let i = 0; i < numbers.length; i++) {
    multipliedNumbers.push(numbers[i] * 2);
}
console.log("Multiplied Numbers:", multipliedNumbers);

// 2. While Loop
// The while loop runs as long as a specified condition is true.
let j = 1;
let sum = 0;
while (j <= 5) {
    sum += j;
    j++;
}
console.log("Sum of numbers from 1 to 5:", sum);

let countdown = [];
let k=5;
while (k > 0) {
    countdown.push(k);
    k--;
}
console.log("Countdown from 5 to 1:", countdown);

// 3. Do...While Loop
// The do...while loop will execute the block of code once before checking the condition.
let l = 0;
do {
    console.log("Do...While Loop iteration:", l);
    l++;
} while (l < 5);

let teaCollections = [];
let teaType;
// do { 
//     teaType = prompt("Enter a type of tea to add to your collection (or type 'stop' to finish):");
//     if (teaType && teaType.toLowerCase() !== "stop") {
//         teaCollections.push(teaType);
//     }
// } while (teaType !== "stop");
// console.log("Your tea collection:", teaCollections);

let total = 0;
let m = 1;
do {
    total += m;
    m++;
} while (m <= 3);
console.log("Total sum from 1 to 3 using do...while loop:", total);


// 4. For...In Loop
// The for...in loop is used to iterate over the properties of an object.
const person = {name: "Alice", age: 25, city: "New York"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// 5. For...Of Loop
// The for...of loop is used to iterate over iterable objects like arrays.
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Color:", color);
}

// 6. forEach Method
// The forEach method executes a provided function once for each array element.
const numbersArray = [1, 2, 3, 4, 5];
numbersArray.forEach(function(number) {
    console.log("Number:", number);
});

