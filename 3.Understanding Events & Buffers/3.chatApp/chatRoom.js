const EventEmitter = require('events');

class ChatRoom extends EventEmitter { // Inherit from EventEmitter
    constructor() { // Initialize the ChatRoom
        super(); // Call the parent constructor
        this.users = new Set(); // Store users in a Set
    }

    join(user) { // User joins the chat
        this.users.add(user);
        this.emit('join', user);
    }

    sendMessage(user, message) { // User sends a message
        if (this.users.has(user)) {
            this.emit('message', { user, message });
        }
        else {
            console.log(`${user} is not in chat`);
        }
    }

    leave(user) { // User leaves the chat
        if (this.users.has(user)) {
            this.users.delete(user);
            this.emit('leave', user);
        }
        else {
            console.log(`${user} is not in chat`);
        }
    }
}

module.exports = ChatRoom; // Export the ChatRoom class