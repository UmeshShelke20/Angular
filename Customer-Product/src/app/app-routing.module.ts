import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './Register/register/register.component';
import { ViewComponent } from './View/view/view.component';
import { UpdateComponent } from './Update/update/update.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { ProductModule } from 'src/app/Product Section/product/product.module';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'view',component:ViewComponent},
  {path:'upadte/:id',component:UpdateComponent},
  {path:'Product-Section',loadChildren:()=>import('src/app/Product Section/product/product.module').then(m=>m.ProductModule)},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
