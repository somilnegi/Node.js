// Event Emmiters allow us to create, fire, and listen for our own events.
// They are part of the 'events' module in Node.js

const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
myEmitter.on('greet', () => {
    console.log('Hello, welcome to the EventEmitter example!');
})

// Emit the 'greet' event
myEmitter.emit('greet');

// You can also pass arguments to the event listener
myEmitter.on('personalGreet', (name) => {
    console.log(`Hello, ${name}! Welcome to the EventEmitter example!`);
});

// Emit the 'personalGreet' event with an argument
myEmitter.emit('personalGreet', 'Somil');

// Listener that will be called only once
myEmitter.once('pushNotification', (message) => {
    console.log(`Push Notification: ${message}`);
}); 

myEmitter.emit('pushNotification', 'You have a new message!'); // This will trigger the listener
myEmitter.emit('pushNotification', 'You have another new message!'); // This will NOT trigger the listener

// Define the listener function , it can be reused
const myListener = () => {
    console.log("I'm a test listener");
} 

myEmitter.on("testEvent", myListener);
myEmitter.emit("testEvent"); // This will trigger the listener

// Remove the listener
// myEmitter.removeListener("testEvent", myListener);
myEmitter.emit("testEvent"); // This will NOT trigger the listener

console.log(myEmitter.listenerCount("testEvent")); // Outputs the number of listeners for 'testEvent'
console.log(myEmitter.listeners("testEvent")); // Outputs the array of listeners for 'testEvent'
