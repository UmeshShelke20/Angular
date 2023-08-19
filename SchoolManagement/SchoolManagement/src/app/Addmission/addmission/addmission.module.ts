import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddmissionComponent } from './addmission.component';
import { RouterModule,Routes } from '@angular/router';
import { NotFounddmissComponent } from 'src/app/home/not-founddmiss/not-founddmiss.component';
import { AddComponent } from '../registration/add/add.component';
import { ViewComponent } from '../view/view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationmanagerComponent } from 'src/app/registration/registrationmanager/registrationmanager.component';
import { ViewmanagerComponent } from '../registration/view/viewmanager/viewmanager.component';
import { UpdateallComponent } from 'src/app/update/updateall/updateall.component';
import { AddstudentComponent } from 'src/app/update/addstudent/addstudent.component';
import { NewstudentComponent } from 'src/app/update/newstudent/newstudent.component';
import { NewclassComponent } from 'src/app/AddNewClass/newclass/newclass.component';

const routes: Routes = [
  {path:'',component:AddmissionComponent,pathMatch:'full'},
  {path:'addmission',component:AddmissionComponent,children:[
    {path:'add',component:RegistrationmanagerComponent},
    {path:'view',component:ViewmanagerComponent},
    {path:'update',component:UpdateallComponent},
    {path:'addstudent/:id',component:AddstudentComponent,children:[
      {path:'new',component:NewstudentComponent},
    ]},
    {path:'addnewclass', component:NewclassComponent}
  ]},
  {path:'**',component:NotFounddmissComponent}
 ]
console.log("addmission Load");
@NgModule({
  declarations: [
    AddmissionComponent,
    AddComponent,
    ViewComponent,
    RegistrationmanagerComponent,
    ViewmanagerComponent,
    UpdateallComponent,AddstudentComponent,NewclassComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),ReactiveFormsModule,FormsModule
  ],exports:[
    RouterModule
  ]
})
export class AddmissionModule {}
