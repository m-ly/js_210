function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();


function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// When debugIt() is called on line 10, the interpreter findws the definition of the function on line one, and creates an execution environment where moves through the function definition. 
// In the new environment the const `status` is declared and defined.  Afterwards a new function `logger()` is defined. This function simply logs the value of `status` to the dev console. Note that since `status` was declared on the top level of the `debugIt` function, that the function `logger` has access to the variable name due to the way that javascript variables are lexical in nature.  This is why on why logger is called on line 7, it outputs the value of `status` which is `debugging`


function debugIt(mystatus) {
  const status = mystatus;
  
  return function logger() {
    console.log(status);
  }
}

let newStatus = debugIt('processing');
newStatus();  // logs 'processing'

