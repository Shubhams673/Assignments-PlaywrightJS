//Datatypes in Javascript are divided into two different categories.

// 1. Primtive Datatypes (Immutable)
// 2. Non-Primitive Datatypes (Mutable)

// Immutable means that the value cannot be changed once it is created. If we try to change the value of a primitive datatype, it will create a new value instead of modifying the existing one.
let a = 10;
a + 10;
console.log(a);

// Mutable means that the value can be changed after it is created. If we try to change the value of a non-primitive datatype, it will modify the existing value instead of creating a new one.
let obj = {
    "name": "Subham",
    "id": 123
}

obj.age = 30;
console.log(obj);

/**************************************************************/
/*********************Primitive Datatypes**********************/
/**************************************************************/

// - number
// - string
// - boolean
// - null
// - undefined
// - symbol

// - number => The data type that can store numbers with decimals or without decimals, that too without any quotations.
let num1 = 10;
let num2 = 10.5;
console.log(typeof num1);
console.log(typeof num2);

// - string => The data type that can store a collection of characters, with single or double quotations or backtick.
let str1 = 'Su"b"ham';
let str2 = "Ban'g'alore"; // Standard Rule to use Double quote.
let str3 = `Hello World`;

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);

console.log(str1); // Different quotes inside another quote is treated as character
console.log(str2);
console.log(str3);


console.log("Employee name is "+str1+" and employee location is "+str2);
console.log(`Employee name is ${str1} and employee location is ${str2}`); // Template literals (Backticks) are used to embed expressions inside a string. It is a more convenient way to create strings that contain variables or expressions. It also allows us to create multi-line strings without using escape characters.

// - boolean => The data type that can store only two values, true or false as result of condition
let x = 10;
let y = 20;
let z = x > y; // z will store the data in the form of boolean
console.log(typeof z); // true
console.log(z);

// - undefined => The data type that is assigned to a variable that has not been assigned a value. It is also the default value of a variable that has been declared but not initialized.
let age;
console.log(age); // undefined

// - null => The data type that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object property should be empty.
let salary = 100000;
console.log(salary);
salary = null; // empty data to salary variable is now assigned as null, which means it has no value.
console.log(salary);

// - symbol => Symbol represents a unique hidden identifier inside an object.
let countryOfOrigin = Symbol(); // It will create a new symbol and assign it to the variable countryOfOrigin.
let productInfo ={
    productName: "iphone 18 pro max",
    price: 150000,
    [countryOfOrigin]: "China"
}

console.log(productInfo); // It will print the productInfo object with the symbol key and its value. The symbol key will not be visible in the console output because it is a hidden identifier. It is useful to create unique keys for object properties that cannot be accessed or modified by other code.    


/**************************************************************/
/*********************Non-Primitive Datatypes******************/
/**************************************************************/

// - object
// - array
// - function
// - date
// - regex
// - map
// - set

// - object => The data type represents a collection of key-value pairs within the curly braces {}.
let person = {
    "name": "Subham",
    "age": 30,
    "empId": 123,
    "visa": true,
    "address": {
        "street": "123 Main St",
        "city": "Bangalore",
        "state": "Karnataka",
        "zip": "560100"
    }
}


// Access the Data
console.log(person.name);
console.log(person["empId"]); // Anotherway to access the data using square brackets and key name in quotes.
console.log(person.address.state);
console.log(person.address["city"]); // Anotherway to access the data using square brackets and key name in quotes. It is useful when the key name has spaces or special characters. It is also useful when the key name is stored in a variable.

console.log(person); // It will print the entire object with all the key-value pairs. It is useful for debugging purposes to see the structure of the object and its contents.

// - array => The data type that represents a list of values within square brackets [].
let fruits = ["Apple", "Banana", "Orange", "Mango"];
let prices = [10, 20, 30, 40];
let fruitsAndPrices = [["Apple", 10], ["Banana", 20], ["Orange", 30], ["Mango", 40]]; // Array of arrays, also known as a 2D array.    
let fruitsAndPricesObj = ["Apple", 10, "Banana", 20, "Orange", 30, "Mango", 40]; // Array of mixed data types. It is not recommended to use mixed data types in an array as it can lead to confusion and errors in the code.
console.log(fruitsAndPrices[3]); // Accessing the first element of the array, which is "Apple". Array indexing starts from 0.
console.log(fruitsAndPricesObj[2]); // Accessing the third element of the array, which is "Orange".
console.log(fruits.length); // It will return the number of elements in the array, which is 4 in this case. It is useful to know the size of the array and to iterate through it using loops.


