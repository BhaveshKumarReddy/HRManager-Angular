import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/EmployeeList';
import { LocationList } from 'src/app/Models/LocationList';
import { EmployeeService } from 'src/app/services/EmployeeServices/employee.service';
import { LocationServicesService } from 'src/app/services/LocationServices/location-services.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  currentDate: string = new Date().toISOString().slice(0, 10);
  place:string = "Chennai";
  currentLocation:LocationList = {
    locationId : '', locationName : ''
  };

  constructor(private locationservice: LocationServicesService, private empService: EmployeeService, private route: Router){
    this.locationservice.fetchAllLocations().subscribe(data => 
      {
        var user = JSON.parse(localStorage.getItem("user")+"");
        this.currentLocation = data.filter(location => location.locationId==user.locationId)[0];
      }
    , error => console.log(error+"fetcheing locations error")
    );
  }

  addEmployee(newEmployee:Employee){
    newEmployee.locationId = this.currentLocation.locationId;
    this.empService.addEmployee(newEmployee).subscribe(
      data => {
        this.route.navigateByUrl("/employee/display");
      }
    );
  }

}
