const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/coursemanagement');
const Schema = mongoose.Schema;

var NewcourseformSchema = new Schema({
   semail:String,
    coursename:String, 
    pemail:String
});

var courseformdata= mongoose.model('courseformdata', NewcourseformSchema);                  

module.exports = courseformdata;