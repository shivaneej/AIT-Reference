var fs = require('fs');

/*Checking file or directory permissions and if the file exists or not*/

var path = '../Mongoose-CRUD/models'; //directory
// var path = '../README.md' //file
// var path = '../READMEx.md' //invalid file

// checks execute permission
fs.access(path, fs.constants.X_OK, (err) => {
    if (err) {
        console.log("%s doesn't exist", path); //file or directory doesn't exist
    } else {
        console.log('can execute %s', path);
    }
});
// Check if we have read/write permissions
// When specifying multiple permission modes each mode is separated by a pipe : `|`
fs.access(path, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) {
        console.log("%s doesn't exist", path);
    } else {
        console.log('can read/write %s', path);
    }
});

/*Read File line by line*/
const readline = require('readline');
var lineCount = 0;

//create the object that will read from the stream using createInterface() function
const readInterface = readline.createInterface({
    input: fs.createReadStream('../README.md'),
    // output: process.stdout,
    console: false
});
/* whenever the line event occurs in the readInterface it should call function and pass it the content read from the stream */
readInterface.on('line', (line) => {
    console.log(line);
    lineCount++; // number of lines
});

readInterface.on('close', () => {
    console.log("Number of lines " + lineCount);
})

//prompt user input
const prompt = require('prompt-sync')();  

const msg = prompt('Enter message: \n');
console.log("You entered "+msg);