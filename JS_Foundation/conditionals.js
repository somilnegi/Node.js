// Conditional Statements in JavaScript include if, else if, else, and switch statements.

//The if statement is used to execute a block of code if a specified condition is true.

// Example of an if statement
let age = 20;
if (age >= 18) {    
    console.log("You are an adult.");
}

// The else if statement is used to specify a new condition to test if the first condition is false.

// Example of an else if statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// The else statement is used to execute a block of code if all preceding conditions are false.

// Example of an else statement
let temperature = 30;
if (temperature > 30) {
    console.log("It's a hot day.");
} else {
    console.log("It's not a hot day.");
}

// The switch statement is used to perform different actions based on different conditions.

// Example of a switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Practice exercises:

// Check if a string is equal to another string and print a message accordingly.
let username = "admin";
let anotherUsername = "user";
if (username === anotherUsername) {
    console.log("Pick another username.");
} else {
    console.log("Username is available.");
}

// Check if a variable is number or not and print a message accordingly.
let value = "42";
if (typeof value === 'number') {
    console.log("The value is a number.");
} else {
    console.log("The value is not a number.");
}

// Check if a boolean variable is true or false and print a message accordingly.
let isLoggedIn = false; 
if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}