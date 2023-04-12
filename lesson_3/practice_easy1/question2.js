// Determine whether given string ends with given character

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// function checkEnding (str) {
//   if (str.charAt(str.length - 1) === '!') {
//     console.log("True, the string ends with an '!'.");
//   } else {
//     console.log("False, the string does not end with an '!'.");
//   }
// }

function checkEnding (str) {
  if (str.endsWith('!')) {
    console.log("True, the string ends with an '!'.");
  } else {
    console.log("False, the string does not end with an '!'.");
  }
}

checkEnding(str1);
checkEnding(str2);
