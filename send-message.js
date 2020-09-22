var dgram = require('dgram');
var s = dgram.createSocket('udp4');


s.send(Buffer.from('Hello World'), 6789, 'localhost', () =>{
    s.close();
}); 