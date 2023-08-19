import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductComponent } from './components/product/product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentModule } from './Departments/department/department.module';

const routes: Routes = [{path:'',component:HomeComponent,pathMatch:'full'},
{ path:'home',component:HomeComponent},
{ path:'about-us',component:AboutUsComponent},
{ path:'product', component:ProductComponent},
{ path:'dept',loadChildren:()=> import('./Departments/department/department.module').then(m => m.DepartmentModule) },
{ path:'**' ,component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
