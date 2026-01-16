const fs = require('fs');

// In newer versions of Node.js the modules are imported using node: prefix
// const fs = require('node:fs');
// This ensures compatibility across different Node.js versions and avoids name conflicts with user-defined modules named 'fs'.

// Every function in fs module has a synchronous and asynchronous version. The synchronous version blocks the execution until the operation is complete, while the asynchronous version uses callbacks or promises to handle completion without blocking.

const content = fs.readFileSync('Understanding Node.js/npm.txt', 'utf8');

fs.writeFileSync('Understanding Node.js/npm_copy.txt', 'This is a copy of npm.txt' + '\n' + content); // It overwrites the file if it already exists

// fs.appendFileSync('npm_copy.txt', '\nAppended content to the file.'); // It appends content to the file if it already exists

//fs.unlinkSync('Understanding Node.js/npm_copy.txt'); // It deletes the file named 'npm_copy.txt'

fs.mkdirSync('Understanding Node.js/new_directory'); // It creates a new directory named 'new_directory'
// We can create folder in a nested way using { recursive: true } option

// fs.rmdirSync('new_directory'); // It removes the directory named 'new_directory'

