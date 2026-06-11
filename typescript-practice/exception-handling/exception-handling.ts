// Exception handling ==> Handle the exceptions.

// try...catch...finally ==> When there is an exception and if you want to handle the exception and continue the execution process.
// throw ==> When there is no exception, but the user intentionally wants to fail the program by throwing an exception.

// try...catch...finally
try{
    // Code that may throw an exception
} catch(error){
    // Code to handle the exception
} finally {
    // code that will always execute, regardless of whether an exception was thrown or caught.
}

// Example:

let input: any;
try{
    console.log(123);
    console.log(input.toLowerCase()); // this will throw an exception because input is undefined.
} catch(error){
    console.log("There is an Error in the Try block.");
    console.log("Error occured." + error.message); // To print the message with the help of error variable in catch
} finally{
    console.log("The execution is completed");
}

