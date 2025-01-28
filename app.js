const math = require('./math');
const sc = require('./string-concat');

console.log(sc.add(`Sum from main app module ${math.add(2, 7)}`, `Difference from main app module ${math.sub(2, 7)}`));