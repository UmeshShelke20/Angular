import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserManagerComponent } from './user-manager/user-manager.component';

const routes: Routes = [{path:'',component:LandingPageComponent},
{path:'home',component:LandingPageComponent},
{path:'user-manag', component:UserManagerComponent},
{path:'**',component: LandingPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
