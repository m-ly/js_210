function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let lowercaseString = '';

  for ( let idx = 0; idx < string.length; idx++ ) { 
   let ascii = string.charCodeAt(idx);
  
   if (string[idx] >= 'A' && string[idx] <= 'Z') {
    ascii += CONVERSION_OFFSET
   }
   
   lowercaseString += String.fromCharCode(ascii)
  } 

  console.log(lowercaseString);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"