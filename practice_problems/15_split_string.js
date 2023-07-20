function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: No delimiter");
    return
  }

  let currentStr = '';
  for (let idx=0; idx< string.length; idx++ ) {
    if (delimiter ==='') {
      console.log(string[idx]);
    } else if (string[idx] !== delimiter) {
      currentStr += string[idx];
    } else {
      console.log(currentStr);
      currentStr = '';
    }
  }

  if (currentStr) {
    console.log(currentStr);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// // logs:
// // hello

splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello