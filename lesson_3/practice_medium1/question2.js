// Swap the case of all of the letters of a string

let munstersDescription = "The Munsters are creepy and spooky.";

let arrMunstersDescription = munstersDescription.split('');

let newArr = arrMunstersDescription.map(char => {
  if (char === char.toLowerCase()) {
    return char.toUpperCase();
  }

  return char.toLowerCase();
});

console.log(newArr.join(''));
//
// or in short;
//
// console.log(munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join(""));
