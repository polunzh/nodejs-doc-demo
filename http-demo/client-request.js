const http = require('http');

const req = http.request({
  port: 3000,
  host: 'localhost',
  method: 'GET',
  path: '/ws',
});

http.maxHeaderSize = 1;

req.end();

req.on('response', res => {
  console.log('--- Headers ---');
  console.log(
    'local socket addres & port:',
    res.socket.localAddress,
    res.socket.localPort
  );
  console.log('rawTrailers:', res.rawTrailers);
  console.log('rawHeaders:', res.rawHeaders);
  console.log('headers:', res.headers);
  console.log('httpVersion:', res.httpVersion);
  console.log('httpVersionMajor:', res.httpVersionMajor);
  console.log('httpVersionMinor:', res.httpVersionMinor);
  console.log('status & message:', res.statusCode, res.statusMessage);
  console.log('--- Headers End ---');
  // console.log('url', res.url); // 不懂
  console.log('globalAgent:',http.globalAgent);
  // console.log('--- METHODS ---');
  // console.log(http.METHODS);
  // console.log('--- STATUS_CODES ---');
  // console.log(http.STATUS_CODES);
  res.on('data', data => console.log(data.toString()));
  res.on('close', () => console.log('closed'));
  res.on('aborted', () => console.log('aborted'));
});

req.on('information', info => {
  console.log('> this information event:');
  console.log(info);
});

req.on('continue', info => {
  console.log('> this continue event:');
  console.log(info);
});
