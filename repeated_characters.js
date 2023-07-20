function filterLetters(obj) {
  let filteredChars = {};
  for (let char in obj) {
    if (obj[char] > 1 ) {
      filteredChars[char] = obj[char];
    }
  }
  return filteredChars;
}

function repeatedCharacters(text) {
  text = text.toLowerCase();
  let characters = {};

  for (let i = 0; i < text.length; i++ ) {
    if ( characters[text[i]] > 0 ) {
      characters[text[i]] += 1;
    } else {
      characters[text[i]] = 1;
    }
  }

  return filterLetters(characters);
}


console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }