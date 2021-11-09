import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tddform',
  templateUrl: './tddform.component.html',
  styleUrls: ['./tddform.component.css']
})
export class TddformComponent  {

  
  model = new User();

  hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking'
  ];

  constructor() { }

 
 
  onSubmit(form:any) {
    console.log(form.value)
  }
}
 
export class User {
  public name: string="";
  public email: string="";
  public password: string="";
  public hobbies: string[]=[];
}
 

