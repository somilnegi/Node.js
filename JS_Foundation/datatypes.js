//Comments in JavaScript

// console.log("chai"); this is a single-line comment

/*
This is a multi-line comment
spanning multiple lines.
It can be used to explain code in detail.
*/

// Variables in JavaScript

var score = 100; // 'var' is function-scoped, can be redeclared and is not used in modern JS
let level = 1; // 'let' is block-scoped, cannot be redeclared, but can be updated

// Data Types in JavaScript

/*
String
Number
Boolean
BigInt
Undefined
Null
Symbol
Object
*/

// Examples of different data types

let playerName = "Alice"; // String
let playerScore = 1500; // Number
let isGameOver = false; // Boolean
let bigNumber = 9007199254740991n; // BigInt
let undefinedVariable;  // Undefined
let nullVariable = null; // Null
let uniqueId = Symbol("id"); // Symbol
let playerStats = { firstname: "Alice", lastname: "Smith", level: 1, score: 1500 }; // Object

console.log(typeof playerName); // Output: string
console.log(typeof playerScore); // Output: number
console.log(typeof isGameOver); // Output: boolean
console.log(typeof bigNumber); // Output: bigint
console.log(typeof undefinedVariable); // Output: undefined
console.log(typeof nullVariable); // Output: object (this is a known quirk in JavaScript)
console.log(typeof uniqueId); // Output: symbol
console.log(typeof playerStats); // Output: object  