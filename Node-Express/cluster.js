const cluster = require('cluster')
const http = require('http')
const os = require('os')

var numCpu = os.cpus().length;

//Workers are spawned using the fork() method of the child_processes module.

//master process is the process you initiate, which in turn initialize the workers
if (cluster.isMaster)
{
    console.log(`Master ${process.pid} is running`);
    for(let i = 0; i < numCpu; i++)
        cluster.fork();
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
}
else{
    /* Workers can share any TCP connection */
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('process ' + process.pid + ' says hello!');
    }).listen(3000);
    console.log(`Worker ${process.pid} started`);
}