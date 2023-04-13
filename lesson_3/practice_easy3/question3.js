// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// 'hello there' because
// JavaScript creates a new copy of the string when assigning
// a string to a variable. Thus, line 2 assigns str2 a new
// string that happens to be a copy of str1's value. Line 3,
// in turn, assigns str2 to an entirely new string.