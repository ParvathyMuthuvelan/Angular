import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}   from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url:string="/assets/data/employees.json";

 // employee: Employee=new Employee();
 employee={  
    "id": 1,  
    "name": "Jack",  
    "email": "jack@gmail.com",  
    "gender": "male"  
  }
    constructor(private http: HttpClient) {
      
     } // injecting http object into service class
     fetchEmployees(): Observable<any> {
      return this.http.get(this.url);
    }
    deleteEmployee(id:number):void
    {
   //to send http delete request
    }
    getEmployee(id:number):Employee
    {
   //to send http get request
  
   return this.employee;
    }
}
