import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './shared/common.service';
import { UserFormComponent } from './shared/user-form/user-form.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserMangComponent } from './user-mang/user-mang.component';
import { UserTableComponent } from './shared/user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    LandingPageComponent,
    UserMangComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
