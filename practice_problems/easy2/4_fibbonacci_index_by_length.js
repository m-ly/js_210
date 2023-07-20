//input- a bigInt number
//output -- the first index for which the returned fibbonacci number
// contains the same number of digits as the input number

// approach / algorithm
// calculate the fibbonacci number in a loop
//    the first iteration the current fibNum is 1 -- initialize a variable fib1
//    the second iteration the current fibNum is 1 -- initialize a variable fib2
//    from that point on the current fibNum is fib1 - fib2
//    at each loop assign  fib2 to fib1 and then fib1 to current

//  compare each fibbonacci numbers length to the input number
//   break the loop if the length is the same as the input number
//   save and return the number where the loops was broken

function findFibonacciIndexByLength(num) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibbonacci;

  do {
    fibbonacci = first + second;
    count += 1n;
    first = second;
    second = fibbonacci;
  } while ( fibbonacci.toString().length < num );

  return count;
}



console.log(findFibonacciIndexByLength(2n)); //=== 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n)); //=== 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)); //=== 45n);
console.log(findFibonacciIndexByLength(16n)); //=== 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.