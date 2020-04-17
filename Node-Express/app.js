//To create server using http module
/*
var http = require("http");
http.createServer((req,res) => {
    res.end("Server using http");
}).listen(3000);
*/

//to create server using express
var express = require('express'); 
var app = express(); 
app.use(express.static('static')) //middleware to use static files stored in the folder 'static'

//middleware for post requests
var bodyParser = require('body-parser'); // Create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/*
app.get(), app.post(), app.put(), app.delete()
/xyz*abc in url : * can be anything
*/
app.get('/',(req, res) => { 
    res.send('Server using express'); 
}) 

app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + "/userlogin.html");
});

app.get('/register.html', (req,res) => {
    res.sendFile(__dirname + "/register.html");
})

//urlencodedParser is the middleware
app.post('/userlogin', urlencodedParser, (req, res) => {
    var email = req.body.userEmail;
    var password = req.body.userPassword;
    console.log("Login " + email);
    res.status(200).send("Welcome "+email);
})

app.post('/userregister', urlencodedParser, (req,res) => {
    var firstName = req.body.userFirstName;
    var lastName = req.body.userLastName;
    var email = req.body.userEmail;
    var contact = req.body.userContact;
    var userDetails = {
        name : firstName + " " + lastName,
        email : email,
        contact : contact
    };
    res.status(200).send(userDetails);
    //res.json(userDetails); For JSON API
})


var server = app.listen(3000, () => { 
    var host = server.address().address ;
    var port = server.address().port; 
    console.log("Example app listening at http://%s:%s", host, port) 
})

//handle 404 errors
app.use((req,res,next) => {
    res.sendFile(__dirname + "/err.html");
})
//OR
app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/err.html");
})

