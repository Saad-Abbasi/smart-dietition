import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BMIComponent } from './pages/bmi/bmi.component';
import { BreakfastComponent } from './pages/breakfast/breakfast.component';
import { GuidlinesComponent } from './pages/guidlines/guidlines.component';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component'
import { PortionControllComponent } from './pages/portion-controll/portion-controll.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {path : 'home', component :HomeComponent},
  { path: '', component:  LoginComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: SignupComponent},
  {path : 'bmi', component: BMIComponent},
  {path : 'guide', component: GuidlinesComponent},
  {path : 'portion', component: PortionControllComponent},
  {path : 'break-fast', component: BreakfastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
