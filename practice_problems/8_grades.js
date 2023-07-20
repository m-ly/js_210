let scores = []
let score = 0 
let numTests = 3

const between = (num, min, max) => {
  return num >= min && num <= max;
}

for (let i = 1; i <= numTests; i++) {
  let score = prompt(`Enter score ${i}: `);
  scores.push(score)
};

scores.forEach(val => score += parseInt(val));
let avgScore = parseInt(score / scores.length);

if (between(avgScore , 90, 100)) { 
  grade = 'A';
} else if (between( avgScore, 70, 90)) {
  grade = 'B';
} else if (between( avgScore, 50, 70)) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`With an average score of ${avgScore}, you got an ${grade}`);