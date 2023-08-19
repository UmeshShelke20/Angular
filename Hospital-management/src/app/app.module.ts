import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorManagerComponent } from './home/doctor-manager/doctor-manager.component';
import { DoctorlistComponent } from './home/doctorlist/doctorlist.component';
@NgModule({
  declarations: [
    AppComponent,
    DoctorManagerComponent,
    DoctorlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
