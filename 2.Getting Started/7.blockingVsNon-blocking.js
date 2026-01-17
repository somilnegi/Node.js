const fs = require('fs');

// Task: Read the contents of a

// Blocking (synchronous) version

console.log('Start of script');

const contents = fs.readFileSync('Understanding Node.js/5.package.json.txt', 'utf8');
console.log(contents); // This will block the event loop

console.log('End of script');

// The synchronous read blocks the event loop until the file is read,
// so "End of script" is logged only after the file contents are printed.
// These operations can lead to performance issues in a real server environment. Suppose a server is handling multiple requests; if one request involves a blocking operation, all other requests must wait until that operation completes.



// Non-blocking (asynchronous) version

console.log('Start of script');

fs.readFile('Understanding Node.js/5.package.json.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data); // This will not block the event loop
}); // This will not block the event loop

console.log('End of script');

// In the asynchronous version, "End of script" is logged immediately after "Start of script",
// while the file is being read in the background.
// Once the file read is complete, the callback function is executed to log the contents.
// This non-blocking behavior allows the server to handle other requests while waiting for I/O operations to complete.