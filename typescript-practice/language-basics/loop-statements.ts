// Loop Statement : Loop the statements or Execute the same statement multiple times until tthe condition is satisfied.

let name: string = "TypeScript";

// Before Loops
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);


// Loop Statement are mainly divided into two different categories:

// 1. For loop ==> For loop is used to execute a block of code for a specific number of times, we know before the execution.
// while loop ==> While loop is used when we don't know the total number of iteration before execution itself.

// For Loop
// Syntax of For Loop
/*
for(initialization; condition; increment/decrement){
    // code to be executed when the condition is true.
}
*/
for(let i: number = 0; i < 5; i++){
    console.log(`For Loop - ${name}`);
}

// While Loop
// Syntax of While Loop
/*
while(condition){
    // code to be executed when the condition is true.
    // condition satisfied then break the loop.
}
*/

let i: number = 0;

while(i < 5){
    console.log(`While Loop - ${name}`);
    i++;
}