const math = require('./math');
const sc = require('./string-concat');

console.log(sc.add(`Sum from main app module ${math.add(2, 7)}`, `Difference from main app module ${math.sub(2, 7)}`));

// let Animal = require('./Animal').animal;
// const cow = new Animal('Cow');
// console.log(cow.getName());
// cow.setName('Parrot');
// console.log(cow.getName());

// Animal = require('./Animal').animal;
// const tiger = new Animal('Tiger');
// console.log(tiger.getName());

let Animal = require('./Animal').animal;
console.log(Animal.getName()); // Elephant
Animal.setName('Parrot');

Animal = require('./Animal').animal;
console.log(Animal.getName()); // Parrot

// Because of module caching NodeJS remembers the references 