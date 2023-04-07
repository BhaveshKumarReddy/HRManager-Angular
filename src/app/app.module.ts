import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';

import { HrHomeModule } from './HrHome/hr-home.module';
import { EmployeesModule } from './Employees/employees.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationServicesService } from './services/LocationServices/location-services.service';
import { HrService } from './services/HrServices/hr.service';

//import { HomeComponent } from './HrHome/pages/home/home.component';
// import { HrLoginComponent } from './HrHome/pages/hr-login/hr-login.component';
// import { HrRegisterComponent } from './HrHome/pages/hr-register/hr-register.component';
// import { HrLogoutComponent } from './HrHome/pages/hr-logout/hr-logout.component';
 
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // HrLoginComponent,
    // HrRegisterComponent,
    // HrLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    HrHomeModule,
    //HttpClientModule
  ],
  providers: [LocationServicesService, HrService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
