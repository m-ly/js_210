const totalPages = 364;
let energy = 100;
let currentPage = 1;

function read() {
  
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();

// since currentPage is declared and initialized inside the function `read`, every time the function is called it sets the value of `currentPage` to 1. Read is recursively called in the function, which is why the value of `currentPage` keeps logging `18` until the code stops.  Moving the decaration of `currentPage` outside of the function will resolve the issue and call read logging each page until the book is finished