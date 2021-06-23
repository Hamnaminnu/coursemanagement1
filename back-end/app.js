const express = require('express');
var Studentdata = require('./src/model/Studentdata');
var Professordata = require('./src/model/Professordata');
var courseformdata = require('./src/model/coursedata');
var msgformdata = require('./src/model/msg');
const cors = require('cors');
var bodyparser= require('body-parser');
var app = new express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
// CANDIDATE 

app.post('/insert',function(req,res){
   
    console.log(req.body);
   
    var Student = {       
    firstname : req.body.Studentdata.firstname,
    lastname : req.body.Studentdata.lastname,
    parentname: req.body.Studentdata.parentname,
    email: req.body.Studentdata.email,
    gender: req.body.Studentdata.gender,
    number1: req.body.Studentdata.number1,
    number2: req.body.Studentdata.number2,
    housename: req.body.Studentdata.housename,
    street: req.body.Studentdata.street,
    city: req.body.Studentdata.city,
    district: req.body.Studentdata.district,
    pincode: req.body.Studentdata.pincode,
    state: req.body.Studentdata.state,
    country: req.body.Studentdata.country,
    qualification: req.body.Studentdata.qualification,
    collegename: req.body.Studentdata.collegename,
    city2: req.body.Studentdata.city2,
    id: req.body.Studentdata.id
   }       
   var Student = new Studentdata(Student);
   Student.save();
});

app.post('/insertprofessor',function(req,res){
   
    console.log(req.body);
   
    var Professor = {       
    firstname : req.body.Professordata.firstname,
    lastname : req.body.Professordata.lastname,
    parentname: req.body.Professordata.parentname,
    email: req.body.Professordata.email,
    gender: req.body.Professordata.gender,
    number1: req.body.Professordata.number1,
    number2: req.body.Professordata.number2,
    housename: req.body.Professordata.housename,
    street: req.body.Professordata.street,
    city: req.body.Professordata.city,
    district: req.body.Professordata.district,
    pincode: req.body.Professordata.pincode,
    state: req.body.Professordata.state,
    country: req.body.Professordata.country,
    qualification: req.body.Professordata.qualification,
    coursename: req.body.Professordata.coursename,
    duration: req.body.Professordata.duration,
    description: req.body.Professordata.description,
    aadhar: req.body.Professordata.aadhar
   }       
   var Professor= new Professordata(Professor);
   Professor.save();
});
app.post('/ustudentcheck',function(req,res){
   
    console.log(req.body);
    const name = req.body.ustudentcheck.uname;
    const upsw = req.body.ustudentcheck.password;
    Studentdata.findOne({email:name,number1:upsw})
    .then(ustudentcheck=>{
        if(ustudentcheck){
            let id = ustudentcheck._id;
            let message = "Success";
            res.status(200).send({id, message});
        }
        else{
            console.log("Wrong credentials");
            let message = "Failed"
            res.status(200).send({message});
        }
    })
    
});
app.post('/uprofessorcheck',function(req,res){
    console.log(req.body);
    const name = req.body.uprofessorcheck.uname;
    const upsw = req.body.uprofessorcheck.password;
    Professordata.findOne({email:name,number1:upsw})
    .then(uprofessorcheck=>{
        if(uprofessorcheck){
            let id = uprofessorcheck._id;
            let message = "Success";
            res.status(200).send({id, message});
        }
        else{
            console.log("Wrong credentials");
            let message = "Failed"
            res.status(200).send({message});
        }
    })
    //     , function(err, result) {
    //     if (result){
    //     let message="success" 
    //     res.status(200).send({message});
    //     }
    //     else {
    //         let message="fail" 
    //     res.status(200).send({message});
    //     }
    //   });
    
});
app.get("/studentprofile/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;

    const id2 = id.substring(1);
    // console.log(id2);
    Studentdata.findOne({_id : id2})
    .then(function(student){

        res.send(student);
        
    });

});
app.get("/professorprofile/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;
    console.log(id);
    const id2 = id.substring(1);
    // console.log(id2);
    Professordata.findOne({_id : id2})
    .then(function(professor){
        console.log(professor);
        res.send(professor);
        
    });

});

app.get('/coursedata',function(req,res){
    
    Professordata.find()
                .then(function(Professordata){
                    res.send(Professordata);
                });
});
app.get('/studentdata',function(req,res){
    
    Studentdata.find()
                .then(function(Studentdata){
                    res.send(Studentdata);
                });
});
app.post('/courseform',function(req,res){
   
    console.log(req.body);
   
    var coursedata = {       
    semail: req.body.formdata.semail,
    coursename: req.body.formdata.course,
    pemail: req.body.formdata.pemail,
   }       
   var coursedata= new courseformdata(coursedata);
   coursedata.save();
});
app.post('/msgform',function(req,res){
   
    console.log(req.body);
   
    var msgdata = {       
    name : req.body.formdata.name,
    msg: req.body.formdata.msg,
    professorname: req.body.formdata.proname,
   }       
   var msgdata= new msgformdata(msgdata);
   msgdata.save();
});

app.get("/reqstudentdata/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;
    console.log(id);
    const id2 = id.substring(1);
    // console.log(id2);
    Professordata.findOne({_id : id2})
    .then(function(professor){
        courseformdata.findOne({pemail : professor.email})
    .then(function(studentdata){
        Studentdata.find({email: studentdata.semail})
        .then(function(data){
            res.send(data);
            console.log(data);
        });    
    });
    });

});

app.listen(3800, function(){
    console.log('listening to port 3800');
}); 

