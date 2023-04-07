import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hr } from 'src/app/Models/HrList';
import { HrService } from 'src/app/services/HrServices/hr.service';

@Component({
  selector: 'app-hr-edit',
  templateUrl: './hr-edit.component.html',
  styleUrls: ['./hr-edit.component.css']
})
export class HrEditComponent {

  current_HR : Hr = {
    hrEmail : "", hrId : 0, hrName : "", hrPassword : "", locationId : ""
  }

  constructor(private HrService: HrService, private route:Router){
    var user_email = (JSON.parse(localStorage.getItem("user")+"")).hrEmail;
    this.HrService.getHR(user_email).subscribe(
      data => {
        this.current_HR = data;
      }
    );
  }

  Edit(){
    this.HrService.editHR(this.current_HR).subscribe(
      data => {
        window.alert("Successfully updated");
        localStorage.setItem("user",JSON.stringify(this.current_HR));
        localStorage.setItem("token","loggedin");
        this.route.navigateByUrl("/Home");
      },
      error => console.log(error)
    )
  }

}
