// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }

function invoiceTotal(...amounts) {
  let total = 0;
  for ( let i = 0; i < amounts.length; i++) {
    total += amounts[i]
  }

  return total;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?