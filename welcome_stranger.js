// input - an array with 2 or more elements, and an object, with two keys :title & :occupation
// output - a string which returns a concatenation of all items in the array, and the values of the object. 

// the name array will need to be iterated over by the length of the arguments 
//  (since all elements are being used in a string, iteration is not necessary, instead you can just join them)


const personName = ['Matt', "Ly"]
const jobStuff = { title: 'Tenacious', occupation: "Dispatcher" }

function greetings (arr, obj) { 
  let greeting = `Hello ${arr.join(' ')}! It's nice to have a`
  for ( title in jobStuff) { 
    greeting += (' ' + jobStuff[title])
  }

  return greeting  + ' around.'
}


console.log(greetings(personName, jobStuff))

//greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
// console output
//Hello, John Q Doe! Nice to have a Master Plumber around.