import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './Homepage/home/home.component';
import { AboutusComponent } from './Homepage/aboutus/aboutus.component';
import { JobComponent } from './Homepage/job/job.component';
import { InquiryComponent } from './Homepage/inquiry/inquiry.component';
import { FAQsComponent } from './Homepage/faqs/faqs.component';
import { LoginComponent } from './Homepage/login/login.component';
import { MissionComponent } from './Homepage/home/mission/mission.component';
import { GoalsComponent } from './Homepage/home/goals/goals.component';
import { DirectivesComponent } from './Homepage/home/directives/directives.component';
import { NavbarComponent } from './Homepage/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    JobComponent,
    InquiryComponent,
    FAQsComponent,
    LoginComponent,
    MissionComponent,
    GoalsComponent,
    DirectivesComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
