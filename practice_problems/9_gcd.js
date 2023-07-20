function gcd(num1, num2) {
  let min = num1 <= num2 ? num1 : num2;
  let commonDivisors = [];

  for ( let current = 1; current <= min; current++) {
    if ( num1 % current === 0 &&  num2 % current === 0) {
      commonDivisors.push(current);
    }
  }
  console.log(Math.max(...commonDivisors));
};


gcd(12,4);
gcd(15, 10);
gcd(9,2)
