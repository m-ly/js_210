// input - array
// output -- the first element of the array 
               // if an array is empty return undefined
  // side effect - the original array is mutated



  function shift(arr) {
    if (arr.length === 0 ) return undefined;
    
    let firstEle = arr[0];
    arr.splice(0, 1);
    return firstEle;
  }
  
  console.log(shift([1, 2, 3]));                // 1
  console.log(shift([]));                       // undefined
  console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]
  
  
  // unshift - input an array, elements 
  //   -- output the length of the array 
      // side effect - the original array is mutated
  
      
  
  function unshift (arr, ...args ){
    arr.length = arr.length + args.length;
    
    for (let i = arr.length - 1; i > 0; i-- ) {
      arr[i] = arr[i - 1];
    }
  
    for (let i = args.length - 1 ; i < args.length; i++) {
      arr[i] = args[i];
    }
  
    return arr.length;
  }
  
  console.log(unshift([1, 2, 3], 5, 6));        // 5
  unshift([1, 2, 3]);              // 3
  unshift([4, 5], [1, 2, 3]);      // 3
  
  const testArray = [1, 2, 3];
  console.log(shift(testArray));                // 1
  console.log(testArray);                       // [2, 3]
  console.log(unshift(testArray, 5));           // 3
  console.log(testArray);                       // [5, 2, 3]