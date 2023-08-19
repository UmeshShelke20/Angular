import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ApointmentComponent } from './view/apointment/apointment.component';
import { DoctorComponent } from './add/doctor/doctor.component';
import { EditapointmentComponent } from './edit/editapointment/editapointment.component';
import { AdminhomeComponent } from './home/adminhome/adminhome.component';
import { ConnectionDoctorComponent } from './add/connection-doctor/connection-doctor.component';
import { ApointmentManagerComponent } from './view/apointment-manager/apointment-manager.component';

const routes: Routes = [{ path: '', component: AdminComponent }
,
{path:'adminhome',component:AdminhomeComponent},
{
  path:'viewpatients',component:ApointmentManagerComponent
},{
  path:'adddoctor',component:ConnectionDoctorComponent
},
{
  path:'edit',component:EditapointmentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
