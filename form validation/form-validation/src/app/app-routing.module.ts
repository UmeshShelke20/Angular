import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';

const routes: Routes = [{path:'', component:ParentComponent},
{path:'home',component:ParentComponent},
{path:'login',component:ChildComponent},
{path:"**", component:ParentComponent}
];

@NgModule({
  declarations:[ParentComponent,
    ChildComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
