import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  @Input() sname : string;
  @Output() stu = new EventEmitter<string>();

  n1 : number=10;
  n2 : number=10;
  add(){
    return this.n1+this.n2;
  }
  addStudent(s: string){
    this.stu.emit(s)
  }
}
