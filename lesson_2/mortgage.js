// Get loan amount
//     Annual Percentage Rate (APR)
//     loan duration
// calculate monthly interest rate
//           loan duration in months
// let m = p * (j / (1 - Math.pow((1 + j), (-n))));

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function sanitizeInput(userInput) {
  return userInput.replaceAll(',', '').replace('$', '').replace('%', '');
}

function isInvalidNumber(value) {
  return value.trim() === "" ||
    Number(value) < 0 ||
    Number.isNaN(Number(value));
}

function isZero(value) {
  return Number(value) === 0;
}

function loanInputValidator(value) {
  return isInvalidNumber(value) || isZero(value);
}

function getInformation(message, userInputValidator = isInvalidNumber) {
  prompt(message);
  let userInput = sanitizeInput(readline.question());

  while (userInputValidator(userInput)) {
    prompt("Please enter a positive number");
    userInput = readline.question();
  }

  return Number(userInput);
}

function getMonthlyInterestRate(message) {
  let interestRate = getInformation(message);

  while (interestRate > 100) {
    interestRate = getInformation('Please enter a valid value under 100.');
  }

  const annualInterestRate = Number(interestRate) * 0.01;
  const monthlyInterestRate = annualInterestRate / 12;

  return monthlyInterestRate;
}

function calculateMonthlyPayment(
  loanAmount,
  monthlyInterestRate,
  loanDurationInMonths
) {
  if (monthlyInterestRate === 0) {
    return (
      loanAmount / loanDurationInMonths
    );
  }

  return (
    loanAmount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)))
  );
}

function isValidYesNoResponse(answer) {
  return (answer === 'y' || answer === 'yes' ||  answer === 'n' || answer === 'no');
}

function shouldRepeat() {
  prompt("Would you like to calculate another mortgage or loan?");
  let answer = readline.question().toLowerCase();
  console.clear();

  while (!isValidYesNoResponse(answer)) {
    prompt("I'm sorry, I did not understand your answer. Please answer with yes or no.");
    answer = readline.question().toLowerCase();
  }

  return answer === 'y' || answer === 'yes';
}

// Start of the interaction

console.clear();

prompt("Welcome to the Mortgage & Car Loan Calculator!");

do {
  const loanAmount = getInformation("Please enter the loan amount", loanInputValidator);

  const monthlyInterestRate = getMonthlyInterestRate("Next, please tell me your Annual Percentage Rate (APR) in %:");

  const loanDuration = getInformation(
    "We're almost ready to calculate your monthly payment.\n   How long is the duration of your loan (in years)?",
    loanInputValidator
  );

  const loanDurationInMonths = Number(loanDuration) * 12;

  const monthlyPayment = calculateMonthlyPayment(
    loanAmount,
    monthlyInterestRate,
    loanDurationInMonths,
  );
  prompt('---------------------------------');
  prompt(`Your monthly Payment is $${monthlyPayment.toFixed(2)}.`);
} while (shouldRepeat());
