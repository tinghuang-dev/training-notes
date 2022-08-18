const user = require("./user");
const { getName, getLocation, dateOfBirth } = require("./user"); // destructuring assignment

console.log(`User: ${user.getName()}`);

console.log(
  `${getName()} lives in ${getLocation()} and was born on ${dateOfBirth}`
);

// require a module.exports class

const User = require("./classUser");
const Ting = new User("Ting", 37, "ting@example.com");

console.log(Ting);
console.log(Ting.getUserStates());

// we can see the value of the modlue and find an exports property
// the exports property returns object
console.log(module);

// lets see if we add something to exports property
exports.foo = "foo";
exports.test = { test: "text" };
console.log(module);

// you can see the exports property return an object {foo:"foo", test: {test:"test"}}
// the key of returned objet is the function/variable name and the value is wahtever you put in
