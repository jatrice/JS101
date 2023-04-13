// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// Method 1 - numbers.length
let numbers1 = [1, 2, 3, 4];
numbers1.length = 0;

console.log(numbers1);

// Method 2 - splice()
let numbers2 = [1, 2, 3, 4];
numbers2.splice(0, numbers.length);

console.log(numbers2);

// Method 3 - pop()
let numbers3 = [1, 2, 3, 4];
while (numbers3.length) {
  numbers3.pop();
}

console.log(numbers3);