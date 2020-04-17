const express = require('express')
const bodyParser = require('body-parser')
const alert = require('alert-node');//to send alert

const urlEncodedParser = bodyParser.urlencoded({extended : false});

const app = express();

const validAge = (req, res, next) => {
    console.log(req.body.userAge);
    if(req.body.userAge >= 0 && req.body.userAge <= 120)
        next();
    else
        res.status(422).send("Invalid Age");
}
app.get('/', (req,res) => {
    res.sendFile(__dirname + "/validate-age.html");
})

app.post('/validate', [urlEncodedParser, validAge], (req, res) => {
    alert('Valid'); //to display alert box (not needed)
    res.status(200).send("Valid Age");
})

app.listen(3000, () => {
    console.log("Server started");
})