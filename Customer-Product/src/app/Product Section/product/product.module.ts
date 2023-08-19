import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagerComponent } from '../product-manager/product-manager.component';
import { ViewproductComponent } from '../view product/viewproduct/viewproduct.component';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { NotfoundComponent } from 'src/app/notfound/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [ 
  {path:'',component:ProductManagerComponent},
  {path:'productHome',component:ProductManagerComponent},
  {path:'viewproduct',component:ViewproductComponent},
  {path:'update/:id',component:ProductUpdateComponent},
  {path:'**',component:NotfoundComponent}
];

console.log("Product Section Wellcome ");

@NgModule({
  declarations: [
    ProductManagerComponent,ViewproductComponent,ProductUpdateComponent
  ],
  imports: [
  CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ProductModule { }
