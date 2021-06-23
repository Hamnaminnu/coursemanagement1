const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/coursemanagement');
const Schema = mongoose.Schema;

var NewStudentSchema = new Schema({
    firstname:String,
    lastname:String,
    parentname:String,
    email:String,
    gender:String,
    number1:String,
    number2:String,
    housename:String,
    street:String,
    city:String,
    district:String,
    pincode:String,
    state:String,
    country:String,
    qualification:String,
    collegename:String,
    city2:String,
    id:String
});

var Studentdata = mongoose.model('Studentdata', NewStudentSchema);                  

module.exports = Studentdata;