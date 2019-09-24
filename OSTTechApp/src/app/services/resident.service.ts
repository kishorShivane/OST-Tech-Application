import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../models/appSettings';
import { Resident } from '../models/resident';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  public header = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
  constructor(private http: HttpClient) {
  }

  GetAllResidents(): Observable<Resident[]> {
    return this.http.get<Resident[]>(AppSettings.API_URL + AppSettings.GET_ALL_RESIDENTS);
  }

  ValidateResidentNumber(resident:string): Observable<any>
   {
     debugger;
     return this.http.post(AppSettings.API_URL+AppSettings.VALIDATE_AND_INSERT_RESIDENT_NUMBER,resident,{headers:this.header});
   }
}
