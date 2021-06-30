import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component'
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {path : 'home', component :HomeComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
