// import modules
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const url = 'mongodb://localhost:27017/aitdb';
/*
useNewUrlParser is the flag for using new URL string parser instead of current (deprecated) one
*/
mongoose.connect(url,{useNewUrlParser: true},(err)=>{
    if(err)
        console.log("Mongoose Connection error");
    else
        console.log("DB succesfully connected on URL " + url);
});

mongoose.Promise = global.Promise;
/*
If we want to use mongoose in different position inside the codes it must be viewed as global mode
that's why we need to set mongoose as 
mongoose.Promise = global.Promise
*/

//Import user model
const User = require('./models/user');

//Middlewares
const urlencodedParser = bodyParser.urlencoded({extended:false});  // for form data
const jsonParser = bodyParser.json();  // for json data (eg api's)


//Routes
//Add a new user
app.post('/users',urlencodedParser,(req,res) => {
    console.log("Post request");
    // const new_user = new User(req.body);
    //OR
    const new_user = new User({
        name: req.body.name,
        age: req.body.age
    });
    new_user.save();
    res.sendStatus(200);
    console.log("User registered");
});

//Get all users
app.get('/users',(req,res) => {
    console.log("GET request for all users");
    User.find({},(err,data) => {
        if(err)
            console.log("Reading users error");
        else{
            res.status(200).send(data);
        }
    });
    console.log("GET request completed");
});

//GET user by ID
app.get('/users/:id',(req,res)=>{
    const id = req.params.id; //req.body for POST request and req.params for parameter in url else req.query
    console.log("GET request for single user with ID "+id);
    User.findById(id,(err,data) => {
        if(err)
            console.log("Reading user error");
        else
            res.status(200).send(data); 
    });
    console.log("GET request for single user completed");
});

//Update user by ID
app.put('/users/:id',urlencodedParser,(req,res) => {
    const id = req.params.id;
    console.log("PUT request for user "+id);
    User.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err)
            console.log("Updating user error");
        else
            res.status(200).send(data);
    });
    console.log("PUT request completed");
});

//Delete user by id
app.delete('/users/:id',(req,res) => {
    const id = req.params.id;
    console.log("DELETE request for user "+id);
    User.findByIdAndDelete(id,(err,data)=>{
        if(err)
            console.log("Deleting user error");
        else
            res.status(200).send(data);
    });
    console.log("DELETE request completed");
});

//Start server
app.listen(3000,()=>{
    console.log("Listening at port 3000");
});