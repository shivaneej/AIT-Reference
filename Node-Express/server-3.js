var express = require("express");
var app = express();

app.get('/server3',function(req,res) {
    res.send("Hello world From Server 3");
});

app.listen(3003, () => {
    console.log("Server 3 is active");
});