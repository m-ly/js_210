// explain why the following does not return true, and create a solution so that if an object contains the same elements, with the same values that it returns true

// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };

//console.log(person === otherPerson);    // false -- expected: true

// The reason why above returns false is that each object that is created points to a different place in memory.  There are a few different ways that we can rectify this. 
// 1. If all we care about is that the person's name is true we can compare the string values for equality with the following syntax

//  console.log(person.name === otherPerson.name)
// 2. If we want to ensure that 2 objects are created both reference the same place in memory, we can initialize one object, then when initializing the 2nd object, we assign the value to the equal the first object

  // const person = { name:'Victor'};
  // const otherPerson = person;
  // console.log(person === otherPerson);

// If we're comparing equality of two different objects, we can iterate the objects to see if all properties are the same:

const person = { name:'Victor', age: 21};
const otherPerson = { name: 'Victor', age: 21};

function checkObjectEquality(obj1, obj2) {
  if (obj1.length !== obj2.length ) return false;
  let keys = Object.keys(obj1);
  for (let i = 0; i < keys.length; i++ ) {
    if (obj1[keys[i]] !== obj2[keys[i]]) return false;
  }

  return true;
}

console.log(checkObjectEquality(person, otherPerson));