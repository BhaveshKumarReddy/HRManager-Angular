import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-logout',
  templateUrl: './hr-logout.component.html',
  styleUrls: ['./hr-logout.component.css']
})
export class HrLogoutComponent {

  constructor(private route: Router){}

  Logout(){
    console.log('logging out');
    localStorage.clear();
    this.route.navigateByUrl("/Login");
  }
}

// localStorage.setItem("token","loggedout");
// localStorage.removeItem("user");