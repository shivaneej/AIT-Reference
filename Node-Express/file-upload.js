const express = require('express');
const multer = require('multer');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/fileupload.html");
})
app.post('/file/single',upload.single('singlefile'), async (req,res) => {
    console.log(req.file);
    res.status(200).send("File uploaded");
});

app.post('/file/multiple',upload.array('multiple',10),(req,res)=>{
    console.log(req.files);
    res.status(200).send("Multiple files uploaded");
});

app.listen(3000, () => {
    console.log("Server started");
})