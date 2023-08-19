import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './shared/user-form/user-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserMangComponent } from './user-mang/user-mang.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'user-mang', component: UserMangComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
