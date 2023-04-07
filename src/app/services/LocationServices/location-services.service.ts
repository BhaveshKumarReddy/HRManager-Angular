import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationList } from '../../Models/LocationList';

@Injectable({
  providedIn: 'root'
})
export class LocationServicesService {
  allLocations = [];
  constructor(private http: HttpClient) {
    
  }
  fetchAllLocations():Observable<LocationList[]>{
    return this.http.get<LocationList[]>("https://localhost:44392/api/LocationList");
  }

}
