const PORT = 6789;
const ADDRESS = '127.0.0.1';

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.bind(PORT,ADDRESS);

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
  });