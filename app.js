const math = require('./math');
const sc = require('./string-concat');

console.log(sc.add(`Sum from main app module ${math.add(2, 7)}`, `Difference from main app module ${math.sub(2, 7)}`));

let Animal = require('./Animal').animal;
const cow = new Animal('Cow');
console.log(cow.getName()); // Cow
cow.setName('Parrot');
console.log(cow.getName()); // Parrot

Animal = require('./Animal').animal;
const tiger = new Animal('Tiger');
console.log(tiger.getName()); // Tiger

console.log(math.isResultEvenOrOdd(math.add, 3, 4));
console.log(math.isResultEvenOrOdd(math.add, 6, 6));