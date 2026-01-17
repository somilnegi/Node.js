// Non-primitive data types in JavaScript include Objects, Arrays, Functions, Dates, and more.

// Objects
// An object is a collection of key-value pairs. Keys are strings (or Symbols), and values can be of any data type, including other objects.

let username = {
    firstname: "John", // The key can also be declared using quotes: "firstname": "John" and accessed using bracket notation: username["firstname"]
    lastname: "Doe",
    isLoggedIn: true,
};
console.log(username);
console.log(username.firstname);// Accessing property using dot notation
console.log();

console.log(username.lastname);
console.log(username.isLoggedIn);

console.log(typeof username);
// Object can also be made constant, the object properties can still be changed
const user = {
    firstname: "Jane",
    lastname: "Smith",
};

console.log(user.firstname);
user.firstname = "Janet"; // This is allowed
console.log(user.firstname);

// Arrays
// An array is an ordered collection of values. Arrays can hold values of different data types, including other arrays and objects.

let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits);
console.log(typeof fruits);

console.log(fruits[0]); // Accessing the first element
