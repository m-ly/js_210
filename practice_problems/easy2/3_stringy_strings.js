function stringy(num) {
  let numStr = '';
  for ( let iter = 0; iter < num; iter += 1) {
    if ( iter % 2 === 0 ) {
      numStr += '1';
    } else {
      numStr += '0';
    }
  }

  return numStr;
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"