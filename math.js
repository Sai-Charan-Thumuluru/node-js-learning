// Local modules

const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

// Synchronous callback
const isResultEvenOrOdd = (callback, a, b) => {
    const result = callback(a, b);
    const resultType = (result % 2 === 0) ? 'Even' : 'Odd';
    return `Result: ${result} Type: ${resultType}`;
}

module.exports.add = add;
module.exports.sub = sub;
module.exports.isResultEvenOrOdd = isResultEvenOrOdd;
