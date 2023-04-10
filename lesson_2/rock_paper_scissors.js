const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function parseShortCut(input) {
  switch (input) {
    case "r":
      return "rock";
    case "p":
      return "paper";
    case "sc":
      return "scissors";
    case "l":
      return "lizard";
    case "sp":
      return "spock";
    default:
      return input;
  }
}

function sanitizeInput(input) {
  return parseShortCut(input.replaceAll(" ", "").replace(".", "").toLowerCase());
}
function isInvalidInput(input) {
  return !VALID_CHOICES.includes(input) || input.trim() === "";
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

function didUserWin(choice, computerChoice) {
  return ((choice === "rock" && (computerChoice === "lizard" || computerChoice === "scissors")) ||
    (choice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
    (choice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
    (choice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
    (choice === "spock" && (computerChoice === "scissors" || computerChoice === "rock")));
}

function displayWinner(choice, computerChoice, scores) {
  if (choice === computerChoice) {
    prompt(`Since you both picked ${choice}, it's a tie!`);
    return;
  }
  if (didUserWin(choice, computerChoice)) {
    prompt("You win!");
    scores.userScore += 1;

    return;
  }

  prompt("The computer wins this round!");
  scores.computerScore += 1;
}

function isValidYesNoResponse(answer) {
  return answer === "y" || answer === "yes" || answer === "n" || answer === "no";
}

function playAgain() {
  prompt("Would you like to play again?");
  let answer = sanitizeInput(readline.question());
  console.clear();

  while (!isValidYesNoResponse(answer)) {
    prompt("Please type in a valid yes/no answer.");
    answer = sanitizeInput(readline.question());
  }

  return answer === "y" || answer === "yes";
}

function oneRound(scores) {
  let choice = getUserChoice(`Choose one: ${VALID_CHOICES.join(", ")}`);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}. The computer chose ${computerChoice}.`);

  displayWinner(choice, computerChoice, scores);
}

function promptToContinue(gameCount, scores) {
  if (gameCount <= 5 && scores.userScore < 3 && scores.computerScore < 3) {
    prompt("Hit a key to continue.");
    readline.question();
    console.clear();
  }
}

function playGame(scores) {
  let gameCount = 0;
  do {
    oneRound(scores);
    prompt(`The current score is: ${scores.userScore} for you, ${scores.computerScore} for the computer.`);
    gameCount += 1;
    promptToContinue(gameCount, scores);
  } while (gameCount <= 5 && scores.userScore < 3 && scores.computerScore < 3);
}

function finalWinner(scores) {
  if (scores.userScore > scores.computerScore) {
    prompt("Congratulations! You win the game!");
    return;
  }
  if (scores.computerScore > scores.userScore) {
    prompt("Oh no, the computer beat you this time!");
    return;
  }

  prompt("It's a tie overall!");
}

//Start of the interaction

console.clear();
prompt(
  "Hey there, let's play a game!\n   " +
  "The rules are simple, whoever wins the most out of 5 rounds, wins the game!"
);

do {
  const scores = { userScore: 0, computerScore: 0 };
  playGame(scores);
  finalWinner(scores);
} while (playAgain());

console.clear();
