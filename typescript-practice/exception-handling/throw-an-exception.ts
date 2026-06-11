let age: number = 17;

if(age< 18){
    //console.log("Not eleigible to Vote");
    // if throw new error is throwing an exception program is going to stop there itself.
    throw new Error("Not eleigible to Vote");
} else {
    console.log("Eligible to vote.")
}
console.log("Execution is completed.");