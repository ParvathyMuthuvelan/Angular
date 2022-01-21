import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularProject';
  name= "Sai";
  clickCount=0;
  
  isDisabled:boolean=true;
  isEnabled:boolean=false;
  cssStringVar: string= 'red size20';
  hasError:boolean =true;
  cssArray:string[]=['green','size20']; 

  getTitle():string
  {
    return this.title
  }

  getClass() {
    return 'green';
  }
  isError()
  {
    return true;
  }

  clickMe() {
    this.clickCount++;
  }

}
