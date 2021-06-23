import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourselistComponent } from './courselist/courselist.component';
import { FormcourseComponent } from './formcourse/formcourse.component';
import { FormmessageComponent } from './formmessage/formmessage.component';
import { LoginprofessorComponent } from './loginprofessor/loginprofessor.component';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { MystudentsComponent } from './mystudents/mystudents.component';
import { ProfessorinterfaceComponent } from './professorinterface/professorinterface.component';
import { ProfessorprofileComponent } from './professorprofile/professorprofile.component';
import { StudentinterfaceComponent } from './studentinterface/studentinterface.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentreqComponent } from './studentreq/studentreq.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [{path:'',component:WelcomeComponent},{path:'studentinterface',component:StudentinterfaceComponent},
{path:'professorinterface',component:ProfessorinterfaceComponent},{path:'studentinterface/loginstudent',component:LoginstudentComponent},
{path:'professorinterface/loginprofessor',component:LoginprofessorComponent},{path:'studentprofile/:id',component:StudentprofileComponent}
,{path:'professorprofile/:id',component:ProfessorprofileComponent},{path: "professorprofile/:id/studentreq", component: StudentreqComponent}, 
{path: "professorprofile/:id/mystudents", component:MystudentsComponent},
{path:'courselist',component:CourselistComponent}
,
// {path:'studentreq',component:StudentreqComponent},
{path:'studentlist',component:StudentlistComponent}
// ,{path:'mystudents',component:MystudentsComponent}
,
{path:'courseform',component:FormcourseComponent},{path:'formmessage',component:FormmessageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
