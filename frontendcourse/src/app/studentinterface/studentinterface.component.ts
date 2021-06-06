import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-studentinterface',
  templateUrl: './studentinterface.component.html',
  styleUrls: ['./studentinterface.component.css']
})
export class StudentinterfaceComponent implements OnInit {

  student={
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
  constructor(private ProfileserviceService : ProfileserviceService,private router : Router) { }

  ngOnInit(): void {
    
  }
  Adddata()
  {    
    this.ProfileserviceService.newStudentdata(this.student);
    console.log("Called");    
    this.router.navigate(['/studentinterface/loginstudent']);
  }


}
