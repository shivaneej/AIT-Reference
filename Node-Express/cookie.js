const express = require('express');
const cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/setCookie/:value', (req,res) => {
    console.log("Set cookie request with value " + req.params.value);
    res.cookie('cookieName', req.params.value).send('Cookie Set');
})

app.get('/getCookie', (req, res) => {
    res.send(req.cookies);
})

app.listen(3000, () => {
    console.log("Server started");
})
