import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BMIComponent } from './pages/bmi/bmi.component';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component'
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {path : 'home', component :HomeComponent},
  { path: '', component:  LoginComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: SignupComponent},
  {path : 'bmi', component: BMIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
