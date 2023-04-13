// Create an array with just the 3rd key/value pair of Object

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let barney = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

console.log(barney);