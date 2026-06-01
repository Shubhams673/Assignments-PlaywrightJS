// Conditional Statements => Statements (line of code) along with Conditions.

// There are mainly two important conditional statements available in Jvascript or Typescript.

// 1. If-else conditional statement ==> The if-else conditional statement will be used when we don't know the result of the condition before.
// 2. Switch-case conditional statement ==> Switch case conditional statement will be used to choose one of the options among multiple.

// if-else conditional statement

// Syntax of if-else conditional Statement
/*
if(condition){
    // code to be executed when the condition is true.
} else if(condition){
    // code ot be executed when the condition is true.
 } else if(condition){
    // code to be executed when the condition is ture.
  } else {
    // code to be executed when all the above condition are false.
    }
*/

// Syntac of nested if-else conditional Statement
/*
if(condition){
    // code to be executed when the condition is true.
    if(condition){
    // code ot be executed when the condition is true.
        } else {
    // code to be executed when the condition is ture.
  } else {
    // code to be executed when all the above condition are false.
    }
*/

// Example of if-else conditional statement


let percentage: number = 99;

if(percentage >= 90){
    console.log("Grade A")
} else if(percentage >= 80){
    console.log("Grade B")
} else if(percentage >= 70){
    console.log("Grade C")
} else {
    console.log("Grade D")
}

// Example of nested if-else conditional statement

if(percentage >= 90){
    console.log("Grade A+")
     if(percentage >= 95){
    console.log("Grade A++")
    } else {
    console.log("Grade B")
    } 
}
else {
    console.log("Grade C")
}

// Switch-case conditional statement

// Syntax of switch-case conditional statement
/*
switch(expression){
    case value1:
        // code to be executed when the expression is equal to value1.
        break;
    case value2:
        // code to be executed when the expression is equal to value2.
        break;      
    case value3:
        // code to be executed when the expression is equal to value3.
        break;
    default:
        // code to be executed when the expression is not equal to any of the above values.
}
*/

// Example of switch-case conditional statement

let env: string = "qa";

switch(env){
    case "dev":
        console.log("Development environment");
        break;
    case "qa":
        console.log("Quality Assurance environment");
        break;
    case "prod":
        console.log("Production environment");
        break;
    default:
        console.log("Invalid environment");
}