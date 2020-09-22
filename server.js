const PORT = 6789;
const ADDRESS = '127.0.0.1';

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const dict = {
  test: 'this is a test',
  tester:'this is also a test'
};

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.on('connect', () => {
  console.log(`Server Connection Established`);
});

server.on('message',(msg,info) => {
  console.log(`Message Recieved ${msg.toString()} from ${info} on ${info.port}`);
  resolveRequest(msg,info);
});
server.bind(PORT,ADDRESS);
/* 
 *
--REQUESTS--  
 * 
*/

const resolveRequest = function(msg,info){
  
  const req = msg.toString().split(' ');
  const type = req[0];
  const word = req[1];
  console.log(req);

  if (type=='GET'){
    if (dict[word]!= null){
      server.send(dict[word], info.port);
    }
    else{
      server.send('Definition not found', info.port, function(){
        console.log('response sent')
      });
    }
  }
} 
