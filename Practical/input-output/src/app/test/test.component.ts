import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
@Input('parentData') name="";//send data from child to parent 
@Output() public childEvent= new EventEmitter();

fireEvent(){
  this.childEvent.emit("Hi Ganesh");
}
}
