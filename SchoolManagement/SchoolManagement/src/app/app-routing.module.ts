import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFounddmissComponent } from './home/not-founddmiss/not-founddmiss.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ContactComponent } from './home/contact/contact.component';

const routes: Routes = [ 
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact',component:ContactComponent},
  {path:'addmission',loadChildren:()=>import('./Addmission/addmission/addmission.module').then(m=>m.AddmissionModule)},
  {path:'**',component:NotFounddmissComponent}
];

@NgModule({
  declarations:[HomeComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
