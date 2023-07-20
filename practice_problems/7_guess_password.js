const password = 'password';
let guess_num = 0

for (  guess_num; guess_num < 3; guess_num++){
  let guess = prompt("Please Enter the password")
  if (guess === password) { 
    break 
  } else {
    console.log("Incorrect password, please try again.");
  }
}

if (guess_num < 3) {
  console.log("Correct,you're logged in!");
} else {
  console.log("Too many incorrect attemps, take a break.")
}