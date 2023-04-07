import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
 
import { HomeComponent } from './pages/home/home.component';
import { HrLoginComponent } from './pages/hr-login/hr-login.component';
import { HrLogoutComponent } from './pages/hr-logout/hr-logout.component';
import { HrRegisterComponent } from './pages/hr-register/hr-register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HrEditComponent } from './pages/hr-edit/hr-edit.component';
import { IfNotLoggedInGuard } from '../Guards/if-not-logged-in.guard';
import { IfLoggedInGuard } from '../Guards/if-logged-in.guard';
 
const routes: Routes = [
    {path:"Home",component:HomeComponent},
    {path:"Login",component:HrLoginComponent,canActivate:[IfLoggedInGuard]},
    {path:"Register",component:HrRegisterComponent,canActivate:[IfLoggedInGuard]},
    {path:"Edit",component:HrEditComponent,canActivate:[IfNotLoggedInGuard]},
    {path:"Logout",component:HrLogoutComponent,canActivate:[IfNotLoggedInGuard]}
];
 
@NgModule({
  declarations: [HomeComponent,HrLoginComponent,HrLogoutComponent,HrRegisterComponent, HrEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class HrHomeModule { } 