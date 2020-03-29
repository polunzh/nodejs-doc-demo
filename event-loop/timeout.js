const fs = require('fs');

const someAsyncOperation = callback => {
  fs.readFile('../package.json', callback);
};

const timeoutScheduled = console.time();

setTimeout(() => {
  console.timeEnd(timeoutScheduled);
}, 100);

someAsyncOperation((err, data) => {
  const startCallback = Date.now();
  console.log('read...');

  while (Date.now() - startCallback < 10);
});
