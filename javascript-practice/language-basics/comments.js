// There are two different types of comments in JavaScript: single-line comments and multi-line comments.

//  1. Single-line comment : We can use '//' to add a single line comment.
//  2. Multi-line comments : We can use '/*' to start a multi-line comment and '*/' to end it.

// 'console.log' is a print statement. Whenever we want to. print something, we are going to use this simple statements
console.log("Hello, World!")

/*
* This is a function that is going to help us calculate the sum of two different numbers.
* @param {number} a - The first number to be added.
* @param {number} b - The second number to be added.
* @returns {number} The sum of the two numbers. 
* @author [Subham Singh] (Shubhams673@gmail.com)
* @version 1.0.0
* created on 2026-05-22
*/
function add(a, b){
    return a + b
}
console.log(add(5,10))