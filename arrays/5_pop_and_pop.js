// pop
function pop(array) {
  if (array.length === 0  ) return undefined;
  
  let length = array.length;
  let last_val = array[array.length - 1];
  array.length -= 1
  return last_val;
}

const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
function push(arr, ...args) {
  let nextIdx = arr.length; 

  for (let i = 0; i < arguments.length -1; i++) { 
    arr[nextIdx] = args[i];
    nextIdx += 1
  }

  return arr.length
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
push([]);                          // 0