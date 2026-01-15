// Function in JavaScript
// A function is a block of code designed to perform a particular task.

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Somil")); // "Hello, Somil!"

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation); // "Order confirmed for chai"

// Function Expression
// It is a function that is assigned to a variable.
const add = function(a, b) {
    return a + b;
};

// Arrow Function
// A shorter syntax for writing functions using the '=>' syntax.
const calculateTotal = (price, quantity) => price * quantity; // Implicit return for single expression

let totalCost = calculateTotal(50, 3);
console.log(totalCost); // 150

// This Keyword in Functions
const person = {
    firstName: "Somil",
    lastName: "Negi",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName()); // "Somil Negi"

