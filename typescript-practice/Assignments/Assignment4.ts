// Assignment -4 (Conditional Statements & Loops)

// Bank Transactions
// Positive value refers Credit and Negative refers Debit Transaction
// Transactions Amount
// 1 50000
// 2 -2000
// 3 3000
// 4 -15000
// 5 -200
// 6 -300
// 7 4000
// 8 -3000
// First Store all the transactions in any data structure of Your Choice from collections, and by using
// Loops and conditional statements
// 1. Print total number of credit and debit transactions completed
// 2. Print the total amount credited and debited in account
// 3. Print total amount remaining at the end in Bank Account
// 4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
// Transaction with Amount” and also print total number of suspicious transactions

let trxnsAmount: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let countCreditAmount: number = 0;
let countDeditAmount: number = 0;
let totalAmountCredited: number = 0;
let totalAmountDebited: number = 0;
let totalAmountRemaining: number = 0;
let totalSuspiciousTrxn: number = 0;




for(let amt of trxnsAmount){

    // 1. Print total number of credit and debit transactions completed
    if(amt > 0){
        console.log(`Total number of credits transactions completed -> ${amt}`);
        countCreditAmount ++ ;
    } else {
        console.log(`Total number of debits transactions completed -> ${amt}`);
        countDeditAmount ++;
    }
    console.log(`The total number of credit transactions are -> ${countCreditAmount}`);
    console.log(`The total number of debited transactions are -> ${countDeditAmount}`);

}

// 2. Print the total amount credited and debited in account
for(let amnt of trxnsAmount){
    if(amnt > 0){
        totalAmountCredited = amnt + totalAmountCredited;
    } else {
        totalAmountDebited = amnt + totalAmountDebited;
    }
}
console.log(`Total Amount credited -> ${totalAmountCredited}`);
console.log(`Total Amount Debited -> ${totalAmountDebited}`);

// 3. Print total amount remaining at the end in Bank Account
totalAmountRemaining = totalAmountCredited - (-totalAmountDebited);
console.log(`Total amount remaining at the end in bank Account is - ${totalAmountRemaining}`);

// 4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit Transaction with Amount” 
for(let amountValue of trxnsAmount) { 
        if((amountValue > (-10000)) && (amountValue < 10000)){
            console.log(`The transaction is under limit -> ${amountValue}`);

        }
       else {
            totalSuspiciousTrxn ++;
            console.log(`Transaction limit exceeds +/- 10000. Message “Suspicious credit/ debit Transaction with Amount" -> ${amountValue}`);

    }
// and also print total number of suspicious transactions
}
console.log(`Total number of Suspicios Transactions are -> ${totalSuspiciousTrxn}`);
