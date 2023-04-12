// Return new version of sentence that ends before defined word

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let newAdvice = advice.slice(0, advice.indexOf('house'));
console.log(newAdvice);