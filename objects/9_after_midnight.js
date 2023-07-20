const MS_TO_MINS = 60000;

function midnight() {
  const date = new Date();
  date.setHours(0, 0, 0);
  return date.getMinutes();
}

function timeOfDay(deltaMinutes) {
  const newTime = new Date( midnight() + (deltaMinutes * MS_TO_MINS ));
  let hours = padWithZero(newTime.getHours(), 2);
  let minutes = padWithZero(newTime.getMinutes(), 2);
  console.log(`${hours}:${minutes}`);
}

function padWithZero(num, length) { 
  if ( String(num).length < length) {
    return `0${num}`;
  } else {
    return String(num);
  }
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"