function isXor(param1, param2) {
  let results = []
  results.push(Boolean(param1));
  results.push(Boolean(param2));

  if (results.filter(ele => ele == true).length === 2) {
    return false;
  } else if (results.filter(ele => ele == false).length === 2) {
    return false;
  }

  return true;
}

function isXor(val1, val2) {
  if (val1 && !val2) {
    return true;
  }

  if (!val1 && val2) {
    return true;
  }

  return false;
}

function isXor(val1, val2) {
   return (!!(val1 && !val2) || !!(!val1 && val2));
}

console.log(isXor(false, true) === true );     // true
console.log(isXor(true, false) === true );     // true
console.log(isXor(false, false) === false );    // false
console.log(isXor(true, true) === false );      // false

console.log(isXor(false, 3) === true );        // true
console.log(isXor('a', undefined) === true );  // true
console.log(isXor(null, '') === false );        // false
console.log(isXor('2', 23) === false );         // false