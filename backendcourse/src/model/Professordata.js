const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/coursemanagement');
const Schema = mongoose.Schema;

var NewProfessorSchema = new Schema({
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
    coursename:String, 
    duration:String,
    description:String,
    aadhar:String
});

var Professordata= mongoose.model('Professordata', NewProfessorSchema);                  

module.exports = Professordata;