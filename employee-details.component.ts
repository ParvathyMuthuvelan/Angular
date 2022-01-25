import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number=0;
  employee: Employee=new Employee();

  constructor(private route: ActivatedRoute,private router: Router,private employeeService: EmployeeService) { }
//details/1
  ngOnInit() {
    this.employee = new Employee();
//ActivatedRoute to retrieve the parameter value from the path
    this.id = this.route.snapshot.params['id'];
    
    this.employee=this.employeeService.getEmployee(this.id);
      
  }

  list(){
    this.router.navigate(['employees']);
  }
}

