import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';
@Component({
  selector: 'app-studentreq',
  templateUrl: './studentreq.component.html',
  styleUrls: ['./studentreq.component.css']
})
export class StudentreqComponent implements OnInit {
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }
  studentdata:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
     
      var id = params.get("id");
     //   alert(this.id);
      console.log(id);
    
       this.ProfileserviceService.getreqstudentdata(id)
       .subscribe(data => {
        this.studentdata=JSON.parse(JSON.stringify(data));
       console.log(data);
       
     });
        
    });
  }
}
