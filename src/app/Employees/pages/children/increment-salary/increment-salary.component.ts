import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/EmployeeList';
import { EmployeeService } from 'src/app/services/EmployeeServices/employee.service';

@Component({
  selector: 'app-increment-salary',
  templateUrl: './increment-salary.component.html',
  styleUrls: ['./increment-salary.component.css']
})
export class IncrementSalaryComponent {

  constructor(private empService: EmployeeService, private route: Router){}

  @Input() employee:Employee= { 
    employeeId:0,employeeName:"",employeeRole:"",employeePoints:0,employeeSalary:0,employeeDoj: new Date(),employeeAppraisalDate : new Date(),locationId:''
  };

  @Output() closetab = new EventEmitter();

  incrementSalary(){
    this.empService.incrementSalary(this.employee).subscribe(
      data => {
        this.closetab.emit(0);
        location.reload();
        window.scrollTo(0, 0);
      }
      ,
      error => console.log(error)
    )
  }

}
