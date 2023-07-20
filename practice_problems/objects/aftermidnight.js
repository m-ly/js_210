
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMins) {
  deltaMins = deltaMins % MINUTES_PER_DAY;
  if (deltaMins < 0) {
    deltaMins = MINUTES_PER_DAY + deltaMins;
  }

  let hours = Math.floor(deltaMins / MINUTES_PER_HOUR);
  let minutes = deltaMins % MINUTES_PER_HOUR;
  let dateObj = new Date()
  
  
  dateObj.setHours(hours,minutes);

  return dateObj.toLocaleTimeString("en-US", { hour12: false });
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"