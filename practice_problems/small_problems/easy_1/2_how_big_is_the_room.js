let readlineSync = require('readline-sync');

let SQUARE_FEET_TO_METER = 10.7639;
let width = readlineSync.question('What is the width of the room in feet?');
let length = readlineSync.question('What is the length of the room in feet?');

let square_feet = parseInt(width) * parseInt(length);
let square_meters = square_feet * SQUARE_FEET_TO_METER;

console.log( `The area of the room is ${ square_meters.toFixed(2)} square meters total`);