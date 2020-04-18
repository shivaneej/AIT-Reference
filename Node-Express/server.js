var net = require('net');

// Configuration parameters
var HOST = 'localhost';
var PORT = 3000;

// Create Server instance 
//onClientConnected is a connection listener
var server = net.createServer(onClientConnected);  
server.listen(PORT, HOST, () => {  
  console.log('Server listening on %s', server.address()["address"]+":"+server.address()["port"]);
});
 
function onClientConnected(sock) {  
  var remoteAddress = sock.remoteAddress + ':' + sock.remotePort;
  console.log('New client connected: %s', remoteAddress);
 
  sock.on('data', (data) => {
    console.log('%s Says: %s', remoteAddress, data);
    sock.write(data + " client");
    sock.write(' exit');
  });
  sock.on('close',  function () {
    console.log('Connection from %s closed', remoteAddress);
  });
  sock.on('error', function (err) {
    console.log('Connection %s error: %s', remoteAddress, err.message);
  });
};
