// Reverse arrays without mutating them

// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
//
// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let numbers = [1, 2, 3, 4, 5];

// reverse method
let newNumbers1 = numbers.slice().reverse();

console.log(newNumbers1);

// sort method
let newNumbers2 = [...numbers].sort((num1, num2) => num2 - num1);

console.log(newNumbers2);

// map method
const newNumbers3 = numbers.map((_, index) => {
  return numbers[(numbers.length - 1) - index];
});

console.log(newNumbers3);

// for Each method
const newNumbers4 = [];

numbers.forEach((number) => {
  newNumbers4.unshift(number);
});

console.log(newNumbers4);

console.log(numbers);
