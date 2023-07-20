// input string, an integer representing the start index, and an integer representing the length of the string

// if the second integer is negative, it's value should be interpreted as string.length - arg
// if length arg is greater than given string, only valid given indexes in the strings should be used


function substr(string, start, length) {
  if (start < 0) { 
    start = string.length + start;
  }

  if ((start + length) > string.length) {
    length = string.length - start;
  } else if (length < 0) {
    length = 0;
  }

  if (length === 0 ) {
    return (console.log(''));
  }
  

  let slice = ''
  for (let idx = start; idx < start + length; idx++ ) {
    slice += string[idx];
  }

  console.log(slice)
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""