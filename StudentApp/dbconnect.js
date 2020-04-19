const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/aitdb';

mongoose.connect(url,{useNewUrlParser: true},(err) => {
    if(err)
        console.log("Mongoose Connection error");
    else
        console.log("DB succesfully connected on URL " + url);
});

mongoose.Promise = global.Promise;
