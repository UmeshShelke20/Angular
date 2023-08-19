import { Component,EventEmitter,Input, Output,OnInit } from '@angular/core';
import { SchoolClass } from 'src/app/model/school-class';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
ngOnInit(): void {
  window.location.reload;
}
@Output() public updatestdata= new EventEmitter()
@Input() public data:SchoolClass[]=[];
@Output() public deletestdata= new EventEmitter()
@Output() public addstudent= new EventEmitter()
updatedata(s:Student){
console.log(s.name);
this.updatestdata.emit(s)
}
deletdata(s:Student){
console.log(s);
this.deletestdata.emit(s)

}
addstudata(ss:SchoolClass){
//console.log(ss.students);
this.addstudent.emit(ss);
}
}
