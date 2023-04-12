// Only capitalize the first letter, the rest should be lower case

let munstersDescription = "the Munsters are CREEPY and Spooky.";

let newMunstersDescription =
  munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(newMunstersDescription);