import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelistcomponent',
  templateUrl: './employeelistcomponent.component.html',
  styleUrls: ['./employeelistcomponent.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>=new Observable;

  constructor(private employeeService: EmployeeService) {}
  
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees()
  {
    this.employees=this.employeeService.fetchEmployees();
  }
}
  