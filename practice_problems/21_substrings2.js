function substring(string, start, end) {
  if (start > end ) { 
   [start,end] = [end, start]
  } else if (start === end ) {
    console.log('');
  }

  if (start < 0 || isNaN(start) ) {
    start = 0;
  }

  if (end === undefined) {
    end = string.length
  } else if (end < 0 || isNaN(end) ) {
    end = 0
  }
  
  let substring = '';
  for (let idx = start; idx < end; idx++) {
     if (string[idx] === undefined) {
      break;
     }
     substring += string[idx];
  }

  console.log(substring);
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"