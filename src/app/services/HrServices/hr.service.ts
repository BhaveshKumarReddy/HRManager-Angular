import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Hr } from 'src/app/Models/HrList';

@Injectable({
  providedIn: 'root'
})
export class HrService {
  
  url:string = "https://localhost:44392/api/HrList/";

  constructor(private http: HttpClient) { }

  getHR(email:string){
    return this.http.get<Hr>(this.url+email).pipe(
       catchError( error => {
           return throwError(error);
      })
    );
  } 

  addHR(HR:Hr){
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(HR);
    return this.http.post<Hr>(this.url, body, {'headers':headers});
  }

  editHR(HR:Hr){
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(HR);
    return this.http.put<Hr>(this.url, body, {'headers':headers});
  }

}
