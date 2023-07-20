// input - a string
// output - a string centered in an illustrated box

// Characters used to draw the box [ - + | ]
//    + - - - - - - - - - - - +
//    |   string goes heres   |
//    + - - - - - - - - - - - +

// rules
// the the top and bottom of the box will always be the same
// the first and last line will always be string.length + 8 long
// there should be 3 spaces before the start of the string,
//    and at the end of the string before the | char
// the minium size of the box is '+ - +' (5 chars)
// odd and even length string return a different value of spaces at the end
//    odd length = 3 spaces
//    even length = 4 spaces

// approach / algorithm
// initialize a variable leadingSpaces set to a value of 3
// initialize a variable trailingSPaces set to a value of 3
// determine the length of the string
//  if the string length is odd
//     reassign trailing spaces to 4

// initialize a variable which tracks the total length of the box
//   set to the value of leading spaces + string length + trailing spaces

// generate the first and last lines
// this is equal to '+' + 'stringLength(-2) * ' - ' + '+'
// console.log('+' + ' - '.repeat() + '+' )

// initialize a variable to create the middle string which includes
//   the chars '|...string...|' with proper number of spaces at the end


function logInBox(string) {
  const LineBorderCharsLength = 3;
  let leadingSpaces = 3;
  let trailingSpaces = 3;
  

  if (string.length % 2 === 1 ) {
    trailingSpaces = 4;
  }

  if (string.length === 0) {
    string.length = 1;
  }

  let EmptySpaces = leadingSpaces + trailingSpaces - LineBorderCharsLength;
  let bufferLines = '+' + ' -'.repeat((( string.length / 2 )) + (EmptySpaces )) + ' +';
  let middleLine = '| ' + ' '.repeat(leadingSpaces) + string + ' '.repeat(trailingSpaces) + '|';

  console.log(bufferLines);
  console.log('|' + ' ');
  console.log(middleLine);
  console.log(bufferLines);
}

logInBox('To boldly go where no one has gone beforez.');
logInBox('');