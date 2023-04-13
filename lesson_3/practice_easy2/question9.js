// Center title with spaces within a space of 40 characters

let title = "Flintstone Family Members";

let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));
