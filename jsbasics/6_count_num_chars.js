const text = prompt('Enter a string of characters');
const trimmedText = text.replaceAll(' ', '')
const answer = `There are ${trimmedText.length} characters in ${text}`;

console.log(answer);