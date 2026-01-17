// Higher Order Functions in JavaScript
// A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.
// It is also called a first-class function because functions in JavaScript are treated as first-class citizens.

// forEach is a built-in higher-order function that takes a callback function as an argument and executes it for each element in an array.

function makeTea(typeOfTea) {
    return `Here is your cup of ${typeOfTea} tea.`;
}

function processTeaOrder(teaFunction) {
    return teaFunction("Earl Grey");
}

let orderConfirmation = processTeaOrder(makeTea);
console.log(orderConfirmation); // Output: Here is your cup of Earl Grey tea.

function createTeaMaker(name) {
    return function(teaType) {
        return `Making ${teaType} tea for ${name}.`;
    }
}

let teaMaker = createTeaMaker("Somil"); // teaMaker now holds the inner function
console.log(teaMaker("Green")); // Output: Making Green tea for Somil.