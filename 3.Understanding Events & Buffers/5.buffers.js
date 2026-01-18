const { Buffer } = require('buffer');

// Create a buffer from a string
// const buf = Buffer.alloc(4) // Allocate a buffer of 4 bytes
// console.log(buf[0]); // Output: 0 (initial value is 0)

const buf = Buffer.from('Hello, World!'); // Create a buffer from a string
console.log(buf); // Output: <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
console.log(buf.toString()); // Output: Hello, World!

// Create a buffer from an array of bytes
const byteArray = [72, 101, 108, 108, 111]; // ASCII values for 'Hello'
const bufFromArray = Buffer.from(byteArray); // Create a buffer from an array of bytes
console.log(bufFromArray.toString()); // Output: Hello

const buffer = Buffer.alloc(20); // Allocate a buffer of 20 bytes
buffer.write('Hello, Somil!'); // Write a string to the buffer
console.log(buffer.toString()); // Output: Hello, Somil!

const buf1 = Buffer.from('Chai aur Code')
console.log(buf1.toString());
console.log(buf1.toString('utf8', 0, 4)); // Output: Chai
buf1[0]=0x4A; // Change first byte to 'J' (ASCII 74)
console.log(buf1.toString()); // Output: Jhai aur Code