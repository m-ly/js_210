//console.log(today);

//input - an integer representing a date in a month
//output - datenumber appended to it's suffix

// find the last number in a given integer (eg 1 => 1, 12 => 2), 
// compare that value to an object that contains a key/value pair of integers and str for the suffix of the number
// return the corresponding suffix

// find the last number in a given integer
//  - convert the number to a string, return the value of string.length - 1
// 

let today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let todaysDate = today.getDate();

function findLastNum(integer) {
  const lastVal = integer.toString();
  return lastVal[lastVal.length - 1];
}

function dateSuffix(date) {
  const lastVal = findLastNum(date);

  const Suffix = {
    1: 'st', 2: 'nd', 3: 'rd', 4: 'th', 5: 'th',  
    6: 'th', 7: 'th', 8: 'th', 9: 'th', 0: 'th',  
  }

  if (date === 11 || date == 12 || date == 13 ) {
    return `${date}${th}`;
  }

  return date.toString() + Suffix[lastVal]
}

function formatedDate(date) {
  let formatMonth = months[today.getMonth()]
  let formatDate = dateSuffix(todaysDate)
  let dayOfWeek = daysOfWeek[today.getDay()]

  console.log(`Todays date is ${dayOfWeek}, ${formatMonth} the ${formatDate}.`);
}

formatedDate(today)


function addLeadingZeros(number) {
  let numString = number.toString();
  if (number < 10) { 
    return '0' + numString;
  }
  return numString;
}

function formatTime(date) { 
  let hours = addLeadingZeros(date.getHours());
  let minutes = addLeadingZeros(date.getMinutes());

  console.log(hours + ':'  + minutes)

}

console.log(today);
formatTime(today);