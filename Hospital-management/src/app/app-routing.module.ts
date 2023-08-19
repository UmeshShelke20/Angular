import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { GetappointmentComponent } from './home/getappointment/getappointment.component';
import { ViewappointmentComponent } from './home/viewappointment/viewappointment.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientmanagerComponent } from './home/patientmanager/patientmanager.component';
import { PatientviewComponent } from './home/patientview/patientview.component';
import { DoctorManagerComponent } from './home/doctor-manager/doctor-manager.component';
const routes: Routes = [{
path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'getapointment',component:PatientmanagerComponent},
{path:'viewapointment',component:PatientviewComponent},
{path:'docconnect',component:DoctorManagerComponent},
{path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{path:'**',component:PageNotFoundComponent}
];
@NgModule({
  declarations:[ 
    HomeComponent,
    GetappointmentComponent,
    ViewappointmentComponent,
    
    PatientmanagerComponent,
    PatientviewComponent,
    PageNotFoundComponent],
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule,CommonModule, FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
