import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';

@Component({
  selector: 'app-professorprofile',
  templateUrl: './professorprofile.component.html',
  styleUrls: ['./professorprofile.component.css']
})
export class ProfessorprofileComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }
  professor:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
     
      var id = params.get("id");
     //   alert(this.id);
      console.log(id);
       this.ProfileserviceService.getprofessorprofile(id)
       .subscribe(data => {
       this.professor = data;
       console.log(data);
       
     });
        
    });
  }

}
