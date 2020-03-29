const fs = require('fs');

setTimeout(() => console.log('outer setTimeout...'), 0);
setImmediate(() => console.log('outer setImmediate...'), 0);

fs.readFile('../package.json', () => {
  // 在 IO 回调中, 永远是 setImmediate 先执行
  setTimeout(() => console.log('setTimeout...'), 0);
  setImmediate(() => console.log('setImmediate...'), 0);
});
