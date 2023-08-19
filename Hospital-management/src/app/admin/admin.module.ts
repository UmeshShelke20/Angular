import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApointmentComponent } from './view/apointment/apointment.component';
import { EditapointmentComponent } from './edit/editapointment/editapointment.component';
import { DoctorComponent } from './add/doctor/doctor.component';
import { AdminhomeComponent } from './home/adminhome/adminhome.component';
import { ConnectionDoctorComponent } from './add/connection-doctor/connection-doctor.component';
import { ApointmentManagerComponent } from './view/apointment-manager/apointment-manager.component';

@NgModule({
  declarations: [
    AdminComponent,
    ApointmentComponent,
    EditapointmentComponent,
    DoctorComponent,
    AdminhomeComponent,
    ConnectionDoctorComponent,
    ApointmentManagerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
