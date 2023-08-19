import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Login/login/login.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'Home',component:HomeComponent},
{path:'Login',component:LoginComponent},

{path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
