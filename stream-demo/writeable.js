const fs = require('fs');

const stream = fs.createWriteStream('./demo.txt');
stream.write('zhang');
stream.cork();
console.log(stream.writableCorked);
stream.end();