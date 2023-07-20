function midnight() {
  const date = new Date();
  date.setHours(0, 0, 0);
  return date.getMinutes();
}


const HOURS_TO_MINUTES = 60 

function afterMidnight(strTime) {
  let hours = strTime.split(':')[0] * HOURS_TO_MINUTES;
  let minutes = strTime.split(':')[1] 

  console.log(parseInt(hours) + parseInt(minutes) )
}

function beforeMidnight(strTime) { 
  const MIDNIGHT = 60 * 24
  let hours = parseInt(strTime.split(':')[0], 10) * HOURS_TO_MINUTES;
  let minutes = parseInt(strTime.split(':')[1], 10);

  if (strTime === String('00:00')) {
    console.log(0)
  } else {
  console.log( MIDNIGHT - hours - minutes );
  }

afterMidnight('00:00');       // 0
beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
beforeMidnight('12:34');      // 686