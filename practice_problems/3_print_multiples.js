function logMultiples(num) {
  let multiples = [];
  let iter = 3; 
  
  while ( num * iter <= 100 ) { 
    if ( num % 2 !== 0) {
       multiples.push(num * iter);
       iter += 2;
    } 
  }
  
  while (multiples.length) {
    console.log(multiples.pop());
  }
}

logMultiples(5);