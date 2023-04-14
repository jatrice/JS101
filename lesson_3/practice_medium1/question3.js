// Refactor code
//
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
// //   return factors;
// }

function factors(num) {
  let factors = [];
  let divisor = num;
  while (divisor > 0) {
    if (num % divisor === 0) {
      factors.push(num / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

// function factors(num) {
//   if (num <= 0) {
//     return [];
//   }
//   let factors = [];
//   for (let divisor = 1; divisor <= num; divisor += 1) {
//     if (num % divisor === 0) {
//       factors.push(divisor);
//     }
//   }
//   return factors;
// }

console.log(factors(8));
console.log(factors(5));
console.log(factors(0));
console.log(factors(-1));

