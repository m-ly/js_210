function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0; i < cols.length; i += 1) {
    for (var j = 0; j < numbers.length; j += 1) {
      if (!result[i]) {
        result[i] = [];
      } 

      result[i][j] = numbers[j][cols[i]];
    }
  }

  return result;
}

// i = number of elements in the array (3 for each)
// j = number of elements in the column parameter 

// output: for each element in the array argument, return a new array for which the each element is the the element at n - index in each subarray the given array contains

// we want j.length subarrays being created
// as i number of elements in each subarray

//There were a couple issues with the original solution.  First, the loops were backwards, and which is why we were missing a number in each of our arrays. We need to have the outer loop be compared to the number of elements in each column to help define how many subarrays the solution should have. In doing so the inner loop should iterate to track the number of elementsin each of our subarrays.

// The other issue with solving this problem appears to have stemmed from variable shadowing by defining length 2x in the original formula. Instead of defining length, changing the for loop to evaluate agains the explict legnth of the object returns the desired functions


// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]