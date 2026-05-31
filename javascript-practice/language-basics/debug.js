console.log("Executing Line 1");
console.log("Executing Line 2");
console.log("Executing Line 3");
sumOfNumbers(5,10);
console.log("Executing Line 4");
console.log("Executing Line 5");
console.log("Executing Line 6");
console.log("Executing Line 7");
console.log("Executing Line 8");
console.log("Executing Line 9");
console.log("Executing Line 10");


// Debugging the program in JavaScript step-by-step

// 1. Add the breakpoint (Click on a specific line number where you want to start)
// 2. Run the program in the debug mode. (Control/Command+Shirt+D)
// 3. Use the debug option to identify and fix the error.

// Continue(f5)                         => Executes the program until the next breakpoint.
// Restart (Control/Command+Shift+F5)   => Restarts the program from the beginning.
// Stop (Control/Command+Shift+F5)      => Stops the program execution in debug mode and terminate the flow.
// Step over (F10)                      => Executes the current line of code and moves to the next line. 
// Step into (F11)                      => Executes the next line of code and moves to the next line. 
// Step out (Shift+F11)                 => Executes the remaining lines of the current function and moves to the line where the function was called.    

function sumOfNumbers(a, b){
    c = a + b
    console.log(c)
}


