const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let timeArr = timeStr.split(':')
  const timeComponents = new Date();
  timeComponents.setHours(timeArr[0],timeArr[1]);

  let hours = timeComponents.getHours();
  let minutes = timeComponents.getMinutes();

  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);

  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}


console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686