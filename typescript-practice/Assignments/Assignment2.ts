// Assignment-2 (Conditional Statements)

// A bank evaluates loan applicants based on the following criteria:
// 1. Credit Score:
// o If the credit score is above 750, the loan is automatically approved.
// o If the credit score is between 650 and 750, additional checks are performed.
// o If the credit score is below 650, the loan is denied.

// 2. Income:
// o For credit scores between 650 and 750, the customer’s income must be at least $50,000 for the loan to be considered.

// 3. Employment Status:
// o If the customer’s income is at least 50,000, the system checks whether the customer is
// employed.
// o If the customer is unemployed, the loan is denied.

// 4. Debt-to-Income Ratio:
// o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
// o If the DTI ratio is less than 40%, the loan is approved.
// o If the DTI ratio is 40% or greater, the loan is denied.

// Create common function and then based on below details, print whether user is eligible to get the loan
// or not
// customerName = "John Doe";
// creditScore = 720;
// income = 55000.0;
// isEmployed = true;
// debtToIncomeRatio = 35.0;

// let customerName: string = "John Doe";
// let creditScore: number = 720;
// let income: number= 55000.0;
// let isEmployed: boolean = true;
// let debtToIncomeRatio: number = 35.0;

checkLoanEligibility("John Doe", 700, 125000, true, 9);         

function checkLoanEligibility 
(customerName: string, creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number): void {
    
if(creditScore > 750){
    console.log(`If the credit score is above 750, the loan is automatically approved. - ${creditScore}`);
} else if (creditScore >=650 && creditScore <= 750){
    console.log(`If the credit score is between 650 and 750, additional checks are performed. - ${creditScore}`);
        if(income >= 50000){
            console.log(`The customer’s income is at least $50,000. - ${income}`);
                if(isEmployed){
                    console.log(`The customer is employed. - ${isEmployed}`);
                        if(debtToIncomeRatio <40){
                            console.log(`The DTI ratio is less than 40%. Hence, the loan is approved. - ${debtToIncomeRatio}`);
                        }
                            else {
                                console.log(`The DTI ratio is 40% or greater. Hence, the loan is denied. - ${debtToIncomeRatio}`);
                            }
                } else {
                    console.log(`The customer is not employed. Hence, the loan is denied. - ${isEmployed}`);
                }
        } else {
            console.log(`The customer’s income is less than $50,000. - ${income}`);
        }
} else {
    console.log(`If the credit score is below 650, the loan is denied. - ${creditScore}`);
}

}  

