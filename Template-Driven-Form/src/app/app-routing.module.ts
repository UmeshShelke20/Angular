import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { PagenotfountComponent } from './home/pagenotfount/pagenotfount.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonService } from './common.service';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'**', component:HomeComponent}];

@NgModule({
  declarations:[LoginComponent, PagenotfountComponent, HomeComponent],
  providers:[CommonService],
  imports: [RouterModule.forRoot(routes), CommonModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }