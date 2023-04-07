import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Hr } from 'src/app/Models/HrList';
import { HrService } from 'src/app/services/HrServices/hr.service';
import * as $ from 'jquery'
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { error } from 'jquery';

@Component({
  selector: 'app-hr-login',
  templateUrl: './hr-login.component.html',
  styleUrls: ['./hr-login.component.css']
})
export class HrLoginComponent implements OnInit{

  loginForm:FormGroup;
  emailNotFound:boolean = false;
  pwdError:boolean = false;

  constructor(private fb:FormBuilder, private hrService:HrService, private route: Router){

   this.loginForm = this.fb.group({
    email : ["", [Validators.minLength(5),Validators.maxLength(29),Validators.required,Validators.email],
            //[checkEmailAvailable(this.hrService)]
          ],
    password : ["",[Validators.minLength(6),Validators.maxLength(29),Validators.required]]
   });

  }

  Login(){
      this.hrService.getHR(this.loginForm.get('email')?.value).subscribe(
        data => {
          if(data != null && data.hrPassword == this.loginForm.get('password')?.value){
            console.log("Verified");
            localStorage.setItem("user",JSON.stringify(data));
            localStorage.setItem("token","loggedin");
            this.route.navigateByUrl("/Home");
          }
          else{
            this.pwdError = true;
          }
        },
        error => {
          if(error.status == 404){
            this.emailNotFound = true;
          }
        }
      );
    }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  ngOnInit(){
    
      $("#loginForm-id").keydown(function (event) {
        var keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            event.preventDefault();
            return false;
        }
        return true;
    });
  }
}

export function checkEmailAvailable(hrService: HrService): AsyncValidatorFn {

  return (control:AbstractControl) => {

      return hrService.getHR(control.value).pipe(
        map(hr => {
          if(hr)
          {
            console.log(hr);
            return null;
          }
          else{
            return {emailNotFound:true};
          }
        }
      ));
  }

}

  // implements OnInit 
  // emailNotFound:boolean = false;
  // pwdError:boolean = false;

  // constructor(private HrService: HrService, private route: Router){
  // }

  // ngOnInit(){
    
  //   $("#loginForm-id").keydown(function (event) {
  //     var keyPressed = event.keyCode || event.which;
  //     if (keyPressed === 13) {
  //         event.preventDefault();
  //         return false;
  //     }
  //     return true;
  // });

  // }

  // Login(hrDetails:Hr){
  //   this.HrService.getHR(hrDetails.hrEmail).subscribe(
  //     data => {
  //       console.log(data);
  //       if(data != null && data.hrPassword == hrDetails.hrPassword){
  //         console.log("Verified");
  //         localStorage.setItem("user",JSON.stringify(data));
  //         localStorage.setItem("token","loggedin");
  //         this.route.navigateByUrl("/Home");
  //       }
  //       else{
  //         this.pwdError = true;
  //       }
  //     },
  //     error => {
  //       if(error.status == 404){
  //         this.emailNotFound = true;
  //       }
  //     }
  //   );
  // }

  // var x = localStorage.getItem("user");
  // console.log(JSON.parse(x+""));
  // resetEmailError(){
  //   this.emailNotFound = false;
  // }

  // resetPwdError(){
  //   this.pwdError = false;
  // }


