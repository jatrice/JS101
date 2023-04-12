// Will the code raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5; // does not raise an error, adds empty spots
numbers[4];  // will return undefined

// numbers[4] will output undefined, but the slot is empty --
// it doesn't have a value, not even undefined, in spite of
// what the line returns. This distinction is important: if
// you use map(), for instance, the new array will also have
// empty slots in the corresponding positions. On the other
// hand, slots with a value of undefined will be remapped
// based on the return value of the callback: