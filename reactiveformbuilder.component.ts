import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveformbuilder',
  templateUrl: './reactiveformbuilder.component.html',
  styleUrls: ['./reactiveformbuilder.component.css']
})
export class ReactiveformbuilderComponent implements OnInit {


  ngOnInit(): void {
  }
  userForm: FormGroup;
  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];
  user: User = {
    firstName: 'New',
    lastName: 'User',
    role: 'Guest',
    notes: ''
  };
  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      'firstName': [this.user.firstName, [Validators.required]],
      'lastName': [this.user.lastName, [Validators.required]],
      'role': [this.user.role, [Validators.required]],
      'notes': [this.user.notes]
    });
  }
  logFormValue()
  {
    console.log(this.userForm.value)
  }
}
