import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { ProductionComponent } from '../production/production.component';
import { QualityComponent } from '../quality/quality.component';
import { DepartmentPageNotFoundComponent } from '../department-page-not-found/department-page-not-found.component';
import { HumanResourcesComponent } from '../human-resources/human-resources.component';
import { PurchaseComponent } from '../purchase/purchase.component';
import { StoreComponent } from '../purchase/store/store.component';
import { OrdersComponent } from '../purchase/orders/orders.component';
const comp:Routes=[{path:'', component:DepartmentComponent,pathMatch:'full'},
{path:'depthomepage', component:DepartmentComponent},
{path:'production', component:ProductionComponent},
{path:'quality', component:QualityComponent},
{path:'Hr',component:HumanResourcesComponent},
{path:'purchase',component:PurchaseComponent,
children:[
  {
    path:'', component:OrdersComponent
  },
  {
    path:'orders', component:OrdersComponent
  },
  {
    path:'store', component:StoreComponent
  },
  {
    path:'**', component:OrdersComponent
  }
]
},
{path:'**', component:DepartmentPageNotFoundComponent}
]
// console.log(comp);

@NgModule({
  declarations: [DepartmentComponent,
    ProductionComponent,
     QualityComponent,
     DepartmentPageNotFoundComponent,
     HumanResourcesComponent,PurchaseComponent,StoreComponent,OrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(comp)
  ]
})
export class DepartmentModule {
  
 }
