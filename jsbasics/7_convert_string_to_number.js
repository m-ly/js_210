function stringToInteger(str) {
  let result = 0;
  let tenSpot = 0;
  for (let i = str.length - 1; i >= 0; i-- ) {
    result += str[i] * ( 10 ** tenSpot );
    tenSpot++;
  }
  console.log(result);
}

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570