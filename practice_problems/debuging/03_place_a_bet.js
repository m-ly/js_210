function placeABet(guess) {
  (function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  });

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

// The issue with this is that when a function is wrapped in parenthesis, it is immediately invoked expression. This means that if we want to keep the function wrapped in parenthesis, we must also assign it to a variable when we do so.  Assigning the function to varaible when it is called on line 26 will allow the code to function property. WHen doing this you can also remove the function name, as it it no longer needed. The example shown below utilizes an arrow function to demonstrate, though this can be done with a normal function expression just as easily. 


function placeABet(guess) {
  const winningNumber  = ( () => Math.floor(Math.random() * 25) + 1);

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));