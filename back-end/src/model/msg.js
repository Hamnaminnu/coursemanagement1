const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/coursemanagement');
const Schema = mongoose.Schema;

var NewmsgformSchema = new Schema({
    name:String,
    msg:String, 
    professorname:String
});

var msgformdata= mongoose.model('msgformdata', NewmsgformSchema);                  

module.exports = msgformdata;