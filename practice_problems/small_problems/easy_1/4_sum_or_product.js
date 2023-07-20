let startNumber = parseInt(prompt("Please enter a number greater than 0: "))
let operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.: ')

function computeSum(number) {
  let currentVal = 1;
  for (num = 2; num <= number; num++ ){
    currentVal += num;
  }
  return currentVal;
}

function computeProduct(number) { 
  let currentVal = 1;
  for (num = 2; num <= number; num++ ) {
    currentVal *= num;
  }
  return currentVal;
}

if (operation === "s") {
  number = computeSum(startNumber)
  console.log(`The sum of the integers between 1 and ${startNumber} is ${number}`);
} else if (operation === "p") {
  number = computeProduct(startNumber)
  console.log(`The product of the integers between 1 and ${startNumber} is ${number}`);
} else {
  console.log("Unknown Operation.")
}
