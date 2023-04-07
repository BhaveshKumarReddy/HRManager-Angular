import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/EmployeeList';
import { LocationList } from 'src/app/Models/LocationList';
import { EmployeeService } from 'src/app/services/EmployeeServices/employee.service';
import { LocationServicesService } from 'src/app/services/LocationServices/location-services.service';
 
@Component({
    templateUrl: './display-employees.component.html',
    styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent
{
    allEmployees:Employee[] = [];
    allLocations:LocationList[] = [];
    currentLocation:string="";
    selectRadio:string="";
    searchValue:string="";

    constructor(private empService: EmployeeService, private locationservice: LocationServicesService, private route: Router){
        this.empService.getEmployees().subscribe(data =>
            {
                 this.allEmployees = data;
            }
            , error => console.log(error+"fetching employees error")
        );
        this.locationservice.fetchAllLocations().subscribe(data => 
            {
              this.allLocations = data;
              var user = JSON.parse(localStorage.getItem("user")+"");
              this.currentLocation = this.allLocations.find(location => location.locationId==user.locationId)?.locationName+"";
            }
          , error => console.log(error+"fetcheing locations error")
          );
    }

    openByID(id:number){
        this.route.navigate(["employee/open",id]);
    }

}