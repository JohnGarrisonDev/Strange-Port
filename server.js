const PORT = 6789;
const ADDRESS = '127.0.0.1';

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.on('connect', () => {
  console.log(`Server Connection Established`);
});

server.on('message',(msg) => {
  console.log(`Message Recieved ${msg.toString()}`)
});
server.bind(PORT,ADDRESS);
