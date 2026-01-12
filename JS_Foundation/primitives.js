// Primitive data types in JavaScript

// 1. String
let myString = "Hello, World!";
console.log(typeof myString); // Output: string
// 2. Number
let myNumber = 42;
console.log(typeof myNumber); // Output: number
// 3. Boolean
let myBoolean = true;
console.log(typeof myBoolean); // Output: boolean
// 4. Undefined
let myUndefined;
// Or let myUndefined = undefined;
console.log(typeof myUndefined); // Output: undefined
// 5. Null
let myNull = null; 
console.log(typeof myNull); // Output: object (this is a known quirk in JavaScript)
// 6. Symbol
let mySymbol = Symbol("mySymbol");
console.log(typeof mySymbol); // Output: symbol
// 7. BigInt
let myBigInt = 9007199254740991n;
console.log(typeof myBigInt); // Output: bigint

// Every primitive type can also be created using their respective wrapper objects, but it's not recommended to use them this way because they create objects instead of primitive values and consume more memory.
let num = new Number(100);
console.log(typeof num); // Output: object

// Demonstrating immutability of primitive types
let str1 = "Hello";
let str2 = str1;x
str2 = "World";
console.log(str1); // Output: Hello
console.log(str2); // Output: World

// String concatenation vs. template literals
let helloMssg = "Hello";
let oldGreeting = helloMssg + "Somil";
console.log(oldGreeting); // Output: HelloSomil
// The difference with template literals is that it allows for easier embedding of expressions and variables.
let newGreeting = `${helloMssg} Somil`;
console.log(newGreeting); // Output: Hello Somil

