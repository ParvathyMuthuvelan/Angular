import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  userForm!: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })  
  }
  
  get getControl(){
    return this.userForm?.controls;
  }
  
  onSubmit(){
    console.log(this.userForm);
  }

}