import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginprofessorComponent } from './loginprofessor/loginprofessor.component';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { ProfessorinterfaceComponent } from './professorinterface/professorinterface.component';
import { StudentinterfaceComponent } from './studentinterface/studentinterface.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:'',component:WelcomeComponent},{path:'studentinterface',component:StudentinterfaceComponent},
{path:'professorinterface',component:ProfessorinterfaceComponent},{path:'studentinterface/loginstudent',component:LoginstudentComponent},
{path:'professorinterface/loginprofessor',component:LoginprofessorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