// - function => The data type that represents a block of code that can be executed when called. It is defined using the function keyword followed by the function name and parentheses ().
function greet(name) {
 //   return "Hello, " + name + "!";
      return `Hello, ${name}!`

}

console.log(greet("Subham")); // It will call the greet function with the argument "Subham" and print the returned value, which is "Hello, Subham!".

function loginToApplication(browser, url) {
    // console.log("Launch the Chrome Browser");
    console.log(`Launch the ${browser} Browser`);
    console.log(`Enter the URL : ${url}`);
    console.log("Enter the username as 'Subham' and password 'Subham@123'");
    console.log("Click on the login button");
    }

function logoutAndCloseBrowser(){
    console.log("LogOut from the application");
    console.log("Close the browser");
    }

function getAccountBalance(accountType){
    console.log(`Navigate to the ${accountType}account balance page`);
    let accountBalance = 10000; // This is a variable that can store the account balance value. It is a non-primitive datatype (mutable) because we can change its value.
    return accountBalance;
    }

// Set => Set DataType represent a collection of unique values of any data type.
let empIds = new Set();
empIds.add(123);
empIds.add(456);
empIds.add(789);
empIds.add(123); // It will not be added to the set because it is a duplicate value.
console.log(empIds.size); // It will print the set with unique values, which is {123, 456, 789} in this case. It is useful to store unique values and to perform operations like union, intersection, and difference on sets.
console.log(empIds); // It will print the set with unique values, which is {123, 456, 789} in this case. It is useful to store unique values and to perform operations like union, intersection, and difference on sets.

// Map => Map DataType represent a collection of key-value pairs where the keys can be of any data type and the values can be of any data type. It is similar to an object but it allows keys of any data type and it maintains the order of the key-value pairs.
let empDetails = new Map();
empDetails.set(1234, "Subham");
empDetails.set(1235, "Singh");
empDetails.set(1234, "Subham Kumar"); // It will update the value of the key 1234 to "Subham Kumar" because it is a duplicate key.
empDetails.set(1236, "Subham Singh");
console.log(empDetails.size)
console.log(empDetails);

// Date => Date DataType represent a specific point in time. It is used to work with dates and times in JavaScript. It provides various methods to manipulate and format dates and times.
let currentDate = new Date();
console.log(currentDate); // It will print the current date and time in the default format, which is "Wed Jun 19 2024 12:00:00 GMT+0530 (India Standard Time)" in this case. It is useful to work with dates and times in JavaScript.

// Get Current Year.
let currentYear = currentDate.getFullYear();
console.log(currentYear); // It will print the current year, which is 2024 in this case. It is useful to get the current year for various purposes like calculating age, determining leap years, etc.

// Get Current Month.
let currentMonth = currentDate.getMonth();
console.log(currentMonth+1); // It will print the current month as a number from 0 to 11, where 0 represents January and 11 represents December. In this case, it will print 5 because June is the 6th month of the year (index starts from 0).

// Get Current Day.
let currentDay = currentDate.getDate();
console.log(currentDay); // It will print the current day of the month, which is 19 in this case. It is useful to get the current day for various purposes like calculating age, determining the number of days in a month, etc.

// Get Current Day of the Week.
let currentDayOfWeek = currentDate.getDay();
console.log(currentDayOfWeek); // It will print the current day of the week as a number from 0 to 6, where 0 represents Sunday and 6 represents Saturday. In this case, it will print 3 because Wednesday is the 4th day of the week (index starts from 0). It is useful to get the current day of the week for various purposes like determining the day of the week for a given date, scheduling events, etc.

// Get Current Hours.
let currentHours = currentDate.getHours();
console.log(currentHours); // It will print the current hours in 24-hour format, which is 12 in this case. It is useful to get the current hours for various purposes like scheduling events, determining the time of day, etc.

// Get Current Minutes.
let currentMinutes = currentDate.getMinutes();
console.log(currentMinutes); // It will print the current minutes, which is 0 in this case. It is useful to get the current minutes for various purposes like scheduling events, determining the time of day, etc.

// Get Current Seconds.
let currentSeconds = currentDate.getSeconds();
console.log(currentSeconds); // It will print the current seconds, which is 0 in this case. It is useful to get the current seconds for various purposes like scheduling events, determining the time of day, etc.
