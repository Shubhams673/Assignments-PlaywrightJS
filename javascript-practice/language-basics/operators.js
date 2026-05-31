// Syntax to store data : Declare variable = data;

// Operators => Operators are special characters that are used in JavaScript to perform different types of operations.

// Theree are 5 different types of operators in JavaScript.
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Ternary Operators



// 1. Arithmetic Operators => These are the special characters used to perform mathematical operations in JavaScript (+, -, *, /, %, ++, --).
// + Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulus (Remainder -> Returns only remainders of Division operations 9 % 3 = 0, 5 % 2 = 1)
// ++ Increment (Increase the value by one, a = 10; a++ = a + 1 = 11)
// -- Decrement (Decrease the value by one, a = 10; a-- = a - 1 = 9)

let a = 10;
let b = 20;

// Post Increament and Post Decreament => When we use the increment or decrement operator after the variable, it is called post increment or post decrement. In this case, the value of the variable is first used in the expression and then it is incremented or decremented.
console.log(a++); // first use the value of the variable then later increase it by one.
console.log(b--); // first use the value of the variable then later decrease it by one.
console.log(a); // After the use of the post increment operator, the value of a is increased by one, so it becomes 11.
console.log(b) // After the use of the post decrement operator, the value of b is decreased by one, so it becomes 19.

// Pre Increament and Pre Decreament => When we use the increment or decrement operator before the variable, it is called pre increment or pre decrement. In this case, the value of the variable is first incremented or decremented and then it is used in the expression.
console.log(++a); // first increase the value of the variable by one then later use it in the expression.
console.log(--b); // first decrease the value of the variable by one then later use it in the expression.
console.log(a) // After the use of the pre increment operator, the value of a is increased by one, so it becomes 12.
console.log(b) // After the use of the pre decrement operator, the value of b is decreased by one, so it becomes 18.





// 2. Assignment Operators => These are the special characters used to assign values to variables in JavaScript (=, +=, -=, *=, /=, %=).
let i = 10;
console.log("Initial value of i : " + i)

i += 10;
console.log("After using += operator : " + i) // i = i + 10 => 10 + 10 = 20

i -= 10;
console.log("After using -= operator : " + i) // i = i - 10 => 20 - 10 = 10

i *= 10;
console.log("After using *= operator : " + i) // i = i * 10 => 10 * 10 = 100

i /= 10;
console.log("After using /= operator : " + i) // i = i / 10 => 100 / 10 = 10    

i %= 10;
console.log("After using %= operator : " + i) // i = i % 10 => 10 % 10 = 0


// 3. Comparison Operators => These are the special characters used to compare two values in JavaScript and return Boolean as a result(==, ===, !=, !==, >, <, >=, <=).
// == represents loose equality (Lose equality compares only data.)
// === represents strict equality (Strict equality compares both data and type.)
let x = 10;
let y = 10;
let z = "10"; // when we write any value inside the double quotations, it will be treated as text, not a number.

console.log(x == y) // true (because both x and y have the same value)
console.log(x == z) // true (because both x and z have the same value, even though they are of different types)

console.log(x === y) // true (because both x and y have the same value and type)
console.log(x === z) // false (because x and z have the same value but different types)

console.log(x != y) // false (because both x and y have the same value)
console.log(x>y) // false (because x is not greater than y)
console.log(x<y) // false (because x is not less than y)
console.log(x>=y) // true (because x is greater than or equal to y)
console.log(x<=y) // true (because x is less than or equal to y)

// 4. Logical Operators => These are the special characters used to combine two or more conditions and write Boolean as a result in JavaScript (&&, ||, !).
// && represents logical AND (returns true if both conditions are true, otherwise returns false)
// || represents logical OR (returns true if at least one condition is true, otherwise returns false)
// ! represents logical NOT (returns true if the condition is false, and returns false if the condition is true)

let p = 10;
let q = 20;

console.log(p > 5 && q > 15) // true && true = true
console.log(p > 5 && q > 25) // true && false = false

console.log(p > 5 || q > 25) // true || false = true
console.log(p > 15 || q > 25) // false || false = false

console.log(!(p > 5)) // !true = false (because the condition is true, so the logical NOT operator returns false)

// 5. Ternary Operators => These are the special characters used to write a condition in a single line / shorthand of if-else statement in JavaScript (condition ? expression1 : expression2).

// syntax => let result = conditions ? expression1 : expression2;

let age = 18;
let result = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(result) // You are an adult. (because the condition is true, so the ternary operator returns expression1)