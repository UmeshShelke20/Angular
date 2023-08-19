import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FileuploadComponent } from './UploadCompoent/fileupload/fileupload.component';
import { GetAllFilesComponent } from './GetFiles/get-all-files/get-all-files.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FileuploadComponent,
    GetAllFilesComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
