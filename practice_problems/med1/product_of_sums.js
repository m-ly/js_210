function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

// function total(numbers) {
//   let sum;

//   for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
//   }

//   sum;
// }


// The code as given will not return the correct result.  There are a couple reasons for this, that are both related to the definition of `totals`. 
// 1st when we declare sum, we don't initialize it to a value, this means that sum += [an integer value] will return `NaN` since `undefined` is not evaluated as a number when a mathematical operator is applied to it.  This means when we declare `sum` we should also initialize it to a value of `0`.
// The second issue is that in standard function declarations, there is no implicit return, this is why line 13 will need to be edited to return the value of `sum` explicitly.
// The corrected function will look like this:

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

console.log(total([1, 2, 3]))

console.log(productOfSums([1, 2, 3], [1, 2, 3])) // 36