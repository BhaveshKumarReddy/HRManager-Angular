import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
 
import { DisplayEmployeesComponent } from './pages/DisplayEmployees/display-employees.component';
import { OpenEmployeeComponent } from './pages/OpenEmployee/open-employee.component';
import { FireEmployeeComponent } from './pages/children/fire-employee/fire-employee.component';
import { TransferEmployeeComponent } from './pages/children/transfer-employee/transfer-employee.component';
import { EditEmployeeComponent } from './pages/children/edit-employee/edit-employee.component';
import { IncrementSalaryComponent } from './pages/children/increment-salary/increment-salary.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { IfNotLoggedInGuard } from '../Guards/if-not-logged-in.guard';
import {  FilterByX } from '../Pipes/EmployeePipe';
 
const routes: Routes = [
  {   path: 'employee',   component: DisplayEmployeesComponent, canActivate:[IfNotLoggedInGuard]   },
  {   path: 'employee/add',   component: AddEmployeeComponent, canActivate:[IfNotLoggedInGuard]  },
  {   path: 'employee/display',   component: DisplayEmployeesComponent, canActivate:[IfNotLoggedInGuard]  },
  {   path: 'employee/open/:id',   component: OpenEmployeeComponent, canActivate:[IfNotLoggedInGuard]  }
];
 
@NgModule({
  declarations: [DisplayEmployeesComponent,OpenEmployeeComponent, FireEmployeeComponent, TransferEmployeeComponent, EditEmployeeComponent, IncrementSalaryComponent, AddEmployeeComponent,
                FilterByX
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],

  providers: [],
})
export class EmployeesModule { } 