import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonserviceService } from './common Service/commonservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Register/register/register.component';
import { UpdateComponent } from './Update/update/update.component';
import { ViewComponent } from './View/view/view.component';
import { HomeComponent } from './home/home/home.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,RegisterComponent,ViewComponent,UpdateComponent,NotfoundComponent ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  providers: [CommonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
