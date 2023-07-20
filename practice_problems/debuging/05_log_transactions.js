const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw new Error('Data could not be converted to numerical amount.');
  }

  return numericalData;
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } catch {
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();
console.log(transactionLog);

console.log(transactionTotal());

// The error in the code above is that there is now error parameter in the catch block on line 21.  This means that `error` on line 22 is an undefined value.  Once we add `error` as a parameter the code works as intended.  If the user attempts to pass a value that cannot be converted to a float, then the `throw` statement halts execution of the `procesInput` function and the error is passed to the first `catch` block in the call stack.