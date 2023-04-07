import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/Models/EmployeeList';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string = "https://localhost:44392/api/EmployeesList/";

  constructor(private http: HttpClient) { }

  getEmployees(){
    var x = localStorage.getItem("user");
    return this.http.get<Employee[]>(this.url+(JSON.parse(x+"")).locationId);
  } 

  getEmployeeByID(id:number){
    return this.http.get<Employee>(this.url+"getEmployeeByID/"+id);
  }

  addEmployee(employee:Employee){
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(employee);
    return this.http.post(this.url, body, {'headers':headers});
  }

  editEmployee(employee:Employee){
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(employee);
    return this.http.put(this.url+"edit_Employee", body, {'headers':headers});
  }

  incrementSalary(employee:Employee){
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(employee);
    return this.http.put(this.url+"increment_Salary/id/", body, {'headers':headers});
  }

  transferEmployee(employee:Employee){
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(employee);
    return this.http.put(this.url+"transfer_Employee/"+employee.employeeId+"/"+employee.locationId, body, {'headers':headers});
  }

  fireEmployee(id:number){
    return this.http.delete(this.url+"fire_Employee/"+id);
  }

}
