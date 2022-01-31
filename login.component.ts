import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  submitted = false;
  message!: string;
  hasLoginFailed!: boolean;
 result: boolean = false;
  

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }
  constructor(private employeeService: EmployeeService, private router: Router) { }

  onSubmit() {
    this.submitted = true;
    this.validate();    
  }

  validate() {
    this.result=this.employeeService.validateUser(this.user);
    if(this.result)
    {
      this.router.navigate(['/employees']);
      localStorage.setItem("username", this.user.username);
      sessionStorage.setItem("login","success");
      this.hasLoginFailed=false;
    }
    else{
      this.router.navigate(['/login']);
      this.message="Invalid Credentials....Try again!";
      this.hasLoginFailed=true;
      sessionStorage.setItem("login","failed");
      this.user = new User();
    }
    /*this
    .employeeService.validateEmployee(this.user).subscribe(data => {
   
     
    if(data!=null)
    {
    
    this.router.navigate(['/employees']);
    sessionStorage.setItem("username", this.user.username);
    sessionStorage.setItem("login","success");
    this.hasLoginFailed=false;
    }
    else
    {
    this.router.navigate(['/login']);
    this.message="Invalid Credentials....Try again!";
    this.hasLoginFailed=true;
    sessionStorage.setItem("login","failed");
    //this.user = new User();
    }
    },
   error => console.log(error)
   
   );*/
  }

 
}
