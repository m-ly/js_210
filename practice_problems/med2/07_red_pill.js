function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

// This demonstrates the execution environment, closures, and that functions are first class objects
// first the function one is called with no parameters
// When this is called from inside the function there are three additional functions defined: log, another one, and anotherAnotherOne. 
// 1. From inside one:
   // a. The function anotherAnotherOne is called 
         // anotherAnotherOne takes no arguemnts but logs the conversion a grouping of UTF16 characters, which has been converted to their string character equivalent to log the word `welcome` to the console.  
         // Still inside the function `anotherOne` is called, which takes an indeterminant number of arguments which are UTF16 characters, and iterates each those arguements, once again creating a string of those arguments. The characters `16` and `111` are converted to the string `to` and stored in the variable result`
            // - From inside the function `anotherOne`, the function `log` is called, which takes a single argument, and logs that argument to the console The variable `result` is passed to the function, an the function outputs the string `to` to the console.
              // log returns undefined
          // anotherOne returns undefined
    // anotherAnotherOne returns undefined.
    // b. The function anotherOne is called with three arguments. these aguements are again converted to string character equivalent and passed to the function log, which outputs the string `the` to the console.  
    // One returns the function anotherOne
    // The code is now back at the global scope where anotherOne is called with a list of aguemnts, which it converts to a string, and stores in a variable, Again the variable is passed to the function `log` which is available because a closure was created when the function was defined.  This function outputs it's arguement `Matrix` to the console.  
// At this point we've reached the end of the call stack, and the program is finished running. 