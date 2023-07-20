// function rot13(text) {
//   const LOWER_CASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   const UPPER_CASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//   const ROTATION_OFFSET = 13;
//   const ALPHABET_LENGTH = 26;
  
//   let rotated = '';
//   for (let idx = 0; idx< text.length; idx++) {
//     if (LOWER_CASE_LETTERS.includes(text[idx])) {
//       let rotatedIdx = LOWER_CASE_LETTERS.indexOf(text[idx]) + ROTATION_OFFSET; 
//       rotated += LOWER_CASE_LETTERS[rotatedIdx % ALPHABET_LENGTH];
//     } else if (UPPER_CASE_LETTERS.includes(text[idx])) {
//       let rotatedIdx = UPPER_CASE_LETTERS.indexOf(text[idx]) + ROTATION_OFFSET; 
//       rotated += UPPER_CASE_LETTERS[rotatedIdx % ALPHABET_LENGTH];
//     } else {
//       rotated += text[idx];
//     }
//   } 
//   return rotated;
// }


function rotateLetter(char) {
  const LOWER_CASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const UPPER_CASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const ROTATION_OFFSET = 13;
  const ALPHABET_LENGTH = 26;

  if (LOWER_CASE_LETTERS.includes(char)) {
    let rotatedIdx = LOWER_CASE_LETTERS.indexOf(char) + ROTATION_OFFSET % ALPHABET_LENGTH; 
    return LOWER_CASE_LETTERS[rotatedIdx % ALPHABET_LENGTH];
  } else if (UPPER_CASE_LETTERS.includes(char)) {
    let rotatedIdx = UPPER_CASE_LETTERS.indexOf(char) + ROTATION_OFFSET; 
    return UPPER_CASE_LETTERS[rotatedIdx % ALPHABET_LENGTH];
  } else {
    return char;
  }
}

function rot13(text) {
  let cipherText = '';
  for (let idx = 0; idx < text.length; idx++) {
    cipherText += rotateLetter(text[idx]);
  } 
  return cipherText;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
console.log(rot13('qPbqr Ebg-13'))