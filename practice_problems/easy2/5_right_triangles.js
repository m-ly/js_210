// input - an integer 
// output - a illustration of a triangle made out of stars

// the last line has as many stars as the input number
// each line above that has n-1 stars then the lower line // or n + 1 spaces
// from top to bottom spaces  is first assigned as num - 1
// each subsequent line spaces spaces -= 1

// approach/algorithm 
// initialize a variable numSpaces set to value of num - 1

// iterate through a loop until the index is equal to the input number
// initialize a variable numStars set equal to num - spaces
// for each loop reassign spaces to equal spaces - 1
// log the number of spaces * ' '  concatated with number of stars

function triangle(num) {
  for (let iter = 1; iter <= num; iter++) {
    let numSpaces =  num - iter;
    let numStars = num - numSpaces;
    const currentLine = ' '.repeat(numSpaces) + '*'.repeat(numStars);
    console.log(currentLine);
  }
}


triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********