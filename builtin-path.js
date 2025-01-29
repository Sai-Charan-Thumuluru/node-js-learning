const path = require('node:path');

console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.extname(__filename));

console.log(path.join("/folder1", "/folder2", path.basename(__filename)));
console.log(path.join("/folder1", "/folder2", "../" + path.basename(__filename)));
console.log(path.join("/folder1", "///folder2", "//" + path.basename(__filename)));

console.log(path.resolve("/folder1", "/folder2", path.basename(__filename)));
console.log(path.resolve("/folder1", "/folder2", "../" + path.basename(__filename)));
console.log(path.resolve("/folder1", "/folder2", "/" + path.basename(__filename)));
console.log(path.resolve("/folder1", "/folder2", "file.js"));
console.log(path.resolve(__dirname, "file.js"));

console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));
console.log(path.isAbsolute(__filename));

