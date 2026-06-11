// Array  ==> Array is a collecction of multiple values.

// 1. Storing the values within the array.
console.log("*************** Storing the values within the array **************");
let fruits: string[] = ["Apple", "Mango", "Banana"];
let prices: number[] = [100, 200, 300];
let fruitsAndPrices: (string | number)[] = ["Apple", 100, "Mango", 200, "Banana", 300];

// 2. Accessing the values from the array.
console.log(fruits); // Output: [ 'Apple', 'Mango', 'Banana' ]
console.log(prices); // Output: [ 100, 200, 300 ]
console.log(fruitsAndPrices); // Output: [ 'Apple', 100, 'Mango', 200, 'Banana', 300 ]
console.log(fruits[1]); // Output: Mango
console.log(prices[2]); // Output: 300
console.log(fruitsAndPrices[3]); // Output: 200


// 3. Add additional values to the existing array at the end.
console.log("*************** Add additional values to the existing array at the end **************");
fruits.push("Grapes");
prices.push(400);
fruitsAndPrices.push("Grapes", 400);
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

// 4. Remove the last value from the existing array.
console.log("*************** Remove the last value from the existing array **************");
fruits.pop();
prices.pop();
fruitsAndPrices.pop(); // remove 400
fruitsAndPrices.pop(); // remove "Grapes"
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

// 5. Add additional values to the existing array at the beginning.
console.log("*************** Add additional values to the existing array at the beginning **************");
fruits.unshift("Grapes");
prices.unshift(400);
fruitsAndPrices.unshift("Grapes", 400);
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

// 6. Remove the first value from the existing array.
console.log("*************** Remove the first value from the existing array **************");
fruits.shift();
prices.shift();
fruitsAndPrices.shift(); // remove "Grapes"
fruitsAndPrices.shift(); // remove 400
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);



// 7. Replacing the additional value to the exisiting array at specific index by deleting existing value.
console.log("*************** Adding the additional value to the exisiting array at specific index by deleting existing value **************");
// Syntax: arrayName.splice(startIndex, deleteCount, item1, item2, ...);

fruits.splice(0, 1, "Orange"); // delete "Apple" and add "Orange" at index 0
prices.splice(0, 1, 111); // delete 100 and add 111 at index 0
fruitsAndPrices.splice(4, 2, "Grapes", 500); // delete "Banana" and 300, and add "Grapes" and 500 at index 4
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

// 8. Create a new array by extracting the values from the existing array.
console.log("*************** Create a new array by extracting the values from the existing array **************");
// Syntax: arrayName.slice(startIndex to have count in, endIndex+1 to have count upto);

let veggies: string[] = ["Carrot", "Tomamto", "Cucumber", "Onion", "Potato", "Chillie"];
let partOfVeggies: string[] = veggies.slice(1,4); // extract "Tomato", "Cucumber", and "Onion" from index 1 to index 3 (endIndex is exclusive)
console.log(veggies);
console.log(partOfVeggies);

// 9. Create a new array by concatenating the two or more arrays together.
console.log("*************** Create a new array by concatenating the two or more arrays together **************");
// Syntax: arrayName1.concat(arrayName2, arrayName3, ...);

let fruitsAndVeggies: (string | string)[] = fruits.concat(veggies);
console.log(fruits);
console.log(veggies);
console.log(fruitsAndVeggies);


// 10. Find the index of the specific value within the array.
console.log("*************** Find the index of the specific value within the array **************");
// Syntax: arrayName.indexOf(value);

console.log(fruits.indexOf("Papaya")); // Output: -1 (value not found)
console.log(veggies.indexOf("Onion")); // Output: 3
console.log(fruitsAndVeggies.indexOf("Cucumber")); // Output: 4

// 11. Iterate the values of the array using the loop.
console.log("*************** Iterate the values of the array using the loop **************");
for(let fruit of fruits) {
    console.log(fruit);
}

// 12. Reverse the values within the array.
console.log("*************** Reverse the values within the array **************");
fruits.reverse();
prices.reverse();
fruitsAndPrices.reverse();
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

// 13. sort the values within the array. By default, the sort() method sorts the values as strings in alphabetical and ascending order. 
//     To sort the values in numerical order, we need to provide a compare function to the sort() method.
console.log("*************** sort the values within the array **************");
fruits.sort();
prices.sort();
fruitsAndPrices.sort();
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);



