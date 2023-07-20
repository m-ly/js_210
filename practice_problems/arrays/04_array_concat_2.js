function concat(array1, ...args) {
  args.forEach( function (currentArg) {
    if ( Array.isArray(currentArg) ) { 
      currentArg.forEach( arg => array1.push(arg));
    } else {
      array1.push(currentArg)
    }
  });

  return(array1);
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]