const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length);  // 3 
console.log(Object.keys(array).length); // 5


array[3] = 'mango'
console.log(array.length) // 4
console.log(Object.keys(array).length); // 6

// note what happens when insert an item at an index that is separated from other indexes. Array length counts the empty elements that are created, but Object.keys does not

array[6] = 'banana';
console.log(array.length); // 7
console.log(Object.keys(array).length); // 7
console.log(array);

// The reason why  the array length is not changed is because an array is a special object which tracks elements who's keys are positive integers.  Any element that is added which has a key that is not a positive integer, is not considered a 'true element' of the array, and is instead considered a property of the array object. 