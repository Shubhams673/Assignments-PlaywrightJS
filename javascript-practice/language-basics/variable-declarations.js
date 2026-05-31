// Syntax : Declaration Variable = Date;

// In JavaScript, we can declare the variables by using three different keywords.

// 1. var   => Var will be used to declare a variable inn the old version of JavaScript, we need yo avoid in the latest version
// 2. let   => Latest version of JavaScript, It is block scope and we can reassign the value of let variable
// 3. const => Latest version of JavaScript, It is block scope and we cannot reassign the value of const variable

// There three different variable declaration will differ mainly based on four important parameters.

// 1. Initilization
// 2. Reassignment
// 3. Re-declaration
// 4. Scope

// 1. Initilization => It means, adding a value to a variable at the time of declaration.
var a ; // It is not mandatory to initialize at the begining, we can add later as well.
let b ; // It is not mandatory to initialize at the begining, we can add later as well.
const c = 10 ; // It is not mandatory to initialize at the begining, we can add later as well.


// 2. Reassignment => It means modifying, changing the original value of a variable.
a = 20; // var will allow reassignment.
b = 30; // let will allow reassignment.
//c = 40; // const won;t allow reassignment.

// print the values of variables
console.log(a); // 20
console.log(b); // 30
console.log(c); // 10

// 3. Re-declaration => Using the same variable to store some other data by re-declaring it.
var a = "Subham"        // var allows re-declaration.
// let b = "JavaScript";   // let won't allow re-declaration.
// const c = "Programming";// const won't allow re-declaration.

// print the values of variables
console.log(a); // Subham
console.log(b); // no re-declaration
console.log(c); // no re-declaration

// 4. Scope => Accessing the data out of the block or within the block.

// let and const are block scope, which means they are only accessible within the block they are defined in.
// var is not block - scoped.

{
    var x = 10;
    let y = 20;
    const z = 30;

    // print the values of variables
    console.log("Inside the block");
    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30
}

    // print the values of variables
    console.log("Outside the block");
    console.log(x); // 10
    // console.log(y); // only block scope
    // console.log(z); // only block scope