// Test Case 1: verify the home page.
console.log("****************TEST CASE 1 : VERIFY THE HOME PAGE**********************");
loginToApplication("Chrome", "https://www.icici.com/");
console.log("Verify the home page is displayed or not");
logoutAndCloseBrowser();


// Test Case 2: verify the account balance.
console.log("****************TEST CASE 2 : VERIFY THE ACCOUNT BALANCE**********************");
loginToApplication("Firefox", "https://www.icici.com/");
console.log("Verify the home page is displayed or not");
console.log("Verify the accout balance is displayed as " + getAccountBalance("Savings"));
logoutAndCloseBrowser();


// Test Case 3: verify the account statement.
console.log("****************TEST CASE 3 : VERIFY THE ACCOUNT STATEMENT**********************");
loginToApplication("Edge", "https://www.icici.com/" );
console.log("Verify the home page is displayed or not");
console.log("Navigate to the account statement page");
console.log("Verify the accout balance is displayed with the following details:");
logoutAndCloseBrowser();



function loginToApplication(browser, url) {
    // console.log("Launch the Chrome Browser");
    console.log(`Launch the ${browser} Browser`);
    console.log(`Enter the URL : ${url}`);
    console.log("Enter the username as 'Subham' and password 'Subham@123'");
    console.log("Click on the login button");
    }

// function loginToApplicationWithFirefox() {
// console.log("Launch the Firefox Browser");
// console.log("Enter the URL https://www.icici.com/");
// console.log("Enter the username as 'Subham' and password 'Subham@123'");
// console.log("Click on the login button");
// }

// function loginToApplicationWithEdge() {
// console.log("Launch the Edge Browser");
// console.log("Enter the URL https://www.icici.com/");
// console.log("Enter the username as 'Subham' and password 'Subham@123'");
// console.log("Click on the login button");
// }

function logoutAndCloseBrowser(){
    console.log("LogOut from the application");
    console.log("Close the browser");
    }

function getAccountBalance(accountType){
    console.log(`Navigate to the ${accountType}account balance page`);
    let accountBalance = 10000; // This is a variable that can store the account balance value. It is a non-primitive datatype (mutable) because we can change its value.
    return accountBalance;
    }
// 1. Identify the duplicate code and separate the same from prgram.
// 2. Adf the duplicate code inside the curly breaks.