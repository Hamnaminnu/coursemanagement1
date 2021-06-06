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


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StudentinterfaceComponent,
    ProfessorinterfaceComponent,
    LoginstudentComponent,
    LoginprofessorComponent
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