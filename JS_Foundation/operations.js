// Operations in JavaScript

let score = 102
let bonus = 20

// Addition
let totalScore = score + bonus
console.log("Total Score (Addition):", totalScore) // 122

// Subtraction
let scoreAfterPenalty = score - 10
console.log("Score After Penalty (Subtraction):", scoreAfterPenalty) // 92

// Multiplication
let doubleScore = score * 2
console.log("Double Score (Multiplication):", doubleScore) // 204

// Division
let halfScore = score / 2
console.log("Half Score (Division):", halfScore) // 51

// Modulus
let remainder = score % 3
console.log("Remainder when Score is divided by 3 (Modulus):", remainder) // 0

// Exponentiation
let squaredScore = score ** 2
console.log("Squared Score (Exponentiation):", squaredScore) // 10404

// Increment
score++
console.log("Score after Increment:", score) // 103

// Decrement
score--
console.log("Score after Decrement:", score) // 102

// Compound Assignment
score += 10
console.log("Score after += 10:", score) // 112
score *= 2
console.log("Score after *= 2:", score) // 224
score -= 20
console.log("Score after -= 20:", score) // 204
score /= 4
console.log("Score after /= 4:", score) // 51
score %= 7
console.log("Score after %= 7:", score) // 2   
score **= 3
console.log("Score after **= 3:", score) // 8

// Comparison Operators
// ==, !=, >, <, >=, <=
let highScore = 150
console.log("Is score equal to highScore?", score == highScore) // false
console.log("Is score not equal to highScore?", score != highScore) // true 
console.log("Is score greater than highScore?", score > highScore) // false
console.log("Is score less than highScore?", score < highScore) // true
console.log("Is score greater than or equal to highScore?", score >= highScore) // false
console.log("Is score less than or equal to highScore?", score <= highScore) // true

// Logical Operators
// && (AND), || (OR), ! (NOT)
let isGameOver = false
let hasBonus = true
console.log("Is game over and has bonus?", isGameOver && hasBonus) // false
console.log("Is game over or has bonus?", isGameOver || hasBonus) // true
console.log("Is game not over?", !isGameOver) // true

// Operators Precedence
// It follows the order: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction (PEDMAS)
let finalScore = score + bonus * 2 - 5 / 1 + (10 ** 2)
console.log("Final Score with Precedence:", finalScore) // 117
