// input - an array
// output - the first element of the input array

// This function should mutate the given array, when complete, the array should be one element shorter than the given array 

// the return value is the first element of the given array 
// iterate through the given array, assigning the value of the next iteration, to the value of the current one.
// When you're done iterating reduce the length of the array by one

//

function shift(array) {
  if (array.length === 0 ) return undefined;

  let removedEle = array[0]
  let nextIdx = 1

  for (let index=0; index < array.length; index++) {
    array[index] = array[nextIdx]
    nextIdx += 1
  }

  array.length -= 1;
  return removedEle;
}

// input: an array, and an arbitrary amount of elements
// output: an integer representing the number of elements in the array

// if an element is an array/object -- it only counts as one element regardless of the number of elements inside the array

// will need to find the length of arguments - 1 (offset for optional arguments, but don't count mandatory array)
// the array will need to be unshifted by the corresponding number of arguments 
// first approach would be to find the initial starting index (args.length + the last index)
// iterate down assigning the current value in the original last index to the extended last index
// once the initial array has been offset, iterate through the number of elements, assigning them to their corresponding index in the original array 
// return the new length of the array 

function unshift(arr, ...eles) {
  let originalIdx = arr.length - 1;
  
  if (eles.length === 0 ) return arr.length;

  for (let idx = arr.length + eles.length - 1; idx >= 0; idx-- ) {
    arr[idx] = arr[originalIdx];
    originalIdx -= 1;
  }

  for (let idx = 0; idx < eles.length; idx++ ) {
    arr[idx] = eles[idx];
  }
  
  return arr.length;
}

let arr = [1,2,3]
console.log(shift(arr));     
console.log(arr);           // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]