import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../app/material/material.module';
import { FlexModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BMIComponent } from './pages/bmi/bmi.component';
import { GuidlinesComponent } from './pages/guidlines/guidlines.component';
import { PortionControllComponent } from './pages/portion-controll/portion-controll.component';
import { BreakfastComponent } from './pages/breakfast/breakfast.component';
import { LunchComponent } from './pages/lunch/lunch.component';
import { DinnerComponent } from './pages/dinner/dinner.component';
import { DailyReportComponent } from './pages/daily-report/daily-report.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    BMIComponent,
    GuidlinesComponent,
    PortionControllComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    DailyReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexModule ,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
