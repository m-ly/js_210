// input -- an array, starting index(int), ending index(int)
// output -- a new array


// questions 
// 1. can the starting index be negative? -- no 
// if end is greater than the begining, return an empty array

// if the length of the slice is greater than length of the array, the return is only the slice from the start integer, to the end of the input array
   // eg [1, 2] sliced(arr, 0,5) --> [1,2]
// if the length of the slice is less than the length of the array, the slice is a new array which contains the truncated values



function slice(array, begin, end) {
  let len = begin + end;
  let result = [];

  if ( begin + end > array.length ) {
    len = array.length;
  }

  for (let idx = begin; idx < len - 1; idx ++ ) {
    result.push(array[idx]);
  }

  return result;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]


// input - an array, a starting index (int), the number of elements to delete (int), optional number of arguments to append to the input array (any)
// output -- a new array which contains the elements that were removed from the input array
  // side effect - the input array is mutated


  // questions, what if the number of elements in ...args is greater than the number of elements that is deleted? are all the elements in args inserted into the array starting at the index, and the remaining elements that were not deleted are shifted to the end of the array? -- this is correct


  //  if the deleteCount variable is 0, nothing is deleted, but args are inserted only
  // the additional args are inserted at the start index, 


// algorithm
// We need to find the elements before the slice, the elements that are being sliced, and the elements after the slice
//  -- declare 3 variables to track these numbers
//  -- initialize a new array which is a copy of the beginning elements, and ending elements concatenated
  // if there are extra elements as args, concatenate those after the beginning elements
//  -- mutate the input array length to the length of the copy of the array that was made (while this shouldn't be needed for larger copies, it correctly truncates the array for shorter copies)
//  -- iterate the length of copy array,  re-assigning the value of the input array to the value of the copy array 
// return the sliced elements



  console.log('***Splice***')

  function splice(array, start, deleteCount, ...args) {
    let beginningElements = array.slice(0, start);
    let endElements = array.slice(start+deleteCount, array.length);
    let slicedElements = array.slice(start, start+deleteCount)
  
    let tmpArr = beginningElements.concat(args).concat(endElements);
  
    let newLen = tmpArr.length;
    array.length = newLen;
  
    for ( let i = 0; i < newLen; i++ ) {
      array[i] = tmpArr[i];
    }
  
    return slicedElements
    
  }
  
  console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
  console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
  console.log(splice([1, 2, 3], 1, 0));              // []
  console.log(splice([1, 2, 3], 0, 1));              // [1]
  console.log(splice([1, 2, 3], 1, 0, 'a'));         // []
  
  const arr2 = [1, 2, 3];
  console.log(splice(arr2, 1, 1, 'two'));             // [2]
  console.log(arr2);                                  // [1, "two", 3]
  
  const arr3 = [1, 2, 3];
  splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
  arr3;                                  // [1, "two", "three"]
  
  const arr4 = [1, 2, 3];
  console.log(splice(arr4, 1, 0));                    // []
  console.log(splice(arr4, 1, 0, 'a'));               // []
  console.log(arr4);                                  // [1, "a", 2, 3]
  
  const arr5 = [1, 2, 3];
  console.log(splice(arr5, 0, 0, 'a'));               // []
  console.log(arr5);                                  // ["a", 1, 2, 3]