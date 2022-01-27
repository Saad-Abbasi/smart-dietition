import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BMIComponent } from './pages/bmi/bmi.component';
import { BmrComponent } from './pages/bmr/bmr.component';
import { BreakfastComponent } from './pages/breakfast/breakfast.component';
import { DailyReportComponent } from './pages/daily-report/daily-report.component';
import { DinnerComponent } from './pages/dinner/dinner.component';
import { ESnacksComponent } from './pages/e-snacks/e-snacks.component';
import { GuidlinesComponent } from './pages/guidlines/guidlines.component';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component'
import { LunchComponent } from './pages/lunch/lunch.component';
import { MSnacksComponent } from './pages/m-snacks/m-snacks.component';
import { MobileNavComponent } from './pages/mobile-nav/mobile-nav.component';
import { PortionControllComponent } from './pages/portion-controll/portion-controll.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TimerComponentComponent } from './pages/timer-component/timer-component.component';


const routes: Routes = [
  // {path : 'home', component :HomeComponent},
  // // { path: '', component:  LoginComponent},

  // {path : 'login', component: LoginComponent},
  // {path : 'register', component: SignupComponent},
  // {path : 'bmi', component: BMIComponent},
  // {path : 'guide', component: GuidlinesComponent},
  // {path : 'portion', component: PortionControllComponent},
  // {path : 'break-fast', component: BreakfastComponent},
  // {path : 'm-snacks', component: MSnacksComponent},
  // {path : 'lunch', component: LunchComponent},
  // {path : 'e-snacks', component: ESnacksComponent},
  // {path : 'dinner', component: DinnerComponent},
  // {path : 'report', component: DailyReportComponent},
  // {path : 'timer', component: TimerComponentComponent},
  // {path : 'bmr', component: BmrComponent},
  {path : 'tab', component: MobileNavComponent},
  {path : '', component: MobileNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
