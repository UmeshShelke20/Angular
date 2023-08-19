import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes ,} from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { UpdateComponent } from './Components/update/update.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { DeleteStudentComponent } from './Component/delete-student/delete-student.component';
import { ViewStudentComponent } from './Component/view-student/view-student.component';
import { AddStudentComponent } from './Component/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './common.service';
import { HomeComponent } from './Component/home/home.component';
import { ChangeComponent } from './Component/change/change.component';

const appRoutes:Routes =[
{path:'',component:HomeComponent},  
{path:'home',component:HomeComponent},
{path:'update/change', component:ChangeComponent},
{path:'add', component:AddStudentComponent},
{path:'update', component:UpdateComponent},
{path:'delete', component:DeleteStudentComponent},
{path:'view', component:ViewStudentComponent},
{path:'**',component:NotFoundComponent}]

@NgModule({
  declarations: [
    FormComponent,
    UpdateComponent,
    NotFoundComponent,
    AddStudentComponent,
    DeleteStudentComponent,
    ViewStudentComponent,
    HomeComponent,ChangeComponent
    
  ],
  providers: [CommonService],
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
]
})
export class AppRoutingModule { }
