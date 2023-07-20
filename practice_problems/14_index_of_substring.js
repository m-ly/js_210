function indexOf(str1, str2) {
  const maxLength = str2.length;
  let matchIndex = []
  
  for (let firstIdx = 0; firstIdx <= str1.length; firstIdx++) {
    let countOfMatches = 0 
    for (let secondIdx = 0; secondIdx < str2.length; secondIdx++){ 
      if (str1[firstIdx + secondIdx] === str2[secondIdx]) { 
        countOfMatches += 1;
      } else {
        break;
      }
    } 

    if (countOfMatches === maxLength) {
      matchIndex.push(firstIdx)
    }
      
  }

  if (matchIndex.length === 0 ) { 
    return -1;
  } else {
    return matchIndex[0]
  }
  
}

function lastIndexOf(str1, str2) {
  const maxLength = str2.length;
  let matchIndex = []
  
  for (let firstIdx = 0; firstIdx <= str1.length; firstIdx++) {
    let countOfMatches = 0 
    for (let secondIdx = 0; secondIdx < str2.length; secondIdx++){ 
      if (str1[firstIdx + secondIdx] === str2[secondIdx]) { 
        countOfMatches += 1;
      } else {
        break;
      }
    } 

    if (countOfMatches === maxLength) {
      matchIndex.push(firstIdx)
    }
      
  }

  if (matchIndex.length === 0) { 
    return -1;
  } else {
    return matchIndex[matchIndex.length-1]
  }
  
}



console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1