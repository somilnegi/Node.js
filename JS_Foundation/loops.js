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

let citiesPopulations = {
    "Tokyo": 37400068,
    "Delhi": 28514000,
    "Shanghai": 25582000,
    "London": 8982000,
    "Berlin": 3769000,
    "New York": 8419600,
    "Paris": 2148000
};

let cityPopulations = {};
for (let city in citiesPopulations) { 
    if (city === "Berlin") {
        break;
    }
    cityPopulations[city] = citiesPopulations[city];
}

// 5. For...Of Loop
// The for...of loop is used to iterate over iterable objects like arrays.
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Color:", color);
}

let numbersList = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const number of numbersList) {
    if (number === 4) {
        break;
    }
    smallNumbers.push(number);
}
console.log("Numbers before 4:", smallNumbers);

// 6. forEach Method
// The forEach method executes a provided function once for each array element.
const numbersArray = [1, 2, 3, 4, 5];
numbersArray.forEach(function(number) {
    console.log("Number:", number);
});

let fruits = ["apple", "banana", "cherry", "date"];
let selectedFruits = [];
fruits.forEach(function (fruit) {
    if (fruit === "cherry") {
        return; // Skip cherry
    }
    selectedFruits.push(fruit);
    }
)

console.log("Selected fruits (excluding cherry):", selectedFruits);