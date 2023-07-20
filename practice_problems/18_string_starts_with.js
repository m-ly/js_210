// function startsWith(string, searchString) {
//   if (searchString === '') {
//     return true;
//   } 

//   if (searchString.length > string.length ) {
//     return false;
//   }

//   for (let idx = 0; idx <= string.length; idx++) { 
//     for (let searchIdx = 0; searchIdx <= searchString.length; searchIdx++) {
//       if (string[idx] !== searchString[idx]) {
//         return false;
      
//       }
//     }
//     return true;
//   }
// }

function startsWith(string, searchString) {
  for (let idx = 0; idx < searchString.length; idx++) { 
      if (string[idx] !== searchString[idx]) {
        return false;
      }
    }
    return true;
  }

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false