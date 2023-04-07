import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/EmployeeList';
import { EmployeeService } from 'src/app/services/EmployeeServices/employee.service';
import { LocationServicesService } from 'src/app/services/LocationServices/location-services.service';

@Component({
    templateUrl: './open-employee.component.html',
    styleUrls: ['./open-employee.component.css']
})
export class OpenEmployeeComponent 
{
    employeeID:number;
    currentEmployee:Employee={
        employeeId:0,employeeName:"",employeeRole:"",employeePoints:0,employeeSalary:0,employeeDoj: new Date(),employeeAppraisalDate : new Date(),locationId:''
    };
    eligibleForIncrement:boolean = false;
    tabID:number=0;

    constructor(private empService: EmployeeService, private locationservice: LocationServicesService, private route: ActivatedRoute, private router: Router){
        this.employeeID = parseInt(this.route.snapshot.paramMap.get("id")+"");
    }

    ngOnInit(){
        this.empService.getEmployeeByID(this.employeeID).subscribe(
            data => {
                this.currentEmployee = data;
                if(new Date(this.currentEmployee.employeeAppraisalDate).getTime() <= new Date().getTime()){
                    this.eligibleForIncrement = true;
                }
            },
            error => {
                console.log(error);
            }
        );
    }

    FireEmployee(){
        console.log('fire open');
    }
}