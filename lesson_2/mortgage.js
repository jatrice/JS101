// Get loan amount
//     Annual Percentage Rate (APR)
//     loan duration
// calculate monthly interest rate
//           loan duration in months
// let m = p * (j / (1 - Math.pow((1 + j), (-n))));

const readline = require('readline-sync');
let startAgain;

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
    Number(number) < 0;
}

prompt('Welcome to the Mortgage & Car Loan Calculator!');

do {
  prompt('Please enter the loan amount');
  let loanAmount = readline.question();

  while (isInvalidNumber(loanAmount)) {
    prompt('Please enter a positive number');
    loanAmount = readline.question();
  }

  prompt('Next, please tell me your Annual Percentage Rate (APR) in %:');
  let interestRate = readline.question();

  while (isInvalidNumber(loanAmount)) {
    prompt('Please enter a positive number');
    interestRate = readline.question();
  }

  let annualInterestRate = Number(interestRate) * 0.01;
  let monthlyInterestRate = annualInterestRate / 12;

  prompt("We're almost ready to calculate your monthly payment.\n   How long is the duration of your loan (in years)?");
  let loanDuration = readline.question();

  while (isInvalidNumber(loanAmount)) {
    prompt('Please enter a positive number');
    loanDuration = readline.question();
  }

  let loanDurationInMonths = Number(loanDuration ) * 12;

  let monthlyPayment = loanAmount *
    (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));

  prompt(`Your monthly Payment is $${monthlyPayment.toFixed(2)}.`);
  prompt('Would you like to calculate another mortgage or loan? (y/n)');
  startAgain = readline.question();
} while (startAgain === 'y');


