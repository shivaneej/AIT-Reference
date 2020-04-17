const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
name: {
    type: String,
    required: true
},
age: String,
id: Schema.ObjectId,
});
/*
String, Number, Date, Boolean, Buffer, ObjectId, Mixed, Array are valid data types in MongoDB Schema
More information https://www.oreilly.com/library/view/mongoose-for-application/9781782168195/ch03s02.html

MongoDB doesn't allow to define any random field as the primary key
the _id field MUST exist for all standard documents
It doesn't make sense to create a separate uuid field
In mongoose, the ObjectId type is used not to create a new uuid, 
rather it is mostly used to reference other documents.
*/

module.exports = mongoose.model('user', userSchema, 'users');

/*
When you call mongoose.model() on a schema, Mongoose compiles a model for you.
The first argument is the singular name of the collection your model is for. 
Mongoose automatically looks for the plural, lowercased version of your model name. 
You can provide explicit collection name (example, 'users' in the above case) 
*/