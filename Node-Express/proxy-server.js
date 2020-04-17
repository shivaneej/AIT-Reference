var express = require('express');
var app = express();
var httpProxy = require('http-proxy'); //will help to write Reverse proxy
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:3001',
    ServerTwo = 'http://localhost:3002',
    ServerThree = 'http://localhost:3003';
 
app.all("/server1/*", (req, res) => {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.all("/server2/*", (req, res) => {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: ServerTwo});
});

app.all("/server3/*", (req, res) => {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: ServerThree});
});

app.listen(3000, () => {
    console.log("Server started");
});
