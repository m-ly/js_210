// var counter;

// counter = 5;

// function counter(count) {
//   console.log('whoops!')
// }

// var rate = 3;
// console.log('The total value is ' + String(counter * rate));


// logs 15
// this shows that if a variable is declared (with var) and defined prior to a function definition of the same name that that the variable definition will take precedence over the function definition -- NOTE -- this will not work with `let`


// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// var counter = 5;
// var rate = 3;


// logs NaN
// this shows that if the function definition is defined and called above (prior too ) a variable definition of the same name, that the function  definition will remain valid, and be used when called in the code.


// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// logs 15


let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// returns an error since you cannot share or overwrite function variable and function declarations while using let