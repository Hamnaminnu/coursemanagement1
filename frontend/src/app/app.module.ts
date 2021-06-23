import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentinterfaceComponent } from './studentinterface/studentinterface.component';
import { ProfessorinterfaceComponent } from './professorinterface/professorinterface.component';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { LoginprofessorComponent } from './loginprofessor/loginprofessor.component';
import { FooterComponent } from './footer/footer.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { ProfessorprofileComponent } from './professorprofile/professorprofile.component';
import { CourselistComponent } from './courselist/courselist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { MystudentsComponent } from './mystudents/mystudents.component';
import { MyapplicationsComponent } from './myapplications/myapplications.component';
import { StudentreqComponent } from './studentreq/studentreq.component';
import { FormcourseComponent } from './formcourse/formcourse.component';
import { FormmessageComponent } from './formmessage/formmessage.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StudentinterfaceComponent,
    ProfessorinterfaceComponent,
    LoginstudentComponent,
    LoginprofessorComponent,
    FooterComponent,
    StudentprofileComponent,
    ProfessorprofileComponent,
    CourselistComponent,
    StudentlistComponent,
    MystudentsComponent,
    MyapplicationsComponent,
    StudentreqComponent,
    FormcourseComponent,
    FormmessageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
