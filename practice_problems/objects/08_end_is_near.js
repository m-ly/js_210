function penultimate(string) {
  let myArr = string.split(' ');
  myArr[-2] = 'Not Here!'
  console.log(myArr);
  
  return string.split(' ')[-2];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"

// The problem here is that javascript arrays do not allow for a negative integer to be supplied to count backwards.  When the program is passed a negative value, it will attempt to look up an element using that value as a key.  Since the array does not contain a negative value, it will return undefined


function penultimate(string) {
  // find the length of the array split at spaces, and subtract 2
  let penultimateIndex = string.split(' ').length - 2
  
  // utilize our index to lookup the second to last index
  return string.split(' ')[penultimateIndex];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"