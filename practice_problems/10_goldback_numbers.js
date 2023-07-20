function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  let divisor = 3;

  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 2;
  }

  return true;
}


function checkGoldbach(num) {
  let gbVals = []

  if (num < 4) { 
    return null; 
  } 

  for (let iter = 2; iter <= num / 2; iter++ ) {
    if ( isPrime(iter) && isPrime(num-iter))
      gbVals.push([iter, num-iter]);
  }
  
  gbVals.forEach(val => console.log(val[0], val[1]));
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53