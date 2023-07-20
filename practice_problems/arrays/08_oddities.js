
function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) == [2, 4, 6];      // false
oddities(['abc', 'def']) == ['abc'];         // false

// The reason why the two previous expressions return false is because oddities creates a new array. When comparing complex objects, even if both objects contain the same elements, they are not the same value as both objects actually point towards a different location in memory. Instead, if you're looking at comparing if both objects contain the same values you need to work down, and compare primitive values which the equality operator is able to compare for sameness. Alternatively, you can also utilize Array.every, and Array.includes, to determine equality as well. 


const odd1 = oddities([2, 3, 4, 5, 6]);
const odd2 = oddities(['abc', 'def']);

function testArraysEquality(arr1, arr2) {
  if (arr1.length != arr2.length ) return false;

  for (let i = 0; i < arr1.length; i++ ) {
    if (!arr1[i].includes(arr2[i])) return false;
  }

  return true;
}

// note this is buggy, as it does not take into account duplicates, it would be better to create a hash of the first array, and compare the counts of elements to the hash of the second array.

console.log(testArraysEquality(odd1,[2,4,6]));
console.log(testArraysEquality(odd2,['abc']));

const allOdds = (arr1, arr2) => arr1.every ( ele => arr2.includes(ele) );

console.log(allOdds(oddities([2,3,4,5,6]), [2,4,6]));
console.log(allOdds(oddities(['abc', 'def']), ['abc']));