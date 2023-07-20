// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team['ceo'] = 'Kim';
team['scrumMaster'] = 'Alice';
team['developer'] = undefined;

console.log(team);

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team['ceo']}`);
console.log(`Scrum master: ${company.team['scrumMaster']}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000

// The reason why the code returns undefined for when `company.team[ceo]` and `company.team[scrumMaster]` is due to the fact that you cannot use an Object as a key.  What happens when `ceo` and `scrumMaster` are resolved, is that the engine attempts to convert the value being passed as a key to a string.  The value of any object.toString() is `[object Object]`, which means that both `ceo` and `scrumMaster` are resolved to the same value, additionaly there is no value for the key `[object Object]` which is why both return undefined when the engine attemps to resolve them.

// A way to fix this issue to return the expected information is to supply a string value as a key for the `Team` object instead of a variable which shares a name with an object.   