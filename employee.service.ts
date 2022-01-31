import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule}   from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  result: boolean = false;
  private baseUrl = 'http://localhost:8080/api/v1';
  validateUser(user: User): boolean {
    
   if((user.username=="admin") && (user.password=='admin@123') )
   this.result=true;
     return this.result;
  }

 

  constructor(private http: HttpClient) { }

  validateEmployee(user: Object): Observable<Object> {
    //alert("in service"+user);
    return this.http.post(`${this.baseUrl}/loginUser`, user);
    
  }
 
  getEmployees(): Observable<any> {
    //console.log(this.http.get(`${this.baseUrl}`+'/getAllEmployees'));
    return this.http.get(`${this.baseUrl}`+'/getAllEmployees');
  }
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getEmployee/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/saveEmployee', employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateEmployee/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteEmployee/${id}`, { responseType: 'text' });
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username")
    if (user === null) return false
    return true
}
logout() {
  sessionStorage.removeItem("username");
  sessionStorage.setItem("login","failed");
  
}
getLoginStatus()
{
  const loginStatus=sessionStorage.getItem("login");
  return loginStatus;
}
}
