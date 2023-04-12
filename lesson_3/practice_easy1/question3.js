// Determine whether object contains a certain entry

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

function checkProperty(obj, str) {
  if (obj.hasOwnProperty(str)) {
    console.log(`Yes, the object includes '${str}'`);
  } else {
    console.log(`No sorry, I could not find '${str}' inside the object.`);
  }
}

checkProperty(ages, 'Spot');