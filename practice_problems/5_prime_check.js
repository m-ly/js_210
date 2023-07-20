const arrayRange = (start, stop, step) => 
  Array.from(
    { length: (stop - start) / step + 1 }, 
    (value, index) => start + index * step
  );


function isPrime(num) {
  const myRange = arrayRange(2, num/2, 1);
  
  if (num <= 1 ) {
    return false;
  } else if (myRange.some(ele => num % ele === 0 )) {
    return false;
  }

  return true;
}





console.log(isPrime(1) === false );   // false
console.log(isPrime(2) === true);   // true
console.log(isPrime(3) === true);   // true
console.log(isPrime(43) === true);  // true
console.log(isPrime(55) === false);  // false
console.log(isPrime(0) === false );   // false