import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-formcourse',
  templateUrl: './formcourse.component.html',
  styleUrls: ['./formcourse.component.css']
})
export class FormcourseComponent implements OnInit {
  form={
    semail:'',
    course:'',
    pemail:''
  }
  constructor(private ProfileserviceService : ProfileserviceService,private router : Router) { }

  ngOnInit(): void {
    
  }
  formdata()
  {    
    this.ProfileserviceService.newcoursedata(this.form);
    console.log("Called");    
    this.router.navigate(['courselist']);
    alert("SUCCESSFULLY APPLIED");
  }

}
