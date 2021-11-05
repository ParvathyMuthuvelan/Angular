import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first angular ';
  name="Sai";
  isDisabled=true;
  isEnabled=false;
  items= [
    new item(1, 'Mobile'),
    new item(2, 'Laptop'),
    new item(3, 'Desktop'),
    new item(4, 'Printer')
  ]
  getTitle(): string {
    return this.title;
}

max(first: number, second: number): number {
  return Math.max(first, second);
}



}
export class item {
  code:number
  itemName:string
  
  constructor(code:number,itemName:string) {
    this.code=code;
    this.itemName=itemName
  }
  

}