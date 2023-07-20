// This is an example of a partial application. The function make caller returns another function which takes a single argument, and returns another function with the arguement set. This new function also takes a new arguemnt, which is a number.

// The benefit of utilizing a partial application in lieu of requiring all of the arguments in one function is it allows for specialized versions of generic functions, and can potentially reduce code duplication.

function makeDoubler(caller) {
  return function (num) {
    console.log(`The function was called by ${caller}`);
    return num * 2;
  }
}

const double = makeDoubler('Matt');
console.log(double(10));
console.log(double(2));