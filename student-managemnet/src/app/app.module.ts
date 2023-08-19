import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentListComponent } from './office/student-managemnet/student-list/student-list.component';
import { StudentRegisterComponent } from './office/student-managemnet/student-register/student-register.component';
import { StudentManagemnetModule } from './office/student-managemnet/student-managemnet.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,StudentListComponent,StudentRegisterComponent
  ],
  imports: [
    BrowserModule,StudentManagemnetModule, FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
