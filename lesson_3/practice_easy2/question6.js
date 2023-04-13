// Create a new array that contains all values, but in an un-nested format

// additon with concat
let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

flintstones = flintstones.concat(['Barney', 'Betty'])
  .concat(['Bambam', 'Pebbles']);

console.log(flintstones);

// concat & spread
let flintstones2 = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones2 = [].concat(...flintstones);

console.log(flintstones2);

// reduce
let flintstones3 = flintstones2.reduce((accum, element) => {
  return accum.concat(element);
}, []);

console.log(flintstones3);

// forEach
let flintstones4 = [];
flintstones2.forEach(element => {
  flintstones4 = flintstones4.concat(element);
});

console.log(flintstones4);

// flat
let flintstones5 = flintstones2.flat();

console.log(flintstones5);