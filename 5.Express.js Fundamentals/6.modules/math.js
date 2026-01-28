// Custom modules are user-defined modules specific to the application
// They can be imported and used in different parts of the application
// They are used to organize code into manageable sections

exports.add = function add(a, b) {
  return a + b;
};

exports.sub = function sub(a, b) {
  return a - b;
};

exports.mul = function mul(a, b) {
  return a * b;
};

exports.div = function div(a, b) {
  return a / b;
};

// There are two ways to export modules in Node.js

// 1. Named exports
// Example: export { add, sub, mul, div }

// 2. Default exports
//Example: export default { add, sub, mul, div }

module.exports = function () {
  console.log("Hey! I'm a default export");
};
