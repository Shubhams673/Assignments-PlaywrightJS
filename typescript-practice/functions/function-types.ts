// Function Types 

// There are mainly threee different types of function available i Typescript.
// 1. Named Function
// 2. Arrow Function
// 3. Anonymous Function

// 1. Named Function ==> The function declared explicitly with some name.

// Syntax:
// function functionaName(parameters): return type {
//     // function body
// }

// Example:
function add(a: number, b: number): number {
    return a + b;
}

// Calling the named function
console.log(add(5,10)); // Output: 15

// 2. Arrow Function ==> The function declared using arrow syntax.

// Syntax:
// (parameters) => {
//     // function body
// }

// Example:
(a: number, b: number) => (a+b);
let sum = (c: number, d: number) => (c+d);

// Calling the arrow function
console.log(sum(5,10)); // Output: 15


// 3. Anonymous Function ==> The function declared without any name.

// Syntax:
// function functionName(function): return type {
//     Code to be executed
// }

// Example:
function sqr(x: number): void{
    console.log(x*x);
}

sqr(5); // Output: 25

function calculator(square: (x: number) => number): void {
    console.log(square(5));
}

// Calling the function
calculator(
    function(a: number): number {
        return a*a;
    }
); // Output: Calculation    


// Example:
function toGreet(greetings: (name: string) => string): void {
    console.log(greetings("Subham Singh"));
}

toGreet(
    function(x: string): string {
        return `Hello and Welcome, ${x}`;
    }
);
