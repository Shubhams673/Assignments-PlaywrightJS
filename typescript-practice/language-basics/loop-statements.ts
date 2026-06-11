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
    console.log(i+ `For Loop - ${name}`);
}

// While Loop
// Syntax of While Loop
/*
while(condition){
    // code to be executed when the condition is true.
    // condition satisfied then break the loop.
}
*/

let j: number = 1;
let isPageLoaded: boolean = false;
while(j > 0){
    if(isPageLoaded || j>10){
        break;
    }
    console.log(j+`While Loop Refresh the page - ${name}`);
    j++;
}






// Special cases in loops
// 1. for-in loop ==> for-in loop is used to iterate over the properties of an object.
// 2. for-of loop ==> for-of loop is used to iterate over the values of an iterable object like array, string, etc.
// 3. do-while loop ==> do-while loop is used to execute a block of code at least once, and then repeat the execution as long as the condition is true.

// Array 
let fruits: string[] = ["Apple", "Mango", "Banana"];

// Normal Loop
for(let i: number= 0; i < fruits.length-1; i++){
    console.log(fruits[i]);
}

// for- of loop ==> To get all the values as Each and evry value of the given list
// for(let variable of list){
// // Statement to be executed
//}

for(let fruit of fruits){
    console.log(fruit);
}

// for-in loop ==> To get all the keys as Each and evry key of the given list
// for(let variable in list){
// // Statement to be executed
//}
interface personInfo{
    name: String;
    age : number;
    empId: number;
    visa: boolean;
    address: {
            city: string;
            state: string;    
            country: string;
    }
}
let person: personInfo = {
    "name": "Subham Singh",
    "age": 25,
    "empId": 1234,
    "visa": true,
    "address": {
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India"
    }
}
// for(let key in person){
    // Statement to be executed
// }

for(let key in person){
    console.log(key);
    console.log(person[key as keyof personInfo]);
}

// do-while loop
// Syntax of do-while loop
/*
do{
    // code to be executed
}while(condition);
*/

let x: number = 0;

// 1st with while loop
while(x>0){
    console.log(x);
    x++;
}

// 2nd with do-while loop
do{
    console.log(x);
    //x++;
}while(x>0);    // if X++ is given, it will be an Infinite loop because the condition is always true.