// values of begin, and end will always be >= 0 
// if value of begin or end is greater than array.length, it will be set equal to length of the array
// end is non-inclusive
// returns a new array 

// 
function slice(array, begin, end) {
  if (begin > array.length) {
    begin = array.length 
  } else if (end > array.length) {
    end  = array.length 
  }

  let slicedArr = [];

  for (let index = begin; index < end; index++) {
    slicedArr.push(array[index]);
  }

  return slicedArr;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
slice(arr1, 1, 3);                     // [2, 3]
arr1;                                  // [1, 2, 3]


// start will always be > 0 
// end will always be > 0 
// if start is greater than the length of the array s
// if deleteCount > array.length then array.length - start, 
// optional elements add elements to the array, if no elements are added, then splice removes elements from the array
   // elements that are added, are added in starting from the start index, up to the length of given elements.


// algo
// 

   function splice(array, start, deleteCount, ...args) {
 
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
  console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
  console.log(arr3);                                  // [1, "two", "three"]
  
  const arr4 = [1, 2, 3];
  console.log(splice(arr4, 1, 0));                    // []
  console.log(splice(arr4, 1, 0, 'a'));               // []
  console.log(arr4);                                  // [1, "a", 2, 3]
  
  const arr5 = [1, 2, 3];
  console.log(splice(arr5, 0, 0, 'a'));               // []
  console.log(arr5);                                  // ["a", 1, 2, 3]