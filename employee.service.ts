import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import {HttpClient, HttpClientModule}   from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url:string="/assets/data/employees.json";


  constructor(private http: HttpClient) { }

  fetchEmployees(): Observable<any> {
    return this.http.get(this.url);
  }
}
