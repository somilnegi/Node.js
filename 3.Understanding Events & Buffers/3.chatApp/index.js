const ChatRoom = require('./chatRoom.js'); // Import the ChatRoom class

const chatRoom = new ChatRoom(); // Create a new ChatRoom instance

chatRoom.on('join', (user) => { // Listen for join events
    console.log(`${user} has joined the chat.`);
});

chatRoom.on('message', ({ user, message }) => { // Listen for message events
    console.log(`${user}: ${message}`);
});

chatRoom.on('leave', (user) => { // Listen for leave events
    console.log(`${user} has left the chat.`);
});

// Simulate chat activity
chatRoom.join('Alice');
chatRoom.sendMessage('Alice', 'Hello everyone!');
chatRoom.join('Bob');
chatRoom.sendMessage('Bob', 'Hi Alice!');
chatRoom.leave('Alice');
chatRoom.sendMessage('Alice', 'Goodbye!');