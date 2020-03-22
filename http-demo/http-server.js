const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Set-Cookie', ['foo=name']);
  console.log('header names: ', res.getHeaderNames());
  const headers = res.getHeaders();
  console.log(headers);
  headers['set-cookie'][0] = 'animal=dog';
  res.writeHead(200, { 'Content-Type': 'text/html' });
  console.log(
    'socket info',
    res.socket.remoteFamily,
    res.socket.remoteAddress,
    res.socket.remotePort
  );
  res.end();
});

server.on('connection', () => console.log('connection event...'));

server.on('clientError', (err, socket) => {
  console.log('clientError', err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3000);
