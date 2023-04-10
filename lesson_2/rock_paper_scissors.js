const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function sanitizeInput(input) {
  return input.replaceAll(' ', '').replace('.', '').toLowerCase();
}

function isInvalidInput(input) {
  return !VALID_CHOICES.includes(input) ||
  input.trim() === '';
}

function getUserChoice(message) {
  prompt(message);
  let choice = sanitizeInput(readline.question());

  while (isInvalidInput(choice)) {
    prompt("That's not a valid choice. Try again!");
    choice = sanitizeInput(readline.question());
  }

  return choice;
}

function displayWinner (choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'rock')) {
    prompt('You win!');
  } else if ((choice === 'scissors' && computerChoice === 'rock') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'rock' && computerChoice === 'paper')) {
    prompt('The computer wins this round!');
  } else {
    prompt(`Since you both picked ${choice}, it's a tie!`);
  }
}

function isValidYesNoResponse(answer) {
  return (answer === 'y' || answer === 'yes' ||  answer === 'n' || answer === 'no');
}

function playAgain() {
  prompt('Would you like to play again?');
  let answer = sanitizeInput(readline.question());
  console.clear();

  while (!isValidYesNoResponse(answer)) {
    prompt('Please type in a valid yes/no answer.');
    answer = sanitizeInput(readline.question());
  }

  return (answer === 'y' || answer === 'yes');
}

//Start of the interaction

console.clear();
prompt("Let's play a game!");

do {
  let choice = getUserChoice(`Choose one: ${VALID_CHOICES.join(', ')}`);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`Alright let's see who won.
   You chose ${choice}. The computer chose ${computerChoice}.`);

  displayWinner(choice, computerChoice);
} while (playAgain());

console.clear();

