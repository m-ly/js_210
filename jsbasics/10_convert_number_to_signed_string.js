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

function signedIntegerToString(num) {

  if ( num < 0 ) {
    return '-' + integerToString(Math.abs(num));
  } else if ( num > 0 ){
    return '+' + integerToString(num);
  } else if (num === 0) {
    return '0';
  }
}