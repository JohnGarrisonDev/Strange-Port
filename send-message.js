var dgram = require('dgram');
var s = dgram.createSocket('udp4');

const PORT = 6789;
const ADDRESS = '127.0.0.1';

s.on('message',function(msg,info){
    console.log('Data received from client : ' + msg.toString());
    console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
});

s.connect(PORT,ADDRESS, () =>{
    s.send(Buffer.from('GET test'));
});