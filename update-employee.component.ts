import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number=0;
  employee: Employee=new Employee();


  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employee=this.employeeService.getEmployee(this.id);
     
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
    
  }

  onSubmit() {
    this.updateEmployee(); 

}
}
