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
  text="";
  isDisabled:boolean=true;
  isEnabled:boolean=false;
  cssStringVar: string= 'red size20';
  hasError:boolean =true;
  cssArray:string[]=['green','size20']; 
  num:number =2;
  showMe:boolean=false;
  items= [
    new item(1, 'Mobile'),
    new item(2, 'Laptop'),
    new item(3, 'Desktop'),
    new item(4, 'Printer')
  ]

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

  show(event:any) {
    console.log("Event target="+event.target);
    console.log(event.target.value);
  }  
  
  //keyup event
  displayText(x:any) { 
    console.log(x.target.value);
  //this.text=this.text+x.target.value;
      this.text += x.target.value + ' , '; 
  } 

    //click event -button
    onSave(event:any){    
      console.log("Save button is clicked!"+ event.target);    
    }    

    val="";
    handleInput1(element:any) {
      this.val=element.value;
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
