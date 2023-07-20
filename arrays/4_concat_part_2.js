function concat(array1, ...nexEle) {
  let cpyArr = array1.slice();

  for (let argsIdx = 0; argsIdx < arguments.length - 1; argsIdx++ ) {
    if (!Array.isArray(nexEle[argsIdx])) { 
      nexEle[argsIdx] = [nexEle[argsIdx]];
    }

    for (let idx = 0; idx < nexEle[argsIdx].length; idx++) { 
      cpyArr.push(nexEle[argsIdx][idx]);
    }
  }

  return cpyArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]) == [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]