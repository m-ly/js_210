function multiplesOfThreeAndFive(start, stop) {
  for (let num = start; num <= stop; num++) { 
    if (num % 3 === 0 && num % 5 === 0) { 
      console.log(String(num) + '!');
    } else if ( num % 5 === 0 || num % 3 === 0 ) { 
        console.log(String(num));
    }
  }
}

multiplesOfThreeAndFive(1, 50);