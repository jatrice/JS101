// The following function unnecessarily uses two return statements
// to return boolean values. Can you rewrite this function so it
// only has one return statement and does not explicitly use
// either true or false?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

function isColorValid(color) {
  return (color === "blue" || color === "green");
}

let color1 = 'red';
let color2 = 'blue';

console.log(isColorValid(color1));
console.log(isColorValid(color2));

// alternativeSolutions
const isColorValid1 = color => color === "blue" || color === "green";
const isColorValid2 = color => ['blue', 'green'].includes(color);