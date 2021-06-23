import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProfileserviceService : ProfileserviceService) { }
  coursedata:any;
  ngOnInit(): void {
    this.ProfileserviceService .getcoursedata().subscribe((data)=>{
      this.coursedata=JSON.parse(JSON.stringify(data));
     
    })
  }

}
