import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/EmployeeList';
import { EmployeeService } from 'src/app/services/EmployeeServices/employee.service';

@Component({
  selector: 'app-fire-employee',
  templateUrl: './fire-employee.component.html',
  styleUrls: ['./fire-employee.component.css']
})
export class FireEmployeeComponent {

  constructor(private empService: EmployeeService, private route: Router){}

  @Input() employee:Employee= { 
    employeeId:0,employeeName:"",employeeRole:"",employeePoints:0,employeeSalary:0,employeeDoj: new Date(),employeeAppraisalDate : new Date(),locationId:''
  };

  FireEmployee(){
    this.empService.fireEmployee(this.employee.employeeId).subscribe(
      data => {
        console.log('Deleted');
        this.route.navigateByUrl("/employee/display");
      },
      error => console.log(error)
    )
  }

}
