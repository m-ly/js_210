// function integerToString (num) {
//   let numLen = Math.ceil(Math.log10(num));
//   let result = [];
//   let currentVal = num;

//   for ( let i = numLen; i > 0; i-- ) {
//     result.unshift(`${Math.floor(currentVal % 10 )}`);
//     currentVal /= 10;
//   }

//   if (result.length === 0) {
//     return '0';
//   } else {
//     return result.join('');
//   }
// }

function integerToString (num) {
  let numLen = Math.ceil(Math.log10(num));
  let result = '';
  let currentVal = num;

  for ( let i = numLen; i > 0; i-- ) {
    result = `${Math.floor(currentVal % 10 )}` + result;
    currentVal /= 10;
  }

  if (result.length === 0) {
    return '0';
  } else {
    return result;
  }
}

console.log(integerToString(4321) === "4321");
console.log(integerToString(0) ===  "0");
console.log(integerToString(5000) === "5000");