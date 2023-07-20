function pop(arr) {
  let lastElement = arr[arr.length - 1];
  arr.splice(arr.lastElement - 1, 1);
  return lastElement;
}

function push (arr, ...elements ) {
  elements.forEach( function(element) {
    arr.splice(arr.length, 1, element);
  });
  return arr.length;
}


// pop
const array1 = [1, 2, 3];
pop(array1);                        // 3
console.log(array1);                // [1, 2]
pop([]);                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

//// push
const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0