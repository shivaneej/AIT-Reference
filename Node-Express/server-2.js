var express = require("express");
var app = express();

app.get('/server2',function(req,res) {
    res.send("Hello world From Server 2");
});

app.listen(3002, () => {
    console.log("Server 2 is active");
});