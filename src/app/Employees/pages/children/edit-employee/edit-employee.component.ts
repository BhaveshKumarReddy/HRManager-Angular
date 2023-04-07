import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/EmployeeList';
import { EmployeeService } from 'src/app/services/EmployeeServices/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  @Input('employeeLocationId') currentLocationId:string='';

  @Input('employee') currentEmployee:Employee={
    employeeId:0,employeeName:"",employeeRole:"",employeePoints:0,employeeSalary:0,employeeDoj: new Date(),employeeAppraisalDate : new Date(),locationId:''
  };

  @Output() closetab = new EventEmitter();

  currentDate: string = new Date().toISOString().slice(0, 10);
  
  constructor(private empService: EmployeeService, private route: Router){
    //this.currentLocationId = JSON.parse(localStorage.getItem("user")+"").locationId;
  }

  editEmployee(){
    this.empService.editEmployee(this.currentEmployee).subscribe(
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
