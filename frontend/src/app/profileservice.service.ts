import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {
  studentdata={
    firstname:'',
    lastname:'',
    parentname:'',
    email:'',
    gender:'',
    number1:'',
    number2:'',
    housename:'',
    street:'',
    city:'',
    district:'',
    pincode:'',
    state:'',
    country:'',
    qualification:'',
    collegename:'',
    city2:'',
    id:''
  }
  professordata={
    firstname:'',
    lastname:'',
    parentname:'',
    email:'',
    gender:'',
    number1:'',
    number2:'',
    housename:'',
    street:'',
    city:'',
    district:'',
    pincode:'',
    state:'',
    country:'',
    qualification:'',
    aadhar:'',
    coursename:'',
    duration:'',
    description:''
  }
  ustudent={
    uname:' ',
    password:' '
  }
  uprofessor={
    uname:' ',
    password:' '
  }
  formdata={
    name:'',
    course:'',
    proname:''
  }
  constructor(private http:HttpClient) { }
  newStudentdata(studentdata:any)
  {   
    return this.http.post("http://localhost:3800/insert",{"Studentdata":studentdata})
    .subscribe(data =>{console.log(data)})
  }
  newProfessordata(professordata:any)
  {   
    return this.http.post("http://localhost:3800/insertprofessor",{"Professordata":professordata})
    .subscribe(data =>{console.log(data)})
  }
  newustudentcheck(ustudent:any){
    return this.http.post<any>("http://localhost:3800/ustudentcheck",{"ustudentcheck":ustudent})  
  }
  newprofessorcheck(uprofessor:any){
    return this.http.post<any>("http://localhost:3800/uprofessorcheck",{"uprofessorcheck":uprofessor}) 
  }
  getstudentprofile(id:any){
    return this.http.get<any>("http://localhost:3800/studentprofile/"+id);
  }
  getprofessorprofile(id:any){
    return this.http.get<any>("http://localhost:3800/professorprofile/"+id);
  }
  getcoursedata(){
    return this.http.get<any>("http://localhost:3800/coursedata");
  }
  getstudentdata(){
    return this.http.get<any>("http://localhost:3800/studentdata");
  }
  getreqstudentdata(id:any){
    return this.http.get<any>("http://localhost:3800/reqstudentdata/"+id);
  }
  newcoursedata(formdata:any)
  {   
    return this.http.post("http://localhost:3800/courseform",{"formdata":formdata})
    .subscribe(data =>{console.log(data)})
  }
  newmsgdata(formdata:any)
  {   
    return this.http.post("http://localhost:3800/msgform",{"formdata":formdata})
    .subscribe(data =>{console.log(data)})
  }
}
