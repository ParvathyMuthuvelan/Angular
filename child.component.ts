import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item = '';
  
  constructor() { }
 
  @Output() newItemEvent = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

}
