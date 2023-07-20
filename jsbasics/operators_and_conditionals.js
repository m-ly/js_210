1. 

let apples = 3;
let bananas = undefined; 
let areEqual = apples === bananas;
let eitherOr = apples || bananas;


if (apples === bananas) {
  console.log('You gots the same amount of apples & bananas!');
}  else {
    
    if (apples == bananas) {
    console.log('Not strictly equal');
    } else { 
      console.log('Not the same amount of apples & bananas!');
    };

};

console.log(areEqual);
console.log(eitherOr);

// 10.

let lastName = 'Lyell';
let familyMessage = 'Lyelle' === lastName ? 'You have the same last name as me' : 'Is different last name';

console.log(familyMessage);



