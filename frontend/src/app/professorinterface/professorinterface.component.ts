import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-professorinterface',
  templateUrl: './professorinterface.component.html',
  styleUrls: ['./professorinterface.component.css']
})
export class ProfessorinterfaceComponent implements OnInit {

  professor={
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
  constructor(private ProfileserviceService : ProfileserviceService,private router : Router) { }

  ngOnInit(): void {
    
  }
  Adddata()
  {    
    this.ProfileserviceService.newProfessordata(this.professor);
    console.log("Called");    
    this.router.navigate(['/professorinterface/loginprofessor']);
  }

}
