//1

// function lastValue(arr) {
//   let lastIdx = arr.length - 1;
//   return arr[lastIdx];
// }

let lastValue = (arr) => arr.length - 1;
// console.log(lastValue([1,2,3]));
// console.log(lastValue([]));

//2

const NAMES = ['Matt', 'Jen', 'Asher']

let rollCall = function(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    console.log(arr[idx]);
  }
}

rollCall(NAMES)

//3 

reversed = arr => {
  let reversedArray = [];
  for (let idx = arr.length -1; idx >= 0; idx--) {
    reversedArray.push(arr[idx]);
  }
  return reversedArray;
}

reversed(NAMES)

//4

function concatArrayVals(arr) {
  let returnVal = ''
  for (let idx = 0; idx < arr.length; idx++){
     returnVal += arr[idx].toString();
  }
  return returnVal;
}

console.log(concatArrayVals([1, 'a', 4]));
console.log(concatArrayVals(['1', [3, 4, 5], 3, 'a']));


//push 
let arr = [1, 2, 3];

function push(arr, newVal) {
  arr[arr.length] = newVal;
  return arr.length;
}

push(arr, 4);

console.log(arr);

//pop

function pop(arr) {
  if (arr.length === 0 ) {
    return undefined;
  } 

  let lastVal = arr[arr.length - 1]
  arr.length = arr.length - 1;
  
  return lastVal;
}

arr.pop;


//unshift 

function unshift(arr, newVal) {
  let maxLength = arr.length
  let storedVal = arr[0]
  for (let idx = 1; idx <= maxLength; idx++ ) {
    arr[idx] = storedVal;
    storedVal += 1;
  }

  arr[0] = newVal
  return arr.length
}

let array =[1, 2, 3]
console.log(unshift(array, 0));
console.log(array);

//shift

function shift(arr) {
  const returnVal = arr[0]
  const maxLength = arr.length - 1

  if (arr.length === 0) {
    return undefined;
  }

  for (let idx = 0; idx < maxLength; idx++) {
    arr[idx] = arr[idx + 1];
    }
  
  arr.length = maxLength;
  return returnVal;
}


let array2 = [1, 2, 3];
console.log(shift(array2, 0));
console.log(array2);

let array3 = [];
console.log(shift(array3, 0));
console.log(array3);


//indexOf

function indexOf(arr, char) {
  for (let idx = 0; idx < arr.length; idx++ ) {
    //console.log(arr[idx])
    if (arr[idx] === char ) {
      return idx;
    }
  }
  return -1;
}


console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1


//lastIndexOf

function lastIndexOf(arr, char) {
  for (let idx = arr.length-1; idx >0; idx -= 1 ) {
    if (arr[idx] === char ) {
      return idx;
    }
  }
  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1

// slice 

function slice(arr, start, stop) {
  let slicedArr = [];
  for (let idx = start; idx < stop; idx++) {
    slicedArr.push(arr[idx]);
  }

  return slicedArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));

// splice

function splice(arr, start, length) {
  let shiftVals = []
  for(let idx = start; idx < start + length; idx++ ){ 
    shiftVals.push(arr[idx])
    arr[idx] = arr[idx + 1]; 
  }

  arr.length = arr.length - length;
  return shiftVals;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);            


//concat 

function concate(arr1, arr2) {
  let fullArr = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    fullArr.push(arr1[idx]);
  }

  for (let idx = 0; idx < arr2.length; idx++) {
    fullArr.push(arr2[idx]);
  }

  return fullArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

// join 

function join(arr, strVal) {
  let joinedStr = ""
  for(let index = 0; index < arr.length - 1; index++) {
    joinedStr += arr[index] + strVal;
  }

  return joinedStr + arr[arr.length - 1];
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

//arrayEqual

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let index = 0; index < arr1.length; index++){
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1],[1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false


//OddElements

function oddElementsOf(arr) {
  let oddElements = []
   if (arr.length > 1) {
     for (let index=1; index < arr.length; index += 2 ) {
       oddElements.push(arr[index]);
     }
   } else {
     return 'The array is too short to parse.'
   }
   
   return oddElements;
 }
 
 let digits = [4, 8, 15, 16, 23, 42];
 
 console.log(oddElementsOf(digits));    // returns [8, 16, 42]

 //arrayToReverse

 function mirrorArray(arr) {
  let reversedArr = []

  for (let index = arr.length - 1; index >= 0; index-- ) {
    reversedArr.push(arr[index]);
  }

  return arr.concat(reversedArr)
 }

 console.log(mirrorArray(array)); 

 // sort

let myArr = [1, 3, 5, 2, 4];
let sortedArr = myArr.toSorted();


function sortArr(arr) {
   let arrCopy = arr.slice();
   return arrCopy.sort()
}

console.log(sortArr(myArr));
console.log(myArr);

//sortDesc 

let myArr = [1, 3, 5, 2, 4];
let sortedArr = myArr.toSorted((a,b) => b-a);

function compareNumbers(a,b) {
  return b - a;
}

function sortArr(arr) {
   let arrCopy = arr.slice();
   return arrCopy.sort(compareNumbers);
}


// sumSubarrays


function sumArray(arr) {
  let sum = 0;
  for (let idx = 0; idx < arr.length; idx++ ) {
    sum += arr[idx];
  }

  return sum;
}

function matrixSums(arr) {
  let allMatrix = [];
  for (let idx = 0; idx < arr.length; idx++ ) {
    allMatrix.push(sumArray(arr[idx]));
  }

  return allMatrix;
}


matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]


//uniqueSums

function uniqueElements(arr) {
  let filtered = [];
  if (arr.length === 1) {
    return [];
  }

  for (let idx = 0; idx < arr.length; idx++ ) {
    if (filtered.includes(arr[idx])) {
      continue;
    } else {
      filtered.push(arr[idx]);
    }
  }
  return filtered;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]


//findMissingNumbers


function missing(arr) {
  let arrCopy = uniqueElements(arr.toSorted());
  if (arr.length === 1 || arrCopy.length === 1 ) {
    return [];
  }

  let missingNums = [];
  
  let length = arrCopy[arrCopy.length-1] + Math.abs(arrCopy[0])
  for (let idx=arrCopy[0]; idx < length; idx++) {
    if (arr.includes(idx)) {
      continue;
    } else {
      missingNums.push(idx);
    }
  }
 return missingNums;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []