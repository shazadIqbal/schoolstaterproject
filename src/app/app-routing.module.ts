import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { AddStudentComponent } from './add-student/add-student.component';



const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'signup/:id', component: SignupFormComponent },
  { path: 'dashboard', component: DashboardMainComponent },
  { path: 'addstudent', component: AddStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
