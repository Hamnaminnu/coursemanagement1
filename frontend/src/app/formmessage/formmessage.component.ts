import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-formmessage',
  templateUrl: './formmessage.component.html',
  styleUrls: ['./formmessage.component.css']
})
export class FormmessageComponent implements OnInit {
  form={
    name:'',
    msg:'',
    proname:''
  }
  constructor(private ProfileserviceService : ProfileserviceService,private router : Router) { }

  ngOnInit(): void {
  }
  formdata()
  {    
    this.ProfileserviceService.newmsgdata(this.form);
    console.log("Called");    
    this.router.navigate(['mystudents']);
    alert("DONE");
  }

}
