var express = require('express'); 
var app = express(); 
const path = require('path');
require('./dbconnect')

//middleware for post requests
var bodyParser = require('body-parser'); // Create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Import student model
const Student = require('./models/student.model');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Set view engine as EJS
app.engine('ejs', require('ejs').renderFile);

app.get('/',(req, res) => { 
    res.redirect('/studentList'); 
}) 

app.get('/studentList', (req, res) => {
    Student.find({}, (err,data) => {
        if(err) throw err;    
        else res.render('index', { viewTitle: 'Student Records', records: data });
    });
});

app.get('/checkdb',(req,res) => {
    console.log("GET request for all students");
    Student.find({},(err,data) => {
        if(err)
            console.log("Reading students error");
        else{
            res.status(200).send(data);
        }
    });
    console.log("GET request completed");
});



app.get('/studentEdit', (req,res) => {
    var emptyData = {
        fullName: '',
        email: '',
        mobile: '',
        city: ''
    };
    res.render('form', {viewTitle: "Insert Student", student: emptyData, action: "addStudent"});
})

app.get('/studentEdit/:id', (req,res) => {
    const id = req.params.id;
    Student.findById(id,(err,data) => {
        if(err)
            console.log("Reading user error");
        else
            res.render('form', {viewTitle: "Edit Student", student: data, action: "/addStudent/"+id});
    });
})

//urlencodedParser is the middleware
app.post('/addStudent', urlencodedParser, (req, res) => {
    console.log("Post request");
    const newStudent = new Student({
        fullName: req.body.fullName,
        email: req.body.email,
        mobile: req.body.mobile,
        city: req.body.city,
    });
    newStudent.save();
    console.log("Student created");
    res.redirect('/studentList');
})

//Update student by ID
app.post('/addStudent/:id',urlencodedParser,(req,res) => {
    const id = req.params.id;
    console.log("PUT request for student "+id);
    Student.findByIdAndUpdate(id,req.body,(err,data) => {
        if(err)
            console.log("Updating student error");
        else
            res.redirect('/studentList');
    });
    console.log("PUT request completed");
});

//Delete student by id
app.get('/deleteStudent/:id',(req,res) => {
    const id = req.params.id;
    console.log("DELETE request for student "+id);
    Student.findByIdAndDelete(id,(err,data) => {
        if(err)
            console.log("Deleting student error");
        else
            res.redirect('/studentList');
    });
    console.log("DELETE request completed");
});
//Start server
app.listen(3000,()=>{
    console.log("Listening at port 3000");
});


