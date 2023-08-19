import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component {
name : string="abc";
stuName:string;

getstu(stu: any){
  this.stuName=stu;
}
}
