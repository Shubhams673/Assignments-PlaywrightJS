import {PI as pi, add as sum, subtract as sub} from './2-export-all.ts'
import {PI, add} from './1-named-exports.ts'


console.log("Value of PI = " + PI);
console.log("Sum of numbers 2,3 is = " + add(2,3));

console.log("Value of PI = " + pi);
console.log("Sum of numbers 2,3 is = " + sum(20,30));
console.log("Difference of number 5,2 is = " + sub(50,20));