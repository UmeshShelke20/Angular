import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
@Output() public updatestdata= new EventEmitter()
@Input() public data:Student[]=[];
@Output() public deletestdata= new EventEmitter()
updatedata(s:Student){
console.log(s.name);
this.updatestdata.emit(s)
}
deletdata(s:Student){
console.log(s.id);
this.deletestdata.emit(s)
}
}
