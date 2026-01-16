// require is a built-in function in Node.js used to include modules that exist in separate files.
// The require function takes a string as an argument, which is the path to or the name of the module you want to include.
// It checks if the module requires a 3rd party library, a built-in module, or a local file and loads it accordingly, if found but if not found, it throws an error.


// Here, we are requiring the built-in 'fs' (file system) module to work with the file system.

const fs = require('fs');

// console.log(fs); // It will print the 'fs' module object

const content = fs.readFileSync('modules.txt', 'utf-8'); // It will read the content of 'modules.txt' file

console.log(content);

// node.js internally makes a wrapper function for every module
// (function (exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here
// });
// The code is then executed by calling this wrapper function.

// This is why we have access to 'exports', 'require', 'module', '__filename', and '__dirname' in every module.