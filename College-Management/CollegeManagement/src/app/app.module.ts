import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFounddmissComponent } from './home/not-founddmiss/not-founddmiss.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotFounddmissComponent,
    ContactComponent,
    AboutUsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
