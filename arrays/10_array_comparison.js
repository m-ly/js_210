// input -- 2 arrays 
// output -- boolean which specifies whether all of the values (shallow) inside each array are the same


// string values should not be cast -- looking for strict equality only
// order of the elements in the arrays are not important. they just both need to be the same

// approach
// sort both arrays
// iterate through the index of one of the arrays length comparing the values at both arrays
//   if at any index the values are not equal return false
// if the iteration completes without throwing false return true. 


function areArraysEqual(array1, array2) {
  array1 = array1.sort();
  array2 = array2.sort();

  for (let idx=0; idx < array1.length; idx++) {
    if (array1[idx] !== array2[idx]) {
      return false;
    }
  }

  return true;
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true
areArraysEqual([1, '1'], ['1', 1]);                    // true