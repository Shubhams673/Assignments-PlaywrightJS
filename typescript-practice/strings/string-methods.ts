// String ==> It is collection of characters in TypeScript. We can store string in singlt quotes, double quotes,or back ticks.

// Text/String values ==> Sequence of chars, We have to store inside double, ot single, or back ticks
let firstName = "Subham";
let lastname = 'Singh';
console.log(`Name of the Employee is ${firstName} ${lastname}`)

// 1. Storing a string in a variable
console.log("************* Storing a string in a variable *************")
let originalString : string = " Username : Admin | Password : admin123";
console.log(originalString);

// 2. Methods to calculate the total number of characters available in the string ==> length() method
console.log("************* Method to calculate the total number of characters available in the string ************")
console.log(`total numbers of characters in the string is - ${originalString}`)

// 3. Method to get a specific character from a string by using an index => charAt(Index) method
console.log("************* Method to get a specific character from a string by using an index => charAt(Index) method**********")
console.log(`Character at index 0 is - ${originalString.charAt(0)}`);
console.log(`Character at index 0 is - ${originalString.charAt(1)}`);
console.log(`Character at index 0 is - ${originalString.charAt(2)}`);

// 4. Reverse the string by using the above two methods.
console.log("************* Reverse the string by using the above two methods. **********")

let reversedString: string = "";
for(let i = originalString.length - 1; i >= 0; i --){
    reversedString += originalString.charAt(i);
}
console.log(`Reversed String is - ${reversedString}`)

// 4. Remove the unwanted spaces from the string - trim() method
console.log("************* Remove the unwanted spaces from the string - trim() method **********")
let stringWithSpaces: string = "  Hello world.   ";
console.log(`Original String is - ${stringWithSpaces}`);
console.log(`Trimmed string is - ${stringWithSpaces.trim()}`);

// 5. Method to remove in between the sapes from the string. - replace(/old Character/g, "new Cahracter")
console.log("************* Method to remove in between the sapes from the string. **********")
let stringWithAllSapces: string = " H E L L O W O R L D 1 2 3 ";
console.log(`Original String is - ${stringWithAllSapces}`);
console.log(`Remove spaces from  string is - ${stringWithAllSapces.replace(/ /g, "")}`);

// 6. Method to remove all the spaces from the string
console.log("************* Method to remove all the spaces from the string. **********")
console.log(`Original String is - ${stringWithAllSapces}`);
console.log(`REmove spaces from string is - ${stringWithAllSapces.replace(/ /g, "")}`);
console.log(`Remove the characters from  string is - ${originalString.replace(/[a-zA-Z] /g, "")}`);

// 7. Method to remove all the alphabets from the string
console.log("************* Method to remove all the numbers from the string. **********")
console.log(`Original String is - ${stringWithAllSapces}`);
console.log(`REmove spaces from string is - ${stringWithAllSapces.replace(/ /g, "")}`);
console.log(`Remove the numbers from string is - ${originalString.replace(/[0-9]/g, "")}`);
console.log(`Remove the numbers from  string is - ${originalString.replace(/[0-9]/g, "")}`);
 
// 8. Method to remove all the special characters from the string
console.log("************* Method to remove all the special characters from the string. **********")
console.log(`Original String is - ${stringWithAllSapces}`);
console.log(`REmove spaces from string is - ${stringWithAllSapces.replace(/ /g, "")}`);
console.log(`Remove the numbers from string is - ${originalString.replace(/[^a-zA-Z0-9]/g, "")}`);
console.log(`Remove the numbers from  string is - ${originalString.replace(/[^a-zA-Z0-9]/g, "")}`);
 

// 9. Method to convert into upper Case to the string
console.log("************* Method to convert into upper Case to the string **********")
console.log(`Original String is - ${originalString}`);
console.log(`Coverted into upper Case - ${originalString.toUpperCase()}`);
 
// 10. Method to convert into lower Case to the string
console.log("************* Method to convert into lower Case to the string **********")
console.log(`Original String is - ${originalString}`);
console.log(`Coverted into lower Case - ${originalString.toLowerCase()}`);
 
// 11. Method to extract a specific part of the string by Index ==> subString(startIndex, end Index+1)
console.log("************* Method to extract a specific part of the string by Index **********")
console.log(`Original String is - ${originalString}`);
console.log(`SubString Methods usage - ${originalString.substring(12,17)}`);


// 12. Method to split the text into multiple parts and extract a particular part of the text  ==> split("separator")
console.log("************* Method to split the text into multiple parts and extract a particular part of the text **********")
console.log(`Original String is - ${originalString}`);
let stringParts: string[] = originalString.split(" ");
console.log(`Username read through split - ${stringParts[1]?.substring(0,4)}`);
console.log(`Username read through split - ${stringParts[1]?.trim()}`);


 // 13. Method to compare to different Strings
 // == (loose Equality) Double is equals to ==> It will check only the value of the string.
 // === (Strinct Equality) Triple is equals to ==> It will check both the value and the type of the string.
 // includes() ==> It will check whether a string contains a specific substring or not.
 // startsWith() ==> It will check whether a string starts with a specific substring or not.
 // endsWith() ==> It will check whether a string ends with a specific string or not.
 let string1: string | number = "100";
 let string2: string | number = 100;
 console.log(`Using == operators ->  ${string1 == string2}`); //true
 console.log(`Using === operator -> ${string1 === string2}`); //false

 // 14. Methods to convert string to number and vice-versa
console.log("************* Methods to convert number/other types to string and vice-versa **********")
let std:number = 133
let phNum:number = 12345678;
console.log(`std+number`);
let stdCode: string = String(std);
console.log(stdCode+phNum);

// Converting string to other data types.
let balance: string = "$99,99,99,999.99"; // Verify whether my account has a minimum balance of 999999
// console.log(balance >= 999999); can not
let newBalance: number = Number(balance) // will not convert the $ and commas,
console.log(newBalance >= 9999);

let changeBal = balance.replace(/[^0-9 .]/g, "");
let bal: number = parseFloat(changeBal);
console.log(bal >= 9999); // true



