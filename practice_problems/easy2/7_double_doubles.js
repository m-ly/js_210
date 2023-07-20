// input: a number
// output: a number

// if the a number, divided evenly by 2, contains the same digits on
// the left and right side. return the number
// otherwise return the number divided by 2
// immediate false condition -- number length is odd

// approach / algorithm
// initialize a variable that is length of the given number
// if the length is even:
//   compare the characters from index 0 to midpoint and midpoint to end
//   utilze slice
// else
//   return the number * 2

function twice(num) {
  let numToString = num.toString();
  let numLength = numToString.length;
  let halfLength = numLength / 2;

  if (numToString.slice(0, halfLength ) === numToString.slice( halfLength )) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676