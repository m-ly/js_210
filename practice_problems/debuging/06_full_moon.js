var newSpecies;
const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}


const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  var newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}


// The reason why the output is being logged to the console twice is because of the way that the `species` array is composed, and due to variable declared with the `var` keyword being hoisted.  This means that when the loop begins on line 13, when newSpecies is originally declared, but without a specific initializer applied, it contains the value `undefined` when resolved.  As the loop iterates, and an element in the array returns true when pased to `isTransformable`, the variable newSpecies is re-assigned a new value, which is then logged to the console. The next iteration of the loop, isTransformable returns false, but due to hoisting newSpecies still retains it's old value, which is truthy, causing a duplicate value to be logged.  The loop continue iterating, and every other iteration the value of `newSpecies` is re-assigned.  

// There are a couple aways that we can approach fixing this. Both are different approaches with how `newSpecies` is declared on line 41.  First, inside the loop, you can re-initialize the value of `newSpecies` to undefined. This means that newSpecies will only be assigned to a truthy value dependendent on the conditions that have been specified.  Otherwise, you can also declar `newSpecies` utilizing the `let` keyword, which will make the variable block scoped essentially setting it to `undefined` for each loop.