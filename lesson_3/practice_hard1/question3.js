// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one
console.log(`two is: ${two}`); // two
console.log(`three is: ${three}`); // three

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one
console.log(`two is: ${two}`); // two
console.log(`three is: ${three}`); // three

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // two
console.log(`two is: ${two}`); // three
console.log(`three is: ${three}`); // one

// As with the first two snippets, this version of messWithVars
// has three parameters that shadow their global counterparts.
// Unlike the other two snippets, this version invokes the splice
// method on each of its arguments. splice is a destructive
// operation and will mutate the arrays that are being passed
// into messWithVars.