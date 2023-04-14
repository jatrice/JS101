let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// Will print false because you can't use == or === to determine whether
// a value in Nan. Instead use Number.isNan() method.