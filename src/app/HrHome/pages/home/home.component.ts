import { Component } from '@angular/core';
import { LocationList } from 'src/app/Models/LocationList';
import { LocationServicesService } from 'src/app/services/LocationServices/location-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  allLocations:LocationList[] = [];
  local:any;
  current_location:string="";

  constructor(private locationservice: LocationServicesService){

    this.local = localStorage;

    this.locationservice.fetchAllLocations().subscribe(data => 
      {
        this.allLocations = data;
        if(localStorage.getItem("token")=="loggedin"){
          var user = JSON.parse(localStorage.getItem("user")+"");
          this.current_location = this.allLocations.find(location => location.locationId==user.locationId)?.locationName+"";
        }
      }
    , error => console.log(error+"fetch error")
    );
  }

}

