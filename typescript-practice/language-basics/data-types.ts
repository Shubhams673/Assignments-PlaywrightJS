/* Data types are two different categories in Typescript :
1. Primitive data types => Immutable data => String, boolean, undefined, null, symbol
2. Non-primitive data types => Mutable data => Objects, Arrays, Function, Date, Map and Set
*/

/******************************************************/
/************** Primitive Data Types *****************/
/*****************************************************/

// Numbers ==> Number without decimals and number with decimals
let empId: number = 1234;
let price: number = 99.99;
console.log(empId)

// Text or String => Sequence of char, we have to store inside double quotes or single quotes or back ticks.
let firstName: string = "Subham";
let lastName: string = "Singh";
console.log("Name of the employee is " + firstName + " " + lastName);
console.log(`Name of the employee is ${firstName} ${lastName}`);

// Boolean => It can be either true or false
let doYouHaveVisa: boolean = true;
console.log(doYouHaveVisa);

// Undefined => It represents a variable that is declared but we haven't assigned any value.
let age: undefined ;
console.log(age);

// null => Null represents a variable declared with an empty value intentionally.
let emplSalary: null = null;
console.log(emplSalary);

// union => Union represents more than one data type that can be stored within the variable.
let empAddress: string | number;;
empAddress = "Bangalore";
console.log(empAddress);
empAddress = "560100";
console.log(empAddress);

// any => Any represnts any data type that can be stored within the variable.
let data: any;
data = 1234;
console.log(data);
data = "Subham";
console.log(data);

/******************************************************/
/************** Non - Primitive Data Types *****************/
/*****************************************************/

// obkects => Objects data type represents a collection of key-value pairs.
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
console.log(person);

console.log(person.name);
console.log(person.address.city);

console.log(person["name"]);
console.log(person["address"]["city"]);

// Array => Array data type represents a collection of similar data types stored in a single variable.
let fruits: string[] = ["Apple", "Mango", "Banana"];
let prices: number[] = [100, 200, 300];
let fruitsAndPrices: (string | number)[] = ["Apple", 100, "Mango", 200, "Banana", 300];

// access data from array
console.log(fruits[1]);
console.log(prices[2]);
console.log(fruitsAndPrices[3]);

// Tuple => Tuple is an ordered array that represnts a list of values in a specific order.
// Problem Statement : Store employee name, employee phone number, employee visa status together.

// Array way - we can store any data what ever the type we have declared but we cannot maintain the order of data types.
let employee: (string | number | boolean)[] = [1234567890,"Subham Singh", true, 560100, true, false]; 
console.log(employee);

// Tuple way - spcifically maintained order of data types
let employeeDetails: [string, number, boolean] = ["Subham Singh", 1234567890, true];
console.log(employeeDetails);

// Function => Function is a block of code that performs a specific task.
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(10, 20));

function loginToApplication(browser: string, url: string): void {
    // console.log("Launch the Chrome Browser");
    console.log(`Launch the ${browser} Browser`);
    console.log(`Enter the URL : ${url}`);
    console.log("Enter the username as 'Subham' and password 'Subham@123'");
    console.log("Click on the login button");
    }


function logoutAndCloseBrowser(): void{
    console.log("LogOut from the application");
    console.log("Close the browser");
    }

function getAccountBalance(accountType: string): number{
    console.log(`Navigate to the ${accountType} account balance page`);
    let accountBalance: number = 10000; // This is a variable that can store the account balance value. It is a non-primitive datatype (mutable) because we can change its value.
    return accountBalance;
    }

// calling the funcitons dclared above.
loginToApplication("Chrome", "www.amazon.com");
logoutAndCloseBrowser();
let accountBalance: number = getAccountBalance("saving");
console.log("The Account Balance is : " + accountBalance);
console.log(`The Account Balance is : ${accountBalance}`);  

// // Set => Set DataType represent a collection of unique values of any data type.
let empIds: Set<number | string> = new Set();
empIds.add(123);
empIds.add(456);
empIds.add("Subham");
empIds.add(123); // It will not be added to the set because it is a duplicate value.
console.log(empIds.size); // It will print the set with unique values, which is {123, 456, 789} in this case. It is useful to store unique values and to perform operations like union, intersection, and difference on sets.
console.log(empIds); // It will print the set with unique values, which is {123, 456, 789} in this case. It is useful to store unique values and to perform operations like union, intersection, and difference on sets.

// Map => Map DataType represent a collection of key-value pairs where the keys can be of any data type and the values can be of any data type. It is similar to an object but it allows keys of any data type and it maintains the order of the key-value pairs.
let empDetails: Map<number , string> = new Map();
empDetails.set(1234, "Subham");
empDetails.set(1235, "Singh");
empDetails.set(1234, "Subham Kumar"); // It will update the value of the key 1234 to "Subham Kumar" because it is a duplicate key.
empDetails.set(1236, "Subham Singh");
console.log(empDetails.size)
console.log(empDetails);

// Date => Date DataType represent a specific point in time. It is used to work with dates and times in JavaScript. It provides various methods to manipulate and format dates and times.
let currentDate: Date = new Date();
console.log(currentDate); // It will print the current date and time in the default format, which is "Wed Jun 19 2024 12:00:00 GMT+0530 (India Standard Time)" in this case. It is useful to work with dates and times in JavaScript.

// Get Current Year.
let currentYear: number = currentDate.getFullYear();
console.log(currentYear); // It will print the current year, which is 2024 in this case. It is useful to get the current year for various purposes like calculating age, determining leap years, etc.

// Get Current Month.
let currentMonth: number = currentDate.getMonth();
console.log(currentMonth+1); // It will print the current month as a number from 0 to 11, where 0 represents January and 11 represents December. In this case, it will print 5 because June is the 6th month of the year (index starts from 0).

// Get Current Day.
let currentDay: number = currentDate.getDate();
console.log(currentDay); // It will print the current day of the month, which is 19 in this case. It is useful to get the current day for various purposes like calculating age, determining the number of days in a month, etc.

// Get Current Day of the Week.
let currentDayOfWeek: number = currentDate.getDay();
console.log(currentDayOfWeek); // It will print the current day of the week as a number from 0 to 6, where 0 represents Sunday and 6 represents Saturday. In this case, it will print 3 because Wednesday is the 4th day of the week (index starts from 0). It is useful to get the current day of the week for various purposes like determining the day of the week for a given date, scheduling events, etc.

// Get Current Hours.
let currentHours: number = currentDate.getHours();
console.log(currentHours); // It will print the current hours in 24-hour format, which is 12 in this case. It is useful to get the current hours for various purposes like scheduling events, determining the time of day, etc.

// Get Current Minutes.
let currentMinutes: number = currentDate.getMinutes();
console.log(currentMinutes); // It will print the current minutes, which is 0 in this case. It is useful to get the current minutes for various purposes like scheduling events, determining the time of day, etc.

// Get Current Seconds.
let currentSeconds: number = currentDate.getSeconds();
console.log(currentSeconds); // It will print the current seconds, which is 0 in this case. It is useful to get the current seconds for various purposes like scheduling events, determining the time of day, etc.
