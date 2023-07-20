const TIP_TO_DECIMAL = .01

const bill = parseFloat(prompt('What is the total of the bill?'));
const tipPrompt = parseFloat(prompt('What percentage would you like to tip'));

const tip = (bill * (tipPrompt * TIP_TO_DECIMAL) ).toFixed(2)
const grandTotal = Number(tip) + bill

console.log(`The total tip is $ ${tip}.`)
console.log(`The total for the entire meal is $${grandTotal}.`)