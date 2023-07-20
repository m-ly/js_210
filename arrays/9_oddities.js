// input -- an array
// output - a new array containing every other element from the input array

// the return starts from index 0, and returns ever even numbered index spot

// The array that is input and the array that are output are two different objects, since you initialize a new array object `oddElements` inside of the function. 

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false