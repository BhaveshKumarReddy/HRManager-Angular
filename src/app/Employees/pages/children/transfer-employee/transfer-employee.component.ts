import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/EmployeeList';
import { LocationList } from 'src/app/Models/LocationList';
import { EmployeeService } from 'src/app/services/EmployeeServices/employee.service';
import { LocationServicesService } from 'src/app/services/LocationServices/location-services.service';

@Component({
  selector: 'app-transfer-employee',
  templateUrl: './transfer-employee.component.html',
  styleUrls: ['./transfer-employee.component.css']
})
export class TransferEmployeeComponent {

  allLocations: LocationList[] = [];
  currentLocationId:string; 

  @Input() employee:Employee= { 
    employeeId:0,employeeName:"",employeeRole:"",employeePoints:0,employeeSalary:0,employeeDoj: new Date(),employeeAppraisalDate : new Date(),locationId:''
  };

  constructor(private empService: EmployeeService, private locationservice: LocationServicesService, private route: Router){
    this.currentLocationId = JSON.parse(localStorage.getItem("user")+"").locationId;
    this.locationservice.fetchAllLocations().subscribe(
      data => {
        this.allLocations = data;
      },
      error => console.log('Fetching locations error in Transfer Component')
    );

  }

  transferEmployee(e:any){
    this.employee.locationId = e.locationId;
    this.empService.transferEmployee(this.employee).subscribe(
      data => this.route.navigateByUrl("/employee/display")
      ,
      error => console.log(error)
    )
  }
  
}
