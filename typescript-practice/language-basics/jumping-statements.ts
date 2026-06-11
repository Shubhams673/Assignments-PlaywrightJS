//Jumping statements

// There are mainly three important jumping statements we are going to use in javascript and Typescript
// 1. break;
// 2. comtinue;
// 3. return; ==> last line of execution of any functioin is return that is used to return a value from a function and also to

// 1. break ==> break is a keyword used to break the loop completely.
// 2. continue ==> stop the current iteration and move to the next iteration.

for(let i: number = 0; i < 10; i++){
    if(i == 5){
        //break;
        continue;
    }
    console.log(i);
}