// 1. 
console.log('#1:')
//  Define a function named average that takes three parameters, a, b, and c, and returns their average.
// Call the function with three numbers and log the result

// function average(num1, num2, num3) {
//   return sum(num1, num2, num3) / 3 ;
// };

// console.log(average(1, 2, 3))

//2
console.log('#2:')

// function sum(num1, num2, num3) {
//   return num1 + num2+ num3;
// };

// console.log(sum(1,2,3))

//3

console.log('#3:')

// function average(arr) {
//   let total = 0
//   for (let idx = 0; idx < arr.length; idx++ ) {
//     total += arr[idx]
//   }
//   return total / arr.length;
// }

// console.log(average([1,2,3]));
// console.log(average([1, 2, 3, 4, 5]));


//4
console.log('#4:')

function sum(arr) {
  let total = 0 
  for ( let idx = 0; idx < arr.length; idx += 1 ) {
    total += arr[idx];
  }
  return total;
}


function average(arr) {
  return sum(arr) / arr.length;
}
console.log(sum([1,2,3, 4, 5]));


//5 
console.log('#5:')

const temperatures = [98,  67, 102, 54, 36];

console.log(average(temperatures));