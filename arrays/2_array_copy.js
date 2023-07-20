let myArray = [1, 2, 3, 4];
//const myOtherArray = Array.from(myArray); // solution 1
// const myOtherArray = myArray.slice();
const myOtherArray = [...myArray]; // solution 3 - es6 preferred way

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);