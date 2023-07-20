// input - a string, or an array
// output - a 'new' string or array with the order of each character reversed from it's original position

// if the array is empty, return an empty array
// if the string is only one character, return the single character

// determine whether the input is an array, or a string
// for each of the 'objects' being reversed, iterate from tail to beginning. 
//   for each element append to the it's corresponding return object

function reverse_string(inputForReversal) { 
  let newString = ''
  for (let index=inputForReversal.length -1 ; index >= 0; index--) {
    newString += inputForReversal[index];
  }
  return newString; 
}

function reverse_array(inputForReversal) {
  let newArr = []
  for (let index=inputForReversal.length -1 ; index >= 0; index--) {
    newArr.push(inputForReversal[index]);
  }
  return newArr; 
}


function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverse_array(inputForReversal);
  } else  {
    return reverse_string(inputForReversal);
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]