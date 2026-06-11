// Function Implemetations

// There are multiple ways that we can implement any function to complete the specific task

//1. Function without parameters without return type
// Create a function which is not going to take any input parameters and also it won't give you any output.
function greet(): void{
    console.log("hello world");
}

// Calling the function
greet();

// 2. Function with parameters and without return type
// Create a funtion which is going to take some input parameters but it won't give you any output.
function greetPerson(name: string): void{
    console.log(`Hello ${name}`);
}

// Calling the function
greetPerson("Subham Singh");

// 3. Function with parameters and with return types
// Create a function which is going to take some input parameters and also it will give you some output.
function add(a: number, b: number): number{
    return a+b;
}

// Calling the function
console.log(add(5,10));

// 4. Function without parameters and with return type
// Create a function which is going to tae no. input parameters but it will give you some output.
function getCurrentDate(): Date{
    return new Date();
}

// Calling the function
console.log(getCurrentDate());


// 5. Function with option parameters
// create a function which is going to take some input parameters but some of the parameters are optional and also it will give you some output.
function personDetails(name: string, age?: number): void{
    console.log(name);
    if (age){
        console.log(age);
    }
}

// Calling the funciton
personDetails("Subham Singh");
personDetails("Subham Singh", 29);

// 6. function with default parameters
// create a function which is going to take some input parameters but some of the parameters are default and also it will give you some output.
function greetPersonWithDefault(name: string, age: number, visaStatus: boolean = false): void{
    console.log(name);
    console.log(age);
    console.log(visaStatus);
}

// Calling the funciton
greetPersonWithDefault("Subham Singh", 29);
greetPersonWithDefault("Subham Singh", 29, true);


// 7. Function with the REST parameters
// Creating a function that will take unlimited parameters and produce the output
function sumOfNumbers(...numbers: number[]): number {
    let sum: number = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

// Calling the funciton
console.log(sumOfNumbers(1,2,3,4,5,6,7,8,9,10));