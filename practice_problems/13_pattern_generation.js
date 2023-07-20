function generatePattern(num) {
  let result = ""
  
  for (let currentNum = 1; currentNum <= num; currentNum++) {
    numStars = num - currentNum
    result += String(currentNum) 
    console.log(result + "*".repeat(numStars));
  } 
}

generatePattern(17)