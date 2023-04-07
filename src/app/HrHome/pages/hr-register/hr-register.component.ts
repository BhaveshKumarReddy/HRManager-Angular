import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hr } from 'src/app/Models/HrList';
import { LocationList } from 'src/app/Models/LocationList';
import { HrService } from 'src/app/services/HrServices/hr.service';
import { LocationServicesService } from 'src/app/services/LocationServices/location-services.service';

@Component({
  selector: 'app-hr-register',
  templateUrl: './hr-register.component.html',
  styleUrls: ['./hr-register.component.css']
})
export class HrRegisterComponent {

  emailExists:boolean = false;
  allLocations: LocationList[] = [];

  constructor(private locationservice: LocationServicesService,private HrService: HrService, private route: Router){

    this.locationservice.fetchAllLocations().subscribe(
      data => {
        this.allLocations = data;
      }
    );

  }

  Register(newHr: Hr){
    this.checkEmailExists(newHr.hrEmail);
    if(!this.emailExists){
    console.log(newHr);
    this.HrService.addHR(newHr).subscribe(
      data => {
        this.emailExists = false;
        localStorage.setItem("user",JSON.stringify(data));
        localStorage.setItem("token","loggedin");
        this.route.navigateByUrl("/Home");
      }
    );
    }
    else{
      console.log("email exists");
      this.emailExists = true;
    }
  }

  checkEmailExists(email:string){
    this.HrService.getHR(email).subscribe(data => {
      this.emailExists = true;
    },
    error => this.emailExists = false
    );
  }
}