function repeat(string, times) {
  let repeated = '';
  if (typeof times !== 'number' || times < 0 ) {
    return undefined;
  } else if (times >= 0 ) {
    for (let num = 1; num <= times; num ++) {
      repeated += string; 
    } 
  } 

  return  repeated;  
}

console.log(repeat('abc', 1) ===  "abc");
console.log(repeat('abc', 2) === "abcabc");
console.log(repeat('abc', -1) === undefined);
console.log(repeat('abc', 0) === "");
console.log(repeat('abc', 'a') === undefined);
console.log(repeat('abc', false) === undefined);
console.log(repeat('abc', null) === undefined);
console.log(repeat('abc', '  ') === undefined);