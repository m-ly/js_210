function multiplesOfThreeAndFive(start, stop) {
  for (let num = start; num <= stop; num++) { 
    if (num % 3 === 0 && num % 5 === 0) { 
      console.log('fizzbuzz');
    } else if (num % 5 === 0 ) { 
        console.log('buzz');
    } else if (num % 3 === 0 ) {
        console.log('fizz');
    } else {
        console.log(String(num));
    }
  }
}

multiplesOfThreeAndFive(1, 50);
multiplesOfThreeAndFive(1, 100);